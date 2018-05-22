<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\top_ad\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:4191015645b02ebf7347879-36684715%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bf83b6aeaf2ce91fa90897684a6f1798a58af0ec' => 
    array (
      0 => 'plugin\\top_ad\\template\\edit.lbi',
      1 => 1487751566,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4191015645b02ebf7347879-36684715',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf735b10',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf735b10')) {function content_5b02ebf735b10($_smarty_tpl) {?> <button type="button" class="btn btn-custom-logo"  data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="为全景加入顶部广告语" onclick="openTopAdModal()"<?php }?> >顶部广告语</button><?php }} ?>