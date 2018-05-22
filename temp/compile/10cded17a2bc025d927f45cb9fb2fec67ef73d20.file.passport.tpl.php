<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:12:18
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\passport.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19904433545b02e1d2303021-96153160%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '10cded17a2bc025d927f45cb9fb2fec67ef73d20' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\passport.tpl',
      1 => 1517060180,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19904433545b02e1d2303021-96153160',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
    'module' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e1d23744c',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e1d23744c')) {function content_5b02e1d23744c($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/passport_header.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/header.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/passport/".($_smarty_tpl->tpl_vars['module']->value).".lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/footer.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php }} ?>