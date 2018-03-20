# 引入样式表 #


----------

CSS可以通过两种方式引入外部样式表。

**link**

link元素作为head的子元素插入 ，用于引入外部样式表。

	<link rel="stylesheet" type="text/css" href="style.css" media="all" />

link属性：

	- `rel`，关系，
	- `type`，表示使用link标记加载的数据的类型，默认为`text/css`；
	- `href`，样式表URL；
	- `media`，格式`media="mediatype and|not|only (media feature)"`，媒体查询，通过判断媒体查询判断是否引入样式表；
			
			// 样式表只会在媒体为屏幕且宽度小于900px时才会加载
			<link rel="stylesheet" media="screen and (max-width: 900px)" href="mystylesheet.css">

**@import**

@import位于style元素中顶部或CSS文件顶部，用于加载外部样式表。

	@import url(style.css) screen;

	
**link和@import区别**