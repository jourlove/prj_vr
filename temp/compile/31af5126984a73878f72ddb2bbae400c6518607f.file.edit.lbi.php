<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:34
         compiled from "plugin\bgmusic\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:3512630265b02ebf6f1ad23-97979779%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '31af5126984a73878f72ddb2bbae400c6518607f' => 
    array (
      0 => 'plugin\\bgmusic\\template\\edit.lbi',
      1 => 1476175132,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3512630265b02ebf6f1ad23-97979779',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf6f3dfb',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf6f3dfb')) {function content_5b02ebf6f3dfb($_smarty_tpl) {?> <button type="button" class="btn" data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="为全景加入背景音乐" onclick="openMusic()"<?php }?> > 背景音乐设置 </button><?php }} ?>