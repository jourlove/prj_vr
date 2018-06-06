<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <title></title>
    <meta name="renderer" content="webkit">
	<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta content="no-cache, no-store, must-revalidate" http-equiv="Cache-Control" />
    <meta content="no-cache" http-equiv="Pragma" />
    <meta content="0" http-equiv="Expires" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="/template/{$_lang.moban}/css/redefine.css">
	<link rel="stylesheet" href="/template/default/css/aliplayer-min.css"/>
    <script language="JavaScript" type="text/javascript" src="/static/js/kr/uhweb.js?v=2.0"></script>
    <script language="JavaScript" type="text/javascript" src="/static/js/kr/video_patch.js?v=0105"></script>
	<script language="JavaScript" type="text/javascript" src="/static/js/kr/polygonHotSpot.js"></script>	
    <script language="JavaScript" type="text/javascript" src="/static/js/kr/vrshow.js?v=012301"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <style>
        @-ms-viewport { width:device-width; }
        @media only screen and (min-device-width:800px) { html { overflow:hidden; } }
        html { height:100%; }
        body { height:100%; overflow:hidden; margin:0; padding:0; font-family:microsoft yahei, Helvetica, sans-serif;  background-color:#000000; }
		.marquee{
            position: absolute;
            overflow:hidden;
            height:34px; 
            line-height:34px;
            width:100%;
            white-space:nowrap;
            z-index: 800;
            color:white;
            text-align: right;
            padding-right: 10px;
            letter-spacing: 1px;
            font-family: 黑体;
            font-size: 15px;
            background: rgba(0,0,0,.3);
    	}
      
      {literal}
    <script type="text/javascript">
        $(function(){
            setSize();
        });
        function setSize(){
            var swidth= $(window).width();
            var pwidth= $("#div_place").width();
            var w=(swidth-pwidth)/2;
            $(".vrshow_container_4_min").css("left",w);
        }
        $(window).resize(function(){
            setSize();
        });
    </script>
    {/literal}

      
    </style>
</head>
<body>

    <script language="JavaScript" type="text/javascript" src="/tour/tour.js?v=121901"></script>
    <div id="fullscreenid" style="position:relative;width:100%; height:100%;">
      
      <div class="marquee" id="top_ad">
			   <marquee  direction="left" behavior="scroll" scrollamount="5" scrolldelay="0" loop="-1" hspace="0" vspace="0"></marquee>
			</div>
		<div class="vrshow_tour_btn_wrap" id="tour_btn_wrap">
              <div class="vrshow_tour_btn_oper" style="margin-right: 20px;">
                 <span class="btn_tour_text" onClick="tour_guid_pause(this)">暂停</span>
             </div>
              <div class="vrshow_tour_btn_oper">
                 <span class="btn_tour_text" onClick="tour_guid_stop()">停止</span>
             </div>
        </div>
		
        <div id="panoBtns" style="display:none">
			<div class="marquee" id="top_ad" style="display: none;">
			   <marquee  direction="left" behavior="scroll" scrollamount="5" scrolldelay="0" loop="-1" hspace="0" vspace="0"></marquee>
			</div>
            <div class="vrshow_container_logo">
                <img id="logoImg" src="/plugin/custom_logo/images/custom_logo.png" style="display: none;"  onclick="javascript:window.open('{$_lang.host}')">

                <div class="vrshow_logo_title" id="user_name_wrap"  >
                    <div id="authorDiv" style="display: none;">作者：<span id="user_nickName">{$pro.nickname}</span></div>
                    <div style="clear:both;"></div>

                </div>
                {foreach $plugins as $k=>$v}
                    {if $v.enable eq 1 AND $v.view_container eq "left_top"}
                        {include file="plugin/$k/template/view.lbi"}
                    {/if}
                {/foreach}

            </div>

            <div class="vrshow_container_1_min">
                <div class="btn_fullscreen" onClick="fullscreen(this)" title="" style="display:none"></div>
                {foreach $plugins as $k=>$v}
                    {if $v.enable eq 1 AND $v.view_container eq "right_top"}
                        {include file="plugin/$k/template/view.lbi"}
                    {/if}
                {/foreach}
            </div>
            <div class="vrshow_radar_btn" onClick="toggleKrpSandTable()">
                <!-- <span class="btn_sand_table_text">沙盘</span> -->
            </div>
            <div class="vrshow_tour_btn" onClick="startTourGuide()">
                <span class="btn_tour_text">一键导览</span>
            </div>
            <div class="vrshow_container_2_min">
            
                {foreach $plugins as $k=>$v}
                    {if $v.enable eq 1 AND $v.view_container eq "right_bottom"}
                        {include file="plugin/$k/template/view.lbi"}
                    {/if}
                {/foreach}
            </div>
            

            <div class="vrshow_container_3_min">
                <div class="img_desc_container_min scene-choose-width" style="display:none">
                    <img src="/static/images/skin1/vr-btn-scene.png" onClick="showthumbs()">
                    <div class="img_desc_min">场景选择</div>
                </div>
            </div>
        </div>
        
        <div id="pano" style="width:100%; height:100%;">
        </div>
		
		<div class="modal" id="pictextModal" data-backdrop="static" data-keyboard="false" style="z-index:2002">
            <div class="modal-dialog">
                <div class="modal-header text-center" >
                    <button type="button" class="close" onClick="hidePictext()"><span>&times;</span></button>
                    <span style="color: #353535;font-weight:700" id="pictextWorkName"></span>
                </div>
                <div class="modal-body" style="height:400px;overflow-y:scroll ">
                    <div class="row">                   
                        <div class="col-sm-offset-1 col-md-offset-1 col-md-10 col-sm-10 col-xs-12" id="pictextContent">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="logreg">
        </div>
        {foreach $plugins as $k=>$v}
            {if $v.enable eq 1 AND $v.view_resource eq 1}
                {include file="plugin/$k/template/resource.lbi"}
            {/if}
        {/foreach}
    </div>


    


	

	
	
	<div class="modal" id="video_player_modal" data-keyboard="false" style="z-index:2002">
            <div class="modal-dialog">
                <div class="modal-body" style="padding: 0">
					<a href="javascript:;" onClick="close_video_player()" style="position:absolute;color:white;z-index:99999;right:5px;top: 3px;">关闭</a>
                    <div class="prism-player" id="J_prismPlayer" ></div>
                </div>
            </div>
        </div>
    	<div id="tour_guide_audio_wrap" style="display: none;"></div>

       
 

</body>
<script type="text/javascript">
var pk_user_main = '{$pro.pk_user_main}';
//组装分享的参数
//title
_title = '{$pro.name}';
_content = '{$pro.profile_share}';
_imgUrl = '{$pro.thumb_path}';
var is_moble = '{$is_moble}';
</script>

<script language="JavaScript" type="text/javascript" src="/static/js/kr/object.js"></script>
<script language="JavaScript" type="text/javascript" src="/static/js/kr/jssdk.js"></script>
<script type="text/javascript" src="/template/default/js/aliplayer-min.js"></script>
</html>