<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:16:09
         compiled from "D:/Develop/xampp/htdocs/prj_vr/vradmin/template\lib\pages.lbi" */ ?>
<?php /*%%SmartyHeaderCode:4370053705b02e2b935db01-92870504%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0aadcec9b1b0589323a1d029e32f4a737955bdc9' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/vradmin/template\\lib\\pages.lbi',
      1 => 1475814472,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4370053705b02e2b935db01-92870504',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'allPages' => 0,
    'allNum' => 0,
    'pages' => 0,
    'p' => 0,
    'page' => 0,
    'k' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e2b93d2e2',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e2b93d2e2')) {function content_5b02e2b93d2e2($_smarty_tpl) {?><style type="text/css">
.pagebox{
text-align:center;
margin-top:10px;
}
.pagebox span{
margin-left:-10px;
}
a.apage{
height:25px;line-height:25px;padding:3px 6px;margin-right:10px;border:1px solid #ccc;border-radius:3px;
}
a.apage.on, a.apage:hover{
background: #60BBFF;border:1px solid #75a2c3;color:#fff;
}
</style>
<?php if ($_smarty_tpl->tpl_vars['allPages']->value>1){?>
 <div class="pagebox">
  <span class="s12">共<?php echo $_smarty_tpl->tpl_vars['allNum']->value;?>
条/<?php echo $_smarty_tpl->tpl_vars['allPages']->value;?>
页　</span>
  <?php  $_smarty_tpl->tpl_vars['p'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['p']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['pages']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['p']->key => $_smarty_tpl->tpl_vars['p']->value){
$_smarty_tpl->tpl_vars['p']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['p']->key;
?>
   <a href="<?php echo $_smarty_tpl->tpl_vars['p']->value['url'];?>
" class="s12 apage <?php if ($_smarty_tpl->tpl_vars['p']->value['num']==$_smarty_tpl->tpl_vars['page']->value){?>on<?php }?>" ><?php echo $_smarty_tpl->tpl_vars['p']->value['name'];?>
</a>
   <?php if ($_smarty_tpl->tpl_vars['allPages']->value>7){?>
    <?php if ($_smarty_tpl->tpl_vars['page']->value==1&&$_smarty_tpl->tpl_vars['k']->value==6){?>
     <span class="c66">...</span>
    <?php }?>
	<?php if ($_smarty_tpl->tpl_vars['page']->value>1&&($_smarty_tpl->tpl_vars['allPages']->value-$_smarty_tpl->tpl_vars['page']->value)>3&&$_smarty_tpl->tpl_vars['k']->value==8){?>
     <span class="c66">...</span>
    <?php }?>
   <?php }?> 
  <?php } ?>
 </div>
<?php }?><?php }} ?>