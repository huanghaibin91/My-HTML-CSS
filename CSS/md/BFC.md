# 块级格式化上下文（BFC） #


----------

BFC的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素（比如BFC中元素浮动就不会浮动到BFC之外，），并且BFC 具有普通容器没有的一些特性，例如可以包含浮动元素，清除浮动的方法（如 overflow 方法）就是触发了浮动元素的父元素的BFC ，使到它可以包含浮动元素，从而防止出现高度塌陷的问题。

**触发BFC的条件**

满足下面任一条件的元素，会触发为BFC：

- 根元素；
- 浮动元素，float除none以外的值；
- 绝对定位元素，position（absolute，fixed）；
- display为以下其中之一的值inline-block，table-cell，table-caption，flex，inline-flex；
- overflow除了visible以外的值（hidden，auto，scroll）；

**BFC区域效果**

- 内部的Box会在垂直方向上一个接一个的放置（块级格式化上下文中的常规流）；
- 属于同一个BFC的两个相邻Box垂直方向的margin会发生重叠；
- 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）；
- BFC的区域不会与float的元素区域重叠；
- 计算BFC的高度时，浮动子元素也参与计算；
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然；

BFC的一个最重要的效果是，让处于BFC内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。这是利用BFC清除浮动所利用的特性。

因为BFC内部的元素和外部的元素绝对不会互相影响，因此，当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。

[demo地址](https://github.com/huanghaibin91/My-HTML-CSS/blob/master/CSS/html/BFC.html)
