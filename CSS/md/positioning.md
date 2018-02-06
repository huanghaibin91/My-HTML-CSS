# 定位 #


----------

CSS会根据元素的盒类型和上下文对这些元素进行定位，盒就是定位的基本单位。定位时，有三种定位方案，分别是常规流，浮动以及绝对定位。

**常规流**

position为static或relative，并且float为none时会触发常规流。

常规流特点：

- 在常规流中，盒一个接着一个排列;
- 在块级格式化上下文里面， 它们竖着排列；
- 在行内格式化上下文里面， 它们横着排列;
- 对于静态定位，position: static，盒的位置是常规流布局里的位置；
- 对于相对定位，position: relative，盒偏移位置由这些属性定top，bottom，leftandright。即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置；

**浮动**

float不为none时触发。

浮动特点：

**绝对定位**

position为absolute或fixed时触发。

绝对定位特点：

- 绝对定位方案，盒从常规流中被移除，它的位置可以被其它元素占据，不影响常规流的布局；
- 它的定位相对于它的包含块，相关CSS属性：top，bottom，left及right；
- 对于position: absolute，元素定位将相对于最近的一个relative、fixed或absolute的父元素，如果没有则相对于body；
- 对于position: fixed，元素相对于浏览器窗口定位；
