<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:55:35
         compiled from "plugin\loading_img\template\edit_resource.lbi" */ ?>
<?php /*%%SmartyHeaderCode:20188793365b02ebf7998cf2-71145272%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd672dd4c27f8d291bc50f71751be3671ec5120b8' => 
    array (
      0 => 'plugin\\loading_img\\template\\edit_resource.lbi',
      1 => 1526640969,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20188793365b02ebf7998cf2-71145272',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02ebf799cb7',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02ebf799cb7')) {function content_5b02ebf799cb7($_smarty_tpl) {?>            <div id="loadImgModal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                <h4 class="modal-title">开场过渡图片</h4>
            </div>
            <div class="modal-body">
                <p class="text-center">图片大小建议：400 x 400</p>
                <div class="text-center">
                    <img style="width:auto;height:120px;background-color:rgba(0, 0, 0, 0.3)" src="/plugin/loading_img/images/logo.jpg" onerror="">
                </div>
                <div class="text-center" style="margin-top:10px;">
                    <button type="button" class="btn btn-primary" data-modalid="#media_icon" data-imgtype="custom">从媒体库选择</button>
                </div>
                <div class="row" style="margin-top:10px">
                    <label class="col-md-3 text-right" style="height:32px;line-height:32px;">背景色：</label>
                    <div class="col-md-8">
                        <input type="text" name="bgcolor" placeholder="#0093ff" class="form-control" value="#0093ff">
                    </div>
                </div>
                 <div class="row" style="margin-top:10px">
                     <label class="col-md-3 text-right" style="height:32px;line-height:32px;">是否开启：</label>
                     <div class="col-md-8" style="padding-top: 4px;">
                            <label>
                                <input type="radio" name="isopen" value="0" checked>关闭
                            </label>
                            <label>
                                <input type="radio" name="isopen" value="1">开启
                            </label>
                     </div>
                 </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">完成</button>
                <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
            </div>
        </div>
    </div>
</div>
<script src="/plugin/loading_img/js/load_img.js"></script>
<?php }} ?>