<?php
namespace Qiniu;

final class Zone
{
    public $upHost;
    public $upHostBackup;

    public function __construct($upHost, $upHostBackup)
    {
        $this->upHost = $upHost;
        $this->upHostBackup = $upHostBackup;
    }

    public static function zone0()
    {
        return new self('http://up.qiniu.com', 'http://upload.qiniu.com', 'https://up.qbox.me', 'https://upload.qbox.me');
    }

    public static function zone1()
    {
        return new self('http://up-z1.qiniu.com', 'http://upload-z1.qiniu.com', 'https://up-z1.qbox.me', 'https://upload-z1.qbox.me');
    }
	
	public static function zone2(){
		return new self('http://up-z2.qiniu.com', 'http://upload-z2.qiniu.com','https://up-z2.qbox.me', 'https://upload-z2.qbox.me');
	}
}
