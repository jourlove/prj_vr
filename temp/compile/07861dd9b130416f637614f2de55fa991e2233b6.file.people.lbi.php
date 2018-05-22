<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:32:43
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\index\people.lbi" */ ?>
<?php /*%%SmartyHeaderCode:10317720465b02e69b38bfe9-78272369%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '07861dd9b130416f637614f2de55fa991e2233b6' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\index\\people.lbi',
      1 => 1526806330,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10317720465b02e69b38bfe9-78272369',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'author' => 0,
    'index_show' => 0,
    'work_stat' => 0,
    '_lang' => 0,
    'user' => 0,
    'filter' => 0,
    'region' => 0,
    'level' => 0,
    'groups' => 0,
    'g' => 0,
    'maxNode' => 0,
    'u' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e69b5ce27',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e69b5ce27')) {function content_5b02e69b5ce27($_smarty_tpl) {?><?php if ($_smarty_tpl->tpl_vars['author']->value){?>
<style type="text/css">
body{

background-color:#fafafa
	
}
.df_h{
	height: 70px;
	background: #ffffff;
}
.df_h_con{
	width: 1050px;
	margin: 0 auto;
	height: 70px;
}

.df_h_con .df_h_data{
	height: 42px;
	margin-top: 14px;
}
.df_h_con .df_h_data>div.head{
	float: left;
}
.df_h_con .df_h_data>div.head>img{

	width: 42px;
	height: 42px;
}

.df_h_con .df_h_data>div.detail{
	float: left;
	margin-left: 10px;
}
.df_h_con .df_h_data>div.detail>p{
	margin-bottom: 0;
}
.df_h_con .df_h_data>div.detail>p>span{
	margin-right: 15px;
}
.df_h_con .df_h_data>div.detail>p>span.names{
	font-size: 16px;
	font-weight: bold;
}

.df_h_con .df_h_data>div.detail>p>span.rz{
	color: #fd8e21;
}
.df_h_con .df_h_data>div.detail>p>span.zl>a{
	color: #4a90e2;
}

.df_h_con .df_tab{
	list-style: none;
	margin: 0;
	padding: 0;
	height: 22px;
	margin-top: 24px;
	float: right;
}
.df_h_con .df_tab>li{
	text-align: center;
	float: left;
}
.df_h_con .df_tab>li>a,.df_h_con .df_tab>li>a:hover,.df_h_con .df_tab>li>a:active{
	display: inline-block;
	padding: 0px 20px ;
	height: 22px;
	line-height: 22px;
	color: #222222;
	text-decoration: none;
}
.df_h_con .df_tab>li>a.active{
	background: #4a90e2;
	color: #FFFFFF;
}

@media (max-width: 1200px){
	.df_h_con{
		width: 100%;
		height: 120px;
	}
	.df_h{
		height: 120px;
		margin-top: -20px;;
	}
	.df_h_con .df_tab{
		width: 100%;
		height: 22px;
		margin-top: 24px;
	}
	.df_h_con .df_tab>li{
		width: 50%;
		float: left;
	}
	.df_h_con .df_tab>li:first-child{
		border-right: 1px solid #eeeeee;
	}
	.df_h_con .df_tab>li>a,.df_h_con .df_tab>li>a:hover,.df_h_con .df_tab>li>a:active{
		padding: 0px;
		height: 22px;
		line-height: 22px;
		color: #222222;
		text-decoration: none;
	}
	.df_h_con .df_tab>li>a.active{
		background: none;
		color: #4a90e2;
	}
}


	/*弹出层*/
	.modal-body>ul.zz_zl{
		list-style: none;
		margin: 0;
		padding: 0;
		margin-top: -12px;
	}
.modal-body>ul.zz_zl>li{
	width: 100%;
	border-bottom: 1px solid #eeeeee;
	text-align: left;
	padding: 15px 10px;
}
.modal-body>ul.zz_zl>li:last-child{
	border-bottom: none;
}
.modal-body>ul.zz_zl>li>span{
	display: inline-block;
	width: 50%;
}
@media (max-width: 1050px){
	.modal-body>ul.zz_zl>li>span{
		display: inline-block;
		width: 100%;
		margin-bottom: 10px;
	}
	.modal-body>ul.zz_zl>li>span:last-child{
		margin-bottom: 0px;
	}
	.modal-body>ul.zz_zl>li{
		padding: 15px 0px;
	}
}




