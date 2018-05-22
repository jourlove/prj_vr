<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\vcard\template\edit_resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:19983703325b02ebf7969ee6-35364851%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f44f2926680f74b950326d749843f8b571825470' => 
    array (
      0 => 'plugin\\vcard\\template\\edit_resource.lbi',
      1 => 1509568410,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19983703325b02ebf7969ee6-35364851',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf796dd6',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf796dd6')) {function content_5b02ebf796dd6($_smarty_tpl) {?> <div class="modal fade" id="vcardModal" data-backdrop="static" data-keyboard="false" 　>
    <div class="modal-dialog modal-lg">  
        <div class="modal-content"> 
	        <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
	                <h4 class="modal-title">企业名片</h4>

	        </div>
	        <div class="modal-body">
	         	 	
	                 <div class="row">
			        		  <div class="col-md-6" style="margin-bottom:10px;">
				        	 
				               		<div class="col-md-4 text-right">公司logo：</div>
				                    <div class="col-md-8 text-left">
				                        建议大小204px*70px<br/>
					                    <img style="width:auto;height:110px;margin-bottom:10px;background-color:rgba(0, 0, 0, 0.3)"  class="vcard_logo" src="/plugin/custom_logo/images/custom_logo.png" onerror="">
					               		<br/>
				                  		<button type="button" class="btn btn-primary vcard_logo_btn" data-modalid="#media_icon" data-imgtype="custom">从媒体库选择企业logo</button>         
			                  		</div>          
			               	  </div>
			               	  <div class="col-md-6" style="margin-bottom:10px;">	               	          
			           		 		  <div class="col-md-4 text-right">公众号二维码：</div>
			                    	  <div class="col-md-8 text-left">  
			                    	  建议大小344px*344px<br/>
			                    	  <img style="width:auto;height:110px;margin-bottom:10px;background-color:rgba(0, 0, 0, 0.3)"  class="vcard_wx_logo" src="/static/images/wx.jpg" onerror="">
			                		  <br/>
			                  		  <button type="button" class="btn btn-primary vcard_wx_logo_btn" data-modalid="#media_icon" data-imgtype="custom">选择公众号二维码</button>     
			                  		  </div>            
			               	  </div> 	        	
	               	  </div> 	
	               	  <div class="row">        	
		        		  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">公司名称：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入公司名称" class="form_control company" />
			                  </div> 
		                  </div> 
		                  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">手机/电话：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入手机/电话号码" class="form_control phone" />
			                  </div> 
		                  </div> 

	  					  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">E-mail：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入邮箱地址" class="form_control email" />
			                  </div> 
		                  </div> 

		                  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">公司地址：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入公司地址" class="form_control addr" />
			                  </div> 
		                  </div> 
		                  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">微信号：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入公众号名称" class="form_control wx" />
			                  </div> 
		                  </div> 
	 


		                  <div class="col-md-6" style="margin-bottom:10px;">
		        		 	  <div class="col-md-3 text-right">QQ：</div>
			        		  <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
			                  	<input type="text" placeholder="请输入qq号码" class="form_control qq" />
			                  </div> 
		                  </div> 

		                

  <div class="col-md-6" style="margin-bottom:10px;">
	 									<div class="col-md-3 text-right">开关：</div>
							            <div class="col-md-9 text-left" style="padding-left:20px;padding-right:20px">
							                 <input id="flag_vcard" name="switch_checkbox" class="form-control" type="checkbox" checked="checked"/>
							            </div>
	 						</div>

							
		                </div>

				     
	        </div>
	        <div class="modal-footer">
	            <button class="btn btn-primary" data-dismiss="modal">完成</button>
	        </div>
    	</div>
</div>
</div>
<style>
.form_control{
    height: 32px;
    padding: 5px 8px; 
    font-size: 13px;
    line-height: 1.53846154;
    color: #222;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;

}</style>
<script src="/plugin/vcard/js/vcard.js"></script>
<?php }} ?>