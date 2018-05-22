<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:32:39
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\member.tpl" */ ?>
<?php /*%%SmartyHeaderCode:11228940415b02e6975c5724-02297856%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd402996cd3e58627e4b4213ce33cd2492f31dc05' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\member.tpl',
      1 => 1516860092,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11228940415b02e6975c5724-02297856',
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
  'unifunc' => 'content_5b02e69766d6c',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e69766d6c')) {function content_5b02e69766d6c($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/header.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/member/".($_smarty_tpl->tpl_vars['module']->value).".lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate (($_smarty_tpl->tpl_vars['_lang']->value['moban'])."/library/footer.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<?php }} ?>