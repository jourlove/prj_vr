<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\vcard\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:6658395665b02ebf7386089-34536427%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '706ad66250b964871c47091a4b237e5a7bdf79d9' => 
    array (
      0 => 'plugin\\vcard\\template\\edit.lbi',
      1 => 1509568410,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6658395665b02ebf7386089-34536427',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf7395a8',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf7395a8')) {function content_5b02ebf7395a8($_smarty_tpl) {?> <button type="button" class="btn"  data-toggle="tooltip" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="企业名片" onclick="openVcard()"<?php }?> >企业名片</button><?php }} ?>