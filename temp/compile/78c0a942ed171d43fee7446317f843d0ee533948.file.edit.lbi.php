<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\loading_img\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:4504497595b02ebf73bcb95-82657999%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '78c0a942ed171d43fee7446317f843d0ee533948' => 
    array (
      0 => 'plugin\\loading_img\\template\\edit.lbi',
      1 => 1509568410,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4504497595b02ebf73bcb95-82657999',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf73d041',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf73d041')) {function content_5b02ebf73d041($_smarty_tpl) {?> <button type="button" class="btn btn-custom-logo"  data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="开场动画" onclick="open_load_img()"<?php }?> >开场动画</button><?php }} ?>