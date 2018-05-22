<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\project_download\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:16764505325b02ebf72c69d2-67949928%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '857275fd3ac4d5756f5f2c162b6d2cb456749938' => 
    array (
      0 => 'plugin\\project_download\\template\\edit.lbi',
      1 => 1482227918,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16764505325b02ebf72c69d2-67949928',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf72da26',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf72da26')) {function content_5b02ebf72da26($_smarty_tpl) {?> <button type="button" class="btn btn-custom-logo"  data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="下载项目到本地浏览" onclick="openProjectDownModal()"<?php }?> >离线下载</button><?php }} ?>