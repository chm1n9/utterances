parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({43:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(){var e=this;this.element=document.createElement("form"),this.element.innerHTML='\n      <h3>Repository</h3>\n      <p>\n        Choose the repository utterances will connect to.\n      </p>\n      <ol>\n        <li>Make sure the repo is public, otherwise your readers will not be able to view the issues/comments.</li>\n        <li>Make sure the <a href="https://github.com/apps/utterances">utterances app</a>\n          is installed on the repo, otherwise users will not be able to post comments.\n        </li>\n      </ol>\n      <fieldset>\n        <div>\n          <label for="repo">repo:</label><br/>\n          <input id="repo" class="form-control" type="text" placeholder="owner/repo">\n          <p class="note">\n            A <strong>public</strong> GitHub repository. This is where the blog\n            post issues and issue-comments will be posted.\n          </p>\n        </div>\n      </fieldset>\n\n      <h3>Blog Post<->Issue Mapping</h3>\n      <p>Choose how Utterances will map blog posts to GitHub issues.</p>\n      <fieldset>\n        <div class="form-checkbox">\n          <label>\n            <input type="radio" value="pathname" name="mapping" checked="checked">\n            Issue title contains page pathname\n            <p class="note">\n              Utterances will search for an issue whose title contains the blog post\'s pathname\n              URL component. If a matching issue is not found, Utterances will automatically\n              create one the first time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class="form-checkbox">\n          <label>\n            <input type="radio" value="url" name="mapping">\n            Issue title contains page URL\n            <p class="note">\n              Utterances will search for an issue whose title contains the blog post\'s URL.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class="form-checkbox">\n          <label>\n            <input type="radio" value="title" name="mapping">\n            Issue title contains page title\n            <p class="note">\n              Utterances will search for an issue whose title contains the blog post\'s title.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class="form-checkbox">\n          <label>\n            <input type="radio" value="issue-number" name="mapping">\n            Specific issue number\n            <p class="note">\n              You configure Utterances to load a specific issue by number. Issues are not automatically\n              created.\n            </p>\n          </label>\n        </div>\n        <div class="form-checkbox">\n          <label>\n            <input type="radio" value="specific-term" name="mapping">\n            Issue title contains specific term\n            <p class="note">\n              You configure Utterances to search for an issue whose title contains a specific term of your choosing.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post. The issue\'s title will be the term you chose.\n            </p>\n          </label>\n        </div>\n      </fieldset>\n\n      <h3>Enable Utterances</h3>\n\n      <p>Add the following script tag to your blog\'s template. Position it where you want the\n      comments to appear. Customize the layout using the <code>.utterances</code> and\n      <code>.utterances-frame</code> selectors.\n      </p>\n      <div class="config-field" id="script" class="highlight highlight-text-html-basic"></div>\n      <button id="copy-button" type="button" class="btn btn-blue code-action">Copy</button>\n      <br/>\n      <br/>',this.element.addEventListener("submit",function(e){return e.preventDefault()}),this.element.action="javascript:",this.script=this.element.querySelector("#script"),this.repo=this.element.querySelector("#repo"),this.element.querySelector("#copy-button").addEventListener("click",function(){return e.copyTextToClipboard(e.script.textContent)}),this.element.addEventListener("change",function(){return e.outputConfig()}),this.element.addEventListener("input",function(){return e.outputConfig()}),this.outputConfig()}return e.prototype.outputConfig=function(){var e,t=this.element.querySelector('input[name="mapping"]:checked');e="issue-number"===t.value?this.makeConfigScriptAttribute("issue-number","[ENTER ISSUE NUMBER HERE]"):"specific-term"===t.value?this.makeConfigScriptAttribute("issue-term","[ENTER TERM HERE]"):this.makeConfigScriptAttribute("issue-term",t.value),this.script.innerHTML=this.makeConfigScript(this.makeConfigScriptAttribute("repo",""===this.repo.value?"[ENTER REPO HERE]":this.repo.value)+"\n"+e)},e.prototype.makeConfigScriptAttribute=function(e,t){return'<span class="pl-s1">        <span class="pl-e">'+e+'</span>=<span class="pl-s"><span class="pl-pds">"</span>'+t+'<span class="pl-pds">"</span></span></span>'},e.prototype.makeConfigScript=function(e){return'<pre><span class="pl-s1">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://utteranc.es/client.js<span class="pl-pds">"</span></span></span>\n'+e+'\n<span class="pl-s1">        <span class="pl-e">async</span>&gt;</span>\n<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre>'},e.prototype.copyTextToClipboard=function(e){var t=document.createElement("textarea");t.style.cssText="position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(t)},e}();exports.ConfigurationComponent=e;
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./configuration-component");document.querySelector("h2#configuration").insertAdjacentElement("afterend",(new e.ConfigurationComponent).element);
},{"./configuration-component":43}]},{},[15])
//# sourceMappingURL=/src.75a0584d.map