$(function() {
	new listenInput('phone'); // 监听登录用户名输入
	new listenInput('nickname'); // 监听注册用户名输入
	new listenInput('forget-username'); // 监听忘记密码用户名输入

	/* 登录表单提交 */
	$('#login-form').on('submit', function() {
		var form = $(this)[0];
		var username = form.username.value;
		var password = form.password.value;
		var remember = form.remember.checked;
		var btn = $(this).find(':submit');
		var data = {
			'client': 'web',
			'password': password,
			'remember': remember ? 1 : 0,
		};

        if(inspect.mobile(username)) {
            data.mobile = username;
        } else if(inspect.email(username)) {
            data.email = username;
        } else {
            return layerObj.msg('请正确填写手机号或邮箱');
        }

		// if (!inspect.password(password)) {
		// 	return layerObj.msg('密码格式不正确，请正确填写密码');
		// }

		btn.attr("disabled", true).text('登录中..');

		$.post('/passport/login?act=do_login', data, function(ret) {
			if(ret.status.code === 1) {
				localStorage.setItem('token', ret.result.token);
				location.reload(true);
				btn.attr('disabled', false).text('登 录');
			} else {
				catchError(ret.status.reason);
				btn.attr('disabled', false).text('登 录');
			}
		});

	});

	/* 注册表单提交 */
	$('#reg_form').on('submit', function() {
		var form = $(this)[0];
		var regtype = form.regtype.value;
		var username = form.username.value;
		var captcha = form.captcha.value;
		var nickname = form.nickname.value;
		var password = form.password.value;
		var confirm_password = form.confirm_password.value;
		var accept = form.accept.checked;
		var btn = $(this).find(':submit');
		var data = {
			'captcha': captcha,
			'nickname': nickname,
			'password': password,
			'confirm_password': confirm_password,
			'accept':accept ? 1 : 0
		};

		switch (regtype) {
			case 'mobile':
				data.mobile = username;
				break;
			case 'email':
				data.email = username;
				break;
			default:
				return layerObj.msg('请正确填写手机号或邮箱');
		}

		if (!inspect.captcha(captcha)) {
			return layerObj.msg('请输入4位数字的验证码');
		} else if (!inspect.nickname(nickname)){
			return layerObj.msg('请输入长度为4-64位的昵称');
		} else if (!inspect.password(password)){
			return layerObj.msg('密码格式不正确，请正确填写密码');
		} else if (password !== confirm_password) {
			return layerObj.msg('两次输入的密码不一致');
		} else if(!accept) {
			return layerObj.msg('请仔细阅读并同意《平台使用协议》')
		} 

		btn.attr('disabled', true).text('注册中..');

		$.post('/passport/register', data, function(res) {
			if(res.status.code === 1) {
				layerObj.msg('注册成功，请登录','success');
				$('#register-modal').modal('hide');
				$('#login-modal').modal('show');
				$('#login-form').find('input[name="username"]').val(username);
				btn.attr('disabled', false).text('注 册');
			} else {
				catchError(res.status.reason);
				btn.attr('disabled', false).text('注 册');
			}
		});

	});


	/* 找回密码表单提交 */
	$('#forget-form').on('submit', function() {
		var form = $(this)[0];
		var username = form.username.value;
		var regtype = form.regtype.value;
		var captcha = form.captcha.value;
		var password = form.password.value;
		var confirm_password = form.confirm_password.value;
		var btn = $(this).find('#forget-btn');
		var data = {
			'captcha': captcha,
			'password': password,
			'confirm_password': confirm_password,
		};

		switch (regtype) {
			case 'mobile':
				data.mobile = username;
				break;
			case 'email':
				data.email = username;
				break;
			default:
				return layerObj.msg('请正确填写手机号或邮箱');
		}

		if (!inspect.captcha(captcha)) {
			return layerObj.msg('请输入4位数字的验证码');
		} else if (!inspect.password(password)){
			return layerObj.msg('密码格式不正确，请正确填写密码');
		} else if (password !== confirm_password) {
			return layerObj.msg('两次输入的密码不一致');
		}

		btn.attr('disabled', true).text('找回中..');

		$.post('/user/reset', data, function(res) {
			if(res.status.code === 1) {
				layerObj.msg('找回密码成功，请登录','success');
				$('#forget-modal').modal('hide');
				$('#login-modal').modal('show');
				$('#login-form').find('input[name="username"]').val(username);
				btn.attr('disabled', false).text('找回密码');
			} else {
				catchError(res.status.reason);
				btn.attr('disabled', false).text('找回密码');
			}
		});

	});

	/* 发送验证码（注册） */
	$("#send_btn").click(function() {
		var _this = $(this);
		var form = $("#reg_form")[0];
        var imgCode = $(this).closest('form').find('input[name="pic_captcha"]').val();
		var username = form.username.value;
		var regtype = form.regtype.value;
		var data = {};
		var postUrl = '';
		var message = '';

		switch (regtype) {
			case 'mobile':
				postUrl = '/sms/register';
				data.mobile = username;
				message = '短信验证码发送成功';
				break;
			case 'email':
				postUrl = '/mail/register';
				message = '验证码发送成功，请登录邮箱查收';
				data.email = username;
				break;
			default:
				return layerObj.msg('请正确填写手机号或邮箱');
		}

		$.post(postUrl, $.extend(data, { pic_captcha: imgCode }), function(res) {
			if(res.status.code === 1) {
				countdown(_this);
				layerObj.msg(message, 'success');
			} else {
                // 更新图片验证码
                updateImgCode("#send_btn")
				catchError(res.status.reason);
			}
		});
	});

	/* 发送验证码（找回密码） */
	$("#forget-captcha-btn").click(function() {
		var _this = $(this);
		var form = $("#forget-form")[0];
        var imgCode = $(this).closest('form').find('input[name="pic_captcha"]').val();
		var username = form.username.value;
		var regtype = form.regtype.value;
		var data = {};
		var postUrl = '';
		var message = '';

		switch (regtype) {
			case 'mobile':
				postUrl = '/sms/password';
				data.mobile = username;
				message = '短信验证码发送成功';
				break;
			case 'email':
				postUrl = '/mail/password';
				message = '验证码发送成功，请登录邮箱查收';
				data.email = username;
				break;
			default:
				return layerObj.msg('请正确填写手机号或邮箱');
		}

		$.post(postUrl, $.extend(data, { pic_captcha: imgCode }), function(res) {
			if(res.status.code === 1) {
				countdown(_this);
				layerObj.msg(message, 'success');
			} else {
				// 更新图片验证码
                updateImgCode("#forget-captcha-btn")
				catchError(res.status.reason);
			}
		});
	});

	/* 注册协议 */
	$('#register-agree').click(function() {
		layerObj.openIframe('注册协议', '/page/useragree', '700px', '600px');
	});
});