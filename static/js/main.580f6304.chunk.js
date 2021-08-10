(this["webpackJsonpwikipedia-viewer"]=this["webpackJsonpwikipedia-viewer"]||[]).push([[0],{30:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(9),c=t.n(i),o=t(5),l=t(8),s=t(12),d=(t(28),t(4)),u={ON_SEARCH_FIELD_CHANGE:"ON_SEARCH_FIELD_CHANGE"},b={searchFieldText:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.ON_SEARCH_FIELD_CHANGE:return Object(d.a)(Object(d.a)({},e),{},{searchFieldText:n.payload});default:return e}},f={FETCH_DATA_PENDING:"FETCH_DATA_PENDING",FETCH_DATA_SUCCESS:"FETCH_DATA_SUCCESS",FETCH_DATA_FAILURE:"FETCH_DATA_FAILURE"},h={fetchedData:null,error:null,isPending:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f.FETCH_DATA_PENDING:return Object(d.a)(Object(d.a)({},e),{isPending:!0});case f.FETCH_DATA_SUCCESS:return Object(d.a)(Object(d.a)({},e),{isPending:!1,error:!1,fetchedData:n.payload});case f.FETCH_DATA_FAILURE:return Object(d.a)(Object(d.a)({},e),{isPending:!1,error:n.payload});default:return e}},m=Object(l.b)({searchField:p,wikipediaData:g}),j=[s.a];var O,x,v,y,E,k,A,_,w,C,F,T,D=Object(l.c)(m,l.a.apply(void 0,j)),S=(t(30),t(13)),H=t(14),N=t(19),R=t(18),I=t(2),P=t(3),L=P.a.div(O||(O=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),U=P.a.h1(x||(x=Object(I.a)(["\n    font-size: 3.5rem;\n    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 0;\n"]))),q=t(1),G=function(){return Object(q.jsx)(U,{children:"Wikipedia Viewer"})},z=P.a.a(v||(v=Object(I.a)(["\n    text-decoration: none;\n    color:aqua;\n    font-size: 1.2rem;\n    margin-top: 1rem;\n    font-weight: bold;\n    margin-bottom: 0;\n    \n    &:hover {\n        transform: scale(1.1);\n    }\n"]))),W=function(){return Object(q.jsx)(z,{href:"https://en.wikipedia.org/wiki/Special:Random",className:"random-button",target:"_blank",rel:"noreferrer",children:"Visit an random article"})},M=P.a.div(y||(y=Object(I.a)(["\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),J=P.a.span(E||(E=Object(I.a)(["\n    font-size: 1.8rem;\n    margin-top: 1rem;\n    margin-bottom: 0.6rem;\n    text-align: center;\n"]))),K=P.a.input(k||(k=Object(I.a)(["\n    margin-left: 0.6rem;\n    padding: 0.4rem;\n    background-color: #161b22;\n    border-radius: 1rem;\n    font-size: 1.2rem;\n    color: white;\n    border: 0.2rem solid rgba(55, 106, 176, 0.5);\n    outline: none;\n    width: auto;\n\n    &:focus {\n        border: 0.2rem solid rgb(28, 144, 221);\n        border-radius: 1rem;\n    }\n"]))),B=function(e){return function(n){n({type:f.FETCH_DATA_PENDING}),fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+e).then((function(e){return e.json()})).then((function(e){return n(function(e){return{type:f.FETCH_DATA_SUCCESS,payload:e}}(e))})).catch((function(e){return n(function(e){return{type:f.FETCH_DATA_FAILURE,payload:e}}(e))}))}},V=Object(o.b)((function(e){return{searchFieldText:e.searchField.searchFieldText}}),(function(e){return{onSearchFieldChange:function(n){return e(function(e){return{type:u.ON_SEARCH_FIELD_CHANGE,payload:e.target.value}}(n))},onRequestWikipediaData:function(n){return e(B(n))}}}))((function(e){var n=e.searchFieldText,t=e.onSearchFieldChange,r=e.onRequestWikipediaData;return Object(q.jsxs)(M,{children:[Object(q.jsx)(J,{children:"Search Article"}),Object(q.jsx)(K,{type:"text",placeholder:"Eg: Javascript",value:n,onChange:function(e){r(e.target.value),t(e)}})]})})),X=P.a.div(A||(A=Object(I.a)(["\n    margin-left: auto;\n    margin-right: auto;\n"]))),Y=P.a.div(_||(_=Object(I.a)(["\n    color: crimson;\n    margin-top: 20%;\n    font-size: 1.4rem;\n    border: 0.2rem solid crimson;\n    border-radius: 1rem;\n    padding: 1rem;\n"]))),Q=P.a.div(w||(w=Object(I.a)(["\n    background-color: #161b22;\n    border-radius: 2rem;\n    padding: 20px;\n    margin-top: 1.8rem;\n    width: 84%;\n    margin-left: auto;\n    margin-right: auto;\n\n    &:hover {\n        background-color: #0d1117;\n        border: 0.2rem solid rgb(28, 144, 221);\n    }\n"]))),Z=P.a.a(C||(C=Object(I.a)(["\n    text-decoration: none;\n    color: rgb(28, 144, 221);\n    font-size: 1.4rem;\n"]))),$=P.a.p(F||(F=Object(I.a)(["\n    font-size: 1rem;\n"]))),ee=function(e){var n=e.pageid,t=e.title,r=e.extract;return Object(q.jsxs)(Q,{children:[Object(q.jsx)(Z,{href:"https://en.wikipedia.org/?curid=".concat(n),target:"_blank",rel:"noreferrer",children:t}),Object(q.jsx)($,{children:r})]})},ne=["title","titleId"];function te(){return(te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function re(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function ae(e,n){var t=e.title,a=e.titleId,i=re(e,ne);return r.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"rgb(13, 17, 23)",display:"block",shapeRendering:"auto"},width:"101px",height:"101px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:n,"aria-labelledby":a},i),t?r.createElement("title",{id:a},t):null,T||(T=r.createElement("circle",{cx:50,cy:50,fill:"none",stroke:"#1c90dd",strokeWidth:10,r:31,strokeDasharray:"146.08405839192537 50.69468613064179"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))))}var ie=r.forwardRef(ae),ce=(t.p,Object(o.b)((function(e){var n=e.wikipediaData;return{fetchedData:n.fetchedData,error:n.error,isPending:n.isPending}}))((function(e){var n=e.fetchedData,t=(e.error,e.isPending);return Object(q.jsx)(X,{children:!1===t?"query"in n?Object.values(n.query.pages).sort((function(e,n){return n.extract.length-e.extract.length})).map((function(e,n){return Object(q.jsx)(ee,Object(d.a)({},e),n)})):Object(q.jsx)(Y,{children:"No Result Found"}):!0===t&&Object(q.jsx)(ie,{})})}))),oe=function(e){Object(N.a)(t,e);var n=Object(R.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).handleEnterKey=function(n){if(13===n.keyCode){var t=e.props,r=t.onRequestWikipediaData,a=t.searchFieldText;a.length<1||r(a)}},e}return Object(H.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleEnterKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleEnterKey)}},{key:"render",value:function(){return Object(q.jsxs)(L,{children:[Object(q.jsx)(G,{}),Object(q.jsx)(W,{}),Object(q.jsx)(V,{}),Object(q.jsx)(ce,{})]})}}]),t}(a.a.Component),le=Object(o.b)((function(e){return{searchFieldText:e.searchField.searchFieldText}}),(function(e){return{onRequestWikipediaData:function(n){return e(B(n))}}}))(oe);c.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(o.a,{store:D,children:Object(q.jsx)(le,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.580f6304.chunk.js.map