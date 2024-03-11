import{c as rt,g as mt,s as kt,a as _t,b as xt,y as vt,x as bt,A as wt,j as St,v as Lt,h as G,u as Et}from"./mermaid.core-6bgkjArs.js";import{o as At}from"./ordinal-wXG5obU4.js";import{s as Tt}from"./Tableau10-Fgclqpgn.js";import"./app-Y0A88DIy.js";import"./init-Hi12RPRh.js";function ot(t,n){let s;if(n===void 0)for(const a of t)a!=null&&(s<a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let u of t)(u=n(u,++a,t))!=null&&(s<u||s===void 0&&u>=u)&&(s=u)}return s}function yt(t,n){let s;if(n===void 0)for(const a of t)a!=null&&(s>a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let u of t)(u=n(u,++a,t))!=null&&(s>u||s===void 0&&u>=u)&&(s=u)}return s}function Z(t,n){let s=0;if(n===void 0)for(let a of t)(a=+a)&&(s+=a);else{let a=-1;for(let u of t)(u=+n(u,++a,t))&&(s+=u)}return s}function Mt(t){return t.target.depth}function Nt(t){return t.depth}function Pt(t,n){return n-1-t.height}function dt(t,n){return t.sourceLinks.length?t.depth:n-1}function Ct(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?yt(t.sourceLinks,Mt)-1:0}function Y(t){return function(){return t}}function lt(t,n){return H(t.source,n.source)||t.index-n.index}function at(t,n){return H(t.target,n.target)||t.index-n.index}function H(t,n){return t.y0-n.y0}function J(t){return t.value}function It(t){return t.index}function $t(t){return t.nodes}function Ot(t){return t.links}function ct(t,n){const s=t.get(n);if(!s)throw new Error("missing: "+n);return s}function ut({nodes:t}){for(const n of t){let s=n.y0,a=s;for(const u of n.sourceLinks)u.y0=s+u.width/2,s+=u.width;for(const u of n.targetLinks)u.y1=a+u.width/2,a+=u.width}}function jt(){let t=0,n=0,s=1,a=1,u=24,_=8,g,p=It,i=dt,o,c,m=$t,b=Ot,y=6;function x(){const e={nodes:m.apply(null,arguments),links:b.apply(null,arguments)};return E(e),L(e),A(e),N(e),S(e),ut(e),e}x.update=function(e){return ut(e),e},x.nodeId=function(e){return arguments.length?(p=typeof e=="function"?e:Y(e),x):p},x.nodeAlign=function(e){return arguments.length?(i=typeof e=="function"?e:Y(e),x):i},x.nodeSort=function(e){return arguments.length?(o=e,x):o},x.nodeWidth=function(e){return arguments.length?(u=+e,x):u},x.nodePadding=function(e){return arguments.length?(_=g=+e,x):_},x.nodes=function(e){return arguments.length?(m=typeof e=="function"?e:Y(e),x):m},x.links=function(e){return arguments.length?(b=typeof e=="function"?e:Y(e),x):b},x.linkSort=function(e){return arguments.length?(c=e,x):c},x.size=function(e){return arguments.length?(t=n=0,s=+e[0],a=+e[1],x):[s-t,a-n]},x.extent=function(e){return arguments.length?(t=+e[0][0],s=+e[1][0],n=+e[0][1],a=+e[1][1],x):[[t,n],[s,a]]},x.iterations=function(e){return arguments.length?(y=+e,x):y};function E({nodes:e,links:f}){for(const[h,r]of e.entries())r.index=h,r.sourceLinks=[],r.targetLinks=[];const l=new Map(e.map((h,r)=>[p(h,r,e),h]));for(const[h,r]of f.entries()){r.index=h;let{source:k,target:v}=r;typeof k!="object"&&(k=r.source=ct(l,k)),typeof v!="object"&&(v=r.target=ct(l,v)),k.sourceLinks.push(r),v.targetLinks.push(r)}if(c!=null)for(const{sourceLinks:h,targetLinks:r}of e)h.sort(c),r.sort(c)}function L({nodes:e}){for(const f of e)f.value=f.fixedValue===void 0?Math.max(Z(f.sourceLinks,J),Z(f.targetLinks,J)):f.fixedValue}function A({nodes:e}){const f=e.length;let l=new Set(e),h=new Set,r=0;for(;l.size;){for(const k of l){k.depth=r;for(const{target:v}of k.sourceLinks)h.add(v)}if(++r>f)throw new Error("circular link");l=h,h=new Set}}function N({nodes:e}){const f=e.length;let l=new Set(e),h=new Set,r=0;for(;l.size;){for(const k of l){k.height=r;for(const{source:v}of k.targetLinks)h.add(v)}if(++r>f)throw new Error("circular link");l=h,h=new Set}}function I({nodes:e}){const f=ot(e,r=>r.depth)+1,l=(s-t-u)/(f-1),h=new Array(f);for(const r of e){const k=Math.max(0,Math.min(f-1,Math.floor(i.call(null,r,f))));r.layer=k,r.x0=t+k*l,r.x1=r.x0+u,h[k]?h[k].push(r):h[k]=[r]}if(o)for(const r of h)r.sort(o);return h}function j(e){const f=yt(e,l=>(a-n-(l.length-1)*g)/Z(l,J));for(const l of e){let h=n;for(const r of l){r.y0=h,r.y1=h+r.value*f,h=r.y1+g;for(const k of r.sourceLinks)k.width=k.value*f}h=(a-h+g)/(l.length+1);for(let r=0;r<l.length;++r){const k=l[r];k.y0+=h*(r+1),k.y1+=h*(r+1)}$(l)}}function S(e){const f=I(e);g=Math.min(_,(a-n)/(ot(f,l=>l.length)-1)),j(f);for(let l=0;l<y;++l){const h=Math.pow(.99,l),r=Math.max(1-h,(l+1)/y);O(f,h,r),M(f,h,r)}}function M(e,f,l){for(let h=1,r=e.length;h<r;++h){const k=e[h];for(const v of k){let R=0,z=0;for(const{source:W,value:K}of v.targetLinks){let F=K*(v.layer-W.layer);R+=T(W,v)*F,z+=F}if(!(z>0))continue;let U=(R/z-v.y0)*f;v.y0+=U,v.y1+=U,w(v)}o===void 0&&k.sort(H),P(k,l)}}function O(e,f,l){for(let h=e.length,r=h-2;r>=0;--r){const k=e[r];for(const v of k){let R=0,z=0;for(const{target:W,value:K}of v.sourceLinks){let F=K*(W.layer-v.layer);R+=V(v,W)*F,z+=F}if(!(z>0))continue;let U=(R/z-v.y0)*f;v.y0+=U,v.y1+=U,w(v)}o===void 0&&k.sort(H),P(k,l)}}function P(e,f){const l=e.length>>1,h=e[l];d(e,h.y0-g,l-1,f),C(e,h.y1+g,l+1,f),d(e,a,e.length-1,f),C(e,n,0,f)}function C(e,f,l,h){for(;l<e.length;++l){const r=e[l],k=(f-r.y0)*h;k>1e-6&&(r.y0+=k,r.y1+=k),f=r.y1+g}}function d(e,f,l,h){for(;l>=0;--l){const r=e[l],k=(r.y1-f)*h;k>1e-6&&(r.y0-=k,r.y1-=k),f=r.y0-g}}function w({sourceLinks:e,targetLinks:f}){if(c===void 0){for(const{source:{sourceLinks:l}}of f)l.sort(at);for(const{target:{targetLinks:l}}of e)l.sort(lt)}}function $(e){if(c===void 0)for(const{sourceLinks:f,targetLinks:l}of e)f.sort(at),l.sort(lt)}function T(e,f){let l=e.y0-(e.sourceLinks.length-1)*g/2;for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;l+=r+g}for(const{source:h,width:r}of f.targetLinks){if(h===e)break;l-=r}return l}function V(e,f){let l=f.y0-(f.targetLinks.length-1)*g/2;for(const{source:h,width:r}of f.targetLinks){if(h===e)break;l+=r+g}for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;l-=r}return l}return x}var tt=Math.PI,et=2*tt,D=1e-6,zt=et-D;function nt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function gt(){return new nt}nt.prototype=gt.prototype={constructor:nt,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,s,a){this._+="Q"+ +t+","+ +n+","+(this._x1=+s)+","+(this._y1=+a)},bezierCurveTo:function(t,n,s,a,u,_){this._+="C"+ +t+","+ +n+","+ +s+","+ +a+","+(this._x1=+u)+","+(this._y1=+_)},arcTo:function(t,n,s,a,u){t=+t,n=+n,s=+s,a=+a,u=+u;var _=this._x1,g=this._y1,p=s-t,i=a-n,o=_-t,c=g-n,m=o*o+c*c;if(u<0)throw new Error("negative radius: "+u);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(m>D)if(!(Math.abs(c*p-i*o)>D)||!u)this._+="L"+(this._x1=t)+","+(this._y1=n);else{var b=s-_,y=a-g,x=p*p+i*i,E=b*b+y*y,L=Math.sqrt(x),A=Math.sqrt(m),N=u*Math.tan((tt-Math.acos((x+m-E)/(2*L*A)))/2),I=N/A,j=N/L;Math.abs(I-1)>D&&(this._+="L"+(t+I*o)+","+(n+I*c)),this._+="A"+u+","+u+",0,0,"+ +(c*b>o*y)+","+(this._x1=t+j*p)+","+(this._y1=n+j*i)}},arc:function(t,n,s,a,u,_){t=+t,n=+n,s=+s,_=!!_;var g=s*Math.cos(a),p=s*Math.sin(a),i=t+g,o=n+p,c=1^_,m=_?a-u:u-a;if(s<0)throw new Error("negative radius: "+s);this._x1===null?this._+="M"+i+","+o:(Math.abs(this._x1-i)>D||Math.abs(this._y1-o)>D)&&(this._+="L"+i+","+o),s&&(m<0&&(m=m%et+et),m>zt?this._+="A"+s+","+s+",0,1,"+c+","+(t-g)+","+(n-p)+"A"+s+","+s+",0,1,"+c+","+(this._x1=i)+","+(this._y1=o):m>D&&(this._+="A"+s+","+s+",0,"+ +(m>=tt)+","+c+","+(this._x1=t+s*Math.cos(u))+","+(this._y1=n+s*Math.sin(u))))},rect:function(t,n,s,a){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +s+"v"+ +a+"h"+-s+"Z"},toString:function(){return this._}};function ht(t){return function(){return t}}function Dt(t){return t[0]}function Bt(t){return t[1]}var Vt=Array.prototype.slice;function Rt(t){return t.source}function Ut(t){return t.target}function Wt(t){var n=Rt,s=Ut,a=Dt,u=Bt,_=null;function g(){var p,i=Vt.call(arguments),o=n.apply(this,i),c=s.apply(this,i);if(_||(_=p=gt()),t(_,+a.apply(this,(i[0]=o,i)),+u.apply(this,i),+a.apply(this,(i[0]=c,i)),+u.apply(this,i)),p)return _=null,p+""||null}return g.source=function(p){return arguments.length?(n=p,g):n},g.target=function(p){return arguments.length?(s=p,g):s},g.x=function(p){return arguments.length?(a=typeof p=="function"?p:ht(+p),g):a},g.y=function(p){return arguments.length?(u=typeof p=="function"?p:ht(+p),g):u},g.context=function(p){return arguments.length?(_=p??null,g):_},g}function Ft(t,n,s,a,u){t.moveTo(n,s),t.bezierCurveTo(n=(n+a)/2,s,n,u,a,u)}function Gt(){return Wt(Ft)}function Yt(t){return[t.source.x1,t.y0]}function Ht(t){return[t.target.x0,t.y1]}function Xt(){return Gt().source(Yt).target(Ht)}var it=function(){var t=function(p,i,o,c){for(o=o||{},c=p.length;c--;o[p[c]]=i);return o},n=[1,9],s=[1,10],a=[1,5,10,12],u={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(i,o,c,m,b,y,x){var E=y.length-1;switch(b){case 7:const L=m.findOrCreateNode(y[E-4].trim().replaceAll('""','"')),A=m.findOrCreateNode(y[E-2].trim().replaceAll('""','"')),N=parseFloat(y[E].trim());m.addLink(L,A,N);break;case 8:case 9:case 11:this.$=y[E];break;case 10:this.$=y[E-1];break}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:s},{1:[2,6],7:11,10:[1,12]},t(s,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(a,[2,8]),t(a,[2,9]),{19:[1,16]},t(a,[2,11]),{1:[2,1]},{1:[2,5]},t(s,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:s},{15:18,16:7,17:8,18:n,20:s},{18:[1,19]},t(s,[2,3]),{12:[1,20]},t(a,[2,10]),{15:21,16:7,17:8,18:n,20:s},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(i,o){if(o.recoverable)this.trace(i);else{var c=new Error(i);throw c.hash=o,c}},parse:function(i){var o=this,c=[0],m=[],b=[null],y=[],x=this.table,E="",L=0,A=0,N=2,I=1,j=y.slice.call(arguments,1),S=Object.create(this.lexer),M={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&(M.yy[O]=this.yy[O]);S.setInput(i,M.yy),M.yy.lexer=S,M.yy.parser=this,typeof S.yylloc>"u"&&(S.yylloc={});var P=S.yylloc;y.push(P);var C=S.options&&S.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function d(){var v;return v=m.pop()||S.lex()||I,typeof v!="number"&&(v instanceof Array&&(m=v,v=m.pop()),v=o.symbols_[v]||v),v}for(var w,$,T,V,e={},f,l,h,r;;){if($=c[c.length-1],this.defaultActions[$]?T=this.defaultActions[$]:((w===null||typeof w>"u")&&(w=d()),T=x[$]&&x[$][w]),typeof T>"u"||!T.length||!T[0]){var k="";r=[];for(f in x[$])this.terminals_[f]&&f>N&&r.push("'"+this.terminals_[f]+"'");S.showPosition?k="Parse error on line "+(L+1)+`:
`+S.showPosition()+`
Expecting `+r.join(", ")+", got '"+(this.terminals_[w]||w)+"'":k="Parse error on line "+(L+1)+": Unexpected "+(w==I?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(k,{text:S.match,token:this.terminals_[w]||w,line:S.yylineno,loc:P,expected:r})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+$+", token: "+w);switch(T[0]){case 1:c.push(w),b.push(S.yytext),y.push(S.yylloc),c.push(T[1]),w=null,A=S.yyleng,E=S.yytext,L=S.yylineno,P=S.yylloc;break;case 2:if(l=this.productions_[T[1]][1],e.$=b[b.length-l],e._$={first_line:y[y.length-(l||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(l||1)].first_column,last_column:y[y.length-1].last_column},C&&(e._$.range=[y[y.length-(l||1)].range[0],y[y.length-1].range[1]]),V=this.performAction.apply(e,[E,A,L,M.yy,T[1],b,y].concat(j)),typeof V<"u")return V;l&&(c=c.slice(0,-1*l*2),b=b.slice(0,-1*l),y=y.slice(0,-1*l)),c.push(this.productions_[T[1]][0]),b.push(e.$),y.push(e._$),h=x[c[c.length-2]][c[c.length-1]],c.push(h);break;case 3:return!0}}return!0}},_=function(){var p={EOF:1,parseError:function(o,c){if(this.yy.parser)this.yy.parser.parseError(o,c);else throw new Error(o)},setInput:function(i,o){return this.yy=o||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var o=i.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var o=i.length,c=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),o=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+o+"^"},test_match:function(i,o){var c,m,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),m=i[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],c=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var y in b)this[y]=b[y];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,o,c,m;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),y=0;y<b.length;y++)if(c=this._input.match(this.rules[b[y]]),c&&(!o||c[0].length>o[0].length)){if(o=c,m=y,this.options.backtrack_lexer){if(i=this.test_match(c,b[y]),i!==!1)return i;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(i=this.test_match(o,b[m]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(o,c,m,b){switch(m){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return p}();u.lexer=_;function g(){this.yy={}}return g.prototype=u,u.Parser=g,new g}();it.parser=it;const X=it;let q=[],Q=[],B={};const qt=()=>{q=[],Q=[],B={},wt()};class Qt{constructor(n,s,a=0){this.source=n,this.target=s,this.value=a}}const Kt=(t,n,s)=>{q.push(new Qt(t,n,s))};class Zt{constructor(n){this.ID=n}}const Jt=t=>(t=St.sanitizeText(t,rt()),B[t]||(B[t]=new Zt(t),Q.push(B[t])),B[t]),te=()=>Q,ee=()=>q,ne=()=>({nodes:Q.map(t=>({id:t.ID})),links:q.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),ie={nodesMap:B,getConfig:()=>rt().sankey,getNodes:te,getLinks:ee,getGraph:ne,addLink:Kt,findOrCreateNode:Jt,getAccTitle:mt,setAccTitle:kt,getAccDescription:_t,setAccDescription:xt,getDiagramTitle:vt,setDiagramTitle:bt,clear:qt},pt=class st{static next(n){return new st(n+ ++st.count)}constructor(n){this.id=n,this.href=`#${n}`}toString(){return"url("+this.href+")"}};pt.count=0;let ft=pt;const se={left:Nt,right:Pt,center:Ct,justify:dt},re=function(t,n,s,a){const{securityLevel:u,sankey:_}=rt(),g=Lt.sankey;let p;u==="sandbox"&&(p=G("#i"+n));const i=u==="sandbox"?G(p.nodes()[0].contentDocument.body):G("body"),o=u==="sandbox"?i.select(`[id="${n}"]`):G(`[id="${n}"]`),c=(_==null?void 0:_.width)??g.width,m=(_==null?void 0:_.height)??g.width,b=(_==null?void 0:_.useMaxWidth)??g.useMaxWidth,y=(_==null?void 0:_.nodeAlignment)??g.nodeAlignment,x=(_==null?void 0:_.prefix)??g.prefix,E=(_==null?void 0:_.suffix)??g.suffix,L=(_==null?void 0:_.showValues)??g.showValues,A=a.db.getGraph(),N=se[y];jt().nodeId(d=>d.id).nodeWidth(10).nodePadding(10+(L?15:0)).nodeAlign(N).extent([[0,0],[c,m]])(A);const S=At(Tt);o.append("g").attr("class","nodes").selectAll(".node").data(A.nodes).join("g").attr("class","node").attr("id",d=>(d.uid=ft.next("node-")).id).attr("transform",function(d){return"translate("+d.x0+","+d.y0+")"}).attr("x",d=>d.x0).attr("y",d=>d.y0).append("rect").attr("height",d=>d.y1-d.y0).attr("width",d=>d.x1-d.x0).attr("fill",d=>S(d.id));const M=({id:d,value:w})=>L?`${d}
${x}${Math.round(w*100)/100}${E}`:d;o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(A.nodes).join("text").attr("x",d=>d.x0<c/2?d.x1+6:d.x0-6).attr("y",d=>(d.y1+d.y0)/2).attr("dy",`${L?"0":"0.35"}em`).attr("text-anchor",d=>d.x0<c/2?"start":"end").text(M);const O=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(A.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),P=(_==null?void 0:_.linkColor)||"gradient";if(P==="gradient"){const d=O.append("linearGradient").attr("id",w=>(w.uid=ft.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",w=>w.source.x1).attr("x2",w=>w.target.x0);d.append("stop").attr("offset","0%").attr("stop-color",w=>S(w.source.id)),d.append("stop").attr("offset","100%").attr("stop-color",w=>S(w.target.id))}let C;switch(P){case"gradient":C=d=>d.uid;break;case"source":C=d=>S(d.source.id);break;case"target":C=d=>S(d.target.id);break;default:C=P}O.append("path").attr("d",Xt()).attr("stroke",C).attr("stroke-width",d=>Math.max(1,d.width)),Et(void 0,o,0,b)},oe={draw:re},le=t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),ae=X.parse.bind(X);X.parse=t=>ae(le(t));const de={parser:X,db:ie,renderer:oe};export{de as diagram};
