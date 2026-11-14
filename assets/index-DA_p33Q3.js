const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-WQA5EYs2.js","./main-DepVeRe7.css"])))=>i.map(i=>d[i]);
var Zn=Object.defineProperty;var Jn=(n,e,t)=>e in n?Zn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var T=(n,e,t)=>Jn(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Gn="modulepreload",Un=function(n,e){return new URL(n,e).href},Bt={},Hn=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let o=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=o(t.map(m=>{if(m=Un(m,s),m in Bt)return;Bt[m]=!0;const v=m.endsWith(".css"),h=v?'[rel="stylesheet"]':"";if(!!s)for(let L=c.length-1;L>=0;L--){const O=c[L];if(O.href===m&&(!v||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${h}`))return;const C=document.createElement("link");if(C.rel=v?"stylesheet":Gn,v||(C.as="script"),C.crossOrigin="",C.href=m,d&&C.setAttribute("nonce",d),document.head.appendChild(C),v)return new Promise((L,O)=>{C.addEventListener("load",L),C.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};var tt={exports:{}},A={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt;function Yn(){if(Vt)return A;Vt=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),r=Symbol.for("react.consumer"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),h=Symbol.for("react.view_transition"),g=Symbol.iterator;function C(u){return u===null||typeof u!="object"?null:(u=g&&u[g]||u["@@iterator"],typeof u=="function"?u:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function z(u,p,S){this.props=u,this.context=p,this.refs=B,this.updater=S||L}z.prototype.isReactComponent={},z.prototype.setState=function(u,p){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,p,"setState")},z.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function J(){}J.prototype=z.prototype;function V(u,p,S){this.props=u,this.context=p,this.refs=B,this.updater=S||L}var H=V.prototype=new J;H.constructor=V,O(H,z.prototype),H.isPureReactComponent=!0;var W=Array.isArray;function Ke(){}var $={H:null,A:null,T:null,S:null},Lt=Object.prototype.hasOwnProperty;function qe(u,p,S){var _=S.ref;return{$$typeof:n,type:u,key:p,ref:_!==void 0?_:null,props:S}}function Bn(u,p){return qe(u.type,p,u.props)}function Qe(u){return typeof u=="object"&&u!==null&&u.$$typeof===n}function Vn(u){var p={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(S){return p[S]})}var Ft=/\/+/g;function et(u,p){return typeof u=="object"&&u!==null&&u.key!=null?Vn(""+u.key):p.toString(36)}function Wn(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Ke,Ke):(u.status="pending",u.then(function(p){u.status==="pending"&&(u.status="fulfilled",u.value=p)},function(p){u.status==="pending"&&(u.status="rejected",u.reason=p)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function be(u,p,S,_,P){var D=typeof u;(D==="undefined"||D==="boolean")&&(u=null);var j=!1;if(u===null)j=!0;else switch(D){case"bigint":case"string":case"number":j=!0;break;case"object":switch(u.$$typeof){case n:case e:j=!0;break;case m:return j=u._init,be(j(u._payload),p,S,_,P)}}if(j)return P=P(u),j=_===""?"."+et(u,0):_,W(P)?(S="",j!=null&&(S=j.replace(Ft,"$&/")+"/"),be(P,p,S,"",function(jn){return jn})):P!=null&&(Qe(P)&&(P=Bn(P,S+(P.key==null||u&&u.key===P.key?"":(""+P.key).replace(Ft,"$&/")+"/")+j)),p.push(P)),1;j=0;var ee=_===""?".":_+":";if(W(u))for(var Y=0;Y<u.length;Y++)_=u[Y],D=ee+et(_,Y),j+=be(_,p,S,D,P);else if(Y=C(u),typeof Y=="function")for(u=Y.call(u),Y=0;!(_=u.next()).done;)_=_.value,D=ee+et(_,Y++),j+=be(_,p,S,D,P);else if(D==="object"){if(typeof u.then=="function")return be(Wn(u),p,S,_,P);throw p=String(u),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.")}return j}function Re(u,p,S){if(u==null)return u;var _=[],P=0;return be(u,_,"","",function(D){return p.call(S,D,P++)}),_}function $n(u){if(u._status===-1){var p=u._result,S=p();S.then(function(_){(u._status===0||u._status===-1)&&(u._status=1,u._result=_,S.status===void 0&&(S.status="fulfilled",S.value=_))},function(_){(u._status===0||u._status===-1)&&(u._status=2,u._result=_,S.status===void 0&&(S.status="rejected",S.reason=_))}),u._status===-1&&(u._status=0,u._result=S)}if(u._status===1)return u._result.default;throw u._result}var Mt=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var p=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(p))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)};function Pt(u){var p=$.T,S={};S.types=p!==null?p.types:null,$.T=S;try{var _=u(),P=$.S;P!==null&&P(S,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Ke,Mt)}catch(D){Mt(D)}finally{p!==null&&S.types!==null&&(p.types=S.types),$.T=p}}function Dt(u){var p=$.T;if(p!==null){var S=p.types;S===null?p.types=[u]:S.indexOf(u)===-1&&S.push(u)}else Pt(Dt.bind(null,u))}var zn={map:Re,forEach:function(u,p,S){Re(u,function(){p.apply(this,arguments)},S)},count:function(u){var p=0;return Re(u,function(){p++}),p},toArray:function(u){return Re(u,function(p){return p})||[]},only:function(u){if(!Qe(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return A.Activity=v,A.Children=zn,A.Component=z,A.Fragment=t,A.Profiler=a,A.PureComponent=V,A.StrictMode=s,A.Suspense=l,A.ViewTransition=h,A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,A.__COMPILER_RUNTIME={__proto__:null,c:function(u){return $.H.useMemoCache(u)}},A.addTransitionType=Dt,A.cache=function(u){return function(){return u.apply(null,arguments)}},A.cacheSignal=function(){return null},A.cloneElement=function(u,p,S){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var _=O({},u.props),P=u.key;if(p!=null)for(D in p.key!==void 0&&(P=""+p.key),p)!Lt.call(p,D)||D==="key"||D==="__self"||D==="__source"||D==="ref"&&p.ref===void 0||(_[D]=p[D]);var D=arguments.length-2;if(D===1)_.children=S;else if(1<D){for(var j=Array(D),ee=0;ee<D;ee++)j[ee]=arguments[ee+2];_.children=j}return qe(u.type,P,_)},A.createContext=function(u){return u={$$typeof:o,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:r,_context:u},u},A.createElement=function(u,p,S){var _,P={},D=null;if(p!=null)for(_ in p.key!==void 0&&(D=""+p.key),p)Lt.call(p,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(P[_]=p[_]);var j=arguments.length-2;if(j===1)P.children=S;else if(1<j){for(var ee=Array(j),Y=0;Y<j;Y++)ee[Y]=arguments[Y+2];P.children=ee}if(u&&u.defaultProps)for(_ in j=u.defaultProps,j)P[_]===void 0&&(P[_]=j[_]);return qe(u,D,P)},A.createRef=function(){return{current:null}},A.forwardRef=function(u){return{$$typeof:c,render:u}},A.isValidElement=Qe,A.lazy=function(u){return{$$typeof:m,_payload:{_status:-1,_result:u},_init:$n}},A.memo=function(u,p){return{$$typeof:d,type:u,compare:p===void 0?null:p}},A.startTransition=Pt,A.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},A.use=function(u){return $.H.use(u)},A.useActionState=function(u,p,S){return $.H.useActionState(u,p,S)},A.useCallback=function(u,p){return $.H.useCallback(u,p)},A.useContext=function(u){return $.H.useContext(u)},A.useDebugValue=function(){},A.useDeferredValue=function(u,p){return $.H.useDeferredValue(u,p)},A.useEffect=function(u,p){return $.H.useEffect(u,p)},A.useEffectEvent=function(u){return $.H.useEffectEvent(u)},A.useId=function(){return $.H.useId()},A.useImperativeHandle=function(u,p,S){return $.H.useImperativeHandle(u,p,S)},A.useInsertionEffect=function(u,p){return $.H.useInsertionEffect(u,p)},A.useLayoutEffect=function(u,p){return $.H.useLayoutEffect(u,p)},A.useMemo=function(u,p){return $.H.useMemo(u,p)},A.useOptimistic=function(u,p){return $.H.useOptimistic(u,p)},A.useReducer=function(u,p,S){return $.H.useReducer(u,p,S)},A.useRef=function(u){return $.H.useRef(u)},A.useState=function(u){return $.H.useState(u)},A.useSyncExternalStore=function(u,p,S){return $.H.useSyncExternalStore(u,p,S)},A.useTransition=function(){return $.H.useTransition()},A.version="19.3.1",A}var Wt;function Xn(){return Wt||(Wt=1,tt.exports=Yn()),tt.exports}var Kn=Xn();function $t(n,e){switch(e.type){case"snapshot":n.clear();for(const r of e.data.games)n.set(r.id,r);return;case"game":n.set(e.data.game.id,e.data.game);return;case"remove":n.delete(e.data.gameId);return}const t=e.data.gameId,s=t?n.get(t):void 0;if(!s)return;const a={...s};switch(e.type){case"status":a.status=e.data.status,a.statusDetail=e.data.statusDetail,a.clock=e.data.clock,a.period=e.data.period;break;case"period":a.period=e.data.period;break;case"play":{const r=a.plays.findIndex(o=>o.id===e.data.play.id);a.plays=r>=0?a.plays.map((o,c)=>c===r?e.data.play:o):[...a.plays,e.data.play];break}case"score":a.home={...a.home,...e.data.home},a.away={...a.away,...e.data.away};break;case"situation":a.situation=e.data.situation;break;case"odds":a.odds=e.data.odds,a.liveOdds=e.data.liveOdds;break;case"detail":a.drives=e.data.drives,a.winProbability=e.data.winProbability,a.box=e.data.box,a.rink=e.data.rink;break;case"stale":a.stale=e.data.stale;break;case"weather":a.weather=e.data.weather;break;default:return}n.set(a.id,a)}const qn=["ping","snapshot","game","remove","status","period","play","score","situation","odds","detail","stale","weather","upcoming","poll","refresh"],Qn=4e4,vn="sports.reducedMotion",pt="sports.theme",zt="sports.keepAwake";function es(n){try{const e=localStorage.getItem(n);return e===null?void 0:e==="true"}catch{return}}const nt=["auto","day","night"],se=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;function jt(){try{const n=localStorage.getItem(pt);return n==="day"||n==="night"?n:"auto"}catch{return"auto"}}const st=n=>n==="auto"?(se==null?void 0:se.matches)??!0:n==="night";function at(){try{const n=localStorage.getItem(vn);return n===null?void 0:n==="true"}catch{return}}class ts{constructor(){T(this,"state",{conn:"connecting",mode:void 0,games:new Map,upcoming:[],leagues:new Map,lastDataAt:void 0,refreshing:!1,lastRefresh:void 0,config:void 0,watchLinks:void 0,focusedId:void 0,focusClosedAt:void 0,theme:jt(),night:st(jt()),ready:!1,pickerOpen:!1,pinError:void 0,standalone:!1,keepAwake:es(zt)??!0,reducedMotion:at()??(typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches)});T(this,"listeners",new Set);T(this,"es");T(this,"lastHeardAt",0);T(this,"watchdog");T(this,"local");T(this,"pending",[]);T(this,"flushTimer");T(this,"subscribe",e=>(this.listeners.add(e),()=>this.listeners.delete(e)));T(this,"get",()=>this.state);T(this,"onSchemeChange",()=>{this.state.theme==="auto"&&this.set({night:st("auto")})});T(this,"onVisibility",()=>{this.local&&(document.visibilityState==="hidden"?this.local.pause():this.local.resume())});T(this,"onNetwork",()=>{this.local&&this.set({conn:navigator.onLine?"connected":"offline"})});T(this,"linksTimer");T(this,"flush",()=>{this.flushTimer=void 0;const e=this.pending;this.pending=[];const t={};this.state.conn!=="connected"&&!this.local&&(t.conn="connected");let s,a;for(const r of e)if(r.type!=="ping")switch(t.lastDataAt=Date.now(),r.type){case"snapshot":{const o=r.data;s=new Map,$t(s,r),a=new Map(o.leagues.map(c=>[c.league,c])),Object.assign(t,{upcoming:o.upcoming,mode:o.mode});break}case"upcoming":t.upcoming=r.data.upcoming;break;case"poll":a??(a=new Map(this.state.leagues)),a.set(r.data.league,r.data);break;case"refresh":t.lastRefresh=r.data;break;default:s??(s=new Map(this.state.games)),$t(s,r)}s&&(t.games=s),a&&(t.leagues=a),!this.state.ready&&(((s==null?void 0:s.size)??0)>0||[...(a==null?void 0:a.values())??[]].some(r=>r.ok))&&(t.ready=!0),Object.keys(t).length&&this.set(t)})}set(e){this.state={...this.state,...e};const t=document.documentElement;t.dataset.reducedMotion=String(this.state.reducedMotion),this.state.theme==="auto"?delete t.dataset.theme:t.dataset.theme=this.state.theme==="night"?"dark":"light";for(const s of this.listeners)s()}attachLocal(e){this.local=e,this.state={...this.state,standalone:!0}}start(){if(se==null||se.addEventListener("change",this.onSchemeChange),this.local){const e=this.local.config();this.set({config:e,watchLinks:this.local.watchLinks(),mode:"live",conn:navigator.onLine?"connected":"offline",reducedMotion:at()??(e.reducedMotion||this.state.reducedMotion)}),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("online",this.onNetwork),window.addEventListener("offline",this.onNetwork),this.local.start(t=>this.queue(t));return}this.loadConfig(),this.loadWatchLinks(),this.linksTimer=window.setInterval(()=>void this.loadWatchLinks(),10*6e4),this.connect(),this.watchdog=window.setInterval(()=>{this.state.conn==="connected"&&Date.now()-this.lastHeardAt>Qn&&this.connect()},5e3)}async loadWatchLinks(){try{const e=await fetch("/api/watch-links",{cache:"no-store"});e.ok&&this.set({watchLinks:await e.json()})}catch{}}async loadConfig(){try{const e=await fetch("/api/config",{cache:"no-store"});if(!e.ok)return;const t=await e.json();this.set({config:t,reducedMotion:at()??(t.reducedMotion||this.state.reducedMotion)})}catch{}}connect(){var t;if(this.local)return;(t=this.es)==null||t.close(),this.set({conn:"connecting"});const e=new EventSource("/stream");this.es=e;for(const s of qn)e.addEventListener(s,a=>{let r;try{r=JSON.parse(a.data)}catch{return}this.lastHeardAt=Date.now(),this.queue({type:s,data:r})});e.onerror=()=>{this.es===e&&this.set({conn:e.readyState===EventSource.CLOSED?"offline":"connecting"})}}queue(e){this.pending.push(e),this.flushTimer===void 0&&(this.flushTimer=window.setTimeout(this.flush,16))}async refresh(){if(!this.state.refreshing){if(this.set({refreshing:!0}),this.local){try{const e=await this.local.refresh();e&&this.set({lastRefresh:e})}finally{this.set({refreshing:!1})}return}this.state.conn!=="connected"&&this.connect();try{const e=await fetch("/refresh",{method:"POST"});e.ok&&this.set({lastRefresh:await e.json()})}catch{}finally{this.set({refreshing:!1})}}}openFocus(e){if(this.state.focusedId!==e){if(this.set({focusedId:e}),this.local)return this.local.focus(e);fetch("/focus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gameId:e})}).catch(()=>{})}}closeFocus(e=!0){if(this.state.focusedId){if(this.set({focusedId:void 0,focusClosedAt:e?Date.now():this.state.focusClosedAt}),this.local)return this.local.focus(void 0);fetch("/focus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).catch(()=>{})}}setReducedMotion(e){try{localStorage.setItem(vn,String(e))}catch{}this.set({reducedMotion:e})}async pin(e,t){if(this.set({pinError:void 0}),this.local){const s=this.local.pin(e,t);s.ok||this.set({pinError:s.error??"Couldn’t pin that game."});return}try{const s=await fetch("/api/pins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gameId:e,pinned:t})}),a=await s.json().catch(()=>({}));(!s.ok||a.ok===!1)&&this.set({pinError:a.error??`Couldn't ${t?"pin":"unpin"} that game (HTTP ${s.status}).`})}catch{this.set({pinError:"The server isn’t answering. Try again in a moment."})}}openPicker(e=!0){this.set({pickerOpen:e,pinError:void 0})}setKeepAwake(e){try{localStorage.setItem(zt,String(e))}catch{}this.set({keepAwake:e})}cycleTheme(){const e=nt[(nt.indexOf(this.state.theme)+1)%nt.length];try{e==="auto"?localStorage.removeItem(pt):localStorage.setItem(pt,e)}catch{}this.set({theme:e,night:st(e)})}stop(){var e,t;se==null||se.removeEventListener("change",this.onSchemeChange),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("online",this.onNetwork),window.removeEventListener("offline",this.onNetwork),(e=this.local)==null||e.pause(),this.flushTimer!==void 0&&clearTimeout(this.flushTimer),this.flushTimer=void 0,this.pending=[],(t=this.es)==null||t.close(),this.watchdog&&clearInterval(this.watchdog),this.linksTimer&&clearInterval(this.linksTimer)}}const yt=new ts;function Xr(n){return Kn.useSyncExternalStore(yt.subscribe,()=>n(yt.get()))}const ns=`{
  "timezone": "America/New_York",

  "watchlist": [
    { "name": "Georgia Bulldogs", "abbreviation": "UGA", "leagues": ["cfb", "mcbb"] },
    { "name": "Clemson Tigers", "abbreviation": "CLEM", "leagues": ["cfb", "mcbb"] },
    { "name": "Vanderbilt Commodores", "abbreviation": "VAN", "leagues": ["cfb", "mcbb"] },
    { "name": "Wake Forest Demon Deacons", "abbreviation": "WAKE", "leagues": ["cfb", "mcbb"] },
    { "name": "Tampa Bay Buccaneers", "abbreviation": "TB", "leagues": ["nfl"] },
    { "name": "Tampa Bay Lightning", "abbreviation": "TB", "leagues": ["nhl"] },
    { "name": "Atlanta Braves", "abbreviation": "ATL", "leagues": ["mlb"] },
    { "name": "Tampa Bay Rays", "abbreviation": "TB", "leagues": ["mlb"] }
  ],

  "leagues": {
    "cfb": {
      "label": "College football",
      "espnPath": "football/college-football",
      "enabled": true,
      "season": "Aug-Jan",
      "rail": { "enabled": true, "view": "full", "all": false, "top25": true, "conferences": ["SEC", "ACC"] }
    },
    "nfl": {
      "label": "NFL",
      "espnPath": "football/nfl",
      "enabled": true,
      "season": "Sep-Feb",
      "rail": { "enabled": true, "view": "full", "all": true, "top25": false, "conferences": [] }
    },
    "nhl": {
      "label": "NHL",
      "espnPath": "hockey/nhl",
      "enabled": true,
      "season": "Oct-Jun",
      "rail": { "enabled": true, "view": "compact", "all": true, "top25": false, "conferences": [] }
    },
    "mlb": {
      "label": "MLB",
      "espnPath": "baseball/mlb",
      "enabled": false,
      "season": "Feb-Oct",
      "rail": { "enabled": false, "view": "compact", "all": true, "top25": false, "conferences": [] }
    },
    "mcbb": {
      "label": "Men's college basketball",
      "espnPath": "basketball/mens-college-basketball",
      "enabled": true,
      "season": "Nov-Apr",
      "rail": { "enabled": true, "view": "full", "all": false, "top25": true, "conferences": ["SEC", "ACC"] }
    }
  },

  "intervals": {
    "watchlistLiveSummarySec": 9,
    "leagueLiveScoreboardSec": 15,
    "railLiveScoreboardSec": 25,
    "pregameScoreboardSec": 60,
    "pregameWindowMin": 120,
    "idleSec": 900,
    "staleAfterSec": 60,
    "refreshDebounceSec": 10,
    "playReplayGapMs": 1500,
    "weatherSec": 900
  },

  "display": {
    "monitor": "builtin",
    "idleDimAfterFinal": true
  },

  "server": {
    "port": 5280,
    "devClientPort": 5281,
    "lanAccess": false
  },

  "reducedMotion": false,
  "autoFocus": false
}
`,ss=`{
  "generatedAt": "2026-11-10T16:01:21.148Z",
  "note": "Generated by \`npm run ids\` from ESPN endpoints. Do not edit by hand; re-run the resolver instead.",
  "leagues": {
    "cfb": {
      "espnPath": "football/college-football",
      "conferences": {
        "SEC": {
          "id": "8",
          "name": "Southeastern Conference",
          "abbreviation": "sec",
          "shortName": "SEC",
          "isConference": true
        },
        "ACC": {
          "id": "1",
          "name": "Atlantic Coast Conference",
          "abbreviation": "acc",
          "shortName": "ACC",
          "isConference": true
        }
      },
      "teams": [
        {
          "configName": "Georgia Bulldogs",
          "id": "61",
          "uid": "s:20~l:23~t:61",
          "abbreviation": "UGA",
          "displayName": "Georgia Bulldogs",
          "shortDisplayName": "Georgia",
          "location": "Georgia",
          "nickname": "Bulldogs",
          "color": "ba0c2f",
          "alternateColor": "2c2a29",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/61.png",
          "matchedBy": "displayName",
          "group": {
            "id": "8",
            "name": "Southeastern Conference",
            "abbreviation": "sec",
            "shortName": "SEC",
            "isConference": true
          },
          "parentGroup": {
            "id": "80",
            "name": "FBS",
            "shortName": "FBS",
            "isConference": false
          }
        },
        {
          "configName": "Clemson Tigers",
          "id": "228",
          "uid": "s:20~l:23~t:228",
          "abbreviation": "CLEM",
          "displayName": "Clemson Tigers",
          "shortDisplayName": "Clemson",
          "location": "Clemson",
          "nickname": "Tigers",
          "color": "f56600",
          "alternateColor": "ffffff",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/228.png",
          "matchedBy": "displayName",
          "group": {
            "id": "1",
            "name": "Atlantic Coast Conference",
            "abbreviation": "acc",
            "shortName": "ACC",
            "isConference": true
          },
          "parentGroup": {
            "id": "80",
            "name": "FBS",
            "shortName": "FBS",
            "isConference": false
          }
        },
        {
          "configName": "Vanderbilt Commodores",
          "id": "238",
          "uid": "s:20~l:23~t:238",
          "abbreviation": "VAN",
          "displayName": "Vanderbilt Commodores",
          "shortDisplayName": "Vanderbilt",
          "location": "Vanderbilt",
          "nickname": "Commodores",
          "color": "000000",
          "alternateColor": "cfae70",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/238.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/238.png",
          "matchedBy": "displayName",
          "group": {
            "id": "8",
            "name": "Southeastern Conference",
            "abbreviation": "sec",
            "shortName": "SEC",
            "isConference": true
          },
          "parentGroup": {
            "id": "80",
            "name": "FBS",
            "shortName": "FBS",
            "isConference": false
          }
        },
        {
          "configName": "Wake Forest Demon Deacons",
          "id": "154",
          "uid": "s:20~l:23~t:154",
          "abbreviation": "WAKE",
          "displayName": "Wake Forest Demon Deacons",
          "shortDisplayName": "Wake Forest",
          "location": "Wake Forest",
          "nickname": "Demon Deacons",
          "color": "ceb888",
          "alternateColor": "2c2a29",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/154.png",
          "matchedBy": "displayName",
          "group": {
            "id": "1",
            "name": "Atlantic Coast Conference",
            "abbreviation": "acc",
            "shortName": "ACC",
            "isConference": true
          },
          "parentGroup": {
            "id": "80",
            "name": "FBS",
            "shortName": "FBS",
            "isConference": false
          }
        }
      ],
      "unmatchedTeams": [],
      "unmatchedConferences": [],
      "season": {
        "year": 2026,
        "type": 2,
        "name": "Regular Season"
      },
      "division": {
        "id": "80",
        "name": "FBS",
        "shortName": "FBS",
        "isConference": false
      }
    },
    "nfl": {
      "espnPath": "football/nfl",
      "conferences": {},
      "teams": [
        {
          "configName": "Tampa Bay Buccaneers",
          "id": "27",
          "uid": "s:20~l:28~t:27",
          "abbreviation": "TB",
          "displayName": "Tampa Bay Buccaneers",
          "shortDisplayName": "Buccaneers",
          "location": "Tampa Bay",
          "nickname": "Buccaneers",
          "color": "bd1c36",
          "alternateColor": "3e3a35",
          "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/nfl/500-dark/tb.png",
          "matchedBy": "displayName",
          "group": {
            "id": "7",
            "name": "National Football Conference",
            "abbreviation": "NFC",
            "isConference": true
          },
          "parentGroup": {
            "id": "9",
            "name": "National Football League",
            "abbreviation": "NFL",
            "shortName": "NFL",
            "isConference": false
          }
        }
      ],
      "unmatchedTeams": [],
      "unmatchedConferences": [],
      "season": {
        "year": 2026,
        "type": 2,
        "name": "Regular Season"
      }
    },
    "nhl": {
      "espnPath": "hockey/nhl",
      "conferences": {},
      "teams": [
        {
          "configName": "Tampa Bay Lightning",
          "id": "20",
          "uid": "s:70~l:90~t:20",
          "abbreviation": "TB",
          "displayName": "Tampa Bay Lightning",
          "shortDisplayName": "Lightning",
          "location": "Tampa Bay",
          "nickname": "Lightning",
          "color": "003e7e",
          "alternateColor": "ffffff",
          "logo": "https://a.espncdn.com/i/teamlogos/nhl/500/tb.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/nhl/500-dark/tb.png",
          "matchedBy": "displayName",
          "group": {
            "id": "7",
            "name": "Eastern Conference",
            "abbreviation": "East",
            "isConference": true
          },
          "parentGroup": {
            "id": "32",
            "name": "Atlantic Division",
            "abbreviation": "ATL",
            "isConference": false
          }
        }
      ],
      "unmatchedTeams": [],
      "unmatchedConferences": [],
      "season": {
        "year": 2027,
        "type": 2,
        "name": "Regular Season"
      }
    },
    "mlb": {
      "espnPath": "baseball/mlb",
      "conferences": {},
      "teams": [
        {
          "configName": "Atlanta Braves",
          "id": "15",
          "uid": "s:1~l:10~t:15",
          "abbreviation": "ATL",
          "displayName": "Atlanta Braves",
          "shortDisplayName": "Braves",
          "location": "Atlanta",
          "nickname": "Braves",
          "color": "0c2340",
          "alternateColor": "ba0c2f",
          "logo": "https://a.espncdn.com/i/teamlogos/mlb/500/atl.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/mlb/500-dark/atl.png",
          "matchedBy": "displayName",
          "group": {
            "id": "4",
            "name": "National League East",
            "abbreviation": "NLE",
            "shortName": "NL East",
            "isConference": false
          },
          "parentGroup": {
            "id": "8",
            "name": "National League",
            "abbreviation": "NL",
            "shortName": "NL",
            "isConference": true
          }
        },
        {
          "configName": "Tampa Bay Rays",
          "id": "30",
          "uid": "s:1~l:10~t:30",
          "abbreviation": "TB",
          "displayName": "Tampa Bay Rays",
          "shortDisplayName": "Rays",
          "location": "Tampa Bay",
          "nickname": "Rays",
          "color": "092c5c",
          "alternateColor": "8fbce6",
          "logo": "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/mlb/500-dark/tb.png",
          "matchedBy": "displayName",
          "group": {
            "id": "1",
            "name": "American League East",
            "abbreviation": "ALE",
            "shortName": "AL East",
            "isConference": false
          },
          "parentGroup": {
            "id": "7",
            "name": "American League",
            "abbreviation": "AL",
            "shortName": "AL",
            "isConference": true
          }
        }
      ],
      "unmatchedTeams": [],
      "unmatchedConferences": [],
      "season": {
        "year": 2026,
        "type": 3,
        "name": "Postseason"
      }
    },
    "mcbb": {
      "espnPath": "basketball/mens-college-basketball",
      "conferences": {
        "SEC": {
          "id": "23",
          "name": "Southeastern Conference",
          "abbreviation": "sec",
          "shortName": "SEC",
          "isConference": true
        },
        "ACC": {
          "id": "2",
          "name": "Atlantic Coast Conference",
          "abbreviation": "acc",
          "shortName": "ACC",
          "isConference": true
        }
      },
      "teams": [
        {
          "configName": "Georgia Bulldogs",
          "id": "61",
          "uid": "s:40~l:41~t:61",
          "abbreviation": "UGA",
          "displayName": "Georgia Bulldogs",
          "shortDisplayName": "Georgia",
          "location": "Georgia",
          "nickname": "Bulldogs",
          "color": "ba0c2f",
          "alternateColor": "2c2a29",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/61.png",
          "matchedBy": "displayName",
          "group": {
            "id": "23",
            "name": "Southeastern Conference",
            "abbreviation": "sec",
            "shortName": "SEC",
            "isConference": true
          },
          "parentGroup": {
            "id": "50",
            "name": "NCAA Division I",
            "abbreviation": "NCAA",
            "shortName": "Division I",
            "isConference": false
          }
        },
        {
          "configName": "Clemson Tigers",
          "id": "228",
          "uid": "s:40~l:41~t:228",
          "abbreviation": "CLEM",
          "displayName": "Clemson Tigers",
          "shortDisplayName": "Clemson",
          "location": "Clemson",
          "nickname": "Tigers",
          "color": "f56600",
          "alternateColor": "ffffff",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/228.png",
          "matchedBy": "displayName",
          "group": {
            "id": "2",
            "name": "Atlantic Coast Conference",
            "abbreviation": "acc",
            "shortName": "ACC",
            "isConference": true
          },
          "parentGroup": {
            "id": "50",
            "name": "NCAA Division I",
            "abbreviation": "NCAA",
            "shortName": "Division I",
            "isConference": false
          }
        },
        {
          "configName": "Vanderbilt Commodores",
          "id": "238",
          "uid": "s:40~l:41~t:238",
          "abbreviation": "VAN",
          "displayName": "Vanderbilt Commodores",
          "shortDisplayName": "Vanderbilt",
          "location": "Vanderbilt",
          "nickname": "Commodores",
          "color": "000000",
          "alternateColor": "cfae70",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/238.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/238.png",
          "matchedBy": "displayName",
          "group": {
            "id": "23",
            "name": "Southeastern Conference",
            "abbreviation": "sec",
            "shortName": "SEC",
            "isConference": true
          },
          "parentGroup": {
            "id": "50",
            "name": "NCAA Division I",
            "abbreviation": "NCAA",
            "shortName": "Division I",
            "isConference": false
          }
        },
        {
          "configName": "Wake Forest Demon Deacons",
          "id": "154",
          "uid": "s:40~l:41~t:154",
          "abbreviation": "WAKE",
          "displayName": "Wake Forest Demon Deacons",
          "shortDisplayName": "Wake Forest",
          "location": "Wake Forest",
          "nickname": "Demon Deacons",
          "color": "ceb888",
          "alternateColor": "2c2a29",
          "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
          "logoDark": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/154.png",
          "matchedBy": "displayName",
          "group": {
            "id": "2",
            "name": "Atlantic Coast Conference",
            "abbreviation": "acc",
            "shortName": "ACC",
            "isConference": true
          },
          "parentGroup": {
            "id": "50",
            "name": "NCAA Division I",
            "abbreviation": "NCAA",
            "shortName": "Division I",
            "isConference": false
          }
        }
      ],
      "unmatchedTeams": [],
      "unmatchedConferences": [],
      "season": {
        "year": 2027,
        "type": 2,
        "name": "Regular Season"
      },
      "division": {
        "id": "50",
        "name": "NCAA Division I",
        "abbreviation": "NCAA",
        "shortName": "Division I",
        "isConference": false
      }
    }
  }
}
`,as=`{
  "_note": "Generated by \`npm run venues\`, then kept up to date by the server. Edit freely: roof = outdoor | dome | retractable-open | retractable-closed (weather shows for outdoor and retractable-open only). Hand-typed lat/lon win when coordsFrom is \\"manual\\".",
  "venues": [
    {
      "key": "Jordan-Hare Stadium|Auburn",
      "name": "Jordan-Hare Stadium",
      "city": "Auburn",
      "state": "AL",
      "zip": "36849",
      "espnVenueId": "3785",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "251 S Donahue Dr, Auburn, AL 36849",
      "leagues": [
        "cfb"
      ],
      "lat": 32.60559,
      "lon": -85.49037,
      "coordsFrom": "census-address"
    },
    {
      "key": "Bryant-Denny Stadium|Tuscaloosa",
      "name": "Bryant-Denny Stadium",
      "city": "Tuscaloosa",
      "state": "AL",
      "zip": "35401",
      "espnVenueId": "3657",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "920 Paul W Bryant Dr, Tuscaloosa, AL 35401",
      "leagues": [
        "cfb"
      ],
      "lat": 33.20636,
      "lon": -87.54936,
      "coordsFrom": "census-address"
    },
    {
      "key": "Donald W. Reynolds Razorback Stadium|Fayetteville",
      "name": "Donald W. Reynolds Razorback Stadium",
      "city": "Fayetteville",
      "state": "AR",
      "zip": "72701",
      "espnVenueId": "3887",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "350 N Razorback Rd, Fayetteville, AR 72701",
      "leagues": [
        "cfb"
      ],
      "lat": 36.06863,
      "lon": -94.17998,
      "coordsFrom": "census-address"
    },
    {
      "key": "Chase Field|Phoenix",
      "name": "Chase Field",
      "city": "Phoenix",
      "state": "Arizona",
      "zip": "85004",
      "espnVenueId": "30",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "401 E Jefferson St, Phoenix, AZ 85004",
      "leagues": [
        "mlb"
      ],
      "lat": 33.44629,
      "lon": -112.06863,
      "coordsFrom": "census-address"
    },
    {
      "key": "California Memorial Stadium|Berkeley",
      "name": "California Memorial Stadium",
      "city": "Berkeley",
      "state": "CA",
      "zip": "94720",
      "espnVenueId": "3831",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2227 Piedmont Ave, Berkeley, CA 94720",
      "leagues": [
        "cfb"
      ],
      "lat": 37.87082,
      "lon": -122.25255,
      "coordsFrom": "census-address"
    },
    {
      "key": "Angel Stadium|Anaheim",
      "name": "Angel Stadium",
      "city": "Anaheim",
      "state": "California",
      "zip": "92806",
      "espnVenueId": "3",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2000 E Gene Autry Way, Anaheim, CA 92806",
      "leagues": [
        "mlb"
      ],
      "lat": 33.79964,
      "lon": -117.88858,
      "coordsFrom": "census-address"
    },
    {
      "key": "Dodger Stadium|Los Angeles",
      "name": "Dodger Stadium",
      "city": "Los Angeles",
      "state": "California",
      "zip": "90090",
      "espnVenueId": "19",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1000 Vin Scully Ave, Los Angeles, CA 90012",
      "leagues": [
        "mlb"
      ],
      "lat": 34.07238,
      "lon": -118.24802,
      "coordsFrom": "census-address"
    },
    {
      "key": "Sutter Health Park|Sacramento",
      "name": "Sutter Health Park",
      "city": "Sacramento",
      "state": "California",
      "espnVenueId": "7109",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "400 Ballpark Dr, West Sacramento, CA 95691",
      "leagues": [
        "mlb"
      ]
    },
    {
      "key": "Petco Park|San Diego",
      "name": "Petco Park",
      "city": "San Diego",
      "state": "California",
      "zip": "92101",
      "espnVenueId": "85",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "100 Park Blvd, San Diego, CA 92101",
      "leagues": [
        "mlb"
      ],
      "lat": 32.71781,
      "lon": -117.17209,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Oracle Park|San Francisco",
      "name": "Oracle Park",
      "city": "San Francisco",
      "state": "California",
      "zip": "94107",
      "espnVenueId": "43",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "24 Willie Mays Plz, San Francisco, CA 94107",
      "leagues": [
        "mlb"
      ],
      "lat": 37.77931,
      "lon": -122.38997,
      "coordsFrom": "census-address"
    },
    {
      "key": "Coors Field|Denver",
      "name": "Coors Field",
      "city": "Denver",
      "state": "Colorado",
      "zip": "80205",
      "espnVenueId": "27",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2001 Blake St, Denver, CO 80205",
      "leagues": [
        "mlb"
      ],
      "lat": 39.75442,
      "lon": -104.99427,
      "coordsFrom": "census-address"
    },
    {
      "key": "Nationals Park|Washington",
      "name": "Nationals Park",
      "city": "Washington",
      "state": "District of Columbia",
      "zip": "20003",
      "espnVenueId": "89",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1500 S Capitol St SE, Washington, DC 20003",
      "leagues": [
        "mlb"
      ],
      "lat": 38.87458,
      "lon": -77.00894,
      "coordsFrom": "census-address"
    },
    {
      "key": "Ben Hill Griffin Stadium|Gainesville",
      "name": "Ben Hill Griffin Stadium",
      "city": "Gainesville",
      "state": "FL",
      "zip": "32611",
      "espnVenueId": "3634",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "157 Gale Lemerand Dr, Gainesville, FL 32611",
      "leagues": [
        "cfb"
      ]
    },
    {
      "key": "loanDepot park|Miami",
      "name": "loanDepot park",
      "city": "Miami",
      "state": "Florida",
      "zip": "33125",
      "espnVenueId": "4223",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "501 Marlins Way, Miami, FL 33125",
      "leagues": [
        "mlb"
      ],
      "lat": 25.78383,
      "lon": -80.23633,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Tropicana Field|St. Petersburg",
      "name": "Tropicana Field",
      "city": "St. Petersburg",
      "state": "Florida",
      "zip": "33705",
      "espnVenueId": "31",
      "espnIndoor": true,
      "roof": "dome",
      "roofSource": "known",
      "address": "1 Tropicana Dr, St Petersburg, FL 33705",
      "leagues": [
        "mlb"
      ],
      "lat": 27.73397,
      "lon": -82.64031,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Doak Campbell Stadium|Tallahassee",
      "name": "Doak Campbell Stadium",
      "city": "Tallahassee",
      "state": "FL",
      "zip": "32304",
      "espnVenueId": "3697",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "403 Stadium Dr, Tallahassee, FL 32304",
      "leagues": [
        "cfb"
      ],
      "lat": 30.43553,
      "lon": -84.30194,
      "coordsFrom": "census-address"
    },
    {
      "key": "Raymond James Stadium|Tampa",
      "name": "Raymond James Stadium",
      "city": "Tampa",
      "state": "FL",
      "zip": "33607",
      "espnVenueId": "3886",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "4201 N Dale Mabry Hwy, Tampa, FL 33607",
      "leagues": [
        "nfl"
      ],
      "lat": 27.97783,
      "lon": -82.50542,
      "coordsFrom": "census-address"
    },
    {
      "key": "Sanford Stadium|Athens",
      "name": "Sanford Stadium",
      "city": "Athens",
      "state": "GA",
      "zip": "30602",
      "espnVenueId": "3917",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "100 Sanford Dr, Athens, GA 30602",
      "leagues": [
        "cfb"
      ],
      "lat": 33.94392,
      "lon": -83.37386,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Bobby Dodd Stadium|Atlanta",
      "name": "Bobby Dodd Stadium",
      "city": "Atlanta",
      "state": "GA",
      "zip": "30332",
      "espnVenueId": "721",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "177 North Ave NW, Atlanta, GA 30332",
      "leagues": [
        "cfb"
      ],
      "lat": 33.77137,
      "lon": -84.39377,
      "coordsFrom": "census-address"
    },
    {
      "key": "Mercedes-Benz Stadium|Atlanta",
      "name": "Mercedes-Benz Stadium",
      "city": "Atlanta",
      "state": "GA",
      "zip": "30313",
      "espnVenueId": "5348",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "1 AMB Dr NW, Atlanta, GA 30313",
      "leagues": [
        "cfb"
      ],
      "lat": 33.76361,
      "lon": -84.39767,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Truist Park|Atlanta",
      "name": "Truist Park",
      "city": "Atlanta",
      "state": "Georgia",
      "zip": "30339",
      "espnVenueId": "218",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "755 Battery Ave SE, Atlanta, GA 30339",
      "leagues": [
        "mlb"
      ],
      "lat": 33.89093,
      "lon": -84.46899,
      "coordsFrom": "census-address"
    },
    {
      "key": "Soldier Field|Chicago",
      "name": "Soldier Field",
      "city": "Chicago",
      "state": "IL",
      "zip": "60605",
      "espnVenueId": "3933",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1410 Special Olympics Dr, Chicago, IL 60605",
      "leagues": [
        "nfl"
      ],
      "lat": 41.86757,
      "lon": -87.61723,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Rate Field|Chicago",
      "name": "Rate Field",
      "city": "Chicago",
      "state": "Illinois",
      "zip": "60616",
      "espnVenueId": "4",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "333 W 35th St, Chicago, IL 60616",
      "leagues": [
        "mlb"
      ],
      "lat": 41.83087,
      "lon": -87.63345,
      "coordsFrom": "census-address"
    },
    {
      "key": "Wrigley Field|Chicago",
      "name": "Wrigley Field",
      "city": "Chicago",
      "state": "Illinois",
      "zip": "60613",
      "espnVenueId": "16",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1060 W Addison St, Chicago, IL 60613",
      "leagues": [
        "mlb"
      ],
      "lat": 41.94727,
      "lon": -87.65613,
      "coordsFrom": "census-address"
    },
    {
      "key": "Ross-Ade Stadium|West Lafayette",
      "name": "Ross-Ade Stadium",
      "city": "West Lafayette",
      "state": "IN",
      "zip": "47906",
      "espnVenueId": "3907",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "850 Steven Beering Dr, West Lafayette, IN 47906",
      "leagues": [
        "cfb"
      ],
      "lat": 40.47965,
      "lon": -86.98922,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Kroger Field|Lexington",
      "name": "Kroger Field",
      "city": "Lexington",
      "state": "KY",
      "zip": "40506",
      "espnVenueId": "3683",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1540 University Dr, Lexington, KY 40506",
      "leagues": [
        "cfb"
      ],
      "lat": 38.02074,
      "lon": -84.50996,
      "coordsFrom": "census-address"
    },
    {
      "key": "L&N Federal Credit Union Stadium|Louisville",
      "name": "L&N Federal Credit Union Stadium",
      "city": "Louisville",
      "state": "KY",
      "zip": "40208",
      "espnVenueId": "3873",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2800 S Floyd St, Louisville, KY 40208",
      "leagues": [
        "cfb"
      ],
      "lat": 38.20652,
      "lon": -85.75659,
      "coordsFrom": "census-address"
    },
    {
      "key": "Tiger Stadium (LA)|Baton Rouge",
      "name": "Tiger Stadium (LA)",
      "city": "Baton Rouge",
      "state": "LA",
      "zip": "70803",
      "espnVenueId": "3958",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "cfb"
      ],
      "lat": 30.41001,
      "lon": -91.17401,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Caesars Superdome|New Orleans",
      "name": "Caesars Superdome",
      "city": "New Orleans",
      "state": "LA",
      "zip": "70112",
      "espnVenueId": "3493",
      "espnIndoor": true,
      "roof": "dome",
      "roofSource": "known",
      "address": "1500 Sugar Bowl Dr, New Orleans, LA 70112",
      "leagues": [
        "nfl"
      ],
      "lat": 29.95146,
      "lon": -90.07854,
      "coordsFrom": "census-address"
    },
    {
      "key": "Oriole Park at Camden Yards|Baltimore",
      "name": "Oriole Park at Camden Yards",
      "city": "Baltimore",
      "state": "Maryland",
      "zip": "21201",
      "espnVenueId": "1",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "333 W Camden St, Baltimore, MD 21201",
      "leagues": [
        "mlb"
      ],
      "lat": 39.28521,
      "lon": -76.62017,
      "coordsFrom": "census-address"
    },
    {
      "key": "Fenway Park|Boston",
      "name": "Fenway Park",
      "city": "Boston",
      "state": "Massachusetts",
      "zip": "02215",
      "espnVenueId": "2",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "4 Jersey St, Boston, MA 02215",
      "leagues": [
        "mlb"
      ],
      "lat": 42.34547,
      "lon": -71.09823,
      "coordsFrom": "census-address"
    },
    {
      "key": "M&T Bank Stadium|Baltimore",
      "name": "M&T Bank Stadium",
      "city": "Baltimore",
      "state": "MD",
      "zip": "21230",
      "espnVenueId": "3814",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1101 Russell St, Baltimore, MD 21230",
      "leagues": [
        "nfl"
      ],
      "lat": 39.27966,
      "lon": -76.62352,
      "coordsFrom": "census-address"
    },
    {
      "key": "Comerica Park|Detroit",
      "name": "Comerica Park",
      "city": "Detroit",
      "state": "Michigan",
      "zip": "48201",
      "espnVenueId": "45",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2100 Woodward Ave, Detroit, MI 48201",
      "leagues": [
        "mlb"
      ],
      "lat": 42.33774,
      "lon": -83.0513,
      "coordsFrom": "census-address"
    },
    {
      "key": "Ford Field|Detroit",
      "name": "Ford Field",
      "city": "Detroit",
      "state": "MI",
      "zip": "48226",
      "espnVenueId": "3727",
      "espnIndoor": true,
      "roof": "dome",
      "roofSource": "known",
      "address": "2000 Brush St, Detroit, MI 48226",
      "leagues": [
        "nfl"
      ],
      "lat": 42.3389,
      "lon": -83.04663,
      "coordsFrom": "census-address"
    },
    {
      "key": "Target Field|Minneapolis",
      "name": "Target Field",
      "city": "Minneapolis",
      "state": "Minnesota",
      "zip": "55403",
      "espnVenueId": "210",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1 Twins Way, Minneapolis, MN 55403",
      "leagues": [
        "mlb"
      ],
      "lat": 44.96992,
      "lon": -93.28425,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Kauffman Stadium|Kansas City",
      "name": "Kauffman Stadium",
      "city": "Kansas City",
      "state": "Missouri",
      "zip": "64129",
      "espnVenueId": "7",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1 Royal Way, Kansas City, MO 64129",
      "leagues": [
        "mlb"
      ],
      "lat": 39.05164,
      "lon": -94.48277,
      "coordsFrom": "census-address"
    },
    {
      "key": "Busch Stadium|St. Louis",
      "name": "Busch Stadium",
      "city": "St. Louis",
      "state": "Missouri",
      "zip": "63102",
      "espnVenueId": "87",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "700 Clark Ave, St Louis, MO 63102",
      "leagues": [
        "mlb"
      ],
      "lat": 38.63449,
      "lon": -90.18626,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Vaught-Hemingway Stadium|Oxford",
      "name": "Vaught-Hemingway Stadium",
      "city": "Oxford",
      "state": "MS",
      "zip": "38655",
      "espnVenueId": "3974",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "cfb"
      ],
      "lat": 34.32977,
      "lon": -89.48712,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Davis Wade Stadium|Starkville",
      "name": "Davis Wade Stadium",
      "city": "Starkville",
      "state": "MS",
      "zip": "39762",
      "espnVenueId": "3693",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "cfb"
      ],
      "lat": 33.44651,
      "lon": -88.79583,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Bank of America Stadium|Charlotte",
      "name": "Bank of America Stadium",
      "city": "Charlotte",
      "state": "NC",
      "zip": "28202",
      "espnVenueId": "3628",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "800 S Mint St, Charlotte, NC 28202",
      "leagues": [
        "nfl"
      ],
      "lat": 35.22578,
      "lon": -80.85088,
      "coordsFrom": "census-address"
    },
    {
      "key": "Wallace Wade Stadium|Durham",
      "name": "Wallace Wade Stadium",
      "city": "Durham",
      "state": "NC",
      "zip": "27708",
      "espnVenueId": "3982",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "cfb"
      ],
      "lat": 36.0001,
      "lon": -78.9431,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Carter-Finley Stadium|Raleigh",
      "name": "Carter-Finley Stadium",
      "city": "Raleigh",
      "state": "NC",
      "zip": "27607",
      "espnVenueId": "3670",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "4600 Trinity Rd, Raleigh, NC 27607",
      "leagues": [
        "cfb"
      ],
      "lat": 35.79879,
      "lon": -78.71735,
      "coordsFrom": "census-address"
    },
    {
      "key": "Allegacy Federal Credit Union Stadium|Winston-Salem",
      "name": "Allegacy Federal Credit Union Stadium",
      "city": "Winston-Salem",
      "state": "NC",
      "zip": "27105",
      "espnVenueId": "3630",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "499 Deacon Blvd, Winston-Salem, NC 27105",
      "leagues": [
        "cfb"
      ],
      "lat": 36.12888,
      "lon": -80.25604,
      "coordsFrom": "census-address"
    },
    {
      "key": "Yankee Stadium|Bronx",
      "name": "Yankee Stadium",
      "city": "Bronx",
      "state": "New York",
      "zip": "10451",
      "espnVenueId": "208",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1 E 161st St, Bronx, NY 10451",
      "leagues": [
        "mlb"
      ],
      "lat": 40.82929,
      "lon": -73.92854,
      "coordsFrom": "census-address"
    },
    {
      "key": "Citi Field|Queens",
      "name": "Citi Field",
      "city": "Queens",
      "state": "New York",
      "zip": "11368",
      "espnVenueId": "209",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "41 Seaver Way, Flushing, NY 11368",
      "leagues": [
        "mlb"
      ],
      "lat": 40.74974,
      "lon": -73.85304,
      "coordsFrom": "census-zip"
    },
    {
      "key": "JMA Wireless Dome|Syracuse",
      "name": "JMA Wireless Dome",
      "city": "Syracuse",
      "state": "NY",
      "zip": "13244",
      "espnVenueId": "1964",
      "espnIndoor": true,
      "roof": "dome",
      "roofSource": "known",
      "address": "900 Irving Ave, Syracuse, NY 13244",
      "leagues": [
        "cfb"
      ],
      "lat": 43.03854,
      "lon": -76.13827,
      "coordsFrom": "census-address"
    },
    {
      "key": "InfoCision Stadium|Akron",
      "name": "InfoCision Stadium",
      "city": "Akron",
      "state": "OH",
      "espnVenueId": "3768",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "cfb"
      ]
    },
    {
      "key": "Paycor Stadium|Cincinnati",
      "name": "Paycor Stadium",
      "city": "Cincinnati",
      "state": "OH",
      "zip": "45202",
      "espnVenueId": "3874",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "nfl"
      ],
      "lat": 39.10674,
      "lon": -84.50418,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Great American Ball Park|Cincinnati",
      "name": "Great American Ball Park",
      "city": "Cincinnati",
      "state": "Ohio",
      "zip": "45202",
      "espnVenueId": "83",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "100 Joe Nuxhall Way, Cincinnati, OH 45202",
      "leagues": [
        "mlb"
      ],
      "lat": 39.09612,
      "lon": -84.50828,
      "coordsFrom": "census-address"
    },
    {
      "key": "Progressive Field|Cleveland",
      "name": "Progressive Field",
      "city": "Cleveland",
      "state": "Ohio",
      "zip": "44115",
      "espnVenueId": "5",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2401 Ontario St, Cleveland, OH 44115",
      "leagues": [
        "mlb"
      ],
      "lat": 41.49533,
      "lon": -81.68712,
      "coordsFrom": "census-address"
    },
    {
      "key": "Rogers Centre|Toronto",
      "name": "Rogers Centre",
      "city": "Toronto",
      "state": "Ontario",
      "espnVenueId": "14",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "leagues": [
        "mlb"
      ]
    },
    {
      "key": "Citizens Bank Park|Philadelphia",
      "name": "Citizens Bank Park",
      "city": "Philadelphia",
      "state": "Pennsylvania",
      "zip": "19148",
      "espnVenueId": "84",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1 Citizens Bank Way, Philadelphia, PA 19148",
      "leagues": [
        "mlb"
      ],
      "lat": 39.91161,
      "lon": -75.15148,
      "coordsFrom": "census-zip"
    },
    {
      "key": "PNC Park|Pittsburgh",
      "name": "PNC Park",
      "city": "Pittsburgh",
      "state": "Pennsylvania",
      "zip": "15212",
      "espnVenueId": "47",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "115 Federal St, Pittsburgh, PA 15212",
      "leagues": [
        "mlb"
      ],
      "lat": 40.44795,
      "lon": -80.00423,
      "coordsFrom": "census-address"
    },
    {
      "key": "Journey Bank Ballpark at Historic Bowman Field|Williamsport",
      "name": "Journey Bank Ballpark at Historic Bowman Field",
      "city": "Williamsport",
      "state": "Pennsylvania",
      "zip": "17701",
      "espnVenueId": "223",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "leagues": [
        "mlb"
      ],
      "lat": 41.34504,
      "lon": -76.85725,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Memorial Stadium (Clemson, SC)|Clemson",
      "name": "Memorial Stadium (Clemson, SC)",
      "city": "Clemson",
      "state": "SC",
      "zip": "29634",
      "espnVenueId": "3836",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1 Avenue of Champions, Clemson, SC 29634",
      "leagues": [
        "cfb"
      ],
      "lat": 34.6756,
      "lon": -82.83524,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Williams-Brice Stadium|Columbia",
      "name": "Williams-Brice Stadium",
      "city": "Columbia",
      "state": "SC",
      "zip": "29201",
      "espnVenueId": "3994",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "1125 George Rogers Blvd, Columbia, SC 29201",
      "leagues": [
        "cfb"
      ],
      "lat": 33.97455,
      "lon": -81.01924,
      "coordsFrom": "census-address"
    },
    {
      "key": "Globe Life Field|Arlington",
      "name": "Globe Life Field",
      "city": "Arlington",
      "state": "Texas",
      "zip": "76011",
      "espnVenueId": "231",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "734 Stadium Dr, Arlington, TX 76011",
      "leagues": [
        "mlb"
      ],
      "lat": 32.74645,
      "lon": -97.0823,
      "coordsFrom": "census-address"
    },
    {
      "key": "Daikin Park|Houston",
      "name": "Daikin Park",
      "city": "Houston",
      "state": "Texas",
      "zip": "77002",
      "espnVenueId": "44",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "501 Crawford St, Houston, TX 77002",
      "leagues": [
        "mlb"
      ],
      "lat": 29.75755,
      "lon": -95.35673,
      "coordsFrom": "census-address"
    },
    {
      "key": "FirstBank Stadium|Nashville",
      "name": "FirstBank Stadium",
      "city": "Nashville",
      "state": "TN",
      "zip": "37212",
      "espnVenueId": "3973",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "2601 Jess Neely Dr, Nashville, TN 37212",
      "leagues": [
        "cfb"
      ],
      "lat": 36.14279,
      "lon": -86.80784,
      "coordsFrom": "census-address"
    },
    {
      "key": "AT&T Stadium|Arlington",
      "name": "AT&T Stadium",
      "city": "Arlington",
      "state": "TX",
      "zip": "76011",
      "espnVenueId": "3687",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "1 AT&T Way, Arlington, TX 76011",
      "leagues": [
        "nfl"
      ],
      "lat": 32.75203,
      "lon": -97.08261,
      "coordsFrom": "census-zip"
    },
    {
      "key": "Gerald J. Ford Stadium|Dallas",
      "name": "Gerald J. Ford Stadium",
      "city": "Dallas",
      "state": "TX",
      "zip": "75205",
      "espnVenueId": "3735",
      "espnIndoor": false,
      "roof": "outdoor",
      "roofSource": "espn",
      "address": "5800 Ownby Dr, Dallas, TX 75205",
      "leagues": [
        "cfb"
      ],
      "lat": 32.83713,
      "lon": -96.79715,
      "coordsFrom": "census-zip"
    },
    {
      "key": "T-Mobile Park|Seattle",
      "name": "T-Mobile Park",
      "city": "Seattle",
      "state": "Washington",
      "zip": "98134",
      "espnVenueId": "41",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "1250 1st Ave S, Seattle, WA 98134",
      "leagues": [
        "mlb"
      ],
      "lat": 47.59085,
      "lon": -122.33411,
      "coordsFrom": "census-address"
    },
    {
      "key": "American Family Field|Milwaukee",
      "name": "American Family Field",
      "city": "Milwaukee",
      "state": "Wisconsin",
      "zip": "53214",
      "espnVenueId": "4242",
      "espnIndoor": true,
      "roof": "retractable-closed",
      "roofSource": "known",
      "address": "1 Brewers Way, Milwaukee, WI 53214",
      "leagues": [
        "mlb"
      ],
      "lat": 43.02033,
      "lon": -88.01287,
      "coordsFrom": "census-zip"
    }
  ]
}
`,rs=`{
  "services": [
    { "id": "youtubetv", "name": "YouTube TV", "priority": 1, "link": "https://tv.youtube.com/", "notes": "National TV networks and channels in my YouTube TV lineup" },
    { "id": "lightning", "name": "Tampa Bay Lightning app", "priority": 3, "link": "", "notes": "Lightning games on the team's own stream, when not on a YouTube TV channel" },
    { "id": "mlbtv", "name": "MLB.TV", "priority": 4, "link": "https://www.mlb.com/tv", "notes": "Braves games. Local blackout rules may apply." },
    { "id": "prime", "name": "Prime Video", "priority": 5, "link": "https://www.amazon.com/gp/video/storefront", "notes": "Prime-exclusive games only" },
    { "id": "espnplus", "name": "ESPN+ (Disney+ bundle)", "priority": 6, "link": "https://www.espn.com/watch/", "notes": "ESPN+-exclusive games, when not on a YouTube TV channel" },
    { "id": "peacock", "name": "Peacock", "priority": 7, "link": "https://www.peacocktv.com/", "notes": "Peacock-exclusive games, when not on a YouTube TV channel" }
  ],
  "networks": {
    "_note": "ESPN network name -> service id. Case and punctuation are ignored. Add any network the scan lists as NOT MAPPED.",
    "ABC": "youtubetv",
    "CBS": "youtubetv",
    "NBC": "youtubetv",
    "FOX": "youtubetv",
    "ESPN": "youtubetv",
    "ESPN2": "youtubetv",
    "ESPNU": "youtubetv",
    "ESPNEWS": "youtubetv",
    "SEC Network": "youtubetv",
    "SECN": "youtubetv",
    "ACC Network": "youtubetv",
    "ACCN": "youtubetv",
    "Big Ten Network": "youtubetv",
    "BTN": "youtubetv",
    "FS1": "youtubetv",
    "FS2": "youtubetv",
    "CBS Sports Network": "youtubetv",
    "CBSSN": "youtubetv",
    "TNT": "youtubetv",
    "TBS": "youtubetv",
    "truTV": "youtubetv",
    "USA Net": "youtubetv",
    "USA Network": "youtubetv",
    "NFL Network": "youtubetv",
    "NFL Net": "youtubetv",
    "MLB Network": "youtubetv",
    "MLB Net": "youtubetv",
    "CW": "youtubetv",
    "ESPN+": "espnplus",
    "SECN+": "espnplus",
    "ACCNX": "espnplus",
    "ESPN Unlmtd": "espnplus",
    "Disney+": "espnplus",
    "Prime Video": "prime",
    "Prime Video (Local)": "prime",
    "Amazon Prime Video": "prime",
    "Peacock": "peacock",
    "MLB.TV": "mlbtv",

    "_none": "Networks seen on ESPN that none of my services carry. They show as 'no link set'.",
    "B1G+": "none",
    "MW+": "none",
    "Scripps Sports": "none",
    "MSGSN": "none",
    "MSG": "none",
    "MSG2": "none",
    "MSGB": "none",
    "NBC Sports BA": "none",
    "NBC Sports Phil": "none",
    "MNMT": "none",
    "Utah 16": "none",
    "MINNHL": "none",
    "Blues App": "none",
    "BN+": "none",
    "Mammoth+": "none",
    "KONG": "none",
    "CHSN": "none",
    "CARNHL": "none",
    "Altitude Sports": "none",
    "Altitude 2 Sports": "none",
    "NESN": "none",
    "KCOP": "none",
    "DSN": "none",
    "ABTV": "none",
    "CBJNHL": "none",
    "WWHO": "none",
    "KDFI": "none",
    "KTVD-TV (My20)": "none"
  },
  "teams": [
    { "league": "nhl", "team": "TB", "service": "lightning", "when": "fallback", "notes": "Team stream when the game isn't on a YouTube TV channel" },
    { "league": "mlb", "team": "ATL", "service": "mlbtv", "when": "always", "notes": "Local blackout rules may apply" }
  ]
}
`,os={"config.json":ns,"espn-ids.json":ss,"venues.json":as,"watch-links.json":rs},bn=new Set(["pins.json"]),kn="sports.file.",gt=new Map;function Nt(n){const e=typeof n=="string"?n:n.href;return(e.split("?")[0].split(/[\\/]/).pop()??e).replace(/-[A-Za-z0-9_-]{8}(\.[a-z]+)$/,"$1")}function is(n){try{return localStorage.getItem(kn+n)??void 0}catch{return}}function In(n){const e=typeof n=="string"?n:n.href;if(e.startsWith("data:")){const[s,a=""]=e.split(",",2);return s.includes(";base64")?new TextDecoder().decode(Uint8Array.from(atob(a),r=>r.charCodeAt(0))):decodeURIComponent(a)}const t=Nt(n);return gt.has(t)?gt.get(t):bn.has(t)?is(t):os[t]}function Ee(n){return In(n)!==void 0}function Oe(n){const e=In(n);if(e===void 0)throw Object.assign(new Error(`ENOENT: ${Nt(n)}`),{code:"ENOENT"});return e}function wn(n,e){const t=Nt(n);if(gt.set(t,String(e)),!!bn.has(t))try{localStorage.setItem(kn+t,String(e))}catch{}}const cs=()=>{},Sn=()=>{},ls=()=>{},vt=()=>[],ds=()=>{throw new Error("Not available in the browser")};var M;(function(n){n.assertEqual=a=>{};function e(a){}n.assertIs=e;function t(a){throw new Error}n.assertNever=t,n.arrayToEnum=a=>{const r={};for(const o of a)r[o]=o;return r},n.getValidEnumValues=a=>{const r=n.objectKeys(a).filter(c=>typeof a[a[c]]!="number"),o={};for(const c of r)o[c]=a[c];return n.objectValues(o)},n.objectValues=a=>n.objectKeys(a).map(function(r){return a[r]}),n.objectKeys=typeof Object.keys=="function"?a=>Object.keys(a):a=>{const r=[];for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&r.push(o);return r},n.find=(a,r)=>{for(const o of a)if(r(o))return o},n.isInteger=typeof Number.isInteger=="function"?a=>Number.isInteger(a):a=>typeof a=="number"&&Number.isFinite(a)&&Math.floor(a)===a;function s(a,r=" | "){return a.map(o=>typeof o=="string"?`'${o}'`:o).join(r)}n.joinValues=s,n.jsonStringifyReplacer=(a,r)=>typeof r=="bigint"?r.toString():r})(M||(M={}));var Zt;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Zt||(Zt={}));const k=M.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ce=n=>{switch(typeof n){case"undefined":return k.undefined;case"string":return k.string;case"number":return Number.isNaN(n)?k.nan:k.number;case"boolean":return k.boolean;case"function":return k.function;case"bigint":return k.bigint;case"symbol":return k.symbol;case"object":return Array.isArray(n)?k.array:n===null?k.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?k.promise:typeof Map<"u"&&n instanceof Map?k.map:typeof Set<"u"&&n instanceof Set?k.set:typeof Date<"u"&&n instanceof Date?k.date:k.object;default:return k.unknown}},y=M.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class re extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(r){return r.message},s={_errors:[]},a=r=>{for(const o of r.issues)if(o.code==="invalid_union")o.unionErrors.map(a);else if(o.code==="invalid_return_type")a(o.returnTypeError);else if(o.code==="invalid_arguments")a(o.argumentsError);else if(o.path.length===0)s._errors.push(t(o));else{let c=s,l=0;for(;l<o.path.length;){const d=o.path[l];l===o.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(o))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return a(this),s}static assert(e){if(!(e instanceof re))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,M.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},s=[];for(const a of this.issues)if(a.path.length>0){const r=a.path[0];t[r]=t[r]||[],t[r].push(e(a))}else s.push(e(a));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}}re.create=n=>new re(n);const bt=(n,e)=>{let t;switch(n.code){case y.invalid_type:n.received===k.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case y.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,M.jsonStringifyReplacer)}`;break;case y.unrecognized_keys:t=`Unrecognized key(s) in object: ${M.joinValues(n.keys,", ")}`;break;case y.invalid_union:t="Invalid input";break;case y.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${M.joinValues(n.options)}`;break;case y.invalid_enum_value:t=`Invalid enum value. Expected ${M.joinValues(n.options)}, received '${n.received}'`;break;case y.invalid_arguments:t="Invalid function arguments";break;case y.invalid_return_type:t="Invalid function return type";break;case y.invalid_date:t="Invalid date";break;case y.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:M.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case y.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case y.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case y.custom:t="Invalid input";break;case y.invalid_intersection_types:t="Intersection results could not be merged";break;case y.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case y.not_finite:t="Number must be finite";break;default:t=e.defaultError,M.assertNever(n)}return{message:t}};let us=bt;function fs(){return us}const ms=n=>{const{data:e,path:t,errorMaps:s,issueData:a}=n,r=[...t,...a.path||[]],o={...a,path:r};if(a.message!==void 0)return{...a,path:r,message:a.message};let c="";const l=s.filter(d=>!!d).slice().reverse();for(const d of l)c=d(o,{data:e,defaultError:c}).message;return{...a,path:r,message:c}};function b(n,e){const t=fs(),s=ms({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===bt?void 0:bt].filter(a=>!!a)});n.common.issues.push(s)}class K{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const s=[];for(const a of t){if(a.status==="aborted")return N;a.status==="dirty"&&e.dirty(),s.push(a.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){const s=[];for(const a of t){const r=await a.key,o=await a.value;s.push({key:r,value:o})}return K.mergeObjectSync(e,s)}static mergeObjectSync(e,t){const s={};for(const a of t){const{key:r,value:o}=a;if(r.status==="aborted"||o.status==="aborted")return N;r.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof o.value<"u"||a.alwaysSet)&&(s[r.value]=o.value)}return{status:e.value,value:s}}}const N=Object.freeze({status:"aborted"}),Te=n=>({status:"dirty",value:n}),Q=n=>({status:"valid",value:n}),Jt=n=>n.status==="aborted",Gt=n=>n.status==="dirty",we=n=>n.status==="valid",Ve=n=>typeof Promise<"u"&&n instanceof Promise;var w;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(w||(w={}));class me{constructor(e,t,s,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=a}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ut=(n,e)=>{if(we(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new re(n.common.issues);return this._error=t,this._error}}};function R(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:s,description:a}=n;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:a}:{errorMap:(o,c)=>{const{message:l}=n;return o.code==="invalid_enum_value"?{message:l??c.defaultError}:typeof c.data>"u"?{message:l??s??c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:l??t??c.defaultError}},description:a}}class F{get description(){return this._def.description}_getType(e){return ce(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:ce(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new K,ctx:{common:e.parent.common,data:e.data,parsedType:ce(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Ve(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){const s={common:{issues:[],async:(t==null?void 0:t.async)??!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ce(e)},a=this._parseSync({data:e,path:s.path,parent:s});return Ut(s,a)}"~validate"(e){var s,a;const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ce(e)};if(!this["~standard"].async)try{const r=this._parseSync({data:e,path:[],parent:t});return we(r)?{value:r.value}:{issues:t.common.issues}}catch(r){(a=(s=r==null?void 0:r.message)==null?void 0:s.toLowerCase())!=null&&a.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(r=>we(r)?{value:r.value}:{issues:t.common.issues})}async parseAsync(e,t){const s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){const s={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ce(e)},a=this._parse({data:e,path:s.path,parent:s}),r=await(Ve(a)?a:Promise.resolve(a));return Ut(s,r)}refine(e,t){const s=a=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(a):t;return this._refinement((a,r)=>{const o=e(a),c=()=>r.addIssue({code:y.custom,...s(a)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(c(),!1)):o?!0:(c(),!1)})}refinement(e,t){return this._refinement((s,a)=>e(s)?!0:(a.addIssue(typeof t=="function"?t(s,a):t),!1))}_refinement(e){return new _e({schema:this,typeName:x.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return fe.create(this,this._def)}nullable(){return Ae.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ne.create(this)}promise(){return je.create(this,this._def)}or(e){return $e.create([this,e],this._def)}and(e){return ze.create(this,e,this._def)}transform(e){return new _e({...R(this._def),schema:this,typeName:x.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new St({...R(this._def),innerType:this,defaultValue:t,typeName:x.ZodDefault})}brand(){return new Ps({typeName:x.ZodBranded,type:this,...R(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Ct({...R(this._def),innerType:this,catchValue:t,typeName:x.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return xt.create(this,e)}readonly(){return _t.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const hs=/^c[^\s-]{8,}$/i,ps=/^[0-9a-z]+$/,ys=/^[0-9A-HJKMNP-TV-Z]{26}$/i,gs=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,vs=/^[a-z0-9_-]{21}$/i,bs=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,ks=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Is=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ws="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let rt;const Ss=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Cs=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,_s=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,As=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ts=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ns=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Cn="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",xs=new RegExp(`^${Cn}$`);function _n(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const t=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Es(n){return new RegExp(`^${_n(n)}$`)}function Os(n){let e=`${Cn}T${_n(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Rs(n,e){return!!((e==="v4"||!e)&&Ss.test(n)||(e==="v6"||!e)&&_s.test(n))}function Ls(n,e){if(!bs.test(n))return!1;try{const[t]=n.split(".");if(!t)return!1;const s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),a=JSON.parse(atob(s));return!(typeof a!="object"||a===null||"typ"in a&&(a==null?void 0:a.typ)!=="JWT"||!a.alg||e&&a.alg!==e)}catch{return!1}}function Fs(n,e){return!!((e==="v4"||!e)&&Cs.test(n)||(e==="v6"||!e)&&As.test(n))}class de extends F{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==k.string){const r=this._getOrReturnCtx(e);return b(r,{code:y.invalid_type,expected:k.string,received:r.parsedType}),N}const s=new K;let a;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(a=this._getOrReturnCtx(e,a),b(a,{code:y.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),s.dirty());else if(r.kind==="max")e.data.length>r.value&&(a=this._getOrReturnCtx(e,a),b(a,{code:y.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),s.dirty());else if(r.kind==="length"){const o=e.data.length>r.value,c=e.data.length<r.value;(o||c)&&(a=this._getOrReturnCtx(e,a),o?b(a,{code:y.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):c&&b(a,{code:y.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),s.dirty())}else if(r.kind==="email")Is.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"email",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="emoji")rt||(rt=new RegExp(ws,"u")),rt.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"emoji",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="uuid")gs.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"uuid",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="nanoid")vs.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"nanoid",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="cuid")hs.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"cuid",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="cuid2")ps.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"cuid2",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="ulid")ys.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"ulid",code:y.invalid_string,message:r.message}),s.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{a=this._getOrReturnCtx(e,a),b(a,{validation:"url",code:y.invalid_string,message:r.message}),s.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"regex",code:y.invalid_string,message:r.message}),s.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),s.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:{startsWith:r.value},message:r.message}),s.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:{endsWith:r.value},message:r.message}),s.dirty()):r.kind==="datetime"?Os(r).test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:"datetime",message:r.message}),s.dirty()):r.kind==="date"?xs.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:"date",message:r.message}),s.dirty()):r.kind==="time"?Es(r).test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{code:y.invalid_string,validation:"time",message:r.message}),s.dirty()):r.kind==="duration"?ks.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"duration",code:y.invalid_string,message:r.message}),s.dirty()):r.kind==="ip"?Rs(e.data,r.version)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"ip",code:y.invalid_string,message:r.message}),s.dirty()):r.kind==="jwt"?Ls(e.data,r.alg)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"jwt",code:y.invalid_string,message:r.message}),s.dirty()):r.kind==="cidr"?Fs(e.data,r.version)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"cidr",code:y.invalid_string,message:r.message}),s.dirty()):r.kind==="base64"?Ts.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"base64",code:y.invalid_string,message:r.message}),s.dirty()):r.kind==="base64url"?Ns.test(e.data)||(a=this._getOrReturnCtx(e,a),b(a,{validation:"base64url",code:y.invalid_string,message:r.message}),s.dirty()):M.assertNever(r);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(a=>e.test(a),{validation:t,code:y.invalid_string,...w.errToObj(s)})}_addCheck(e){return new de({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...w.errToObj(e)})}url(e){return this._addCheck({kind:"url",...w.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...w.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...w.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...w.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...w.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...w.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...w.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...w.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...w.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...w.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...w.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...w.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(e==null?void 0:e.offset)??!1,local:(e==null?void 0:e.local)??!1,...w.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...w.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...w.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...w.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...w.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...w.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...w.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...w.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...w.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...w.errToObj(t)})}nonempty(e){return this.min(1,w.errToObj(e))}trim(){return new de({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new de({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new de({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}de.create=n=>new de({checks:[],typeName:x.ZodString,coerce:(n==null?void 0:n.coerce)??!1,...R(n)});function Ms(n,e){const t=(n.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,a=t>s?t:s,r=Number.parseInt(n.toFixed(a).replace(".","")),o=Number.parseInt(e.toFixed(a).replace(".",""));return r%o/10**a}class Se extends F{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==k.number){const r=this._getOrReturnCtx(e);return b(r,{code:y.invalid_type,expected:k.number,received:r.parsedType}),N}let s;const a=new K;for(const r of this._def.checks)r.kind==="int"?M.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_type,expected:"integer",received:"float",message:r.message}),a.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),a.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),a.dirty()):r.kind==="multipleOf"?Ms(e.data,r.value)!==0&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.not_multiple_of,multipleOf:r.value,message:r.message}),a.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.not_finite,message:r.message}),a.dirty()):M.assertNever(r);return{status:a.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,w.toString(t))}gt(e,t){return this.setLimit("min",e,!1,w.toString(t))}lte(e,t){return this.setLimit("max",e,!0,w.toString(t))}lt(e,t){return this.setLimit("max",e,!1,w.toString(t))}setLimit(e,t,s,a){return new Se({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:w.toString(a)}]})}_addCheck(e){return new Se({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:w.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:w.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:w.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:w.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:w.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:w.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:w.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:w.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:w.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&M.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Se.create=n=>new Se({checks:[],typeName:x.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...R(n)});class Ne extends F{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==k.bigint)return this._getInvalidInput(e);let s;const a=new K;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),a.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),a.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.not_multiple_of,multipleOf:r.value,message:r.message}),a.dirty()):M.assertNever(r);return{status:a.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return b(t,{code:y.invalid_type,expected:k.bigint,received:t.parsedType}),N}gte(e,t){return this.setLimit("min",e,!0,w.toString(t))}gt(e,t){return this.setLimit("min",e,!1,w.toString(t))}lte(e,t){return this.setLimit("max",e,!0,w.toString(t))}lt(e,t){return this.setLimit("max",e,!1,w.toString(t))}setLimit(e,t,s,a){return new Ne({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:w.toString(a)}]})}_addCheck(e){return new Ne({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:w.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:w.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:w.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:w.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:w.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Ne.create=n=>new Ne({checks:[],typeName:x.ZodBigInt,coerce:(n==null?void 0:n.coerce)??!1,...R(n)});class kt extends F{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==k.boolean){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.boolean,received:s.parsedType}),N}return Q(e.data)}}kt.create=n=>new kt({typeName:x.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...R(n)});class We extends F{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==k.date){const r=this._getOrReturnCtx(e);return b(r,{code:y.invalid_type,expected:k.date,received:r.parsedType}),N}if(Number.isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return b(r,{code:y.invalid_date}),N}const s=new K;let a;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(a=this._getOrReturnCtx(e,a),b(a,{code:y.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),s.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(a=this._getOrReturnCtx(e,a),b(a,{code:y.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),s.dirty()):M.assertNever(r);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new We({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:w.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:w.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}We.create=n=>new We({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:x.ZodDate,...R(n)});class Ht extends F{_parse(e){if(this._getType(e)!==k.symbol){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.symbol,received:s.parsedType}),N}return Q(e.data)}}Ht.create=n=>new Ht({typeName:x.ZodSymbol,...R(n)});class Yt extends F{_parse(e){if(this._getType(e)!==k.undefined){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.undefined,received:s.parsedType}),N}return Q(e.data)}}Yt.create=n=>new Yt({typeName:x.ZodUndefined,...R(n)});class Xt extends F{_parse(e){if(this._getType(e)!==k.null){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.null,received:s.parsedType}),N}return Q(e.data)}}Xt.create=n=>new Xt({typeName:x.ZodNull,...R(n)});class Kt extends F{constructor(){super(...arguments),this._any=!0}_parse(e){return Q(e.data)}}Kt.create=n=>new Kt({typeName:x.ZodAny,...R(n)});class qt extends F{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Q(e.data)}}qt.create=n=>new qt({typeName:x.ZodUnknown,...R(n)});class he extends F{_parse(e){const t=this._getOrReturnCtx(e);return b(t,{code:y.invalid_type,expected:k.never,received:t.parsedType}),N}}he.create=n=>new he({typeName:x.ZodNever,...R(n)});class Qt extends F{_parse(e){if(this._getType(e)!==k.undefined){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.void,received:s.parsedType}),N}return Q(e.data)}}Qt.create=n=>new Qt({typeName:x.ZodVoid,...R(n)});class ne extends F{_parse(e){const{ctx:t,status:s}=this._processInputParams(e),a=this._def;if(t.parsedType!==k.array)return b(t,{code:y.invalid_type,expected:k.array,received:t.parsedType}),N;if(a.exactLength!==null){const o=t.data.length>a.exactLength.value,c=t.data.length<a.exactLength.value;(o||c)&&(b(t,{code:o?y.too_big:y.too_small,minimum:c?a.exactLength.value:void 0,maximum:o?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),s.dirty())}if(a.minLength!==null&&t.data.length<a.minLength.value&&(b(t,{code:y.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),s.dirty()),a.maxLength!==null&&t.data.length>a.maxLength.value&&(b(t,{code:y.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>a.type._parseAsync(new me(t,o,t.path,c)))).then(o=>K.mergeArray(s,o));const r=[...t.data].map((o,c)=>a.type._parseSync(new me(t,o,t.path,c)));return K.mergeArray(s,r)}get element(){return this._def.type}min(e,t){return new ne({...this._def,minLength:{value:e,message:w.toString(t)}})}max(e,t){return new ne({...this._def,maxLength:{value:e,message:w.toString(t)}})}length(e,t){return new ne({...this._def,exactLength:{value:e,message:w.toString(t)}})}nonempty(e){return this.min(1,e)}}ne.create=(n,e)=>new ne({type:n,minLength:null,maxLength:null,exactLength:null,typeName:x.ZodArray,...R(e)});function Ie(n){if(n instanceof U){const e={};for(const t in n.shape){const s=n.shape[t];e[t]=fe.create(Ie(s))}return new U({...n._def,shape:()=>e})}else return n instanceof ne?new ne({...n._def,type:Ie(n.element)}):n instanceof fe?fe.create(Ie(n.unwrap())):n instanceof Ae?Ae.create(Ie(n.unwrap())):n instanceof ve?ve.create(n.items.map(e=>Ie(e))):n}class U extends F{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=M.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==k.object){const d=this._getOrReturnCtx(e);return b(d,{code:y.invalid_type,expected:k.object,received:d.parsedType}),N}const{status:s,ctx:a}=this._processInputParams(e),{shape:r,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof he&&this._def.unknownKeys==="strip"))for(const d in a.data)o.includes(d)||c.push(d);const l=[];for(const d of o){const m=r[d],v=a.data[d];l.push({key:{status:"valid",value:d},value:m._parse(new me(a,v,a.path,d)),alwaysSet:d in a.data})}if(this._def.catchall instanceof he){const d=this._def.unknownKeys;if(d==="passthrough")for(const m of c)l.push({key:{status:"valid",value:m},value:{status:"valid",value:a.data[m]}});else if(d==="strict")c.length>0&&(b(a,{code:y.unrecognized_keys,keys:c}),s.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const m of c){const v=a.data[m];l.push({key:{status:"valid",value:m},value:d._parse(new me(a,v,a.path,m)),alwaysSet:m in a.data})}}return a.common.async?Promise.resolve().then(async()=>{const d=[];for(const m of l){const v=await m.key,h=await m.value;d.push({key:v,value:h,alwaysSet:m.alwaysSet})}return d}).then(d=>K.mergeObjectSync(s,d)):K.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(e){return w.errToObj,new U({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,s)=>{var r,o;const a=((o=(r=this._def).errorMap)==null?void 0:o.call(r,t,s).message)??s.defaultError;return t.code==="unrecognized_keys"?{message:w.errToObj(e).message??a}:{message:a}}}:{}})}strip(){return new U({...this._def,unknownKeys:"strip"})}passthrough(){return new U({...this._def,unknownKeys:"passthrough"})}extend(e){return new U({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new U({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:x.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new U({...this._def,catchall:e})}pick(e){const t={};for(const s of M.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new U({...this._def,shape:()=>t})}omit(e){const t={};for(const s of M.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new U({...this._def,shape:()=>t})}deepPartial(){return Ie(this)}partial(e){const t={};for(const s of M.objectKeys(this.shape)){const a=this.shape[s];e&&!e[s]?t[s]=a:t[s]=a.optional()}return new U({...this._def,shape:()=>t})}required(e){const t={};for(const s of M.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let r=this.shape[s];for(;r instanceof fe;)r=r._def.innerType;t[s]=r}return new U({...this._def,shape:()=>t})}keyof(){return An(M.objectKeys(this.shape))}}U.create=(n,e)=>new U({shape:()=>n,unknownKeys:"strip",catchall:he.create(),typeName:x.ZodObject,...R(e)});U.strictCreate=(n,e)=>new U({shape:()=>n,unknownKeys:"strict",catchall:he.create(),typeName:x.ZodObject,...R(e)});U.lazycreate=(n,e)=>new U({shape:n,unknownKeys:"strip",catchall:he.create(),typeName:x.ZodObject,...R(e)});class $e extends F{_parse(e){const{ctx:t}=this._processInputParams(e),s=this._def.options;function a(r){for(const c of r)if(c.result.status==="valid")return c.result;for(const c of r)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const o=r.map(c=>new re(c.ctx.common.issues));return b(t,{code:y.invalid_union,unionErrors:o}),N}if(t.common.async)return Promise.all(s.map(async r=>{const o={...t,common:{...t.common,issues:[]},parent:null};return{result:await r._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(a);{let r;const o=[];for(const l of s){const d={...t,common:{...t.common,issues:[]},parent:null},m=l._parseSync({data:t.data,path:t.path,parent:d});if(m.status==="valid")return m;m.status==="dirty"&&!r&&(r={result:m,ctx:d}),d.common.issues.length&&o.push(d.common.issues)}if(r)return t.common.issues.push(...r.ctx.common.issues),r.result;const c=o.map(l=>new re(l));return b(t,{code:y.invalid_union,unionErrors:c}),N}}get options(){return this._def.options}}$e.create=(n,e)=>new $e({options:n,typeName:x.ZodUnion,...R(e)});function It(n,e){const t=ce(n),s=ce(e);if(n===e)return{valid:!0,data:n};if(t===k.object&&s===k.object){const a=M.objectKeys(e),r=M.objectKeys(n).filter(c=>a.indexOf(c)!==-1),o={...n,...e};for(const c of r){const l=It(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===k.array&&s===k.array){if(n.length!==e.length)return{valid:!1};const a=[];for(let r=0;r<n.length;r++){const o=n[r],c=e[r],l=It(o,c);if(!l.valid)return{valid:!1};a.push(l.data)}return{valid:!0,data:a}}else return t===k.date&&s===k.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class ze extends F{_parse(e){const{status:t,ctx:s}=this._processInputParams(e),a=(r,o)=>{if(Jt(r)||Jt(o))return N;const c=It(r.value,o.value);return c.valid?((Gt(r)||Gt(o))&&t.dirty(),{status:t.value,value:c.data}):(b(s,{code:y.invalid_intersection_types}),N)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([r,o])=>a(r,o)):a(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}ze.create=(n,e,t)=>new ze({left:n,right:e,typeName:x.ZodIntersection,...R(t)});class ve extends F{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==k.array)return b(s,{code:y.invalid_type,expected:k.array,received:s.parsedType}),N;if(s.data.length<this._def.items.length)return b(s,{code:y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),N;!this._def.rest&&s.data.length>this._def.items.length&&(b(s,{code:y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...s.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new me(s,o,s.path,c)):null}).filter(o=>!!o);return s.common.async?Promise.all(r).then(o=>K.mergeArray(t,o)):K.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new ve({...this._def,rest:e})}}ve.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ve({items:n,typeName:x.ZodTuple,rest:null,...R(e)})};class en extends F{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==k.map)return b(s,{code:y.invalid_type,expected:k.map,received:s.parsedType}),N;const a=this._def.keyType,r=this._def.valueType,o=[...s.data.entries()].map(([c,l],d)=>({key:a._parse(new me(s,c,s.path,[d,"key"])),value:r._parse(new me(s,l,s.path,[d,"value"]))}));if(s.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of o){const d=await l.key,m=await l.value;if(d.status==="aborted"||m.status==="aborted")return N;(d.status==="dirty"||m.status==="dirty")&&t.dirty(),c.set(d.value,m.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of o){const d=l.key,m=l.value;if(d.status==="aborted"||m.status==="aborted")return N;(d.status==="dirty"||m.status==="dirty")&&t.dirty(),c.set(d.value,m.value)}return{status:t.value,value:c}}}}en.create=(n,e,t)=>new en({valueType:e,keyType:n,typeName:x.ZodMap,...R(t)});class xe extends F{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==k.set)return b(s,{code:y.invalid_type,expected:k.set,received:s.parsedType}),N;const a=this._def;a.minSize!==null&&s.data.size<a.minSize.value&&(b(s,{code:y.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),t.dirty()),a.maxSize!==null&&s.data.size>a.maxSize.value&&(b(s,{code:y.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),t.dirty());const r=this._def.valueType;function o(l){const d=new Set;for(const m of l){if(m.status==="aborted")return N;m.status==="dirty"&&t.dirty(),d.add(m.value)}return{status:t.value,value:d}}const c=[...s.data.values()].map((l,d)=>r._parse(new me(s,l,s.path,d)));return s.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new xe({...this._def,minSize:{value:e,message:w.toString(t)}})}max(e,t){return new xe({...this._def,maxSize:{value:e,message:w.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}xe.create=(n,e)=>new xe({valueType:n,minSize:null,maxSize:null,typeName:x.ZodSet,...R(e)});class tn extends F{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}tn.create=(n,e)=>new tn({getter:n,typeName:x.ZodLazy,...R(e)});class wt extends F{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return b(t,{received:t.data,code:y.invalid_literal,expected:this._def.value}),N}return{status:"valid",value:e.data}}get value(){return this._def.value}}wt.create=(n,e)=>new wt({value:n,typeName:x.ZodLiteral,...R(e)});function An(n,e){return new Ce({values:n,typeName:x.ZodEnum,...R(e)})}class Ce extends F{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),s=this._def.values;return b(t,{expected:M.joinValues(s),received:t.parsedType,code:y.invalid_type}),N}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),s=this._def.values;return b(t,{received:t.data,code:y.invalid_enum_value,options:s}),N}return Q(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Ce.create(e,{...this._def,...t})}exclude(e,t=this._def){return Ce.create(this.options.filter(s=>!e.includes(s)),{...this._def,...t})}}Ce.create=An;class nn extends F{_parse(e){const t=M.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==k.string&&s.parsedType!==k.number){const a=M.objectValues(t);return b(s,{expected:M.joinValues(a),received:s.parsedType,code:y.invalid_type}),N}if(this._cache||(this._cache=new Set(M.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const a=M.objectValues(t);return b(s,{received:s.data,code:y.invalid_enum_value,options:a}),N}return Q(e.data)}get enum(){return this._def.values}}nn.create=(n,e)=>new nn({values:n,typeName:x.ZodNativeEnum,...R(e)});class je extends F{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==k.promise&&t.common.async===!1)return b(t,{code:y.invalid_type,expected:k.promise,received:t.parsedType}),N;const s=t.parsedType===k.promise?t.data:Promise.resolve(t.data);return Q(s.then(a=>this._def.type.parseAsync(a,{path:t.path,errorMap:t.common.contextualErrorMap})))}}je.create=(n,e)=>new je({type:n,typeName:x.ZodPromise,...R(e)});class _e extends F{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===x.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:s}=this._processInputParams(e),a=this._def.effect||null,r={addIssue:o=>{b(s,o),o.fatal?t.abort():t.dirty()},get path(){return s.path}};if(r.addIssue=r.addIssue.bind(r),a.type==="preprocess"){const o=a.transform(s.data,r);if(s.common.async)return Promise.resolve(o).then(async c=>{if(t.value==="aborted")return N;const l=await this._def.schema._parseAsync({data:c,path:s.path,parent:s});return l.status==="aborted"?N:l.status==="dirty"||t.value==="dirty"?Te(l.value):l});{if(t.value==="aborted")return N;const c=this._def.schema._parseSync({data:o,path:s.path,parent:s});return c.status==="aborted"?N:c.status==="dirty"||t.value==="dirty"?Te(c.value):c}}if(a.type==="refinement"){const o=c=>{const l=a.refinement(c,r);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(s.common.async===!1){const c=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return c.status==="aborted"?N:(c.status==="dirty"&&t.dirty(),o(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(c=>c.status==="aborted"?N:(c.status==="dirty"&&t.dirty(),o(c.value).then(()=>({status:t.value,value:c.value}))))}if(a.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!we(o))return N;const c=a.transform(o.value,r);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>we(o)?Promise.resolve(a.transform(o.value,r)).then(c=>({status:t.value,value:c})):N);M.assertNever(a)}}_e.create=(n,e,t)=>new _e({schema:n,typeName:x.ZodEffects,effect:e,...R(t)});_e.createWithPreprocess=(n,e,t)=>new _e({schema:e,effect:{type:"preprocess",transform:n},typeName:x.ZodEffects,...R(t)});class fe extends F{_parse(e){return this._getType(e)===k.undefined?Q(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}fe.create=(n,e)=>new fe({innerType:n,typeName:x.ZodOptional,...R(e)});class Ae extends F{_parse(e){return this._getType(e)===k.null?Q(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ae.create=(n,e)=>new Ae({innerType:n,typeName:x.ZodNullable,...R(e)});class St extends F{_parse(e){const{ctx:t}=this._processInputParams(e);let s=t.data;return t.parsedType===k.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}St.create=(n,e)=>new St({innerType:n,typeName:x.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...R(e)});class Ct extends F{_parse(e){const{ctx:t}=this._processInputParams(e),s={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return Ve(a)?a.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new re(s.common.issues)},input:s.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new re(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}Ct.create=(n,e)=>new Ct({innerType:n,typeName:x.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...R(e)});class sn extends F{_parse(e){if(this._getType(e)!==k.nan){const s=this._getOrReturnCtx(e);return b(s,{code:y.invalid_type,expected:k.nan,received:s.parsedType}),N}return{status:"valid",value:e.data}}}sn.create=n=>new sn({typeName:x.ZodNaN,...R(n)});class Ps extends F{_parse(e){const{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}}class xt extends F{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?N:r.status==="dirty"?(t.dirty(),Te(r.value)):this._def.out._parseAsync({data:r.value,path:s.path,parent:s})})();{const a=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?N:a.status==="dirty"?(t.dirty(),{status:"dirty",value:a.value}):this._def.out._parseSync({data:a.value,path:s.path,parent:s})}}static create(e,t){return new xt({in:e,out:t,typeName:x.ZodPipeline})}}class _t extends F{_parse(e){const t=this._def.innerType._parse(e),s=a=>(we(a)&&(a.value=Object.freeze(a.value)),a);return Ve(t)?t.then(a=>s(a)):s(t)}unwrap(){return this._def.innerType}}_t.create=(n,e)=>new _t({innerType:n,typeName:x.ZodReadonly,...R(e)});var x;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(x||(x={}));const ge=de.create,Ds=Se.create,ue=kt.create;he.create;const At=ne.create,le=U.create,Bs=$e.create;ze.create;ve.create;const Vs=wt.create,Tn=Ce.create;je.create;fe.create;Ae.create;const Et=["cfb","nfl","nhl","mlb","mcbb"],Ws=Tn(Et),$s=le({enabled:ue(),view:Tn(["full","compact"]),all:ue(),top25:ue(),conferences:At(ge().min(1))}).strict(),zs=le({label:ge().min(1),espnPath:ge().regex(/^[a-z0-9-]+\/[a-z0-9-]+$/,'must look like "sport/league"'),enabled:ue(),season:ge().min(1),rail:$s}).strict(),X=Ds().int().positive(),js=le({timezone:ge().refine(Js,"not a valid IANA time zone"),watchlist:At(le({name:ge().min(1),abbreviation:ge().min(1),leagues:At(Ws).min(1)}).strict()).min(1),leagues:le(Object.fromEntries(Et.map(n=>[n,zs]))).strict(),intervals:le({watchlistLiveSummarySec:X,leagueLiveScoreboardSec:X,railLiveScoreboardSec:X,pregameScoreboardSec:X,pregameWindowMin:X,idleSec:X,staleAfterSec:X,refreshDebounceSec:X,playReplayGapMs:X,weatherSec:X}).strict(),display:le({monitor:Bs([Vs("builtin"),X]),idleDimAfterFinal:ue()}).strict(),server:le({port:X.max(65535),devClientPort:X.max(65535),lanAccess:ue()}).strict(),reducedMotion:ue(),autoFocus:ue()}).strict().superRefine((n,e)=>{n.server.port===n.server.devClientPort&&e.addIssue({code:"custom",path:["server","devClientPort"],message:"must differ from server.port"}),n.intervals.watchlistLiveSummarySec<5&&e.addIssue({code:"custom",path:["intervals","watchlistLiveSummarySec"],message:"under 5 s is too aggressive for ESPN"})});class Zs extends Error{}function Js(n){try{return new Intl.DateTimeFormat("en-US",{timeZone:n}),!0}catch{return!1}}function Gs(n){const e=js.safeParse(n);if(e.success)return e.data;const t=e.error.issues.map(s=>`  - ${s.path.join(".")||"(root)"}: ${s.message}`);throw new Zs(`config.json is invalid:
${t.join(`
`)}`)}class Us{constructor(e){T(this,"startedAt",new Date);T(this,"leagues",new Map);for(const t of Et){const s=e.leagues[t];this.leagues.set(t,{league:t,label:s.label,enabled:s.enabled,state:s.enabled?"idle":"disabled",lastPollAt:null,lastSuccessAt:null,consecutiveErrors:0,lastError:null})}}get started(){return this.startedAt}recordPoll(e,t){const s=this.leagues.get(e);if(!s)return;const a=new Date().toISOString();s.lastPollAt=a,t===void 0?(s.state="ok",s.lastSuccessAt=a,s.consecutiveErrors=0,s.lastError=null):(s.state="error",s.consecutiveErrors+=1,s.lastError=t instanceof Error?t.message:String(t))}report(e){const t=new Date,s=[...this.leagues.values()].map(a=>({...a}));return{ok:s.every(a=>a.state!=="error"),startedAt:this.startedAt.toISOString(),now:t.toISOString(),uptimeSec:Math.round((t.getTime()-this.startedAt.getTime())/1e3),sseClients:e,leagues:s}}}function oe(...n){return n.filter(Boolean).join("/").replace(/[\\/]+/g,"/")}function Hs(n){const e=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));return e>0?n.slice(0,e):"."}function Ys(n){return typeof n=="string"?n:n.href}const Ot=()=>{throw new Error("Not available in the browser")},Xs=Ot,Ks=Ot;class Nn{}T(Nn,"fromWeb",Ot);var qs={LOCALAPPDATA:"local"};const Je=oe(qs.LOCALAPPDATA,"SportsDashboard"),De=oe(Je,"logs");oe(Je,"chrome-profile");var Qs={};const ea=7;let Ze=!0,xn="";function ta(){return new Date().toISOString().slice(0,10)}function na(n){xn=n;try{Sn(De,{recursive:!0});const e=vt(De).filter(t=>/^sports-\d{4}-\d{2}-\d{2}\.log$/.test(t)).sort();for(const t of e.slice(0,Math.max(0,e.length-ea)))ls(oe(De,t),{force:!0});Ze=!0}catch{Ze=!1}}const sa=Qs.SPORTS_LOG_DEBUG==="1";function Le(n,e,t){const s=ta();s!==xn&&na(s);const a=`${new Date().toISOString()} ${n.toUpperCase().padEnd(5)} ${e}${t===void 0?"":" "+aa(t)}`;if((n!=="debug"||sa)&&(n==="error"?console.error:n==="warn"?console.warn:console.log)(a),!!Ze)try{cs(oe(De,`sports-${s}.log`),a+`
`)}catch{Ze=!1}}function aa(n){try{return JSON.stringify(n)}catch{return String(n)}}const G={debug:(n,e)=>Le("debug",n,e),info:(n,e)=>Le("info",n,e),warn:(n,e)=>Le("warn",n,e),error:(n,e)=>Le("error",n,e)},ra="SportsDashboard/0.1 (personal, local use)",oa=oe(Je,"simulate-offline"),ia=()=>Ee(oa);class ie extends Error{constructor(e,t,s){super(e),this.url=t,this.status=s}}const an=n=>new Promise(e=>setTimeout(e,n));class Ge{constructor(e){T(this,"cache",new Map);T(this,"lastGoodValues",new Map);T(this,"inflight",new Map);T(this,"listeners",new Set);T(this,"recent",[]);T(this,"gate",Promise.resolve());T(this,"lastStart",0);T(this,"counters",{requests:0,errors:0,cacheHits:0});T(this,"peak",{perMinute:0,at:""});this.opts=e}get name(){return this.opts.name}async getJson(e,t={}){const s=t.ttlMs??this.opts.defaultTtlMs??0,a=this.cache.get(e);if(a&&s>0&&Date.now()-a.at<Math.min(s,a.ttl))return this.counters.cacheHits++,a.value;const r=this.inflight.get(e);if(r)return r;const o=this.fetchWithRetry(e,t).then(c=>(s>0&&this.store(e,c,s),this.lastGoodValues.set(e,c),c)).finally(()=>this.inflight.delete(e));return this.inflight.set(e,o),o}lastGood(e){return this.lastGoodValues.get(e)}clearCache(){this.cache.clear()}onResponse(e){return this.listeners.add(e),()=>this.listeners.delete(e)}stats(){return this.trimRecent(),{...this.counters,lastMinute:this.recent.length,peakPerMinute:this.peak.perMinute,peakAt:this.peak.at||void 0}}async fetchWithRetry(e,t){const s=t.retries??this.opts.retries??2;let a;for(let r=0;r<=s;r++)try{return await this.fetchOnce(e,t.timeoutMs??this.opts.timeoutMs??12e3)}catch(o){a=o;const c=o instanceof ie?o.status:void 0;if(!(c===void 0||c===408||c===429||c>=500)||r===s)break;const d=o instanceof rn?o.retryAfterMs:0,m=Math.min(3e4,1e3*2**r)*(.75+Math.random()*.5);await an(Math.max(d,m))}throw this.counters.errors++,a instanceof ie?a:new ie(String(a),e)}async fetchOnce(e,t){if(await this.waitTurn(),ia())throw new ie("simulated offline (outage drill)",e);const s=Date.now();this.counters.requests++,this.recent.push(s),this.trimRecent(),this.recent.length>this.peak.perMinute&&(this.peak={perMinute:this.recent.length,at:new Date(s).toISOString()});let a;try{a=await fetch(e,{headers:"document"in globalThis?{Accept:"application/json"}:{"User-Agent":this.opts.userAgent??ra,Accept:"application/json"},signal:AbortSignal.timeout(t)})}catch(d){const m=d instanceof Error&&d.name==="TimeoutError"?`timeout after ${t} ms`:d instanceof Error?d.message:String(d);throw G.debug(`${this.opts.name} GET failed ${Date.now()-s}ms ${e}: ${m}`),new ie(m,e)}const r=await a.text(),o=Date.now()-s;if(G.debug(`${this.opts.name} GET ${a.status} ${o}ms ${(r.length/1024).toFixed(1)}KB ${e}`),!a.ok){const d=Number(a.headers.get("retry-after"));throw a.status===429&&Number.isFinite(d)&&d>0?new rn("HTTP 429",e,429,d*1e3):new ie(`HTTP ${a.status}`,e,a.status)}let c;try{c=JSON.parse(r)}catch{throw new ie("response is not JSON",e,a.status)}const l={client:this.opts.name,url:e,status:a.status,fetchedAt:new Date(s).toISOString(),ms:o,bytes:r.length,body:c};for(const d of this.listeners)try{d(l)}catch(m){G.warn(`${this.opts.name} response listener failed: ${String(m)}`)}return c}waitTurn(){const e=this.opts.minIntervalMs??0;if(e<=0)return Promise.resolve();const t=this.gate.then(async()=>{const s=this.lastStart+e-Date.now();s>0&&await an(s),this.lastStart=Date.now()});return this.gate=t,t}store(e,t,s){this.cache.set(e,{at:Date.now(),ttl:s,value:t});const a=this.opts.maxCacheEntries??500;for(;this.cache.size>a;){const r=this.cache.keys().next().value;if(r===void 0)break;this.cache.delete(r)}}trimRecent(){const e=Date.now()-6e4;for(;this.recent.length&&this.recent[0]<e;)this.recent.shift()}}class rn extends ie{constructor(e,t,s,a){super(e,t,s),this.retryAfterMs=a}}function Ue(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)?n:void 0}function E(n){return Array.isArray(n)?n:[]}function f(n){if(typeof n=="string")return n;if(typeof n=="number"&&Number.isFinite(n))return String(n)}function I(n){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n=="string"&&n.trim()!==""){const e=Number(n);return Number.isFinite(e)?e:void 0}}function ae(n){return typeof n=="boolean"?n:void 0}function i(n,...e){let t=n;for(const s of e)if(typeof s=="number"){if(!Array.isArray(t))return;t=t[s]}else{const a=Ue(t);if(!a)return;t=a[s]}return t}const ca="https://geocoding.geo.census.gov/geocoder/locations/onelineaddress",la="https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_Gaz_zcta_national.zip",ot=oe(Je,"cache","gazetteer"),da=new Ge({name:"census",timeoutMs:3e4,retries:2,minIntervalMs:300}),on=n=>(n??"").toLowerCase().replace(/[^a-z]/g,"");async function ua(n,e){const t=`${ca}?benchmark=Public_AR_Current&format=json&address=${encodeURIComponent(n)}`,s=await da.getJson(t);for(const a of E(i(s,"result","addressMatches"))){const r=f(i(a,"addressComponents","zip")),o=f(i(a,"addressComponents","city")),c=e.zip&&r&&e.zip.slice(0,5)===r.slice(0,5),l=e.city&&o&&on(o)===on(e.city),d=I(i(a,"coordinates","y")),m=I(i(a,"coordinates","x"));if((c||l)&&d!==void 0&&m!==void 0)return{lat:d,lon:m,from:"census-address",matched:f(i(a,"matchedAddress"))}}}let it;async function fa(){var c;if(it)return it;let n=vt().find(l=>/_Gaz_zcta_national\.txt$/i.test(l));if(!n){const l=oe(ot,"zcta.zip");if(!Ee(l)){G.info(`Downloading the Census Gazetteer ZCTA file (about 1 MB) to ${ot}`);const d=await fetch(la,{headers:{"User-Agent":"SportsDashboard/0.1 (personal, local use)"}});if(!d.ok||!d.body)throw new Error(`Gazetteer download failed: HTTP ${d.status}`);await Ks(Nn.fromWeb(d.body),ds())}if(Xs(),n=vt().find(d=>/_Gaz_zcta_national\.txt$/i.test(d)),!n)throw new Error("Gazetteer file not found after unzipping")}const e=new Map,t=Oe(oe(ot,n)).split(/\r?\n/),s=(t[0]??"").split("	").map(l=>l.trim().toUpperCase()),a=s.indexOf("GEOID"),r=s.indexOf("INTPTLAT"),o=s.indexOf("INTPTLONG");for(const l of t.slice(1)){const d=l.split("	"),m=(c=d[a])==null?void 0:c.trim(),v=Number(d[r]),h=Number(d[o]);m&&Number.isFinite(v)&&Number.isFinite(h)&&e.set(m,{lat:v,lon:h})}return it=e,e}async function ma(n){if(!n)return;const e=(await fa()).get(n.slice(0,5));return e?{...e,from:"census-zip"}:void 0}const ha=new URL(""+new URL("venues-C5oYhl59.json",import.meta.url).href,import.meta.url),pa={"caesars superdome":"dome","ford field":"dome","jma wireless dome":"dome","tropicana field":"dome","us bank stadium":"dome","allegiant stadium":"dome","sofi stadium":"dome",alamodome:"dome","mercedesbenz stadium":"retractable-closed","att stadium":"retractable-closed","nrg stadium":"retractable-closed","state farm stadium":"retractable-closed","lucas oil stadium":"retractable-closed","american family field":"retractable-closed","chase field":"retractable-closed","daikin park":"retractable-closed","minute maid park":"retractable-closed","loandepot park":"retractable-closed","tmobile park":"retractable-closed","rogers centre":"retractable-closed","globe life field":"retractable-closed"},ct=(n,e)=>`${n}|${e??""}`,Tt=n=>n.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ").trim();function cn(n,e){const t=pa[Tt(n)];return t?{roof:t,roofSource:"known"}:e===!0?{roof:"dome",roofSource:"espn"}:e===!1?{roof:"outdoor",roofSource:"espn"}:{roof:"outdoor",roofSource:"default"}}const ya=n=>n.roof==="outdoor"||n.roof==="retractable-open";class ga{constructor(e=ha){T(this,"entries",new Map);T(this,"pending",new Map);this.file=e,this.load()}load(){if(this.entries.clear(),!!Ee(this.file))try{const e=JSON.parse(Oe(this.file,"utf8"));for(const t of e.venues??[])t&&t.name&&this.entries.set(t.key??ct(t.name,t.city),t)}catch(e){G.warn(`config/venues.json could not be read: ${e instanceof Error?e.message:e}`)}}all(){return[...this.entries.values()].sort((e,t)=>`${e.state}${e.city}${e.name}`.localeCompare(`${t.state}${t.city}${t.name}`))}save(){const e={_note:'Generated by `npm run venues`, then kept up to date by the server. Edit freely: roof = outdoor | dome | retractable-open | retractable-closed (weather shows for outdoor and retractable-open only). Hand-typed lat/lon win when coordsFrom is "manual".',venues:this.all()};wn(this.file,JSON.stringify(e,null,2)+`
`)}find(e){if(e!=null&&e.name){if(e.id){for(const t of this.entries.values())if(t.espnVenueId===e.id)return t}return this.entries.get(ct(e.name,e.city))??[...this.entries.values()].find(t=>Tt(t.name)===Tt(e.name)&&(!e.city||!t.city||t.city===e.city))}}async ensure(e,t,s){if(!e.name)return;const a=this.find(e);if(a){let l=!1;return e.id&&!a.espnVenueId&&(a.espnVenueId=e.id,l=!0),e.indoor!==void 0&&a.espnIndoor===void 0&&(a.espnIndoor=e.indoor,a.roofSource==="default"&&Object.assign(a,cn(a.name,e.indoor)),l=!0),a.leagues.includes(t)||(a.leagues.push(t),l=!0),a.lat===void 0&&(l=await this.locate(a)||l),l&&this.trySave(),a}const r=ct(e.name,e.city),o=this.pending.get(r);if(o)return o;const c=(async()=>{const l={key:r,name:e.name,city:e.city,state:e.state,zip:e.zip,espnVenueId:e.id,espnIndoor:e.indoor,...cn(e.name,e.indoor),address:s,leagues:[t]};return await this.locate(l),this.entries.set(r,l),this.trySave(),G.info(`Added venue ${l.name} (${l.city??"?"}): roof ${l.roof}, coords from ${l.coordsFrom??"none"}`),l})().finally(()=>this.pending.delete(r));return this.pending.set(r,c),c}async locate(e){if(e.coordsFrom==="manual"&&e.lat!==void 0&&e.lon!==void 0)return!1;try{const t=(e.address?await ua(e.address,{zip:e.zip,city:e.city}):void 0)??await ma(e.zip);return t?(e.lat=Math.round(t.lat*1e5)/1e5,e.lon=Math.round(t.lon*1e5)/1e5,e.coordsFrom=t.from,!0):!1}catch(t){return G.warn(`Geocoding ${e.name} failed: ${t instanceof Error?t.message:t}`),!1}}trySave(){try{this.save()}catch(e){G.warn(`Could not write ${Ys(this.file)}: ${e instanceof Error?e.message:e}`)}}}const En="https://api-web.nhle.com/v1",Rt=new Ge({name:"nhl",timeoutMs:12e3,retries:2}),lt=n=>(n??"").toLowerCase().replace(/[^a-z]/g,""),va={TB:"TBL",NJ:"NJD",SJ:"SJS",LA:"LAK",UTAH:"UTA",WSH:"WSH",VGK:"VGK"};function ba(n){return new Intl.DateTimeFormat("en-CA",{timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(n))}function ln(n,e){const t=lt(f(i(n,"name","default"))??f(i(n,"commonName","default")));if(t&&(t===lt(e.nickname)||t===lt(e.shortName)))return!0;const s=f(i(n,"abbrev"));return!!s&&!!e.abbreviation&&(s===e.abbreviation||s===va[e.abbreviation])}const dt=new Map;async function ka(n){const e=dt.get(n.id);if(e!==void 0)return e??void 0;const t=Date.parse(n.startTime??"");if(Number.isFinite(t)){for(const s of[0,-1,1]){const a=ba(t+s*864e5),r=await Rt.getJson(`${En}/score/${a}`,{ttlMs:10*6e4});for(const o of E(i(r,"games")))if(ln(i(o,"homeTeam"),n.home)&&ln(i(o,"awayTeam"),n.away)){const c=f(i(o,"id"));return dt.set(n.id,c??null),c}}dt.set(n.id,null)}}async function Ia(n){const e=await ka(n);if(e)return Rt.getJson(`${En}/gamecenter/${e}/play-by-play`,{ttlMs:n.status==="final"?36e5:0})}const wa={"shot-on-goal":"shot",goal:"goal","missed-shot":"miss",faceoff:"faceoff"},Sa=n=>n?n.replace(/^0(\d:)/,"$1"):void 0;function Ca(n,e){if(!n)return[];const t=f(i(n,"homeTeam","id")),s=f(i(n,"awayTeam","id")),a=new Map;for(const o of E(i(n,"rosterSpots"))){const c=f(i(o,"playerId")),l=f(i(o,"lastName","default")),d=f(i(o,"firstName","default"));c&&l&&a.set(c,d?`${d[0]}. ${l}`:l)}const r=[];for(const o of E(i(n,"plays"))){const c=wa[f(i(o,"typeDescKey"))??""];if(!c)continue;const l=i(o,"details");let d=I(i(l,"xCoord")),m=I(i(l,"yCoord"));if(d===void 0||m===void 0)continue;f(i(o,"homeTeamDefendingSide"))==="right"&&(d=-d,m=-m);const v=f(i(l,"eventOwnerTeamId")),h=v===t?e.home.id:v===s?e.away.id:void 0,g=f(i(l,"scoringPlayerId"))??f(i(l,"shootingPlayerId"))??f(i(l,"winningPlayerId"));r.push({id:f(i(o,"eventId"))??`${r.length}`,kind:c,teamId:h,x:d,y:m,period:I(i(o,"periodDescriptor","number")),clock:Sa(f(i(o,"timeInPeriod"))),player:g?a.get(g):void 0,shotType:f(i(l,"shotType"))})}return r}const ut=n=>{if(n.isGoal)return"goal";if(n.isShot)return"shot";const e=(n.type??"").toLowerCase();if(e==="missed"||e==="missed shot")return"miss";if(e==="face off"||e==="faceoff")return"faceoff"};function _a(n){if(n.sport!=="hockey")return[];const e=n.plays.filter(s=>s.x!==void 0&&s.y!==void 0&&ut(s)),t=new Map;for(const s of e){if(ut(s)==="faceoff"||!s.period||!s.x)continue;const r=s.teamId===n.home.id?1:s.teamId===n.away.id?-1:0;t.set(s.period,(t.get(s.period)??0)+r*Math.sign(s.x))}return e.map(s=>{const a=(t.get(s.period??0)??0)<0;return{id:s.id,kind:ut(s),teamId:s.teamId,x:a?-s.x:s.x,y:a?-s.y:s.y,period:s.period,clock:s.clock}})}var On={NWS_USER_AGENT:"browser"};const Aa="https://api.weather.gov";let dn;function Ta(){var n;return!!((n=On.NWS_USER_AGENT)!=null&&n.trim())}function Be(){var n;return dn??(dn=new Ge({name:"nws",userAgent:(n=On.NWS_USER_AGENT)==null?void 0:n.trim(),timeoutMs:15e3,retries:1,minIntervalMs:250})),dn}const Na=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Rn(n,e=!0,t){const s=(n??"").toLowerCase();if(s)return/thunder|t-storm|storm/.test(s)?"storm":/snow|sleet|flurr|ice|wintry/.test(s)?"snow":/rain|shower|drizzle/.test(s)?"rain":/fog|haze|smoke|mist/.test(s)?"fog":t!==void 0&&t>=20?"wind":/partly|mostly sunny|mostly clear|few clouds/.test(s)?e?"partly":"partly-night":/cloud|overcast/.test(s)?"cloudy":/sunny|clear|fair/.test(s)?e?"clear":"clear-night":e?"partly":"partly-night"}function xa(n){var s;const e=f(n);if(!e)return;const t=((s=e.match(/\d+/g))==null?void 0:s.map(Number))??[];return t.length?Math.max(...t):void 0}function Ea(n){const e=f(i(n,"startTime"));if(!e)return;const t=f(i(n,"temperatureUnit")),s=I(i(n,"temperature")),a=xa(i(n,"windSpeed")),r=f(i(n,"shortForecast"));return{time:e,tempF:s===void 0?void 0:t==="C"?Math.round(s*9/5+32):s,windMph:a,windDir:f(i(n,"windDirection")),precipPct:I(i(n,"probabilityOfPrecipitation","value"))??void 0,short:r,icon:Rn(r,i(n,"isDaytime")!==!1,a)}}const un=new Map;async function Oa(n,e){const t=`${n.toFixed(3)},${e.toFixed(3)}`,s=un.get(t);if(s)return s;const a=await Be().getJson(`${Aa}/points/${t}`,{ttlMs:24*36e5}),r=f(i(a,"properties","forecastHourly")),o=f(i(a,"properties","observationStations"));if(!r||!o)throw new Error("NWS points response is missing forecast links");const c={hourly:r,stations:o};return un.set(t,c),c}async function Ra(n,e,t,s){const a=await Oa(n,e);try{const L=await Be().getJson(a.hourly,{ttlMs:9e5}),O=E(i(L,"properties","periods")).map(Ea).filter(z=>!!z),B=O.findIndex((z,J)=>{var W;const V=Date.parse(z.time),H=Date.parse(((W=O[J+1])==null?void 0:W.time)??"")||V+36e5;return t>=V&&t<H});if(B>=0){const z=O.slice(B).filter(J=>Date.parse(J.time)<=s);return{now:O[B],hourly:z.length?z:[O[B]],source:"forecast",updatedAt:new Date().toISOString()}}}catch{}if(t-Date.now()>90*6e4)return;const r=await Be().getJson(a.stations,{ttlMs:24*36e5}),o=f(i(E(i(r,"features"))[0],"id"));if(!o)return;const c=await Be().getJson(`${o}/observations/latest`,{ttlMs:15*6e4}),l=i(c,"properties"),d=I(i(l,"temperature","value")),m=I(i(l,"windSpeed","value")),v=I(i(l,"windDirection","value")),h=f(i(l,"textDescription")),g=m===void 0?void 0:Math.round(m*.621371),C={time:f(i(l,"timestamp"))??new Date().toISOString(),tempF:d===void 0?void 0:Math.round(d*9/5+32),windMph:g,windDir:v===void 0?void 0:Na[Math.round(v/22.5)%16],short:h,icon:Rn(h,!0,g)};if(!(C.tempF===void 0&&!h))return{now:C,hourly:[C],source:"observation",updatedAt:new Date().toISOString()}}const La=2*36e5,Fa={football:4*36e5,baseball:3.5*36e5};function Ma(n,e){if(n.role!=="watch"||n.sport!=="football"&&n.sport!=="baseball"||n.status==="final"||n.status==="postponed"||n.status==="canceled")return!1;if(n.status==="pre"){const t=Date.parse(n.startTime??"");return Number.isFinite(t)&&t-e<=La}return!0}class Pa{constructor(e,t){T(this,"cache",new Map);T(this,"warned",!1);this.venues=e,this.refreshMs=t}async forGame(e,t){var r;if(!Ma(e,t))return;if(!Ta()){this.warned||G.warn("NWS_USER_AGENT is not set in .env; weather badges stay hidden"),this.warned=!0;return}const s=this.cache.get(e.id);if(s&&t-s.at<this.refreshMs)return s.weather;let a;try{const o=await this.venues.ensure({...e.venue,name:(r=e.venue)==null?void 0:r.name},e.league);if(o&&ya(o)&&o.lat!==void 0&&o.lon!==void 0){const c=Date.parse(e.startTime??"")||t,l=e.status==="pre"?Math.max(t,c):t;a=await Ra(o.lat,o.lon,l,c+(Fa[e.sport]??4*36e5))}}catch(o){G.warn(`Weather for ${e.shortName??e.id} failed: ${o instanceof Error?o.message:o}`)}return this.cache.set(e.id,{at:t,weather:a}),a}clear(){this.cache.clear()}}function Da(n){const e=(f(i(n,"name"))??"").toUpperCase(),t=f(i(n,"state"));return e.includes("POSTPONED")?"postponed":e.includes("CANCELED")||e.includes("CANCELLED")||e.includes("FORFEIT")?"canceled":e.includes("DELAY")||e.includes("SUSPENDED")?"delayed":e.includes("HALFTIME")||e.includes("END_PERIOD")||e.includes("INTERMISSION")?t==="post"?"final":"half":t==="in"?"live":t==="post"||i(n,"completed")===!0?"final":"pre"}function Ba(n){let e=f(i(n,"logo")),t=f(i(n,"logoDark"));for(const s of E(i(n,"logos"))){const a=E(i(s,"rel")).map(o=>f(o)),r=f(i(s,"href"));r&&(!t&&a.includes("dark")&&(t=r),!e&&a.includes("default")&&(e=r))}return{logo:e,logoDark:t}}function Va(n){const e=I(i(n,"curatedRank","current"))??I(i(n,"rank"));return e!==void 0&&e>=1&&e<=25?e:void 0}function Wa(n){for(const e of["records","record"]){const t=E(i(n,e)),s=t.find(r=>f(i(r,"type"))==="total"||f(i(r,"name"))==="overall")??t[0],a=f(i(s,"summary"))??f(i(s,"displayValue"));if(a)return a}}function $a(n){const e=i(n,"team"),t=f(i(n,"id"))??f(i(e,"id")),s=f(i(n,"homeAway"));if(!t||s!=="home"&&s!=="away")return;const a=E(i(n,"linescores")).map(r=>I(i(r,"value"))??I(i(r,"displayValue"))??null);return{id:t,homeAway:s,name:f(i(e,"displayName")),shortName:f(i(e,"shortDisplayName"))??f(i(e,"nickname"))??f(i(e,"location")),abbreviation:f(i(e,"abbreviation")),location:f(i(e,"location")),nickname:f(i(e,"name")),rank:Va(n),record:Wa(n),...Ba(e),color:f(i(e,"color")),alternateColor:f(i(e,"alternateColor")),score:I(i(n,"score"))??I(i(n,"score","value")),lineScores:a,winner:ae(i(n,"winner")),hits:I(i(n,"hits")),errors:I(i(n,"errors"))}}function fn(n,e){if(!n)return e;if(!e)return n;const t={...e,...Z(n)};return t.lineScores=n.lineScores.length>=e.lineScores.length?n.lineScores:e.lineScores,t}function Z(n){return Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0))}function za(n){const e=(n??"").toLowerCase();return e.includes("radio")?"radio":e.includes("stream")||e.includes("web")||e.includes("internet")?"streaming":e.includes("tv")?"tv":e?"other":void 0}function ja(n){const e=(n??"").toLowerCase();return e==="national"?"national":e==="home"?"home":e==="away"?"away":e?"other":void 0}function Za(...n){const e=[],t=new Set;for(const s of n)for(const a of E(s)){const r=f(i(a,"media","shortName"))??f(i(a,"media","name"))??f(i(a,"media","callLetters")),o=f(i(a,"market","type"))??f(i(a,"market")),c=f(i(a,"type","shortName"))??f(i(a,"type","slug")),l=r?[r]:E(i(a,"names")).map(d=>f(d)).filter(d=>!!d);for(const d of l){const m=ja(o)??(i(a,"isNational")===!0?"national":void 0),v=`${d.toLowerCase()}|${m??""}`;t.has(v)||(t.add(v),e.push(Z({network:d,type:za(c)??(r?void 0:"tv"),market:m,logo:f(i(a,"media","logo"))})))}}return e}function Fe(n){const e=f(n);if(e!==void 0)return/^(ev|even|pk|pick)/i.test(e.trim())?0:I(e.replace(/^[ou]/i,"").trim())}function Ja(n){if(!Ue(n))return;const e=Z({source:f(i(n,"provider","name")),details:f(i(n,"details")),spread:I(i(n,"spread")),total:I(i(n,"overUnder")),homeMoneyline:I(i(n,"homeTeamOdds","moneyLine"))??Fe(i(n,"moneyline","home","close","odds")),awayMoneyline:I(i(n,"awayTeamOdds","moneyLine"))??Fe(i(n,"moneyline","away","close","odds")),favoriteTeamId:i(n,"homeTeamOdds","favorite")===!0?f(i(n,"homeTeamOdds","teamId")):i(n,"awayTeamOdds","favorite")===!0?f(i(n,"awayTeamOdds","teamId")):void 0,openSpread:Fe(i(n,"pointSpread","home","open","line")),openTotal:Fe(i(n,"total","over","open","line"))});return e.details!==void 0||e.spread!==void 0||e.total!==void 0||e.homeMoneyline!==void 0?e:void 0}function Ga(n){const e=`${f(i(n,"provider","name"))??""} ${f(i(n,"details"))??""}`;return/\blive\b/i.test(e)||i(n,"isLive")===!0||i(n,"live")===!0}function Ua(...n){let e,t;for(const s of n)for(const a of E(s)){const r=Ja(a);r&&(Ga(a)?t??(t={...r,live:!0}):e??(e=r))}return{odds:e,liveOdds:t}}function Ha(...n){let e;for(const t of n){if(!Ue(t))continue;const s=Z({id:f(i(t,"id")),name:f(i(t,"fullName"))??f(i(t,"name")),city:f(i(t,"address","city")),state:f(i(t,"address","state")),zip:f(i(t,"address","zipCode")),indoor:ae(i(t,"indoor")),grass:ae(i(t,"grass"))});e=e?{...s,...Z(e)}:s}return e&&Object.keys(e).length?e:void 0}function Ya(n,e){const t=[];for(const s of E(n)){const a=f(i(s,"team","id"));for(const r of E(i(s,"leaders"))){const o=i(r,"leaders",0);o&&t.push(Z({category:f(i(r,"name"))??"leader",label:f(i(r,"displayName"))??f(i(r,"name"))??"Leader",teamId:a,athleteId:f(i(o,"athlete","id")),athlete:f(i(o,"athlete","shortName"))??f(i(o,"athlete","displayName")),value:f(i(o,"displayValue")),amount:I(i(o,"value"))}))}}if(t.length)return t;for(const s of E(e))for(const a of E(i(s,"leaders")).slice(0,1))t.push(Z({category:f(i(s,"name"))??"leader",label:f(i(s,"displayName"))??"Leader",teamId:f(i(a,"team","id")),athleteId:f(i(a,"athlete","id")),athlete:f(i(a,"athlete","shortName"))??f(i(a,"athlete","displayName")),value:f(i(a,"displayValue")),amount:I(i(a,"value"))}));return t}function Ln(n){const e=new Map,t=new Map;for(const s of E(i(n,"boxscore","teams"))){const a=f(i(s,"homeAway"))==="home"?e:f(i(s,"homeAway"))==="away"?t:void 0;if(a)for(const r of E(i(s,"statistics"))){const o=f(i(r,"name"));if(!o)continue;const c=E(i(r,"stats"));if(c.length)for(const l of c){const d=f(i(l,"name")),m=f(i(l,"displayValue"));d&&m!==void 0&&a.set(`${o}.${d}`,{label:f(i(l,"abbreviation"))??f(i(l,"displayName"))??d,value:m})}else{const l=f(i(r,"displayValue"));l!==void 0&&!a.has(o)&&a.set(o,{label:f(i(r,"label"))??f(i(r,"abbreviation"))??o,value:l})}}}return{home:e,away:t}}function Xa(n,e){const{home:t,away:s}=Ln(n),a=[];for(const r of e){const o=t.get(r.key),c=s.get(r.key);!o&&!c||a.push(Z({key:r.key,label:r.label??(o==null?void 0:o.label)??(c==null?void 0:c.label)??r.key,home:o==null?void 0:o.value,away:c==null?void 0:c.value}))}return a}function He(n,e,t){const s=n?Xa(n,t):[],a=Ya(i(n,"leaders"),i(e,"competitions",0,"leaders"));return s.length||a.length?{stats:s,leaders:a}:void 0}function Ka(n,e,t){var z,J;const s=t.event,a=i(s,"competitions",0),r=i(t.summary,"header"),o=i(r,"competitions",0),c=f(i(s,"id"))??f(i(r,"id"))??f(i(o,"id"));if(!c)return;const l=V=>{const H=E(i(V,"competitors")).map($a);return{home:H.find(W=>(W==null?void 0:W.homeAway)==="home"),away:H.find(W=>(W==null?void 0:W.homeAway)==="away")}},d=l(a),m=l(o),v=fn(m.home,d.home),h=fn(m.away,d.away);if(!v||!h)return;v.rank===void 0&&(v.rank=(z=d.home)==null?void 0:z.rank),h.rank===void 0&&(h.rank=(J=d.away)==null?void 0:J.rank);const g=i(o,"status")??i(a,"status")??i(s,"status"),C=i(g,"type"),L=i(a,"status")??i(s,"status"),{odds:O,liveOdds:B}=Ua(i(t.summary,"pickcenter"),i(t.summary,"odds"),i(a,"odds"));return{id:c,league:n,sport:e,status:Da(C),statusDetail:f(i(C,"shortDetail"))??f(i(C,"detail")),startTime:f(i(o,"date"))??f(i(a,"date"))??f(i(s,"date")),period:I(i(g,"period"))??I(i(L,"period")),clock:f(i(g,"displayClock"))??f(i(L,"displayClock")),name:f(i(s,"name"))??[h.name,v.name].filter(Boolean).join(" at "),shortName:f(i(s,"shortName"))??[h.abbreviation,v.abbreviation].filter(Boolean).join(" @ "),venue:Ha(i(a,"venue"),i(t.summary,"gameInfo","venue")),neutralSite:ae(i(a,"neutralSite"))??ae(i(o,"neutralSite")),broadcasts:Za(i(a,"geoBroadcasts"),i(t.summary,"broadcasts"),i(o,"broadcasts"),i(a,"broadcasts")),home:v,away:h,odds:O,liveOdds:B,plays:[],sources:Z({scoreboardAt:s?t.scoreboardAt??new Date().toISOString():void 0,summaryAt:t.summary?t.summaryAt??new Date().toISOString():void 0})}}function Ye(n,e,t){const s=a=>{const r=Ka(n,e,a);if(r){try{t(r,a)}catch{}return r}};return{league:n,sport:e,game:s,scoreboard:(a,r)=>E(i(a,"events")).map(o=>s({event:o,scoreboardAt:r})).filter(o=>!!o)}}function Xe(n,e){const t=f(i(n,"id"));if(t)return Z({id:t,sequence:e,text:f(i(n,"text"))??f(i(n,"shortDescription"))??"",type:f(i(n,"type","text")),typeId:f(i(n,"type","id")),scoring:i(n,"scoringPlay")===!0,scoreValue:I(i(n,"scoreValue")),period:I(i(n,"period","number")),clock:f(i(n,"clock","displayValue")),homeScore:I(i(n,"homeScore")),awayScore:I(i(n,"awayScore")),teamId:f(i(n,"team","id")),wallclock:f(i(n,"wallclock"))})}function qa(n){if(!n)return;const e=/^(\d+):(\d+(?:\.\d+)?)$/.exec(n.trim());return e?Number(e[1])*60+Number(e[2]):I(n)}function Fn(n,e){const t=[];for(const s of E(i(n,"winprobability"))){const a=f(i(s,"playId")),r=I(i(s,"homeWinPercentage"));!a||r===void 0||t.push(Z({playId:a,sequence:e.get(a),homeWinPct:Math.min(1,Math.max(0,r)),tiePct:I(i(s,"tiePercentage"))}))}return t.length?t:void 0}const Qa=[{key:"batting.hits",label:"Hits"},{key:"batting.homeRuns",label:"HR"},{key:"batting.RBIs",label:"RBI"},{key:"batting.walks",label:"Walks"},{key:"batting.strikeouts",label:"Strikeouts"},{key:"batting.runnersLeftOnBase",label:"Left on base"},{key:"batting.stolenBases",label:"Stolen bases"},{key:"pitching.pitches",label:"Pitches"},{key:"pitching.strikeouts",label:"Pitcher K"},{key:"pitching.walks",label:"Pitcher BB"}],er=/start inning|end inning|start batter|end batter|play result|pitching change|offensive sub|defensive sub|game advisory/i;function Mn(n){const e=new Map;for(const t of E(i(n,"boxscore","players")))for(const s of E(i(t,"statistics"))){const a=f(i(s,"type"))??f(i(s,"name")),r=E(i(s,"keys")).map(o=>f(o)??"");for(const o of E(i(s,"athletes"))){const c=f(i(o,"athlete","id"));if(!c)continue;const l=E(i(o,"stats")).map(v=>f(v)),d=v=>l[r.indexOf(v)],m=e.get(c)??{name:f(i(o,"athlete","shortName"))??f(i(o,"athlete","displayName"))};if(a==="pitching"){m.pitches=I(d("pitches"))??I((d("pitches-strikes")??"").split("-")[0]);const v=d("fullInnings.partInnings");m.pitchingLine=[v&&`${v} IP`,d("hits")&&`${d("hits")} H`,d("earnedRuns")&&`${d("earnedRuns")} ER`,d("strikeouts")&&`${d("strikeouts")} K`].filter(Boolean).join(", ")}else if(a==="batting"){const v=d("hits-atBats"),h=[Number(d("homeRuns"))>0&&`${d("homeRuns")} HR`,Number(d("RBIs"))>0&&`${d("RBIs")} RBI`,Number(d("walks"))>0&&`${d("walks")} BB`].filter(Boolean);m.battingLine=[v,...h].filter(Boolean).join(", ")}e.set(c,m)}}return e}function tr(n){const e=E(n);if(!e.length)return;const t=s=>e.some(a=>f(i(a,"type"))===s);return{first:t("onFirst"),second:t("onSecond"),third:t("onThird")}}function nr(n,e){var o,c,l;const{summary:t,event:s}=e,a=Mn(t),r=[];for(const d of E(i(t,"plays"))){const m=Xe(d,r.length);if(!m)continue;const v=(o=f(i(d,"period","type")))==null?void 0:o.toLowerCase(),h=E(i(d,"participants")),g=O=>f(i(h.find(B=>f(i(B,"type"))===O),"athlete","id")),C=f(i(d,"type","type"))==="play-result",L=i(d,"resultCount")??i(d,"pitchCount");r.push(Z({...m,half:v==="top"||v==="bottom"?v:void 0,atBatId:f(i(d,"atBatId")),bases:tr(h),outs:I(i(d,"outs")),balls:I(i(L,"balls")),strikes:I(i(L,"strikes")),batterId:g("batter"),pitcherId:g("pitcher"),batterName:(c=a.get(g("batter")??""))==null?void 0:c.name,pitcherName:(l=a.get(g("pitcher")??""))==null?void 0:l.name,result:C?f(i(d,"alternativeType","text"))??m.type:void 0,isPitch:!C&&!er.test(m.type??"")&&I(i(d,"atBatPitchNumber"))!==void 0?!0:void 0}))}n.plays=r,n.box=He(t,s,Qa),n.situation=sr(n,r,t,i(s,"competitions",0,"situation"))}function sr(n,e,t,s){const a=Mn(t),r=[...e].reverse().find(L=>L.batterId)??e.at(-1),o=r!=null&&r.bases?r:[...e].reverse().find(L=>L.bases),c=f(i(s,"pitcher","athlete","id"))??(r==null?void 0:r.pitcherId),l=f(i(s,"batter","athlete","id"))??(r==null?void 0:r.batterId),d=s&&(i(s,"onFirst")!==void 0||i(s,"onSecond")!==void 0||i(s,"onThird")!==void 0)?{first:i(s,"onFirst")===!0,second:i(s,"onSecond")===!0,third:i(s,"onThird")===!0}:void 0,m=r==null?void 0:r.half,v=m==="top"?n.away.id:m==="bottom"?n.home.id:void 0,h=c?a.get(c):void 0,g=l?a.get(l):void 0,C=Z({sport:"baseball",half:m,balls:I(i(s,"balls"))??(r==null?void 0:r.balls),strikes:I(i(s,"strikes"))??(r==null?void 0:r.strikes),outs:I(i(s,"outs"))??(r==null?void 0:r.outs),bases:d??(o==null?void 0:o.bases),battingTeamId:v,pitcher:c||h?Z({id:c,name:f(i(s,"pitcher","athlete","shortName"))??(h==null?void 0:h.name),pitches:h==null?void 0:h.pitches,line:f(i(s,"pitcher","summary"))??(h==null?void 0:h.pitchingLine)}):void 0,batter:l||g?Z({id:l,name:f(i(s,"batter","athlete","shortName"))??(g==null?void 0:g.name),line:f(i(s,"batter","summary"))??(g==null?void 0:g.battingLine)}):void 0});return Object.keys(C).length>1?C:void 0}const ar=()=>Ye("mlb","baseball",nr),rr=[{key:"fieldGoalPct",label:"FG%"},{key:"threePointFieldGoalPct",label:"3P%"},{key:"totalRebounds",label:"Rebounds"},{key:"totalTurnovers",label:"Turnovers"},{key:"fieldGoalsMade-fieldGoalsAttempted",label:"FG"},{key:"threePointFieldGoalsMade-threePointFieldGoalsAttempted",label:"3PT"},{key:"freeThrowsMade-freeThrowsAttempted",label:"FT"},{key:"freeThrowPct",label:"FT%"},{key:"assists",label:"Assists"},{key:"steals",label:"Steals"},{key:"blocks",label:"Blocks"},{key:"offensiveRebounds",label:"Off. reb"},{key:"pointsInPaint",label:"Paint"},{key:"fastBreakPoints",label:"Fast break"},{key:"fouls",label:"Fouls"},{key:"largestLead",label:"Largest lead"}],or=7,ir=10;function mn(n){const e=I(n);return e!==void 0&&e>=-5&&e<=100?e:void 0}function cr(n,e){const{summary:t,event:s}=e,a=[];for(const r of E(i(t,"plays"))){const o=Xe(r,a.length);if(!o)continue;const c=(o.type??"").toLowerCase(),l=i(r,"shootingPlay")===!0;a.push(Z({...o,isShot:l||void 0,made:l?o.scoring:void 0,pointsAttempted:I(i(r,"pointsAttempted")),isFoul:c.includes("foul")&&!c.includes("technical")||void 0,isTimeout:c.includes("timeout")||void 0,x:mn(i(r,"coordinate","x")),y:mn(i(r,"coordinate","y"))}))}n.plays=a,n.winProbability=Fn(t,new Map(a.map(r=>[r.id,r.sequence]))),n.box=He(t,s,rr),n.situation=lr(n,a,s)}function lr(n,e,t){var v;const{home:s,away:a}=n,r=n.period??((v=[...e].reverse().find(h=>h.period!==void 0))==null?void 0:v.period)??1,o=h=>r<=1?h.period===1:(h.period??0)>=2,c=h=>e.filter(g=>g.isFoul&&g.teamId===h&&o(g)).length,l=e.length?c(s.id):void 0,d=e.length?c(a.id):void 0,m=h=>h===void 0?void 0:h>=ir?"double":h>=or?"bonus":void 0;return Z({sport:"basketball",homeFouls:l,awayFouls:d,homeBonus:m(d),awayBonus:m(l),possessionTeamId:f(i(t,"competitions",0,"situation","possession")),run:dr(e)})}function dr(n){const e=n.filter(o=>o.scoring&&o.teamId&&(o.scoreValue??0)>0),t=e.at(-1);if(!(t!=null&&t.teamId))return;let s=0,a=0,r={points:0,against:0};for(let o=e.length-1;o>=0;o--){const c=e[o],l=c.scoreValue??0;if(c.teamId===t.teamId)s+=l,r={points:s,against:a};else{if(a+l>4)break;a+=l}}return r.points>=8&&r.points-r.against>=6?{teamId:t.teamId,...r}:void 0}const ur=()=>Ye("mcbb","basketball",cr),fr=[{key:"totalYards",label:"Total yards"},{key:"netPassingYards",label:"Passing"},{key:"rushingYards",label:"Rushing"},{key:"turnovers",label:"Turnovers"},{key:"thirdDownEff",label:"3rd down"},{key:"possessionTime",label:"Possession"},{key:"firstDowns",label:"1st downs"},{key:"completionAttempts",label:"Comp/Att"},{key:"yardsPerPass",label:"Yards/pass"},{key:"rushingAttempts",label:"Rushes"},{key:"yardsPerRushAttempt",label:"Yards/rush"},{key:"fourthDownEff",label:"4th down"},{key:"totalPenaltiesYards",label:"Penalties"},{key:"fumblesLost",label:"Fumbles lost"},{key:"interceptions",label:"Interceptions thrown"},{key:"sacksYardsLost",label:"Sacks-yards"},{key:"redZoneAttempts",label:"Red zone"}];function mr(n,e,t,s){if(!(n===void 0||!e)){if(e===t.id)return 100-n;if(e===s.id)return n}}function Pn(n,e,t){if(!n)return;const s=n.trim();if(/^50$/.test(s)||/\b50\b$/.test(s))return 50;const a=/^([A-Za-z&.' -]+?)\s+(\d{1,2})$/.exec(s);if(!a)return;const r=a[1].trim().toUpperCase(),o=Number(a[2]);if(r===(e.abbreviation??"").toUpperCase())return o;if(r===(t.abbreviation??"").toUpperCase())return 100-o}function Me(n,e,t){if(!n)return;const s=f(i(n,"team","id")),a=f(i(n,"possessionText"))??f(i(n,"text")),r=Pn(a,e,t)??I(i(n,"yardLine"))??mr(I(i(n,"yardsToEndzone")),s,e,t),o=I(i(n,"down")),c=Z({x:r!==void 0?Math.min(100,Math.max(0,r)):void 0,down:o!==void 0&&o>=1&&o<=4?o:void 0,distance:I(i(n,"distance")),text:a,downDistanceText:f(i(n,"downDistanceText")),possessionTeamId:s});return Object.keys(c).length?c:void 0}const hr=/timeout|end of|end period|two-minute|official|coin toss|end game/i;function pr(n,e){const{summary:t,event:s}=e,{home:a,away:r}=n,o=[...E(i(t,"drives","previous"))],c=i(t,"drives","current"),l=f(i(c,"id"));c&&l&&!o.some(g=>f(i(g,"id"))===l)&&o.push(c);const d=[],m=new Set,v=[],h=(g,C)=>{const L=Xe(g,d.length);if(!L||m.has(L.id))return;m.add(L.id);const O=Me(i(g,"start"),a,r),B=Me(i(g,"end"),a,r);d.push(Z({...L,teamId:L.teamId??(O==null?void 0:O.possessionTeamId)??f(i(g,"teamParticipants",0,"id")),start:O,end:B,yards:I(i(g,"statYardage")),isTurnover:ae(i(g,"isTurnover")),isPenalty:ae(i(g,"isPenalty")),driveId:C}))};for(const g of o){const C=f(i(g,"id")),L=E(i(g,"plays"));for(const O of L)h(O,C);C&&v.push(Z({id:C,teamId:f(i(g,"team","id")),description:f(i(g,"description")),start:Me(i(g,"start"),a,r),end:Me(i(g,"end"),a,r),result:f(i(g,"result")),displayResult:f(i(g,"displayResult")),isScore:ae(i(g,"isScore")),yards:I(i(g,"yards")),offensivePlays:I(i(g,"offensivePlays")),timeElapsed:f(i(g,"timeElapsed","displayValue")),playIds:L.map(O=>f(i(O,"id"))).filter(O=>!!O),inProgress:C===l&&n.status!=="final"?!0:void 0}))}if(!d.length)for(const g of E(i(t,"plays")))h(g);n.plays=d,v.length&&(n.drives=v),n.winProbability=Fn(t,new Map(d.map(g=>[g.id,g.sequence]))),n.box=He(t,s,fr),n.situation=yr(i(s,"competitions",0,"situation"),d,a,r)}function yr(n,e,t,s){var C,L,O,B,z,J;const a=[...e].reverse().find(V=>V.end&&!hr.test(V.type??"")),r=f(i(n,"lastPlay","id")),o=r?e.findIndex(V=>V.id===r):-1,l=a!==void 0&&o>=0&&o<a.sequence?{homeTimeouts:i(n,"homeTimeouts"),awayTimeouts:i(n,"awayTimeouts")}:n,d=f(i(l,"possession"))??((C=a==null?void 0:a.end)==null?void 0:C.possessionTeamId),m=f(i(l,"possessionText"))??((L=a==null?void 0:a.end)==null?void 0:L.text),v=Pn(m,t,s)??((O=a==null?void 0:a.end)==null?void 0:O.x)??I(i(l,"yardLine")),h=I(i(l,"down"))??((B=a==null?void 0:a.end)==null?void 0:B.down),g=Z({sport:"football",possessionTeamId:d,down:h!==void 0&&h>=1&&h<=4?h:void 0,distance:I(i(l,"distance"))??((z=a==null?void 0:a.end)==null?void 0:z.distance),ballX:v,yardLineText:m,downDistanceText:f(i(l,"downDistanceText"))??((J=a==null?void 0:a.end)==null?void 0:J.downDistanceText),isRedZone:ae(i(l,"isRedZone"))??(h!==void 0&&h>=1?gr(v,d,t,s):void 0),homeTimeouts:I(i(l,"homeTimeouts")),awayTimeouts:I(i(l,"awayTimeouts"))});return Object.keys(g).length>1?g:void 0}function gr(n,e,t,s){if(!(n===void 0||!e)){if(e===t.id)return n>=80;if(e===s.id)return n<=20}}const hn=n=>Ye(n,"football",pr),vr=[{key:"shotsTotal",label:"Shots"},{key:"powerPlayGoals",label:"PP goals"},{key:"powerPlayOpportunities",label:"PP chances"},{key:"faceoffPercent",label:"Faceoff %"},{key:"hits",label:"Hits"},{key:"blockedShots",label:"Blocked"},{key:"penaltyMinutes",label:"PIM"},{key:"giveaways",label:"Giveaways"},{key:"takeaways",label:"Takeaways"}],br=1200;function kr(n){const e=(n??"").toLowerCase();if(e.includes("power"))return"powerPlay";if(e.includes("short"))return"shorthanded";if(e.includes("even"))return"even"}function pn(n){const e=I(n);return e!==void 0&&Math.abs(e)<=200?e:void 0}function ft(n){const e=qa(n.clock);if(!(n.period===void 0||e===void 0))return(n.period-1)*br+e}function Ir(n,e){const{summary:t,event:s}=e,a=[];for(const r of E(i(t,"plays"))){const o=Xe(r,a.length);if(!o)continue;const c=(f(i(r,"type","abbreviation"))??"").toLowerCase(),l=(o.type??"").toLowerCase(),d=I(i(r,"type","penaltyMinutes"));a.push(Z({...o,strength:kr(f(i(r,"strength","text"))),isGoal:c==="goal"||l==="goal"||void 0,isShot:c==="shot-on-goal"||l==="shot"||c==="goal"||l==="goal"||void 0,isPenalty:d!==void 0||void 0,penaltyMinutes:d,x:pn(i(r,"coordinate","x")),y:pn(i(r,"coordinate","y"))}))}n.plays=a,n.box=He(t,s,vr),n.situation=wr(n,a,t,s)}function wr(n,e,t,s){var z,J;const{home:a,away:r}=n,o=Ln(t),c=V=>e.filter(H=>H.isShot&&H.teamId===V).length,l=I((z=o.home.get("shotsTotal"))==null?void 0:z.value)??(e.length?c(a.id):void 0),d=I((J=o.away.get("shotsTotal"))==null?void 0:J.value)??(e.length?c(r.id):void 0),m=V=>{const H=E(i(s,"competitions",0,"competitors")).find(W=>f(i(W,"homeAway"))===V);return I(i(E(i(H,"statistics")).find(W=>f(i(W,"name"))==="saves"),"displayValue"))},v=m("home")??(d!==void 0&&r.score!==void 0?Math.max(0,d-r.score):void 0),h=m("away")??(l!==void 0&&a.score!==void 0?Math.max(0,l-a.score):void 0),g=[...e].reverse().find(V=>V.isGoal),C=n.status==="live"||n.status==="half"?Sr(e):[],L=C.filter(V=>V.teamId===a.id).length,O=C.filter(V=>V.teamId===r.id).length,B=L>O?r.id:O>L?a.id:void 0;return Z({sport:"hockey",homeShots:l,awayShots:d,homeSaves:v,awaySaves:h,powerPlayTeamId:B,penalties:C,lastGoal:g?Z({teamId:g.teamId,text:g.text,period:g.period,clock:g.clock}):void 0})}function Sr(n){const e=[...n].reverse().find(a=>ft(a)!==void 0),t=e?ft(e):void 0;if(t===void 0)return[];const s=[];for(const a of n){const r=ft(a);if(r!==void 0){for(let o=s.length-1;o>=0;o--)s[o].end<=r&&s.splice(o,1);if(a.isPenalty&&a.penaltyMinutes&&a.penaltyMinutes<10&&s.push({teamId:a.teamId,player:a.text,minutes:a.penaltyMinutes,remainingSec:0,start:r,end:r+a.penaltyMinutes*60}),a.isGoal&&a.teamId){const o=s.findIndex(l=>l.teamId!==a.teamId&&l.minutes===2),c=s.filter(l=>l.teamId!==a.teamId).length>s.filter(l=>l.teamId===a.teamId).length;o>=0&&c&&s.splice(o,1)}}}return s.filter(a=>a.end>t).map(({start:a,end:r,...o})=>({...o,remainingSec:r-t}))}const Cr=()=>Ye("nhl","hockey",Ir),mt={cfb:hn("cfb"),nfl:hn("nfl"),nhl:Cr(),mlb:ar(),mcbb:ur()},ye="https://site.api.espn.com/apis/site/v2/sports",_r="https://sports.core.api.espn.com/v2/sports",te=new Ge({name:"espn",timeoutMs:12e3,retries:2}),Pe=encodeURIComponent;function Ar(n){const[e="",t=""]=n.split("/");return{sport:e,league:t}}const pe={scoreboard(n,e={}){const t=new URLSearchParams;return e.dates&&t.set("dates",e.dates),e.groups&&t.set("groups",e.groups),e.seasontype&&t.set("seasontype",String(e.seasontype)),t.set("limit",String(e.limit??300)),`${ye}/${n}/scoreboard?${t}`},summary:(n,e)=>`${ye}/${n}/summary?event=${Pe(e)}`,teams:n=>`${ye}/${n}/teams?limit=1000`,team:(n,e)=>`${ye}/${n}/teams/${Pe(e)}`,schedule:(n,e,t)=>`${ye}/${n}/teams/${Pe(e)}/schedule${t?`?season=${t}`:""}`,rankings:n=>`${ye}/${n}/rankings`,coreGroup(n,e,t,s){const{sport:a,league:r}=Ar(n);return`${_r}/${a}/leagues/${r}/seasons/${e}/types/${t}/groups/${Pe(s)}`}},ht={scoreboard:(n,e,t=0)=>te.getJson(pe.scoreboard(n,e),{ttlMs:t}),summary:(n,e,t=0)=>te.getJson(pe.summary(n,e),{ttlMs:t}),teams:n=>te.getJson(pe.teams(n),{ttlMs:6*36e5}),team:(n,e)=>te.getJson(pe.team(n,e),{ttlMs:6*36e5}),schedule:(n,e,t)=>te.getJson(pe.schedule(n,e,t),{ttlMs:15*6e4}),rankings:n=>te.getJson(pe.rankings(n),{ttlMs:30*6e4}),coreGroup:(n,e,t,s)=>te.getJson(pe.coreGroup(n,e,t,s),{ttlMs:6*36e5}),getRaw:(n,e=15*6e4)=>te.getJson(`${ye}/${n}`,{ttlMs:e}),ref:n=>te.getJson(n.replace(/^http:\/\//,"https://"),{ttlMs:6*36e5})},Tr=new URL(""+new URL("espn-ids-7pS924iK.json",import.meta.url).href,import.meta.url);function Nr(n=Tr){if(Ee(n))try{const e=JSON.parse(Oe(n,"utf8"));return Ue(e.leagues)?e:void 0}catch{return}}const q=(n,e)=>JSON.stringify(n)===JSON.stringify(e);function yn(n){const e=({score:t,lineScores:s,winner:a,hits:r,errors:o,...c})=>c;return{league:n.league,startTime:n.startTime,name:n.name,venue:n.venue,neutralSite:n.neutralSite,broadcasts:n.broadcasts,home:e(n.home),away:e(n.away),role:n.role,pinned:n.pinned}}function xr(n,e){if(!n)return[{type:"game",data:{game:e}}];const t=e.id,s=new Map(n.plays.map(l=>[l.id,l])),a=new Set(e.plays.map(l=>l.id));if(n.plays.some(l=>!a.has(l.id))||!q(yn(n),yn(e)))return[{type:"game",data:{game:e}}];const o=[];(n.status!==e.status||n.statusDetail!==e.statusDetail||n.clock!==e.clock||n.period!==e.period)&&o.push({type:"status",data:{gameId:t,status:e.status,statusDetail:e.statusDetail,clock:e.clock,period:e.period}}),n.period!==e.period&&o.push({type:"period",data:{gameId:t,period:e.period}});for(const l of e.plays){const d=s.get(l.id);d?q({...d,sequence:0},{...l,sequence:0})||o.push({type:"play",data:{gameId:t,play:l,updated:!0}}):o.push({type:"play",data:{gameId:t,play:l}})}const c=l=>({score:l.score,lineScores:l.lineScores,winner:l.winner,hits:l.hits,errors:l.errors});return(!q(c(n.home),c(e.home))||!q(c(n.away),c(e.away)))&&o.push({type:"score",data:{gameId:t,home:c(e.home),away:c(e.away)}}),q(n.situation,e.situation)||o.push({type:"situation",data:{gameId:t,situation:e.situation}}),(!q(n.odds,e.odds)||!q(n.liveOdds,e.liveOdds))&&o.push({type:"odds",data:{gameId:t,odds:e.odds,liveOdds:e.liveOdds}}),q(n.weather,e.weather)||o.push({type:"weather",data:{gameId:t,weather:e.weather}}),(!q(n.drives,e.drives)||!q(n.winProbability,e.winProbability)||!q(n.box,e.box)||!q(n.rink,e.rink))&&o.push({type:"detail",data:{gameId:t,drives:e.drives,winProbability:e.winProbability,box:e.box,rink:e.rink}}),o}const Dn=8,Er=36*36e5;class Or{constructor(e){T(this,"pins",new Map);if(this.file=e,!(!e||!Ee(e)))try{const t=JSON.parse(Oe(e,"utf8")),s=Date.now();for(const[a,r]of Object.entries(t.pins??{})){const o=Date.parse(r);/^\d+$/.test(a)&&Number.isFinite(o)&&s-o<Er&&this.pins.set(a,o)}}catch(t){G.warn(`pins.json unreadable, starting with no pins: ${t instanceof Error?t.message:t}`)}}has(e){return this.pins.has(e)}get size(){return this.pins.size}ids(){return[...this.pins.keys()]}add(e){return this.pins.has(e)?!0:this.pins.size>=Dn?!1:(this.pins.set(e,Date.now()),this.save(),!0)}delete(e){const t=this.pins.delete(e);return t&&this.save(),t}save(){if(this.file)try{Sn(Hs(this.file),{recursive:!0});const e=Object.fromEntries([...this.pins].map(([t,s])=>[t,new Date(s).toISOString()]));wn(this.file,JSON.stringify({pins:e},null,2))}catch(e){G.warn(`Couldn't save pins.json: ${e instanceof Error?e.message:e}`)}}}const ke=new Set(["live","half","delayed"]),Rr=5*6e4,Lr=7,Fr=3e4;class Mr{constructor(e,t,s,a,r={}){T(this,"games",new Map);T(this,"leagues",new Map);T(this,"upcoming",[]);T(this,"focused");T(this,"lastRefreshAt",0);T(this,"timer");T(this,"watchIds",new Map);T(this,"railConfIds",new Map);T(this,"confIdsToQuery",new Map);T(this,"weather");T(this,"pins");var c;this.cfg=e,this.source=t,this.emit=s,this.health=a,this.opts=r,this.pins=new Or(r.pinsFile),this.weather=r.weather===!1?void 0:r.weather??new Pa(new ga,e.intervals.weatherSec*1e3);const o=Nr();o||G.warn("data/espn-ids.json is missing: run `npm run ids`. Watchlist games will not be recognized.");for(const l of t.leagues(e)){const d=o==null?void 0:o.leagues[l];this.watchIds.set(l,new Set((d==null?void 0:d.teams.map(h=>h.id))??[]));const m=new Set(Object.values((d==null?void 0:d.conferences)??{}).map(h=>h.id));this.railConfIds.set(l,e.leagues[l].rail.enabled?m:new Set);const v=new Set(m);for(const h of(d==null?void 0:d.teams)??[])(c=h.group)!=null&&c.isConference&&(l==="cfb"||l==="mcbb")&&v.add(h.group.id);this.confIdsToQuery.set(l,v),this.leagues.set(l,{nextAt:0,errors:0,inFlight:!1,nextScheduleAt:0})}}start(){var t,s;const e=this.opts.tickMs??1e3;this.timer=setInterval(()=>void this.tick(),e),(s=(t=this.timer).unref)==null||s.call(t),this.tick(),G.info(`Live engine started: ${this.source.describe()}; leagues ${[...this.leagues.keys()].join(", ")||"none"}`)}stop(){this.timer&&clearInterval(this.timer)}async tick(){const e=Date.now(),t=[];for(const[s,a]of this.leagues)!a.inFlight&&e>=a.nextAt&&t.push(this.pollLeague(s)),this.source.mode==="live"&&e>=a.nextScheduleAt&&(a.nextScheduleAt=e+this.cfg.intervals.idleSec*1e3,t.push(this.pollSchedules(s)));for(const s of this.games.values())this.summaryDue(s,e)&&t.push(this.pollSummary(s)),this.weather&&s.game&&!s.weatherInFlight&&e-(s.weatherCheckedAt??0)>=Fr&&t.push(this.pollWeather(s));this.checkStale(e),await Promise.allSettled(t)}snapshot(e="connect"){return{mode:this.source.mode,serverTime:new Date().toISOString(),games:[...this.games.values()].map(t=>t.game).filter(t=>!!t),upcoming:this.upcoming,leagues:[...this.leagues.values()].map(t=>t.lastPoll).filter(t=>!!t),reason:e}}focus(e){this.focused=e&&this.games.has(e)?e:void 0;const t=this.focused?this.games.get(this.focused):void 0;t&&!t.summary&&this.pollSummary(t)}onMain(e){return e.role==="watch"||this.pins.has(e.id)}pin(e,t){var a,r;const s=this.games.get(e);if(t){if(!(s!=null&&s.game))return{ok:!1,error:"That game is no longer on today’s list.",pinned:this.pins.ids()};if(s.role==="watch")return{ok:!1,error:"Your teams’ games are always on the main screen.",pinned:this.pins.ids()};if(!this.pins.add(e))return{ok:!1,error:`You can pin up to ${Dn} games. Unpin one first.`,pinned:this.pins.ids()};G.info(`Pinned ${s.game.shortName??e}`)}else{if(!this.pins.delete(e))return{ok:!0,pinned:this.pins.ids()};G.info(`Unpinned ${((a=s==null?void 0:s.game)==null?void 0:a.shortName)??e}`)}return s&&(this.rebuild(s),t&&ke.has(((r=s.game)==null?void 0:r.status)??"")&&this.pollSummary(s)),{ok:!0,pinned:this.pins.ids()}}async refresh(){var r;const e=Date.now(),t=this.cfg.intervals.refreshDebounceSec*1e3;if(e-this.lastRefreshAt<t)return{ignored:!0,retryInSec:Math.ceil((t-(e-this.lastRefreshAt))/1e3)};this.lastRefreshAt=e,this.source.clearCache(),(r=this.weather)==null||r.clear();for(const o of this.games.values())o.weatherCheckedAt=0;G.info("Force refresh");const s=await Promise.all([...this.leagues.entries()].map(async([o,c])=>{const l=Date.now();c.errors=0;const d=await this.pollLeague(o,!0),m=[...this.games.values()].filter(h=>{var g;return h.league===o&&(this.onMain(h)||h.id===this.focused)&&((g=h.game)==null?void 0:g.status)!=="pre"}),v=await Promise.allSettled(m.map(h=>this.pollSummary(h,!0)));return{league:o,ok:d.ok,games:[...this.games.values()].filter(h=>h.league===o).length,summaries:v.filter(h=>h.status==="fulfilled"&&h.value).length,ms:Date.now()-l,error:d.error}})),a={at:new Date().toISOString(),results:s};return this.emit("refresh",a),this.emit("snapshot",this.snapshot("refresh")),a}queries(e){var a;const t=this.datesFor(),s=[];for(const r of t){s.push({q:{dates:r},tag:"default"});for(const o of this.confIdsToQuery.get(e)??[])s.push({q:{dates:r,groups:o},tag:"conf",railConference:(a=this.railConfIds.get(e))==null?void 0:a.has(o)})}return s}datesFor(){const e=a=>{const r=new Intl.DateTimeFormat("en-CA",{timeZone:this.cfg.timezone,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",hourCycle:"h23"}).formatToParts(new Date(a)),o=c=>{var l;return((l=r.find(d=>d.type===c))==null?void 0:l.value)??""};return{date:`${o("year")}${o("month")}${o("day")}`,hour:Number(o("hour"))}},t=this.source.now(),s=e(t);return s.hour<6?[e(t-864e5).date,s.date]:[s.date]}async pollLeague(e,t=!1){var o,c,l;const s=this.leagues.get(e);if(s.inFlight&&!t)return s.lastPoll??{league:e,ok:!1,at:new Date().toISOString()};s.inFlight=!0;const a=mt[e],r=Date.now();try{const d=this.queries(e),m=await Promise.allSettled(d.map(g=>this.source.scoreboard(e,g.q)));if(m.filter(g=>g.status==="fulfilled").length===0)throw((o=m[0])==null?void 0:o.reason)??new Error("no scoreboard queries");const h=new Set;m.forEach((g,C)=>{if(g.status!=="fulfilled")return;const L=d[C];for(const O of E(i(g.value,"events"))){const B=f(i(O,"id"));if(!B||h.has(B))continue;const z=JSON.stringify(O),J=this.games.get(B);if(J!=null&&J.game&&J.eventJson===z){h.add(B),J.eventAt=r,J.lastSuccessAt=r;continue}const V=a.game({event:O});if(!V)continue;const H=this.roleFor(e,V,L);if(!H)continue;h.add(B);const W=this.games.get(B)??{id:B,league:e,role:H,stale:!1};W.role=W.role==="watch"?"watch":H,W.event=O,W.eventJson=z,W.eventAt=r,W.lastSuccessAt=r,this.games.set(B,W),this.rebuild(W)}});for(const g of[...this.games.values()])g.league===e&&!h.has(g.id)&&!ke.has(((c=g.game)==null?void 0:c.status)??"")&&(this.games.delete(g.id),this.pins.delete(g.id),this.emit("remove",{gameId:g.id}));s.errors=0,s.nextAt=Date.now()+this.cadenceMs(e),s.lastPoll={league:e,ok:!0,at:new Date(r).toISOString(),lastOkAt:new Date(r).toISOString()},this.health.recordPoll(e)}catch(d){s.errors+=1;const m=d instanceof Error?d.message:String(d),v=Math.min(Rr,this.cadenceMs(e)*2**s.errors);s.nextAt=Date.now()+v,s.lastPoll={league:e,ok:!1,at:new Date(r).toISOString(),lastOkAt:(l=s.lastPoll)==null?void 0:l.lastOkAt,error:m},this.health.recordPoll(e,d),G.warn(`${e} scoreboard failed (${s.errors} in a row), retrying in ${Math.round(v/1e3)}s: ${m}`)}finally{s.inFlight=!1}return this.emit("poll",s.lastPoll),s.lastPoll}roleFor(e,t,s){var o;if((o=this.source.forceWatch)!=null&&o.has(t.id))return"watch";const a=this.watchIds.get(e);if(!this.source.watchOnlyForced&&(a!=null&&a.has(t.home.id)||a!=null&&a.has(t.away.id)))return"watch";const r=this.cfg.leagues[e].rail;if(r.enabled&&(r.all||r.top25&&(t.home.rank!==void 0||t.away.rank!==void 0)||s.railConference))return"rail"}summaryDue(e,t){var r;if(e.summaryInFlight||!this.onMain(e)&&e.id!==this.focused)return!1;const s=(r=e.game)==null?void 0:r.status,a=t-(e.lastSummaryTry??0);return s&&ke.has(s)?a>=this.cfg.intervals.watchlistLiveSummarySec*1e3:s==="final"?!(i(e.summary,"header","competitions",0,"status","type","state")==="post")&&a>=6e4:!1}async pollSummary(e,t=!1){if(e.summaryInFlight&&!t)return!1;e.summaryInFlight=!0,e.lastSummaryTry=Date.now();try{if(e.summary=await this.source.summary(e.league,e.id),e.summaryAt=Date.now(),e.lastSuccessAt=e.summaryAt,e.league==="nhl"&&e.game&&this.source.nhlPlayByPlay)try{e.nhl=await this.source.nhlPlayByPlay(e.game)??e.nhl}catch(s){G.warn(`NHL feed for ${e.game.shortName??e.id} failed: ${s instanceof Error?s.message:s}`)}return this.rebuild(e),!0}catch(s){return G.warn(`${e.league} summary ${e.id} failed: ${s instanceof Error?s.message:s}`),!1}finally{e.summaryInFlight=!1}}async pollWeather(e){if(!(!this.weather||!e.game)){e.weatherInFlight=!0,e.weatherCheckedAt=Date.now();try{const t=await this.weather.forGame(e.game,this.source.now());JSON.stringify(t)!==JSON.stringify(e.weather)&&(e.weather=t,this.rebuild(e))}finally{e.weatherInFlight=!1}}}async pollSchedules(e){const t=mt[e],s=this.source.now(),a=s+Lr*864e5,r=[];for(const l of this.watchIds.get(e)??[])try{const d=await this.source.schedule(e,l);for(const m of E(i(d,"events"))){const v=t.game({event:m}),h=Date.parse((v==null?void 0:v.startTime)??"");if(!v||v.status!=="pre"||!Number.isFinite(h)||h<s||h>a)continue;const g=C=>({id:C.id,name:C.name,shortName:C.shortName,abbreviation:C.abbreviation,logo:C.logo,logoDark:C.logoDark,rank:C.rank,color:C.color});r.push({id:v.id,league:e,startTime:v.startTime,name:v.name,shortName:v.shortName,home:g(v.home),away:g(v.away),broadcasts:v.broadcasts,venue:v.venue})}}catch(d){G.warn(`${e} schedule for team ${l} failed: ${d instanceof Error?d.message:d}`)}const o=new Map(this.upcoming.filter(l=>l.league!==e).map(l=>[l.id,l]));for(const l of r)o.set(l.id,l);const c=[...o.values()].sort((l,d)=>(l.startTime??"").localeCompare(d.startTime??""));JSON.stringify(c)!==JSON.stringify(this.upcoming)&&(this.upcoming=c,this.emit("upcoming",{upcoming:c}))}cadenceMs(e){const t=this.cfg.intervals,s=[...this.games.values()].filter(o=>o.league===e);if(s.some(o=>{var c;return this.onMain(o)&&ke.has(((c=o.game)==null?void 0:c.status)??"")}))return t.leagueLiveScoreboardSec*1e3;if(s.some(o=>{var c;return ke.has(((c=o.game)==null?void 0:c.status)??"")}))return t.railLiveScoreboardSec*1e3;const a=this.source.now();return(s.some(o=>{var l,d;const c=Date.parse(((l=o.game)==null?void 0:l.startTime)??"");return((d=o.game)==null?void 0:d.status)==="pre"&&Number.isFinite(c)&&c-a<=t.pregameWindowMin*6e4})?t.pregameScoreboardSec:t.idleSec)*1e3}rebuild(e){const t=mt[e.league].game({event:e.event,summary:e.summary,scoreboardAt:e.eventAt?new Date(e.eventAt).toISOString():void 0,summaryAt:e.summaryAt?new Date(e.summaryAt).toISOString():void 0});if(!t)return;t.role=this.onMain(e)?"watch":"rail",this.pins.has(e.id)&&(t.pinned=!0),t.stale=e.stale,e.weather&&(t.weather=e.weather);const s=e.nhl?Ca(e.nhl,t):_a(t);s.length&&(t.rink=s),t.updatedAt=e.lastSuccessAt?new Date(e.lastSuccessAt).toISOString():void 0;const a=xr(e.game,t);e.game=t;for(const r of a)this.emitEvent(r)}emitEvent(e){this.emit(e.type,e.data)}checkStale(e){const t=this.cfg.intervals.staleAfterSec*1e3;for(const s of this.games.values()){const a=!!s.game&&ke.has(s.game.status)&&e-(s.lastSuccessAt??0)>t;a!==s.stale&&(s.stale=a,s.game&&(s.game.stale=a),this.emit("stale",{gameId:s.id,stale:a}))}}describe(){return{source:this.source.describe(),games:this.games.size,watch:[...this.games.values()].filter(e=>this.onMain(e)).length,pinned:this.pins.ids(),leagues:Object.fromEntries([...this.leagues].map(([e,t])=>[e,{nextPollInSec:Math.max(0,Math.round((t.nextAt-Date.now())/1e3)),errors:t.errors}]))}}}class Pr{constructor(e,t=0){T(this,"mode","live");this.cfg=e,this.offsetMs=t}leagues(e){return Object.keys(e.leagues).filter(t=>e.leagues[t].enabled)}path(e){return this.cfg.leagues[e].espnPath}scoreboard(e,t){return ht.scoreboard(this.path(e),t)}summary(e,t){return ht.summary(this.path(e),t)}schedule(e,t){return ht.schedule(this.path(e),t)}nhlPlayByPlay(e){return Ia(e)}clearCache(){te.clearCache(),Rt.clearCache()}now(){return Date.now()+this.offsetMs}describe(){return this.offsetMs?`ESPN (live, clock shifted to ${new Date(this.now()).toISOString()})`:"ESPN (live)"}}const Dr=new URL("data:application/json;base64,ewogICJzZXJ2aWNlcyI6IFsKICAgIHsgImlkIjogInlvdXR1YmV0diIsICJuYW1lIjogIllvdVR1YmUgVFYiLCAicHJpb3JpdHkiOiAxLCAibGluayI6ICJodHRwczovL3R2LnlvdXR1YmUuY29tLyIsICJub3RlcyI6ICJOYXRpb25hbCBUViBuZXR3b3JrcyBhbmQgY2hhbm5lbHMgaW4gbXkgWW91VHViZSBUViBsaW5ldXAiIH0sCiAgICB7ICJpZCI6ICJsaWdodG5pbmciLCAibmFtZSI6ICJUYW1wYSBCYXkgTGlnaHRuaW5nIGFwcCIsICJwcmlvcml0eSI6IDMsICJsaW5rIjogIiIsICJub3RlcyI6ICJMaWdodG5pbmcgZ2FtZXMgb24gdGhlIHRlYW0ncyBvd24gc3RyZWFtLCB3aGVuIG5vdCBvbiBhIFlvdVR1YmUgVFYgY2hhbm5lbCIgfSwKICAgIHsgImlkIjogIm1sYnR2IiwgIm5hbWUiOiAiTUxCLlRWIiwgInByaW9yaXR5IjogNCwgImxpbmsiOiAiaHR0cHM6Ly93d3cubWxiLmNvbS90diIsICJub3RlcyI6ICJCcmF2ZXMgZ2FtZXMuIExvY2FsIGJsYWNrb3V0IHJ1bGVzIG1heSBhcHBseS4iIH0sCiAgICB7ICJpZCI6ICJwcmltZSIsICJuYW1lIjogIlByaW1lIFZpZGVvIiwgInByaW9yaXR5IjogNSwgImxpbmsiOiAiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC92aWRlby9zdG9yZWZyb250IiwgIm5vdGVzIjogIlByaW1lLWV4Y2x1c2l2ZSBnYW1lcyBvbmx5IiB9LAogICAgeyAiaWQiOiAiZXNwbnBsdXMiLCAibmFtZSI6ICJFU1BOKyAoRGlzbmV5KyBidW5kbGUpIiwgInByaW9yaXR5IjogNiwgImxpbmsiOiAiaHR0cHM6Ly93d3cuZXNwbi5jb20vd2F0Y2gvIiwgIm5vdGVzIjogIkVTUE4rLWV4Y2x1c2l2ZSBnYW1lcywgd2hlbiBub3Qgb24gYSBZb3VUdWJlIFRWIGNoYW5uZWwiIH0sCiAgICB7ICJpZCI6ICJwZWFjb2NrIiwgIm5hbWUiOiAiUGVhY29jayIsICJwcmlvcml0eSI6IDcsICJsaW5rIjogImh0dHBzOi8vd3d3LnBlYWNvY2t0di5jb20vIiwgIm5vdGVzIjogIlBlYWNvY2stZXhjbHVzaXZlIGdhbWVzLCB3aGVuIG5vdCBvbiBhIFlvdVR1YmUgVFYgY2hhbm5lbCIgfQogIF0sCiAgIm5ldHdvcmtzIjogewogICAgIl9ub3RlIjogIkVTUE4gbmV0d29yayBuYW1lIC0+IHNlcnZpY2UgaWQuIENhc2UgYW5kIHB1bmN0dWF0aW9uIGFyZSBpZ25vcmVkLiBBZGQgYW55IG5ldHdvcmsgdGhlIHNjYW4gbGlzdHMgYXMgTk9UIE1BUFBFRC4iLAogICAgIkFCQyI6ICJ5b3V0dWJldHYiLAogICAgIkNCUyI6ICJ5b3V0dWJldHYiLAogICAgIk5CQyI6ICJ5b3V0dWJldHYiLAogICAgIkZPWCI6ICJ5b3V0dWJldHYiLAogICAgIkVTUE4iOiAieW91dHViZXR2IiwKICAgICJFU1BOMiI6ICJ5b3V0dWJldHYiLAogICAgIkVTUE5VIjogInlvdXR1YmV0diIsCiAgICAiRVNQTkVXUyI6ICJ5b3V0dWJldHYiLAogICAgIlNFQyBOZXR3b3JrIjogInlvdXR1YmV0diIsCiAgICAiU0VDTiI6ICJ5b3V0dWJldHYiLAogICAgIkFDQyBOZXR3b3JrIjogInlvdXR1YmV0diIsCiAgICAiQUNDTiI6ICJ5b3V0dWJldHYiLAogICAgIkJpZyBUZW4gTmV0d29yayI6ICJ5b3V0dWJldHYiLAogICAgIkJUTiI6ICJ5b3V0dWJldHYiLAogICAgIkZTMSI6ICJ5b3V0dWJldHYiLAogICAgIkZTMiI6ICJ5b3V0dWJldHYiLAogICAgIkNCUyBTcG9ydHMgTmV0d29yayI6ICJ5b3V0dWJldHYiLAogICAgIkNCU1NOIjogInlvdXR1YmV0diIsCiAgICAiVE5UIjogInlvdXR1YmV0diIsCiAgICAiVEJTIjogInlvdXR1YmV0diIsCiAgICAidHJ1VFYiOiAieW91dHViZXR2IiwKICAgICJVU0EgTmV0IjogInlvdXR1YmV0diIsCiAgICAiVVNBIE5ldHdvcmsiOiAieW91dHViZXR2IiwKICAgICJORkwgTmV0d29yayI6ICJ5b3V0dWJldHYiLAogICAgIk5GTCBOZXQiOiAieW91dHViZXR2IiwKICAgICJNTEIgTmV0d29yayI6ICJ5b3V0dWJldHYiLAogICAgIk1MQiBOZXQiOiAieW91dHViZXR2IiwKICAgICJDVyI6ICJ5b3V0dWJldHYiLAogICAgIkVTUE4rIjogImVzcG5wbHVzIiwKICAgICJTRUNOKyI6ICJlc3BucGx1cyIsCiAgICAiQUNDTlgiOiAiZXNwbnBsdXMiLAogICAgIkVTUE4gVW5sbXRkIjogImVzcG5wbHVzIiwKICAgICJEaXNuZXkrIjogImVzcG5wbHVzIiwKICAgICJQcmltZSBWaWRlbyI6ICJwcmltZSIsCiAgICAiUHJpbWUgVmlkZW8gKExvY2FsKSI6ICJwcmltZSIsCiAgICAiQW1hem9uIFByaW1lIFZpZGVvIjogInByaW1lIiwKICAgICJQZWFjb2NrIjogInBlYWNvY2siLAogICAgIk1MQi5UViI6ICJtbGJ0diIsCgogICAgIl9ub25lIjogIk5ldHdvcmtzIHNlZW4gb24gRVNQTiB0aGF0IG5vbmUgb2YgbXkgc2VydmljZXMgY2FycnkuIFRoZXkgc2hvdyBhcyAnbm8gbGluayBzZXQnLiIsCiAgICAiQjFHKyI6ICJub25lIiwKICAgICJNVysiOiAibm9uZSIsCiAgICAiU2NyaXBwcyBTcG9ydHMiOiAibm9uZSIsCiAgICAiTVNHU04iOiAibm9uZSIsCiAgICAiTVNHIjogIm5vbmUiLAogICAgIk1TRzIiOiAibm9uZSIsCiAgICAiTVNHQiI6ICJub25lIiwKICAgICJOQkMgU3BvcnRzIEJBIjogIm5vbmUiLAogICAgIk5CQyBTcG9ydHMgUGhpbCI6ICJub25lIiwKICAgICJNTk1UIjogIm5vbmUiLAogICAgIlV0YWggMTYiOiAibm9uZSIsCiAgICAiTUlOTkhMIjogIm5vbmUiLAogICAgIkJsdWVzIEFwcCI6ICJub25lIiwKICAgICJCTisiOiAibm9uZSIsCiAgICAiTWFtbW90aCsiOiAibm9uZSIsCiAgICAiS09ORyI6ICJub25lIiwKICAgICJDSFNOIjogIm5vbmUiLAogICAgIkNBUk5ITCI6ICJub25lIiwKICAgICJBbHRpdHVkZSBTcG9ydHMiOiAibm9uZSIsCiAgICAiQWx0aXR1ZGUgMiBTcG9ydHMiOiAibm9uZSIsCiAgICAiTkVTTiI6ICJub25lIiwKICAgICJLQ09QIjogIm5vbmUiLAogICAgIkRTTiI6ICJub25lIiwKICAgICJBQlRWIjogIm5vbmUiLAogICAgIkNCSk5ITCI6ICJub25lIiwKICAgICJXV0hPIjogIm5vbmUiLAogICAgIktERkkiOiAibm9uZSIsCiAgICAiS1RWRC1UViAoTXkyMCkiOiAibm9uZSIKICB9LAogICJ0ZWFtcyI6IFsKICAgIHsgImxlYWd1ZSI6ICJuaGwiLCAidGVhbSI6ICJUQiIsICJzZXJ2aWNlIjogImxpZ2h0bmluZyIsICJ3aGVuIjogImZhbGxiYWNrIiwgIm5vdGVzIjogIlRlYW0gc3RyZWFtIHdoZW4gdGhlIGdhbWUgaXNuJ3Qgb24gYSBZb3VUdWJlIFRWIGNoYW5uZWwiIH0sCiAgICB7ICJsZWFndWUiOiAibWxiIiwgInRlYW0iOiAiQVRMIiwgInNlcnZpY2UiOiAibWxidHYiLCAid2hlbiI6ICJhbHdheXMiLCAibm90ZXMiOiAiTG9jYWwgYmxhY2tvdXQgcnVsZXMgbWF5IGFwcGx5IiB9CiAgXQp9Cg==",import.meta.url);let gn={services:[],networks:{},teams:[]};function Br(n=Dr){try{const e=JSON.parse(Oe(n,"utf8"));gn={services:(Array.isArray(e.services)?e.services.filter(s=>s&&typeof s.id=="string"&&typeof s.name=="string"):[]).map(s=>({...s,priority:typeof s.priority=="number"?s.priority:99,link:typeof s.link=="string"&&s.link.trim()?s.link.trim():void 0})),networks:e.networks&&typeof e.networks=="object"?Object.fromEntries(Object.entries(e.networks).filter(([s,a])=>!s.startsWith("_")&&typeof a=="string")):{},teams:Array.isArray(e.teams)?e.teams:[]}}catch(e){G.warn(`config/watch-links.json could not be read; using the last good copy: ${e instanceof Error?e.message:e}`)}return gn}const Vr="America/New_York",Wr=[{name:"Georgia Bulldogs",abbreviation:"UGA",leagues:["cfb","mcbb"]},{name:"Clemson Tigers",abbreviation:"CLEM",leagues:["cfb","mcbb"]},{name:"Vanderbilt Commodores",abbreviation:"VAN",leagues:["cfb","mcbb"]},{name:"Wake Forest Demon Deacons",abbreviation:"WAKE",leagues:["cfb","mcbb"]},{name:"Tampa Bay Buccaneers",abbreviation:"TB",leagues:["nfl"]},{name:"Tampa Bay Lightning",abbreviation:"TB",leagues:["nhl"]},{name:"Atlanta Braves",abbreviation:"ATL",leagues:["mlb"]},{name:"Tampa Bay Rays",abbreviation:"TB",leagues:["mlb"]}],$r={cfb:{label:"College football",espnPath:"football/college-football",enabled:!0,season:"Aug-Jan",rail:{enabled:!0,view:"full",all:!1,top25:!0,conferences:["SEC","ACC"]}},nfl:{label:"NFL",espnPath:"football/nfl",enabled:!0,season:"Sep-Feb",rail:{enabled:!0,view:"full",all:!0,top25:!1,conferences:[]}},nhl:{label:"NHL",espnPath:"hockey/nhl",enabled:!0,season:"Oct-Jun",rail:{enabled:!0,view:"compact",all:!0,top25:!1,conferences:[]}},mlb:{label:"MLB",espnPath:"baseball/mlb",enabled:!1,season:"Feb-Oct",rail:{enabled:!1,view:"compact",all:!0,top25:!1,conferences:[]}},mcbb:{label:"Men's college basketball",espnPath:"basketball/mens-college-basketball",enabled:!0,season:"Nov-Apr",rail:{enabled:!0,view:"full",all:!1,top25:!0,conferences:["SEC","ACC"]}}},zr={watchlistLiveSummarySec:9,leagueLiveScoreboardSec:15,railLiveScoreboardSec:25,pregameScoreboardSec:60,pregameWindowMin:120,idleSec:900,staleAfterSec:60,refreshDebounceSec:10,playReplayGapMs:1500,weatherSec:900},jr={monitor:"builtin",idleDimAfterFinal:!0},Zr={port:5280,devClientPort:5281,lanAccess:!1},Jr=!1,Gr=!1,Ur={timezone:Vr,watchlist:Wr,leagues:$r,intervals:zr,display:jr,server:Zr,reducedMotion:Jr,autoFocus:Gr};function Hr(){const n=Gs(Ur),e=new Pr(n);Object.defineProperty(e,"nhlPlayByPlay",{value:void 0});let t=()=>{};const s=new Mr(n,e,(o,c)=>t({type:o,data:c}),new Us(n),{pinsFile:"pins.json"});let a=!1;const r={timezone:n.timezone,reducedMotion:n.reducedMotion,autoFocus:n.autoFocus,playReplayGapMs:n.intervals.playReplayGapMs,staleAfterSec:n.intervals.staleAfterSec,idleDimAfterFinal:n.display.idleDimAfterFinal,leagues:Object.fromEntries(Object.entries(n.leagues).map(([o,c])=>[o,{label:c.label,enabled:c.enabled,rail:c.rail}])),mode:"live"};return{config:()=>r,watchLinks:()=>Br(),start(o){t=o,t({type:"snapshot",data:s.snapshot("connect")}),s.start(),a=!0},pause(){a&&(s.stop(),a=!1)},resume(){a||(s.start(),a=!0,s.refresh())},async refresh(){const o=await s.refresh();return"ignored"in o?void 0:o},pin:(o,c)=>s.pin(o,c),focus:o=>s.focus(o)}}yt.attachLocal(Hr());Hn(()=>import("./main-WQA5EYs2.js"),__vite__mapDeps([0,1]),import.meta.url);export{Kn as a,Xn as r,yt as s,Xr as u};
