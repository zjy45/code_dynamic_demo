// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"epB2":[function(require,module,exports) {
console.log('start');
// 高亮安全处理
hljs.addPlugin({
  'after:highlightElement': function afterHighlightElement(_ref) {
    var el = _ref.el;

    el.innerHTML = el.innerHTML.replaceAll(/^([\s]*)&lt;&lt;([^:\s]+?)&gt;&gt;([\s]*)$/mg, '$1<span class="lp-ref" href="#lp-$2">$2</span>$3');
  }
});
// hljs.highlightAll();
var style = document.querySelector('#style');
var html = document.querySelector('#html');
var string = '\n\u4F60\u597D\uFF0C\u6211\u53EB\u5C0F\u6731\n\u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n<code>\n#div1{\n  border: 1px solid red;\n  width: 200px;\n  height: 200px;\n} /* \u6211\u4EEC\u628A\u4EE3\u7801\u5757\u4E5F\u987A\u4FBF\u9AD8\u4EAE\u4E00\u4E0B\u5427 */\n</code>\n\u63A5\u4E0B\u6765\u6211\u628A div \u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n\u6CE8\u610F\u770B\u597D\u4E86\n\u9996\u5148\uFF0C\u628A div \u53D8\u6210\u4E00\u4E2A\u5706\n<code>\n#div1{\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border: none;\n}\n</code>\n\u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n\u4E00\u9ED1\u4E00\u767D\n<code>\n#div1{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n</code>\n\u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403\n<code>\n#div1::before{\n  width: 100px;\n  height: 100px;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #000;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n  width: 100px;\n  height: 100px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n</code>\n';
var htmlContent = "";
var styleContent = "";
var flagStyleContent = 0;
var dynamicClass = '';
var n = 0;

var step = function step() {
  console.log('step start');
  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999);
  setTimeout(function () {
    if (string.substring(n, n + 6) == "<code>") {
      flagStyleContent = 1;
      dynamicClass = 'dynamic-' + n;
      n += 7;
      htmlContent += '<pre class="hljs ' + dynamicClass + '"><code>';
      step();
    } else if (string.substring(n, n + 7) == "</code>") {
      flagStyleContent = 0;
      n += 7;
      htmlContent += '</code></pre>';
      html.innerHTML = htmlContent;
      dynamic = document.querySelector('.' + dynamicClass);
      hljs.highlightElement(dynamic);
      // highlight.js高亮是会改变html元素，需要保存改变
      htmlContent = html.innerHTML;
    }

    if (string[n] === '\n' && !flagStyleContent) {
      htmlContent += "<br>";
    } else {
      htmlContent += string[n];
    }

    if (flagStyleContent) {
      styleContent += string[n];
      style.innerHTML = styleContent;
    }

    // console.log(`styleContent: ${styleContent}`)
    // console.log(`htmlContent: ${htmlContent}`)
    html.innerHTML = htmlContent;
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.58cac5c5.map