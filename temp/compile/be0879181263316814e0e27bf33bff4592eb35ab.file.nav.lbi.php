<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:10:30
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\library\nav.lbi" */ ?>
<?php /*%%SmartyHeaderCode:1370826645b02e16655bea7-41526163%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'be0879181263316814e0e27bf33bff4592eb35ab' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\library\\nav.lbi',
      1 => 1526095134,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1370826645b02e16655bea7-41526163',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
    'module' => 0,
    'user' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e1665cd34',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e1665cd34')) {function content_5b02e1665cd34($_smarty_tpl) {?>
<nav class="navbar navbar-gy navbar-fixed-top trans-3 navbar-curt">

    <div class="navbar-header">
	<a class="navbar-brand" href="/"><img src="/static/images/logo.png"  alt="<?php echo $_smarty_tpl->tpl_vars['_lang']->value['title'];?>
" /></a>
      <!-- 移动设备上的导航切换按钮 -->
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#gy-navbar" aria-expanded=" ">
        <span class="sr-only">切换导航</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
		<span class="icon-bar"></span>
      </button>
     
    </div>
	
	
	<div id="gy-navbar" class="collapse navbar-collapse " aria-expanded="" style="height: 1px;">
	  <ul class="nav navbar-nav navbar-nav-menu">
	    <li <?php if ($_smarty_tpl->tpl_vars['module']->value=='index'){?>class="active"<?php }?>><a href="/">发现</a></li>
        <li <?php if ($_smarty_tpl->tpl_vars['module']->value=='pictures'){?>class="active"<?php }?>><a href="/pictures">全景摄影</a></li>
        <li <?php if ($_smarty_tpl->tpl_vars['module']->value=='videos'){?>class="active"<?php }?>><a href="/videos">全景视频</a></li>      
		<li <?php if ($_smarty_tpl->tpl_vars['module']->value=='people'){?>class="active"<?php }?>><a href="/people">作者</a></li>
      </ul>
			<ul class="nav navbar-nav navbar-nav-funcs navbar-right hidden-xs">
			   <li role="search">
					<div class="header-search">
						<form action="/search?word="+word">
							<input name="word" value="" type="text" class="header-search__input" placeholder="搜索作品/摄影师/话题">
							<i class="header-search__icon iconfont"></i>
						</form>
					</div>
				</li>
<script>
  $("#search_btn").click(function(){
      var word = $.trim($("#search_input").val());
      if (word=="") {
        return false;
      }
      window.location.href="/search?word="+word;
  })
</script>	
				
				
				<li role="publish">
				 <div class="btn btn-blue btn-sm">
                 <a data-toggle="modal" type="button" onclick="javascript:window.location.href='/add/pic'">发布</a>

				</div>
				</li>
				<?php if ($_smarty_tpl->tpl_vars['user']->value['pk_user_main']<1){?>
				<li><a href="/passport/">登录</a></li>
				 <?php if (!$_smarty_tpl->tpl_vars['_lang']->value['close_reg']){?><li><a href="/passport/register">注册</a></li><?php }?>
			 <?php }else{ ?>

			     <li class="dropdown nav-dropdown dropdown-menu-curt" role="user">
			 
               <a href="#"> <span class="user-avatar" style="background-image: url(<?php echo $_smarty_tpl->tpl_vars['user']->value['avatar'];?>
)"></span>
			   <span class="user-name"><?php echo $_smarty_tpl->tpl_vars['user']->value['nickname'];?>
<i class="iconfont"></i></span></a>
			   
			  <ul class="dropdown-menu" role="menu">
                 <li><a href="/member/profile">账户管理</a></li>
		 <li><a href="/people/<?php echo $_smarty_tpl->tpl_vars['user']->value['pk_user_main'];?>
">个人主页</a></li>
                 <li class="divider"></li>
                 <li><a href="/member/project">图片管理</a></li>
                 <li><a href="/member/project?act=videos">视频管理</a></li>
                 <li><a href="/member/object_around">物体环视</a></li>
                 <li><a href="/member/mediares">素材管理</a></li>
                 <li><a href="/member/download">离线下载</a></li>
				         <li><a href="/member/logout">退　　出</a></li>
               </ul>
             </li>
			 <?php }?>
			 
      
      </ul>

    </div>

</nav>
</header>
<!-- /sign-user -->























</header><?php }} ?>