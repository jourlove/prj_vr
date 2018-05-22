<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:48
         compiled from "plugin\loading_img\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:12611099965b02ecb81ff8a2-66520985%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'fa1eb5127c577e69ea7c668d2b3231c503dc958b' => 
    array (
      0 => 'plugin\\loading_img\\template\\resource.lbi',
      1 => 1509568410,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12611099965b02ecb81ff8a2-66520985',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb821312',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb821312')) {function content_5b02ecb821312($_smarty_tpl) {?><style>
	.loadingMask{
		position: absolute;
		top: 0px;      
        z-index: 2002; 
        left: 0px;   
        text-align: center;  
	}
	.loadingMask #loadingImg{
		width: 400px;
	}
</style>
<div id="loadingMask" class="loadingMask">
	<img id="loadingImg">
</div>

<script>
$(function(){
	plugins_init_function.push(open_load_img);
})
function open_load_img(data,settings){
  	//启动画面
    var loadingObj = data.loading_img;
    if (loadingObj && loadingObj.isopen=='1') {
    	showloadingimg(loadingObj.imgPath,loadingObj.bgcolor);
       settings["events[skin_events].onloadcomplete"] += "js(closeloading());";
    }
}
function showloadingimg(imgPath,bgcolor){
   $("#loadingMask").css("height",$(document).height());     
   $("#loadingMask").css("width",$(document).width()); 
   $("#loadingMask").css("background-color",bgcolor);   
   $("#loadingMask #loadingImg").attr('src',imgPath); 
   $("#loadingMask").css("line-height",$(document).height()+'px');
   $("#loadingMask").show();  
}
function closeloading(){
	$("#loadingMask").fadeOut(500);  
}
</script><?php }} ?>