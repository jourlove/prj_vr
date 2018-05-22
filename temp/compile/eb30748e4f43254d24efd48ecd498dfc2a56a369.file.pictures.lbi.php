<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:35:11
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\index\pictures.lbi" */ ?>
<?php /*%%SmartyHeaderCode:2150063595b02e72f31c865-81805952%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eb30748e4f43254d24efd48ecd498dfc2a56a369' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\index\\pictures.lbi',
      1 => 1517289884,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2150063595b02e72f31c865-81805952',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
    'v' => 0,
    'picture_tags' => 0,
    'tag' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e72f43d9a',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e72f43d9a')) {function content_5b02e72f43d9a($_smarty_tpl) {?>
<!-- content -->
<!-- 720°全景 -->
<div class="pano-content body-content">
  <!-- Banner -->
        <div class="top-banner">
                <img class="bc-img" src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/5a05685acad9b.jpg" alt="<?php echo $_smarty_tpl->tpl_vars['v']->value['name'];?>
">
            </div>
			
			
        <!-- 二级菜单 -->
        <div class="submenu-wrap">
		<div class="container">
            <!-- 左侧菜单 -->
		<div class="pull-left">
		 <div class="btn-group submenu-btn-group"> 
		 <!-- 当前选中的标签 -->
		  <a class="dropdown-toggle" data-toggle="dropdown">
                        频道 <i class="iconfont"></i>
                    </a>
		   <!-- 标签列表 -->
		  <div class="row dropdown-menu submenu-dropdown-menu">
		   <div class="col-xs-4">
		   <a onclick="list_by_tag(0,this)" class="btn-blue btn btn-sm btn-block btn-default">全部</a>
		   </div>  		  
		   <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['picture_tags']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
?>
		   	 <div class="col-xs-4">
			<a  onclick="list_by_tag(<?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
,this)" <?php if ($_smarty_tpl->tpl_vars['tag']->value==$_smarty_tpl->tpl_vars['v']->value['id']){?><?php }?> class=" btn btn-sm  btn-block btn-default"><?php echo $_smarty_tpl->tpl_vars['v']->value['name'];?>
</a>
			</div>
			<?php } ?>
		   </div>
		   </div>

		   <!-- 精选 -->
		    <div class="btn-group submenu-btn-group">
			 <!-- 如果是选中状态，加上类 active -->
			<a onclick="list_by_tag(-1,this)" <?php if ($_smarty_tpl->tpl_vars['tag']->value===-1){?>class="" href="javascript:;" title="查看精选作品"<?php }?>>精选</a>
			</div>
		   </div>
            <!-- 右侧菜单 -->
            <div class="pull-right">
                <div class="btn-group submenu-btn-group">
                    <!-- 当前选中的标签 -->
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        排序 <i class="iconfont"></i>
                    </a>
                    <!-- 标签列表 -->
                    <ul class="dropdown-menu ">
                        <li>
                            <a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['browsing_num'];?>
">
                                人气
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['praised_num'];?>
">
                                点赞数
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['create_time'];?>
">
                                最新
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>


<!--一个卡片列表行-->
<div class="container">

		<!--卡片列表循环-->
<ul  id="pictures_content" class="row pano-list clearfix">
	
</ul>		         
		<!--卡片列表循环结束-->	

</div>
<!--一个卡片列表行结束-->
</div>
<script>
 	var page = 1;
 	var tag = 0 ;
	$(function(){
		list();
		$(window).scroll(function(){
		　　var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
		　　if(scrollTop + windowHeight == scrollHeight){
		　　　　list();
		　　}
		});
	})
	function list(){
		alert_notice("加载中...",'success','bottom',500);
		$.post('/pictures',{
			'act':'list',
			'tag':tag,
			'page':page
		},function(res){
			if (res.length==0) {
				alert_notice("没有更多了",'default','bottom');
			}else{
				var html = '';
				for(var i=0 ; i<res.length;i++){
					var p = res[i];
					html+='<li class="col-md-3 col-sm-6 col-xs-12">'+
				  <!-- 作品链接 --> 
        '<a class="pano-item" target="_blank" href="/tour/'+p.view_uuid+'" title="'+p.name+'">'+
					  <!-- 作品图片 -->
					   ' <div class="pano-item-img"><img class="lazy" data-was-processed="true"src="'+p.thumb_path+'" data-original="'+p.thumb_path+'"  data-was-processed="true">'+
						' </div>'+
						<!-- 作品信息 -->
						'<div class="pano-item-info">'+
						 <!-- 摄影师信息 -->
                         '<object>'+
						 '<a class=" pano-item-author-avatar" target="_blank" href="#" title="'+p.nickname+'">'+
						'	<img class="lazy lazy-avatar lazy-loaded" src="'+p.avatar+'" data-original="'+p.avatar+'" data-was-processed="true" title="'+p.nickname+'">'+
						 ' </a>'+
						'	</object>'+
						<!-- 作品标题 -->
					    '   <h3 class="pano-item-title ellipsis">'+p.name+'</h3>'+
						
						<!-- 被收藏数 -->
						'	<object class="hidden-xs">'+
						'		<a class="pano-item-collect"href="javascript:;"title="'+p.browsing_num+'"><i class="iconfont icon-nocollect">  </i>'+p.browsing_num+'</a>'+
						'	</object>'+
						
						
						' </div>'+
												<!-- 浏览数和点赞 -->
					'<div class="pano-item-label">'+
						'<div class="pano-item-views pull-left">'+
							'<i class="iconfont"> '+p.browsing_num+'</i>'+
						'</div>'+
						'<div class="pano-item-thumbs-up pull-right">'+
							'<i class="iconfont"> '+p.praised_num+'</i>'+
						'</div>'+
					'</div>'+
						' </div>'+
					 ' </a>'+
					' </li>';
				}
				page++;
				$("#pictures_content").append(html);
			}
			
		},'json');
	}
	function list_by_tag(_tag,obj){
		page=1;
		tag = _tag;
		$("#pictures_content").html("");
		list();
		$(".channel .active").removeClass("active");
		$(obj).addClass("active");
	}
</script><?php }} ?>