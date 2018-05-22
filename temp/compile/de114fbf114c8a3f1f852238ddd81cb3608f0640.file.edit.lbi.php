<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\custom_user\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:7293551285b02ebf727c646-45456206%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'de114fbf114c8a3f1f852238ddd81cb3608f0640' => 
    array (
      0 => 'plugin\\custom_user\\template\\edit.lbi',
      1 => 1476175132,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7293551285b02ebf727c646-45456206',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf7297bd',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf7297bd')) {function content_5b02ebf7297bd($_smarty_tpl) {?> <button type="button" class="btn btn-custom-logo"  data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="为全景加入左上角自定义作者名" onclick="openUserModal()"<?php }?> >自定义作者名</button><?php }} ?>