!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("regenerator-runtime/runtime.js"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("neo4j-driver"),require("vis-network/standalone"),require("deepmerge")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/core-js/get-iterator","@babel/runtime-corejs3/core-js/get-iterator-method","@babel/runtime-corejs3/core-js-stable/array/from","@babel/runtime-corejs3/core-js-stable/instance/slice","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","core-js/modules/es.array.iterator.js","core-js/modules/es.function.name.js","core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","@babel/runtime-corejs3/core-js-stable/weak-map","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/instance/for-each","regenerator-runtime/runtime.js","@babel/runtime-corejs3/helpers/asyncToGenerator","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/helpers/defineProperty","@babel/runtime-corejs3/helpers/classPrivateFieldSet","@babel/runtime-corejs3/helpers/classPrivateFieldGet","@babel/runtime-corejs3/core-js-stable/symbol","neo4j-driver","vis-network/standalone","deepmerge"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("regenerator-runtime/runtime.js"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("neo4j-driver"),require("vis-network/standalone"),require("deepmerge")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(self,(function(e,r,t,n,o,s,i,a,c,l,u,b,d,j,p,f,v,h,m,y,g,_,x,k,q,w,O,E,N,S,C,A,T,L,P,I,F,V){return(()=>{"use strict";var D={625:(e,r,t)=>{t.r(r),t.d(r,{NEOVIS_ADVANCED_CONFIG:()=>xe,NEOVIS_DEFAULT_CONFIG:()=>_e,default:()=>we});var n=t(615),o=t.n(n),s=t(465),i=t.n(s),a=t(915),c=t.n(a),l=t(921),u=t.n(l),b=t(219),d=t.n(b),j=t(86),p=t.n(j),f=t(105),v=t.n(f),h=t(382),m=t.n(h),y=t(344),g=t.n(y),_=t(708),x=t.n(_),k=(t(441),t(301),t(853),t(701),t(259),t(182),t(602)),q=t.n(k),w=t(952),O=t.n(w),E=t(936),N=t.n(E),S=t(280),C=t.n(S),A=t(434),T=t.n(A),L=t(192),P=t.n(L),I=t(6),F=t.n(I),V=t(418),D=t.n(V),M=t(398),R=t.n(M),U=t(207),G=t.n(U),H=(t(474),t(764)),W=t.n(H),z=t(322),B=t.n(z),J=t(698),Q=t.n(J),Y=t(938),$=t.n(Y),K=t(845),X=t.n(K),Z=t(369),ee=t.n(Z),re=t(893),te=t.n(re),ne=t(673),oe=t.n(ne),se=t(235),ie=t.n(se),ae=t(903),ce={neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES"},visJs:{nodes:{font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:!1,sortMethod:"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}}};function le(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var ue="completed",be="clickNode",de="clickEdge",je="error",pe=function(){function e(){var r;Q()(this,e),this._handlers=(r={},X()(r,ue,[]),X()(r,je,[]),X()(r,be,[]),X()(r,de,[]),r)}return $()(e,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var t,n=function(e,r){var t;if(void 0===oe()||null==i()(e)){if(F()(e)||(t=function(e,r){var t;if(e){if("string"==typeof e)return le(e,r);var n=u()(t=Object.prototype.toString.call(e)).call(t,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?c()(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,s=function(){};return{s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,b=!1;return{s:function(){t=o()(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){b=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(b)throw a}}}}(this._handlers[e]);try{for(n.s();!(t=n.n()).done;)(0,t.value)(r)}catch(e){n.e(e)}finally{n.f()}}}]),e}(),fe=t(53),ve=t.n(fe);function he(e,r){var t;if(void 0===oe()||null==i()(e)){if(F()(e)||(t=function(e,r){var t;if(e){if("string"==typeof e)return me(e,r);var n=u()(t=Object.prototype.toString.call(e)).call(t,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?c()(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,s=function(){};return{s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,b=!1;return{s:function(){t=o()(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){b=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(b)throw a}}}}function me(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ye(e,r){var t=B()(e);if(x()){var n=x()(e);r&&(n=g()(n).call(n,(function(r){return m()(e,r).enumerable}))),t.push.apply(t,n)}return t}function ge(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)G()(t=ye(Object(n),!0)).call(t,(function(r){X()(e,r,n[r])}));else if(v())p()(e,v()(n));else{var o;G()(o=ye(Object(n))).call(o,(function(r){d()(e,r,m()(n,r))}))}}return e}var _e=oe()(),xe=oe()(),ke=new(q()),qe=new(q()),we=function(){function e(r){Q()(this,e),X()(this,"_data",{nodes:new ae.DataSet,edges:new ae.DataSet}),ke.set(this,{writable:!0,value:null}),qe.set(this,{writable:!0,value:new pe}),this._init(r),this._consoleLog(r),this._consoleLog(ce)}var r,t,n,o;return $()(e,[{key:"nodes",get:function(){return this._data.nodes}},{key:"edges",get:function(){return this._data.edges}},{key:"network",get:function(){return te()(this,ke)}},{key:"_consoleLog",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||this._config.console_debug)&&console[r](e)}},{key:"_init",value:function(e){var r,t,n,o,s,i,a,c,l,u,b;if(e.labels&&e.labels[_e])for(var d=0,j=B()(e.labels);d<j.length;d++){var p=j[d];e=ge(ge({},e),{},{labels:ge(ge({},e.labels),{},X()({},p,ge(ge({},e.labels[_e]),e.labels[p])))})}if(e.relationships&&e.relationships[_e])for(var f=0,v=B()(e.relationships);f<v.length;f++){var h=v[f];e=ge(ge({},e),{},{relationships:ge(ge({},e.relationships),{},X()({},h,ge(ge({},e.relationships[_e]),e.relationships[h])))})}this._config=e,this._driver=e.neo4j instanceof ie().driver?e.neo4j:ie().driver(null!==(r=null===(t=e.neo4j)||void 0===t?void 0:t.server_url)&&void 0!==r?r:ce.neo4jUri,ie().auth.basic(null!==(n=null===(o=e.neo4j)||void 0===o?void 0:o.server_user)&&void 0!==n?n:ce.neo4j.neo4jUser,null!==(s=null===(i=e.neo4j)||void 0===i?void 0:i.server_password)&&void 0!==s?s:ce.neo4j.neo4jPassword),{encrypted:null!==(a=null===(c=e.neo4j)||void 0===c?void 0:c.encrypted)&&void 0!==a?a:ce.neo4j.encrypted,trust:null!==(l=null===(u=e.neo4j)||void 0===u?void 0:u.trust)&&void 0!==l?l:ce.neo4j.trust,maxConnectionPoolSize:100,connectionAcquisitionTimeout:1e4,disableLosslessIntegers:!0}),this._database=e.server_database,this._query=null!==(b=e.initial_cypher)&&void 0!==b?b:ce.neo4j.initialQuery,this._container=document.getElementById(e.container_id)}},{key:"_runCypher",value:(o=W()(R().mark((function e(r,t){var n,o,s,i,a,c;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._driver.session(this._database&&{database:this._database}),o=[],e.prev=2,e.next=5,n.readTransaction((function(e){return e.run(r,{id:t})}));case 5:s=e.sent,i=he(s.records);try{for(i.s();!(a=i.n()).done;)c=a.value,G()(c).call(c,(function(e){o.push(e)}))}catch(e){i.e(e)}finally{i.f()}case 8:return e.prev=8,e.next=11,n.close();case 11:return e.finish(8);case 12:if(0!==o.length){e.next=16;break}return e.abrupt("return",void 0);case 16:if(1!==o.length){e.next=18;break}return e.abrupt("return",o.pop());case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,this,[[2,,8,12]])}))),function(e,r){return o.apply(this,arguments)})},{key:"_runFunction",value:function(e,r){if("function"==typeof e)return e(r);throw new Error("Function type property field must be a function")}},{key:"_retrieveProperty",value:function(e,r){if("object"===D()(r)&&"object"===D()(r.properties))return r.properties[e];throw new Error("Neo4j node is not properly constructed")}},{key:"_buildStaticObject",value:function(e,r){if(e&&"object"===D()(e))for(var t=0,n=B()(e);t<n.length;t++){var o=n[t],s=e[o];s&&"object"===D()(s)?(r[o]||(r[o]={}),this._buildStaticObject(s,r[o])):r[o]=s}}},{key:"_buildPropertyNameObject",value:function(e,r,t){if(e&&"object"===D()(e))for(var n=0,o=B()(e);n<o.length;n++){var s=o[n],i=e[s];if(i&&"object"===D()(i))r[s]||(r[s]={}),this._buildStaticObject(i,r[s],t);else{var a=e[s];r[s]=this._retrieveProperty(a,t)}}}},{key:"_buildCypherObject",value:(n=W()(R().mark((function e(r,t,n){var o,s,i,a;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||"object"!==D()(r)){e.next=17;break}o=0,s=B()(r);case 2:if(!(o<s.length)){e.next=17;break}if(i=s[o],!(a=r[i])||"object"!==D()(a)){e.next=11;break}return t[i]||(t[i]={}),e.next=9,this._buildCypherObject(a,t[i],n);case 9:e.next=14;break;case 11:return e.next=13,this._runCypher(a,n);case 13:t[i]=e.sent;case 14:o++,e.next=2;break;case 17:case"end":return e.stop()}}),e,this)}))),function(e,r,t){return n.apply(this,arguments)})},{key:"_buildFunctionObject",value:function(e,r,t){if(e&&"object"===D()(e))for(var n=0,o=B()(e);n<o.length;n++){var s=o[n],i=e[s];i&&"object"===D()(i)?(r[s]||(r[s]={}),this._buildFunctionObject(i,r[s],t)):r[s]=this._runFunction(i,t)}}},{key:"buildNodeVisObject",value:(t=W()(R().mark((function e(r){var t,n,o,s,i,a,c;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=r.labels[0],o=this._config&&this._config.labels&&(this._config.labels[n]||this._config.labels[_e]),s=o&&o[xe],t.id=r.identity,t.raw=r,this._buildPropertyNameObject(o,t,r),void 0===s||"object"==D()(s)){e.next=9;break}throw new Error("Advanced config should be an object. See documentation for details.");case 9:if(!s||"object"!==D()(s)){e.next=17;break}return i=s.static,this._buildStaticObject(i,t),a=s.cypher,e.next=15,this._buildCypherObject(a,t,t.id);case 15:c=s.function,this._buildFunctionObject(c,t,r);case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"buildEdgeVisObject",value:(r=W()(R().mark((function e(r){var t,n,o,s,i,a;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._config&&this._config.relationships&&(this._config.relationships[r.type]||this._config.relationships[_e]),n=t&&t[xe],(o={}).id=r.identity,o.from=r.start,o.to=r.end,o.raw=r,this._buildPropertyNameObject(t,o,r),void 0===n||"object"==D()(n)){e.next=10;break}throw new Error("Advanced config should be an object. See documentation for details.");case 10:if(!n||"object"!==D()(n)){e.next=18;break}return s=n.static,this._buildStaticObject(s,o),i=n.cypher,e.next=16,this._buildCypherObject(i,o,o.id);case 16:a=n.function,this._buildFunctionObject(a,o,r);case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"propertyToString",value:function(e,r){var t;if(F()(r)&&r.length>1){var n,o="<strong>".concat(e,":</strong><br /><ul>"),s=he(r);try{for(s.s();!(n=s.n()).done;){var i=n.value;o+="<li>".concat(i,"</li>")}}catch(e){s.e(e)}finally{s.f()}return o+"</ul>"}return P()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}},{key:"render",value:function(e){var r,t=this,n=0,o=e||this._query,s=this._driver.session(this._database&&{database:this._database}),i=[];s.run(o,{limit:30}).subscribe({onNext:function(e){var r;n++,t._consoleLog("CLASS NAME"),t._consoleLog(e&&e.constructor.name),t._consoleLog(e);var o=T()(r=C()(e.toObject())).call(r,function(){var e=W()(R().mark((function e(r){var n,o,s,i,a,c,l,u,b,d,j,p;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._consoleLog("Constructor:"),t._consoleLog(r&&r.constructor.name),!(r instanceof ie().types.Node)){e.next=9;break}return e.next=5,t.buildNodeVisObject(r);case 5:n=e.sent;try{t._data.nodes.update(n)}catch(e){t._consoleLog(e,"error")}e.next=89;break;case 9:if(!(r instanceof ie().types.Relationship)){e.next=16;break}return e.next=12,t.buildEdgeVisObject(r);case 12:o=e.sent,t._data.edges.update(o),e.next=89;break;case 16:if(!(r instanceof ie().types.Path)){e.next=59;break}return t._consoleLog("PATH"),t._consoleLog(r),e.next=21,t.buildNodeVisObject(r.start);case 21:return s=e.sent,e.next=24,t.buildNodeVisObject(r.end);case 24:i=e.sent,t._data.nodes.update(s),t._data.nodes.update(i),a=he(r.segments),e.prev=28,a.s();case 30:if((c=a.n()).done){e.next=49;break}return l=c.value,e.t0=t._data.nodes,e.next=35,t.buildNodeVisObject(l.start);case 35:return e.t1=e.sent,e.t0.update.call(e.t0,e.t1),e.t2=t._data.nodes,e.next=40,t.buildNodeVisObject(l.end);case 40:return e.t3=e.sent,e.t2.update.call(e.t2,e.t3),e.t4=t._data.edges,e.next=45,t.buildEdgeVisObject(l.relationship);case 45:e.t5=e.sent,e.t4.update.call(e.t4,e.t5);case 47:e.next=30;break;case 49:e.next=54;break;case 51:e.prev=51,e.t6=e.catch(28),a.e(e.t6);case 54:return e.prev=54,a.f(),e.finish(54);case 57:e.next=89;break;case 59:if(!(r instanceof Array)){e.next=89;break}u=he(r),e.prev=61,u.s();case 63:if((b=u.n()).done){e.next=81;break}if(d=b.value,t._consoleLog("Array element constructor:"),t._consoleLog(d&&d.constructor.name),!(d instanceof ie().types.Node)){e.next=74;break}return e.next=70,t.buildNodeVisObject(d);case 70:j=e.sent,t._data.nodes.update(j),e.next=79;break;case 74:if(!(d instanceof ie().types.Relationship)){e.next=79;break}return e.next=77,t.buildEdgeVisObject(d);case 77:p=e.sent,t._data.edges.update(p);case 79:e.next=63;break;case 81:e.next=86;break;case 83:e.prev=83,e.t7=e.catch(61),u.e(e.t7);case 86:return e.prev=86,u.f(),e.finish(86);case 89:case"end":return e.stop()}}),e,null,[[28,51,54,57],[61,83,86,89]])})));return function(r){return e.apply(this,arguments)}}());i.push(N().all(o))},onCompleted:(r=W()(R().mark((function e(){var r,o,a,c,l;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().all(i);case 2:return e.next=4,s.close();case 4:(null===(r=te()(t,ke))||void 0===r?void 0:r.body.data.nodes.length)>0||(a=ve()(ce.visJs,null!==(o=t._config.visConfig)&&void 0!==o?o:{}),c=t._container,t._consoleLog(t._data.nodes),t._consoleLog(t._data.edges),ee()(t,ke,new ae.Network(c,t._data,a))),t._consoleLog("completed"),O()((function(){te()(t,ke).stopSimulation()}),1e4),te()(t,qe).generateEvent(ue,{record_count:n}),l=t,te()(t,ke).on("click",(function(e){if(e.nodes.length>0){var r=this.getNodeAt(e.pointer.DOM);te()(l,qe).generateEvent(be,{nodeId:r,node:l._nodes[r]})}else if(e.edges.length>0){var t=this.getEdgeAt(e.pointer.DOM);te()(l,qe).generateEvent(de,{edgeId:t,edge:l._edges[t]})}}));case 10:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),onError:function(e){t._consoleLog(e,"error"),te()(t,qe).generateEvent(je,{error_msg:e})}})}},{key:"clearNetwork",value:function(){this._neo4jNodes={},this._neo4jEdges={},this._nodes={},this._edges={},te()(this,ke).setData([])}},{key:"registerOnEvent",value:function(e,r){te()(this,qe).register(e,r)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){te()(this,ke).stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}},{key:"updateWithCypher",value:function(e){this.render(e)}},{key:"nodeToHtml",value:function(e,r){var t="";r||(r=B()(e.properties));var n,o=he(r);try{for(o.s();!(n=o.n()).done;){var s=n.value,i=this._retrieveProperty(s,e);i&&(t+=this.propertyToString(s,i))}}catch(e){o.e(e)}finally{o.f()}return t}}]),e}()},915:e=>{e.exports=t},6:e=>{e.exports=x},192:e=>{e.exports=_},344:e=>{e.exports=c},207:e=>{e.exports=w},434:e=>{e.exports=g},921:e=>{e.exports=n},86:e=>{e.exports=s},219:e=>{e.exports=o},382:e=>{e.exports=a},105:e=>{e.exports=i},708:e=>{e.exports=l},322:e=>{e.exports=N},280:e=>{e.exports=y},936:e=>{e.exports=m},952:e=>{e.exports=h},673:e=>{e.exports=P},602:e=>{e.exports=v},615:r=>{r.exports=e},465:e=>{e.exports=r},764:e=>{e.exports=E},698:e=>{e.exports=S},893:e=>{e.exports=L},369:e=>{e.exports=T},938:e=>{e.exports=C},845:e=>{e.exports=A},418:e=>{e.exports=k},398:e=>{e.exports=q},441:e=>{e.exports=u},301:e=>{e.exports=b},853:e=>{e.exports=d},701:e=>{e.exports=j},259:e=>{e.exports=p},182:e=>{e.exports=f},53:e=>{e.exports=V},235:e=>{e.exports=I},474:e=>{e.exports=O},903:e=>{e.exports=F}},M={};function R(e){if(M[e])return M[e].exports;var r=M[e]={exports:{}};return D[e](r,r.exports,R),r.exports}return R.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return R.d(r,{a:r}),r},R.d=(e,r)=>{for(var t in r)R.o(r,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},R.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),R.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R(625)})()}));
//# sourceMappingURL=neovis-without-dependencies.js.map