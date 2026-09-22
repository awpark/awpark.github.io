/* Park Lab site script.
   Builds the shared header and footer, and fills pages from the files in /data.
   You should not need to edit this file for routine updates (people, news, papers, themes). */
(function () {
  "use strict";

  var PREVIEW = !!window.__PREVIEW__; // true only in the single-file preview
  var NAV = [
    ["home", "Home", "index.html"],
    ["research", "Research", "index.html#research"],
    ["members", "Members", "members.html"],
    ["publications", "Publications", "publications.html"],
    ["alumni", "Alumni", "alumni.html"],
    ["news", "News", "news.html"]
  ];
  var CONTACT_EMAIL = "awpark@uga.edu"; // confirm this is the address you want public

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Escapes text, then turns [label](https://...) into a link.
  function richText(t) {
    return esc(t).replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2">$1</a>');
  }
  function href(page) {
    var n = NAV.filter(function (x) { return x[0] === page; })[0];
    if (PREVIEW) return "#" + (page === "research" ? "home" : page);
    return n ? n[2] : "index.html";
  }
  function $(id) { return document.getElementById(id); }

  /* ---------- Header and footer ---------- */
  function renderHeader(active) {
    var el = $("site-header");
    if (!el) return;
    var links = NAV.filter(function (n) { return n[0] !== "research" || !PREVIEW; }).map(function (n) {
      var cur = n[0] === active ? ' aria-current="page"' : "";
      return '<a href="' + href(n[0]) + '"' + cur + ">" + n[1] + "</a>";
    }).join("");
    el.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="' + href("home") + '"><strong>Park Lab</strong>' +
      "<span>Ecology and evolution of host\u2013parasite interactions</span></a>" +
      '<nav class="site-nav" aria-label="Main">' + links + "</nav></div>";
  }
  function renderFooter() {
    var el = $("site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="wrap">' +
      "<div><strong>Park Lab</strong><p>Odum School of Ecology and Department of Infectious Diseases, College of Veterinary Medicine</p><p>University of Georgia, Athens, Georgia, USA</p></div>" +
      "<div><strong>Contact</strong><p><a href=\"mailto:" + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a></p></div>" +
      "<div><strong>Explore</strong><p><a href=\"" + href("publications") + '">Publications</a></p><p><a href="' + href("members") + '">Members</a></p></div>' +
      "</div>";
  }

  /* ---------- Themes ---------- */
  function renderThemes() {
    var el = $("themes-list");
    if (!el || !window.THEMES) return;
    el.innerHTML = window.THEMES.map(function (t) {
      var papers = (t.papers || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      return '<article class="theme"><h3>' + esc(t.title) + "</h3><div><p>" + esc(t.text) + "</p>" +
        (papers ? '<p class="papers-label">Selected papers</p><ul class="papers">' + papers + "</ul>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ---------- News ---------- */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function fmtDate(d) {
    var p = d.split("-");
    return MONTHS[+p[1] - 1] + " " + +p[2] + ", " + p[0];
  }
  function newsItem(n) {
    var title = esc(n.title);
    var inner = n.body
      ? "<details><summary>" + title + '</summary><p class="body">' + esc(n.body) + "</p></details>"
      : '<span class="t">' + title + "</span>";
    return '<li><time datetime="' + esc(n.date) + '">' + fmtDate(n.date) + "</time><div>" + inner + "</div></li>";
  }
  function sortedNews() {
    return (window.NEWS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }
  function renderLatestNews() {
    var el = $("latest-news");
    if (!el) return;
    el.innerHTML = sortedNews().slice(0, 5).map(newsItem).join("");
  }
  function renderNewsPage() {
    var el = $("news-list");
    if (!el) return;
    var out = "", year = null;
    sortedNews().forEach(function (n) {
      var y = n.date.slice(0, 4);
      if (y !== year) {
        if (year !== null) out += "</ul>";
        out += '<h2 class="year-heading">' + y + '</h2><ul class="news-list">';
        year = y;
      }
      out += newsItem(n);
    });
    el.innerHTML = out + (year ? "</ul>" : "");
  }

  /* ---------- People ---------- */
  function initials(name) {
    var parts = name.replace(/[^A-Za-z\u00C0-\u024F\s]/g, "").split(/\s+/).filter(Boolean);
    return ((parts[0] || "")[0] || "") + ((parts.length > 1 ? parts[parts.length - 1] : "")[0] || "");
  }
  function photo(p) {
    var src = p.photo ? "images/people/" + encodeURI(p.photo) : "";
    var fallback = '<div class="initials" aria-hidden="true">' + esc(initials(p.name)) + "</div>";
    if (!src || PREVIEW) return fallback;
    return '<img src="' + src + '" alt="' + esc(p.name) + '" loading="lazy" ' +
      "onerror=\"this.outerHTML=this.getAttribute('data-fb')\" data-fb=\"" + esc(fallback) + '">';
  }
  function links(p) {
    if (!p.links || !p.links.length) return "";
    return '<div class="links">' + p.links.map(function (l) {
      return '<a href="' + esc(l.url) + '">' + esc(l.label) + "</a>";
    }).join("") + "</div>";
  }
  function renderMembers() {
    var el = $("people-current");
    if (!el || !window.MEMBERS) return;
    var out = "", rest = "";
    window.MEMBERS.forEach(function (p) {
      if (p.pi) {
        out += '<article class="pi"><div class="photo">' + photo(p) + "</div><div><h3>" + esc(p.name) +
          '</h3><p class="role">' + esc(p.role) + "</p><p>" + esc(p.bio) + "</p>" + links(p) + "</div></article>";
      } else {
        rest += '<article class="person"><div class="photo">' + photo(p) + "</div><h3>" + esc(p.name) +
          '</h3><p class="role">' + esc(p.role) + "</p><p>" + esc(p.bio) + "</p>" + links(p) + "</article>";
      }
    });
    el.innerHTML = out + '<div class="people-grid">' + rest + "</div>";
  }
  function renderAlumni() {
    var el = $("people-alumni");
    if (!el || !window.ALUMNI) return;
    var groups = [], map = {};
    window.ALUMNI.forEach(function (p) {
      if (!map[p.group]) { map[p.group] = []; groups.push(p.group); }
      map[p.group].push(p);
    });
    el.innerHTML = groups.map(function (g) {
      return '<section class="alum-group"><h2>' + esc(g) + '</h2><div class="alum-grid">' +
        map[g].map(function (p) {
          return '<article class="alum"><div class="photo">' + photo(p) + "</div><div><h3>" + esc(p.name) +
            '</h3><p class="role">' + esc(p.role) + "</p><p>" + esc(p.bio) + "</p>" +
            (p.next ? '<p class="next"><strong>After the lab:</strong> ' + richText(p.next) + "</p>" : "") +
            links(p) + "</div></article>";
        }).join("") + "</div></section>";
    }).join("");
  }

  /* ---------- Publications ---------- */
  function renderPublications() {
    var el = $("pub-list");
    if (!el || !window.PUBLICATIONS) return;
    var box = $("pub-search"), count = $("pub-count");
    var all = window.PUBLICATIONS.map(function (r) {
      return { year: r[0], authors: r[1], title: r[2], venue: r[3], detail: r[4], doi: r[5] || "",
        hay: (r[0] + " " + r[1] + " " + r[2] + " " + r[3]).toLowerCase() };
    }).sort(function (a, b) { return b.year - a.year; });
    function draw() {
      var q = (box && box.value || "").trim().toLowerCase();
      var terms = q ? q.split(/\s+/) : [];
      var rows = all.filter(function (p) { return terms.every(function (t) { return p.hay.indexOf(t) !== -1; }); });
      if (count) count.textContent = rows.length + (rows.length === 1 ? " publication" : " publications") + (q ? " match" : "");
      if (!rows.length) {
        el.innerHTML = '<p class="empty">No publications match \u201c' + esc(q) + "\u201d. Try a surname, a journal name or a single keyword.</p>";
        return;
      }
      var out = "", year = null;
      rows.forEach(function (p) {
        if (p.year !== year) {
          if (year !== null) out += "</ul></div>";
          out += '<div class="year-block"><h2>' + p.year + '</h2><ul class="pubs">';
          year = p.year;
        }
        var v = [p.venue ? "<em>" + esc(p.venue) + "</em>" : "", esc(p.detail)].filter(Boolean).join(", ");
        if (p.doi) v += (v ? " " : "") + '<a class="doi" href="https://doi.org/' + encodeURI(p.doi) + '" aria-label="DOI link for ' + esc(p.title) + '">DOI</a>';
        out += '<li><span class="pauth">' + esc(p.authors) + "</span><br><span class=\"ptitle\">" + esc(p.title) + "</span>" +
          (v ? "<br>" + v : "") + "</li>";
      });
      el.innerHTML = out + "</ul></div>";
    }
    if (box) box.addEventListener("input", draw);
    draw();
  }

  /* ---------- Start ---------- */
  function init() {
    var active = document.body.getAttribute("data-page") || "home";
    renderHeader(active);
    renderFooter();
    renderThemes();
    renderLatestNews();
    renderNewsPage();
    renderMembers();
    renderAlumni();
    renderPublications();
  }
  window.__renderHeader = renderHeader; // used by the preview only
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
