<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:48
         compiled from "plugin\top_ad\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:15850531795b02ecb8245db8-26634254%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0c184f94749d7259858d98021e01d2509f1e97c4' => 
    array (
      0 => 'plugin\\top_ad\\template\\resource.lbi',
      1 => 1500883648,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15850531795b02ecb8245db8-26634254',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb82ce95',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb82ce95')) {function content_5b02ecb82ce95($_smarty_tpl) {?><style>
/*	#topAdcontent{
		background: rgba(204, 204, 204, 0.5);
		height: 20px
		 line-height: 20px;
	    color: #353535;
	    font-size: 16px;
	}*/
</style>

<script>
var ad_sys_default = "<?php echo $_SESSION['view']['top_ad']['brief'];?>
";
$(function(){
	plugins_init_function.push(top_ad_init);
})
function top_ad_init(data,settings){
	var data = data.top_ad;
	if(data&&data.show!="0"){
		$(".vrshow_container_logo").css('top','45px');
		$(".vrshow_container_1_min").css('top','45px');
		if (data.adcontent&&data.adcontent.length>0) {
			$("#top_ad").show();
			$("#top_ad marquee").text(data.adcontent);
		}else if(ad_sys_default.length>0){
			$("#top_ad").show();
			$("#top_ad marquee").text(ad_sys_default);
		}
    }
}
</script>

<?php }} ?>