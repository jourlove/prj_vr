<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:48
         compiled from "plugin\showviewnum\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:14860343705b02ecb83ad404-06586700%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '60b832fcf0b374974a012b8fbdd6ec97686f9085' => 
    array (
      0 => 'plugin\\showviewnum\\template\\resource.lbi',
      1 => 1475906308,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14860343705b02ecb83ad404-06586700',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb83b8f8',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb83b8f8')) {function content_5b02ecb83b8f8($_smarty_tpl) {?><script>
$(function(){
	plugins_init_function.push(showviewnum_init);
})
function showviewnum_init(data){
	if(data.hideviewnum_flag=='1'){
        $("#viewnumDiv").hide();
    }
    
  
}
</script><?php }} ?>