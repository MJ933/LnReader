var c = new (function() {
    function r(e) {
      var t;
      this.parseData = function(e) {
        // Existing date parsing logic
      },
      this.id = e.id,
      this.name = e.sourceName,
      this.icon = "multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),
      this.site = e.sourceSite;
      var a = (null === (t = e.options) || void 0 === t ? void 0 : t.versionIncrements) || 0;
      this.version = "1.0.".concat(3+a),
      this.options = e.options,
      this.filters = e.filters
    }
    
    r.prototype.getCheerio = function(a, r) {
      return e(this, void 0, void 0, (function() {
        var e, i, o, s;
        return t(this, (function(t) {
          switch (t.label) {
            case 0:
              return [4, (0,n.fetchApi)(a)];
            case 1:
              if (!(e = t.sent()).ok && 1 != r)
                throw new Error("Could not reach site ("+e.status+") try to open in webview.");
              return o = l.load, [4, e.text()];
            case 2:
              if (i = o.apply(void 0, [t.sent()]),
              s = i("title").text().trim(),
              this.getHostname(a) != this.getHostname(e.url) || "Bot Verification" == s || "You are being redirected..." == s || "Un instant..." == s || "Just a moment..." == s || "Redirecting..." == s)
                throw new Error("Captcha error, please open in webview");
              return [2, i]
          }
        }))
      }))
    },
    
    r.prototype.parseNovels = function(e) {
      var t = [];
      e(".book").each(function() {
        var novel = {
          name: e(this).find('.book-title').text().trim(),
          cover: e(this).find('img').attr('src'),
          path: e(this).find('a').attr('href')
        };
        t.push(novel);
      });
      return t;
    },
    
    r.prototype.parseNovel = function(a) {
      return e(this, void 0, void 0, (function() {
        var e, r;
        return t(this, (function(t) {
          switch (t.label) {
            case 0:
              return [4, this.getCheerio(this.site + a, false)];
            case 1:
              e = t.sent();
              r = {
                path: a,
                name: e('.book-title').text().trim(),
                cover: e('.book-cover img').attr('src'),
                author: e('.book-author').text().trim(),
                status: e('.book-status').text().includes('مكتملة') ? o.NovelStatus.Completed : o.NovelStatus.Ongoing,
                summary: e('.book-description').text().trim()
              };
              
              var chapters = [];
              e('.chapter-item').each(function(index) {
                chapters.push({
                  name: e(this).find('.chapter-title').text().trim(),
                  path: e(this).find('a').attr('href'),
                  releaseTime: e(this).find('.chapter-date').text().trim(),
                  chapterNumber: index + 1
                });
              });
              
              r.chapters = chapters.reverse();
              return [2, r];
          }
        }))
      }))
    },
    
    r.prototype.parseChapter = function(a) {
      return e(this, void 0, void 0, (function() {
        var e;
        return t(this, (function(t) {
          switch (t.label) {
            case 0:
              return [4, this.getCheerio(this.site + a, false)];
            case 1:
              e = t.sent();
              return [2, e('.chapter-content').html() || ''];
          }
        }))
      }))
    },
    
    r.prototype.searchNovels = function(a, r) {
      return e(this, void 0, void 0, (function() {
        var e, n;
        return t(this, (function(t) {
          switch (t.label) {
            case 0:
              e = this.site + "/search?q=" + a + "&page=" + r;
              return [4, this.getCheerio(e, true)];
            case 1:
              n = t.sent();
              return [2, this.parseNovels(n)];
          }
        }))
      }))
    };
    
    return r;
  })({
    id: "rewayat",
    sourceSite: "https://rewayat.club/",
    sourceName: "Rewayat",
    // Add other properties as needed
  });
  
  exports.default = c;