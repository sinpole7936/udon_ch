(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[7253],{9080:(ie,$e,se)=>{se(5151),Opal.modules["bcdice/game_system/EarthDawn"]=function(i){var r,Q,re,E,N,d,M,G,ee,J,j=i.module,U=i.klass,D=i.const_set,V=i.send2,W=i.find_super,x=i.def,m=i.truthy,b=i.rb_gt,w=i.rb_lt,h=i.rb_minus,g=i.eqeqeq,c=i.rb_plus,F=i.neqeq,L=i.eqeq,I=i.rb_ge,P=i.send,A=[],a=i.nil;return r=A,Q=J=[j(A[0],"BCDice")].concat(r),G=[j(J[0],"GameSystem")].concat(Q),ee=i.$r(G),re=G,N=[E=U(G[0],ee("Base"),"EarthDawn")].concat(re),d=i.$r(N),(M=E.$$prototype).string=M.isFailed=a,D(N[0],"ID","EarthDawn"),D(N[0],"NAME","\u30a2\u30fc\u30b9\u30c9\u30fc\u30f3"),D(N[0],"SORT_KEY","\u3042\u3042\u3059\u3068\u304a\u3093"),D(N[0],"HELP_MESSAGE","\u30b9\u30c6\u30c3\u30d7\u30c0\u30a4\u30b9\u3000(xEn+k)\n\u30b9\u30c6\u30c3\u30d7x\u3001\u76ee\u6a19\u5024n(\u7701\u7565\u53ef\u80fd\uff09\u3001\u30ab\u30eb\u30de\u30c0\u30a4\u30b9k(D2-D20)\u3067\u30b9\u30c6\u30c3\u30d7\u30c0\u30a4\u30b9\u3092\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002\n\u632f\u308a\u8db3\u3057\u3082\u81ea\u52d5\u3002\n\u4f8b\uff099E\u300010E8\u300010E+D12\n"),E.$register_prefix("\\d+e"),x(E,"$initialize",function v(S){var e=this;return v.$$p=null,V(e,W(e,"initialize",v,!1,!0),"initialize",[S],null),e.sort_add_dice=!0}),x(E,"$eval_game_system_specific_command",function(S){return this.$ed_step(S)}),x(E,"$ed_step",function(S){return this.$getStepResult(S)}),x(E,"$getStepResult",function(S){var s=this,e=a,t=a,n=a,u=a,l=a,o=a,$=a,f=a,_=a,p=a,T=a,y=a,R=a,k=a,q=a,z=a,H=a,ne=a,K=a,B=a;return!m(/(\d+)E(\d+)?(\+)?(\d+)?(d\d+)?/i["$=~"](S))||(e=0,s.isFailed=!0,t=d("Regexp").$last_match(1).$to_i(),n=0,u=!1,l=0,o=0,m(b(t,40))&&(t=40),m(d("Regexp").$last_match(2))&&(n=d("Regexp").$last_match(2).$to_i(),m(b(n,43))&&(n=42)),m(d("Regexp").$last_match(3))&&(u=d("Regexp").$last_match(3).$to_i()),m(d("Regexp").$last_match(4))&&(l=d("Regexp").$last_match(4).$to_i()),m(d("Regexp").$last_match(5))&&(o=d("Regexp").$last_match(5)),m(w(n,0)))?a:(f=($=s.$getStepTable())["$[]"](0)["$[]"](h(t,1)),_=$["$[]"](1)["$[]"](h(t,1)),p=$["$[]"](2)["$[]"](h(t,1)),T=$["$[]"](3)["$[]"](h(t,1)),y=$["$[]"](4)["$[]"](h(t,1)),R=$["$[]"](5)["$[]"](h(t,1)),k=$["$[]"](6)["$[]"](h(t,1)),m(u)&&(g(/d20/i,q=o)?_=c(_,l):g(/d12/i,q)?p=c(p,l):g(/d10/i,q)?T=c(T,l):g(/d8/i,q)?y=c(y,l):g(/d6/i,q)?R=c(R,l):g(/d4/i,q)?k=c(k,l):f=c(f,l)),s.string="",s.$debug("d20step, d12step, d10step, d8step, d6step, d4step",_,p,T,y,R,k),e=c(e,s.$rollStep(20,_)),e=c(e,s.$rollStep(12,p)),e=c(e,s.$rollStep(10,T)),e=c(e,s.$rollStep(8,y)),e=c(e,s.$rollStep(6,R)),e=c(e,s.$rollStep(4,k)),m(b(f,0))&&(s.string=c(s.string,"+")),F(f,0)&&(s.string=c(s.string,f.$to_s()),e=c(e,f)),s.string=c(s.string," \uff1e "+e),z="\u30b9\u30c6\u30c3\u30d7"+t+" \uff1e "+s.string,L(n,0)||(s.string=c(s.string," \uff1e "),H=$["$[]"](7)["$[]"](h(n,1)),ne=$["$[]"](8)["$[]"](h(n,1)),K=$["$[]"](9)["$[]"](h(n,1)),B=$["$[]"](11)["$[]"](h(n,1)),s.string=m(s.isFailed)?c(s.string,"\u81ea\u52d5\u5931\u6557"):m(I(e,H))?c(s.string,"\u6700\u826f\u6210\u529f"):m(I(e,ne))?c(s.string,"\u512a\u6210\u529f"):m(I(e,K))?c(s.string,"\u826f\u6210\u529f"):m(I(e,n))?c(s.string,"\u6210\u529f"):m(w(e,B))?c(s.string,"\u5927\u5931\u6557"):c(s.string,"\u5931\u6557"),z="\u30b9\u30c6\u30c3\u30d7"+t+">="+n+" \uff1e "+s.string),z)}),x(E,"$getStepTable",function(){return[i.large_array_unpack("-2,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"),i.large_array_unpack("0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0"),i.large_array_unpack("0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1"),i.large_array_unpack("0,0,0,0,0,1,0,0,0,1,1,2,1,0,0,0,1,0,0,0,1,1,2,1,1,1,1,2,1,1,1,2,3,2,1,1,1,2,1,1,0,0,1,0,0,0,1,0,0,0,1,1,2,1"),i.large_array_unpack("0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,2,1,1,1,2,2,1,1,1,1,2,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0"),i.large_array_unpack("0,0,0,1,0,0,0,2,1,1,0,0,0,0,1,0,0,0,2,1,1,0,0,0,0,1,0,0,0,2,1,0,0,0,0,1,0,0,0,2,0,0,0,0,1,0,0,0,2,1,1,0,0,0"),i.large_array_unpack("1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0"),i.large_array_unpack("6,8,10,12,14,17,19,20,22,24,25,27,29,32,33,35,37,38,39,41,42,44,45,47,48,49,51,52,54,55,56,58,59,60,62,64,65,67,68,70,71,72"),i.large_array_unpack("4,6,8,10,11,13,15,16,18,19,21,22,24,26,27,29,30,32,33,34,35,37,38,40,41,42,43,45,46,47,48,49,51,52,53,55,56,58,59,60,61,62"),i.large_array_unpack("2,4,6,7,9,10,12,13,14,15,17,18,20,21,22,24,25,26,27,28,29,31,32,33,34,35,36,38,39,40,41,42,43,45,46,47,48,50,51,52,53,54"),i.large_array_unpack("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42"),i.large_array_unpack("0,1,1,1,1,2,2,3,4,5,5,6,6,7,8,8,9,10,11,12,13,13,14,15,16,17,18,18,18,20,21,22,23,23,24,25,26,26,27,28,29,30")]}),x(E,"$rollStep",function(S,s){var e=this,t=a;return e.$debug("rollStep diceType, diceCount, @string",S,s,e.string),t=0,m(b(s,0))&&(m(e.string["$empty?"]())||(e.string=c(e.string,"+")),e.string=c(e.string,s+"d"+S+"["),e.$debug("rollStep @string",e.string),P(s,"times",[],function n(u){var l=null==n.$$s?this:n.$$s,o=a,$=a;for(null==l.randomizer&&(l.randomizer=a),null==l.string&&(l.string=a),null==u&&(u=a),o=l.randomizer.$roll_once(S),F(o,1)&&(l.isFailed=!1),$=o;L(o,S);)o=l.randomizer.$roll_once(S),$=c($,o);return t=c(t,$),F(u,0)&&(l.string=c(l.string,",")),l.string=c(l.string,$.$to_s())},{$$s:e}),e.string=c(e.string,"]")),t})},Opal.queue(function(i){var J,G,N,d,M,v,S,C,te,Q,j=i.module,U=i.klass,D=i.const_set,V=i.send2,W=i.find_super,x=i.def,m=i.to_ary,b=i.truthy,w=i.eqeq,h=i.send,g=i.rb_plus,c=i.rb_gt,F=i.rb_lt,L=i.rb_le,I=i.rb_minus,P=i.rb_divide,A=i.neqeq,Y=[],r=i.nil;return i.top.$require("bcdice/game_system/EarthDawn"),J=Y,G=Q=[j(Y[0],"BCDice")].concat(J),C=[j(Q[0],"GameSystem")].concat(G),te=i.$r(C),N=C,M=[d=U(C[0],te("EarthDawn"),"EarthDawn4")].concat(N),v=i.$r(M),(S=d.$$prototype).calcText=S.isFailed=r,D(M[0],"ID","EarthDawn4"),D(M[0],"NAME","\u30a2\u30fc\u30b9\u30c9\u30fc\u30f34\u7248"),D(M[0],"SORT_KEY","\u3042\u3042\u3059\u3068\u304a\u30934"),D(M[0],"HELP_MESSAGE","\u30b9\u30c6\u30c3\u30d7\u30c0\u30a4\u30b9\u3000(xEnK)\n\u30b9\u30c6\u30c3\u30d7x\u3001\u76ee\u6a19\u5024n(\u7701\u7565\u53ef\u80fd\uff09\u3067\u30b9\u30c6\u30c3\u30d7\u30c0\u30a4\u30b9\u3092\u30ed\u30fc\u30eb\u3002\n\u30ab\u30eb\u30de\u30c0\u30a4\u30b9\u4f7f\u7528\u6642\u306f\u672b\u5c3e\u306bK\u3092\u8ffd\u52a0\uff08\u7701\u7565\u53ef\u80fd\uff09\n\u4f8b\uff09\u30b9\u30c6\u30c3\u30d710\uff1a10E\n\u3000\u3000\u30b9\u30c6\u30c3\u30d710\u3001\u76ee\u6a19\u50248\uff1a10E8\n\u3000\u3000\u30b9\u30c6\u30c3\u30d710\u3001\u76ee\u6a19\u50248\u3001\u30ab\u30eb\u30de\u30c0\u30a4\u30b9\uff1a10E8K\n"),d.$register_prefix("\\d+e"),x(d,"$initialize",function s(e){var n=this;return s.$$p=null,V(n,W(n,"initialize",s,!1,!0),"initialize",[e],null),n.sort_add_dice=!0,n.calcText=""}),x(d,"$eval_game_system_specific_command",function(e){return this.$ed_step(e)}),x(d,"$ed_step",function(e){return this.$getStepResult(e)}),x(d,"$getStepResult",function(e){var t,n,o,$,f,l=r;return n=this.$getStepResultInfos(e),o=null==(t=m(n))[1]?r:t[1],$=null==t[2]?r:t[2],f=null==t[3]?r:t[3],b((l=null==t[0]?r:t[0])["$nil?"]())?r:w(f,0)?l+" \uff1e "+o+" \uff1e "+$:l+">="+f+" \uff1e "+o+" \uff1e "+$+" \uff1e "+this.$getSuccess(f,$)}),x(d,"$getStepResultInfos",function(e){var t,n,q,H,u=this,l=r,o=r,$=r,f=r,_=r,p=r,T=r,y=r,R=r,k=r,z=r;for(l=[],o=[],$=[],f=0;b(b(_=e["$nil?"]()["$!"]())?e["$empty?"]()["$!"]():_);){if(u.$debug("=====>!! str",e),n=u.$getStepResultInfo(e),T=null==(t=m(n))[1]?r:t[1],y=null==t[2]?r:t[2],R=null==t[3]?r:t[3],k=null==t[4]?r:t[4],u.$debug("=====> step",p=null==t[0]?r:t[0]),b(p["$nil?"]()))return r;if(l["$<<"](p),o["$<<"](T),$["$<<"](y),w(R,0)||(f=R),u.$debug("=====> nextText",k),w(k,e))break;e=k}return q=l.$join("+"),z=o.$join(")+("),H=h($,"inject",[],function(K,B){return null==K&&(K=r),null==B&&(B=r),g(K,B)}),b(c(o.$size(),1))&&(z=g(g("(",z),")")),b(c($.$size(),1))&&(z=g(z," \uff1e ("+$.$join("+")+")")),[q,z,H,f]}),x(d,"$getStepResultInfo",function(e){var t=this,n=r,u=r,l=r,o=r,$=r,f=r,_=r,T=r;return!b(/^(\d+)E(\d+)?(K)?(\+\d+$)?(\+(.*))?/i["$=~"](e))||(n=0,t.isFailed=!0,u=v("Regexp").$last_match(1).$to_i(),l=v("Regexp").$last_match(2).$to_i(),b(F(l,0)))?r:(o=v("Regexp").$last_match(3)["$nil?"]()["$!"](),$=v("Regexp").$last_match(4).$to_i(),f=v("Regexp").$last_match(6),_=t.$getStepInfo(u),t.$debug("stepInfo",_),t.calcText="",h([20,12,10,8,6,4],"each",[],function R(k){return null==k&&(k=r),n=g(n,(null==R.$$s?this:R.$$s).$rollStep(k,_.$shift()))},{$$s:t}),T=_.$shift(),b(o)&&(n=g(n,t.$rollStep(6,1))),t.calcText=g(t.calcText,g(t.$getModifyText(T),t.$getModifyText($))),n=g(n,g(T,$)),["\u30b9\u30c6\u30c3\u30d7"+u,t.calcText,n,l,f])}),x(d,"$getModifyText",function(e){var t=r;return t="",w(e,0)||(b(c(e,0))&&(t=g(t,"+")),t=g(t,e.$to_s())),t}),x(d,"$getBaseStepTable",function(){return[[1,[0,0,0,0,0,1,-2]],[2,[0,0,0,0,0,1,-1]],[3,[0,0,0,0,0,1,0]],[4,[0,0,0,0,1,0,0]],[5,[0,0,0,1,0,0,0]],[6,[0,0,1,0,0,0,0]],[7,[0,1,0,0,0,0,0]]]}),x(d,"$getStepInfo",function(e){var u,t=this,n=r,l=r,o=r,$=r,f=r,_=r,p=r,T=r;return u=(n=t.$getBaseStepTable()).$last().$first(),b(L(e,u))?t.$get_table_by_number(e,n):(l=[1,0,0,0,0,0,0],o=I(I(e,u),1),f=[0,0,0,0,0,0,0],_=P(o,($=[[0,0,0,0,2,0,0],[0,0,0,1,1,0,0],[0,0,0,2,0,0,0],[0,0,1,1,0,0,0],[0,0,2,0,0,0,0],[0,1,1,0,0,0,0],[0,2,0,0,0,0,0],[0,1,0,0,2,0,0],[0,1,0,1,1,0,0],[0,1,0,2,0,0,0],[0,1,1,1,0,0,0]]).$size()).$to_i(),h(_,"times",[],function y(){return(null==y.$$s?this:y.$$s).$addStepToResult(f,l)},{$$s:t}),p=o["$%"]($.$size()),T=$["$[]"](p),t.$addStepToResult(f,T),f)}),x(d,"$addStepToResult",function(e,t){return h(e.$size(),"times",[],function(u){var l;return null==u&&(u=r),l=[u,g(e["$[]"](u),t["$[]"](u))],h(e,"[]=",l),l[l.length-1]}),e}),x(d,"$getSuccess",function(e,t){var u=r;return b(this.isFailed)?"\u81ea\u52d5\u5931\u6557":(u=I(t,e),this.$debug("diff",u),b(F(u,0))?"\u5931\u6557":"\u6210\u529f \u30ec\u30d9\u30eb\uff1a"+g(P(u,5).$to_i(),1))}),x(d,"$rollStep",function(e,t){var n=this,u=r;return n.$debug("rollStep diceType, diceCount, @calcText",e,t,n.calcText),u=0,b(c(t,0))&&(b(n.calcText["$empty?"]())||(n.calcText=g(n.calcText,"+")),n.calcText=g(n.calcText,t+"d"+e+"["),n.$debug("rollStep string",n.calcText),h(t,"times",[],function l(o){var $=null==l.$$s?this:l.$$s,f=r,_=r;for(null==$.randomizer&&($.randomizer=r),null==$.calcText&&($.calcText=r),null==o&&(o=r),f=$.randomizer.$roll_once(e),A(f,1)&&($.isFailed=!1),_=f;w(f,e);)f=$.randomizer.$roll_once(e),_=g(_,f);return u=g(u,_),A(o,0)&&($.calcText=g($.calcText,",")),$.calcText=g($.calcText,_.$to_s())},{$$s:n}),n.calcText=g(n.calcText,"]")),u})})}}]);