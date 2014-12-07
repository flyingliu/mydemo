fis.config.set('modules.parser.less', 'less');
//将less文件编译为css
fis.config.set('roadmap.ext.less', 'css');

//使用fis-parser-jade插件编译jade文件
fis.config.set('modules.parser.jade', 'jade');
//jade文件经过编译后输出为html文件
fis.config.set('roadmap.ext.jade', 'html');



//项目排除掉_xxx.scss，这些属于框架文件，不用关心
fis.config.set('project.exclude', '_*.scss');
//scss后缀的文件，用fis-parser-sass插件编译
fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
fis.config.set('roadmap.ext.scss', 'css');

//使用fis-parser-jade插件编译jade文件
fis.config.set('modules.parser.coffee', 'coffee-script');
//jade文件经过编译后输出为html文件
fis.config.set('roadmap.ext.coffee', 'js');