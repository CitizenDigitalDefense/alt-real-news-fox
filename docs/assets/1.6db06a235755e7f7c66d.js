webpackJsonp([1],{"./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/index.js?sourceMap!./source/styles/main.scss":function(n,e,t){e=n.exports=t("./node_modules/css-loader/lib/css-base.js")(),e.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1;\n  color: #100;\n  background: #FAFAFA;\n}\n\n.wrapper main {\n  min-height: 100vh;\n}\n\n#root,\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\nhtml {\n  font-family: 'Roboto', Helvetica, sans-serif;\n  font-size: 100%;\n  font-style: normal;\n  font-weight: normal;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.5;\n  color: #000;\n}\n\nhtml a {\n  color: #000;\n}\n\nbody {\n  line-height: 1.333;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 92px;\n  font-weight: 900;\n}\n\n@media (max-width: 640px) {\n  h1 {\n    font-size: 54px;\n  }\n}\n\nh2 {\n  font-size: 36px;\n  font-weight: 900;\n}\n\n@media (max-width: 640px) {\n  h2 {\n    font-size: 24px;\n  }\n}\n\nh3 {\n  font-size: 1.999em;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-weight: 500;\n}\n\nsmall,\n.font_small {\n  font-size: 0.707em;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\nlabel {\n  font-weight: 500;\n}\n\np {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n}\n\nstrong {\n  font-weight: 900;\n}\n\n.fox-header .hello-bar {\n  height: 32px;\n  margin: 0;\n  display: block;\n  background: #333;\n}\n\n@media (max-width: 972px) {\n  .fox-header .hello-bar {\n    display: none;\n  }\n}\n\n.fox-header .hello-bar .network {\n  height: 100%;\n  width: 972px;\n  margin: 0 auto;\n}\n\n.fox-header .hello-bar .network ul {\n  height: 100%;\n  float: left;\n  font-size: 0;\n}\n\n.fox-header .hello-bar .network li {\n  display: inline;\n  height: 32px;\n  min-width: 40px;\n}\n\n.fox-header .hello-bar .network li a {\n  display: inline-block;\n  height: 32px;\n  width: 90px;\n  padding: 0 10px;\n}\n\n.fox-header .hello-bar .network li a.active {\n  background-color: #000;\n}\n\n.fox-header .hello-bar .network li a.active > span {\n  opacity: 1;\n}\n\n.fox-header .hello-bar .network li a span {\n  opacity: 0.5;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.fox-header .hello-bar .network li a span.fn {\n  background-image: url("+t("./source/assets/fox-news.png")+");\n}\n\n.fox-header .hello-bar .network li a span.fb {\n  background-image: url("+t("./source/assets/fox-business.png")+");\n}\n\n.fox-header .hello-bar .network li a span.fn-go {\n  background-image: url("+t("./source/assets/fox-news-go.png")+");\n}\n\n.fox-header .hello-bar .network li a span.fnr {\n  background-image: url("+t("./source/assets/fox-news-radio.png")+");\n}\n\n.fox-header .hello-bar .network li a span.nat {\n  background-image: url("+t("./source/assets/fox-nation.png")+");\n}\n\n.fox-header .hello-bar .network li a span.fni {\n  background-image: url("+t("./source/assets/fox-news-insider.png")+');\n}\n\n.fox-header .masthead {\n  background: #183a52;\n  padding: 0 0 18px;\n  color: white;\n}\n\n.fox-header .masthead > div {\n  margin: 0 auto;\n  max-width: 972px;\n  padding-top: 18px;\n  vertical-align: baseline;\n}\n\n.fox-header .masthead .branding {\n  margin-bottom: 4px;\n}\n\n.fox-header .masthead .branding h1 {\n  float: left;\n  display: block;\n  margin-left: 8px;\n  margin-top: -9px;\n  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial,sans-serif;\n  font-weight: 300;\n  font-size: 46px;\n  line-height: 50px;\n  letter-spacing: -1px;\n}\n\n.fox-header .masthead .branding .logo {\n  float: left;\n  margin: 0;\n  height: 32px;\n  width: 192px;\n  font-size: 32px;\n  line-height: 30px;\n  display: block;\n  background-image: url('+t("./source/assets/logo.png")+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  text-indent: -9999em;\n}\n\n.fox-header .masthead .search {\n  float: right;\n  padding: 0;\n  margin: 0;\n  margin-top: -5px;\n}\n\n.fox-header .masthead .search div {\n  border-radius: 4px;\n  background: #fff;\n  position: relative;\n  top: auto;\n  left: auto;\n  overflow: hidden;\n  width: 300px;\n}\n\n.fox-header .masthead .search div input,\n.fox-header .masthead .search div button {\n  border: none;\n  outline: none;\n  font-size: 15px;\n  background: white;\n  color: black;\n}\n\n.fox-header .masthead .search div input {\n  height: 30px;\n  background: 0 0;\n  position: relative;\n  padding: 0 32px 0 12px;\n  z-index: 20;\n  width: 100%;\n}\n\n.fox-header .masthead .search div button {\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n  font-size: 0;\n  line-height: 0;\n  height: 30px;\n  width: 30px;\n  z-index: 4000;\n  background-image: url("+t("./source/assets/magnify.png")+');\n  background-size: 80%;\n  background-position: center;\n}\n\n.fox-header .masthead .nav {\n  overflow: visible;\n  padding: 0;\n  clear: both;\n  height: 30px;\n  margin-left: -6px;\n  padding-top: 6px;\n}\n\n.fox-header .masthead .nav ul li {\n  display: inline;\n}\n\n.fox-header .masthead .nav li a {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #FFF;\n  border-radius: 3px;\n  padding: 7px 9px;\n  margin: 0 2px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 900;\n  line-height: 12px;\n}\n\n.fox-header .masthead .nav li a:hover,\n.fox-header .masthead .nav li a.active {\n  background: #425e71;\n}\n\n.footer {\n  background: #183a52;\n  color: #fff;\n  padding: 46px 0 60px;\n}\n\n.footer h6 {\n  margin: 0 0 18px;\n  font-size: 24px;\n  line-height: 26px;\n  font-weight: 600;\n}\n\n.footer .footer-nav {\n  width: 922px;\n  margin: 0 auto;\n  display: flex;\n  padding-bottom: 32px;\n  border-bottom: 1px solid #fff;\n}\n\n.footer .site-sections {\n  min-width: 234px;\n}\n\n.footer ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n.footer li {\n  margin: 0 0 2px;\n  overflow: hidden;\n}\n\n.footer li a {\n  font-weight: 900;\n  font-size: 13px;\n  color: #fff;\n}\n\n.page {\n  padding: 24px 0;\n}\n\n.story {\n  margin: 0 auto;\n  width: 972px;\n  padding-top: 32px;\n}\n\n.story-header h2 {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .2em;\n  margin-bottom: 8px;\n}\n\n.story-header h1 {\n  font-size: 48px;\n  line-height: 60px;\n  margin-bottom: 14px;\n}\n\n.story-header-meta {\n  margin-right: 20px;\n  margin-bottom: 24px;\n  color: #999;\n  font-size: 12px;\n  line-height: 18px;\n  overflow: hidden;\n}\n\n.byline {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  line-height: 48px;\n  margin-bottom: 0;\n}\n\n.byline strong {\n  color: #183a52;\n  text-transform: capitalize;\n}\n\n.byline img {\n  height: 48px;\n  width: 48px;\n  margin-right: 20px;\n}\n\n.story-content {\n  clear: both;\n  float: left;\n  padding-top: 16px;\n  margin-right: 60px;\n  width: 612px;\n}\n\n.story-content img {\n  width: 100%;\n  height: auto;\n}\n\n.story-content p {\n  font-size: 18px;\n  line-height: 30px;\n  margin-top: 12px;\n  margin-bottom: 20px;\n}\n\n.story-content p a {\n  color: #183a52;\n  text-decoration: underline;\n}\n\n.more-content {\n  float: left;\n  width: 50%;\n}\n\n.more-content:first-of-type {\n  padding-right: 12px;\n}\n\n.more-content:last-of-type {\n  padding-left: 12px;\n}\n\n.more-content h4 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n\n.more-content li {\n  display: inline;\n  color: #183a52;\n}\n\n.more-content li h5 {\n  margin-bottom: 15px;\n}\n\n.trending-sidebar {\n  display: block;\n  float: right;\n  padding-top: 16px;\n  width: 300px;\n}\n\n.trending-sidebar h4 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n\n.trending-sidebar li {\n  color: #183a52;\n  counter-increment: trending-counter;\n  font-size: 12px;\n  line-height: 18px;\n  position: relative;\n  padding-left: 36px;\n  margin-bottom: 24px;\n}\n\n.trending-sidebar li:before {\n  border-radius: 50%;\n  content: counter(trending-counter);\n  display: block;\n  color: #fff;\n  background: #ccc;\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: center;\n  height: 24px;\n  width: 24px;\n}\n\n',""])},"./node_modules/css-loader/lib/css-base.js":function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),n.push(r))}},n}},"./node_modules/style-loader/addStyles.js":function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=h[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(l(o.parts[a],e))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(l(o.parts[a],e));h[o.id]={id:o.id,refs:1,parts:r}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],a=i[0],r=i[1],s=i[2],l=i[3],d={css:r,media:s,sourceMap:l};t[a]?t[a].parts.push(d):e.push(t[a]={id:a,parts:[d]})}return e}function i(n,e){var t=u(),o=m[m.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),m.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(n){n.parentNode.removeChild(n);var e=m.indexOf(n);e>=0&&m.splice(e,1)}function r(n){var e=document.createElement("style");return e.type="text/css",i(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",i(n,e),e}function l(n,e){var t,o,i;if(e.singleton){var l=b++;t=x||(x=r(e)),o=d.bind(null,t,l,!1),i=d.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),o=f.bind(null,t),i=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=r(e),o=p.bind(null,t),i=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function d(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=v(e,i);else{var a=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function p(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function f(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([t],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var h={},c=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}},g=c(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),u=c(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,b=0,m=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=g()),void 0===e.insertAt&&(e.insertAt="bottom");var i=o(n);return t(i,e),function(n){for(var a=[],r=0;r<i.length;r++){var s=i[r],l=h[s.id];l.refs--,a.push(l)}if(n){t(o(n),e)}for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete h[l.id]}}}};var v=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},"./source/assets/fox-business.png":function(n,e,t){n.exports=t.p+"d855924281e34256749503b6f560cd18.png"},"./source/assets/fox-nation.png":function(n,e,t){n.exports=t.p+"989a9f982cb7f1701c31d4a76608fe5a.png"},"./source/assets/fox-news-go.png":function(n,e,t){n.exports=t.p+"737886464a3eff7fd65c63927a2db321.png"},"./source/assets/fox-news-insider.png":function(n,e,t){n.exports=t.p+"93e3fe1fa4e4bbbe7f57c4b867a6b88a.png"},"./source/assets/fox-news-radio.png":function(n,e,t){n.exports=t.p+"27179cff6ada8eb18c133fa0ae062d94.png"},"./source/assets/fox-news.png":function(n,e,t){n.exports=t.p+"ba58ae66b9d24a027aad2a1f48699c4a.png"},"./source/assets/logo.png":function(n,e,t){n.exports=t.p+"1450f29e9bc53ae73b33b592556cd1c1.png"},"./source/assets/magnify.png":function(n,e,t){n.exports=t.p+"7da266495f00bf34b6c479b7e8c79ede.png"},"./source/styles/main.scss":function(n,e,t){var o=t("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/index.js?sourceMap!./source/styles/main.scss");"string"==typeof o&&(o=[[n.i,o,""]]);t("./node_modules/style-loader/addStyles.js")(o,{});o.locals&&(n.exports=o.locals)}});