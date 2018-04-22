# 盒子模型 #


----------

**CSS盒模型 (Box Model) 规定了元素框处理元素内容、内边距、边框和外边距的方式。**

**W3C盒模型**

![W3C盒模型](https://raw.githubusercontent.com/huanghaibin91/My-HTML-CSS/master/CSS/image/w3c-box.jpg)

**IE盒模型（IE8及其以下）**

![IE盒模型](https://raw.githubusercontent.com/huanghaibin91/My-HTML-CSS/master/CSS/image/ie-box.jpg)

**盒模型元素**

- 包含块，后代盒子的大小和位置会根据他包含块的矩形边框进行计算。但是不会受到包含块的限制，可能会溢出：
	- 对于根元素、定位fixed的元素，包含块都是视窗；
	- 元素定位relative或者static，包含块是他最近的块级框、表单元格或行内块祖先框的内容边界；
	- 元素定位absolute，包含块是最近的非static的祖先元素：
		- 祖先元素是块级元素，包含块设置为该元素的内边距边界；
		- 祖先元素是行内元素，包含块设置为该元素的内容边界；
		
- `margin`，外边距：
	- margin设置为百分比时是根据元素的包含块的width来计算；
	- 内联元素(display: inline)不能设置margin-top和margin-bottom；
	- 合并外边距：
		- 水平的margin不会合并；
		- 都属于常规流内块级盒，处于同一个上下文的兄弟元素垂直方向外边距发生合并；
		- 块级父元素和其子元素，在没有padding，border，height，空隙将之隔开时，子元素的margin会渗透到父元素上；
	- 负外边距：
		- 对于定位static元素，负值相当于将元素向负值方向移动覆盖，但是只会覆盖颜色，不会覆盖文字；
		- 对于定位relative元素， 负值还是会把下面的元素粘着一起移动，但会完全覆盖前一个元素；
		- 对于定位absolute元素，因为元素脱离了文档流，所以负值只会自己发生偏移，对前后元素没有任何影响；
		- 对于float元素，可以通过负值进行覆盖，最常见的应用是三栏应用；
		
- `padding`，内边距：
	- padding设置为百分比时是根据元素的包含块(containing-block)的width来计算；
	- 内联元素(display: inline)的padding生效，但是top和bottom并不会推挤，只会覆盖其他元素，覆盖情况遵循z-index原则；
	- 不允许负值；
	
- `border`，边框：
	- 只有px,不支持百分比；
	- inline元素边框左右不合并，上下会合并。inline-block和block元素四个方向都不会合；
	
- `width`和`height`：
	- 内联元素不能设置width和height；
	- 非内联元素设置百分比：根据包含块的content-box宽度计算，果当前元素是绝对定位，那么相对父元素的padding-box的宽度定位；

**改变元素盒模型**

可以通过定义CSS属性来改变元素的盒模型：

- `display`，[display解析]()；

- `box-sizing: content-box || border-box || inherit（从父元素继承）;`，IE8及其以上支持，box-sizing的值会作为width、height的计算范围，默认值为content-box；

- 在不支持`box-sizing`属性的浏览器，可以使用宽度分离的方法来保证元素盒子宽度；

		.container { // 设置一个包裹元素来包裹box元素，box的宽度会被container约束
			width: 200px;
		}

		.container .box { // 不设置box宽度，不论如何改变box盒子内外边距边框宽度，box都会被container约束，保证box的宽度不变
			padding: 10px;
			margin: 10px;
		}