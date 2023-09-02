(function(){var t={6845:function(t,e,n){"use strict";n.d(e,{$Z:function(){return r},zH:function(){return o}});const o={rotate:0,opacity:1},r={animations:[],events:{},groupStyle:{},isLock:!1,collapseName:"style",linkage:{duration:0,data:[{id:"",label:"",event:"",style:[{key:"",value:""}]}]}},i=[{component:"VText",label:"文字",propValue:"双击编辑文字",icon:"wenben",request:{method:"GET",data:[],url:"",series:!1,time:1e3,paramType:"",requestCount:0},style:{width:200,height:28,fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"",color:""}},{component:"VButton",label:"按钮",propValue:"按钮",icon:"anniu",style:{width:100,height:34,borderWidth:1,borderColor:"",borderRadius:"",fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}},{component:"Picture",label:"图片",icon:"charutupian",propValue:{url:"https://gitee.com/qkongtao/visual-drag-demo/raw/master/src/assets/header.png",flip:{horizontal:!1,vertical:!1}},style:{width:520,height:520,borderRadius:""}},{component:"Video",label:"视频",icon:"shipin",propValue:{url:"https://qiniu.qkongtao.cn/2022/10/20221016134256839.mp4?_=1",flip:{horizontal:!1,vertical:!1}},style:{width:400,height:300}},{component:"Music",label:"音频",icon:"yinle",propValue:{url:"https://qiniu.qkongtao.cn/2022/07/20220706014714102.mp3",flip:{horizontal:!1,vertical:!1}},style:{width:290,height:50}},{component:"Browser",label:"浏览器",icon:"hulianwang",propValue:{url:"https://mytab.qkongtao.cn/",flip:{horizontal:!1,vertical:!1}},style:{width:325,height:560}},{component:"VTable",label:"表格",icon:"jurassic_table",propValue:{data:[["表头1","表头2","表头3"],["内容1","内容2","内容3"]],stripe:!0,thBold:!0},request:{method:"GET",data:[],url:"",series:!1,time:1e3,paramType:"",requestCount:0},style:{width:600,height:200,fontSize:"",fontWeight:400,textAlign:"center",color:"",backgroundColor:"rgba(255, 255, 255, 1)"}},{component:"RectShape",label:"矩形",propValue:"&nbsp;",icon:"juxing",style:{width:200,height:200,fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",borderRadius:"",verticalAlign:"middle"}},{component:"LineShape",label:"直线",propValue:"",icon:"zhixian",style:{width:200,height:2,backgroundColor:"#000"}},{component:"CircleShape",label:"圆形",propValue:"&nbsp;",icon:"24gl-circle",style:{width:200,height:200,fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",borderRadius:"",verticalAlign:"middle"}},{component:"SVGStar",label:"星形",icon:"kongwujiaoxing",propValue:"",style:{width:80,height:80,fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",backgroundColor:"rgba(255, 255, 255, 1)"}},{component:"SVGTriangle",label:"三角形",icon:"xingzhuang-sanjiaoxing",propValue:"",style:{width:80,height:80,fontSize:"",fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",backgroundColor:"rgba(255, 255, 255, 1)"}}];for(let a=0,u=i.length;a<u;a++){const t=i[a];t.style={...o,...t.style},i[a]={...r,...t}}e["ZP"]=i},3213:function(t,e,n){"use strict";var o=n(144),r=n(4720),i=n.n(r),a=function(){var t=this,e=t._self._c;return e("router-view")},u=[],c=n(3736),l={},s=(0,c.Z)(l,a,u,!1,null,null,null),p=s.exports,d=n(8867),h=n(1120);const f=["CircleShape","Picture","VText","VButton","Group","RectShape","LineShape","VTable","Video","Music","Browser"];f.forEach((t=>{o["default"].component(t,(e=>n.e(617).then(function(){var o=[n(5617)(`./${t}/Component`)];e.apply(null,o)}.bind(this))["catch"](n.oe))),o["default"].component(t+"Attr",(e=>Promise.all([n.e(598),n.e(403)]).then(function(){var o=[n(6553)(`./${t}/Attr`)];e.apply(null,o)}.bind(this))["catch"](n.oe)))}));const m=["SVGStar","SVGTriangle"];m.forEach((t=>{o["default"].component(t,(e=>n.e(371).then(function(){var o=[n(3371)(`./${t}/Component`)];e.apply(null,o)}.bind(this))["catch"](n.oe))),o["default"].component(t+"Attr",(e=>Promise.all([n.e(598),n.e(944)]).then(function(){var o=[n(7226)(`./${t}/Attr`)];e.apply(null,o)}.bind(this))["catch"](n.oe)))})),o["default"].use(i(),{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:h.Z,store:d.Z,render:t=>t(p)})},1120:function(t,e,n){"use strict";var o=n(144),r=n(8345);o["default"].use(r.Z);const i=[{path:"/",component:t=>n.e(147).then(function(){var e=[n(3147)];t.apply(null,e)}.bind(this))["catch"](n.oe),meta:{title:"制作模板"}},{path:"/preview",component:t=>n.e(440).then(function(){var e=[n(7440)];t.apply(null,e)}.bind(this))["catch"](n.oe),meta:{title:"预览"}}];e["Z"]=new r.Z({mode:"hash",base:"",routes:i})},8867:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var o=n(144),r=n(629),i={mutations:{addAnimation({curComponent:t},e){t.animations.push(e)},removeAnimation({curComponent:t},e){t.animations.splice(e,1)},alterAnimation({curComponent:t},{index:e,data:n={}}){if("number"===typeof e){const o=t.animations[e];t.animations[e]={...o,...n}}}}},a=n(1840),u=n(4003),c=n(2648),l=n(1457);function s(t,e,n){const o=(0,c.$)(`#component${t.id}`).getBoundingClientRect(),r={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.rotate=(0,l.KV)(t.style.rotate+n.rotate),t.style.width=parseFloat(t.groupStyle.width)/100*n.width,t.style.height=parseFloat(t.groupStyle.height)/100*n.height,t.style.left=r.x-t.style.width/2,t.style.top=r.y-t.style.height/2,t.groupStyle={}}var p=n(6845),d=n(9748),h={state:{areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor(t){t.editor=(0,c.$)("#editor")},setAreaData(t,e){t.areaData=e},compose({componentData:t,areaData:e,editor:n}){const o=[];e.components.forEach((t=>{if("Group"!=t.component)o.push(t);else{const e={...t.style},r=t.propValue,i=n.getBoundingClientRect();r.forEach((t=>{s(t,i,e)})),o.push(...t.propValue)}}));const r={id:(0,a.Z)(),component:"Group",label:"组合",icon:"zuhe",...p.$Z,style:{...p.zH,...e.style},propValue:o};(0,d.UW)(r),k.commit("addComponent",{component:r}),u.Z.$emit("hideArea"),k.commit("batchDeleteComponent",e.components),k.commit("setCurComponent",{component:t[t.length-1],index:t.length-1}),e.components=[]},batchDeleteComponent({componentData:t},e){e.forEach((e=>{for(let n=0,o=t.length;n<o;n++)if(e.id==t[n].id){t.splice(n,1);break}}))},decompose({curComponent:t,editor:e}){const n={...t.style},o=t.propValue,r=e.getBoundingClientRect();k.commit("deleteComponent"),o.forEach((t=>{s(t,r,n),k.commit("addComponent",{component:t})}))}}},f={state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu(t,{top:e,left:n}){t.menuShow=!0,t.menuTop=e,t.menuLeft=n},hideContextMenu(t){t.menuShow=!1}}},m=n(9330),g={state:{copyData:null,isCut:!1},mutations:{copy(t){t.curComponent?(y(t),b(t),t.isCut=!1):(0,m.Z)("请选择组件")},paste(t,e){if(!t.copyData)return void(0,m.Z)("请选择组件");const n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),n.id=(0,a.Z)(),k.commit("addComponent",{component:(0,c.p$)(n)}),t.isCut&&(t.copyData=null)},cut(t){t.curComponent?(y(t),b(t),k.commit("deleteComponent"),t.isCut=!0):(0,m.Z)("请选择组件")}}};function y(t){if(t.isCut&&t.copyData){const e=(0,c.p$)(t.copyData.data),n=t.copyData.index;k.commit("addComponent",{component:e,index:n}),t.curComponentIndex>=n&&t.curComponentIndex++}}function b(t){t.copyData={data:(0,c.p$)(t.curComponent),index:t.curComponentIndex}}var C={mutations:{addEvent({curComponent:t},{event:e,param:n}){t.events[e]=n},removeEvent({curComponent:t},e){o["default"]["delete"](t.events,e)}}},v={mutations:{upComponent(t){const{componentData:e,curComponentIndex:n}=t;n<e.length-1?((0,c.LF)(e,n,n+1),t.curComponentIndex=n+1):(0,m.Z)("已经到顶了")},downComponent(t){const{componentData:e,curComponentIndex:n}=t;n>0?((0,c.LF)(e,n,n-1),t.curComponentIndex=n-1):(0,m.Z)("已经到底了")},topComponent(t){const{componentData:e,curComponentIndex:n,curComponent:o}=t;n<e.length-1?(e.splice(n,1),e.push(o),t.curComponentIndex=e.length-1):(0,m.Z)("已经到顶了")},bottomComponent(t){const{componentData:e,curComponentIndex:n,curComponent:o}=t;n>0?(e.splice(n,1),e.unshift(o),t.curComponentIndex=0):(0,m.Z)("已经到底了")}}},x=n(3703),S={mutations:{lock({curComponent:t}){t.isLock=!0},unlock({curComponent:t}){t.isLock=!1}}};o["default"].use(r.ZP);const w={state:{...i.state,...h.state,...f.state,...g.state,...C.state,...v.state,...x.Z.state,...S.state,editMode:"edit",canvasStyleData:{width:1200,height:720,scale:100,color:"#000",opacity:1,background:"#fff",fontSize:14},isInEdiotr:!1,componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1},mutations:{...i.mutations,...h.mutations,...f.mutations,...g.mutations,...C.mutations,...v.mutations,...x.Z.mutations,...S.mutations,setClickComponentStatus(t,e){t.isClickComponent=e},setEditMode(t,e){t.editMode=e},setInEditorStatus(t,e){t.isInEdiotr=e},setCanvasStyle(t,e){t.canvasStyleData=e},setCurComponent(t,{component:e,index:n}){t.curComponent=e,t.curComponentIndex=n},setShapeStyle({curComponent:t},{top:e,left:n,width:o,height:r,rotate:i}){e&&(t.style.top=Math.round(e)),n&&(t.style.left=Math.round(n)),o&&(t.style.width=Math.round(o)),r&&(t.style.height=Math.round(r)),i&&(t.style.rotate=Math.round(i))},setShapeSingleStyle({curComponent:t},{key:e,value:n}){t.style[e]=n},setComponentData(t,e=[]){o["default"].set(t,"componentData",e)},addComponent(t,{component:e,index:n}){void 0!==n?t.componentData.splice(n,0,e):t.componentData.push(e)},deleteComponent(t,e){void 0===e&&(e=t.curComponentIndex),e==t.curComponentIndex&&(t.curComponentIndex=null,t.curComponent=null),/\d/.test(e)&&t.componentData.splice(e,1)}}};var k=new r.ZP.Store(w)},3703:function(t,e,n){"use strict";n.d(e,{o:function(){return u}});var o=n(8867),r=n(2648);let i=[];function a(){return i}function u(t=[]){i=t}e["Z"]={state:{snapshotData:[],snapshotIndex:-1},mutations:{undo(t){if(t.snapshotIndex>=0){t.snapshotIndex--;const e=(0,r.p$)(t.snapshotData[t.snapshotIndex])||a();if(t.curComponent){const n=!e.find((e=>t.curComponent.id===e.id));n&&o.Z.commit("setCurComponent",{component:null,index:null})}o.Z.commit("setComponentData",e)}},redo(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,o.Z.commit("setComponentData",(0,r.p$)(t.snapshotData[t.snapshotIndex])))},recordSnapshot(t){t.snapshotData[++t.snapshotIndex]=(0,r.p$)(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}}},4003:function(t,e,n){"use strict";var o=n(144);e["Z"]=new o["default"]},1840:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o=n(9879);function r(){return(0,o.x0)()}},9748:function(t,e,n){"use strict";n.d(e,{$i:function(){return s},B$:function(){return r},C2:function(){return u},UW:function(){return p},WF:function(){return a},fg:function(){return c}});n(6699);var o=n(1457);function r(t){const e={};return["width","height","top","left","rotate"].forEach((n=>{"rotate"!=n?e[n]=t[n]+"px":e.transform="rotate("+t[n]+"deg)"})),e}const i=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"];function a(t,e=[]){const n={};return["opacity","width","height","top","left","rotate","fontSize","fontWeight","lineHeight","letterSpacing","textAlign","color"].forEach((o=>{e.includes(o)||("rotate"!=o?""!==t[o]&&(n[o]=t[o],i.includes(o)&&(n[o]+="px")):n.transform=o+"("+t[o]+"deg)")})),n}function u(t,e=[]){const n={};return Object.keys(t).forEach((o=>{e.includes(o)||("rotate"!=o?""!==t[o]&&(n[o]=t[o],i.includes(o)&&(n[o]+="px")):n.transform=o+"("+t[o]+"deg)")})),n}function c(t){if(t={...t},0!=t.rotate){const e=t.width*(0,o.mC)(t.rotate)+t.height*(0,o.O$)(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;const r=t.height*(0,o.mC)(t.rotate)+t.width*(0,o.O$)(t.rotate),i=(r-t.height)/2;t.top-=i,t.bottom=t.top+r,t.width=e,t.height=r}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}const l=["width","height","scale"];function s(t){const e={};return Object.keys(t).filter((t=>!l.includes(t))).forEach((n=>{e[n]=t[n],"fontSize"===n&&(e[n]+="px")})),e}function p(t){const e=t.style;t.propValue.forEach((t=>{if(!Object.keys(t.groupStyle).length){const n={...t.style};t.component.startsWith("SVG")?t.groupStyle=a(n):t.groupStyle=u(n),t.groupStyle.left=(0,o.yI)((n.left-e.left)/e.width),t.groupStyle.top=(0,o.yI)((n.top-e.top)/e.height),t.groupStyle.width=(0,o.yI)(n.width/e.width),t.groupStyle.height=(0,o.yI)(n.height/e.height)}}))}},9330:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o=n(4720);function r(t="",e="error",n=1500){(0,o.Message)({message:t,type:e,duration:n})}},1457:function(t,e,n){"use strict";n.d(e,{EY:function(){return p},Ej:function(){return a},KV:function(){return s},Lb:function(){return u},O$:function(){return c},mC:function(){return l},yI:function(){return d}});var o=n(8867),r=n(715);function i(t){return t*Math.PI/180}function a(t,e,n){return{x:(t.x-e.x)*Math.cos(i(n))-(t.y-e.y)*Math.sin(i(n))+e.x,y:(t.x-e.x)*Math.sin(i(n))+(t.y-e.y)*Math.cos(i(n))+e.y}}function u(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function c(t){return Math.abs(Math.sin(i(t)))}function l(t){return Math.abs(Math.cos(i(t)))}function s(t){return(t+360)%360}function p(t){return(0,r.JpY)(t,(0,r.csF)(parseInt(o.Z.state.canvasStyleData.scale),100))}function d(t){return 100*t+"%"}},2648:function(t,e,n){"use strict";n.d(e,{$:function(){return a},LF:function(){return i},p$:function(){return r},rc:function(){return c}});n(6699);var o=n(144);function r(t){if("object"==typeof t){const e=Array.isArray(t)?[]:{};for(const n in t)"object"==typeof t[n]?e[n]=r(t[n]):e[n]=t[n];return e}return t}function i(t,e,n){const r=t[e];o["default"].set(t,e,t[n]),o["default"].set(t,n,r)}function a(t){return document.querySelector(t)}const u=["VText","RectShape","CircleShape"];function c(t){return!u.includes(t)&&!t.startsWith("SVG")}},5042:function(){}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{147:"e15c134d",371:"3514f974",403:"698e82f8",440:"0afb538c",598:"010bce8a",617:"05d9d99a",944:"6eb93d01"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{147:"ab1c0f92",371:"68b500de",403:"adfb06ab",440:"e3b3f82d",617:"05d39b0d",944:"13e55089"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="visual-drag-demo:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==e+i){u=p;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(h);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p=""}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(e(a,u))return r();t(o,u,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={147:1,371:1,403:1,440:1,617:1,944:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(e&&e(o);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkvisual_drag_demo"]=self["webpackChunkvisual_drag_demo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3213)}));o=n.O(o)})();
//# sourceMappingURL=app.ee3d20dc.js.map