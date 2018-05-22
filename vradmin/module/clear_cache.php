<?php
/*
 *  清空缓存文件
 * ============================================================================

*/
if(!defined('IN_T')){
   die('hacking attempt');
}

//删除全景图片缓存目录
require_once ROOT_PATH.'source/include/cls_file_util.php';
FileUtil::unlinkDir(ROOT_PATH.'data/qr/');
echo $Json->encode(array('status'=>1));
exit;

?>