</style>
<?php if (!empty($_smarty_tpl->tpl_vars['index_show']->value)){?>
	<iframe id="top_pano" src="<?php echo $_smarty_tpl->tpl_vars['index_show']->value;?>
" frameborder="0" width="100%" style="margin-top: -20px" class="hidden-xs hidden-sm"></iframe>
<?php }?>
<!--资料弹框-->
<div class="modal fade" id="fx_modal">
  <div class="modal-dialog">
    <div class="modal-content">
    	<div class="modal-header">
    	       <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
    	       <h4 class="modal-title">作者资料：</h4>
    	   </div>
    	     <div class="modal-body" style="text-align:center">
				 <ul class="zz_zl">
					 <li>昵称：<?php echo $_smarty_tpl->tpl_vars['author']->value['nickname'];?>
</li>
					 <li><span>电话：<?php echo $_smarty_tpl->tpl_vars['author']->value['phone'];?>
</span><span>QQ：<?php echo $_smarty_tpl->tpl_vars['author']->value['qq'];?>
</span></li>
					 <li><span>地区：<?php echo $_smarty_tpl->tpl_vars['author']->value['region'];?>
</span><span>邮件：<?php echo $_smarty_tpl->tpl_vars['author']->value['email'];?>
</span></li>
					 <li>简介：<?php echo $_smarty_tpl->tpl_vars['author']->value['intro'];?>
</li>
				 </ul>
    	     </div>
    </div>
  </div>
</div>

<script> 
	$(function(){
		$("#top_pano").height($(window).height()-120+"px");
	})
	$(window).resize(function(){
		$("#top_pano").height($(window).height()-120+"px");
	});
	function show_profile(){
		$("#fx_modal").modal("show");
	}
</script>
<div class="container-fluid df_h">
	<div class="df_h_con">
		<div class="row" style="margin: 0">
			<div class="col-md-8 col-sm-8 col-xs-12">
				<div class="df_h_data">
					<div class="head"><img src="<?php if (!empty($_smarty_tpl->tpl_vars['author']->value['avatar'])){?><?php echo $_smarty_tpl->tpl_vars['author']->value['avatar'];?>
<?php }else{ ?>/static/images/default_avatar.jpg<?php }?>" /></div>
					<div class="detail">
						<p><span class="names"><?php echo $_smarty_tpl->tpl_vars['author']->value['nickname'];?>
</span><span class="rz"><?php if ($_smarty_tpl->tpl_vars['author']->value['level']>1){?>认证摄影师<?php }?></span><span class="zl"><a href="javascript:void(0);" onClick="javascript:show_profile();">资料</a> </span></p>
						<p style="color: #999999;">全景图片：<?php echo $_smarty_tpl->tpl_vars['work_stat']->value['counts'];?>
　人气：<?php echo number_format($_smarty_tpl->tpl_vars['work_stat']->value['browses'],0,'.',',');?>
</p>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-4 col-xs-12">
				<ul class="row df_tab">
					<li class=""><a href="javascript:void(0);" class="active" onclick="toggle_project('pic',this)">全景摄影</a> </li>
					<li class=""><a href="javascript:void(0);" onclick="toggle_project('video',this)">全景视频</a> </li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="container">
<ul  id="pictures_content" class="row pano-list clearfix">
	
</ul>
</div>
<script>
 	var page = 1;
 	var type = 'pic'; //1 查询全景图 2查询全景视频
 	var uid = '<?php echo $_smarty_tpl->tpl_vars['author']->value['pk_user_main'];?>
';
 	var play_host = '<?php echo $_smarty_tpl->tpl_vars['_lang']->value['cdn_host'];?>
