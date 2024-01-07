import{c as t,v as e,x as n,s as i,g as s,b as r,a,z as o,h as l,i as c}from"./mermaid.core.86605fbd.js";import{f as h,d as u,b as y,g as p}from"./svgDrawCommon-4835440b.dd6b78b7.js";import{a as d}from"./arc.7ab96371.js";import"./app.c4cd2a44.js";import"./constant.f07fca73.js";var f=function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[6,8,10,11,12,14,16,17,18],n=[1,9],i=[1,10],s=[1,11],r=[1,12],a=[1,13],o=[1,14],l={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 6:case 7:this.$=[];break;case 8:i.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 13:i.addTask(r[o-1],r[o]),this.$="task"}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:i,14:s,16:r,17:a,18:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:n,12:i,14:s,16:r,17:a,18:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,o="",l=0,c=0,h=2,u=1,y=r.slice.call(arguments,1),p=Object.create(this.lexer),d={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(d.yy[f]=this.yy[f]);p.setInput(t,d.yy),d.yy.lexer=p,d.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var g=p.yylloc;r.push(g);var m=p.options&&p.options.ranges;function x(){var t;return"number"!=typeof(t=i.pop()||p.lex()||u)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,_,b,v,$,w,M,T,E={};;){if(_=n[n.length-1],this.defaultActions[_]?b=this.defaultActions[_]:(null==k&&(k=x()),b=a[_]&&a[_][k]),void 0===b||!b.length||!b[0]){var S="";for($ in T=[],a[_])this.terminals_[$]&&$>h&&T.push("'"+this.terminals_[$]+"'");S=p.showPosition?"Parse error on line "+(l+1)+":\n"+p.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(l+1)+": Unexpected "+(k==u?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(S,{text:p.match,token:this.terminals_[k]||k,line:p.yylineno,loc:g,expected:T})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+k);switch(b[0]){case 1:n.push(k),s.push(p.yytext),r.push(p.yylloc),n.push(b[1]),k=null,c=p.yyleng,o=p.yytext,l=p.yylineno,g=p.yylloc;break;case 2:if(w=this.productions_[b[1]][1],E.$=s[s.length-w],E._$={first_line:r[r.length-(w||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(w||1)].first_column,last_column:r[r.length-1].last_column},m&&(E._$.range=[r[r.length-(w||1)].range[0],r[r.length-1].range[1]]),void 0!==(v=this.performAction.apply(E,[o,c,l,d.yy,b[1],s,r].concat(y))))return v;w&&(n=n.slice(0,-1*w*2),s=s.slice(0,-1*w),r=r.slice(0,-1*w)),n.push(this.productions_[b[1]][0]),s.push(E.$),r.push(E._$),M=a[n[n.length-2]][n[n.length-1]],n.push(M);break;case 3:return!0}}return!0}},c={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:case 1:break;case 2:return 10;case 3:case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function h(){this.yy={}}return l.lexer=c,h.prototype=l,l.Parser=h,new h}();f.parser=f;const g=f;let m="";const x=[],k=[],_=[],b=function(){let t=!0;for(const[e,n]of _.entries())_[e].processed,t=t&&n.processed;return t},v={getConfig:()=>t().journey,clear:function(){x.length=0,k.length=0,m="",_.length=0,o()},setDiagramTitle:e,getDiagramTitle:n,setAccTitle:i,getAccTitle:s,setAccDescription:r,getAccDescription:a,addSection:function(t){m=t,x.push(t)},getSections:function(){return x},getTasks:function(){let t=b();let e=0;for(;!t&&e<100;)t=b(),e++;return k.push(..._),k},addTask:function(t,e){const n=e.substr(1).split(":");let i=0,s=[];1===n.length?(i=Number(n[0]),s=[]):(i=Number(n[0]),s=n[1].split(","));const r=s.map((t=>t.trim())),a={section:m,type:m,people:r,task:t,score:i};_.push(a)},addTaskOrg:function(t){const e={section:m,type:m,description:t,task:t,classes:[]};k.push(e)},getActors:function(){return function(){const t=[];return k.forEach((e=>{e.people&&t.push(...e.people)})),[...new Set(t)].sort()}()}},$=t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`,w=function(t,e){return u(t,e)},M=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n},T=function(t,e){return h(t,e)};let E=-1;const S=function(){function t(t,e,n,s,r,a,o,l){i(e.append("text").attr("x",n+r/2).attr("y",s+a/2+5).style("font-color",l).style("text-anchor","middle").text(t),o)}function e(t,e,n,s,r,a,o,l,c){const{taskFontSize:h,taskFontFamily:u}=l,y=t.split(/<br\s*\/?>/gi);for(let p=0;p<y.length;p++){const t=p*h-h*(y.length-1)/2,l=e.append("text").attr("x",n+r/2).attr("y",s).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",u);l.append("tspan").attr("x",n+r/2).attr("dy",t).text(y[p]),l.attr("y",s+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(l,o)}}function n(t,n,s,r,a,o,l,c){const h=n.append("switch"),u=h.append("foreignObject").attr("x",s).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,s,r,a,o,l,c),i(u,l)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),A=M,I=function(t,e,n){const i=t.append("g"),s=p();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),s.height=n.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,w(i,s),S(n)(e.text,i,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},n,e.colour)},P=T,j=function(t,e,n){const i=e.x+n.width/2,s=t.append("g");E++;s.append("line").attr("id","task"+E).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(t,e){const n=15,i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),s=t.append("g");s.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){const i=d().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(s):e.score<3?function(t){const i=d().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(s):s.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(s,{cx:i,cy:300+30*(5-e.score),score:e.score});const r=p();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width,r.height=n.height,r.class="task task-type-"+e.num,r.rx=3,r.ry=3,w(s,r);let a=e.x+14;e.people.forEach((t=>{const n=e.actors[t].color,i={cx:a,cy:e.y,r:7,fill:n,stroke:"#000",title:t,pos:e.actors[t].position};M(s,i),a+=10})),S(n)(e.task,s,r.x,r.y,r.width,r.height,{class:"task"},n,e.colour)},C=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},V={};const D=t().journey,O=D.leftMargin,L={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])},updateBounds:function(e,n,i,s){const r=t().journey,a=this;let o=0;var l;this.sequenceItems.forEach((function(t){o++;const c=a.sequenceItems.length-o+1;a.updateVal(t,"starty",n-c*r.boxMargin,Math.min),a.updateVal(t,"stopy",s+c*r.boxMargin,Math.max),a.updateVal(L.data,"startx",e-c*r.boxMargin,Math.min),a.updateVal(L.data,"stopx",i+c*r.boxMargin,Math.max),"activation"!==l&&(a.updateVal(t,"startx",e-c*r.boxMargin,Math.min),a.updateVal(t,"stopx",i+c*r.boxMargin,Math.max),a.updateVal(L.data,"starty",n-c*r.boxMargin,Math.min),a.updateVal(L.data,"stopy",s+c*r.boxMargin,Math.max))}))},insert:function(t,e,n,i){const s=Math.min(t,n),r=Math.max(t,n),a=Math.min(e,i),o=Math.max(e,i);this.updateVal(L.data,"startx",s,Math.min),this.updateVal(L.data,"starty",a,Math.min),this.updateVal(L.data,"stopx",r,Math.max),this.updateVal(L.data,"stopy",o,Math.max),this.updateBounds(s,a,r,o)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},N=D.sectionFills,F=D.sectionColours,z=function(e,n,i){const s=t().journey;let r="";const a=i+(2*s.height+s.diagramMarginY);let o=0,l="#CCC",c="black",h=0;for(const[t,u]of n.entries()){if(r!==u.section){l=N[o%N.length],h=o%N.length,c=F[o%F.length];let i=0;const a=u.section;for(let e=t;e<n.length&&n[e].section==a;e++)i+=1;const y={x:t*s.taskMargin+t*s.width+O,y:50,text:u.section,fill:l,num:h,colour:c,taskCount:i};I(e,y,s),r=u.section,o++}const i=u.people.reduce(((t,e)=>(V[e]&&(t[e]=V[e]),t)),{});u.x=t*s.taskMargin+t*s.width+O,u.y=a,u.width=s.diagramMarginX,u.height=s.diagramMarginY,u.colour=c,u.fill=l,u.num=h,u.actors=i,j(e,u,s),L.insert(u.x,u.y,u.x+u.width+s.taskMargin,450)}},B={setConf:function(t){Object.keys(t).forEach((function(e){D[e]=t[e]}))},draw:function(e,n,i,s){const r=t().journey,a=t().securityLevel;let o;"sandbox"===a&&(o=l("#i"+n));const h=l("sandbox"===a?o.nodes()[0].contentDocument.body:"body");L.init();const u=h.select("#"+n);C(u);const y=s.db.getTasks(),p=s.db.getDiagramTitle(),d=s.db.getActors();for(const t in V)delete V[t];let f=0;d.forEach((t=>{V[t]={color:r.actorColours[f%r.actorColours.length],position:f},f++})),function(e){const n=t().journey;let i=60;Object.keys(V).forEach((t=>{const s=V[t].color,r={cx:20,cy:i,r:7,fill:s,stroke:"#000",pos:V[t].position};A(e,r);const a={x:40,y:i+7,fill:"#666",text:t,textMargin:5|n.boxTextMargin};P(e,a),i+=20}))}(u),L.insert(0,0,O,50*Object.keys(V).length),z(u,y,0);const g=L.getBounds();p&&u.append("text").text(p).attr("x",O).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const m=g.stopy-g.starty+2*r.diagramMarginY,x=O+g.stopx+2*r.diagramMarginX;c(u,m,x,r.useMaxWidth),u.append("line").attr("x1",O).attr("y1",4*r.height).attr("x2",x-O-4).attr("y2",4*r.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const k=p?70:0;u.attr("viewBox",`${g.startx} -25 ${x} ${m+k}`),u.attr("preserveAspectRatio","xMinYMin meet"),u.attr("height",m+k+25)}},R={parser:g,db:v,renderer:B,styles:$,init:t=>{B.setConf(t.journey),v.clear()}};export{R as diagram};
