<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:12:18
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\default\library\passport_header.lbi" */ ?>
<?php /*%%SmartyHeaderCode:4915275165b02e1d238fa56-41512615%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ddcc29f834a1a34a82deddc6ad455d526f3507f8' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\default\\library\\passport_header.lbi',
      1 => 1517060328,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4915275165b02e1d238fa56-41512615',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e1d23a32d',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e1d23a32d')) {function content_5b02e1d23a32d($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh-ch">
<head>

<script language="JavaScript" type="text/javascript" src="/static/js/jquery-1.9.1.js"></script>

<style>
	.passport_container{
		margin:10% auto 0 auto;
		min-height: 600px;
		width: 300px;
		text-align: center;
	}
</style>
<script>

	function showerr(content,obj){
		alert_notice(content,'default','top');
		if(obj!=null){
			$(obj).parent(".input-group").addClass("has-error");
		}
	}


</script>
</head>

<body>

<?php }} ?>