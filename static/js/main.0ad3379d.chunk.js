(this.webpackJsonpreact_sports_teams=this.webpackJsonpreact_sports_teams||[]).push([[0],{45:function(e,t,n){e.exports=n(56)},50:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=(n(50),n(20)),s=(n(51),n(92)),i=n(93),u=Object(a.createContext)(),m=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA";return Object(a.useEffect)((function(){console.log("fetching all teams..."),fetch(s).then((function(e){return e.json()})).then((function(e){console.log(">> fetched data",e),o(e.teams)})).catch((function(e){console.log(">> fetch error",e)}))}),[s]),r.a.createElement(u.Provider,{value:{teams:c,setTeams:o}},e.children)},f=Object(a.createContext)(),h=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement(f.Provider,{value:{team:c,setTeam:o}},e.children)},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"nav"},r.a.createElement(p,null)))},p=function(){var e=Object(a.useContext)(u).teams,t=Object(a.useContext)(f).setTeam;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(i.a,{id:"sports-teams-options",options:e,getOptionLabel:function(e){return e.strTeam},onChange:function(e,n){console.log(">> teamObj:",n),t(n)},style:{width:300},renderInput:function(e){return r.a.createElement(s.a,Object.assign({},e,{label:"Search Team",variant:"outlined",fullWidth:!0}))}}))},v=function(){var e=Object(a.useContext)(f).team;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team"},e&&r.a.createElement("pre",null,JSON.stringify(e,null,2))))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,r.a.createElement(h,null,r.a.createElement(d,null),r.a.createElement("main",{className:"main"},r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0ad3379d.chunk.js.map