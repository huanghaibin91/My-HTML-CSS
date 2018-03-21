# HTML标签 #


----------

HTML标签知识备忘录：

- `<!DOCTYPE>` ，用来告知Web浏览器页面使用了哪种HTML版本；

- `<a>`，a标签download属性指定下载URL，target指定何处打开链接文档，还利用其它标签的id进行页面内锚点跳转；

- 标签自定义属性`data-*`，属性名应为小写，因为HTML标签不区分大小写；

- 在`<button>`元素内部，可以放置内容，比如文本或图像。button默认type是submit，所以表单中使用button不设置type也会提交表单，所以可以设置type或使用input取消默认提交行为；

- HTML5中`<html>`元素新增一个属性，`manifest`属性规定文档的缓存`manifest`的位置，参数属性指向一个manifest的文件（此文件`.appcahce`后缀），这个文件指明了当前页面哪些资源需要进行离线缓存。 Manifest有大小限制，它其实也算本地存储，本地存储一般每个域有限制使用的空间，PC Chrome是5M，Manifest文件如`home.appcahce`不能跨域，如果跨域需要支持CORS。Manifest Cache的资源不能跨域，同样如果跨域该资源需要支持CORS，一般浏览器会自动处理；


