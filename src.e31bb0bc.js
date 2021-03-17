// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\mobile\\icecream-products-mobile@1x.png":[["icecream-products-mobile@1x.b7713143.png","images/mobile/icecream-products-mobile@1x.png"],"images/mobile/icecream-products-mobile@1x.png"],"./..\\images\\mobile\\icecoffee-products-mobile@1x.png":[["icecoffee-products-mobile@1x.78d9cfb0.png","images/mobile/icecoffee-products-mobile@1x.png"],"images/mobile/icecoffee-products-mobile@1x.png"],"./..\\images\\mobile\\milkshake-products-mobile@1x.png":[["milkshake-products-mobile@1x.fb5e6a19.png","images/mobile/milkshake-products-mobile@1x.png"],"images/mobile/milkshake-products-mobile@1x.png"],"./..\\images\\dots.svg":[["dots.ec1fa6a0.svg","images/dots.svg"],"images/dots.svg"],"./..\\images\\mobile\\icecream-products-mobile@2x.png":[["icecream-products-mobile@2x.7c618b98.png","images/mobile/icecream-products-mobile@2x.png"],"images/mobile/icecream-products-mobile@2x.png"],"./..\\images\\mobile\\icecoffee-products-mobile@2x.png":[["icecoffee-products-mobile@2x.c5ba8650.png","images/mobile/icecoffee-products-mobile@2x.png"],"images/mobile/icecoffee-products-mobile@2x.png"],"./..\\images\\mobile\\milkshake-products-mobile@2x.png":[["milkshake-products-mobile@2x.a42390d6.png","images/mobile/milkshake-products-mobile@2x.png"],"images/mobile/milkshake-products-mobile@2x.png"],"./..\\images\\tablet\\icecream-products-tablet@1x.png":[["icecream-products-tablet@1x.8f9bdbe7.png","images/tablet/icecream-products-tablet@1x.png"],"images/tablet/icecream-products-tablet@1x.png"],"./..\\images\\tablet\\icecoffee-products-tablet@1x.png":[["icecoffee-products-tablet@1x.916ed59e.png","images/tablet/icecoffee-products-tablet@1x.png"],"images/tablet/icecoffee-products-tablet@1x.png"],"./..\\images\\tablet\\milkshake-products-tablet@1x.png":[["milkshake-products-tablet@1x.b7a0a5f2.png","images/tablet/milkshake-products-tablet@1x.png"],"images/tablet/milkshake-products-tablet@1x.png"],"./..\\images\\tablet\\icecream-products-tablet@2x.png":[["icecream-products-tablet@2x.c1eee120.png","images/tablet/icecream-products-tablet@2x.png"],"images/tablet/icecream-products-tablet@2x.png"],"./..\\images\\tablet\\icecoffee-products-tablet@2x.png":[["icecoffee-products-tablet@2x.9caef889.png","images/tablet/icecoffee-products-tablet@2x.png"],"images/tablet/icecoffee-products-tablet@2x.png"],"./..\\images\\tablet\\milkshake-products-tablet@2x.png":[["milkshake-products-tablet@2x.3e9a4399.png","images/tablet/milkshake-products-tablet@2x.png"],"images/tablet/milkshake-products-tablet@2x.png"],"./..\\images\\desktop\\icecream-products-desktop@1x.png":[["icecream-products-desktop@1x.c2e5f188.png","images/desktop/icecream-products-desktop@1x.png"],"images/desktop/icecream-products-desktop@1x.png"],"./..\\images\\desktop\\icecoffee-products-desktop@1x.png":[["icecoffee-products-desktop@1x.d54a8078.png","images/desktop/icecoffee-products-desktop@1x.png"],"images/desktop/icecoffee-products-desktop@1x.png"],"./..\\images\\desktop\\milkshake-products-desktop@1x.png":[["milkshake-products-desktop@1x.37fae442.png","images/desktop/milkshake-products-desktop@1x.png"],"images/desktop/milkshake-products-desktop@1x.png"],"./..\\images\\desktop\\icecream-products-desktop@2x.png":[["icecream-products-desktop@2x.c747febc.png","images/desktop/icecream-products-desktop@2x.png"],"images/desktop/icecream-products-desktop@2x.png"],"./..\\images\\desktop\\icecoffee-products-desktop@2x.png":[["icecoffee-products-desktop@2x.e3f8ee03.png","images/desktop/icecoffee-products-desktop@2x.png"],"images/desktop/icecoffee-products-desktop@2x.png"],"./..\\images\\desktop\\milkshake-products-desktop@2x.png":[["milkshake-products-desktop@2x.f3a842ed.png","images/desktop/milkshake-products-desktop@2x.png"],"images/desktop/milkshake-products-desktop@2x.png"],"./..\\images\\mobile\\milk-about@1x.png":[["milk-about@1x.114a1eef.png","images/mobile/milk-about@1x.png"],"images/mobile/milk-about@1x.png"],"./..\\images\\mobile\\milk-about@2x.png":[["milk-about@2x.34a3c80f.png","images/mobile/milk-about@2x.png"],"images/mobile/milk-about@2x.png"],"./..\\images\\desktop\\milk-about-desktop@1x.png":[["milk-about-desktop@1x.9a888175.png","images/desktop/milk-about-desktop@1x.png"],"images/desktop/milk-about-desktop@1x.png"],"./..\\images\\desktop\\milk-about-desktop@2x.png":[["milk-about-desktop@2x.81b6cc3d.png","images/desktop/milk-about-desktop@2x.png"],"images/desktop/milk-about-desktop@2x.png"],"./..\\images\\icon1-advantages@1x.png":[["icon1-advantages@1x.ff09fac7.png","images/icon1-advantages@1x.png"],"images/icon1-advantages@1x.png"],"./..\\images\\icon2-advantages@1x.png":[["icon2-advantages@1x.25a2bba5.png","images/icon2-advantages@1x.png"],"images/icon2-advantages@1x.png"],"./..\\images\\icon3-advantages@1x.png":[["icon3-advantages@1x.2622d13d.png","images/icon3-advantages@1x.png"],"images/icon3-advantages@1x.png"],"./..\\images\\icon1-advantages@2x.png":[["icon1-advantages@2x.bce325b2.png","images/icon1-advantages@2x.png"],"images/icon1-advantages@2x.png"],"./..\\images\\icon2-advantages@2x.png":[["icon2-advantages@2x.cadae6b8.png","images/icon2-advantages@2x.png"],"images/icon2-advantages@2x.png"],"./..\\images\\icon3-advantages@2x.png":[["icon3-advantages@2x.4f5d56ab.png","images/icon3-advantages@2x.png"],"images/icon3-advantages@2x.png"],"./..\\images\\gallery\\img1.png":[["img1.c72b045a.png","images/gallery/img1.png"],"images/gallery/img1.png"],"./..\\images\\gallery\\img2.png":[["img2.368e34a5.png","images/gallery/img2.png"],"images/gallery/img2.png"],"./..\\images\\gallery\\img3.png":[["img3.1c38fd85.png","images/gallery/img3.png"],"images/gallery/img3.png"],"./..\\images\\gallery\\img4.png":[["img4.7ae41782.png","images/gallery/img4.png"],"images/gallery/img4.png"],"./..\\images\\gallery\\img5.png":[["img5.d4ef4e51.png","images/gallery/img5.png"],"images/gallery/img5.png"],"./..\\images\\gallery\\img6.png":[["img6.43c1eaaa.png","images/gallery/img6.png"],"images/gallery/img6.png"],"./..\\images\\gallery\\img7.png":[["img7.5721ada2.png","images/gallery/img7.png"],"images/gallery/img7.png"],"./..\\images\\gallery\\img8.png":[["img8.e822b45e.png","images/gallery/img8.png"],"images/gallery/img8.png"],"./..\\images\\gallery\\img9.png":[["img9.50b79d75.png","images/gallery/img9.png"],"images/gallery/img9.png"],"./..\\images\\gallery\\img10.png":[["img10.50a49aa8.png","images/gallery/img10.png"],"images/gallery/img10.png"],"./..\\images\\quotes.svg":[["quotes.4d7be276.svg","images/quotes.svg"],"images/quotes.svg"],"./..\\images\\group.svg":[["group.10088665.svg","images/group.svg"],"images/group.svg"],"./..\\images\\home.svg":[["home.941c208c.svg","images/home.svg"],"images/home.svg"],"./..\\images\\contact-bg@1x.png":[["contact-bg@1x.1d971efe.png","images/contact-bg@1x.png"],"images/contact-bg@1x.png"],"./..\\images\\contact-bg@2x.png":[["contact-bg@2x.2ed1eb77.png","images/contact-bg@2x.png"],"images/contact-bg@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59602" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map