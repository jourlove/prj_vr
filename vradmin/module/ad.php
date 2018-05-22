<?php

if(!defined('IN_T')){
   die('hacking attempt');
}

$act = Common::sfilter($_REQUEST['act']);

//详情: 查看或编辑或增加
if($act=='detail'){
	//id
	$aid = intval($_REQUEST['aid']);
	//传递了sid，验证sid是否存在，不存在强制赋值为0
	if($aid>0){
		$ad = $Db->query("select * from ".$Base->table('ad')." where id=$aid","Row");
		// var_dump($ad);
		if(!$ad){
			$aid = 0;
		}
	}
	//前台查看
	if(empty($_POST)){
		$tp->assign('ad',$ad);
	}
	//后台处理
	else{
		$data = array(
			'ad_name' => Common::sfilter($_POST['img_name']),
			'ad_content' => Common::sfilter($_POST['img_path']),
			'ad_link' => trim($_POST['link']),
			'position'=>intval($_POST['position']),
			'sort'=>intval($_POST['sort'])
		);
		$res['status'] = 0;
		$num = $Db->getCount($Base->table('ad'),'id',array('position'=>$data['position']));
		// print_r($data);exit;
		if(empty($data['ad_name'])){
			$res['msg'] = '请填写广告名称';
		}
		else if(empty($data['ad_content'])){
			$res['msg'] = '广告内容不能为空';
		}
		else if(!empty($data['link']) && !Common::is_url($data['link'])){
			$res['msg'] = '链接地址不正确';
		}
		else if($data['position']<=0){
			$res['msg'] = '请选择位置';
		}else if($aid==0 && (($data['position'] == 1 && $num >=12)||($data['position'] == 2 && $num >=4) ||($data['position']>2 && $num >= 1) )){
			$res['msg'] = '该位置广告超过限制';
		}
		else{
			
			if($aid>0){
				$ad = $Db->query('SELECT * FROM '.$Base->table('ad').' WHERE id = '.$aid,'Row');
				//替换，删除原图
				if($data['ad_content']!=$ad['ad_content']){
					chdir(ROOT_PATH);
					@unlink(substr($slide['ad_content'],1));
				}
				$Db->update($Base->table('ad'),$data,array('id'=>$aid));
			}else{
				$Db->insert($Base->table('ad'),$data);
			}
			
			$res = array('status'=>1,'msg'=>'提交成功','href'=>'/'.ADMIN_PATH.'/?m=ad');
		}
		echo $Json->encode($res);
		exit;
	}
	$tp->assign('act','detail');
}
else if($act=='delete'){
	//id
	$aid = intval($_REQUEST['aid']);
	$res['status'] = 0;
	$ad_content = $Db->query("select ad_content from ".$Base->table('ad')." where id=$aid","One");
	chdir(ROOT_PATH);
	@unlink(substr($ad_content,1));	
	$Db->delete($Base->table('ad'),array('id'=>$aid));
	$res = array('status'=>1,'msg'=>'删除成功！');
	echo $Json->encode($res);
	exit;
}
//列表 
else{
	// $list = $Db->query("select * from ".$Base->table('slide')." order by sort_order asc, id desc");
	$list = $Db->query("select * from ".$Base->table('ad')." ORDER BY id desc");
	$tp->assign('list',$list);
	$tp->assign('act','list');
}
$tp->assign('nav','广告图');
?>