"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4136],{33507:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},62740:function(e,t,r){r.d(t,{h3:function(){return O}});var n,a,o=r(67294);function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function i(){}function l(e){return!!(e||"").match(/\d/)}function s(e){return null==e}function c(e){return s(e)||"number"==typeof e&&isNaN(e)||"number"==typeof e&&!isFinite(e)}function f(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function v(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function d(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function g(e,t){return Array(t+1).join(e)}function p(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;a=a.replace(".","");var u=1+o,i=a.length;return u<0?a="0."+g("0",Math.abs(u))+a:u>=i?a+=g("0",u-i):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function h(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=v(e),o=a.beforeDecimal,u=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(u||"0")),s=(u.length<=t?"0."+u:l.toFixed(t)).split(".");return(i?"-":"")+o.split("").reverse().reduce(function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e},s[0])+(n?".":"")+d(s[1]||"",t,r)}function m(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function y(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}function S(e){return Math.max(e.selectionStart,e.selectionEnd)}function b(e,t,r,n){var a=e.length;if(t=Math.min(Math.max(t,0),a),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return -1===t&&(t=a),t}function w(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=Boolean(l(e[r])||l(e[r-1]));return t}function k(e,t,r,n,a,u){void 0===u&&(u=i);var l,f,v=(l=function(e,t){var r,o;return c(e)?(o="",r=""):r="number"==typeof e||t?n(o="number"==typeof e?p(e):e):n(o=a(e,void 0)),{formattedValue:r,numAsString:o}},(f=(0,o.useRef)(l)).current=l,(0,o.useRef)(function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return f.current.apply(f,e)}).current),d=(0,o.useState)(function(){return v(s(e)?t:e,r)}),g=d[0],h=d[1],m=e,y=r;s(e)&&(m=g.numAsString,y=!0);var S=v(m,y);return(0,o.useMemo)(function(){h(S)},[S.formattedValue]),[g,function(e,t){e.formattedValue!==g.formattedValue&&h({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function x(e){return e.replace(/[^0-9]/g,"")}function M(e){return e}function V(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var n=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=M);var v=e.removeFormatting;void 0===v&&(v=x);var d=e.defaultValue,g=e.valueIsNumericString,p=e.onValueChange,h=e.isAllowed,V=e.onChange;void 0===V&&(V=i);var N=e.onKeyDown;void 0===N&&(N=i);var D=e.onMouseUp;void 0===D&&(D=i);var O=e.onFocus;void 0===O&&(O=i);var E=e.onBlur;void 0===E&&(E=i);var A=e.value,C=e.getCaretBoundary;void 0===C&&(C=w);var I=e.isValidInputCharacter;void 0===I&&(I=l);var T=u(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),B=k(A,d,Boolean(g),f,v,p),j=B[0],R=j.formattedValue,Z=j.numAsString,F=B[1],P=(0,o.useRef)({formattedValue:R,numAsString:Z}),L=function(e,t){P.current={formattedValue:e.formattedValue,numAsString:e.value},F(e,t)},W=(0,o.useState)(!1),K=W[0],U=W[1],_=(0,o.useRef)(null),G=(0,o.useRef)({setCaretTimeout:null,focusTimeout:null});(0,o.useEffect)(function(){return U(!0),function(){clearTimeout(G.current.setCaretTimeout),clearTimeout(G.current.focusTimeout)}},[]);var $=f,z=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},q=function(e,t,r){(0!==e.selectionStart||e.selectionEnd!==e.value.length)&&(m(e,t),G.current.setCaretTimeout=setTimeout(function(){e.value===r&&e.selectionStart!==e.selectionEnd&&m(e,t)},0))},H=function(e,t,r){return b(e,t,C(e),r)},J=function(e,t,r){var n=C(t),a=function(e,t,r,n,a,o){var u=y(r,e),i=u.from,l=u.to;if(i.end-i.start==1&&i.end===l.end&&l.end===n)return n;var s=a.findIndex(function(e){return e}),c=e.slice(0,s);t||r.startsWith(c)||(r=c+r,n+=c.length);for(var f=r.length,v=e.length,d={},g=Array(f),p=0;p<f;p++){g[p]=-1;for(var h=0;h<v;h++)if(r[p]===e[h]&&!0!==d[h]){g[p]=h,d[h]=!0;break}}for(var m=n;m<f&&(-1===g[m]||!o(r[m]));)m++;var S=m===f||-1===g[m]?v:g[m];for(m=n-1;m>0&&-1===g[m];)m--;var b=-1===m||-1===g[m]?0:g[m]+1;return b>S?S:n-b<S-n?b:S}(t,R,e,r,n,I);return b(t,a,n)},Q=function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,u=e.numAsString,i=e.caretPos;if(r){if(void 0===i&&n){var l=e.inputValue||r.value,s=S(r);r.value=t,i=J(l,t,s)}r.value=t,n&&void 0!==i&&q(r,i,t)}t!==R&&L(z(t,u),{event:o,source:a})};(0,o.useEffect)(function(){var e=P.current,t=e.formattedValue,r=e.numAsString;R!==t&&(R!==Z||t!==r)&&L(z(R,Z),{event:void 0,source:a.props})},[R,Z]);var X=_.current?S(_.current):void 0;("undefined"!=typeof window?o.useLayoutEffect:o.useEffect)(function(){var e=_.current;if(R!==P.current.formattedValue&&e){var t=J(P.current.formattedValue,R,X);e.value=R,q(e,t,R)}},[R]);var Y=function(e,t,r){var n=Object.assign(Object.assign({},y(R,e)),{lastValue:R}),a=v(e,n),o=$(a);if(a=v(o,void 0),h&&!h(z(o,a))){var u=t.target,i=S(u),l=J(e,R,i);return u.value=R,q(u,l,R),!1}return Q({formattedValue:o,numAsString:a,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0},ee=Object.assign({inputMode:K&&"undefined"!=typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))?"numeric":void 0},T,{type:t,value:R,onChange:function(e){Y(e.target.value,e,a.event)&&V(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,u.length):"Delete"===n&&(t=a),void 0===t||a!==o){N(e);return}var i=t;"ArrowLeft"===n||"ArrowRight"===n?(i=H(u,t,"ArrowLeft"===n?"left":"right"))!==t&&e.preventDefault():"Delete"!==n||I(u[t])?"Backspace"!==n||I(u[t])||(i=H(u,t,"left")):i=H(u,t,"right"),i!==t&&q(r,i,u),e.isUnitTestRun&&q(r,i,u),N(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=H(a,r);o!==r&&q(t,o,a)}D(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;_.current=t,G.current.focusTimeout=setTimeout(function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=H(a,r);o===r||0===r&&n===a.length||q(t,o,a),O(e)},0)},onBlur:function(e){_.current=null,clearTimeout(G.current.focusTimeout),clearTimeout(G.current.setCaretTimeout),E(e)}});return"text"===r?s?o.createElement(o.Fragment,null,s(R,T)||null):o.createElement("span",Object.assign({},T,{ref:c}),R):n?o.createElement(n,Object.assign({},ee,{ref:c})):o.createElement("input",Object.assign({},ee,{ref:c}))}function N(e,t){var r,n,a,o=t.decimalScale,u=t.fixedDecimalScale,i=t.prefix;void 0===i&&(i="");var l=t.suffix;void 0===l&&(l="");var s=t.allowNegative,c=t.thousandsGroupStyle;if(void 0===c&&(c="thousand"),""===e||"-"===e)return e;var f=D(t),g=f.thousandSeparator,p=f.decimalSeparator,h=0!==o&&-1!==e.indexOf(".")||o&&u,m=v(e,s),y=m.beforeDecimal,S=m.afterDecimal,b=m.addNegation;return void 0!==o&&(S=d(S,o,!!u)),g&&(r=y,n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(c),a=-1===(a=r.search(/[1-9]/))?r.length:a,y=r.substring(0,a)+r.substring(a,r.length).replace(n,"$1"+g)),i&&(y=i+y),l&&(S+=l),b&&(y="-"+y),e=y+(h&&p||"")+S}function D(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function O(e){var t,r,n,d,g,y,S,b,w,x,M,O,E,A,C,I,T,B,j,R,Z,F,P,L,W,K,U,_=(void 0===(r=(t=function(e){var t=D(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),r===n)throw Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(t=e)).decimalSeparator)&&(r="."),t.allowedDecimalSeparators,t.thousandsGroupStyle,n=t.suffix,d=t.allowNegative,g=t.allowLeadingZeros,void 0===(y=t.onKeyDown)&&(y=i),void 0===(S=t.onBlur)&&(S=i),b=t.thousandSeparator,w=t.decimalScale,x=t.fixedDecimalScale,void 0===(M=t.prefix)&&(M=""),O=t.defaultValue,E=t.value,A=t.valueIsNumericString,C=t.onValueChange,I=u(t,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),T=function(e){return N(e,t)},B=function(e,r){return function(e,t,r){void 0===t&&(t={from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""});var n,a,o,u,i=r.allowNegative,s=r.prefix;void 0===s&&(s="");var c=r.suffix;void 0===c&&(c="");var d=r.decimalScale,g=t.from,p=t.to,h=p.start,m=p.end,y=D(r),S=y.allowedDecimalSeparators,b=y.decimalSeparator,w=e[m]===b;if(l(e)&&(e===s||e===c)&&""===t.lastValue)return e;m-h==1&&-1!==S.indexOf(e[h])&&(e=e.substring(0,h)+(0===d?"":b)+e.substring(h+1,e.length));var k=function(e,t,r){var n=!1,a=!1;s.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):c.startsWith("-")&&e.length===c.length?n=!1:"-"===e[0]&&(n=!0);var o=n?1:0;return a&&(o=2),o&&(e=e.substring(o),t-=o,r-=o),{value:e,start:t,end:r,hasNegation:n}},x=k(e,h,m),M=x.hasNegation;e=x.value,h=x.start,m=x.end;var V=k(t.lastValue,g.start,g.end),N=V.start,O=V.end,E=V.value,A=e.substring(h,m);e.length&&E.length&&(N>E.length-c.length||O<s.length)&&!(A&&c.startsWith(A))&&(e=E);var C=0;e.startsWith(s)?C+=s.length:h<s.length&&(C=h),e=e.substring(C),m-=C;var I=e.length,T=e.length-c.length;e.endsWith(c)?I=T:m>T?I=m:m>e.length-c.length&&(I=m),e=e.substring(0,I),void 0===(n=M?"-"+e:e)&&(n=""),a=RegExp("(-)(.)*(-)"),o=/(-)/.test(n),u=a.test(n),n=n.replace(/-/g,""),o&&!u&&i&&(n="-"+n);var B=(e=((e=n).match(RegExp("(^-)|[0-9]|"+f(b),"g"))||[]).join("")).indexOf(b),j=v(e=e.replace(RegExp(f(b),"g"),function(e,t){return t===B?".":""}),i),R=j.beforeDecimal,Z=j.afterDecimal,F=j.addNegation;return p.end-p.start<g.end-g.start&&""===R&&w&&!parseFloat(Z)&&(e=F?"-":""),e}(e,r,t)},j=s(E)?O:E,Z=null!=A?A:(R=M,""===j||!(null==R?void 0:R.match(/\d/))&&!(null==n?void 0:n.match(/\d/))&&"string"==typeof j&&!isNaN(Number(j))),s(E)?s(O)||(Z=A||"number"==typeof O):Z=A||"number"==typeof E,W=(L=(P=k((F=function(e){return c(e)?e:("number"==typeof e&&(e=p(e)),Z&&"number"==typeof w)?h(e,w,Boolean(x)):e})(E),F(O),Boolean(Z),T,B,C))[0]).numAsString,K=L.formattedValue,U=P[1],Object.assign(Object.assign({},I),{value:K,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===r||l(e)},onValueChange:U,format:T,removeFormatting:B,getCaretBoundary:function(e){var r,n,a,o,u,i;return void 0===(n=(r=t).prefix)&&(n=""),void 0===(a=r.suffix)&&(a=""),o=Array.from({length:e.length+1}).map(function(){return!0}),u="-"===e[0],o.fill(!1,0,n.length+(u?1:0)),i=e.length,o.fill(!1,i-a.length+1,i+1),o},onKeyDown:function(e){var r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),a!==o){y(e);return}"Backspace"===n&&"-"===u[0]&&a===M.length+1&&d&&m(r,1);var i=D(t),l=i.decimalSeparator,s=i.allowedDecimalSeparators;"Backspace"===n&&u[a-1]===l&&w&&x&&(m(r,a-1),e.preventDefault()),(null==s?void 0:s.includes(n))&&u[a]===l&&m(r,a+1);var c=!0===b?",":b;"Backspace"===n&&u[a-1]===c&&m(r,a-1),"Delete"===n&&u[a]===c&&m(r,a+1),y(e)},onBlur:function(e){var r=W;r.match(/\d/g)||(r=""),g||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),x&&w&&(r=h(r,w,x)),r!==W&&U({formattedValue:N(r,t),value:r,floatValue:parseFloat(r)},{event:e,source:a.event}),S(e)}}));return o.createElement(V,Object.assign({},_))}(n=a||(a={})).event="event",n.props="prop"}}]);