// ie9以及以下兼容classList属性
if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }

            return {
                add: update(function(classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function(classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function(classes, index, value) {
                    if (~index)
                        classes.splice(index, 1);
                    else
                        classes.push(value);
                }),

                contains: function(value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function(i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}

var inspect = {
	mobile: function(value) {
		return /^1[34578]\d{9}$/.test(value);
	},
	email: function(value) {
		return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value);
	},
	password: function(value) {
		return /^[\w~@#*%]{6,30}$/.test(value);
	},
	captcha: function(value) {
		return /^\d{4}$/.test(value);
	},
	nickname: function(value) {
		return /^.{4,64}$/.test(value);
	},
}

var dectionBrowser = {
	isIE: function(v) {
		var b = document.createElement('b');
		b.innerHTML = '<!--[if IE ' + v + ']><i></i><![endif]-->';
		return b.getElementsByTagName('i').length === 1;
	}
}

var countdown = (function() {
	var timer, wait = 60;
	return function() {
		var obj = [].shift.call(arguments);

		if(wait === 0) {
			obj.removeClass('btn-gray').attr('disabled', false);
			obj.text('获取验证码');
			wait = 60;
		} else {
			if(!obj.hasClass('btn-gray')) obj.addClass('btn-gray').attr('disabled', true);
			obj.text(wait + '秒后重发');
			wait--;
			timer = setTimeout(function() {
				countdown(obj);
			}, 1000);
		}
	}
})();

var layerObj = {
	msg: function(msg, success, time) {
		var _icon = !success ? 5 : 6;
		var _time = !time ? 3000 : time;

		layer.msg(msg, { icon: _icon, shade: 0.3, time: _time });
	},
	confirm: function(title, confirmFn, cancelFn) {
		layer.confirm(title, {
				btn: ['确定', '取消']
			},
			function(index) {
				layer.close(index);

				if(!confirmFn) return false;
				confirmFn();
			},
			function(index) {
				layer.close(index);

				if(!cancelFn) return false;
				cancelFn();
			});
	},
	openIframe: function(title, url, width, heiht, type) {
		var w = !width ? '98%' : width;
		var h = !heiht ? '98%' : heiht;
		var type = !type ? 2 : type;

		layer.open({
			type: type,
			title: title,
			area: [w, h],
			content: url,
			shade: 0.8,
			shadeClose: false
		});
	},
	closeIframe: function() {
		var index = parent.layer.getFrameIndex(window.name);
		parent.layer.close(index);
	}
}

/**
 * 实时监听'input'输入做一些事情
 * 'init' 可根据需求扩展方法
 *
 * @param  {String} selector 监听对象'id'
 */
function listenInput(selector) {
	this.selector = selector;
	this.init();
}

listenInput.prototype.init = function() {
	var self = this;

	$('#' + self.selector).on('propertychange input', function() {
		self.judgeType();
	});
};

listenInput.prototype.judgeType = function() {
	var self = this;
	var username = $('#' + self.selector).val();
	var regtype = $('#' + self.selector).parents('form').find('input[name="regtype"]');

	if(inspect.mobile(username)) {
		regtype.val('mobile');
	} else if(inspect.email(username)) {
		regtype.val('email');
	} else {
		regtype.val('0');
	}
};
/**
 * listenInput -> End
 */

//获取URL参数
function getParameterByName(name, url) {
	if(!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 设置URL参数
function setUrlParams(url, name, value) {
	var r = url;
	if (r != null && r != 'undefined' && r != "") {
		value = encodeURIComponent(value);
		var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
		var tmp = name + "=" + value;
		if (url.match(reg) != null) {
			r = url.replace(eval(reg), tmp);
		}
		else {
			if (url.match("[\?]")) {
				r = url + "&" + tmp;
			} else {
				r = url + "?" + tmp;
			}
		}
	}
	return r;
}

// 当前页面跳转到URL参数所带的链接
function goToUrlByParam(param) {
	var url = getParameterByName(param) ? getParameterByName(param) : window.location.href;
	window.location.href = url;
}

//滚动加载
function scrollLoad(container) {
	showLoadOrPage(container);
	$(window).scroll(function() {
		fetchPosts(container);
	});
}

//滚动加载 请求
function fetchPosts(container) {
	var scrollContainer = $('#' + container);
	var page = scrollContainer.attr('data-next-page');
	if(page && page !== null) {
		clearTimeout($.data(this, "scrollCheck"));
		$.data(this, "scrollCheck", setTimeout(function() {
			var scroll_position = $(window).height() + $(window).scrollTop() + 160;
			var stop_loading = scrollContainer.data('stop-loading');
			if(scroll_position >= $(document).height() && !stop_loading) {
				$.get(page, function(data) {
                    scrollContainer.append(data.result.data);
                    scrollContainer.attr('data-next-page', data.result.next_page || '');
					window.gyLazyLoad.update();
					showLoadOrPage(container);
				});
			}
		}, 350))
	} else {
		// showLoadOrPage(container);
        scrollContainer.data('stop-loading', 'true');
        $('.loading-wrap .load').hide();
        $('.loading-wrap .page').removeClass('hidden');
	}
}

//滚动加载 处理loading
function showLoadOrPage(container) {
	var scrollContainer = $('#' + container);
	var nextPageUrl = scrollContainer.data('next-page');
	var currPage = getParameterByName('page', nextPageUrl);
	if(currPage) {
		if((currPage - 1) % 3 == 0) {
			$('.loading-wrap .load').hide();
			$('.loading-wrap .page').removeClass('hidden').find('a').attr('href', nextPageUrl);
			scrollContainer.data('stop-loading', 'true');
		} else {
			$('.loading-wrap .load').show();
			$('.loading-wrap .page').addClass('hidden');
		}
	} else {
		$('.loading-wrap .load').hide();
		scrollContainer.data('stop-loading', 'true');
		//$('.loading-wrap .page').removeClass('hidden').find('a').attr('href','#').text('加载完了...');
		$('.loading-wrap .page').removeClass('hidden');
	}
}

// 服务端返回错误处理方法
function catchError(value) {
	var valueType = typeof(value);
	var text = ''
	switch (valueType) {
		case "object":
			Object.keys(value).forEach(function (key) {
				text = text + value[key] + '<br>';
			});
			layerObj.msg(text);
			break;
		case 'string':
			layerObj.msg(value);
			break;
	}
}

/* 更新图片验证码 */
