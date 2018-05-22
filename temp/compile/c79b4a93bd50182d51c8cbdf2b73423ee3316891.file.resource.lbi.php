<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:48
         compiled from "plugin\comment\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:13670040545b02ecb842a429-01384504%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c79b4a93bd50182d51c8cbdf2b73423ee3316891' => 
    array (
      0 => 'plugin\\comment\\template\\resource.lbi',
      1 => 1475906308,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13670040545b02ecb842a429-01384504',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb8439e2',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb8439e2')) {function content_5b02ecb8439e2($_smarty_tpl) {?><div class="vrshow_comment">
        <div class="row">
            <div class="col-md-12">
                <h4 style="margin-left:10px">评论</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="padding-left:20px;padding-right:20px">
                <textarea id="usercomm" class="form-control" rows="3" placeholder="说点什么吧！最多不要超过15个字哦" maxlength="15"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-right" style="padding:10px 20px">
                <div class="hide-comment" onClick="switch_show_comment(false)">
                    <img src="<?php echo $_smarty_tpl->tpl_vars['_lang']->value['host'];?>
plugin/comment/images/hide-comment.png">
                    <span>隐藏</span>
                </div>
                <button  class="btn btn-primary disabled" type="button" id="doComm">发表</button>
                <button class="btn" type="button" onClick="cancel_comment()">取消</button>
            </div>
        </div>
</div><?php }} ?>