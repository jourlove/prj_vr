!
function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND",
                j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports,
            function(a) {
                var c = b[g][1][a];
                return e(c || a)
            },
            k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require,
    g = 0; g < d.length; g++) e(d[g]);
    return e
} ({
    1 : [function(a, b, c) { !
        function(a, d) {
            "object" == typeof c ? b.exports = c = d() : "function" == typeof define && define.amd ? define([], d) : a.CryptoJS = d()
        } (this,
        function() {
            var a = a ||
            function(a, b) {
                var c = Object.create ||
                function() {
                    function a() {}
                    return function(b) {
                        var c;
                        return a.prototype = b,
                        c = new a,
                        a.prototype = null,
                        c
                    }
                } (),
                d = {},
                e = d.lib = {},
                f = e.Base = function() {
                    return {
                        extend: function(a) {
                            var b = c(this);
                            return a && b.mixIn(a),
                            b.hasOwnProperty("init") && this.init !== b.init || (b.init = function() {
                                b.$super.init.apply(this, arguments)
                            }),
                            b.init.prototype = b,
                            b.$super = this,
                            b
                        },
                        create: function() {
                            var a = this.extend();
                            return a.init.apply(a, arguments),
                            a
                        },
                        init: function() {},
                        mixIn: function(a) {
                            for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                            a.hasOwnProperty("toString") && (this.toString = a.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                } (),
                g = e.WordArray = f.extend({
                    init: function(a, c) {
                        a = this.words = a || [],
                        this.sigBytes = c != b ? c: 4 * a.length
                    },
                    toString: function(a) {
                        return (a || i).stringify(this)
                    },
                    concat: function(a) {
                        var b = this.words,
                        c = a.words,
                        d = this.sigBytes,
                        e = a.sigBytes;
                        if (this.clamp(), d % 4) for (var f = 0; f < e; f++) {
                            var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                            b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8
                        } else for (var f = 0; f < e; f += 4) b[d + f >>> 2] = c[f >>> 2];
                        return this.sigBytes += e,
                        this
                    },
                    clamp: function() {
                        var b = this.words,
                        c = this.sigBytes;
                        b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8,
                        b.length = a.ceil(c / 4)
                    },
                    clone: function() {
                        var a = f.clone.call(this);
                        return a.words = this.words.slice(0),
                        a
                    },
                    random: function(b) {
                        for (var c, d = [], e = function(b) {
                            var b = b,
                            c = 987654321,
                            d = 4294967295;
                            return function() {
                                c = 36969 * (65535 & c) + (c >> 16) & d,
                                b = 18e3 * (65535 & b) + (b >> 16) & d;
                                var e = (c << 16) + b & d;
                                return e /= 4294967296,
                                (e += .5) * (a.random() > .5 ? 1 : -1)
                            }
                        },
                        f = 0; f < b; f += 4) {
                            var h = e(4294967296 * (c || a.random()));
                            c = 987654071 * h(),
                            d.push(4294967296 * h() | 0)
                        }
                        return new g.init(d, b)
                    }
                }),
                h = d.enc = {},
                i = h.Hex = {
                    stringify: function(a) {
                        for (var b = a.words,
                        c = a.sigBytes,
                        d = [], e = 0; e < c; e++) {
                            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                            d.push((f >>> 4).toString(16)),
                            d.push((15 & f).toString(16))
                        }
                        return d.join("")
                    },
                    parse: function(a) {
                        for (var b = a.length,
                        c = [], d = 0; d < b; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
                        return new g.init(c, b / 2)
                    }
                },
                j = h.Latin1 = {
                    stringify: function(a) {
                        for (var b = a.words,
                        c = a.sigBytes,
                        d = [], e = 0; e < c; e++) {
                            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                            d.push(String.fromCharCode(f))
                        }
                        return d.join("")
                    },
                    parse: function(a) {
                        for (var b = a.length,
                        c = [], d = 0; d < b; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - d % 4 * 8;
                        return new g.init(c, b)
                    }
                },
                k = h.Utf8 = {
                    stringify: function(a) {
                        try {
                            return decodeURIComponent(escape(j.stringify(a)))
                        } catch(a) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(a) {
                        return j.parse(unescape(encodeURIComponent(a)))
                    }
                },
                l = e.BufferedBlockAlgorithm = f.extend({
                    reset: function() {
                        this._data = new g.init,
                        this._nDataBytes = 0
                    },
                    _append: function(a) {
                        "string" == typeof a && (a = k.parse(a)),
                        this._data.concat(a),
                        this._nDataBytes += a.sigBytes
                    },
                    _process: function(b) {
                        var c = this._data,
                        d = c.words,
                        e = c.sigBytes,
                        f = this.blockSize,
                        h = 4 * f,
                        i = e / h;
                        i = b ? a.ceil(i) : a.max((0 | i) - this._minBufferSize, 0);
                        var j = i * f,
                        k = a.min(4 * j, e);
                        if (j) {
                            for (var l = 0; l < j; l += f) this._doProcessBlock(d, l);
                            var m = d.splice(0, j);
                            c.sigBytes -= k
                        }
                        return new g.init(m, k)
                    },
                    clone: function() {
                        var a = f.clone.call(this);
                        return a._data = this._data.clone(),
                        a
                    },
                    _minBufferSize: 0
                }),
                m = (e.Hasher = l.extend({
                    cfg: f.extend(),
                    init: function(a) {
                        this.cfg = this.cfg.extend(a),
                        this.reset()
                    },
                    reset: function() {
                        l.reset.call(this),
                        this._doReset()
                    },
                    update: function(a) {
                        return this._append(a),
                        this._process(),
                        this
                    },
                    finalize: function(a) {
                        return a && this._append(a),
                        this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(a) {
                        return function(b, c) {
                            return new a.init(c).finalize(b)
                        }
                    },
                    _createHmacHelper: function(a) {
                        return function(b, c) {
                            return new m.HMAC.init(a, c).finalize(b)
                        }
                    }
                }), d.algo = {});
                return d
            } (Math);
            return a
        })
    },
    {}],
    2 : [function(a, b, c) { !
        function(d, e) {
            "object" == typeof c ? b.exports = c = e(a("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e(d.CryptoJS)
        } (this,
        function(a) {
            return function() {
                function b(a, b, c) {
                    for (var d = [], f = 0, g = 0; g < b; g++) if (g % 4) {
                        var h = c[a.charCodeAt(g - 1)] << g % 4 * 2,
                        i = c[a.charCodeAt(g)] >>> 6 - g % 4 * 2;
                        d[f >>> 2] |= (h | i) << 24 - f % 4 * 8,
                        f++
                    }
                    return e.create(d, f)
                }
                var c = a,
                d = c.lib,
                e = d.WordArray,
                f = c.enc;
                f.Base64 = {
                    stringify: function(a) {
                        var b = a.words,
                        c = a.sigBytes,
                        d = this._map;
                        a.clamp();
                        for (var e = [], f = 0; f < c; f += 3) for (var g = b[f >>> 2] >>> 24 - f % 4 * 8 & 255, h = b[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, i = b[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, j = g << 16 | h << 8 | i, k = 0; k < 4 && f + .75 * k < c; k++) e.push(d.charAt(j >>> 6 * (3 - k) & 63));
                        var l = d.charAt(64);
                        if (l) for (; e.length % 4;) e.push(l);
                        return e.join("")
                    },
                    parse: function(a) {
                        var c = a.length,
                        d = this._map,
                        e = this._reverseMap;
                        if (!e) {
                            e = this._reverseMap = [];
                            for (var f = 0; f < d.length; f++) e[d.charCodeAt(f)] = f
                        }
                        var g = d.charAt(64);
                        if (g) {
                            var h = a.indexOf(g); - 1 !== h && (c = h)
                        }
                        return b(a, c, e)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            } (),
            a.enc.Base64
        })
    },
    {
        "./core": 1
    }],
    3 : [function(a, b, c) { !
        function(d, e) {
            "object" == typeof c ? b.exports = c = e(a("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e(d.CryptoJS)
        } (this,
        function(a) {
            return a.enc.Utf8
        })
    },
    {
        "./core": 1
    }],
    4 : [function(a, b, c) { !
        function(d, e, f) {
            "object" == typeof c ? b.exports = c = e(a("./core"), a("./sha1"), a("./hmac")) : "function" == typeof define && define.amd ? define(["./core", "./sha1", "./hmac"], e) : e(d.CryptoJS)
        } (this,
        function(a) {
            return a.HmacSHA1
        })
    },
    {
        "./core": 1,
        "./hmac": 5,
        "./sha1": 6
    }],
    5 : [function(a, b, c) { !
        function(d, e) {
            "object" == typeof c ? b.exports = c = e(a("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e(d.CryptoJS)
        } (this,
        function(a) { !
            function() {
                var b = a,
                c = b.lib,
                d = c.Base,
                e = b.enc,
                f = e.Utf8,
                g = b.algo;
                g.HMAC = d.extend({
                    init: function(a, b) {
                        a = this._hasher = new a.init,
                        "string" == typeof b && (b = f.parse(b));
                        var c = a.blockSize,
                        d = 4 * c;
                        b.sigBytes > d && (b = a.finalize(b)),
                        b.clamp();
                        for (var e = this._oKey = b.clone(), g = this._iKey = b.clone(), h = e.words, i = g.words, j = 0; j < c; j++) h[j] ^= 1549556828,
                        i[j] ^= 909522486;
                        e.sigBytes = g.sigBytes = d,
                        this.reset()
                    },
                    reset: function() {
                        var a = this._hasher;
                        a.reset(),
                        a.update(this._iKey)
                    },
                    update: function(a) {
                        return this._hasher.update(a),
                        this
                    },
                    finalize: function(a) {
                        var b = this._hasher,
                        c = b.finalize(a);
                        return b.reset(),
                        b.finalize(this._oKey.clone().concat(c))
                    }
                })
            } ()
        })
    },
    {
        "./core": 1
    }],
    6 : [function(a, b, c) { !
        function(d, e) {
            "object" == typeof c ? b.exports = c = e(a("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e(d.CryptoJS)
        } (this,
        function(a) {
            return function() {
                var b = a,
                c = b.lib,
                d = c.WordArray,
                e = c.Hasher,
                f = b.algo,
                g = [],
                h = f.SHA1 = e.extend({
                    _doReset: function() {
                        this._hash = new d.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(a, b) {
                        for (var c = this._hash.words,
                        d = c[0], e = c[1], f = c[2], h = c[3], i = c[4], j = 0; j < 80; j++) {
                            if (j < 16) g[j] = 0 | a[b + j];
                            else {
                                var k = g[j - 3] ^ g[j - 8] ^ g[j - 14] ^ g[j - 16];
                                g[j] = k << 1 | k >>> 31
                            }
                            var l = (d << 5 | d >>> 27) + i + g[j];
                            l += j < 20 ? 1518500249 + (e & f | ~e & h) : j < 40 ? 1859775393 + (e ^ f ^ h) : j < 60 ? (e & f | e & h | f & h) - 1894007588 : (e ^ f ^ h) - 899497514,
                            i = h,
                            h = f,
                            f = e << 30 | e >>> 2,
                            e = d,
                            d = l
                        }
                        c[0] = c[0] + d | 0,
                        c[1] = c[1] + e | 0,
                        c[2] = c[2] + f | 0,
                        c[3] = c[3] + h | 0,
                        c[4] = c[4] + i | 0
                    },
                    _doFinalize: function() {
                        var a = this._data,
                        b = a.words,
                        c = 8 * this._nDataBytes,
                        d = 8 * a.sigBytes;
                        return b[d >>> 5] |= 128 << 24 - d % 32,
                        b[14 + (d + 64 >>> 9 << 4)] = Math.floor(c / 4294967296),
                        b[15 + (d + 64 >>> 9 << 4)] = c,
                        a.sigBytes = 4 * b.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var a = e.clone.call(this);
                        return a._hash = this._hash.clone(),
                        a
                    }
                });
                b.SHA1 = e._createHelper(h),
                b.HmacSHA1 = e._createHmacHelper(h)
            } (),
            a.SHA1
        })
    },
    {
        "./core": 1
    }],
    7 : [function(a, b, c) {
        b.exports = {
            domain: "g.alicdn.com",
            flashVersion: "2.2.0",
            h5Version: "2.2.0",
            logReportTo: "https://videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track"
        }
    },
    {}],
    8 : [function(a, b, c) {
        a("./lang/index").load();
        var d = a("./player/adaptivePlayer"),
        e = function(a) {
            return d.create(a)
        },
        f = window.Aliplayer = e;
        e.players = {},
        "function" == typeof define && define.amd ? define([],
        function() {
            return f
        }) : "object" == typeof c && "object" == typeof b && (b.exports = f)
    },
    {
        "./lang/index": 10,
        "./player/adaptivePlayer": 27
    }],
    9 : [function(a, b, c) {
        var d = a("../lib/oo"),
        e = a("../lang/index"),
        f = d.extend({
            init: function(a, b) {
                this._player = a,
                this._options = a.options()
            }
        });
        f.prototype.handle = function(a) {
            if (this._options.autoPlayDelay) {
                var b = this._options.autoPlayDelayDisplayText;
                b || (b = e.get("AutoPlayDelayDisplayText").replace("$$", this._options.autoPlayDelay)),
                this._player.trigger("info_show", b),
                this._player.trigger("h5_loading_hide"),
                this._player.trigger("play_btn_hide");
                var c = this;
                this._timeHandler = setTimeout(function() {
                    c._player.trigger("info_hide"),
                    c._options.autoPlayDelay = 0,
                    a && a()
                },
                1e3 * this._options.autoPlayDelay),
                this._player.on("play",
                function() {
                    g(c)
                }),
                this._player.on("pause",
                function() {
                    g(c)
                })
            }
        };
        var g = function(a) {
            a._timeHandler && (clearTimeout(a._timeHandler), a._timeHandler = null)
        };
        b.exports = f
    },
    {
        "../lang/index": 10,
        "../lib/oo": 20
    }],
    10 : [function(a, b, c) {
        var d = a("../config"),
        e = a("../lib/storage"),
        f = a("../lib/io"),
        g = "aliplayer_lang_data",
        h = "aliplayer_lang",
        i = function() {
            return window[h] || (window[h] = (navigator.language || navigator.browserLanguage).toLowerCase()),
            window[h]
        },
        j = function(b, c) {
            var d = window[h];
            if (b || (b = i()), "en-us" != b && "zh-cn" != b) throw new Error('language property should be "en-us" or "zh-cn"');
            if (window[h] = b, k(c), b != d) {
                a("../lib/constants").updateByLanguage()
            }
        },
        k = function(a) {
            var b = o(a),
            c = e.get(b);
            if (c) l(a, JSON.parse(c));
            else {
                var g = "//" + d.domain + "/de/prismplayer/" + d.h5Version + "/lang/" + ("flash" == a ? "flash/": "") + n() + ".json";
                f.get(g,
                function(c) {
                    e.set(b, c),
                    l(a, JSON.parse(c))
                },
                function() {
                    console.log("fail to load language data")
                },
                !1)
            }
        },
        l = function(a, b) {
            var c = o(a);
            window[c] = b
        },
        m = function(a, b) {
            var c = o(a);
            return window[c]
        },
        n = function() {
            var a = i();
            return "en-us" != a && "zh-cn" != a && (a = "en-us"),
            a
        },
        o = function(a) {
            var b = n();
            return a || (a = "h5"),
            g + "_" + a + "_" + d.h5Version.replace(/\./g, "_") + "_" + b
        },
        p = function(a) {
            var b = o(),
            c = window[b];
            if (c) return c[a]
        };
        b.exports.setCurrentLanguage = j,
        b.exports.getCurrentLanguage = i,
        b.exports.getLanguageData = m,
        b.exports.load = k,
        b.exports.get = p
    },
    {
        "../config": 7,
        "../lib/constants": 11,
        "../lib/io": 17,
        "../lib/storage": 22
    }],
    11 : [function(a, b, c) {
        var d = a("../lang/index");
        b.exports.LOAD_START = "loadstart",
        b.exports.LOADED_METADATA = "loadedmetadata",
        b.exports.LOADED_DATA = "loadeddata",
        b.exports.PROGRESS = "progress",
        b.exports.CAN_PLAY = "canplay",
        b.exports.CAN_PLYA_THROUGH = "canplaythrough",
        b.exports.PLAY = "play",
        b.exports.PAUSE = "pause",
        b.exports.ENDED = "ended",
        b.exports.PLAYING = "playing",
        b.exports.WAITING = "waiting",
        b.exports.ERROR = "error",
        b.exports.SUSPEND = "suspend",
        b.exports.STALLED = "stalled",
        b.exports.AuthKeyExpiredEvent = "authkeyexpired",
        b.exports.ErrorCode = {
            InvalidParameter: 4001,
            AuthKeyExpired: 4002,
            InvalidSourceURL: 4003,
            NotFoundSourceURL: 4004,
            StartLoadData: 4005,
            LoadedMetadata: 4006,
            PlayingError: 4007,
            LoadingTimeout: 4008,
            RequestDataError: 4009,
            EncrptyVideoNotSupport: 4010,
            FormatNotSupport: 4011,
            PlayauthDecode: 4012,
            PlayDataDecode: 4013,
            NetworkUnavaiable: 4014,
            UserAbort: 4015,
            NetworkError: 4016,
            URLsIsEmpty: 4017,
            CrossDomain: 4027,
            OtherError: 4400,
            ServerAPIError: 4500
        },
        b.exports.AuthKeyExpired = 7200,
        b.exports.AuthKeyRefreshExpired = 7e3,
        b.exports.VideoErrorCode = {
            1 : 4015,
            2 : 4016,
            3 : 4013,
            4 : 4400
        },
        b.exports.IconType = {
            FontClass: "fontclass",
            Symbol: "symbol",
            Sprite: "Sprite"
        },
        b.exports.SelectedStreamLevel = "selectedStreamLevel",
        b.exports.WidthMapToLevel = {
            0 : "OD",
            640 : "FD",
            960 : "LD",
            1280 : "SD",
            1920 : "HD",
            2580 : "2K",
            3840 : "4K"
        };
        var e = function() {
            b.exports.VideoErrorCodeText = {
                1 : d.get("Error_Load_Abort_Text"),
                2 : d.get("Error_Network_Text"),
                3 : d.get("Error_Decode_Text"),
                4 : d.get("Error_Server_Network_NotSupport_Text")
            },
            b.exports.VideoLevels = {
                0 : d.get("Quality_OD_Text"),
                640 : d.get("Quality_FD_Text"),
                960 : d.get("Quality_LD_Text"),
                1280 : d.get("Quality_SD_Text"),
                1920 : d.get("Quality_HD_Text"),
                2580 : d.get("Quality_2K_Text"),
                3840 : d.get("Quality_4K_Text")
            },
            b.exports.QualityLevels = {
                OD: d.get("Quality_OD_Text"),
                LD: d.get("Quality_LD_Text"),
                FD: d.get("Quality_FD_Text"),
                SD: d.get("Quality_SD_Text"),
                HD: d.get("Quality_HD_Text"),
                "2K": d.get("Quality_2K_Text"),
                "4K": d.get("Quality_4K_Text")
            },
            b.exports.SpeedLevels = [{
                key: 1,
                text: d.get("Speed_1X_Text")
            },
            {
                key: 1.25,
                text: d.get("Speed_125X_Text")
            },
            {
                key: 1.5,
                text: d.get("Speed_15X_Text")
            },
            {
                key: 2,
                text: d.get("Speed_2X_Text")
            }]
        };
        e(),
        b.exports.updateByLanguage = e
    },
    {
        "../lang/index": 10
    }],
    12 : [function(a, b, c) {
        b.exports.get = function(a) {
            for (var b = a + "",
            c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                var e = c[d].trim();
                if (0 == e.indexOf(b)) return unescape(e.substring(b.length + 1, e.length))
            }
            return ""
        },
        b.exports.set = function(a, b, c) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
            var e = "expires=" + d.toGMTString();
            document.cookie = a + "=" + escape(b) + "; " + e
        }
    },
    {}],
    13 : [function(a, b, c) {
        var d = a("./object");
        b.exports.cache = {},
        b.exports.guid = function(a, b) {
            var c, d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            e = [];
            if (b = b || d.length, a) for (c = 0; c < a; c++) e[c] = d[0 | Math.random() * b];
            else {
                var f;
                for (e[8] = e[13] = e[18] = e[23] = "-", e[14] = "4", c = 0; c < 36; c++) e[c] || (f = 0 | 16 * Math.random(), e[c] = d[19 == c ? 3 & f | 8 : f])
            }
            return e.join("")
        },
        b.exports.expando = "vdata" + (new Date).getTime(),
        b.exports.getData = function(a) {
            var c = a[b.exports.expando];
            return c || (c = a[b.exports.expando] = b.exports.guid(), b.exports.cache[c] = {}),
            b.exports.cache[c]
        },
        b.exports.hasData = function(a) {
            var c = a[b.exports.expando];
            return ! (!c || d.isEmpty(b.exports.cache[c]))
        },
        b.exports.removeData = function(a) {
            var c = a[b.exports.expando];
            if (c) {
                delete b.exports.cache[c];
                try {
                    delete a[b.exports.expando]
                } catch(c) {
                    a.removeAttribute ? a.removeAttribute(b.exports.expando) : a[b.exports.expando] = null
                }
            }
        }
    },
    {
        "./object": 19
    }],
    14 : [function(a, b, c) {
        var d = a("./object");
        b.exports.el = function(a) {
            return document.getElementById(a)
        },
        b.exports.createEl = function(a, b) {
            var c;
            return a = a || "div",
            b = b || {},
            c = document.createElement(a),
            d.each(b,
            function(a, b) { - 1 !== a.indexOf("aria-") || "role" == a ? c.setAttribute(a, b) : c[a] = b
            }),
            c
        },
        b.exports.addClass = function(a, b) { - 1 == (" " + a.className + " ").indexOf(" " + b + " ") && (a.className = "" === a.className ? b: a.className + " " + b)
        },
        b.exports.removeClass = function(a, b) {
            var c, d;
            if ( - 1 != a.className.indexOf(b)) {
                for (c = a.className.split(" "), d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1);
                a.className = c.join(" ")
            }
        },
        b.exports.getElementAttributes = function(a) {
            var b, c, d, e, f;
            if (b = {},
            c = ",autoplay,controls,loop,muted,default,", a && a.attributes && a.attributes.length > 0) {
                d = a.attributes;
                for (var g = d.length - 1; g >= 0; g--) e = d[g].name,
                f = d[g].value,
                "boolean" != typeof a[e] && -1 === c.indexOf("," + e + ",") || (f = null !== f),
                b[e] = f
            }
            return b
        },
        b.exports.insertFirst = function(a, b) {
            b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a)
        },
        b.exports.blockTextSelection = function() {
            document.body.focus(),
            document.onselectstart = function() {
                return ! 1
            }
        },
        b.exports.unblockTextSelection = function() {
            document.onselectstart = function() {
                return ! 0
            }
        },
        b.exports.css = function(a, b, c) {
            return ! (!a || !a.style) && (b && c ? (a.style[b] = c, !0) : c || "string" != typeof b ? !c && "object" == typeof b && (d.each(b,
            function(b, c) {
                a.style[b] = c
            }), !0) : a.style[b])
        }
    },
    {
        "./object": 19
    }],
    15 : [function(a, b, c) {
        function d(a, b, c, d) {
            e.each(c,
            function(c) {
                a(b, c, d)
            })
        }
        var e = a("./object"),
        f = a("./data");
        b.exports.on = function(a, c, g) {
            if (e.isArray(c)) return d(b.exports.on, a, c, g);
            var h = f.getData(a);
            h.handlers || (h.handlers = {}),
            h.handlers[c] || (h.handlers[c] = []),
            g.guid || (g.guid = f.guid()),
            h.handlers[c].push(g),
            h.dispatcher || (h.disabled = !1, h.dispatcher = function(c) {
                if (!h.disabled) {
                    c = b.exports.fixEvent(c);
                    var d = h.handlers[c.type];
                    if (d) for (var e = d.slice(0), f = 0, g = e.length; f < g && !c.isImmediatePropagationStopped(); f++) e[f].call(a, c)
                }
            }),
            1 == h.handlers[c].length && (a.addEventListener ? a.addEventListener(c, h.dispatcher, !1) : a.attachEvent && a.attachEvent("on" + c, h.dispatcher))
        },
        b.exports.off = function(a, c, g) {
            if (f.hasData(a)) {
                var h = f.getData(a);
                if (h.handlers) {
                    if (e.isArray(c)) return d(b.exports.off, a, c, g);
                    var i = function(c) {
                        h.handlers[c] = [],
                        b.exports.cleanUpEvents(a, c)
                    };
                    if (c) {
                        var j = h.handlers[c];
                        if (j) {
                            if (!g) return void i(c);
                            if (g.guid) for (var k = 0; k < j.length; k++) j[k].guid === g.guid && j.splice(k--, 1);
                            b.exports.cleanUpEvents(a, c)
                        }
                    } else for (var l in h.handlers) i(l)
                }
            }
        },
        b.exports.cleanUpEvents = function(a, b) {
            var c = f.getData(a);
            0 === c.handlers[b].length && (delete c.handlers[b], a.removeEventListener ? a.removeEventListener(b, c.dispatcher, !1) : a.detachEvent && a.detachEvent("on" + b, c.dispatcher)),
            e.isEmpty(c.handlers) && (delete c.handlers, delete c.dispatcher, delete c.disabled),
            e.isEmpty(c) && f.removeData(a)
        },
        b.exports.fixEvent = function(a) {
            function b() {
                return ! 0
            }
            function c() {
                return ! 1
            }
            if (!a || !a.isPropagationStopped) {
                var d = a || window.event;
                a = {};
                for (var e in d)"layerX" !== e && "layerY" !== e && "keyboardEvent.keyLocation" !== e && ("returnValue" == e && d.preventDefault || (a[e] = d[e]));
                if (a.target || (a.target = a.srcElement || document), a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement, a.preventDefault = function() {
                    d.preventDefault && d.preventDefault(),
                    a.returnValue = !1,
                    a.isDefaultPrevented = b,
                    a.defaultPrevented = !0
                },
                a.isDefaultPrevented = c, a.defaultPrevented = !1, a.stopPropagation = function() {
                    d.stopPropagation && d.stopPropagation(),
                    a.cancelBubble = !0,
                    a.isPropagationStopped = b
                },
                a.isPropagationStopped = c, a.stopImmediatePropagation = function() {
                    d.stopImmediatePropagation && d.stopImmediatePropagation(),
                    a.isImmediatePropagationStopped = b,
                    a.stopPropagation()
                },
                a.isImmediatePropagationStopped = c, null != a.clientX) {
                    var f = document.documentElement,
                    g = document.body;
                    a.pageX = a.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                    a.pageY = a.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
                }
                a.which = a.charCode || a.keyCode,
                null != a.button && (a.button = 1 & a.button ? 0 : 4 & a.button ? 1 : 2 & a.button ? 2 : 0)
            }
            return a
        },
        b.exports.trigger = function(a, c) {
            var d = f.hasData(a) ? f.getData(a) : {},
            e = a.parentNode || a.ownerDocument;
            if ("string" == typeof c) {
                var g = null;
                a.paramData && (g = a.paramData, a.paramData = null, a.removeAttribute(g)),
                c = {
                    type: c,
                    target: a,
                    paramData: g
                }
            }
            if (c = b.exports.fixEvent(c), d.dispatcher && d.dispatcher.call(a, c), e && !c.isPropagationStopped() && !1 !== c.bubbles) b.exports.trigger(e, c);
            else if (!e && !c.defaultPrevented) {
                var h = f.getData(c.target);
                c.target[c.type] && (h.disabled = !0, "function" == typeof c.target[c.type] && c.target[c.type](), h.disabled = !1)
            }
            return ! c.defaultPrevented
        },
        b.exports.one = function(a, c, g) {
            if (e.isArray(c)) return d(b.exports.one, a, c, g);
            var h = function() {
                b.exports.off(a, c, h),
                g.apply(this, arguments)
            };
            h.guid = g.guid = g.guid || f.guid(),
            b.exports.on(a, c, h)
        }
    },
    {
        "./data": 13,
        "./object": 19
    }],
    16 : [function(a, b, c) {
        var d = a("./data");
        b.exports.bind = function(a, b, c) {
            b.guid || (b.guid = d.guid());
            var e = function() {
                return b.apply(a, arguments)
            };
            return e.guid = c ? c + "_" + b.guid: b.guid,
            e
        }
    },
    {
        "./data": 13
    }],
    17 : [function(a, b, c) {
        var d = a("./url");
        b.exports.get = function(a, b, c, e, f) {
            var g, h, i, j, k;
            c = c ||
            function() {},
            "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch(a) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch(a) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch(a) {}
                throw new Error("This browser does not support XMLHttpRequest.")
            }),
            h = new XMLHttpRequest,
            i = d.parseUrl(a),
            j = window.location,
            k = i.protocol + i.host !== j.protocol + j.host,
            !k || !window.XDomainRequest || "withCredentials" in h ? (g = "file:" == i.protocol || "file:" == j.protocol, h.onreadystatechange = function() {
                4 === h.readyState && (200 === h.status || g && 0 === h.status ? b(h.responseText) : c(h.responseText))
            }) : (h = new window.XDomainRequest, h.onload = function() {
                b(h.responseText)
            },
            h.onerror = c, h.onprogress = function() {},
            h.ontimeout = c);
            try {
                void 0 === e && (e = !0),
                h.open("GET", a, e),
                f && (h.withCredentials = !0)
            } catch(a) {
                return void c(a)
            }
            try {
                h.send()
            } catch(a) {
                c(a)
            }
        },
        b.exports.jsonp = function(a, b, c) {
            var d = "jsonp_callback_" + Math.round(1e5 * Math.random()),
            e = document.createElement("script");
            a && (e.src = a + (a.indexOf("?") >= 0 ? "&": "?") + "callback=" + d + "&cb=" + d, e.onerror = function() {
                delete window[d],
                document.body.removeChild(e),
                c()
            },
            e.onload = function() {
                setTimeout(function() {
                    window[d] && (delete window[d], document.body.removeChild(e))
                },
                0)
            },
            window[d] = function(a) {
                delete window[d],
                document.body.removeChild(e),
                b(a)
            },
            document.body.appendChild(e))
        },
        b.exports.loadJS = function(a, b) {
            var c = document.getElementsByTagName("HEAD").item(0),
            d = document.createElement("script");
            d.type = "text/javascript",
            d.src = a,
            d.onload = function() {
                b && b()
            },
            c.appendChild(d)
        }
    },
    {
        "./url": 24
    }],
    18 : [function(a, b, c) {
        var d = a("./dom");
        b.exports.render = function(a, b) {
            var c = b.align ? b.align: "tl",
            e = b.x ? b.x: 0,
            f = b.y ? b.y: 0;
            "tl" === c ? d.css(a, {
                float: "left",
                "margin-left": e + "px",
                "margin-top": f + "px"
            }) : "tr" === c ? d.css(a, {
                float: "right",
                "margin-right": e + "px",
                "margin-top": f + "px"
            }) : "tlabs" === c ? d.css(a, {
                position: "absolute",
                left: e + "px",
                top: f + "px"
            }) : "trabs" === c ? d.css(a, {
                position: "absolute",
                right: e + "px",
                top: f + "px"
            }) : "blabs" === c ? d.css(a, {
                position: "absolute",
                left: e + "px",
                bottom: f + "px"
            }) : "brabs" === c ? d.css(a, {
                position: "absolute",
                right: e + "px",
                bottom: f + "px"
            }) : "cc" === c && d.css(a, {
                position: "absolute",
                left: "50%",
                top: "50%",
                "margin-top": a.offsetHeight / -2 + "px",
                "margin-left": a.offsetWidth / -2 + "px"
            })
        }
    },
    {
        "./dom": 14
    }],
    19 : [function(a, b, c) {
        var d = Object.prototype.hasOwnProperty;
        b.exports.create = Object.create ||
        function(a) {
            function b() {}
            return b.prototype = a,
            new b
        },
        b.exports.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.call(arg)
        },
        b.exports.isEmpty = function(a) {
            for (var b in a) if (null !== a[b]) return ! 1;
            return ! 0
        },
        b.exports.each = function(a, c, e) {
            if (b.exports.isArray(a)) for (var f = 0,
            g = a.length; f < g && !1 !== c.call(e || this, a[f], f); ++f);
            else for (var h in a) if (d.call(a, h) && !1 === c.call(e || this, h, a[h])) break;
            return a
        },
        b.exports.merge = function(a, b) {
            if (!b) return a;
            for (var c in b) d.call(b, c) && (a[c] = b[c]);
            return a
        },
        b.exports.deepMerge = function(a, c) {
            var e, f, g;
            a = b.exports.copy(a);
            for (e in c) d.call(c, e) && (f = a[e], g = c[e], b.exports.isPlain(f) && b.exports.isPlain(g) ? a[e] = b.exports.deepMerge(f, g) : a[e] = c[e]);
            return a
        },
        b.exports.copy = function(a) {
            return b.exports.merge({},
            a)
        },
        b.exports.isPlain = function(a) {
            return !! a && "object" == typeof a && "[object Object]" === a.toString() && a.constructor === Object
        },
        b.exports.isArray = Array.isArray ||
        function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        b.exports.unescape = function(a) {
            return a.replace(/&([^;]+);/g,
            function(a, b) {
                return {
                    amp: "&",
                    lt: "<",
                    gt: ">",
                    quot: '"',
                    "#x27": "'",
                    "#x60": "`"
                } [b.toLowerCase()] || a
            })
        }
    },
    {}],
    20 : [function(a, b, c) {
        var d = a("./object"),
        e = function() {},
        e = function() {};
        e.extend = function(a) {
            var b, c;
            a = a || {},
            b = a.init || a.init || this.prototype.init || this.prototype.init ||
            function() {},
            c = function() {
                b.apply(this, arguments)
            },
            c.prototype = d.create(this.prototype),
            c.prototype.constructor = c,
            c.extend = e.extend,
            c.create = e.create;
            for (var f in a) a.hasOwnProperty(f) && (c.prototype[f] = a[f]);
            return c
        },
        e.create = function() {
            var a = d.create(this.prototype);
            return this.apply(a, arguments),
            a
        },
        b.exports = e
    },
    {
        "./object": 19
    }],
    21 : [function(a, b, c) {
        var d = a("./object"),
        e = a("../config"),
        f = a("./dom"),
        g = a("./ua"),
        h = {
            preload: !1,
            autoplay: !0,
            useNativeControls: !1,
            width: "100%",
            height: "300px",
            cover: "",
            from: "",
            trackLog: !0,
            isLive: !1,
            playsinline: !1,
            showBarTime: 5e3,
            rePlay: !1,
            liveRetry: 5,
            liveRetryInterval: 1,
            liveRetryStep: 0,
            format: "mp4",
            loadDataTimeout: 60,
            controlBarForOver: !1,
            controlBarVisibility: "hover",
            enableSystemMenu: !1,
            qualitySort: "asc",
            x5_video_position: "normal",
            x5_type: "h5",
            x5_fullscreen: !1,
            x5_orientation: "portraint",
            autoPlayDelay: 0,
            autoPlayDelayDisplayText: "",
            useHlsPluginForSafari: !1,
            language: "zh-cn",
            mediaType: "video",
            skinRes: "//" + e.domain + "/de/prismplayer-flash/" + e.flashVersion + "/atlas/defaultSkin"
        };
        b.exports.defaultH5Layout = [{
            name: "bigPlayButton",
            align: "blabs",
            x: 30,
            y: 80
        },
        {
            name: "H5Loading",
            align: "cc"
        },
        {
            name: "errorDisplay",
            align: "tlabs",
            x: 0,
            y: 0
        },
        {
            name: "infoDisplay",
            align: "cc"
        },
        {
            name: "controlBar",
            align: "blabs",
            x: 0,
            y: 0,
            children: [{
                name: "progress",
                align: "tlabs",
                x: 0,
                y: 0
            },
            {
                name: "playButton",
                align: "tl",
                x: 15,
                y: 26
            },
            {
                name: "timeDisplay",
                align: "tl",
                x: 10,
                y: 24
            },
            {
                name: "fullScreenButton",
                align: "tr",
                x: 20,
                y: 25
            },
            {
                name: "streamButton",
                align: "tr",
                x: 10,
                y: 23
            },
            {
                name: "speedButton",
                align: "tr",
                x: 10,
                y: 23
            },
            {
                name: "volume",
                align: "tr",
                x: 20,
                y: 25
            }]
        }],
        b.exports.defaultAudioLayout = [{
            name: "controlBar",
            align: "blabs",
            x: 0,
            y: 0,
            children: [{
                name: "progress",
                align: "tlabs",
                x: 0,
                y: 0
            },
            {
                name: "playButton",
                align: "tl",
                x: 15,
                y: 26
            },
            {
                name: "timeDisplay",
                align: "tl",
                x: 10,
                y: 24
            },
            {
                name: "volume",
                align: "tr",
                x: 20,
                y: 25
            }]
        }],
        b.exports.defaultFlashLayout = [{
            name: "bigPlayButton",
            align: "blabs",
            x: 30,
            y: 80
        },
        {
            name: "controlBar",
            align: "blabs",
            x: 0,
            y: 0,
            children: [{
                name: "progress",
                align: "tlabs",
                x: 0,
                y: 0
            },
            {
                name: "playButton",
                align: "tl",
                x: 15,
                y: 26
            },
            {
                name: "nextButton",
                align: "tl",
                x: 10,
                y: 26
            },
            {
                name: "timeDisplay",
                align: "tl",
                x: 10,
                y: 24
            },
            {
                name: "fullScreenButton",
                align: "tr",
                x: 10,
                y: 25
            },
            {
                name: "streamButton",
                align: "tr",
                x: 10,
                y: 23
            },
            {
                name: "volume",
                align: "tr",
                x: 10,
                y: 25
            }]
        },
        {
            name: "fullControlBar",
            align: "tlabs",
            x: 0,
            y: 0,
            children: [{
                name: "fullTitle",
                align: "tl",
                x: 25,
                y: 6
            },
            {
                name: "fullNormalScreenButton",
                align: "tr",
                x: 24,
                y: 13
            },
            {
                name: "fullTimeDisplay",
                align: "tr",
                x: 10,
                y: 12
            },
            {
                name: "fullZoom",
                align: "cc"
            }]
        }],
        b.exports.canPlayType = function(a) {
            var b = document.createElement("video");
            return b.canPlayType ? b.canPlayType(a) : ""
        },
        b.exports.canPlayHls = function() {
            return "" != b.exports.canPlayType("application/x-mpegURL")
        },
        b.exports.isSafariUsedHlsPlugin = function(a) {
            return !! (g.os.pc && g.browser.safari && a && "11.0" != g.browser.version)
        },
        b.exports.validateSource = function(a) {
            if (a) {
                return !! new RegExp(".m3u8|.mp4|.mp3|.flv|rtmp", "i").test(a)
            }
            return ! 0
        },
        b.exports.supportH5Video = function() {
            return void 0 !== document.createElement("video").canPlayType
        },
        b.exports.createWrapper = function(a) {
            var c, d = a.id;
            if ("string" == typeof d ? (0 === d.indexOf("#") && (d = d.slice(1)), c = f.el(d)) : c = d, !c || !c.nodeName) throw new TypeError("没有为播放器指定容器");
            return b.exports.adjustContainerLayout(c, a),
            c
        },
        b.exports.adjustContainerLayout = function(a, b) {
            b.width && !a.style.width && (a.style.width = b.width),
            b.height && !a.style.height && (a.style.height = b.height)
        },
        b.exports.isSupportHls = function() {
            var a = window.MediaSource = window.MediaSource || window.WebKitMediaSource,
            b = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer,
            c = a && "function" == typeof a.isTypeSupported && a.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
            d = !b || b.prototype && "function" == typeof b.prototype.appendBuffer && "function" == typeof b.prototype.remove;
            return c && d
        },
        b.exports.isAudio = function(a) {
            return a && a.toLowerCase().indexOf(".mp3") > 0
        },
        b.exports.isHls = function(a) {
            return a && a.toLowerCase().indexOf(".m3u8") > 0
        },
        b.exports.isFlv = function(a) {
            return a && a.toLowerCase().indexOf(".flv") > 0
        },
        b.exports.isRTMP = function(a) {
            return a && a.toLowerCase().indexOf("rtmp") > -1
        },
        b.exports.handleOption = function(a, b) {
            var c = d.merge(d.copy(h), a),
            e = [{
                name: "liveDisplay",
                align: "tlabs",
                x: 15,
                y: 25
            },
            {
                name: "fullScreenButton",
                align: "tr",
                x: 20,
                y: 25
            },
            {
                name: "volume",
                align: "tr",
                x: 20,
                y: 25
            }];
            if (a.isLive) if (void 0 === a.skinLayout) c.skinLayout = [{
                name: "errorDisplay",
                align: "tlabs",
                x: 0,
                y: 0
            },
            {
                name: "infoDisplay",
                align: "cc"
            },
            {
                name: "bigPlayButton",
                align: "blabs",
                x: 30,
                y: 80
            },
            {
                name: "H5Loading",
                align: "cc"
            },
            {
                name: "controlBar",
                align: "blabs",
                x: 0,
                y: 0,
                children: e
            }];
            else if (0 != a.skinLayout) {
                for (var f = a.skinLayout.length,
                g = [], i = -1, j = 0; j < f; j++) if ("controlBar" == c.skinLayout[j].name) {
                    i = j;
                    for (var k = c.skinLayout[j].children.length, l = 0; l < k; l++) {
                        var m = c.skinLayout[j].children[l].name;
                        "liveDisplay" != m && "fullScreenButton" != m && "volume" != m && "snapshot" != m || g.push(c.skinLayout[j].children[l])
                    }
                    break
                } - 1 != i && (c.skinLayout[i].children = g)
            }
            return c
        }
    },
    {
        "../config": 7,
        "./dom": 14,
        "./object": 19,
        "./ua": 23
    }],
    22 : [function(a, b, c) {
        b.exports.set = function(a, b) {
            try {
                window.localStorage && localStorage.setItem(a, b)
            } catch(c) {
                window[a + "_localStorage"] = b
            }
        },
        b.exports.get = function(a) {
            try {
                if (window.localStorage) return localStorage.getItem(a)
            } catch(b) {
                return window[a + "_localStorage"]
            }
            return ""
        }
    },
    {}],
    23 : [function(a, b, c) {
        function d() {
            var a = navigator.userAgent,
            c = "other",
            d = b.exports.os;
            if (d.ios) return "iOS";
            if (d.android) return "Android";
            var e = "Win32" == navigator.platform || "Windows" == navigator.platform || a.indexOf("Windows") > -1,
            f = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform; (f && (c = "Mac"), "X11" == navigator.platform && !e && !f && (c = "Unix"), String(navigator.platform).indexOf("Linux") > -1 && (c = "Linux"), e) && ((a.indexOf("Windows NT 5.0") > -1 || a.indexOf("Windows 2000") > -1) && (c = "Win2000"), (a.indexOf("Windows NT 5.1") > -1 || a.indexOf("Windows XP") > -1) && (c = "WinXP"), (a.indexOf("Windows NT 5.2") > -1 || a.indexOf("Windows 2003") > -1) && (c = "Win2003"), (a.indexOf("Windows NT 6.0") > -1 || a.indexOf("Windows Vista") > -1) && (c = "WinVista"), (a.indexOf("Windows NT 6.1") > -1 || a.indexOf("Windows 7") > -1) && (c = "Win7"), (a.indexOf("Windows NT 6.2") > -1 || a.indexOf("Windows 8") > -1) && (c = "Win8"), (a.indexOf("Windows NT 6.3") > -1 || a.indexOf("Windows 8.1") > -1) && (c = "Win8.1"), (a.indexOf("Windows NT 10") > -1 || a.indexOf("Windows 10") > -1) && (c = "Win10"));
            return c
        }
        function e() {
            var a = navigator.userAgent.toLowerCase(),
            c = b.exports.browser;
            return c.chrome ? "Chrome": c.firefox ? "Firefox": c.safari ? "Safari": c.webview ? "webview": c.ie ? /Edge/.test(a) ? "Edge": "IE": /Baiduspider/.test(a) ? "Baiduspider": /ucweb/.test(a) || /UCBrowser/.test(a) ? "UC": /opera/.test(a) ? "Opera": /ucweb/.test(a) ? "UC": /360se/.test(a) ? "360浏览器": /bidubrowser/.test(a) ? "百度浏览器": /metasr/.test(a) ? "搜狗浏览器": /lbbrowser/.test(a) ? "猎豹浏览器": /micromessenger/.test(a) ? "微信内置浏览器": /qqbrowser/.test(a) ? "QQ浏览器": void 0
        }
        if (b.exports.USER_AGENT = navigator.userAgent, b.exports.IS_IPHONE = /iPhone/i.test(b.exports.USER_AGENT), b.exports.IS_IPAD = /iPad/i.test(b.exports.USER_AGENT), b.exports.IS_IPOD = /iPod/i.test(b.exports.USER_AGENT), b.exports.IS_MAC = /mac/i.test(b.exports.USER_AGENT), b.exports.IS_SAFARI = /Safari/i.test(b.exports.USER_AGENT), b.exports.IS_CHROME = /Chrome/i.test(b.exports.USER_AGENT), b.exports.IS_FIREFOX = /Firefox/i.test(b.exports.USER_AGENT), document.all) try {
            var f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            b.exports.HAS_FLASH = !!f
        } catch(a) {
            b.exports.HAS_FLASH = !1
        } else if (navigator.plugins && navigator.plugins.length > 0) {
            var f = navigator.plugins["Shockwave Flash"];
            b.exports.HAS_FLASH = !!f
        } else b.exports.HAS_FLASH = !1;
        b.exports.IS_MAC_SAFARI = b.exports.IS_MAC && b.exports.IS_SAFARI && !b.exports.IS_CHROME && !b.exports.HAS_FLASH,
        b.exports.IS_IOS = b.exports.IS_IPHONE || b.exports.IS_IPAD || b.exports.IS_IPOD || b.exports.IS_MAC_SAFARI,
        b.exports.IOS_VERSION = function() {
            var a = b.exports.USER_AGENT.match(/OS (\d+)_/i);
            if (a && a[1]) return a[1]
        } (),
        b.exports.IS_ANDROID = /Android/i.test(b.exports.USER_AGENT),
        b.exports.ANDROID_VERSION = function() {
            var a, c, d = b.exports.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            return d ? (a = d[1] && parseFloat(d[1]), c = d[2] && parseFloat(d[2]), a && c ? parseFloat(d[1] + "." + d[2]) : a || null) : null
        } (),
        b.exports.IS_OLD_ANDROID = b.exports.IS_ANDROID && /webkit/i.test(b.exports.USER_AGENT) && b.exports.ANDROID_VERSION < 2.3,
        b.exports.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        b.exports.IS_MOBILE = b.exports.IS_IOS || b.exports.IS_ANDROID,
        b.exports.IS_H5 = b.exports.IS_MOBILE || !b.exports.HAS_FLASH,
        b.exports.IS_PC = !b.exports.IS_H5,
        b.exports.is_X5 = /micromessenger/i.test(b.exports.USER_AGENT) || /qqbrowser/i.test(b.exports.USER_AGENT),
        b.exports.getHost = function(a) {
            var b = "";
            if (void 0 === a || null == a || "" == a) return "";
            var c = "^((https|http)?:?//)[^s]+/*",
            d = a.match(c);
            if (null != d) {
                b = d[0].replace(/https:\/\/|http:\/\/|\/\//g, "");
                var e = b.indexOf("/");
                e > 0 && (b = b.substring(0, e))
            }
            return b
        },
        b.exports.inIFrame = function() {
            return self != top
        },
        b.exports.getReferer = function() {
            return b.exports.inIFrame() ? top.document.referrer: document.referrer
        },
        b.exports.getHref = function() {
            return b.exports.inIFrame() ? top.location.href: location.href
        },
        function(a) {
            function b(a, b) {
                var c = this.os = {},
                f = this.browser = {},
                g = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                h = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                i = !!a.match(/\(Macintosh\; Intel /),
                j = a.match(/(iPad).*OS\s([\d_]+)/),
                k = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !j && a.match(/(iPhone\sOS)\s([\d_]+)/),
                m = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                n = /Win\d{2}|Windows/.test(b),
                o = a.match(/Windows Phone ([\d.]+)/),
                p = m && a.match(/TouchPad/),
                q = a.match(/Kindle\/([\d.]+)/),
                r = a.match(/Silk\/([\d._]+)/),
                s = a.match(/(BlackBerry).*Version\/([\d.]+)/),
                t = a.match(/(BB10).*Version\/([\d.]+)/),
                u = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                v = a.match(/PlayBook/),
                w = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                x = a.match(/Firefox\/([\d.]+)/),
                y = a.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                z = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                A = !w && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                B = A || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                if ((f.webkit = !!g) && (f.version = g[1]), h && (c.android = !0, c.version = h[2]), l && !k && (c.ios = c.iphone = !0, c.version = l[2].replace(/_/g, ".")), j && (c.ios = c.ipad = !0, c.version = j[2].replace(/_/g, ".")), k && (c.ios = c.ipod = !0, c.version = k[3] ? k[3].replace(/_/g, ".") : null), o && (c.wp = !0, c.version = o[1]), m && (c.webos = !0, c.version = m[2]), p && (c.touchpad = !0), s && (c.blackberry = !0, c.version = s[2]), t && (c.bb10 = !0, c.version = t[2]), u && (c.rimtabletos = !0, c.version = u[2]), v && (f.playbook = !0), q && (c.kindle = !0, c.version = q[1]), r && (f.silk = !0, f.version = r[1]), !r && c.android && a.match(/Kindle Fire/) && (f.silk = !0), w && (f.chrome = !0, f.version = w[1]), x && (f.firefox = !0, f.version = x[1]), y && (c.firefoxos = !0, c.version = y[1]), z && (f.ie = !0, f.version = z[1]), B && (i || c.ios || n || h) && (f.safari = !0, c.ios || (f.version = B[1])), A && (f.webview = !0), i) {
                    var C = a.match(/[\d]*_[\d]*_[\d]*/);
                    C && C.length > 0 && C[0] && (c.version = C[0].replace(/_/g, "."))
                }
                c.tablet = !!(j || v || h && !a.match(/Mobile/) || x && a.match(/Tablet/) || z && !a.match(/Phone/) && a.match(/Touch/)),
                c.phone = !(c.tablet || c.ipod || !(h || l || m || s || t || w && a.match(/Android/) || w && a.match(/CriOS\/([\d.]+)/) || x && a.match(/Mobile/) || z && a.match(/Touch/))),
                c.pc = !c.tablet && !c.phone,
                c.name = d(),
                f.name = e()
            }
            b.call(a, navigator.userAgent, navigator.platform)
        } (b.exports)
    },
    {}],
    24 : [function(a, b, c) {
        var d = a("./dom");
        b.exports.getAbsoluteURL = function(a) {
            return a.match(/^https?:\/\//) || (a = d.createEl("div", {
                innerHTML: '<a href="' + a + '">x</a>'
            }).firstChild.href),
            a
        },
        b.exports.parseUrl = function(a) {
            var b, c, e, f, g;
            f = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
            c = d.createEl("a", {
                href: a
            }),
            e = "" === c.host && "file:" !== c.protocol,
            e && (b = d.createEl("div"), b.innerHTML = '<a href="' + a + '"></a>', c = b.firstChild, b.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(b)),
            g = {};
            for (var h = 0; h < f.length; h++) g[f[h]] = c[f[h]];
            return e && document.body.removeChild(b),
            g
        }
    },
    {
        "./dom": 14
    }],
    25 : [function(a, b, c) {
        var d = a("./dom");
        b.exports.formatTime = function(a) {
            var b, c, d, e = Math.round(a);
            return b = Math.floor(e / 3600),
            e %= 3600,
            c = Math.floor(e / 60),
            d = e % 60,
            !(b === 1 / 0 || isNaN(b) || c === 1 / 0 || isNaN(c) || d === 1 / 0 || isNaN(d)) && (b = b >= 10 ? b: "0" + b, c = c >= 10 ? c: "0" + c, d = d >= 10 ? d: "0" + d, ("00" === b ? "": b + ":") + c + ":" + d)
        },
        b.exports.parseTime = function(a) {
            var b = a.split(":"),
            c = 0,
            d = 0,
            e = 0;
            return 3 === b.length ? (c = b[0], d = b[1], e = b[2]) : 2 === b.length ? (d = b[0], e = b[1]) : 1 === b.length && (e = b[0]),
            c = parseInt(c, 10),
            d = parseInt(d, 10),
            e = Math.ceil(parseFloat(e)),
            3600 * c + 60 * d + e
        },
        b.exports.formatDate = function(a, b) {
            var c = {
                "M+": a.getMonth() + 1,
                "d+": a.getDate(),
                "H+": a.getHours(),
                "m+": a.getMinutes(),
                "s+": a.getSeconds(),
                "q+": Math.floor((a.getMonth() + 3) / 3),
                S: a.getMilliseconds()
            };
            /(y+)/.test(b) && (b = b.replace(RegExp.$1, (a.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var d in c) new RegExp("(" + d + ")").test(b) && (b = b.replace(RegExp.$1, 1 == RegExp.$1.length ? c[d] : ("00" + c[d]).substr(("" + c[d]).length)));
            return b
        },
        b.exports.sleep = function(a) {
            for (var b = Date.now(); Date.now() - b <= a;);
        },
        b.exports.htmlEncodeAll = function(a) {
            return null == a ? "": a.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        },
        b.exports.toBinary = function(a) {
            if (!window.atob) return "";
            for (var b = atob(a), c = b.length, d = new Uint8Array(c), e = 0; e < c; e++) d[e] = b.charCodeAt(e);
            return d
        },
        b.exports.delayHide = function(a, b) {
            a && (void 0 === b && (b = 1e3), a.delayHanlder && clearTimeout(a.delayHanlder), a.delayHanlder = setTimeout(function() {
                d.css(a, "display", "none")
            },
            b))
        }
    },
    {
        "./dom": 14
    }],
    26 : [function(a, b, c) {
        var d, e, f = a("../lib/oo"),
        g = a("../lib/object"),
        h = a("../lib/cookie"),
        i = a("../lib/data"),
        j = a("../lib/io"),
        k = a("../lib/ua"),
        l = a("../config"),
        m = 0,
        n = {
            INIT: 1001,
            CLOSE: 1002,
            STARTFETCHDATA: 1003,
            COMPLETEFETCHDATA: 1004,
            STARTPLAY: 1005,
            PLAY: 2001,
            STOP: 2002,
            PAUSE: 2003,
            SEEK: 2004,
            FULLSREEM: 2005,
            QUITFULLSCREEM: 2006,
            RESOLUTION: 2007,
            RESOLUTION_DONE: 2009,
            RECOVER: 2010,
            SEEK_END: 2011,
            LOADSTART: 2015,
            LOADEDMETADATA: 2016,
            LOADEDDATA: 2017,
            CANPLAY: 2018,
            CANPLAYTHROUGH: 2019,
            FETCHEDIP: 2020,
            CDNDETECT: 2021,
            DETECT: 2022,
            UNDERLOAD: 3002,
            LOADED: 3001,
            HEARTBEAT: 9001,
            ERROR: 4001
        },
        o = f.extend({
            init: function(a, b, c) {
                void 0 === c && (c = !0),
                this.trackLog = c,
                this.player = a,
                this.requestId = "",
                this.sessionId = i.guid(),
                this.playId = 0,
                this.osName = k.os.name,
                this.osVersion = k.os.version || "",
                this.exName = k.browser.name,
                this.exVersion = k.browser.version || "";
                var d = this.player.getOptions(),
                e = b.from ? b.from: "",
                f = (d.isLive, "player"),
                g = d.isLive ? "live": "vod",
                h = "pc";
                k.IS_IPAD ? h = "pad": k.IS_IPHONE ? h = "iphone": k.IS_ANDROID && (h = "android");
                var m = encodeURIComponent(k.getReferer()),
                n = k.getHref(),
                o = encodeURIComponent(n),
                p = "";
                n && (p = k.getHost(n));
                var q = "h5",
                r = l.h5Version,
                s = this._getUuid(),
                t = d.source ? encodeURIComponent(d.source) : "",
                u = k.getHost(d.source),
                v = "0",
                w = this.sessionId,
                x = "0",
                y = "0",
                z = "custom",
                A = "0.0.0.0",
                B = "0.0.0.0",
                C = (new Date).getTime();
                this._userNetInfo = {
                    cdnIp: "",
                    localIp: ""
                };
                var D = this;
                try {
                    var E = function(a) {
                        D._log("FETCHEDIP", {
                            error: a || "获取IP出错"
                        })
                    }; (function(a) {
                        return j.jsonp("https://cdn.dns-detect.alicdn.com/api/cdnDetectHttps?method=createDetectHttps",
                        function(b) {
                            return j.jsonp(b.content, a, E)
                        },
                        E)
                    })(function(a) {
                        A = D._userNetInfo.cdnIp = a.content.ldns,
                        B = D._userNetInfo.localIp = a.content.localIp,
                        D._log("FETCHEDIP", {
                            cdn_ip: A,
                            local_ip: B
                        })
                    })
                } catch(a) {
                    console.log(a)
                }
                this.opt = {
                    APIVersion: "0.6.0",
                    t: C,
                    ll: "info",
                    lv: "1.0",
                    pd: f,
                    md: "saas_player",
                    ui: "saas_player",
                    sm: "play",
                    os: this.osName,
                    ov: this.osVersion,
                    et: this.exName,
                    ev: this.exVersion,
                    uat: k.USER_AGENT,
                    hn: "0.0.0.0",
                    bi: e,
                    ri: w,
                    e: x,
                    args: y,
                    vt: g,
                    tt: h,
                    dm: q,
                    av: r,
                    uuid: s,
                    vu: t,
                    vd: u,
                    ua: v,
                    dn: z,
                    cdn_ip: A,
                    app_n: p,
                    r: m,
                    pu: o
                },
                this.bindEvent()
            },
            updateVideoInfo: function(a) {
                var b = a.from ? a.from: "";
                this.opt.bi = b,
                this.updateSourceInfo()
            },
            updateSourceInfo: function() {
                var a = this.player.getOptions(),
                b = a.source ? encodeURIComponent(a.source) : "",
                c = k.getHost(a.source);
                this.opt.vu = b,
                this.opt.vd = c
            },
            bindEvent: function() {
                var a = this;
                this.player.on("init",
                function() {
                    a._onPlayerInit()
                }),
                window.addEventListener("beforeunload",
                function() {
                    a._onPlayerClose()
                }),
                this.player.on("loadstart",
                function() {
                    a.loadstartTime = (new Date).getTime(),
                    a._onPlayerloadstart()
                }),
                this.player.on("loadedmetadata",
                function() {
                    a._onPlayerLoadMetadata()
                }),
                this.player.on("loadeddata",
                function() {
                    a._onPlayerLoaddata()
                }),
                this.player.on("play",
                function() {
                    a._onPlayerPlay()
                }),
                this.player.on("ready",
                function() {
                    a._onPlayerReady()
                }),
                this.player.on("ended",
                function() {
                    a._onPlayerFinish()
                }),
                this.player.on("pause",
                function() {
                    a._onPlayerPause()
                }),
                this.player.on("seekStart",
                function(b) {
                    a._onPlayerSeekStart(b)
                }),
                this.player.on("seekEnd",
                function(b) {
                    a._onPlayerSeekEnd(b)
                }),
                this.player.on("waiting",
                function() {
                    a._onPlayerLoaded()
                }),
                this.player.on("canplaythrough",
                function() {
                    a._onPlayerUnderload()
                }),
                this.player.on("canplay",
                function() {
                    a._onPlayerCanplay()
                }),
                this.player.on("error",
                function() {
                    a._onPlayerError()
                }),
                this.player.on("requestFullScreen",
                function() {
                    a._onFullscreenChange(1)
                }),
                this.player.on("cancelFullScreen",
                function() {
                    a._onFullscreenChange(0)
                }),
                d = setInterval(function() {
                    2 === a.player.readyState() || 3 === a.player.readyState() ? a._onPlayerLoaded() : 4 === a.player.readyState() && a._onPlayerUnderload()
                },
                100),
                e = setInterval(function() {
                    if (a.player.getCurrentTime()) {
                        var b = Math.floor(1e3 * a.player.getCurrentTime());
                        a.player.paused() || ++m >= 30 && (a._log("HEARTBEAT", {
                            vt: b,
                            interval: 1e3 * m
                        }), m = 0)
                    }
                },
                1e3)
            },
            removeEvent: function() {
                this.player.off("init"),
                this.player.off("ready"),
                this.player.off("ended"),
                this.player.off("play"),
                this.player.off("pause"),
                this.player.off("seekStart"),
                this.player.off("seekEnd"),
                this.player.off("canplaythrough"),
                this.player.off("error"),
                this.player.off("fullscreenchange"),
                clearInterval(d)
            },
            _onFullscreenChange: function(a) {
                a ? this._log("FULLSREEM", {}) : this._log("QUITFULLSCREEM", {})
            },
            _onPlayerloadstart: function() {
                this.playId = i.guid(),
                this._log("LOADSTART", {
                    pt: (new Date).getTime()
                }),
                this._log("STARTPLAY", {})
            },
            _onPlayerLoadMetadata: function() {
                this._log("LOADEDMETADATA", {
                    cost: (new Date).getTime() - this.loadstartTime
                })
            },
            _onPlayerLoaddata: function() {
                this._log("LOADEDDATA", {
                    cost: (new Date).getTime() - this.loadstartTime
                })
            },
            _onPlayerCanplay: function() {
                this._log("CANPLAY", {
                    pt: (new Date).getTime() - this.loadstartTime
                })
            },
            _onPlayerInit: function() {
                this._log("INIT", {}),
                this.buffer_flag = 0,
                this.pause_flag = 0
            },
            _onPlayerClose: function() {
                this._log("CLOSE", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime())
                })
            },
            _onPlayerReady: function() {
                this.startTimePlay = (new Date).getTime()
            },
            _onPlayerFinish: function() {
                this._log("STOP", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime())
                }),
                this.sessionId = i.guid(),
                this.playId = 0
            },
            _onPlayerPlay: function() {
                if (0 == this.playId && (this.playId = i.guid()), 0 != this.pause_flag || this.seeking || (this.sessionId = i.guid()), !this.buffer_flag && this.player._options.autoplay) return this.first_play_time = (new Date).getTime(),
                this._log("PLAY", {
                    dsm: "fix",
                    vt: 0,
                    start_cost: this.first_play_time - this.player.getReadyTime()
                }),
                void(this.buffer_flag = 1);
                this.buffer_flag && this.pause_flag && (this.pause_flag = 0, this.pauseEndTime = (new Date).getTime(), this._log("RECOVER", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime()),
                    cost: this.pauseEndTime - this.pauseTime
                }))
            },
            _onPlayerPause: function() {
                this.buffer_flag && this.startTimePlay && (this.seeking || (this.pause_flag = 1, this.pauseTime = (new Date).getTime(), this._log("PAUSE", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime())
                })))
            },
            _onPlayerSeekStart: function(a) {
                this.seekStartTime = a.paramData.fromTime,
                this.seeking = !0,
                this.seekStartStamp = (new Date).getTime()
            },
            _onPlayerSeekEnd: function(a) {
                this.seekEndStamp = (new Date).getTime(),
                this._log("SEEK", {
                    drag_from_timestamp: Math.floor(1e3 * this.seekStartTime),
                    drag_to_timestamp: Math.floor(1e3 * a.paramData.toTime)
                }),
                this._log("SEEK_END", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime()),
                    cost: this.seekEndStamp - this.seekStartStamp
                }),
                this.seeking = !1
            },
            _onPlayerLoaded: function() {
                this.buffer_flag && this.startTimePlay && (this.stucking || this.seeking || (this.stuckStartTime = (new Date).getTime(), this.stuckStartTime - this.startTimePlay <= 1e3 || (this.stucking = !0, this._log("UNDERLOAD", {
                    vt: Math.floor(1e3 * this.player.getCurrentTime())
                }), this.stuckStartTime = (new Date).getTime())))
            },
            _onPlayerUnderload: function() {
                if (!this.buffer_flag && !this.player._options.autoplay) return this.first_play_time = (new Date).getTime(),
                this._log("PLAY", {
                    play_mode: "fix",
                    vt: 0,
                    start_cost: this.first_play_time - this.player.getReadyTime()
                }),
                void(this.buffer_flag = 1);
                if ((this.buffer_flag || !this.player._options.autoplay) && this.stucking && !this.seeking) {
                    var a = Math.floor(1e3 * this.player.getCurrentTime()),
                    b = this.stuckStartTime || (new Date).getTime(),
                    c = Math.floor((new Date).getTime() - b);
                    c < 0 && (c = 0),
                    this._log("LOADED", {
                        vt: a,
                        cost: c
                    }),
                    this.stucking = !1
                }
            },
            _onPlayerHeartBeat: function() {
                if (!this.seeking) {
                    var a = Math.floor(1e3 * this.player.getCurrentTime()),
                    b = this;
                    this.timer || (this.timer = setTimeout(function() { ! b.seeking && b._log("HEARTBEAT", {
                            progress: a
                        }),
                        clearTimeout(b.timer),
                        b.timer = null
                    },
                    6e4)),
                    console.log("timeupdate")
                }
            },
            _onPlayerError: function() {
                this.playId = 0
            },
            _log: function(a, b) {
                this.updateSourceInfo();
                var c = g.copy(this.opt);
                if (this.requestId = i.guid(), "ERROR" == a && "FETCHEDIP" != a && "CDNDETECT" != a) {
                    var d = this;
                    j.jsonp("https://cdn.dns-detect.alicdn.com/api/cdnDetectHttps?method=createDetectHttps",
                    function(a) {
                        d._log("CDNDETECT", {
                            flag: 0,
                            error: "",
                            eri: d.requestId
                        })
                    },
                    function(a) {
                        d._log("CDNDETECT", {
                            flag: 1,
                            error: a || "访问CDN错误",
                            eri: d.requestId
                        })
                    })
                }
                var e = l.logReportTo;
                c.e = n[a],
                c.ri = this.sessionId,
                c.t = (new Date).getTime(),
                c.cdn_ip = this._userNetInfo.cdnIp,
                c.hn = this._userNetInfo.localIp;
                var f = this.player.getCurrentQuality();
                "" != f && (c.definition = f.definition);
                var h = [];
                g.each(b,
                function(a, b) {
                    h.push(a + "=" + b)
                });
                var k = "",
                m = this.player.getOptions();
                m && m.vid && (k = m.vid),
                h.push("vid=" + k),
                h = h.join("&"),
                "" == h && (h = "0"),
                c.args = encodeURIComponent(h);
                var o = [];
                return g.each(c,
                function(a, b) {
                    o.push(a + "=" + b)
                }),
                o = o.join("&"),
                this.trackLog && j.jsonp(e + "?" + o,
                function() {},
                function() {}),
                this.sessionId
            },
            _getUuid: function() {
                var a = h.get("p_h5_u");
                return a || (a = i.guid(), h.set("p_h5_u", a, 730)),
                a
            }
        });
        b.exports = o
    },
    {
        "../config": 7,
        "../lib/cookie": 12,
        "../lib/data": 13,
        "../lib/io": 17,
        "../lib/object": 19,
        "../lib/oo": 20,
        "../lib/ua": 23
    }],
    27 : [function(a, b, c) {
        var d = a("./base/player"),
        e = a("./flash/flashplayer"),
        f = a("./saas/mtsplayer"),
        g = a("./saas/vodplayer"),
        h = a("./taotv/taotvplayer"),
        i = a("./audio/audioplayer"),
        j = a("./hls/hlsplayer"),
        k = a("../lib/ua"),
        l = a("../lib/playerutil"),
        m = (a("../lib/dom"), a("../lang/index"));
        b.exports.create = function(a) {
            m.setCurrentLanguage(a.language);
            var b = l.handleOption(a),
            c = b.source,
            n = l.isAudio(c);
            n && (b.height = "auto");
            var o = l.createWrapper(b);
            return o.player ? o.player: n ? new i(o, b) : b.useFlashPrism || l.isFlv(c) || l.isRTMP(c) ? new e(o, b) : b.vid && !b.source ? b.authInfo ? new f(o, b) : b.playauth ? new g(o, b) : new h(o, b) : k.os.pc && l.isHls(c) ? l.canPlayHls() ? l.isSafariUsedHlsPlugin(b.useHlsPluginForSafari) ? new j(o, b) : new d(o, b) : l.isSupportHls() ? new j(o, b) : b.userH5Prism || b.useH5Prism ? void 0 : new e(o, b) : new d(o, b)
        }
    },
    {
        "../lang/index": 10,
        "../lib/dom": 14,
        "../lib/playerutil": 21,
        "../lib/ua": 23,
        "./audio/audioplayer": 28,
        "./base/player": 29,
        "./flash/flashplayer": 31,
        "./hls/hlsplayer": 33,
        "./saas/mtsplayer": 36,
        "./saas/vodplayer": 41,
        "./taotv/taotvplayer": 42
    }],
    28 : [function(a, b, c) {
        var d = a("../base/player"),
        e = a("../../ui/component"),
        f = a("../../lib/dom"),
        g = a("../../lib/object"),
        h = d.extend({
            init: function(a, b) {
                this._isAudio = !0,
                void 0 === b.skinLayout && (b.skinLayout = playerUtil.defaultAudioLayout),
                d.call(this, a, b)
            }
        });
        h.prototype.createEl = function() {
            "AUDIO" !== this.tag.tagName && (this._el = this.tag, this.tag = e.prototype.createEl.call(this, "audio"));
            var a = this._el,
            b = this.tag;
            b.player = this;
            var c = f.getElementAttributes(b);
            return g.each(c,
            function(b) {
                a.setAttribute(b, c[b])
            }),
            this.setVideoAttrs(),
            b.parentNode && b.parentNode.insertBefore(a, b),
            f.insertFirst(b, a),
            a
        },
        b.exports = h
    },
    {
        "../../lib/dom": 14,
        "../../lib/object": 19,
        "../../ui/component": 43,
        "../base/player": 29
    }],
    29 : [function(a, b, c) {
        var d = a("../../ui/component"),
        e = a("../../lib/object"),
        f = a("../../lib/dom"),
        g = a("../../lib/event"),
        h = (a("../../lib/io"), a("../../ui/exports")),
        i = (a("../../ui/component/error-display"), a("../../ui/component/info-display"), a("../../monitor/monitor")),
        j = a("../../lib/ua"),
        k = a("../../lib/constants"),
        l = a("../../lib/util"),
        m = (a("../../config"), a("../../lib/playerutil")),
        n = a("./x5play"),
        o = a("../../lib/cookie"),
        p = a("../../lang/index"),
        q = a("../../feature/autoPlayDelay"),
        r = 0,
        s = d.extend({
            init: function(a, b) {
                if (this.tag = a, this.loaded = !1, this.played = !1, this.waiting = !1, this._urls = [], this._currentPlayIndex = 0, this._retrySwitchUrlCount = 0, this._isError = !1, this._isHls = !1, this._liveRetryCount = 0, this._seeking = !1, this._serverRequestId = 0, void 0 === b.skinLayout && (b.skinLayout = m.defaultH5Layout), d.call(this, this, b), this.addClass("prism-player"), b.plugins && e.each(b.plugins,
                function(a, b) {
                    this[a](b)
                },
                this), this.UI = {},
                b.useNativeControls ? this.tag.setAttribute("controls", "controls") : this.UI = h, this.initChildren(), this.bindVideoEvent(), this._monitor = new i(this, {
                    video_id: 0,
                    album_id: 0,
                    from: this._options.from,
                    source: this._options.source
                },
                this._options.trackLog), this.checkOnline()) {
                    if (this._options.source) if (this._options.autoPlayDelay) {
                        var c = new q(this),
                        f = this;
                        c.handle(function() {
                            f.initPlay()
                        })
                    } else this.initPlay();
                    if (this._options.extraInfo) {
                        var g = this._options.extraInfo;
                        g.liveRetry && (this._options.liveRetry = g.liveRetry)
                    }
                    this.on("readyState",
                    function() {
                        this.trigger("ready"),
                        r && console.log("ready")
                    }),
                    this._overrideNativePlay()
                }
            }
        });
        s.prototype.initPlay = function(a) {
            this._checkSupportVideoType() || this._initPlayBehavior(a, this._options.source)
        },
        s.prototype.initChildren = function() {
            var a = this.options(),
            b = a.skinLayout;
            if (!1 !== b && !e.isArray(b)) throw new Error("PrismPlayer Error: skinLayout should be false or type of array!"); ! 1 !== b && 0 !== b.length && (this.options({
                children: b
            }), d.prototype.initChildren.call(this)),
            this.trigger("uiH5Ready"),
            r && console.log("uiH5ready")
        },
        s.prototype.createEl = function() {
            "VIDEO" !== this.tag.tagName && (this._el = this.tag, this.tag = d.prototype.createEl.call(this, "video"), this._options.playsinline && (this.tag.setAttribute("webkit-playsinline", ""), this.tag.setAttribute("playsinline", ""), this.tag.setAttribute("x-webkit-airplay", "")));
            var a = this._el,
            b = this.tag;
            this._options.enableSystemMenu || (b.addEventListener ? b.addEventListener("contextmenu",
            function(a) {
                a.preventDefault()
            },
            !1) : b.attachEvent("oncontextmenu",
            function() {
                window.event.returnValue = !1
            })),
            b.player = this;
            var c = f.getElementAttributes(b);
            return e.each(c,
            function(b) {
                a.setAttribute(b, c[b])
            }),
            this.setVideoAttrs(),
            b.parentNode && b.parentNode.insertBefore(a, b),
            f.insertFirst(b, a),
            this.cover = f.createEl("div"),
            f.addClass(this.cover, "prism-cover"),
            a.appendChild(this.cover),
            this.options().cover && (this.cover.style.backgroundImage = "url(" + this.options().cover + ")"),
            j.IS_IOS && f.css(b, "display", "none"),
            a
        },
        s.prototype.setVideoAttrs = function() {
            var a = this._options.preload,
            b = this._options.autoplay;
            if (this.tag.style.width = "100%", this.tag.style.height = "100%", a && this.tag.setAttribute("preload", "preload"), b && this.tag.setAttribute("autoplay", "autoplay"), this._options.extraInfo) for (var c in this._options.extraInfo) this.tag.setAttribute(c, this._options.extraInfo[c]);
            n.adaptX5Play(this)
        },
        s.prototype.checkOnline = function() {
            if (0 == navigator.onLine) {
                var a = {
                    mediaId: this._options.vid ? this._options.vid: "",
                    error_code: k.ErrorCode.NetworkUnavaiable,
                    error_msg: p.get("Error_Offline_Text")
                };
                return this.logError(a),
                a.display_msg = p.get("Error_Offline_Text"),
                this.trigger("error", a),
                !1
            }
            return ! 0
        },
        s.prototype.id = function() {
            return this.el().id
        },
        s.prototype.renderUI = function() {},
        s.prototype.switchUrl = function() {
            if (0 != this._urls.length) {
                this._currentPlayIndex = this._currentPlayIndex + 1,
                this._urls.length <= this._currentPlayIndex && (this._currentPlayIndex = 0, this._retrySwitchUrlCount++);
                var a = this._urls[this._currentPlayIndex];
                o.set(k.SelectedStreamLevel, a.definition, 365),
                this.trigger("qualitychange", p.get("Quality_Change_Fail_Switch_Text"));
                this.getCurrentTime();
                this._options.source = a.Url,
                this.tag.setAttribute("src", this._options.source),
                this.tag.play()
            }
        },
        s.prototype.setControls = function() {
            var a = this.options();
            if (a.useNativeControls) this.tag.setAttribute("controls", "controls");
            else if ("object" == typeof a.controls) {
                var b = this._initControlBar(a.controls);
                this.addChild(b)
            }
        },
        s.prototype._initControlBar = function(a) {
            return new ControlBar(this, a)
        },
        s.prototype.getMetaData = function() {
            var a = this,
            b = null,
            c = this.tag;
            b = window.setInterval(function(d) {
                if (!a.tag) return void clearInterval(b);
                if (c.readyState > 0) {
                    var e = Math.round(c.duration);
                    a.tag.duration = e,
                    a.trigger("readyState"),
                    r && console.log("readystate"),
                    clearInterval(b)
                }
            },
            100)
        },
        s.prototype.getReadyTime = function() {
            return this.readyTime
        },
        s.prototype.readyState = function() {
            return this.tag.readyState
        },
        s.prototype.getError = function() {
            return this.tag.error
        },
        s.prototype.getRecentOccuredEvent = function() {
            return this._eventState
        },
        s.prototype.getSourceUrl = function() {
            return this._options ? this._options.source: ""
        },
        s.prototype.getMonitorInfo = function() {
            return this._monitor ? this._monitor.opt: {}
        },
        s.prototype.getCurrentQuality = function() {
            if (this._urls > 0) {
                var a = this._urls[this._currentPlayIndex];
                return {
                    width: a.width,
                    url: a.Url,
                    definition: a.definition
                }
            }
            return ""
        },
        s.prototype.setSpeed = function(a) {
            this.tag && (this.tag.playbackRate = a)
        },
        s.prototype.play = function() {
            var a = this;
            return (this._options.preload || this.loaded) && this.tag.src || this._initLoad(this._options.source),
            a.cover && !a._options.autoplay && (f.css(a.cover, "display", "none"), delete a.cover),
            this.tag.play(),
            this
        },
        s.prototype.replay = function() {
            return this.seek(0),
            this.tag.play(),
            this
        },
        s.prototype.pause = function() {
            return this.tag.pause(),
            this
        },
        s.prototype.stop = function() {
            return this.tag.setAttribute("src", null),
            this
        },
        s.prototype.paused = function() {
            return ! 1 !== this.tag.paused
        },
        s.prototype.getDuration = function() {
            var a = 0;
            return this.tag && (a = this.tag.duration),
            a
        },
        s.prototype.getCurrentTime = function() {
            return this.tag ? this.tag.currentTime: 0
        },
        s.prototype.seek = function(a) {
            a === this.tag.duration && a--;
            try {
                this.tag.currentTime = a
            } catch(a) {
                console.log(a)
            }
            return this
        },
        s.prototype.firstNewUrlloadByUrl = function(a, b) {
            this._clearLiveErrorHandle(),
            this._options.vid = 0,
            this._options.source = a,
            this._monitor && this._monitor.updateVideoInfo({
                video_id: 0,
                album_id: 0,
                source: a,
                from: this._options.from
            }),
            this.initPlay(),
            this.cover && (this._options.preload || this._options.autoplay) && (f.css(this.cover, "display", "none"), delete this.cover),
            this._options.autoplay ? this.trigger("play") : this.trigger("pause"),
            b || (b = 0),
            !b && 0 != b || isNaN(b) || this.seek(b)
        },
        s.prototype.loadByUrl = function(a, b, c) {
            this._clearLiveErrorHandle(),
            this.trigger("error_hide"),
            this._options.vid = 0,
            this._options.source = a,
            this._monitor && this._monitor.updateVideoInfo({
                video_id: 0,
                album_id: 0,
                source: a,
                from: this._options.from
            }),
            this.initPlay(),
            this.cover && (this._options.preload || this._options.autoplay) && (f.css(this.cover, "display", "none"), delete this.cover),
            this._options.autoplay || c ? this.trigger("play") : this.trigger("pause");
            var d = this;
            g.one(this.tag, "canplay",
            function(a) { ! b && 0 != b || isNaN(b) || d.seek(b)
            })
        },
        s.prototype.dispose = function() {
            this.tag.pause();
            var a = this.tag;
            g.off(a, "timeupdate"),
            g.off(a, "play"),
            g.off(a, "pause"),
            g.off(a, "canplay"),
            g.off(a, "waiting"),
            g.off(a, "playing"),
            g.off(a, "ended"),
            g.off(a, "error"),
            g.off(a, "suspend"),
            g.off(a, "stalled"),
            g.off(a, "loadstart"),
            g.off(a, "durationchange"),
            g.off(a, "loadedmetadata"),
            g.off(a, "loadeddata"),
            g.off(a, "progress"),
            g.off(a, "canplaythrough"),
            g.off(a, "contextmenu"),
            g.off(a, "webkitfullscreenchange"),
            this.off("timeupdate"),
            this.off("durationchange"),
            this.off("play_btn_show"),
            this.off("init"),
            this.off("ready"),
            this.off("uiH5Ready"),
            this.off("error_hide"),
            this.off("error_show"),
            this.off("info_hide"),
            this.off("info_show"),
            this.off("h5_loading_show"),
            this.off("h5_loading_hide"),
            this.off("hideProgress"),
            this.off("cancelHideProgress"),
            this.off("requestFullScreen"),
            this.off("cancelFullScreen"),
            this.off("play"),
            this.off("pause"),
            this.off("click"),
            this.off("mouseover"),
            this.off("mouseout"),
            this.off("hideBar"),
            this.off("showBar"),
            this.off("readyState"),
            this.off("sourceloaded"),
            this.off("qualitychange"),
            this.off("play_btn_hide"),
            this.off("snapshoted"),
            this.tag = null,
            this._options = null,
            this._monitor && (this._monitor.removeEvent(), this._monitor = null)
        },
        s.prototype.mute = function() {
            return this.tag.muted = !0,
            this
        },
        s.prototype.unMute = function() {
            return this.tag.muted = !1,
            this
        },
        s.prototype.muted = function() {
            return this.tag.muted
        },
        s.prototype.getVolume = function() {
            return this.tag.volume
        },
        s.prototype.getOptions = function() {
            return this._options
        },
        s.prototype.setVolume = function(a) {
            this.tag.volume = a
        },
        s.prototype.hideProgress = function() {
            this.trigger("hideProgress")
        },
        s.prototype.cancelHideProgress = function() {
            this.trigger("cancelHideProgress")
        },
        s.prototype.setPlayerSize = function(a, b) {
            this._el.style.width = a,
            this._el.style.height = b
        };
        var t = function() {
            var a;
            f.createEl("div"),
            a = {};
            var b = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullScreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "webkitfullScreen"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "webkitIsFullScreen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "mozfullScreen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "MSFullScreen"]];
            if (j.IS_IOS) a.requestFn = "webkitEnterFullscreen",
            a.cancelFn = "webkitExitFullscreen",
            a.eventName = "webkitfullscreenchange",
            a.isFullScreen = "webkitDisplayingFullscreen";
            else {
                for (var c = 5,
                d = 0; d < c; d++) if (b[d][1] in document) {
                    a.requestFn = b[d][0],
                    a.cancelFn = b[d][1],
                    a.eventName = b[d][4],
                    a.isFullScreen = b[d][6];
                    break
                }
                "requestFullscreen" in document ? a.requestFn = "requestFullscreen": "webkitRequestFullscreen" in document ? a.requestFn = "webkitRequestFullscreen": "webkitRequestFullScreen" in document ? a.requestFn = "webkitRequestFullScreen": "webkitEnterFullscreen" in document ? a.requestFn = "webkitEnterFullscreen": "mozRequestFullScreen" in document ? a.requestFn = "mozRequestFullScreen": "msRequestFullscreen" in document && (a.requestFn = "msRequestFullscreen"),
                "fullscreenchange" in document ? a.eventName = "fullscreenchange": "webkitfullscreenchange" in document ? a.eventName = "webkitfullscreenchange": "webkitfullscreenchange" in document ? a.eventName = "webkitfullscreenchange": "webkitfullscreenchange" in document ? a.eventName = "webkitfullscreenchange": "mozfullscreenchange" in document ? a.eventName = "mozfullscreenchange": "MSFullscreenChange" in document && (a.eventName = "MSFullscreenChange"),
                "fullScreen" in document ? a.isFullScreen = "fullScreen": "webkitfullScreen" in document ? a.isFullScreen = "webkitfullScreen": "webkitIsFullScreen" in document ? a.isFullScreen = "webkitIsFullScreen": "webkitDisplayingFullscreen" in document ? a.isFullScreen = "webkitDisplayingFullscreen": "mozfullScreen" in document ? a.isFullScreen = "mozfullScreen": "MSFullScreen" in document && (a.isFullScreen = "MSFullScreen")
            }
            return a.requestFn ? a: null
        } ();
        s.prototype._enterFullWindow = function() {
            this.isFullWindow = !0,
            this.docOrigOverflow = document.documentElement.style.overflow,
            document.documentElement.style.overflow = "hidden",
            f.addClass(document.getElementsByTagName("body")[0], "prism-full-window")
        },
        s.prototype._exitFullWindow = function() {
            this.isFullWindow = !1,
            document.documentElement.style.overflow = this.docOrigOverflow,
            f.removeClass(document.getElementsByTagName("body")[0], "prism-full-window")
        },
        s.prototype.requestFullScreen = function() {
            var a = t,
            b = this.el(),
            c = this;
            if (j.IS_IOS) return b = this.tag,
            b[a.requestFn](),
            this;
            this.isFullScreen = !0,
            this.isFullScreenChanged = !1,
            this._requestFullScreenTimer = null,
            this._cancelFullScreenTimer || clearTimeout(this._cancelFullScreenTimer);
            var c = this;
            return a ? (b[a.requestFn](), this._requestFullScreenTimer = setTimeout(function() {
                c.isFullScreenChanged || (c._enterFullWindow(), c.trigger("requestFullScreen")),
                c._requestFullScreenTimer = null
            },
            500)) : (this._enterFullWindow(), this.trigger("requestFullScreen")),
            this
        },
        s.prototype.cancelFullScreen = function() {
            var a = t,
            b = this;
            this.isFullScreen = !1,
            this.isFullScreenChanged = !1,
            this._cancelFullScreenTimer = null,
            this._requestFullScreenTimer || clearTimeout(this._requestFullScreenTimer);
            var b = this;
            return a ? (document[a.cancelFn](), b._cancelFullScreenTimer = setTimeout(function() {
                b.isFullScreenChanged || (b._exitFullWindow(), b.trigger("cancelFullScreen")),
                b._cancelFullScreenTimer = null
            },
            500), this.tag.paused || this.trigger("play")) : (this._exitFullWindow(), this.trigger("cancelFullScreen"), this.tag.paused || this.trigger("play")),
            this
        },
        s.prototype.getIsFullScreen = function() {
            return this.isFullScreen
        },
        s.prototype.getBuffered = function() {
            return this.tag.buffered
        },
        s.prototype.bindVideoEvent = function() {
            var a = this.tag,
            b = this;
            g.on(a, "loadstart",
            function(a) {
                b.trigger("loadstart"),
                r && console.log("loadstart")
            }),
            g.on(a, "durationchange",
            function(a) {
                b.trigger("durationchange"),
                r && console.log("durationchange")
            }),
            g.on(a, "loadedmetadata",
            function(a) {
                b.trigger("loadedmetadata"),
                r && console.log("loadedmetadata")
            }),
            g.on(a, "loadeddata",
            function(a) {
                b.trigger("loadeddata"),
                r && console.log("loadeddata")
            }),
            g.on(a, "progress",
            function(a) {
                b.trigger("progress"),
                r && console.log("progress")
            }),
            g.on(a, "canplay",
            function(a) {
                b._retrySwitchUrlCount = 0,
                b._liveRetryCount = 0,
                b._clearLiveErrorHandle();
                var c = (new Date).getTime() - b.readyTime;
                b.trigger("canplay", {
                    loadtime: c
                }),
                r && console.log("canplay")
            }),
            g.on(a, "canplaythrough",
            function(c) {
                b.cover && b._options.autoplay && (f.css(b.cover, "display", "none"), delete b.cover),
                "none" === a.style.display && j.IS_IOS && setTimeout(function() {
                    f.css(a, "display", "block")
                },
                100),
                b.trigger("canplaythrough"),
                r && console.log("canplaythrough")
            }),
            g.on(a, "play",
            function(a) {
                console.log("--play"),
                b.trigger("play"),
                b.trigger("error_hide");
                var c = document.querySelector(".prism-cover");
                f.css(c, "display", "none"),
                b.waiting = !1,
                r && console.log("play")
            }),
            g.on(a, "play",
            function(a) {
                b.trigger("videoRender"),
                r && console.log("videoRender"),
                b.waiting = !0
            }),
            g.on(a, "pause",
            function(a) {
                b.trigger("pause"),
                b.waiting = !1,
                r && console.log("pause")
            }),
            g.on(a, "ended",
            function(a) {
                b.waiting = !1,
                b._options.rePlay && (b.seek(0), b.tag.play()),
                b.trigger("ended"),
                r && console.log("ended")
            }),
            g.on(a, "stalled",
            function(a) {
                b.trigger("stalled"),
                r && console.log("stalled")
            }),
            g.on(a, "waiting",
            function(a) {
                b.trigger("waiting"),
                b.trigger("h5_loading_show"),
                b.waiting = !0,
                b._checkTimeoutHandle && clearTimeout(b._checkTimeoutHandle),
                b._checkTimeoutHandle = setTimeout(function() {
                    if (b.waiting || b.player) {
                        b.pause();
                        var a = {
                            mediaId: b._options.vid || "",
                            error_code: k.ErrorCode.LoadingTimeout,
                            error_msg: p.get("Error_Waiting_Timeout_Text")
                        };
                        b.logError(a),
                        b.trigger("error", a)
                    }
                },
                1e3 * b._options.loadDataTimeout),
                r && console.log("waiting")
            }),
            g.on(a, "playing",
            function(a) {
                b.trigger("playing"),
                console.log("--playing"),
                b.trigger("h5_loading_hide"),
                b.waiting = !1,
                b._checkTimeoutHandle && clearTimeout(b._checkTimeoutHandle),
                r && console.log("playing")
            }),
            g.on(a, "error",
            function(a) {
                if (b.waiting = !1, b._checkTimeoutHandle && clearTimeout(b._checkTimeoutHandle), b.checkOnline()) {
                    var c, d = "",
                    e = a.srcElement.error.message,
                    d = "OTHER_ERR_MSG";
                    if (a.srcElement.error.code && (c = a.srcElement.error.code, d = k.VideoErrorCode[a.srcElement.error.code]), e = d + " || " + e, b._options.isLive) b._options.liveRetry > b._liveRetryCount ? b._reloadAndPlayForM3u8() : (b._liveRetryCount = 0, b.trigger("liveStreamStop"), b._liveErrorHandle = setTimeout(function() {
                        var a = {
                            mediaId: "ISLIVE",
                            error_code: d,
                            error_msg: p.get("Error_Play_Text") + "，" + p.get("Error_Retry_Text")
                        };
                        b.logError(a),
                        b.trigger("error", a)
                    },
                    500));
                    else {
                        var f = p.get("Error_Play_Text"),
                        g = !1;
                        c < 4 ? f = k.VideoErrorCodeText[c] : b._eventState == k.SUSPEND ? (f = p.get("Error_Load_Abort_Text"), d = k.ErrorCode.RequestDataError) : b._eventState == k.LOAD_START ? (f = p.get("Error_Network_Text"), b._options.source.indexOf("auth_key") > 0 && (f = f + "，" + p.get("Error_AuthKey_Text")), d = k.ErrorCode.StartLoadData) : b._eventState == k.LOADED_METADATA && (f = p.get("Error_Play_Text"), d = k.ErrorCode.PlayingError),
                        f = f + "，" + p.get("Error_Retry_Text"),
                        b._options.source && (b._options.source.indexOf("flv") > 0 || b._options.source.indexOf("m3u8") > 0 && !m.isSupportHls()) && !j.IS_MOBILE ? (f = p.get("Error_H5_Not_Support_Text"), d = k.ErrorCode.FormatNotSupport) : b._urls.length > 1 && b._retrySwitchUrlCount < 3 && (b.switchUrl(), g = !0);
                        var h = {
                            mediaId: b._options.vid ? b._options.vid: "",
                            error_code: d,
                            error_msg: e
                        };
                        b.logError(h),
                        h.display_msg = f,
                        g || b.trigger("error", h)
                    }
                }
            }),
            g.on(a, "seeking",
            function(a) {
                b.trigger("seeking"),
                r && console.log("seeking")
            }),
            g.on(a, "seeked",
            function(a) {
                b.trigger("seeked"),
                r && console.log("seeked")
            }),
            g.on(a, "ratechange",
            function(a) {
                b.trigger("ratechange"),
                r && console.log("ratechange")
            }),
            g.on(a, "timeupdate",
            function(a) {
                b.trigger("timeupdate"),
                r && console.log("timeupdate")
            }),
            g.on(a, "webkitfullscreenchange",
            function(a) {
                b.trigger("fullscreenchange"),
                r && console.log("fullscreenchange")
            }),
            this.on("requestFullScreen",
            function(a) {
                f.addClass(b.el(), "prism-fullscreen"),
                r && console.log("request-fullscreen")
            }),
            this.on("cancelFullScreen",
            function(a) {
                f.removeClass(b.el(), "prism-fullscreen"),
                r && console.log("cancel-fullscreen")
            }),
            this.on("seekStart",
            function() {
                b._seeking = !0
            }),
            this.on("seekEnd",
            function() {
                b._seeking = !1
            }),
            g.on(a, "suspend",
            function(a) {
                b.trigger("suspend"),
                r && console.log("sudpend")
            }),
            g.on(a, "abort",
            function(a) {
                b.trigger("abort"),
                r && console.log("abort")
            }),
            g.on(a, "volumechange",
            function(a) {
                b.trigger("volumechange"),
                r && console.log("volumechange")
            }),
            g.on(a, "drag",
            function(a) {
                b.trigger("drag"),
                r && console.log("drag")
            }),
            g.on(a, "dragstart",
            function(a) {
                b.trigger("dragstart"),
                r && console.log("dragstart")
            }),
            g.on(a, "dragover",
            function(a) {
                b.trigger("dragover"),
                r && console.log("dragover")
            }),
            g.on(a, "dragenter",
            function(a) {
                b.trigger("dragenter"),
                r && console.log("dragenter")
            }),
            g.on(a, "dragleave",
            function(a) {
                b.trigger("dragleave"),
                r && console.log("dragleave")
            }),
            g.on(a, "ondrag",
            function(a) {
                b.trigger("ondrag"),
                r && console.log("ondrag")
            }),
            g.on(a, "ondragstart",
            function(a) {
                b.trigger("ondragstart"),
                r && console.log("ondragstart")
            }),
            g.on(a, "ondragover",
            function(a) {
                b.trigger("ondragover"),
                r && console.log("ondragover")
            }),
            g.on(a, "ondragenter",
            function(a) {
                b.trigger("ondragenter"),
                r && console.log("ondragenter")
            }),
            g.on(a, "ondragleave",
            function(a) {
                b.trigger("ondragleave"),
                r && console.log("ondragleave")
            }),
            g.on(a, "drop",
            function(a) {
                b.trigger("drop"),
                r && console.log("drop")
            }),
            g.on(a, "dragend",
            function(a) {
                b.trigger("dragend"),
                r && console.log("dragend")
            }),
            g.on(a, "onscroll",
            function(a) {
                b.trigger("onscroll"),
                r && console.log("onscroll")
            }),
            this.on("error",
            function(a) {
                var c = a.paramData,
                d = document.querySelector(".prism-cover");
                f.css(d, "display", "none"),
                b.trigger("h5_loading_hide"),
                b.trigger("play_btn_hide"),
                c = c || {},
                b._monitor && (c.uuid = b._monitor._getUuid(), c.requestId = b._serverRequestId, c.cdnIp = b._monitor._userNetInfo.cdnIp, c.localIp = b._monitor._userNetInfo.localIp),
                b._isError = !0,
                b.trigger("error_show", c)
            });
            var c = t;
            c && g.on(document, c.eventName,
            function(a) {
                b.isFullScreen = document[c.isFullScreen],
                b.isFullScreenChanged = !0,
                !0 === b.isFullScreen ? b.trigger("requestFullScreen") : b.trigger("cancelFullScreen")
            })
        },
        s.prototype._initPlayBehavior = function(a, b) {
            if (!m.validateSource(b)) {
                var c = {
                    mediaId: this._options.vid ? this._options.vid: "",
                    error_code: k.ErrorCode.InvalidSourceURL,
                    error_msg: "InvalidSourceURL"
                };
                return this.logError(c),
                c.display_msg = p.get("Error_Invalidate_Source"),
                void this.trigger("error", c)
            }
            this.trigger("h5_loading_hide"),
            void 0 === a && (a = !1),
            this.loaded || this.trigger("init"),
            (this._options.autoplay || this._options.preload || a) && (this._initLoad(b), this._options.autoplay ? this.tag.play() : this.trigger("play_btn_show"))
        },
        s.prototype._initLoad = function(a) {
            this._options.autoplay && this.trigger("h5_loading_show"),
            this.getMetaData(),
            a && this.tag.setAttribute("src", a),
            this.readyTime = (new Date).getTime(),
            this.loaded = !0
        },
        s.prototype._clearLiveErrorHandle = function() {
            this._liveErrorHandle && clearTimeout(this._liveErrorHandle)
        },
        s.prototype._reloadAndPlayForM3u8 = function() {
            0 == this._liveRetryCount && this.trigger("onM3u8Retry");
            var a = this._options,
            b = a.liveRetryInterval + a.liveRetryStep * player._liveRetryCount;
            l.sleep(1e3 * b),
            this._liveRetryCount++,
            this.tag.load(this._options.source),
            this.tag.play()
        },
        s.prototype._checkSupportVideoType = function() {
            if (!this.tag.canPlayType || !this._options.source || !j.IS_MOBILE) return "";
            var a = this._options.source,
            b = "";
            if (a.indexOf("m3u8") > 0 ? "" != this.tag.canPlayType("application/x-mpegURL") || m.isSupportHls() || (b = p.get("Error_Not_Support_M3U8_Text")) : a.indexOf("mp4") > 0 && "" == this.tag.canPlayType("video/mp4") && (b = p.get("Error_Not_Support_MP4_Text")), b) {
                var c = {
                    mediaId: this._options.vid ? this._options.vid: "",
                    error_code: k.ErrorCode.FormatNotSupport,
                    error_msg: b
                };
                this.logError(c),
                c.display_msg = b,
                this.trigger("error", c)
            }
            return b
        },
        s.prototype.logError = function(a) {
            a || (a = {}),
            a.vt = this.getCurrentTime(),
            this._serverRequestId = this.log("ERROR", a)
        },
        s.prototype.log = function(a, b) {
            var c = 0,
            d = 0;
            if (this._monitor) return this._options && (c = this._options.vid || "0", d = this._options.from || "0"),
            this._monitor.updateVideoInfo({
                video_id: c,
                album_id: 0,
                source: this._options.source,
                from: d
            }),
            this._monitor._log(a, b)
        },
        s.prototype.setSanpshotProperties = function(a, b, c) {
            if (this._snapshotMatric || (this._snapshotMatric = {}), this._snapshotMatric.width = a, this._snapshotMatric.height = b, c > 1) throw new Error("rate doesn't allow more than 1");
            this._snapshotMatric.rate = c
        },
        s.prototype._getSanpshotMatric = function() {
            return this._snapshotMatric || (this._snapshotMatric = {}),
            this._snapshotMatric
        },
        s.prototype._overrideNativePlay = function() {
            var a = this.tag.play,
            b = this;
            this.tag.play = function() {
                var c = a.apply(b.tag);
                void 0 !== c && c.
                catch(function(a) {
                    b.trigger("play_btn_show"),
                    b.trigger("autoPlayPrevented")
                }).then(function() {})
            }
        },
        b.exports = s
    },
    {
        "../../config": 7,
        "../../feature/autoPlayDelay": 9,
        "../../lang/index": 10,
        "../../lib/constants": 11,
        "../../lib/cookie": 12,
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/io": 17,
        "../../lib/object": 19,
        "../../lib/playerutil": 21,
        "../../lib/ua": 23,
        "../../lib/util": 25,
        "../../monitor/monitor": 26,
        "../../ui/component": 43,
        "../../ui/component/error-display": 46,
        "../../ui/component/info-display": 49,
        "../../ui/exports": 58,
        "./x5play": 30
    }],
    30 : [function(a, b, c) {
        var d = a("../../lib/ua"),
        e = a("../../lib/dom"),
        f = function(a, b) {
            var c = a.el().style.height,
            d = a.el().style.width;
            a.originalLayout = {
                container: {
                    height: c,
                    width: d
                },
                video: {
                    width: a.tag.style.width,
                    height: a.tag.style.height
                }
            };
            var e = document.body.clientHeight + "px",
            f = document.body.clientWidth + "px";
            b ? (height = e, width = f) : (height = c.indexOf("%") ? c: c + "px", width = d.indexOf("%") ? d: d + "px"),
            a.tag.style.width = f,
            a.tag.style.height = e,
            a.el().style.height = b ? e: height
        },
        g = function(a, b) {
            if (a.originalLayout) {
                var c = a.originalLayout;
                a.el().style.height = c.container.height,
                a.el().style.width = c.container.width,
                a.tag.style.width = c.video.width,
                a.tag.style.height = c.video.height
            }
        };
        b.exports.adaptX5Play = function(a) {
            if (d.os.android && d.is_X5) {
                "h5" == a._options.x5_type && (a.tag.setAttribute("x5-video-player-type", a._options.x5_type), window.onresize = function() {
                    f(a, a._options.x5_fullscreen || "center" == a._options.x5_video_position)
                },
                a.tag.addEventListener("x5videoenterfullscreen",
                function() {
                    f(a, a._options.x5_fullscreen || "center" == a._options.x5_video_position),
                    a.trigger("x5requestFullScreen")
                }), a.tag.addEventListener("x5videoexitfullscreen",
                function() {
                    g(a),
                    a.trigger("x5cancelFullScreen")
                }), a.on("requestFullScreen",
                function() {
                    "center" != a._options.x5_video_position && e.removeClass(a.tag, "x5-top-left")
                }), a.on("cancelFullScreen",
                function() {
                    "center" != a._options.x5_video_position && e.addClass(a.tag, "x5-top-left")
                })),
                void 0 !== a._options.x5_fullscreen && a._options.x5_fullscreen && (a.tag.setAttribute("x5-video-player-fullscreen", a._options.x5_fullscreen), e.addClass(a.tag, "x5-full-screen"));
                "center" != a._options.x5_video_position && e.addClass(a.tag, "x5-top-left"),
                void 0 !== a._options.x5_orientation && a.tag.setAttribute("x5-video-orientation", a._options.x5_orientation)
            }
        }
    },
    {
        "../../lib/dom": 14,
        "../../lib/ua": 23
    }],
    31 : [function(a, b, c) {
        var d = a("../../ui/component"),
        e = a("../../lib/data"),
        f = a("../../lib/ua"),
        g = a("../../lib/object"),
        h = a("../../config"),
        i = a("../../lang/index"),
        j = a("../../lib/playerutil"),
        k = a("../../lib/util"),
        l = a("../../ui/component/info-display"),
        m = a("../../feature/autoPlayDelay"),
        n = d.extend({
            init: function(a, b) {
                if (void 0 === b.skinLayout && (b.skinLayout = j.defaultFlashLayout), d.call(this, this, b), this._id = "prism-player-" + e.guid(), this.tag = a, this._el = this.tag, this.initChildren(), this.id = this._id, window[this.id] = this, this._options.autoPlayDelay) {
                    var c = new m(this),
                    f = this;
                    c.handle(function() {
                        f._options.autoplay = !0,
                        f._initPlayer()
                    })
                } else this._initPlayer()
            },
            _initPlayer: function() {
                var a = "100%",
                b = "100%",
                c = "//" + h.domain + "/de/prismplayer-flash/" + h.flashVersion + "/PrismPlayer.swf",
                d = this._comboFlashVars(),
                e = this._options.wmode ? this._options.wmode: "opaque";
                this.tag.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="' + a + '" height="' + b + '" id="' + this.id + '"><param name=movie value="' + c + '"><param name=quality value=High><param name="FlashVars" value="' + d + '"><param name="WMode" value="' + e + '"><param name="AllowScriptAccess" value="always"><param name="AllowFullScreen" value="true"><param name="AllowFullScreenInteractive" value="true"><embed name="' + this.id + '" src="' + c + '" quality=high pluginspage="//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="' + a + '" height="' + b + '" AllowScriptAccess="always" AllowFullScreen="true" AllowFullScreenInteractive="true" WMode="' + e + '" FlashVars="' + d + '"></embed></object>'
            },
            _getPlayer: function(a) {
                return - 1 != navigator.appName.indexOf("Microsoft") ? document.getElementById(a) : document[a]
            },
            _comboFlashVars: function() {
                var a = encodeURIComponent(f.getReferer()),
                b = f.getHref(),
                c = encodeURIComponent(b),
                d = "";
                b && (d = f.getHost(b));
                var e = this._options,
                j = {
                    autoPlay: e.autoplay ? 1 : 0,
                    isInner: 0,
                    actRequest: 1,
                    vid: e.vid,
                    domain: e.domain ? e.domain: "//tv.taobao.com",
                    statisticService: e.statisticService ? e.statisticService: h.logReportTo,
                    videoInfoService: e.videoInfoService ? e.videoInfoService: "/player/json/getBaseVideoInfo.do",
                    disablePing: e.trackLog ? 0 : 1,
                    namespace: this.id,
                    barMode: 0 != e.barMode ? 1 : 0,
                    isLive: e.isLive ? 1 : 0,
                    waterMark: e.waterMark,
                    environment: e.environment,
                    vurl: e.source ? encodeURIComponent(e.source) : "",
                    plugins: e.plugins ? e.plugins: "",
                    snapShotShow: e.snapshot ? 1 : 0,
                    accessId: e.accId ? e.accId: "",
                    accessKey: e.accSecret ? e.accSecret: "",
                    apiKey: e.apiKey ? e.apiKey: "",
                    flashApiKey: e.flashApiKey ? e.flashApiKey: "",
                    disableSeek: e.disableSeek ? 1 : 0,
                    disableFullScreen: e.disableFullScreen ? 1 : 0,
                    stsToken: e.stsToken ? e.stsToken: "",
                    domainRegion: e.domainRegion ? e.domainRegion: "",
                    authInfo: e.authInfo ? encodeURIComponent(e.authInfo) : "",
                    playDomain: e.playDomain ? e.playDomain: "",
                    stretcherZoomType: e.stretcherZoomType ? e.stretcherZoomType: "",
                    playauth: e.playauth ? e.playauth.replace(/\+/g, "%2B") : "",
                    prismType: e.prismType ? e.prismType: 0,
                    formats: e.formats ? e.formats: "",
                    notShowTips: e.notShowTips ? 1 : 0,
                    showBarTime: e.showBarTime ? e.showBarTime: 0,
                    showBuffer: 0 == e.showBuffer ? 0 : 1,
                    rePlay: e.rePlay ? 1 : 0,
                    encryp: e.encryp ? e.encryp: "",
                    secret: e.secret ? e.secret: "",
                    mediaType: "video",
                    logInfo: {
                        ud: f.getHost(e.source),
                        os: f.os.name,
                        ov: f.os.version || "",
                        et: f.browser.name,
                        ev: f.browser.version || "",
                        uat: f.USER_AGENT,
                        r: a,
                        pu: c,
                        app_n: d
                    }
                },
                k = [];
                return e.cover && (j.cover = e.cover),
                e.extraInfo && (j.extraInfo = encodeURIComponent(JSON.stringify(e.extraInfo))),
                j.logInfo && (j.logInfo = encodeURIComponent(JSON.stringify(j.logInfo))),
                i.setCurrentLanguage(e.language, "flash"),
                j.languageData = encodeURIComponent(JSON.stringify(i.getLanguageData("flash"))),
                j.language = i.getCurrentLanguage(),
                g.each(j,
                function(a, b) {
                    k.push(a + "=" + b)
                }),
                k.join("&")
            },
            initChildren: function() {
                var a = new l(this, this._options),
                b = a.el();
                b.id = a.id(),
                this.contentEl().appendChild(b),
                a.bindEvent()
            },
            flashReady: function() {
                this.flashPlayer = this._getPlayer(this.id),
                this._isReady = !0;
                var a, b = this._options.skinRes,
                c = this._options.skinLayout;
                if (!1 !== c && !g.isArray(c)) throw new Error("PrismPlayer Error: skinLayout should be false or type of array!");
                if ("string" != typeof b) throw new Error("PrismPlayer Error: skinRes should be string!");
                a = 0 != c && 0 !== c.length && {
                    skinRes: b,
                    skinLayout: c
                },
                this.flashPlayer.setPlayerSkin(a),
                this.trigger("ready");
                var d = this;
                window.addEventListener("beforeunload",
                function() {
                    try {
                        d.flashPlayer.setPlayerCloseStatus()
                    } catch(a) {}
                })
            },
            jsReady: function() {
                return ! 0
            },
            snapshoted: function(a) {
                var b = k.toBinary(a),
                c = "data:image/jpeg;base64," + a;
                this.trigger("snapshoted", {
                    time: this.getCurrentTime(),
                    base64: c,
                    binary: b
                })
            },
            uiReady: function() {
                this.trigger("uiReady")
            },
            loadedmetadata: function() {
                this.trigger("loadedmetadata")
            },
            onPlay: function() {
                this.trigger("play")
            },
            onEnded: function() {
                this.trigger("ended")
            },
            onPause: function() {
                this.trigger("pause")
            },
            onBulletScreenReady: function() {
                this.trigger("bSReady")
            },
            onBulletScreenMsgSend: function(a) {
                this.trigger("bSSendMsg", a)
            },
            onVideoRender: function(a) {
                this.trigger("videoRender"),
                this.trigger("canplay", {
                    loadtime: a
                })
            },
            onVideoError: function(a) {
                this.trigger("error", {
                    errortype: a
                })
            },
            onM3u8Retry: function() {
                this.trigger("m3u8Retry")
            },
            hideBar: function() {
                this.trigger("hideBar")
            },
            showBar: function() {
                this.trigger("showBar")
            },
            liveStreamStop: function() {
                this.trigger("liveStreamStop")
            },
            stsTokenExpired: function() {
                this.trigger("stsTokenExpired")
            },
            onVideoBuffer: function() {
                this.trigger("waiting")
            },
            _invoke: function() {
                var a = arguments[0],
                b = arguments;
                if (Array.prototype.shift.call(b), !this.flashPlayer) throw new Error("PrismPlayer Error: flash player is not ready，please use api after ready event occured!");
                if ("function" != typeof this.flashPlayer[a]) throw new Error("PrismPlayer Error: function " + a + " is not found!");
                return this.flashPlayer[a].apply(this.flashPlayer, b)
            },
            play: function() {
                this._invoke("playVideo")
            },
            replay: function() {
                this._invoke("replayVideo")
            },
            pause: function() {
                this._invoke("pauseVideo")
            },
            stop: function() {
                this._invoke("stopVideo")
            },
            seek: function(a) {
                this._invoke("seekVideo", a)
            },
            getCurrentTime: function() {
                return this._invoke("getCurrentTime")
            },
            getDuration: function() {
                return this._invoke("getDuration")
            },
            mute: function() {
                this.setVolume(0)
            },
            unMute: function() {
                this.setVolume(.5)
            },
            getVolume: function() {
                return this._invoke("getVolume")
            },
            setVolume: function(a) {
                this._invoke("setVolume", a)
            },
            loadByVid: function(a) {
                this._invoke("loadByVid", a, !1)
            },
            loadByUrl: function(a, b) {
                this._invoke("loadByUrl", a, b)
            },
            dispose: function() {
                this._invoke("pauseVideo")
            },
            showBSMsg: function(a) {
                this._invoke("showBSMsg", a)
            },
            setToastEnabled: function(a) {
                this._invoke("setToastEnabled", a)
            },
            setLoadingInvisible: function() {
                this._invoke("setLoadingInvisible")
            },
            setPlayerSize: function(a, b) {
                this._el.style.width = a,
                this._el.style.height = b
            }
        });
        b.exports = n
    },
    {
        "../../config": 7,
        "../../feature/autoPlayDelay": 9,
        "../../lang/index": 10,
        "../../lib/data": 13,
        "../../lib/object": 19,
        "../../lib/playerutil": 21,
        "../../lib/ua": 23,
        "../../lib/util": 25,
        "../../ui/component": 43,
        "../../ui/component/info-display": 49
    }],
    32 : [function(a, b, c) {
        var d = a("../../lib/io"),
        e = a("../../config"),
        f = a("../../lib/constants"),
        g = a("../../lib/util"),
        h = a("../../lib/playerutil"),
        i = a("../../lib/dom"),
        j = a("../../lang/index"),
        k = function(a, b, c) {
            return ! (a._hls || !h.isHls(b) || h.canPlayHls() && !h.isSafariUsedHlsPlugin(c))
        },
        l = function(a) {
            var b = "//" + e.domain + "/de/prismplayer/" + e.h5Version + "/hls/aliplayer-hls-min.js";
            d.loadJS(b,
            function() {
                a()
            })
        };
        b.exports.inject = function(a, b, c, d, e, h) {
            var m = d.source,
            n = d.useHlsPluginForSafari;
            if (h || k(a, m, n)) {
                b.prototype._checkHlsReady = function() {
                    if (null == a._hls) throw new Error("please invoke this method after ready event")
                },
                a._isHls = !0,
                a._hls = null,
                a._isLoadedHls = !1,
                b.prototype.play = function() {
                    this._checkHlsReady();
                    var a = this;
                    a.cover && !a._options.autoplay && (i.css(a.cover, "display", "none"), delete a.cover);
                    var b = this.getCurrentTime();
                    return this._hls.startLoad(b),
                    this.tag.paused && this.tag.play(),
                    this
                },
                b.prototype.replay = function() {
                    return this._checkHlsReady(),
                    this.seek(0),
                    this._hls.startLoad(),
                    this.tag.paused && this.tag.play(),
                    this
                },
                b.prototype.pause = function() {
                    return this._checkHlsReady(),
                    this.tag.pause(),
                    this._hls.stopLoad(),
                    this
                },
                b.prototype.stop = function() {
                    return this._checkHlsReady(),
                    this.tag.setAttribute("src", null),
                    this._hls.stopLoad(),
                    this
                },
                b.prototype._reloadAndPlayForM3u8 = function() {
                    0 == this._liveRetryCount && this.trigger("onM3u8Retry"),
                    this._liveRetryCount++
                },
                b.prototype.initPlay = function(a) {
                    function b(a, b) {
                        a.destroy(),
                        a._hls = new Hls({
                            xhrSetup: function(b, c) {
                                b.withCredentials = a._options.withCredentials || !1
                            }
                        }),
                        e && (e(a._hls), o(a, a._hls)),
                        a._hls.loadSource(a._options.source),
                        a._hls.attachMedia(a.tag),
                        a._hls.on(Hls.Events.MANIFEST_PARSED,
                        function() {
                            a._initPlayBehavior(b)
                        })
                    }
                    that = this,
                    this._isLoadedHls ? b(this, a) : (this.trigger("h5_loading_show"), l(function() {
                        that.trigger("h5_loading_hide"),
                        that._isLoadedHls = !0,
                        b(that, a)
                    }))
                },
                b.prototype.destroy = function() {
                    this._hls && this._hls.destroy(),
                    this._hls = null
                },
                b.prototype.dispose = function() {
                    c.dispose.call(this),
                    this.destroy()
                };
                var o = function(a, b) {
                    b.on(Hls.Events.ERROR,
                    function(b, c) {
                        if (c.details != Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR && 1 != a._seeking && (0 != c.fatal || c.type == Hls.ErrorTypes.NETWORK_ERROR)) {
                            var d = f.ErrorCode.LoadedMetadata,
                            e = j.get("Error_Play_Text"),
                            h = !1;
                            c.details == Hls.ErrorDetails.MANIFEST_LOAD_ERROR ? (h = !0, e = j.get("Error_Load_M3U8_Failed_Text")) : c.details == Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT ? (h = !0, e = j.get("Error_Load_M3U8_Timeout_Text")) : c.details == Hls.ErrorDetails.MANIFEST_PARSING_ERROR || c.details == Hls.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR ? (h = !0, e = j.get("Error_M3U8_Decode_Text")) : c.type == Hls.ErrorTypes.NETWORK_ERROR ? (d = f.ErrorCode.NetworkError, e = j.get("Error_Network_Text")) : c.type != Hls.ErrorTypes.MUX_ERROR && c.type != Hls.ErrorTypes.MEDIA_ERROR || (d = f.ErrorCode.PlayDataDecode, e = j.get("Error_TX_Decode_Text")),
                            e = e + "(" + c.details + ")";
                            var i = function() {
                                if (a.pause(), setTimeout(function() {
                                    a.trigger("play_btn_hide")
                                }), a.checkOnline()) {
                                    var b = {
                                        mediaId: a._options.vid ? a._options.vid: "",
                                        error_code: d,
                                        error_msg: c.details
                                    };
                                    a.logError(b),
                                    b.display_msg = e,
                                    a.trigger("error", b)
                                }
                            };
                            if (a._options.isLive) {
                                var k = a._options;
                                if (k.liveRetry > a._liveRetryCount) {
                                    0 == a._liveRetryCount && a.trigger("onM3u8Retry");
                                    var l = k.liveRetryInterval + k.liveRetryStep * a._liveRetryCount;
                                    g.sleep(1e3 * l),
                                    h && a.loadByUrl(k.source),
                                    a._liveRetryCount++
                                } else a._liveRetryCount = 0,
                                a.trigger("liveStreamStop"),
                                a._liveErrorHandle = setTimeout(i, 500)
                            } else i()
                        }
                    })
                }
            }
        }
    },
    {
        "../../config": 7,
        "../../lang/index": 10,
        "../../lib/constants": 11,
        "../../lib/dom": 14,
        "../../lib/io": 17,
        "../../lib/playerutil": 21,
        "../../lib/util": 25
    }],
    33 : [function(a, b, c) {
        var d = a("../base/player"),
        e = a("./hlsinjector"),
        f = d.extend({
            init: function(a, b) {
                e.inject(this, f, d.prototype, b,
                function(a) {}),
                d.call(this, a, b)
            }
        });
        b.exports = f
    },
    {
        "../base/player": 29,
        "./hlsinjector": 32
    }],
    34 : [function(a, b, c) {
        var d = a("../../lib/constants"),
        e = a("../../lib/oo"),
        f = e.extend({
            init: function(a) {
                this.player = a,
                this.tickhandle = null
            }
        });
        f.prototype.tick = function(a, b) {
            var c = this;
            this.tickhandle = setTimeout(function() {
                c.player && c.player.trigger(d.AuthKeyExpiredEvent),
                b && b()
            },
            1e3 * a)
        },
        f.prototype.clearTick = function(a) {
            this.tickhandle && clearTimeout(this.tickhandle)
        },
        b.exports = f
    },
    {
        "../../lib/constants": 11,
        "../../lib/oo": 20
    }],
    35 : [function(a, b, c) {
        function d(a, b, c, d) {
            var j = (h.returnUTCDate(), h.randomUUID()),
            k = h.randomUUID(),
            l = "HMAC-SHA1",
            m = {
                AccessKeyId: a.accessId,
                Action: "PlayInfo",
                MediaId: a.vid,
                Formats: a.format,
                AuthInfo: a.authInfo,
                AuthTimeout: g.AuthKeyExpired,
                Rand: j,
                SecurityToken: a.stsToken,
                PlayDomain: a.playDomain,
                Format: "JSON",
                Version: "2014-06-18",
                SignatureMethod: l,
                SignatureVersion: "1.0",
                SignatureNonce: k
            },
            n = h.makeUTF8sort(m, "=", "&") + "&Signature=" + h.AliyunEncodeURI(h.makeChangeSiga(m, a.accessSecret)),
            o = "https://mts." + a.domainRegion + ".aliyuncs.com/?" + n;
            f.get(o,
            function(a) {
                if (a) {
                    var f = JSON.parse(a),
                    g = f.PlayInfoList.PlayInfo;
                    urls = e(g, b),
                    c && c({
                        requestId: f.RequestId,
                        urls: urls
                    })
                } else d && d(i.createError("MST获取取数失败"))
            },
            function(a) {
                if (d) {
                    var b = JSON.parse(a);
                    d({
                        Code: g.ErrorCode.ServerAPIError,
                        Message: b.Code + "|" + b.Message,
                        sri: b.requestId
                    })
                }
            })
        }
        function e(a, b) {
            for (var c = [], d = [], e = a.length - 1; e >= 0; e--) {
                var f = a[e];
                f.width = 1 * f.width,
                f.height = 1 * f.height,
                f.width <= f.height && (f.width = f.height),
                f.definition = g.WidthMapToLevel[f.width],
                "mp4" == f.format ? d.push(f) : c.push(f)
            }
            return j(d, b),
            j(c, b),
            d.length > 0 ? d: c
        }
        var f = a("../../lib/io"),
        g = a("../../lib/constants"),
        h = a("./signature"),
        i = a("./util"),
        j = function(a, b) {
            var c = -1;
            a.sort(function(a, c) {
                var d = parseInt(a.width),
                e = parseInt(c.width);
                if ("desc" == b) {
                    if (d > e) return - 1;
                    if (d < e) return 1
                } else {
                    if (d < e) return - 1;
                    if (d > e) return 1
                }
            });
            for (var d = a.length,
            e = 0; e < d; e++) {
                var f = a[e],
                h = g.VideoLevels[f.width];
                void 0 === f.width ? h = "未知": void 0 === h ? h = f.width: c == f.width && (h += f.width),
                f.desc = h,
                c = f.width
            }
        };
        b.exports.getDataByAuthInfo = d
    },
    {
        "../../lib/constants": 11,
        "../../lib/io": 17,
        "./signature": 38,
        "./util": 39
    }],
    36 : [function(a, b, c) {
        var d = a("./saasplayer"),
        e = (a("../../lib/constants"), a("./mts")),
        f = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.service = e,
                this.loadByMts()
            }
        });
        f.prototype.loadByMts = function() {
            var a = {
                vid: this._options.vid,
                accessId: this._options.accId,
                accessSecret: this._options.accSecret,
                stsToken: this._options.stsToken,
                domainRegion: this._options.domainRegion,
                authInfo: this._options.authInfo,
                playDomain: this._options.domainRegion,
                format: this._options.format
            };
            this.loadData(a)
        },
        f.prototype.replayByVidAndAuthInfo = function(a, b, c, d, e, f, g) {
            this.reloadNewVideoInfo(a, b, c, d, e, f, g)
        },
        f.prototype.reloadNewVideoInfo = function(a, b, c, d, e, f, g) {
            if (this.trigger("error_hide"), this._options.source = "", a && (this._options.vid = a, this._options.accId = b, this._options.accessSecret = c, this._options.stsToken = e, this._options.domainRegion = g, this._options.authInfo = f), !(this._options.vid && this._options.accId && this._options.accessSecret && this._options.stsToken && this._options.domainRegion && this._options.authInfo)) throw new Error("需要提供vid、accId、accessSecret、stsToken、domainRegion和authInfo参数");
            this.loadByMts()
        },
        b.exports = f
    },
    {
        "../../lib/constants": 11,
        "./mts": 35,
        "./saasplayer": 37
    }],
    37 : [function(a, b, c) {
        function d(a) {
            var b = i.get(f.SelectedStreamLevel);
            if (!b) return i.set(f.SelectedStreamLevel, a[0].definition, 365),
            0;
            for (var c = 0; c < a.length; c++) if (a[c].definition == b) return c;
            return 0
        }
        var e = a("../base/player"),
        f = (a("../../lib/event"), a("../../lib/io"), a("../../lib/constants")),
        g = (a("./signature"), a("./authkeyexpiredhandle")),
        h = a("../hls/hlsinjector"),
        i = a("../../lib/cookie"),
        j = a("../../lang/index"),
        k = e.extend({
            init: function(a, b) {
                this._authKeyExpiredHandle = new g(this),
                e.call(this, a, b)
            }
        });
        k.prototype.loadData = function(a) {
            var b = (new Date).getTime();
            this.log("STARTFETCHDATA", {});
            var c = this;
            this._urls = [],
            this._currentPlayIndex = 0,
            this._retrySwitchUrlCount = 0,
            this._authKeyExpiredHandle.clearTick(),
            this.service.getDataByAuthInfo(a, this._options.qualitySort,
            function(a) {
                if (a.urls && 0 == a.urls.length) return void c._mtsError_message(c, {
                    Code: f.ErrorCode.URLsIsEmpty,
                    Message: j.get("Error_Vod_URL_Is_Empty_Text")
                },
                "");
                c._urls = a.urls,
                c._currentPlayIndex = d(c._urls);
                var g = a.urls[c._currentPlayIndex],
                i = g.Url;
                c._options.source = i,
                h.inject(c, k, e.prototype, c._options),
                c.log("COMPLETEFETCHDATA", {
                    cost: (new Date).getTime() - b
                }),
                c._authKeyExpiredHandle.tick(f.AuthKeyRefreshExpired),
                c.trigger("sourceloaded", g),
                c.initPlay()
            },
            function(a) {
                c._mtsError_message(c, a, "")
            })
        },
        k.prototype._mtsError_message = function(a, b, c) {
            var d = a;
            d.trigger("h5_loading_hide");
            var e = b.Code ? b.Code: "OTHER_ERR_CODE",
            g = b.Message ? b.Message: "OTHER_ERR_MSG",
            h = (f.ErrorCode.ServerAPIError, "");
            g.indexOf("InvalidParameter.Rand") > -1 ? (f.ErrorCode.EncrptyVideoNotSupport, h = j.get("Error_Not_Support_encrypt_Text")) : g.indexOf("SecurityToken.Expired") > -1 ? (f.ErrorCode.AuthKeyExpired, h = j.get("Error_Playauth_Expired_Text")) : g.indexOf("InvalidVideo.NoneStream") > -1 && (f.ErrorCode.URLsIsEmpty, h = j.get("Error_Fetch_NotStream"));
            var i = d._options.vid ? d._options.vid: "0",
            k = (d._options.from && d._options.from, {
                mediaId: i,
                error_code: e,
                error_msg: g
            });
            d.logError(k),
            k.display_msg = h || "获取地址出错啦，请尝试退出重试或刷新",
            d.trigger("error", k),
            console.log("PrismPlayer Error: " + c + "! error_msg :" + g + ";")
        },
        b.exports = k
    },
    {
        "../../lang/index": 10,
        "../../lib/constants": 11,
        "../../lib/cookie": 12,
        "../../lib/event": 15,
        "../../lib/io": 17,
        "../base/player": 29,
        "../hls/hlsinjector": 32,
        "./authkeyexpiredhandle": 34,
        "./signature": 38
    }],
    38 : [function(a, b, c) {
        var d = a("crypto-js/hmac-sha1"),
        e = a("crypto-js/enc-base64"),
        f = a("crypto-js/enc-utf8");
        b.exports.randomUUID = function() {
            for (var a = [], b = "0123456789abcdef", c = 0; c < 36; c++) a[c] = b.substr(Math.floor(16 * Math.random()), 1);
            return a[14] = "4",
            a[19] = b.substr(3 & a[19] | 8, 1),
            a[8] = a[13] = a[18] = a[23] = "-",
            a.join("")
        },
        b.exports.returnUTCDate = function() {
            var a = new Date,
            b = a.getUTCFullYear(),
            c = a.getUTCMonth(),
            d = a.getUTCDate(),
            e = a.getUTCHours(),
            f = a.getUTCMinutes(),
            g = a.getUTCSeconds(),
            h = a.getUTCMilliseconds();
            return Date.UTC(b, c, d, e, f, g, h)
        },
        b.exports.AliyunEncodeURI = function(a) {
            var b = encodeURIComponent(a);
            return b = b.replace("+", "%2B"),
            b = b.replace("*", "%2A"),
            b = b.replace("%7E", "~")
        },
        b.exports.makesort = function(a, b, c) {
            if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
            var d = Object.keys(a).sort(),
            e = "";
            for (var f in d)"" == e ? e = d[f] + b + a[d[f]] : e += c + d[f] + b + a[d[f]];
            return e
        },
        b.exports.makeUTF8sort = function(a, c, d) {
            if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
            var e = Object.keys(a).sort(),
            f = "";
            for (var g in e) {
                var h = b.exports.AliyunEncodeURI(e[g]),
                i = b.exports.AliyunEncodeURI(a[e[g]]);
                "" == f ? f = h + c + i: f += d + h + c + i
            }
            return f
        },
        b.exports.makeChangeSiga = function(a, c) {
            if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
            return e.stringify(d("GET&" + b.exports.AliyunEncodeURI("/") + "&" + b.exports.AliyunEncodeURI(b.exports.makeUTF8sort(a, "=", "&")), c + "&"))
        },
        b.exports.ISODateString = function(a) {
            function b(a) {
                return a < 10 ? "0" + a: a
            }
            return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "Z"
        },
        b.exports.encPlayAuth = function(a) {
            var a = f.stringify(e.parse(a));
            if (!a) throw new Error("playuth参数解析为空");
            return JSON.parse(a)
        },
        b.exports.encRsa = function() {}
    },
    {
        "crypto-js/enc-base64": 2,
        "crypto-js/enc-utf8": 3,
        "crypto-js/hmac-sha1": 4
    }],
    39 : [function(a, b, c) {
        b.exports.createError = function(a, b) {
            return {
                requestId: "",
                code: b || "",
                message: a
            }
        }
    },
    {}],
    40 : [function(a, b, c) {
        function d(a, b, c, d) {
            var k = (h.returnUTCDate(), h.randomUUID()),
            l = h.randomUUID(),
            m = "HMAC-SHA1",
            n = {
                AccessKeyId: a.accessId,
                Action: "GetPlayInfo",
                VideoId: a.vid,
                Formats: a.format,
                AuthInfo: a.authInfo,
                AuthTimeout: g.AuthKeyExpired,
                Rand: k,
                SecurityToken: a.stsToken,
                StreamType: a.mediaType,
                Format: "JSON",
                Version: "2017-03-21",
                SignatureMethod: m,
                SignatureVersion: "1.0",
                SignatureNonce: l,
                PlayerVersion: j.h5Version,
                Channel: "HTML5"
            },
            o = h.makeUTF8sort(n, "=", "&") + "&Signature=" + h.AliyunEncodeURI(h.makeChangeSiga(n, a.accessSecret)),
            p = "http://vod.cn-shanghai.aliyuncs.com/?Action=GetPlayInfo&" + o;
            f.get(p,
            function(a) {
                if (a) {
                    var f = JSON.parse(a),
                    g = f.PlayInfoList.PlayInfo;
                    urls = e(g, b),
                    c && c({
                        requestId: f.RequestId,
                        urls: urls
                    })
                } else d && d(i.createError("点播服务获取取数失败"))
            },
            function(a) {
                if (d) {
                    var b = JSON.parse(a);
                    d({
                        Code: g.ErrorCode.ServerAPIError,
                        Message: b.Code + "|" + b.Message,
                        sri: b.requestId
                    })
                }
            })
        }
        function e(a, b) {
            var c = [];
            "desc" == b && a.reverse();
            for (var d = a.length - 1; d >= 0; d--) {
                var e = {};
                e.width = a[d].Width,
                e.height = a[d].Height,
                e.definition = a[d].Definition,
                e.Url = a[d].PlayURL,
                e.desc = g.QualityLevels[e.definition],
                c.push(e)
            }
            return c
        }
        var f = a("../../lib/io"),
        g = a("../../lib/constants"),
        h = a("./signature"),
        i = a("./util"),
        j = a("../../config");
        b.exports.getDataByAuthInfo = d
    },
    {
        "../../config": 7,
        "../../lib/constants": 11,
        "../../lib/io": 17,
        "./signature": 38,
        "./util": 39
    }],
    41 : [function(a, b, c) {
        var d = a("./saasplayer"),
        e = a("../../lib/constants"),
        f = a("./vod"),
        g = a("./signature"),
        h = (a("./authkeyexpiredhandle"), d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.service = f,
                this.loadByVod()
            }
        }));
        h.prototype.loadByVod = function() {
            try {
                var a = g.encPlayAuth(this._options.playauth)
            } catch(a) {
                var b = {
                    Code: e.ErrorCode.PlayauthDecode,
                    Message: "playauth decoded failed.",
                    displayMessage: "playauth解析错误"
                };
                return void this._mtsError_message(this, b, this._options.playauth)
            }
            this._options.from = a.CustomerId ? a.CustomerId: "";
            var c = a.VideoMeta.CoverURL;
            this.cover && c && !this._options.cover && (this.cover.style.backgroundImage = "url(" + c + ")");
            var d = {
                vid: this._options.vid,
                accessId: a.AccessKeyId,
                accessSecret: a.AccessKeySecret,
                stsToken: a.SecurityToken,
                domainRegion: a.Region,
                authInfo: a.AuthInfo,
                playDomain: a.PlayDomain,
                format: this._options.format,
                mediaType: this._options.mediaType
            };
            this.loadData(d)
        },
        h.prototype.replayByVidAndPlayAuth = function(a, b) {
            this.trigger("error_hide"),
            this._options.source = "",
            this._options.vid = a,
            this._options.playauth = b,
            this.loadByVod()
        },
        h.prototype.updateSourcesByVidAndPlayAuth = function(a, b) {
            if (a != this._options.vid) return void console.log("不能更新地址，vid和播放中的不一致");
            this._options.vid = a,
            this._options.playauth = b;
            try {
                var c = g.encPlayAuth(this._options.playauth)
            } catch(a) {
                return void console.log("playauth解析错误")
            }
            var d = {
                vid: a,
                accessId: c.AccessKeyId,
                accessSecret: c.AccessKeySecret,
                stsToken: c.SecurityToken,
                domainRegion: c.Region,
                authInfo: c.AuthInfo,
                playDomain: c.PlayDomain,
                format: this._options.format,
                mediaType: this._options.mediaTyp
            };
            this._authKeyExpiredHandle.clearTick();
            var f = this;
            this.service.loadData(d, this._options.qualitySort,
            function(a) {
                f._serverRequestId = a.requestId,
                0 != a.urls.length && (f._urls = a.urls),
                f._authKeyExpiredHandle.tick(e.AuthKeyRefreshExpired)
            },
            function(a) {
                console.log(a)
            })
        },
        h.prototype.reloaduserPlayInfoAndVidRequestMts = function(a, b) {
            this.replayByVidAndPlayAuth(a, b)
        },
        b.exports = h
    },
    {
        "../../lib/constants": 11,
        "./authkeyexpiredhandle": 34,
        "./saasplayer": 37,
        "./signature": 38,
        "./vod": 40
    }],
    42 : [function(a, b, c) {
        var d = a("../base/player"),
        e = a("../hls/hlsinjector"),
        f = a("../../lib/io"),
        g = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.loadVideoInfo()
            }
        });
        g.prototype.loadVideoInfo = function(a) {
            this.trigger("error_hide");
            var b = this._options.vid,
            c = this;
            if (!b) throw new Error("PrismPlayer Error: vid should not be null!");
            f.jsonp("//tv.taobao.com/player/json/getBaseVideoInfo.do?vid=" + b + "&playerType=3",
            function(f) {
                if (1 !== f.status || !f.data.source) throw new Error("PrismPlayer Error: #vid:" + b + " cannot find video resource!");
                var g, h = -1;
                _.each(f.data.source,
                function(a, b) {
                    var c = +a.substring(1);
                    c > h && (h = c)
                }),
                g = f.data.source["v" + h],
                g = _.unescape(g),
                c._options.source = g,
                e.inject(c, TaobaoTVPlayer, d.prototype, c._options),
                c.initPlay(),
                a && a()
            },
            function() {
                throw new Error("PrismPlayer Error: network error!")
            })
        },
        g.prototype.loadByVid = function(a) {
            this._options.vid = a;
            var b = this;
            if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
            this._monitor && this._monitor.updateVideoInfo({
                video_id: a,
                album_id: data.data.baseInfo.aid,
                source: src,
                from: b._options.from
            }),
            this._options.autoplay = !0,
            this.loadVideoInfo(function() {
                b.cover && b._options.autoplay && (Dom.css(b.cover, "display", "none"), delete b.cover),
                b.tag.play()
            })
        },
        b.exports = g
    },
    {
        "../../lib/io": 17,
        "../base/player": 29,
        "../hls/hlsinjector": 32
    }],
    43 : [function(a, b, c) {
        var d = a("../lib/oo"),
        e = a("../lib/data"),
        f = a("../lib/object"),
        g = a("../lib/dom"),
        h = a("../lib/event"),
        i = a("../lib/function"),
        j = a("../lib/layout"),
        k = (a("../lib/constants"), a("../lib/util"), d.extend({
            init: function(a, b) {
                var c = this;
                this._player = a,
                this._eventState = "",
                this._options = f.copy(b),
                this._el = this.createEl(),
                this._id = a.id() + "_component_" + e.guid(),
                this._children = [],
                this._childIndex = {},
                this._player.on("uiH5Ready",
                function() {
                    c.renderUI(),
                    c.syncUI(),
                    c.bindEvent()
                })
            }
        }));
        k.prototype.renderUI = function() {
            j.render(this.el(), this.options()),
            this.el().id = this.id()
        },
        k.prototype.syncUI = function() {},
        k.prototype.bindEvent = function() {},
        k.prototype.createEl = function(a, b) {
            return g.createEl(a, b)
        },
        k.prototype.options = function(a) {
            return void 0 === a ? this._options: this._options = f.merge(this._options, a)
        },
        k.prototype.el = function() {
            return this._el
        },
        k.prototype._contentEl,
        k.prototype.player = function() {
            return this._player
        },
        k.prototype.contentEl = function() {
            return this._contentEl || this._el
        },
        k.prototype._id,
        k.prototype.id = function() {
            return this._id
        },
        k.prototype.addChild = function(a, b) {
            var c;
            if ("string" == typeof a) {
                if (!this._player.UI[a]) return;
                c = new this._player.UI[a](this._player, b)
            } else c = a;
            if (this._children.push(c), "function" == typeof c.id && (this._childIndex[c.id()] = c), "function" == typeof c.el && c.el()) {
                var d = c.el();
                d.id = c.id(),
                this.contentEl().appendChild(d)
            }
            return c
        },
        k.prototype.removeChild = function(a) {
            if (a && this._children) {
                for (var b = !1,
                c = this._children.length - 1; c >= 0; c--) if (this._children[c] === a) {
                    b = !0,
                    this._children.splice(c, 1);
                    break
                }
                if (b) {
                    this._childIndex[a.id] = null;
                    var d = a.el();
                    d && d.parentNode === this.contentEl() && this.contentEl().removeChild(a.el())
                }
            }
        },
        k.prototype.initChildren = function() {
            var a, b, c, d, e;
            if (a = this, b = this.options().children) if (f.isArray(b)) for (var g = 0; g < b.length; g++) c = b[g],
            "string" == typeof c ? (d = c, e = {}) : (d = c.name, e = c),
            a.addChild(d, e);
            else f.each(b,
            function(b, c) { ! 1 !== c && a.addChild(b, c)
            })
        },
        k.prototype.on = function(a, b) {
            return h.on(this._el, a, i.bind(this, b)),
            this
        },
        k.prototype.off = function(a, b) {
            return h.off(this._el, a, b),
            this
        },
        k.prototype.one = function(a, b) {
            return h.one(this._el, a, i.bind(this, b)),
            this
        },
        k.prototype.trigger = function(a, b) {
            return b && (this._el.paramData = b),
            this._eventState = a,
            h.trigger(this._el, a),
            this
        },
        k.prototype.off = function(a) {
            return h.off(this._el, a),
            this
        },
        k.prototype.addClass = function(a) {
            return g.addClass(this._el, a),
            this
        },
        k.prototype.removeClass = function(a) {
            return g.removeClass(this._el, a),
            this
        },
        k.prototype.show = function() {
            return this._el.style.display = "block",
            this
        },
        k.prototype.hide = function() {
            return this._el.style.display = "none",
            this
        },
        k.prototype.destroy = function() {
            if (this.trigger({
                type: "destroy",
                bubbles: !1
            }), this._children) for (var a = this._children.length - 1; a >= 0; a--) this._children[a].destroy && this._children[a].destroy();
            this.children_ = null,
            this.childIndex_ = null,
            this.off(),
            this._el.parentNode && this._el.parentNode.removeChild(this._el),
            e.removeData(this._el),
            this._el = null
        },
        b.exports = k
    },
    {
        "../lib/constants": 11,
        "../lib/data": 13,
        "../lib/dom": 14,
        "../lib/event": 15,
        "../lib/function": 16,
        "../lib/layout": 18,
        "../lib/object": 19,
        "../lib/oo": 20,
        "../lib/util": 25
    }],
    44 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/dom"),
        f = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-big-play-btn")
            },
            bindEvent: function() {
                var a = this;
                this._player.on("play",
                function() {
                    a.addClass("playing"),
                    e.css(a.el(), "display", "none")
                }),
                this._player.on("pause",
                function() {
                    a.removeClass("playing"),
                    e.css(a.el(), "display", "block")
                }),
                this.on("click",
                function() {
                    a._player.paused() && (a._player.play(), e.css(a.el(), "display", "none"))
                }),
                this._player.on("play_btn_show",
                function() {
                    a.removeClass("playing"),
                    e.css(a.el(), "display", "block")
                }),
                this._player.on("play_btn_hide",
                function() {
                    a.removeClass("playing"),
                    e.css(a.el(), "display", "none")
                })
            }
        });
        b.exports = f
    },
    {
        "../../lib/dom": 14,
        "../component": 43
    }],
    45 : [function(a, b, c) {
        var d = a("../component"),
        e = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-controlbar"),
                this.initChildren(),
                this.onEvent()
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this);
                return a.innerHTML = '<div class="prism-controlbar-bg"></div>',
                a
            },
            onEvent: function() {
                var a = this.player(),
                b = a.options(),
                c = this;
                this.timer = null;
                var d = b.controlBarVisibility;
                1 == b.controlBarForOver && (d = "hover"),
                "hover" == d ? (c.hide(), a.on("mouseover",
                function() {
                    c._show()
                }), a.on("mouseout",
                function() {
                    c.hide(),
                    a.trigger("hideBar")
                })) : "click" == d ? (a.on("click",
                function(b) {
                    a._isError || (b.preventDefault(), b.stopPropagation(), c._show(), c._hide())
                }), a.on("ready",
                function() {
                    c._hide()
                }), a.on("touchstart",
                function() {
                    c._show()
                }), a.on("touchmove",
                function() {
                    c._show()
                }), a.on("touchend",
                function() {
                    c._hide()
                })) : c._show()
            },
            _show: function() {
                this.show(),
                this._player.trigger("showBar"),
                this.timer && (clearTimeout(this.timer), this.timer = null)
            },
            _hide: function() {
                var a = this,
                b = this.player(),
                c = b.options(),
                d = c.showBarTime;
                this.timer = setTimeout(function() {
                    a.hide(),
                    a._player.trigger("hideBar")
                },
                d)
            }
        });
        b.exports = e
    },
    {
        "../component": 43
    }],
    46 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/util"),
        f = a("../../lib/dom"),
        g = a("../../lib/event"),
        h = a("../../lib/ua"),
        i = a("../../lang/index"),
        j = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-ErrorMessage",
                this.addClass(this.className)
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerHTML = "<div class='prism-error-content'><p></p></div><div class='prism-error-operation'><a class='prism-button prism-button-refresh' type='button'>" + i.get("Refresh_Text") + "</a><a class='prism-button prism-button-orange'  target='_blank'>" + i.get("Detection_Text") + "</a></div><div class='prism-detect-info prism-center'><p class='errorCode'><span class='info-label'>code：</span><span class='info-content'></span></p><p class='vid'><span class='info-label'>vid：</span><span class='info-content'></span></p><p class='uuid'><span class='info-label'>uuid：</span><span class='info-content'></span></p><p class='requestId'><span class='info-label'>requestId：</span><span class='info-content'></span></p><p class='dateTime'><span class='info-label'>" + i.get("Play_DateTime") + "：</span><span class='info-content'></span></p></div>",
                a
            },
            bindEvent: function() {
                var a = this;
                a._player.on("error_show",
                function(b) {
                    var c = a._player.getMonitorInfo();
                    a._show(b, c)
                }),
                a._player.on("error_hide", a._hide);
                var b = document.querySelector("#" + a.id() + " .prism-button-refresh");
                if (g.on(b, "click",
                function() {
                    location.reload(!0)
                }), h.IS_MOBILE) {
                    var b = document.querySelector("#" + a.id() + " .prism-detect-info");
                    f.addClass(b, "prism-width90")
                }
            },
            _show: function(a, b) {
                var c = a.paramData,
                d = "",
                g = "";
                c.mediaId && (d = c.mediaId),
                b.vu && (g = decodeURIComponent(b.vu));
                var h = document.querySelector("#" + this.id() + " .prism-button-orange"),
                j = "http://player.alicdn.com/detection.html?from=h5&vid=" + d + "&source=" + g + "&pd=" + b.pd + "&vt=" + b.vt + "&tt=" + b.tt + "&uuid=" + b.uuid + "&av=" + b.av + "&bi=" + b.bi + "&md=" + b.md + "&vu=" + g + "&lang=" + i.getCurrentLanguage();
                h.href = j;
                var k = c.display_msg || c.error_msg;
                document.querySelector("#" + this.id() + " .prism-error-content p").innerText = k,
                document.querySelector("#" + this.id() + " .errorCode .info-content").innerText = c.error_code;
                var l = document.querySelector("#" + this.id() + " .vid");
                c.mediaId ? (f.css(l, "display", "block"), document.querySelector("#" + this.id() + " .vid .info-content").innerText = c.mediaId) : f.css(l, "display", "none"),
                document.querySelector("#" + this.id() + " .uuid .info-content").innerText = c.uuid,
                document.querySelector("#" + this.id() + " .requestId .info-content").innerText = c.requestId,
                document.querySelector("#" + this.id() + " .dateTime .info-content").innerText = e.formatDate(new Date, "yyyy-MM-dd HH:mm:ss");
                var m = document.querySelector(".prism-ErrorMessage");
                f.css(m, "display", "block"),
                this._player.trigger("play_btn_hide")
            },
            _hide: function() {
                var a = document.querySelector(".prism-ErrorMessage");
                f.css(a, "display", "none")
            }
        });
        b.exports = j
    },
    {
        "../../lang/index": 10,
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/ua": 23,
        "../../lib/util": 25,
        "../component": 43
    }],
    47 : [function(a, b, c) {
        var d = a("../component"),
        e = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-fullscreen-btn")
            },
            bindEvent: function() {
                var a = this;
                this._player.on("requestFullScreen",
                function() {
                    a.addClass("fullscreen")
                }),
                this._player.on("cancelFullScreen",
                function() {
                    a.removeClass("fullscreen")
                }),
                this.on("click",
                function() {
                    this._player.getIsFullScreen() ? this._player.cancelFullScreen() : this._player.requestFullScreen()
                })
            }
        });
        b.exports = e
    },
    {
        "../component": 43
    }],
    48 : [function(a, b, c) {
        "use strict";
        var d = a("../component"),
        e = (a("../../lib/dom"), d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-hide")
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerHTML = '<div class="circle"></div> <div class="circle1"></div>',
                a
            },
            _loading_hide: function(a) {
                var b = this,
                c = document.querySelector("#" + b.id() + " .prism-loading");
                c && (c.className = "prism-hide")
            },
            _loading_show: function(a) {
                var b = this,
                c = document.querySelector("#" + b.id() + " .prism-hide");
                c && (c.className = "prism-loading")
            },
            bindEvent: function() {
                var a = this;
                a._player.on("h5_loading_show", a._loading_show),
                a._player.on("h5_loading_hide", a._loading_hide)
            }
        }));
        b.exports = e
    },
    {
        "../../lib/dom": 14,
        "../component": 43
    }],
    49 : [function(a, b, c) {
        var d = a("../component"),
        e = (a("../../lib/util"), a("../../lib/dom")),
        f = (a("../../lib/event"), a("../../lib/ua"), a("../../lang/index"), d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-info-display",
                this.addClass(this.className)
            },
            bindEvent: function() {
                var a = this;
                a._player.on("info_show",
                function(a) {
                    var b = document.querySelector(".prism-info-display"),
                    c = a.paramData;
                    c && (b.innerText = c, e.css(b, "display", "block"))
                }),
                a._player.on("info_hide",
                function(a) {
                    var b = document.querySelector(".prism-info-display");
                    e.css(b, "display", "none")
                })
            }
        }));
        b.exports = f
    },
    {
        "../../lang/index": 10,
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/ua": 23,
        "../../lib/util": 25,
        "../component": 43
    }],
    50 : [function(a, b, c) {
        var d = a("../component"),
        e = (a("../../lib/util"), d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-live-display",
                this.addClass(this.className)
            }
        }));
        b.exports = e
    },
    {
        "../../lib/util": 25,
        "../component": 43
    }],
    51 : [function(a, b, c) {
        var d = a("../component"),
        e = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-play-btn")
            },
            bindEvent: function() {
                var a = this;
                this._player.on("play",
                function() {
                    a.addClass("playing")
                }),
                this._player.on("pause",
                function() {
                    a.removeClass("playing")
                }),
                this.on("click",
                function() {
                    a._player.paused() ? (a._player.play(), a.addClass("playing")) : (a._player.pause(), a.removeClass("playing"))
                })
            }
        });
        b.exports = e
    },
    {
        "../component": 43
    }],
    52 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/dom"),
        f = a("../../lib/event"),
        g = a("../../lib/ua"),
        h = a("../../lib/function"),
        i = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-progress",
                this.addClass(this.className)
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this);
                return a.innerHTML = '<div class="prism-progress-loaded"></div><div class="prism-progress-played"></div><div class="prism-progress-cursor"></div>',
                a
            },
            bindEvent: function() {
                var a = this;
                this.loadedNode = document.querySelector("#" + this.id() + " .prism-progress-loaded"),
                this.playedNode = document.querySelector("#" + this.id() + " .prism-progress-played"),
                this.cursorNode = document.querySelector("#" + this.id() + " .prism-progress-cursor"),
                this.controlNode = document.getElementsByClassName("prism-controlbar")[0],
                f.on(this.cursorNode, "mousedown",
                function(b) {
                    a._onMouseDown(b)
                }),
                f.on(this.cursorNode, "touchstart",
                function(b) {
                    a._onMouseDown(b)
                }),
                f.on(this._el, "click",
                function(b) {
                    a._onMouseClick(b)
                }),
                this._player.on("hideProgress",
                function(b) {
                    a._hideProgress(b)
                }),
                this._player.on("cancelHideProgress",
                function(b) {
                    a._cancelHideProgress(b)
                }),
                this.bindTimeupdate = h.bind(this, this._onTimeupdate),
                this._player.on("timeupdate", this.bindTimeupdate),
                g.IS_IPAD ? this.interval = setInterval(function() {
                    a._onProgress()
                },
                500) : this._player.on("progress",
                function() {
                    a._onProgress()
                })
            },
            _hideProgress: function(a) {
                f.off(this.cursorNode, "mousedown"),
                f.off(this.cursorNode, "touchstart")
            },
            _cancelHideProgress: function(a) {
                var b = this;
                f.on(this.cursorNode, "mousedown",
                function(a) {
                    b._onMouseDown(a)
                }),
                f.on(this.cursorNode, "touchstart",
                function(a) {
                    b._onMouseDown(a)
                })
            },
            _onMouseClick: function(a) {
                for (var b = this,
                c = this.el().offsetLeft, d = this.el(); d = d.offsetParent;) c += d.offsetLeft;
                var e = a.touches ? a.touches[0].pageX: a.pageX,
                f = e - c,
                g = this.el().offsetWidth,
                h = this._player.getDuration() ? f / g * this._player.getDuration() : 0;
                h < 0 && (h = 0),
                h > this._player.getDuration() && (h = this._player.getDuration()),
                this._player.trigger("seekStart", {
                    fromTime: this._player.getCurrentTime()
                }),
                this._player.seek(h);
                var b = this;
                setTimeout(function() {
                    b._player.play()
                }),
                this._player.trigger("seekEnd", {
                    toTime: this._player.getCurrentTime()
                })
            },
            _onMouseDown: function(a) {
                var b = this;
                a.preventDefault(),
                this._player.pause(),
                this._player.trigger("seekStart", {
                    fromTime: this._player.getCurrentTime()
                }),
                f.on(this.controlNode, "mousemove",
                function(a) {
                    b._onMouseMove(a)
                }),
                f.on(this.controlNode, "touchmove",
                function(a) {
                    b._onMouseMove(a)
                }),
                f.on(this._player.tag, "mouseup",
                function(a) {
                    b._onPlayerMouseUp(a)
                }),
                f.on(this._player.tag, "touchend",
                function(a) {
                    b._onPlayerMouseUp(a)
                }),
                f.on(this.controlNode, "mouseup",
                function(a) {
                    b._onControlBarMouseUp(a)
                }),
                f.on(this.controlNode, "touchend",
                function(a) {
                    b._onControlBarMouseUp(a)
                })
            },
            _onMouseUp: function(a) {
                a.preventDefault(),
                f.off(this.controlNode, "mousemove"),
                f.off(this.controlNode, "touchmove"),
                f.off(this._player.tag, "mouseup"),
                f.off(this._player.tag, "touchend"),
                f.off(this.controlNode, "mouseup"),
                f.off(this.controlNode, "touchend");
                var b = this.playedNode.offsetWidth / this.el().offsetWidth * this._player.getDuration();
                this._player.getDuration();
                this._player.seek(b),
                this._player.play(),
                this._player.trigger("seekEnd", {
                    toTime: this._player.getCurrentTime()
                })
            },
            _onControlBarMouseUp: function(a) {
                a.preventDefault(),
                f.off(this.controlNode, "mousemove"),
                f.off(this.controlNode, "touchmove"),
                f.off(this._player.tag, "mouseup"),
                f.off(this._player.tag, "touchend"),
                f.off(this.controlNode, "mouseup"),
                f.off(this.controlNode, "touchend");
                var b = this.playedNode.offsetWidth / this.el().offsetWidth * this._player.getDuration();
                this._player.getDuration();
                this._player.seek(b),
                this._player.play(),
                this._player.trigger("seekEnd", {
                    toTime: this._player.getCurrentTime()
                })
            },
            _onPlayerMouseUp: function(a) {
                a.preventDefault(),
                f.off(this.controlNode, "mousemove"),
                f.off(this.controlNode, "touchmove"),
                f.off(this._player.tag, "mouseup"),
                f.off(this._player.tag, "touchend"),
                f.off(this.controlNode, "mouseup"),
                f.off(this.controlNode, "touchend");
                var b = this.playedNode.offsetWidth / this.el().offsetWidth * this._player.getDuration();
                this._player.getDuration();
                isNaN(b) || (this._player.seek(b), this._player.play()),
                this._player.trigger("seekEnd", {
                    toTime: this._player.getCurrentTime()
                })
            },
            _onMouseMove: function(a) {
                a.preventDefault();
                for (var b = this.el().offsetLeft, c = this.el(); c = c.offsetParent;) b += c.offsetLeft;
                var d = a.touches ? a.touches[0].pageX: a.pageX,
                e = d - b,
                f = this.el().offsetWidth,
                g = this._player.getDuration() ? e / f * this._player.getDuration() : 0;
                g < 0 && (g = 0),
                g > this._player.getDuration() && (g = this._player.getDuration()),
                this._player._hls || (this._player.seek(g), this._player.play()),
                this._updateProgressBar(this.playedNode, g),
                this._updateCursorPosition(g)
            },
            _onTimeupdate: function(a) {
                this._updateProgressBar(this.playedNode, this._player.getCurrentTime()),
                this._updateCursorPosition(this._player.getCurrentTime()),
                this._player.trigger("updateProgressBar", {
                    time: this._player.getCurrentTime()
                })
            },
            _onProgress: function(a) {
                this._player.getDuration() && this._player.getBuffered().length >= 1 && this._updateProgressBar(this.loadedNode, this._player.getBuffered().end(this._player.getBuffered().length - 1))
            },
            _updateProgressBar: function(a, b) {
                if (1 != this._player._switchSourcing) {
                    var c = this._player.getDuration() ? b / this._player.getDuration() : 0;
                    a && e.css(a, "width", 100 * c + "%")
                }
            },
            _updateCursorPosition: function(a) {
                if (1 != this._player._switchSourcing) {
                    var b = this._player.getDuration() ? a / this._player.getDuration() : 0;
                    b > 1 - 1.5 * this.cursorNode.clientWidth / this.el().clientWidth || this.cursorNode && e.css(this.cursorNode, "left", 100 * b + "%")
                }
            }
        });
        b.exports = i
    },
    {
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/function": 16,
        "../../lib/ua": 23,
        "../component": 43
    }],
    53 : [function(a, b, c) {
        var d = a("../component"),
        e = (a("../../lib/dom"), a("../../lib/util")),
        f = a("../../lang/index"),
        g = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-snapshot-btn")
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerText = f.get("Snapshot"),
                a
            },
            bindEvent: function() {
                var a = this;
                this.on("click",
                function() {
                    a.trigger("snapshoting");
                    var b = document.createElement("canvas"),
                    c = a._player.tag,
                    d = c.videoWidth,
                    f = c.videoHeight,
                    g = a._player._getSanpshotMatric();
                    b.width = g.width || d,
                    b.height = g.height || f;
                    var h = a._player.getCurrentTime();
                    b.getContext("2d").drawImage(c, 0, 0, d, f);
                    var i = b.toDataURL("image/jpeg", g.rate || 1),
                    j = i.substr(i.indexOf(",") + 1),
                    k = e.toBinary(j);
                    a.trigger("snapshoted", {
                        time: h,
                        base64: i,
                        binary: k
                    })
                })
            }
        });
        b.exports = g
    },
    {
        "../../lang/index": 10,
        "../../lib/dom": 14,
        "../../lib/util": 25,
        "../component": 43
    }],
    54 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/object"),
        f = a("../../lib/util"),
        g = (a("../../lib/cookie"), a("../../lib/dom")),
        h = a("../../lib/event"),
        i = a("../../lib/constants"),
        j = a("../../lang/index"),
        k = d.extend({
            init: function(a, b) {
                this._hasGeneratedList = !1,
                this._previousSelection = null,
                this._isShown = !1,
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-speed-selector",
                this.addClass(this.className)
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerHTML = '<div class="current-speed-selector" key="1">' + j.get("Speed_1X_Text") + '</div><ul class="speed-selector-list"></ul>',
                a
            },
            bindEvent: function() {
                var a = this,
                b = document.querySelector("#" + a.id() + "  .current-speed-selector"),
                c = document.querySelector("#" + a.id() + " .speed-selector-list");
                h.on(c, "mouseleave",
                function() {
                    g.css(c, "display", "none"),
                    a._isShown = !1
                }),
                h.on(b, "click",
                function() {
                    if (a._hasGeneratedList) g.css(c, "display", 0 == a._isShown ? "block": "none"),
                    a._isShown = !a._isShown;
                    else {
                        var d = i.SpeedLevels;
                        e.each(d,
                        function(d, e) {
                            var f = g.createEl.call(a, "li", {
                                key: d.key,
                                text: d.text
                            });
                            b.getAttribute("key") == d.key && (g.addClass(f, "current"), a._previousSelection = f);
                            var h = g.createEl.call(a, "span", {
                                key: d.key,
                                text: d.text
                            });
                            h.innerText = d.text,
                            f.appendChild(h),
                            c.appendChild(f)
                        }),
                        a._hasGeneratedList = !0,
                        g.css(c, "display", "block")
                    }
                }),
                h.on(c, "click",
                function(b) {
                    var d = b.srcElement ? b.srcElement: b.target,
                    e = d.key,
                    h = d.text;
                    if (void 0 !== h) {
                        a._previousSelection && g.removeClass(a._previousSelection, "current"),
                        a._previousSelection = d,
                        g.addClass(d, "current");
                        document.querySelector("#" + a.id() + " .current-speed-selector").innerText = h,
                        a._player.setSpeed(e),
                        f.delayHide(c)
                    }
                })
            }
        });
        b.exports = k
    },
    {
        "../../lang/index": 10,
        "../../lib/constants": 11,
        "../../lib/cookie": 12,
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/object": 19,
        "../../lib/util": 25,
        "../component": 43
    }],
    55 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/object"),
        f = a("../../lib/util"),
        g = a("../../lib/cookie"),
        h = a("../../lib/dom"),
        i = a("../../lib/event"),
        j = a("../../lib/constants"),
        k = a("../../lang/index"),
        l = d.extend({
            init: function(a, b) {
                this._hasGeneratedList = !1,
                this._previousSelection = null,
                this._isShown = !1,
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-stream-selector",
                this.addClass(this.className)
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerHTML = '<div class="current-stream-selector">' + k.get("Quality_SD_Text") + '</div><ul class="stream-selector-list"></ul>',
                a
            },
            showTip: function(a, b) {
                this._player.trigger("info_show", a);
                var c = this;
                setTimeout(function() {
                    c._player.trigger("info_hide", a)
                },
                b)
            },
            bindEvent: function() {
                var a = this,
                b = document.querySelector("#" + a.id() + "  .current-stream-selector"),
                c = document.querySelector("#" + a.id() + " .stream-selector-list");
                i.on(c, "mouseleave",
                function() {
                    h.css(c, "display", "none"),
                    a._isShown = !1
                }),
                this._player.on("qualitychange",
                function(b) {
                    var c = document.querySelectorAll("#" + a.id() + " .stream-selector-list li"),
                    d = "",
                    e = "";
                    if (c.length > a._player._currentPlayIndex) {
                        var f = c[a._player._currentPlayIndex];
                        d = k.get("Quality_The_Url"),
                        a._previousSelection && (h.removeClass(a._previousSelection, "current"), d = a._previousSelection.text),
                        h.addClass(f, "current"),
                        e = f.text;
                        document.querySelector("#" + a.id() + " .current-stream-selector").innerText = e,
                        a._previousSelection = f
                    } else if (a._player._currentPlayIndex > 0) {
                        var g = a._player._urls,
                        i = a._player._currentPlayIndex;
                        d = g[i - 1].desc,
                        e = g[i].desc
                    }
                    a.showTip(d + b.paramData + e, 1e3)
                }),
                this._player.on("sourceloaded",
                function(b) {
                    var c = b.paramData.desc,
                    d = document.querySelector("#" + a.id() + " .current-stream-selector");
                    d.innerText = c,
                    h.css(d, "display", "block")
                }),
                i.on(b, "click",
                function() {
                    if (a._hasGeneratedList) h.css(c, "display", 0 == a._isShown ? "block": "none"),
                    a._isShown = !a._isShown;
                    else {
                        var b = a._player._urls;
                        b.length > 0 && e.each(b,
                        function(b, d) {
                            var e = h.createEl.call(a, "li", {
                                url: b.Url,
                                index: d,
                                text: b.desc
                            });
                            a._player._currentPlayIndex == d && (h.addClass(e, "current"), a._previousSelection = e);
                            var f = h.createEl.call(a, "span", {
                                url: b.Url,
                                index: d,
                                text: b.desc
                            });
                            f.innerText = b.desc,
                            e.appendChild(f),
                            c.appendChild(e),
                            a._hasGeneratedList = !0,
                            h.css(c, "display", "block")
                        })
                    }
                }),
                i.on(c, "click",
                function(b) {
                    var d = b.srcElement ? b.srcElement: b.target,
                    e = d.url,
                    i = d.index,
                    l = d.text;
                    if (void 0 !== l) {
                        a._player._switchSourcing = !0,
                        a._previousSelection && h.removeClass(a._previousSelection, "current"),
                        a._previousSelection = d,
                        h.addClass(d, "current"),
                        a._player._currentPlayIndex = i,
                        g.set(j.SelectedStreamLevel, a._player._urls[i].definition, 365),
                        a._player._urls.length > i && (e = a._player._urls[i].Url);
                        document.querySelector("#" + a.id() + " .current-stream-selector").innerText = l,
                        a._player.loadByUrl(e, a._player.getCurrentTime(), !a._player.paused()),
                        h.css(c, "display", "none"),
                        a._isShown = !1,
                        a.showTip(k.get("Quality_Change_Text") + l, 2e3),
                        setTimeout(function() {
                            a._player._switchSourcing = !1
                        }),
                        f.delayHide(c)
                    }
                })
            }
        });
        b.exports = l
    },
    {
        "../../lang/index": 10,
        "../../lib/constants": 11,
        "../../lib/cookie": 12,
        "../../lib/dom": 14,
        "../../lib/event": 15,
        "../../lib/object": 19,
        "../../lib/util": 25,
        "../component": 43
    }],
    56 : [function(a, b, c) {
        var d = a("../component"),
        e = a("../../lib/util"),
        f = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.className = b.className ? b.className: "prism-time-display",
                this.addClass(this.className)
            },
            createEl: function() {
                var a = d.prototype.createEl.call(this, "div");
                return a.innerHTML = '<span class="current-time">00:00</span> <span class="time-bound">/</span> <span class="duration">00:00</span>',
                a
            },
            bindEvent: function() {
                var a = this;
                this._player.on("durationchange",
                function() {
                    var b = e.formatTime(a._player.getDuration());
                    b ? (document.querySelector("#" + a.id() + " .time-bound").style.display = "inline", document.querySelector("#" + a.id() + " .duration").style.display = "inline", document.querySelector("#" + a.id() + " .duration").innerText = b) : (document.querySelector("#" + a.id() + " .duration").style.display = "none", document.querySelector("#" + a.id() + " .time-bound").style.display = "none")
                }),
                this._player.on("timeupdate",
                function() {
                    var b = e.formatTime(a._player.getCurrentTime());
                    document.querySelector("#" + a.id() + " .current-time") && (b ? (document.querySelector("#" + a.id() + " .current-time").style.display = "inline", document.querySelector("#" + a.id() + " .current-time").innerText = b) : document.querySelector("#" + a.id() + " .current-time").style.display = "none")
                })
            }
        });
        b.exports = f
    },
    {
        "../../lib/util": 25,
        "../component": 43
    }],
    57 : [function(a, b, c) {
        var d = a("../component"),
        e = d.extend({
            init: function(a, b) {
                d.call(this, a, b),
                this.addClass(b.className || "prism-volume")
            },
            bindEvent: function() {
                var a = this;
                this.on("click",
                function() {
                    a._player.muted() ? (a._player.unMute(), a.removeClass("mute")) : (a._player.mute(), a.addClass("mute"))
                })
            }
        });
        b.exports = e
    },
    {
        "../component": 43
    }],
    58 : [function(a, b, c) {
        b.exports = {
            H5Loading: a("./component/h5-loading"),
            bigPlayButton: a("./component/big-play-button"),
            controlBar: a("./component/controlbar"),
            progress: a("./component/progress"),
            playButton: a("./component/play-button"),
            liveDisplay: a("./component/live-display"),
            timeDisplay: a("./component/time-display"),
            fullScreenButton: a("./component/fullscreen-button"),
            volume: a("./component/volume"),
            streamButton: a("./component/stream-selector"),
            speedButton: a("./component/speed-selector"),
            snapshot: a("./component/snapshot"),
            errorDisplay: a("./component/error-display"),
            infoDisplay: a("./component/info-display")
        }
    },
    {
        "./component/big-play-button": 44,
        "./component/controlbar": 45,
        "./component/error-display": 46,
        "./component/fullscreen-button": 47,
        "./component/h5-loading": 48,
        "./component/info-display": 49,
        "./component/live-display": 50,
        "./component/play-button": 51,
        "./component/progress": 52,
        "./component/snapshot": 53,
        "./component/speed-selector": 54,
        "./component/stream-selector": 55,
        "./component/time-display": 56,
        "./component/volume": 57
    }]
},
{},
[8]);