video/play.html?vid=';
	$(function(){
		list(type);
		$(window).scroll(function(){
		　　var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
		　　if(scrollTop + windowHeight == scrollHeight){
		　　　　list(type);
		　　}
		});
	})
	function toggle_project(t,obj){
		$(".df_tab .active").removeClass('active');
		$(obj).addClass('active');
		type = t;
		page = 1;
		$("#pictures_content").html('');
		list(type);
	}
	function list(type){
		alert_notice("加载中...",'success','bottom',500);
		$.post('/people',{
			'uid':uid,
			'type':type,
			'page':page
		},function(res){
			if (res.length==0) {
				alert_notice("没有更多了",'default','bottom');
			}else{
				var html = '';
				if(type == 'pic'){
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
				}else{
					for(var i=0 ; i<res.length;i++){
					var p = res[i];
					html+='<li class="col-md-3 col-sm-6 col-xs-12">'+
				  <!-- 作品链接 --> 
        '<a class="pano-item" target="_blank" href="'+play_host+p.id+'" title="'+p.vname+'">'+
					<!-- 作品图片 -->
					   '<div class="pano-item-img"><img class="lazy" data-was-processed="true" src="'+p.thumb_path+'" alt="'+p.vname+'">'+
					    ' </div>'+
						<!-- 作品信息 -->
						'<div class="pano-item-info">'+
						 <!-- 摄影师信息 -->
                         '<object>'+
						 '<a class=" pano-item-author-avatar" target="_blank" href="/people/<?php echo $_smarty_tpl->tpl_vars['user']->value['pk_user_main'];?>
" title="'+p.nickname+'">'+
						'	<img class="lazy lazy-avatar lazy-loaded" src="'+p.avatar+'" data-original="'+p.avatar+'" data-was-processed="true" title="'+p.nickname+'">'+
						 ' </a>'+
						'	</object>'+
						<!-- 作品标题 -->
					    '   <h3 class="pano-item-title ellipsis">'+p.vname+'</h3>'+
						
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
				}
				if(page == 1)
					$("#pictures_content").html(html);
				else
					$("#pictures_content").append(html);
				page++;

			}
			
		},'json');
	}



</script>
<?php }else{ ?>

<style>



	/*作者专用css*/
	
	body{

background-color:#fafafa
	
}
	
	.bz_people{
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.bz_people_con{
		background: #ffffff;
		padding-top: 20px;
		box-shadow: 0px 2px 2px #eee;
		margin: 0;
		margin-bottom: 20px;
	}
	.bz_people_con>div>a>img{
		border-radius: 1000px;
	}
	.bz_people_con .bz_people_name{
		text-align: center;
		height: 40px;
		color: #222222;
		line-height: 40px;
	}
	.bz_people_con .bz_people_name>a{
		color: #222222;
	}

	.bz_people_xx{
		background: #f2f2f2;

	}
	.bz_people_xx>ul{
		list-style: none;
		padding: 0;
		margin: 0;
		height: 60px;
	}
	.bz_people_xx>ul>li{
		border-right: 1px solid #eaeaea;
		height: 60px;
		padding-top: 10px;
		color: #888888;
	}
	.bz_people_xx>ul>li:last-child{
		border-right: 0px;
	}

	.bz_people_xx>ul>li>p{
		margin: 0;
		text-align: center;
	}
	.bz_people_xx>ul>li>p:last-child{
		font-size: 18px;
		color: #02a6d9;
	}


	.bz_people_rz{
		position: relative;
	}
	.bz_people_rz>span{
		position: absolute;
		display: inline-block;
		width: 30px;
		height: 20px;
		background: #ff7f00;
		top: -20px;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		line-height: 20px;
	}

	@media (max-width: 1050px) {
		.bz_people_xx>ul>li>p:last-child{
			font-size: 12px;
			color: #02a6d9;
		}
	}

	/*选择作者专用css*/
	.bz_c>div.row{
		background: #f3f3f3;
		border: 1px solid #dddddd;
		border-radius: 4px;
		padding: 25px 0px 0px 0px;
		font-family: arail, 宋体;
	}
	.bz_c ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.bz_c .bz_chanelbox{
		margin-bottom: 10px;
	}
	.bz_c .bz_chanelbox>label>h2,.bz_c .control-label>h2{
		color: #888;
		margin: 0;
		font-size: 14px;
		font-family: arail, 宋体;
		margin-top: 3px;
	}

	.bz_c .control-label>h2{
		margin-top: 7px;
	}

	.bz_c .bz_chanelbox>ul>li{
		float: left;
		margin-right: 30px;
	}
	.bz_c .bz_chanelbox>ul>li>a{
		color: #888888;
		font-size: 14px;
	}
	.bz_c .bz_chanelbox>ul>li>a.active{
		color: #00a3d8;
	}
	@media (max-width: 1050px){
		.bz_c .bz_chanelbox{
			margin-bottom: 10px;
		}
		.bz_c .bz_chanelbox>label>h2,.bz_c .control-label>h2{
			color: #888;
			margin: 0;
			font-size: 12px;
			margin-top: 3px;
		}
		.bz_c .control-label>h2{
			margin-top: 10px;
		}
		.bz_c .bz_chanelbox>ul>li{
			float: left;
			margin-right: 15px;
			margin-bottom: 5px;
		}
		.bz_c .bz_chanelbox>ul>li:last-child{
			margin-right: 0px;
		}
		.bz_c .bz_chanelbox>ul>li>a{
			color: #888888;
			font-size: 12px;
		}

	}

</style>







<div class="author-content body-content">

<!-- Banner -->
            <div class="top-banner hidden-xs">
                            <img class="bc-img" src="/template/default/images/5a05685acad9b.jpg" alt="摄影师-列表-单图">
             </div>

 <!-- 二级菜单 -->

<!-- 二级菜单 -->
    <div class="submenu-wrap">
	
        <div class="container">
            <!-- 左侧菜单 -->
            <div class="pull-left">
                <div class="btn-group submenu-btn-group">
                    <!-- 当前选中的标签 -->
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        等级 <i class="iconfont"></i>
                    </a>
                    <!-- 标签列表 -->
                    <ul class="dropdown-menu">
                        <li>
                        <a class="active" href="/people?spm=0.<?php echo $_smarty_tpl->tpl_vars['filter']->value;?>
.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if (empty($_smarty_tpl->tpl_vars['level']->value)||$_smarty_tpl->tpl_vars['level']->value==0){?>class="active"<?php }?>>
						全部
						</a>
						</li>
                    <?php  $_smarty_tpl->tpl_vars['g'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['g']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['groups']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['g']->key => $_smarty_tpl->tpl_vars['g']->value){
$_smarty_tpl->tpl_vars['g']->_loop = true;
?>
					<li ><a  href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['g']->value['id'];?>
.<?php echo $_smarty_tpl->tpl_vars['filter']->value;?>
.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['g']->value['id']==$_smarty_tpl->tpl_vars['level']->value){?>class="active"<?php }?>>
					<?php echo $_smarty_tpl->tpl_vars['g']->value['level_name'];?>

					</a>
					</li>
				<?php } ?>  
                    </ul>
                </div>
            </div>
			
			
					<?php if ($_smarty_tpl->tpl_vars['maxNode']->value){?>

        
         <?php echo $_smarty_tpl->getSubTemplate ("../../plugins/region.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

            
       
   	<?php }?>
			
			
			
			
			<!-- <?php if ($_smarty_tpl->tpl_vars['maxNode']->value){?>
        <div class="pull-left">
            <div class="btn-group submenu-btn-group">
			<a class="dropdown-toggle" data-toggle="dropdown">
			地区 <i class="iconfont"></i>
			</a>
            <ul class="dropdown-menu">
			
			<?php $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['i']->step = 1;$_smarty_tpl->tpl_vars['i']->total = (int)ceil(($_smarty_tpl->tpl_vars['i']->step > 0 ? $_smarty_tpl->tpl_vars['maxNode']->value+1 - (1) : 1-($_smarty_tpl->tpl_vars['maxNode']->value)+1)/abs($_smarty_tpl->tpl_vars['i']->step));
if ($_smarty_tpl->tpl_vars['i']->total > 0){
for ($_smarty_tpl->tpl_vars['i']->value = 1, $_smarty_tpl->tpl_vars['i']->iteration = 1;$_smarty_tpl->tpl_vars['i']->iteration <= $_smarty_tpl->tpl_vars['i']->total;$_smarty_tpl->tpl_vars['i']->value += $_smarty_tpl->tpl_vars['i']->step, $_smarty_tpl->tpl_vars['i']->iteration++){
$_smarty_tpl->tpl_vars['i']->first = $_smarty_tpl->tpl_vars['i']->iteration == 1;$_smarty_tpl->tpl_vars['i']->last = $_smarty_tpl->tpl_vars['i']->iteration == $_smarty_tpl->tpl_vars['i']->total;?>
			
                <li><?php echo $_smarty_tpl->getSubTemplate ("../../plugins/region.lbi", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</li>

            </li>
			<?php }} ?>
			</ul>
        </div>
		</div>
   	<?php }?>--!>
			
			
			
			
			
            <!-- 右侧菜单 -->
            <div class="pull-right">
                <div class="btn-group submenu-btn-group">
                    <!-- 当前选中的标签 -->
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        排序 <i class="iconfont"></i>
                    </a>
                    <!-- 标签列表 -->
                    <ul class="dropdown-menu">
                        
						<li><a href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
.0.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if (empty($_smarty_tpl->tpl_vars['filter']->value)||$_smarty_tpl->tpl_vars['filter']->value==0){?>class="active"<?php }?>>全部</a></li>
				<li><a href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
.1.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['filter']->value===1){?>class="active"<?php }?>>人气</a></li>
				<li><a href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
.2.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['filter']->value===2){?>class="active"<?php }?>>作品</a></li>
				<li><a href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
.3.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['filter']->value===3){?>class="active"<?php }?>>新晋</a></li>
				<li><a href="/people?spm=<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
