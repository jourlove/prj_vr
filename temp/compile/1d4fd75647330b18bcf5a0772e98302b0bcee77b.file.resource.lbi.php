<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:58:48
         compiled from "plugin\vcard\template\resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:16649214835b02ecb81b5503-18977255%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1d4fd75647330b18bcf5a0772e98302b0bcee77b' => 
    array (
      0 => 'plugin\\vcard\\template\\resource.lbi',
      1 => 1522484866,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16649214835b02ecb81b5503-18977255',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ecb81ccc1',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ecb81ccc1')) {function content_5b02ecb81ccc1($_smarty_tpl) {?><div class="modal fade" id="vcardModal" data-backdrop="static" data-keyboard="false" style="z-index:2002">
    <div class="modal-dialog">
        <div class="modal-header text-center"  style="border-bottom:0px;">          
            <button type="button" class="close" onClick="hideVcard();"><span style=" font-size:32px;">&times;</span></button>
        </div>
        <div class="modal-body">
                <div class="row text-center" style="margin-top:5px;">
                        <div class="col-sm-12 col-xs-12 cardLogo"><img src="/plugin/custom_logo/images/custom_logo.png"  height="70" /></div>
                </div>
                <div class="row" >
                    <div class="col-sm-6 col-xs-12 text-center wxLogo" > <img src="/static/images/wx.jpg" height="222"  style="margin-top:10px;border:1px solid #d3d3d3" /></div>
                    <div class="col-sm-6  col-xs-12">               
                            <div class="vcard" style="margin-top:15px;">
                                <h4 class="company"></h4>
                                <p class="phone"><a href="###"></a></p>
                                <p class="email"></p>
                                <p class="address"></p>
                                <p class="wechat"></p>
                                <p class="qq"></p>
                            </div>
                    </div>
                </div>
        </div>
    </div>
</div>
	
  <style>

 .vcard p {
            background: url(/static/images/card/card-icon.gif) left top no-repeat;
            color: #1d1d1d;
            line-height: 27px;
            margin: 0 0 5px;
            padding: 0 0 0 36px;
            overflow:hidden;
            white-space:nowrap;  
            text-overflow:ellipsis;
        }
        .vcard .phone {
            background-position: 0 -32px;
        }

        .vcard .email {
            background-position: 0 -65px;
        }

        .vcard .address {
            background-position: 0 -194px;
        }

        .vcard .wechat {
            background-position: 0 -162px;
        }
        .vcard .qq {
            background-position: 0 -97px;
        }

        .vcardLogo {
    height: 70px;
    margin: auto auto 42px;
}

        
        .vcard h4 {
    color: #013364;
    font-size: 18px;
    font-weight: 400;
    height: 32px;
    line-height: 32px;
    margin: 0 0 10px;
      white-space:nowrap;  
            text-overflow:ellipsis;
}
.modal-dialog{
               border-radius: 12px;
        }

</style><?php }} ?>