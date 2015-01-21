fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
fis.config.set('roadmap.ext.scss', 'css');
fis.config.set('modules.parser.jade', 'jade');
//scss文件产出为css文件
fis.config.set('roadmap.ext.jade', 'html');

//使用simple插件，自动应用pack的资源引用
fis.config.set('modules.postpackager', 'simple');
//开始autoCombine可以将零散资源进行自动打包
fis.config.set('settings.postpackager.simple.autoCombine', true);
//开启autoReflow使得在关闭autoCombine的情况下，依然会优化脚本与样式资源引用位置
fis.config.set('settings.postpackager.simple.autoReflow', true);
//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
//fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//csssprite处理时图片之间的边距，默认是3px
fis.config.set('settings.spriter.csssprites.margin', 20);