.4.<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['filter']->value===4){?>class="active"<?php }?>>综合</a></li>
						
						
						
                    </ul>
                </div>
            </div>
        </div>
    </div>









 <!-- 摄影师列表 -->
 
 
<div class="container">
	<!--一个卡片列表行-->
				<!--卡片列表循环-->
				<div class="row author-list clearfix" id="pictures_content">
				</div>
				<!--卡片列表循环结束-->	
		
	</div>
	<!--一个卡片列表行结束-->
</div>
<script>
 	var page = 1;
	var level= '<?php echo $_smarty_tpl->tpl_vars['level']->value;?>
';
	var filter = '<?php echo $_smarty_tpl->tpl_vars['filter']->value;?>
';
	var region = '<?php echo $_smarty_tpl->tpl_vars['region']->value;?>
';
	var maxNode = '<?php echo $_smarty_tpl->tpl_vars['maxNode']->value;?>
';
	var uid = '<?php echo $_smarty_tpl->tpl_vars['u']->value['pk_user_main'];?>
';
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
		$('#region_type_'+maxNode).change(function(){	
			window.location.href = '/people?spm='+level+'.'+filter+'.'+$(this).val()+'';
		});
		$('#region_type_1').change(function(){	
			if($(this).val()==-1){
				window.location.href = '/people?spm='+level+'.'+filter+'.0';
			}
		});
	})
	function list(){
		alert_notice("加载中...",'success','bottom',500);
		$.post('/people',{
			'ajax':1,
			'spm':''+level+'.'+filter+'.'+region+'',
			'page':page,
			'uid':uid
		},function(res){
			var res = res.res;
			if (res.length==0) {
				alert_notice("没有更多了",'default','bottom');
			}
			else{
				var html = '';
				for(var i=0 ; i<res.length;i++){
					var p = res[i];
			  html +='<div class="col-md-3 col-sm-6 col-xs-12 author-list-col">'
                               +'<div class="author-item">';
					if(p.level>1){
					
				html +='<span class="tag-token">认证</span>';
					}			
                        <!-- 摄影师头像 -->
          	html +=	'<a class="author-item-img" href="/people/'+p.pk_user_main+'" target="_blank" title="摄影师的主页">'
           +      '<img class="lazy lazy-avatar lazy-loaded" data-original="'+p.avatar+'" alt="'+p.nickname+'" src="'+p.avatar+'" data-was-processed="true" onerror="this.src=\'/static/images/default_avatar.jpg\'"/>'
           +      '</a>'
                <!-- 摄影师名称 -->
            +   '<a class="author-item-name ellipsis" href="/people/'+p.pk_user_main+'" target="_blank" title="摄影师的主页">'+p.nickname+'</a>'
                                        <!-- 摄影师信息 -->
             +   '<ul class="row author-item-info1">'
	    +	'<li class="col-xs-4">'
            +   '<i class="iconfont"></i><span>'+p.total+'</span>'
            +   '</li>'
             +  '<li class="col-xs-4">'
             +  '<i class="iconfont"></i><span>'+p.popular+' 万</span>'
              +'</li>'
             +'<li class="col-xs-4">'
             +  '<i class="iconfont"></i><span>'+p.praised_num+'</span>'
              + '</li>'
              +'</ul>'
                
                
				<!-- 摄影师作品 --> 
			+	'<div class="col-md-12 col-xs-12 bz_people_xx">'
			+		'<ul class="row">'
						+			'<li class="col-md-6 col-xs-6">'
						+				'<p>人气</p>'
						+				'<p>'+p.popular+'</p>'
						+			'</li>'
						+			'<li class="col-md-6 col-xs-6">'
						+				'<p>作品</p>'
						+				'<p>'+p.total+'</p>'
						+			'</li>'
						+		'</ul>'

			 + '</div>'
			  
           + '</div>'
		   +'</div>'
           +'</div>'
         + '</div>';
		 
		 
		 
		 
		 
		 
		 
				}
				if(page == 1)
					$("#pictures_content").html(html);
				else
					$("#pictures_content").append(html);
				page++;
			}
			
		},'json');
	}
</script>
<?php }?><?php }} ?>