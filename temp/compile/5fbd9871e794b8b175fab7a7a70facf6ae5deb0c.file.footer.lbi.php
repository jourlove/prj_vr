<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:10:30
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\library\footer.lbi" */ ?>
<?php /*%%SmartyHeaderCode:471956025b02e166890467-47868153%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5fbd9871e794b8b175fab7a7a70facf6ae5deb0c' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\library\\footer.lbi',
      1 => 1524542274,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '471956025b02e166890467-47868153',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '_lang' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e1668de67',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e1668de67')) {function content_5b02e1668de67($_smarty_tpl) {?>		<!--back-top-->
<a href="javascript:;" id="back-top" class="back-top iconfont" title="回到顶部" style="display: inline;"></a>

<footer class="footer-wrap">
	<a href="/"> <?php echo $_smarty_tpl->tpl_vars['_lang']->value['title'];?>
</a>
	<a>2015 - 2018 © All Rights Reserved.</a>
	<a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank"><?php echo $_smarty_tpl->tpl_vars['_lang']->value['icp'];?>
</a>
	<a href="tel:010-0000000">联系电话：<?php echo $_smarty_tpl->tpl_vars['_lang']->value['tel'];?>
</a>
	<a href="http://wpa.qq.com/msgrd?V=3&uin=<?php echo $_smarty_tpl->tpl_vars['_lang']->value['qq'];?>
&Site=<?php echo $_smarty_tpl->tpl_vars['_lang']->value['title'];?>
&Menu=yes" target="_blank">QQ：<?php echo $_smarty_tpl->tpl_vars['_lang']->value['qq'];?>
</a>
	<br><br>
	<a class="hidden-xs"  href="https://v.pinpaibao.com.cn/authenticate/cert/?site=域名&amp;at=business" target="_blank">

	<b id="aqLogoGZXRR" style="display: none;"></b>
	<img src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/images/hy_124x47.png" alt="安全联盟认证" width="124" height="47" style="border: none;">
	</a>
</footer>

<!-- / footer -->



<script language="JavaScript" type="text/javascript" src="/static/js/jquery.form.js"></script>
<script language="JavaScript" type="text/javascript" src="/static/js/bootbox.js"></script> 
<script language="JavaScript" type="text/javascript" src="/static/js/pager.js"></script> 
<script language="JavaScript" type="text/javascript" src="/static/js/common.js"></script>
<script language="JavaScript" type="text/javascript" src="/static/js/zui.js"></script>

<script src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/js/bootstrap.js"></script>
<script src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/js/common.js"></script>
<script src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/js/desktop.js"></script>
<script src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/js/layer.js"></script>
<script src="/template/<?php echo $_smarty_tpl->tpl_vars['_lang']->value['moban'];?>
/js/lazyload.js"></script>


<!-- JavaScript 堆栈 -->

<script>
    $('#is-best').on('click', function () {
        var url = './pano?';

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            url = url + '&best=1'
        }

        window.location.assign(url);
    });
</script>
</body>
</html><?php }} ?>