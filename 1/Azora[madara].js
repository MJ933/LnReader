var c = new (function() {
    function r(e) {
      this.id = e.id;
      this.name = e.sourceName;
      this.icon = "multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png");
      this.site = e.sourceSite;
      this.version = "1.0.0";
      this.options = e.options;
      this.filters = e.filters;
    }
    
    r.prototype.getCheerio = async function(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      return cheerio.load(html);
    };
    
    r.prototype.parseNovels = function($) {
      const novels = [];
      $('.novel-item').each((index, element) => {
        const $element = $(element);
        novels.push({
          name: $element.find('.novel-title').text().trim(),
          cover: $element.find('.novel-cover img').attr('src'),
          path: $element.find('a').attr('href')
        });
      });
      return novels;
    };
    
    r.prototype.parseNovel = async function(novelUrl) {
      const $ = await this.getCheerio(this.site + novelUrl);
      const novel = {
        path: novelUrl,
        name: $('.novel-title').text().trim(),
        cover: $('.novel-cover img').attr('src'),
        author: $('.novel-author').text().trim(),
        status: $('.novel-status').text().includes('مكتملة') ? 'Completed' : 'Ongoing',
        summary: $('.novel-summary').text().trim(),
        genres: $('.novel-genres').text().trim(),
        chapters: []
      };
      
      $('.chapter-item').each((index, element) => {
        const $element = $(element);
        novel.chapters.push({
          name: $element.find('.chapter-title').text().trim(),
          path: $element.find('a').attr('href'),
          releaseTime: $element.find('.chapter-release-date').text().trim(),
          chapterNumber: index + 1
        });
      });
      
      novel.chapters.reverse();
      return novel;
    };
    
    r.prototype.parseChapter = async function(chapterUrl) {
      const $ = await this.getCheerio(this.site + chapterUrl);
      return $('.chapter-content').html() || '';
    };
    
    r.prototype.searchNovels = async function(searchTerm, page) {
      const url = `${this.site}/search?q=${encodeURIComponent(searchTerm)}&page=${page}`;
      const $ = await this.getCheerio(url);
      return this.parseNovels($);
    };
    
    r.prototype.popularNovels = async function(page) {
      const url = `${this.site}/novels?page=${page}`;
      const $ = await this.getCheerio(url);
      return this.parseNovels($);
    };
  
    return r;
  })({
    id: "rewayat",
    sourceSite: "https://rewayat.club/",
    sourceName: "Rewayat",
    filters: {
      // Add filters here if needed
    }
  });
  
  exports.default = c;