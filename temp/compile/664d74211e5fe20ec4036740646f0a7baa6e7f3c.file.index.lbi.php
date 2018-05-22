<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:10:30
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\index\index.lbi" */ ?>
<?php /*%%SmartyHeaderCode:9332479115b02e1665fc145-99013156%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '664d74211e5fe20ec4036740646f0a7baa6e7f3c' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\index\\index.lbi',
      1 => 1526095730,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9332479115b02e1665fc145-99013156',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'slide' => 0,
    'v' => 0,
    'i' => 0,
    'recommend' => 0,
    'user' => 0,
    '_lang' => 0,
    'ad' => 0,
    'nav_links' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e16686935',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e16686935')) {function content_5b02e16686935($_smarty_tpl) {?>
<!-- 首页 -->
<div class="index-content">
	<!-- 轮播图 -->
		<div class="index-slider top-banner">
		<div class="swiper-container swiper-container-horizontal swiper-container-fade">
			<ul class="swiper-wrapper" style="transition-duration: 0ms;">      	
				    <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['slide']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
?>					
			<li class="swiper-slide" data-swiper-slide-index="1" style="width: 1543px; transform: translate3d(-3086px, 0px, 0px); opacity: 1; transition-duration: 0ms;">
					<!-- 作品链接 -->
					<a class="index-slider-item" target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['v']->value['link'];?>
">
						<!-- 图片 -->
          				<img class="swiper-lazy swiper-lazy-loaded" src="<?php echo $_smarty_tpl->tpl_vars['v']->value['img_path'];?>
">
					</a>
			</li>
					<?php } ?>
			</ul>
			<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
          </div>
		</div>
	</div>

	<!-- 大标题 -->
			<h1 class="big-title">
			首页-推荐全景
			</h1>
		
	<!-- 作品列表 -->
	
<div class="container">

	<!--一个卡片列表行-->
	<ul class="row pano-list">
      	<!--卡片列表循环-->
			<?php  $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['i']->value = 0;
  if ($_smarty_tpl->tpl_vars['i']->value<12){ for ($_foo=true;$_smarty_tpl->tpl_vars['i']->value<12; $_smarty_tpl->tpl_vars['i']->value++){
?>
			 <li class="col-md-3 col-sm-6 col-xs-12">
					<!-- 作品链接 -->
				<a class="pano-item" target="_blank" href="/tour/<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['view_uuid'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['name'];?>
">
					<!-- 作品图片 -->
					<div class="pano-item-img">
                    <img class="lazy " data-original="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['thumb_path'];?>
" src="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['thumb_path'];?>
"onerror="javascript:this.src='/static/images/default_avatar.jpg';" data-was-processed="true">
											</div>
					<!-- 作品信息 -->
					<div class="pano-item-info" id="authorDiv">
						<!-- 摄影师信息 -->
						<object>
					<a class="pano-item-author-avatar"      href="/people/<?php echo $_smarty_tpl->tpl_vars['user']->value['pk_user_main'];?>
"     target="_blank"  title="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['nickname'];?>
">
				   <img class="lazy" src="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['avatar'];?>
" data-original="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['avatar'];?>
" data-was-processed="true">
															</a>
												
						</object>
						<!-- 作品标题 -->
						<h3 class="pano-item-title ellipsis">
							<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['name'];?>

						</h3>
						<!-- 被收藏数 -->
						<object class="hidden-xs">
							<a class="pano-item-collect" href="javascript:;" title="收藏数 0">
								<i class="iconfont icon-nocollect"></i>
								<i class="iconfont icon-collected"></i>
								<span><?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['browsing_num'];?>
</span><?php echo $_smarty_tpl->tpl_vars['v']->value['browsing_num'];?>

							</a>
						</object>
					</div>
					<!-- 浏览数和点赞 -->
					<div class="pano-item-label">
						<div class="pano-item-views pull-left">
							<i class="iconfont"></i>
							<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['browsing_num'];?>

						</div>
						<div class="pano-item-thumbs-up pull-right">
							<i class="iconfont"></i><?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['praised_num'];?>

						</div>
					</div>
				</a>
			</li>
			 
			<?php }} ?>	         
			<!--卡片列表循环结束-->	
		
	</ul>
	<!--一个卡片列表行结束-->
</div>


	<!-- 加入全景交流群 -->

		<div class="col-xs-12 hidden-xs">
			<h1 class="big-title">首页-加入我们
			</h1>
		</div>

<div class="index-content">
	<!-- 加入全景交流群 -->
	<a class="join-wrap hidden-xs" href="https://shang.qq.com/wpa/qunwpa?idkey=92267a0799e930475f26732f8442046becfe76117053796eb1a0dc9d3b176dcb" target="_blank" title="点击加入全景交流群">
		<img class="lazy lazy-loaded" src="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/join-gy.jpg" data-original="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/join-gy.jpg" alt="加入全景交流群" data-was-processed="true">
		<div class="join-wrap-btn">
			加入全景交流群
		</div>
	</a>

	<!-- 大标题 -->
		<h1 class="big-title">
			首页-商业作品
		</h1>

	<!-- 作品列表 -->
	<div class="container">
		<!--一个卡片列表行-->
	<ul class="row pano-list">
      	<!--卡片列表循环-->
			<?php  $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['i']->value = 0;
  if ($_smarty_tpl->tpl_vars['i']->value<4){ for ($_foo=true;$_smarty_tpl->tpl_vars['i']->value<4; $_smarty_tpl->tpl_vars['i']->value++){
?>
			 <li class="col-md-3 col-sm-6 col-xs-12">
					<!-- 作品链接 -->
				<a class="pano-item" target="_blank" href="/tour/<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['view_uuid'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['name'];?>
">
					<!-- 作品图片 -->
					<div class="pano-item-img">
<img class="lazy " data-original="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['thumb_path'];?>
" src="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['thumb_path'];?>
" data-was-processed="true">
											</div>
					<!-- 作品信息 -->
					<div class="pano-item-info">
						<!-- 摄影师信息 -->
						<object>
							<a class="pano-item-author-avatar" target="_blank" href="javascript:window.open('<?php echo $_smarty_tpl->tpl_vars['_lang']->value['host'];?>
')" title="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['nickname'];?>
">
				<img src="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['avatar'];?>
" class="lazy" data-original="<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['avatar'];?>
" data-was-processed="true">
															</a>
						</object>
						<!-- 作品标题 -->
						<h3 class="pano-item-title ellipsis">
							<?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['name'];?>

						</h3>
						<!-- 被收藏数 -->
						<object class="hidden-xs">
							<a class="pano-item-collect" href="javascript:;" title="收藏数 0">
								<i class="iconfont icon-nocollect"></i>
								<i class="iconfont icon-collected"></i>
								<span><?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['browsing_num'];?>
</span>
							</a>
						</object>
					</div>
					<!-- 浏览数和点赞 -->
					<div class="pano-item-label">
						<div class="pano-item-views pull-left">
							<i class="iconfont"></i><?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['browsing_num'];?>

						</div>
						<div class="pano-item-thumbs-up pull-right">
							<i class="iconfont"></i><?php echo $_smarty_tpl->tpl_vars['recommend']->value[$_smarty_tpl->tpl_vars['i']->value]['praised_num'];?>

						</div>
					</div>
				</a>
			</li>
			 
			<?php }} ?>	         
			<!--卡片列表循环结束-->	
		
	</ul>
	<!--一个卡片列表行结束-->
	</div>

	<!-- 合作伙伴 -->
	<div class="partner-wrap hidden-xs">
		<div class="container">
			<!-- 大标题 -->
			<div class="big-title">
				合作伙伴
				<div class="big-title-line" style="background-image: url(./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/title-line.png);"></div>
			</div>
			<div class="row partner-list">
			
		       <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ad']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
?>
				<div class="partner-item col-sm-3 col-md-2" position=2>
				<!-- 作品链接 -->
				<a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['ad_link'];?>
" target="_blank">
				<!-- 图片 -->
					<img class="lazy lazy-loaded" src="<?php echo $_smarty_tpl->tpl_vars['v']->value['ad_content'];?>
" data-original="<?php echo $_smarty_tpl->tpl_vars['v']->value['ad_content'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['v']->value['ad_name'];?>
" data-was-processed="true">
				</a>
				</div>
				<?php } ?>
				
			</div>
		</div>
	</div>

	<!-- 全景全景信息 -->
	<div class="gyinfo-wrap ">
		<div class="container">
			<div class="row">
				<div class="hidden-sm hidden-xs col-md-3">
					<a href="#" class="gyinfo-logo">
						<img src="./static/images/logo.png">
					</a>
				</div>
						
				

 
				
				<div class="col-sm-6 col-md-5 hidden-xs">
			
					<div class="row">
						
						<div class="text-left col-sm-4 col-md-4">
							<dt>
								关于全景
							</dt>
							<?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['nav_links']->value['left_bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
?>
							<dd>
								<a href="/article?aid=<?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>
">
									<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>

								</a>
							</dd>
                            <?php } ?>
						</div>
						
						
						<div class="text-left col-sm-4 col-md-4">
							<dt>
								联系我们
							</dt>
							<?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['nav_links']->value['left_bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
?>
							<dd>
								<a href="/article?aid=<?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>
">
									<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>

								</a>
							</dd>
                            <?php } ?>

						</div>
						
						
						<div class="text-left col-sm-4 col-md-4">
							<dt>
								会员服务
							</dt>
							<?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['nav_links']->value['left_bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
?>
							<dd>
								<a href="/article?aid=<?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>
">
									<?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>

								</a>
							</dd>
                            <?php } ?>
						</div>
							
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="row">
						<div class="col-xs-6">
							<a class="gyinfo-qrcode" href="#" title="全景平台官方微博">
								<img class="lazy lazy-loaded" src="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/weibo.jpg" data-original="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/weibo.jpg" data-was-processed="true">
								<h5>全景平台微博</h5>
							</a>
						</div>
						<div class="col-xs-6">
							<a class="gyinfo-qrcode" title="扫一扫关注全景公众号">
								<img class="lazy lazy-loaded" src="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/wechat-qrcode.png" data-original="./template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/wechat-qrcode.png" data-was-processed="true">
								<h5>全景公众号</h5>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 网络地图弹窗 -->


</div>
	
	
	
	
	
<!-- 轮播图 -->
<script type="text/javascript">
$(function() {
	// 轮播图初始化
	swiperInit("swiper-container");
	// 百度地图初始化
});
</script>

<?php }} ?>