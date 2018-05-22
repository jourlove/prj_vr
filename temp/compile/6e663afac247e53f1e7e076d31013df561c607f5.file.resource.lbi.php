<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:47
         compiled from "plugin\showlogo\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:1128941475b02ecb7e72ff3-48359827%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6e663afac247e53f1e7e076d31013df561c607f5' => 
    array (
      0 => 'plugin\\showlogo\\template\\resource.lbi',
      1 => 1476095720,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1128941475b02ecb7e72ff3-48359827',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb7e829f',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb7e829f')) {function content_5b02ecb7e829f($_smarty_tpl) {?><script>
$(function(){
	plugins_init_function.push(showlogo_init);
})
function showlogo_init(data){
	if(data.hidelogo_flag=='1'){
        $("#logoImg").hide();
    }else{
    	$("#logoImg").show();
    }
}
</script><?php }} ?>