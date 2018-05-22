<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:12:18
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\passport\login.lbi" */ ?>
<?php /*%%SmartyHeaderCode:11089862725b02e1d23c6551-27395416%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '17c597ef3b433923d3d1c6c9f00920e040ba373a' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\passport\\login.lbi',
      1 => 1517114866,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11089862725b02e1d23c6551-27395416',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
    'redirectUrl' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e1d2427ff',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e1d2427ff')) {function content_5b02e1d2427ff($_smarty_tpl) {?><div class="user-login-content">

	<div class="jumbotron top-banner" style="background-image:url(/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/mobile-bg.jpg);">
	
		<div class="mask-layer">
		
			<div class="container">
			<!--登录-->
           <div class="user-login-wrap">
		   	<!--LOGO-->
				<img class="user-login-logo" src="/static/images/logo.png" alt="<?php echo $_smarty_tpl->tpl_vars['_lang']->value['title'];?>
">
		    <!-- 登录表单 -->		   
		   
			<form id="login_form" class="user-login-form" action="/passport/login?act=do_login" method="post">
			
			   <div class="form-group">
			   <input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['redirectUrl']->value;?>
" name="redirectUrl">
			   <div class="input-group">
							<div class="input-group-addon">
								<i class="iconfont"></i>
							</div>
				  <input type="text" id="phone" name="phone" class="form-control" placeholder="手机号" width="200">
		
			  
				</div>
			 </div>
								
				<div class="form-group">
				<div class="input-group">
				<div class="input-group-addon"><i class="iconfont"></i>
							</div>				  
				  <input type="password" id="password" name='password' class="form-control" placeholder="密码" width="200">
				</div>
				</div>
				
				<div class="clearfix user-login-action">
				  <a href="/passport/findpwd" class="pull-left">忘记密码?</a>
				  <a href="/passport/register" class="pull-right">注册</a>
				  </div>
				
				<button class="btn btn-block btn-blue" type="button" id="login_btn" onclick="ajaxFormSubmit('login_form','login_btn');">立即登录</button>
				</form>
				
				<script>
	$(function(){
		$('#password').bind('keyup', function(event) {
			if (event.keyCode == "13") {
				//回车执行查询
				$('#login_btn').click();
			}
		});
	})
</script>
				 <!-- 登录表单END -->
        <div class="third-login">
				 <div class="col-md-6" >
					  <label>
					    <input type="checkbox" name="remember" value="1"> 7天免登录
					  </label>
				  </div>
          </div>
		</div>
	</div>
</div>
</div>




<!-- /content --><?php }} ?>