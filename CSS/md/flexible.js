;(function(win, lib) {
    var doc = win.document; 
    var docEl = doc.documentElement; // html元素
    var metaEl = doc.querySelector('meta[name="viewport"]'); // 视口meta
    var flexibleEl = doc.querySelector('meta[name="flexible"]'); // flexible meta
    var dpr = 0; // 设备像素比
    var scale = 0; // 缩放比例
    var tid;
    var flexible = lib.flexible || (lib.flexible = {}); // lib是window的一个属性，lib作为全局变量可以在全局调用
    // 如果设置了metaEl和flexibleEl，那么就使用设置的数值为dpr、scale
    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        // 如果已有的meta标签设置了initial-scale（页面初始缩放值）属性
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }
    // 如果没有初始设置viewport、flexible的meta，则根据设备的设备像素比进行dpr和scale的设置
    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio; // 设备像素比
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        // 缩放比
        scale = 1 / dpr;
    }
    // 给HTML标签设置data-dpr属性，可供CSS选择器使用，主要是用于根据不同data-dpr来设置字体大小
    docEl.setAttribute('data-dpr', dpr);
    // 如果没有视口meta，则创建一个新的
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            // 将meta插入head标签
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }
    // 设置HTML标签的font-size，即1rem的值
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width; // HTML元素宽度值
        // 这个540是个经验值，
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        // 屏幕宽度除以10作为rem值（模拟vw/vh实现）
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem; // 将rem传到全局
    }
    // 浏览器重置事件
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300); // 利用setTimeOut节流，事件发生之后300ms才会调用refreshRem函数
    }, false);
    // onpageshow 事件在每次加载页面时触发
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    // body上设置12 * dpr的font-size值，为了重置页面中的字体默认值，不然没有设置font-size的元素会继承html上的font-size，变得很大
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }
    

    refreshRem();
    // flexible对象会通过全局属性lib传递出去供全局使用
    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {})); // 传入window对象和window.lib属性，window.lib属性不存在则初始化一个空对象作为window.lib