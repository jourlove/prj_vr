<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:47
         compiled from "plugin\praise\template\view.lbi" */ ?>
<?php /*%%SmartyHeaderCode:4788502615b02ecb7d983c9-08193781%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '04dc624890e05faba47c12e688c87f856c8ef7af' => 
    array (
      0 => 'plugin\\praise\\template\\view.lbi',
      1 => 1478770820,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4788502615b02ecb7d983c9-08193781',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb7dceed',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb7dceed')) {function content_5b02ecb7dceed($_smarty_tpl) {?> <div class="img_desc_container_min" id="praiseDiv">
    <img id="btnpraise" src="/static/images/skin1/vr-btn-good.png" onClick="addPraise(this)">
    <div class="img_desc_min" id = "praisedNum">0</div>
</div>

<script>
    $(function(){

         plugins_init_function.push(praise_init);
    })
    function praise_init(data){
        if(data.hidepraise_flag == '1'){
            $("#praiseDiv").hide();
        }else{
        	var value = $.zui.store.get(work_view_uuid);
	    	if (value) {
	    	    $("#btnpraise").attr('src','/static/images/skin1/vr-btn-good-click.png');
	    	}
	    	 $("#praisedNum").text(data.praised_num);
        }
    }
   /**
    * 赞加1，并且发起推送
    * @param obj
    */
   function addPraise(obj) {
       var value = $.zui.store.get(work_view_uuid);
       if (!value)  {
           $(obj).attr('src','/static/images/skin1/vr-btn-good-click.png');
           $.zui.store.set(work_view_uuid, "1");

           var num = $($(obj).next()).text();
           num = parseInt(num);
           $($(obj).next()).text(num + 1);

           $.post("/tour.php",{
               "view_uuid":work_view_uuid,
               "act":"add_praise"
           },function(data){
               //不做处理
           })
       }
   }
</script><?php }} ?>