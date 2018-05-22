<?php
//全景视频
if(!defined('IN_T')){
	die('hacking attempt');
}
$act = Common::sfilter($_REQUEST['act']);
if ($act == 'list') {
	$page = intval($_REQUEST['page']);
	$page = $page<1?1:$page;
	$size =  24;
	$recommend = isset($_REQUEST['recommend']) ? intval($_REQUEST['recommend']) : 1;
	$list = get_video_projects($recommend,$page,$size);
	echo $Json->encode($list);
	exit;
}
$tp->assign('video_top_ad',Transaction::get_ad_by_postion(4));
// $tp->assign('videos',get_video_projects($recommend));

//提取视频项目
function get_video_projects($recommend,$page,$size){
	$sql = "select v.id,v.vname,v.thumb_path,v.praised_num,v.browsing_num,v.pk_user_main,p.avatar,u.nickname  "."from ".$GLOBALS['Base']->table('video')." as v ";
	$sql .= "left join".$GLOBALS['Base']->table('user')." as u on v.pk_user_main=u.pk_user_main ";  
    $sql .= "left join".$GLOBALS['Base']->table('user_profile')." as p on v.pk_user_main=p.pk_user_main ";
	if($recommend>0){
		$sql .= "and recommend=1 ";
		$GLOBALS['tp']->assign('recommend',1);
	}
	$sql.=' limit '.($page-1)*$size.','.$size;
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}
?>