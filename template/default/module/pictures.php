<?php
//全景摄影
if(!defined('IN_T')){
	die('hacking attempt');
}

$act = Common::sfilter($_REQUEST['act']);
if ($act == 'list') {
	$tag = intval($_REQUEST['tag']);
	$page = intval($_REQUEST['page']);
	$page = $page<1?1:$page;
	$size =  27;
	$list = get_picture_projects($tag,$page,$size);
	echo $Json->encode($list);
	exit;
}else{
	$tp->assign('picture_tags',get_picture_tags());
		$tp->assign('picturs_top_ad',Transaction::get_ad_by_postion(3));
}

//提取图片标签
function get_picture_tags(){
	$sql = "select * from ".$GLOBALS['Base']->table('tag')." where type=1 order by sort asc, id asc";
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}

//提取图片项目
function get_picture_projects($tag,$page,$size){
    	$sql = "select w.name,w.thumb_path,w.view_uuid,w.profile,w.browsing_num,w.praised_num,w.pk_user_main,p.avatar,u.nickname "."from ".$GLOBALS['Base']->table('worksmain')." as w ";
	   	$sql .= "left join".$GLOBALS['Base']->table('user')." as u on w.pk_user_main=u.pk_user_main ";  
        $sql .= "left join".$GLOBALS['Base']->table('user_profile')." as p on w.pk_user_main=p.pk_user_main ";
  	if($tag>0){
		$sql .= "right join (select works_id from ".$GLOBALS['Base']->table('tag_works')." where tag_id=$tag group by works_id) as t on t.works_id=w.pk_works_main ";
	}
	//网站上只显示推荐的
	//if($tag==-1){
		$sql .= "where w.recommend=1 ";
	//}
	$sql .= "order by w.pk_works_main desc limit ".($page-1)*$size.",".$size;;
	$res = $GLOBALS['Db']->query($sql);
	return $res;
}


?>