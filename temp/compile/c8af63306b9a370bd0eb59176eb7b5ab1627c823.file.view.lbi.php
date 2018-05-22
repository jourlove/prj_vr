<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:47
         compiled from "plugin\vcard\template\view.lbi" */ ?>
<?php /*%%SmartyHeaderCode:1726690085b02ecb7c50175-14988856%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c8af63306b9a370bd0eb59176eb7b5ab1627c823' => 
    array (
      0 => 'plugin\\vcard\\template\\view.lbi',
      1 => 1522279592,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1726690085b02ecb7c50175-14988856',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb7c7728',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb7c7728')) {function content_5b02ecb7c7728($_smarty_tpl) {?><div class="btn_showcard"  title="企业名片" style="display:none"></div>
 
 
 
<script type="text/javascript">

$(function(){    
   plugins_init_function.push(vcard_init);
   $('.btn_showcard').click(function(){   
        $('#vcardModal').modal('show');       
        toggleBtns(false);
   })
}) 
function vcard_init(data){ 
    if(data.vcard&& data.vcard.flag_vcard==1){  
         $('.btn_showcard').show();
         $('#vcardModal').find('.company').text(data.vcard.company);
         $('#vcardModal').find('.phone>a').text(data.vcard.phone).attr('href','tel://'+data.vcard.phone);
		 $('#vcardModal').find('.email').text(data.vcard.email);
         $('#vcardModal').find('.address').text(data.vcard.addr);
         $('#vcardModal').find('.wechat').text('企业微信公众号：'+data.vcard.wx);
         $('#vcardModal').find('.qq').text(data.vcard.qq);
         $('#vcardModal').find('.cardLogo img').attr('src',data.vcard.logo);
         $('#vcardModal').find('.wxLogo img').attr('src',data.vcard.wx_logo);
    }
}  
function hideVcard(){
    $('#vcardModal').modal('hide');
    toggleBtns(true);
}
function showCard(){   
_hmt.push(['_trackEvent', '用户', '企业名片', '事件']);
    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("showCard('/member/vcard?act=view&view_uuid="+_view_uuid+"');");

}
</script>

 
 <?php }} ?>