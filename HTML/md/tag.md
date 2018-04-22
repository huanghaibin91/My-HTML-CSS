# HTML标签 #


----------

HTML标签知识备忘录：

- `<!DOCTYPE>` ，用来告知Web浏览器页面使用了哪种HTML版本；

- `<a>`，a标签download属性指定下载URL，target指定何处打开链接文档，还利用其它标签的id进行页面内锚点跳转；

- 标签自定义属性`data-*`，属性名应为小写，因为HTML标签不区分大小写；

- 在`<button>`元素内部，可以放置内容，比如文本或图像。button默认type是submit，所以表单中使用button不设置type也会提交表单，所以可以设置type或使用input取消默认提交行为；

- HTML5中`<html>`元素新增一个属性，`manifest`属性规定文档的缓存`manifest`的位置，参数属性指向一个manifest的文件（此文件`.appcahce`后缀），这个文件指明了当前页面哪些资源需要进行离线缓存。 Manifest有大小限制，它其实也算本地存储，本地存储一般每个域有限制使用的空间，PC Chrome是5M，Manifest文件如`home.appcahce`不能跨域，如果跨域需要支持CORS。Manifest Cache的资源不能跨域，同样如果跨域该资源需要支持CORS，一般浏览器会自动处理；

- `<blockquote>`元素最好包含一个块级子元素；

- `<pre>`标签可定义预格式化的文本，被包围在`<pre>`标签元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。pre元素是块级元素，但是只能包含文本或行内元素。也就是说，任何块级元素（常见为可以导致段落断开的标签）都不能位于pre元素中；

- `<map>`标签用于客户端图像映射，图像映射指带有可点击区域的一幅图像：

		<img src="demo.png" alt="Planets" usemap="#planetmap" />
		// map需定义name属性提供给img使用
		<map name="planetmap">
			<area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
			<area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
		</map>






