<?php

define('IN_T',true);
require_once "./source/include/init.php";

$act = Common::sfilter($_REQUEST['act']);
$input = $Json->decode(file_get_contents("php://input"));
$view_uuid = Common::sfilter($_REQUEST['view_uuid']);

$scene = Common::sfilter($_REQUEST['scene']);
if (!empty($input)) {
	$act = $input['act'];
	$view_uuid = Common::sfilter($input['view_uuid']);
}
//jssdk Ajax
if($act == 'jssdk'){
	require_once './source/include/cls_weixin_js.php';
	$cur_url = $_REQUEST['currentUrl'];

	$appid = $_lang['wx_config']['appid'];
	$appSecret = $_lang['wx_config']['appsecret'];
	$jssdk = new JSSDK($appid, $appSecret);
	$data = $jssdk->getSignPackage($cur_url);
	header('Content-Type: application/json;charset=utf-8');
	echo json_encode($data);
	exit;
}
//初始化全景项目
else if ($act == 'initPano') {
	//js 获取配置的json
	$pro = $Db->query("SELECT w.* , p.* FROM ".$Base->table('worksmain')." w LEFT JOIN ".$Base->table('pano_config')." p ON w.pk_works_main = p.pk_works_main WHERE w.view_uuid = '$view_uuid' AND flag_publish = 1","Row");
	if (empty($pro)) {
		die("未查询到相关项目");
	}
	$pro = Transaction::decode_str2arr($pro);
	$hotspots = &$pro['hotspot'];
	foreach ($hotspots as &$v) {
		$imgtext = &$v['imgtext'];
		if (!empty($imgtext)) {
			foreach ($imgtext as  &$v2) {
				if ($v2['imgtext_wordContent']) {
					$v2['imgtext_wordContent'] = base64_decode($v2['imgtext_wordContent']);
				}else if ($v2['wordContent']){
					$v2['imgtext_wordContent'] = base64_decode($v2['wordContent']);
					unset($v2['wordContent']);
				}
			}
		}
	}

	$sql = "SELECT video_tie_hotspot FROM ".$Base->table('pano_config')." WHERE pk_works_main=".$pro['pk_works_main'];
	$video_tie_hotspot = $Db->query($sql,"One");
	$rlst['pro']=$pro;
	$rlst['video_tie_hotspot']=Transaction::decode_str2arr($video_tie_hotspot);
	echo $Json->encode($rlst);
	exit;
}
//点赞
else if($act == "add_praise"){
	if (!empty($view_uuid)) {
		$Db->execSql("UPDATE ".$Base->table('worksmain')." SET praised_num = praised_num+1 WHERE view_uuid = '$view_uuid'");
	}
	exit;
}
//校验密码
else if($act=="privacyAccess") {
	$re['status'] = 0;
	$pid = intval($_POST['pid']);
	$pwd =  Common::sfilter($_POST['pwd']);
	$pro = $Db->query('SELECT privacy_password , view_uuid FROM '.$Base->table('worksmain').' WHERE pk_works_main = '.$pid,'Row');

	if (empty($pro)||$pwd!=$pro['privacy_password']) {
		$re['msg'] ="密码有误";
	}else{
		$_SESSION['privacyAccess'][$pro['view_uuid']] = 1;
		$re['status'] = 1;
		$re['url'] = '/tour/'.$pro['view_uuid'];
	}
	echo $Json->encode($re);
	exit;
}
else{
	$pro = $Db->query("SELECT w.*,u.nickname FROM ".$Base->table('worksmain')." w LEFT JOIN ".$Base->table('user')." u ON u.pk_user_main = w.pk_user_main WHERE w.view_uuid = '$view_uuid' AND w.flag_publish = 1 AND u.state=0 ","Row");
	if (empty($pro)) {
		die("未查询到相关项目");
	}
	if(!empty($pro['privacy_password'])&&empty($_SESSION['privacyAccess'][$pro['view_uuid']])){
		//设置了访问密码并且没有登录
		$tp->assign("pid",$pro['pk_works_main']);
		$tp->display($_lang['moban']."/privacy.tpl");
		exit;
	}
	require_once ROOT_PATH.'plugin/plugin_init_function.php';
	plugin_get_plugins("view");
	$Db->execSql("UPDATE ".$Base->table('worksmain')." SET browsing_num = browsing_num+1 WHERE view_uuid = '$view_uuid'");
	$profile = preg_replace("/\s/","", Common::sfilter($pro['profile']));
	$pro['profile_share'] = mb_strlen($profile)>255 ? mb_substr($profile,0,255) : $profile;
	$tp->assign("pro",$pro);
	$tp->assign("scene",$scene);
	$tp->display($_lang['moban']."/tour.tpl");
	$tp->assign('is_moble',Common::is_mobile_visit());

}

?>