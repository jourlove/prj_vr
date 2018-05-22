<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:10:30
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:916931185b02e1662bfe88-49880964%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a348e4ab61628aee35f018ad009931aec49fed77' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\index.tpl',
      1 => 1475814472,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '916931185b02e1662bfe88-49880964',
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
  'unifunc' => 'content_5b02e16639aab',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e16639aab')) {function content_5b02e16639aab($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/header.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/index/".($_smarty_tpl->tpl_vars['module']->value).".lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/footer.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php }} ?>