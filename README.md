# My-CSS
CSS笔记

----------
* text-align应用于块级元素，left、right、center会导致元素中的文本分别左对齐、右对齐和居中。

* 一个块状元素不设置宽度高度也没有内容，如果要为元素设置背景颜色的话，就将块状元素设置为position:absolute;top:0;left:0;width:100%;height:100%；设置元素位置为绝对定位，位置和宽度、高度。

* Line-height文本极限之间的距离，而不是字体的大小，它确定了将各个元素框的高度增加或减少多少。Line-height和字体大小之间的差就是行间距。 导航栏中设置line-height与导航栏宽度一致可以在改变鼠标移入导航栏时，导航栏的CSS状态改变宽度范围一致。

* 内容竖直排列，块级元素会自动下一行排列，内联元素可以设置为display:block;变成块状元素后竖直排列；设置为同一个方向浮动，但是浮动后面的内容会填补多余的内容区，导致排列混乱；利用自定义列表，列表内容自动竖直排列。

* 在页面设计中，先不要设置页面高度，这样可以留足内容扩展后所需要的高度。

* 可以利用border-radius来制作简单圆形。

* absolute的特性包裹性、破坏性。

* 不受relative限制的absolute，行为表现上不使用top、right、bottom、left任何一个属性或使用auto作为值。设置为absolute定位后用margin来调节位置，无依赖的绝对定位。

* 动画尽量作用在绝对定位元素上。

* 绝对定位元素会脱离文档流，后面的会位于前者之上，两者相遇，后者能覆盖前者。

* 绝对定位元素z-index无依赖，如果只有一个绝对定位元素，自然不需要z-index，自动覆盖普通元素；如果两个绝对定位，控制DOM流的前后顺序达到需要的覆盖效果，依然无z-index；如果多个绝对定位交错，非常少见，z-index：1控制；如果非弹框类绝对定位元素z-index>2，必定z-index冗余，请优化。

* 绝对定位方向是对立的（如：left vs right,top vs bottom）的时候，结果不是瞬时位移，而是身体的爆裂拉伸。也就是说，很多情况下，absolute的拉伸和width/height是可以相互替代的。（IE7+支持）

* float的设计初衷是：为了文字环绕效果。

* 浮动具有破坏性，会让父元素高度塌陷。当浮动作用于图片后，图片的inline boxes被破坏，inline boxes高度线丢失，无法与文字这类inline boxes同行排列，于是图片从inline boxes链上脱离出来，受自身方向属性的影响，靠左显示，由于其“包裹性”，宽度实体依旧存在，加之与文字处于同一文档流中，文字不会与图片位置重叠，加上图片没有inline boxes，高度丢失，所以文字居顶显示形成新的inline boxes高度包络线。

* 清除浮动。

* line-height，行高，两行文字基线之间的距离。

* 所有内联元素的样式表现都与行内框盒子模型有关。（内容区域、内联盒子、行框盒子、包含盒子）内联元素的高度是由行高决定的。

* 18高度的表现不是行高，而是内容区域和行间距。内容区域高度+行间距=行高，行高决定内联盒子高度，行间距墙头草，可大可小（甚至负值），保证高度正好等同于行高。

* 图片在文字中，图片的底边基线与文字基线对齐，所以看着上边空余和下边行高空余。

* margin与可视尺寸（clientWidth），适用于没有设定width、height的普通block水平元素，只适用于水平方向尺寸。

* Margin与占据尺寸，block、inline-block水平元素均适用，与有没有设定width、height无关，适用于水平方向和垂直方向。滚动容器上下留白，要用margin值，padding值不会产生滚动留白。

* Margin与百分比单位，普通元素的百分比margin都是相对于容器宽度计算的。绝对定位元素的百分比margin是相对于第一个定位祖先元素（relative、absolute、fixed）的宽度计算的。

* Margin元素没有设置width或height，也会自动填充容器。当设置元素宽度后，再设置元素margin属性左右为auto，元素将会居中显示。

* Margin重叠block水平元素，只发生在垂直方向，margin重叠的计算规则是：正正取大值，正负值相加，负负最负值。

* Margin无效的情况：一、inline水平元素的垂直margin无效；二、margin重叠可能会导致margin值看似无效的情况；三、display：table-cell/display：table-row等声明的margin无效；四、绝对定位元素非定位方向（非定位方向就是未设置定位值的方向）的margin值“无效”；六、内联元素inline导致的margin失效。

* relative从以下限制absolute，限制left、top、right、bottom定位；限制z-index层级；限制超越overflow。

* Relative定位是相对于自身的，定位偏移量是从自身当前位置为基准。Relative定位无侵入，relative定位不会影响其他元素。

* 在相对定位top/bottom和left/right对立属性同时存在时，以top和left为准，矛盾时以这两个属性为准。

* Relative的最小化影响原则，指的是尽量降低relative属性对其他元素或布局的潜在影响。①尽量避免使用relative，absolute定位不依赖relative。②relative最小化，减少relative影响的元素数量。

* z-index属性制定了元素及其子元素的“Z顺序”，而“Z顺序”可以决定当元素发生覆盖的时候，哪个元素在上面。通常一个较大z-index值得元素会覆盖较低的那一个。

* Z-index数值有auto、整数值和inherit（继承）。基本特性：支持负值；支持CSS3 animation动画；在CSS 2.1时代，需要和定位元素配合使用。

* 如果不考虑CSS3，只有定位元素（relative、absolute、fixed、sticky）才能让z-index有作用。

* * 后来居上，后面的位置重叠时会覆盖前面的。
	* 哪个大，哪个上。

* 如果定位元素z-index发生嵌套：祖先优先原则，前提是z-index是数值，不是auto。

* 层叠上下文是HTML元素中的一个三维概念，表示元素在Z轴上离人更近了（相当于在更上面）。层叠水平，层叠上下文的每个元素都有一个层叠水平，决定了同一个层叠上下文中元素在Z轴上的显示顺序，遵循“后来居上”和“谁大谁上”的层叠准则。层叠水平和z-index不是一个东西，普通元素也有层叠水平。

* 层叠上下文可以嵌套，组合成一个分层次的层叠上下文；每个层叠上下文和兄弟元素独立：当进行层叠变化或渲染的时候，只需要考虑后代元素；每个层叠上下文是自成体系的：当元素的内容被层叠后，整个元素被认为是在父层的层叠顺序中。
 
* 层叠顺序，元素发生层叠时候有着特定的垂直显示顺序，七阶层叠顺序。

* `<link rel="icon" type="image/ico" href="http://wickedlysmart.com/favicon.ico">``<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />`是为了指定浏览器标签地址栏的图片，利用图标工具（有很多）制作图标文件（favicon.ico）上传到网站所在的服务器的根目录下，这个文件必须是16*16大小的图标文件,如果想要收藏夹中的图标也要改变的话，那么就加上这句：`<link rel="Bookmark" href="favicon.ico" />`这个图标还可以使用png格式

* 