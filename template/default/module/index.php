<?php
//首页
if(!defined('IN_T')){
	die('hacking attempt');
}


$aid = intval($_REQUEST['aid']);
$a = $Db->query("select * from ".$Base->table('article')." where id=$aid","Row");
$tp->assign('a',$a);



$recommend = get_index_recommend();
$tp->assign('recommend',$recommend);
$tp->assign('slide',get_index_slide());
$tp->assign('ad',get_ad());



//提取首页幻灯片
function get_index_slide(){
	$sql = "select img_name,img_path,link,sort_order ".
	       "from ".$GLOBALS['Base']->table('slide')." order by sort_order asc, id desc";
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}




//提取首页推荐图片
function get_index_recommend(){
  		$sql = "select w.name,w.thumb_path,w.view_uuid,w.profile,w.browsing_num,w.praised_num,w.pk_user_main,p.avatar,u.nickname "."from ".$GLOBALS['Base']->table('worksmain')." as w ";
	   	$sql .= "left join".$GLOBALS['Base']->table('user')." as u on w.pk_user_main=u.pk_user_main ";  
        $sql .= "left join".$GLOBALS['Base']->table('user_profile')." as p on w.pk_user_main=p.pk_user_main ";
	       " where w.recommend=1 order by w.sort asc, w.pk_works_main desc limit 21";
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}


$aid = intval($_REQUEST['aid']);
$a = $Db->query("select * from ".$Base->table('article')." where id=$aid","Row");
$tp->assign('a',$a);

//提取首页广告
function get_ad(){
	$sql = "select ad_content,ad_link,ad_name,position,sort ".
	 "from ".$GLOBALS['Base']->table('ad')." order by sort asc, id desc";
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}


?>


