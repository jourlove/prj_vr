<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:47
         compiled from "plugin\custom_logo\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:573351655b02ecb7ed4a85-99831720%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c73d2718a02369aa13ca589bbf06db20eda50a0c' => 
    array (
      0 => 'plugin\\custom_logo\\template\\resource.lbi',
      1 => 1526737442,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '573351655b02ecb7ed4a85-99831720',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb7ee061',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb7ee061')) {function content_5b02ecb7ee061($_smarty_tpl) {?><script>
$(function(){
    $("#logoImg").show();
	plugins_init_function.push(custom_logo_init);
})
function custom_logo_init(data){
	var logoObj = data.custom_logo;
	if(logoObj){
		if(logoObj.useCustomLogo=='1')
        	$('.vrshow_container_logo img').attr('src',logoObj.logoImgPath);
        if(logoObj.logoLink)
            $('.vrshow_container_logo img').attr('onclick','javascript:window.open("'+logoObj.logoLink+'")');
        
    }
}
</script>

<?php }} ?>