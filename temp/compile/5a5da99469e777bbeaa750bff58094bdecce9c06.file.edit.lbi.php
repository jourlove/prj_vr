<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\allowed_recomm\template\edit.lbi" */ ?>
<?php /*%%SmartyHeaderCode:15273886265b02ebf774ed67-71940379%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5a5da99469e777bbeaa750bff58094bdecce9c06' => 
    array (
      0 => 'plugin\\allowed_recomm\\template\\edit.lbi',
      1 => 1482227846,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15273886265b02ebf774ed67-71940379',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'v' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf776a2f',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf776a2f')) {function content_5b02ebf776a2f($_smarty_tpl) {?><div class="col-md-4">
<label  class="col-md-6 control-label">允许推荐</label>
<div class="col-md-6" data-toggle="tooltip"  <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>title="您当前没有该权限"<?php }else{ ?>title="是否允许管理员将你的作品推荐到首页"<?php }?>>
<input id="flag_allowed_recomm" name="switch_checkbox" class="form-control" type="checkbox" <?php if ($_smarty_tpl->tpl_vars['v']->value['level_enable']==0){?>disabled<?php }?>/>
</div>
</div><?php }} ?>