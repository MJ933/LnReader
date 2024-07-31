var e = this && this.__awaiter || function(e, t, a, r) {
    return new (a || (a = Promise))((function(n, l) {
        function i(e) {
            try {
                s(r.next(e))
            } catch (e) {
                l(e)
            }
        }

        function o(e) {
            try {
                s(r.throw(e))
            } catch (e) {
                l(e)
            }
        }

        function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                e(t)
            }))).then(i, o)
        }
        s((r = r.apply(e, t || [])).next())
    }))
},
t = this && this.__generator || function(e, t) {
    var a, r, n, l, i = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1]
        },
        trys: [],
        ops: []
    };
    return l = {
        next: o(0),
        throw: o(1),
        return: o(2)
    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this
    }), l;

    function o(o) {
        return function(s) {
            return function(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (; l && (l = 0, o[0] && (i = 0)), i;) try {
                    if (a = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                        case 0:
                        case 1:
                            n = o;
                            break;
                        case 4:
                            return i.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            i.label++, r = o[1], o = [0];
                            continue;
                        case 7:
                            o = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(n = i.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                i.label = o[1];
                                break
                            }
                            if (6 === o[0] && i.label < n[1]) {
                                i.label = n[1], n = o;
                                break
                            }
                            if (n && i.label < n[2]) {
                                i.label = n[2], i.ops.push(o);
                                break
                            }
                            n[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    o = t.call(e, i)
                } catch (e) {
                    o = [6, e], r = 0
                } finally {
                    a = n = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }([o, s])
        }
    }
},
a = this && this.__spreadArray || function(e, t, a) {
    if (a || 2 === arguments.length)
        for (var r, n = 0, l = t.length; n < l; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
    return e.concat(r || Array.prototype.slice.call(t))
},
r = this && this.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = require("@libs/fetch"),
    l = require("cheerio"),
    i = require("@libs/defaultCover"),
    o = require("@libs/novelStatus"),
    s = r(require("dayjs")),
    u = function(e, t) {
        return new RegExp(t.join("|")).test(e)
    },
    c = new (function() {
        function r(e) {
            var t;
            this.parseData = function(e) {
                var t, a = (0, s.default)(),
                    r = (null === (t = e.match(/\d+/)) || void 0 === t ? void 0 : t[0]) || "",
                    n = parseInt(r, 10);
                if (!r) return e;
                if (u(e, ["detik", "segundo", "second", "วินาที"])) a = a.subtract(n, "second");
                else if (u(e, ["menit", "dakika", "min", "minute", "minuto", "นาที", "دقائق"])) a = a.subtract(n, "minute");
                else if (u(e, ["jam", "saat", "heure", "hora", "hour", "ชั่วโมง", "giờ", "ore", "ساعة", "小时"])) a = a.subtract(n, "hours");
                else if (u(e, ["hari", "gün", "jour", "día", "dia", "day", "วัน", "ngày", "giorni", "أيام", "天"])) a = a.subtract(n, "days");
                else if (u(e, ["week", "semana"])) a = a.subtract(n, "week");
                else if (u(e, ["month", "mes"])) a = a.subtract(n, "month");
                else {
                    if (!u(e, ["year", "año"])) return "Invalid Date" !== (0, s.default)(e).format("LL") ? (0, s.default)(e).format("LL") : e;
                    a = a.subtract(n, "year")
                }
                return a.format("LL")
            }, this.id = e.id, this.name = e.sourceName, this.icon = "multisrc/madara/" + e.id.toLowerCase() + "/icon.png", this.site = e.sourceSite;
            var a = (null === (t = e.options) || void 0 === t ? void 0 : t.versionIncrements) || 0;
            this.version = "1.0." + (3 + a), this.options = e.options, this.filters = e.filters
        }
        return r.prototype.translateDragontea = function(e) {
            if ("dragontea" === this.id) {
                var t = (0, l.load)(e.html() || ""),
                    r = t.html() || "";
                r = (r = r.replace("\n", "")).replace(/<br\s*\/?>/g, "\n"), e.html(r), e.find(":not(:has(*))").each((function(e, r) {
                    var n, l = t(r),
                        i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
                        o = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),
                        s = l.text().normalize("NFD").split(""),
                        u = a([], s, !0).map((function(e) {
                            var t = e.normalize("NFC"),
                                a = i.indexOf(t);
                            return -1 !== a ? o[a] + e.slice(t.length) : e
                        })).join("");
                    l.html((null === (n = l.html()) || void 0 === n ? void 0 : n.replace(l.text(), u).replace("\n", "<br>")) || "")
                }))
            }
            return e
        }, r.prototype.getHostname = function(e) {
            var t = (e = e.split("/")[2]).split(".");
            return t.pop(), t.join(".")
        }, r.prototype.getCheerio = function(a, r) {
            return e(this, void 0, void 0, (function() {
                var e, i, o;
                return t(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, (0, n.fetchApi)(a, {
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                                    'Accept-Language': 'ar,en-US;q=0.7,en;q=0.3',
                                    'Referer': this.site,
                                }
                            })];
                        case 1:
                            if (!(e = t.sent()).ok && 1 != r) throw new Error("Could not reach site (" + e.status + ") try to open in webview.");
                            return [4, e.text()];
                        case 2:
                            if (i = t.sent(), o = l.load(i), !o("#__next").length) throw new Error("Unable to parse site structure. The site might have changed.");
                            return [2, o]
                    }
                }))
            }))
        }, r.prototype.parseNovels = function(e) {
            var t = [];
            e('.card').each(function(a, r) {
                var n = e(r).find('.card-title').text().trim(),
                    l = e(r).find('a').attr('href') || '';
                if (n && l) {
                    var o = e(r).find('img'),
                        s = {
                            name: n,
                            cover: o.attr('src') || i.defaultCover,
                            path: l.replace(/https?:\/\/.*?\//, "/")
                        };
                    t.push(s);
                }
            });
            return t;
        }, r.prototype.popularNovels = function(a, r) {
            return e(this, arguments, void 0, (function(e, a) {
                var r, n, l, i, o, s, u = a.filters,
                    c = a.showLatestNovels;
                return t(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            for (n in r = this.site + "/page/" + e + "/?s=&post_type=wp-manga", u || (u = this.filters || {}), c && (r += "&m_orderby=latest"), u)
                                if ("object" == typeof u[n].value)
                                    for (l = 0, i = u[n].value; l < i.length; l++) o = i[l], r += "&" + n + "=" + o;
                                else u[n].value && (r += "&" + n + "=" + u[n].value);
                            return [4, this.getCheerio(r, !1)];
                        case 1:
                            return s = t.sent(), [2, this.parseNovels(s)]
                    }
                }))
            }))
        }, r.prototype.parseNovel = function(a) {
            return e(this, void 0, void 0, (function() {
                var e, r, u, c, h, p;
                return t(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.getCheerio(this.site + a, false)];
                        case 1:
                            e = t.sent();
                            r = {
                                path: a,
                                name: e('.novel-title').text().trim()
                            };
                            r.cover = e('.novel-cover img').attr('src') || i.defaultCover;
                            r.author = e('.novel-author').text().trim();
                            r.status = e('.novel-status').text().includes('مستمرة') ? o.NovelStatus.Ongoing : o.NovelStatus.Completed;
                            r.summary = e('.novel-summary').text().trim();

                            c = [];
                            e('.chapter-item').each(function(a, i) {
                                var chapterName = e(i).find('.chapter-title').text().trim();
                                var chapterPath = e(i).find('a').attr('href') || '';
                                var releaseTime = e(i).find('.chapter-release-date').text().trim();

                                if (chapterPath) {
                                    c.push({
                                        name: chapterName,
                                        path: chapterPath.replace(/https?:\/\/.*?\//, "/"),
                                        releaseTime: releaseTime || null,
                                    });
                                }
                            });

                            r.chapters = c.reverse();
                            return [2, r];
                    }
                }));
            }));
        }, r.prototype.parseChapter = function(a) {
            return e(this, void 0, void 0, (function() {
                var e, r;
                return t(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.getCheerio(this.site + a, false)];
                        case 1:
                            e = t.sent();
                            r = e('.chapter-content');
                            return [2, r.html() || ""];
                    }
                }));
            }));
        }, r.prototype.searchNovels = function(a, r) {
            return e(this, void 0, void 0, (function() {
                var e, n;
                return t(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.site + "/page/" + r + "/?s=" + a + "&post_type=wp-manga", [4, this.getCheerio(e, !0)];
                        case 1:
                            return n = t.sent(), [2, this.parseNovels(n)]
                    }
                }))
            }))
        }, r
    }())({
        id: "azora",
        sourceSite: "https://sunovels.com/",
        sourceName: "Azora",
        options: {
            useNewChapterEndpoint: !0,
            lang: "Arabic"
        },
        filters: {
            "genre[]": {
                type: "Checkbox",
                label: "Genre",
                value: [],
                options: [{
                    label: "أكشن",
                    value: "أكشن"
                }, {
                    label: "إثارة",
                    value: "إثارة"
                }, {
                    label: "إيسكاي",
                    value: "إيسكاي"
                }, {
                    label: "الحياة اليومية",
                    value: "الحياة-اليومية"
                }, {
                    label: "الحياة مدرسية",
                    value: "الحياة-مدرسية"
                }, {
                    label: "انتقام",
                    value: "انتقام"
                }, {
                    label: "تاريخي",
                    value: "تاريخي"
                }, {
                    label: "تراجيدي",
                    value: "تراجيدي"
                }, {
                    label: "جندر بندر",
                    value: "جندر-بندر"
                }, {
                    label: "جوسي",
                    value: "جوسي"
                }, {
                    label: "حريم",
                    value: "حريم"
                }, {
                    label: "خارق للطبيعة",
                    value: "خارق-للطبيعة"
                }, {
                    label: "خيال",
                    value: "خيال"
                }, {
                    label: "خيال علمي",
                    value: "خيال-علمي"
                }, {
                    label: "دراما",
                    value: "دراما"
                }, {
                    label: "دموي",
                    value: "دموي"
                }, {
                    label: "راشد",
                    value: "راشد"
                }, {
                    label: "رعب",
                    value: "رعب"
                }, {
                    label: "رومانسي",
                    value: "رومانسي"
                }, {
                    label: "رياضة",
                    value: "رياضة"
                }, {
                    label: "زمنكاني",
                    value: "زمنكاني"
                }, {
                    label: "سينين",
                    value: "سينين"
                }, {
                    label: "شريحة من الحياة",
                    value: "شريحة-من-الحياة"
                }, {
                    label: "شوجو",
                    value: "شوجو"
                }, {
                    label: "شونين",
                    value: "شونين"
                }, {
                    label: "صداقة",
                    value: "صداقة"
                }, {
                    label: "طبخ",
                    value: "طبخ"
                }, {
                    label: "عائلي",
                    value: "عائلي"
                }, {
                    label: "غموض",
                    value: "غموض"
                }, {
                    label: "قتال",
                    value: "قتال"
                }, {
                    label: "قوة خارقة",
                    value: "قوة-خارقة"
                }, {
                    label: "كوميدي",
                    value: "كوميدي"
                }, {
                    label: "مغامرات",
                    value: "مغامرات"
                }, {
                    label: "نفسي",
                    value: "نفسي"
                }]
            },
            op: {
                type: "Switch",
                label: "مع كل التصنيفات المحددة",
                value: !1
            },
            author: {
                type: "Text",
                label: "المؤلف",
                value: ""
            },
            artist: {
                type: "Text",
                label: "الرسام",
                value: ""
            },
            release: {
                type: "Text",
                label: "سنة الاصدار",
                value: ""
            },
            adult: {
                type: "Picker",
                label: "محتوى للبالغين",
                value: "",
                options: [{
                    label: "الكل",
                    value: ""
                }, {
                    label: "بدون محتوى للبالغين",
                    value: "0"
                }, {
                    label: "محتوى للبالغين فقط",
                    value: "1"
                }]
            },
            "status[]": {
                type: "Checkbox",
                label: "الحالة",
                value: [],
                options: [{
                    label: "مستمرة",
                    value: "on-going"
                }, {
                    label: "Completed",
                    value: "end"
                }, {
                    label: "ألغيت",
                    value: "canceled"
                }, {
                    label: "في الانتظار",
                    value: "on-hold"
                }, {
                    label: "Upcoming",
                    value: "upcoming"
                }]
            },
            m_orderby: {
                type: "Picker",
                label: "ترتيب حسب :",
                value: "",
                options: [{
                    label: "ملاءمة",
                    value: ""
                }, {
                    label: "أحدث",
                    value: "latest"
                }, {
                    label: "أ-ي",
                    value: "alphabet"
                }, {
                    label: "تقييم",
                    value: "rating"
                }, {
                    label: "الشائع",
                    value: "trending"
                }, {
                    label: "الأكثر مشاهدة",
                    value: "views"
                }, {
                    label: "جديد",
                    value: "new-manga"
                }]
            }
        }
    });
exports.default = c;