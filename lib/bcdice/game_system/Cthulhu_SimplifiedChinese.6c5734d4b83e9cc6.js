(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[6610],{2629:(O,ee,Q)=>{Q(5151),Opal.modules["bcdice/arithmetic_evaluator"]=function(e){var k,K,R,Y,w,z,T,C,y=e.module,A=e.ensure_kwargs,g=e.truthy,H=e.thrower,I=e.def,h=[],m=e.nil,s=e.$$$;return k=h,K=C=[y(h[0],"BCDice")].concat(k),T=[z=y(C[0],"ArithmeticEvaluator")].concat(K),Y=[R=e.get_singleton_class(z)].concat(T),w=e.$r(Y),I(R,"$eval",function(S,v){try{H("eval_return");var p,F=m;return null==(p=(v=A(v)).$$smap.round_type)&&(p=s(w("RoundType"),"FLOOR")),g(S)&&g(F=w("Arithmetic").$eval(S,p))?F:0}catch(B){if(B===e.t_eval_return)return B.$v;throw B}},-2)},Opal.modules["bcdice/game_system/Cthulhu"]=function(e){var v,B,Z,i,n,a,u,d,q,P,j,J,V,p,y=e.module,A=e.klass,g=e.const_set,H=e.send2,I=e.find_super,h=e.def,m=e.eqeqeq,s=e.truthy,E=e.rb_le,k=e.rb_gt,D=e.rb_plus,C=e.send,G=e.thrower,K=e.rb_divide,z=e.rb_times,T=e.rb_lt,R=e.rb_ge,N=e.rb_minus,w=[],r=e.nil;return e.top.$require("bcdice/arithmetic_evaluator"),v=w,B=p=[y(w[0],"BCDice")].concat(v),J=[y(p[0],"GameSystem")].concat(B),V=e.$r(J),Z=J,q=[d=A(J[0],V("Base"),"Cthulhu")].concat(Z),P=e.$r(q),(j=d.$$prototype).randomizer=j.locale=j.special_percentage=j.critical_percentage=j.fumble_percentage=r,g(q[0],"ID","Cthulhu"),g(q[0],"NAME","\u30af\u30c8\u30a5\u30eb\u30d5\u795e\u8a71TRPG"),g(q[0],"SORT_KEY","\u304f\u3068\u3046\u308b\u3075\u3057\u3093\u308fTRPG"),g(q[0],"HELP_MESSAGE","c=\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024 \uff0f f=\u30d5\u30a1\u30f3\u30d6\u30eb\u5024 \uff0f s=\u30b9\u30da\u30b7\u30e3\u30eb\n\n1d100<=n    c\u30fbf\u30fbs\u3059\u3079\u3066\u30aa\u30d5\uff08\u5358\u7d14\u306a\u6570\u5024\u6bd4\u8f03\u5224\u5b9a\u306e\u307f\u884c\u3044\u307e\u3059\uff09\n\n\u30fbcfs\u5224\u5b9a\u4ed8\u304d\u5224\u5b9a\u30b3\u30de\u30f3\u30c9\n\nCC\t 1d100\u30ed\u30fc\u30eb\u3092\u884c\u3046 c=1\u3001f=100\nCCB  \u540c\u4e0a\u3001c=5\u3001f=96\n\n\u4f8b\uff1aCC<=80  \uff08\u6280\u80fd\u502480\u3067\u884c\u70ba\u5224\u5b9a\u30021%\u30eb\u30fc\u30eb\u3067cf\u9069\u7528\uff09\n\u4f8b\uff1aCCB<=55 \uff08\u6280\u80fd\u502455\u3067\u884c\u70ba\u5224\u5b9a\u30025%\u30eb\u30fc\u30eb\u3067cf\u9069\u7528\uff09\n\n\u30fb\u7d44\u307f\u5408\u308f\u305b\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\n\nCBR(x,y)\tc=1\u3001f=100\nCBRB(x,y)\tc=5\u3001f=96\n\n\u30fb\u62b5\u6297\u8868\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\nRES(x-y)\tc=1\u3001f=100\nRESB(x-y)\tc=5\u3001f=96\n\n\u203b\u6545\u969c\u30ca\u30f3\u30d0\u30fc\u5224\u5b9a\n\n\u30fbCC(x) c=1\u3001f=100\nx=\u6545\u969c\u30ca\u30f3\u30d0\u30fc\u3002\u51fa\u76eex\u4ee5\u4e0a\u304c\u51fa\u305f\u4e0a\u3067\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u304c\u540c\u6642\u306b\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u5171\u306b\u51fa\u529b\u3059\u308b\uff08\u30c6\u30ad\u30b9\u30c8\u300c\u30d5\u30a1\u30f3\u30d6\u30eb\uff06\u6545\u969c\u300d\uff09\n\u30d5\u30a1\u30f3\u30d6\u30eb\u3067\u306a\u3044\u5834\u5408\u3001\u6210\u529f\u30fb\u5931\u6557\u306b\u95a2\u308f\u3089\u305a\u30c6\u30ad\u30b9\u30c8\u300c\u6545\u969c\u300d\u306e\u307f\u3092\u51fa\u529b\u3059\u308b\uff08\u6210\u529f\u30fb\u5931\u6557\u3092\u51fa\u529b\u305b\u305a\u3001\u4e0a\u66f8\u304d\u3057\u305f\u3082\u306e\u3092\u51fa\u529b\u3059\u308b\u5f62\uff09\n\n\u30fbCCB(x) c=5\u3001f=96\n\u540c\u4e0a\n\n"),d.$register_prefix("CCB?","RESB?","CBRB?"),h(d,"$initialize",function b(c){var n=this;return b.$$p=null,H(n,I(n,"initialize",b,!1,!0),"initialize",[c],null),n.special_percentage=20,n.critical_percentage=1,n.fumble_percentage=1}),h(d,"$eval_game_system_specific_command",function(c){var n,i=this;return m(/CCB/i,n=c)?(i.critical_percentage=5,i.fumble_percentage=5,i.$getCheckResult(c)):m(/CC/i,n)?(i.critical_percentage=1,i.fumble_percentage=1,i.$getCheckResult(c)):m(/RESB/i,n)?(i.critical_percentage=5,i.fumble_percentage=5,i.$getRegistResult(c)):m(/CBRB/i,n)?(i.critical_percentage=5,i.fumble_percentage=5,i.$getCombineRoll(c)):m(/RES/i,n)?(i.critical_percentage=1,i.fumble_percentage=1,i.$getRegistResult(c)):m(/CBR/i,n)?(i.critical_percentage=1,i.fumble_percentage=1,i.$getCombineRoll(c)):r}),d.$private(),h(d,"$getCheckResult",function(c){try{G("eval_return");var n=this,a=r,u=r,l=r,t=r,$=r,f=r;return a=/^CCB?(\d+)?(?:<=([+-\/*\d]+))?$/i.$match(c),s(a)?(u=a["$[]"](1).$to_i(),l=P("ArithmeticEvaluator").$eval(a["$[]"](2)),s(E(l,0))?(t=n.randomizer.$roll_once(100),P("Result").$new("(1D100) \uff1e "+t)):($="(1D100<="+l+")",s(k(u,0))&&($=D($," "+n.$translate("Cthulhu.broken_number")+"["+u+"]")),t=n.randomizer.$roll_once(100),f=n.$compare(t,l,u),C(f.$to_result(),"tap",[],function(_){var x;return null==_&&(_=r),x=[$+" \uff1e "+t+" \uff1e "+f.$text()],C(_,"text=",x),x[x.length-1]}))):r}catch(o){if(o===e.t_eval_return)return o.$v;throw o}}),i=q,a=[n=A(q[0],null,"CompareResult")].concat(i),u=e.$r(a),n.$include(u("Translate")),n.$attr_accessor("success","failure","critical","fumble","special","broken"),h(n,"$initialize",function(t){var $=this;return $.locale=t,$.success=!1,$.failure=!1,$.critical=!1,$.fumble=!1,$.special=!1,$.broke=!1}),h(n,"$text",function(){var t=this;return s(t.$critical())&&s(t.$special())?t.$translate("Cthulhu.critical_special"):s(t.$critical())?t.$translate("Cthulhu.critical"):s(t.$special())?t.$translate("Cthulhu.special"):s(t.$success())?t.$translate("success"):s(t.$broken())&&s(t.$fumble())?t.$translate("Cthulhu.fumble")+"/"+t.$translate("Cthulhu.broken"):s(t.$broken())?t.$translate("Cthulhu.broken"):s(t.$fumble())?t.$translate("Cthulhu.fumble"):s(t.$failure())?t.$translate("failure"):r}),h(n,"$to_result",function(){return C(u("Result").$new(),"tap",[],function $(f){var o,_=null==$.$$s?this:$.$$s;return null==f&&(f=r),f["$success="](_.$success()),f["$failure="](_.$failure()),f["$critical="](_.$critical()),o=[_.$fumble()],C(f,"fumble=",o),o[o.length-1]},{$$s:this})}),h(d,"$compare",function(c,i,n){var l,a=this,u=r;return null==n&&(n=0),u=P("CompareResult").$new(a.locale),l=K(z(i,a.special_percentage),100).$to_i().$clamp(1,100),s(E(c,i))&&s(T(c,100))?(u["$success="](!0),u["$special="](E(c,l)),u["$critical="](E(c,a.critical_percentage))):(u["$failure="](!0),u["$fumble="](R(c,N(101,a.fumble_percentage)))),s(k(n,0))&&s(R(c,n))&&(u["$broken="](!0),u["$failure="](!0),u["$success="](!1),u["$special="](!1),u["$critical="](!1)),u},-3),h(d,"$getRegistResult",function(c){var i=this,n=r,a=r,u=r,l=r,t=r;return n=/^RESB?(-?\d+)$/i.$match(c),s(n)?(a=n["$[]"](1).$to_i(),u=D(z(a,5),50),s(T(u,5))?P("Result").$failure("(1d100<="+u+") \uff1e "+i.$translate("Cthulhu.automatic_failure")):s(k(u,95))?P("Result").$success("(1d100<="+u+") \uff1e "+i.$translate("Cthulhu.automatic_success")):(l=i.randomizer.$roll_once(100),t=i.$compare(l,u),C(t.$to_result(),"tap",[],function(f){var o;return null==f&&(f=r),o=["(1d100<="+u+") \uff1e "+l+" \uff1e "+t.$text()],C(f,"text=",o),o[o.length-1]}))):r}),h(d,"$getCombineRoll",function(c){var i=this,n=r,a=r,u=r,l=r,t=r,$=r,f=r;return n=/^CBR(B)?\((\d+),(\d+)\)$/i.$match(c),s(n)?(a=n["$[]"](2).$to_i(),u=n["$[]"](3).$to_i(),l=i.randomizer.$roll_once(100),t=i.$compare(l,a),$=i.$compare(l,u),f=s(t.$success())&&s($.$success())?i.$translate("success"):s(t.$success())||s($.$success())?i.$translate("Cthulhu.partial_success"):i.$translate("failure"),C(P("Result").$new(),"tap",[],function(_){var x,L=r;return null==_&&(_=r),_["$text="]("(1d100<="+a+","+u+") \uff1e "+l+"["+t.$text()+","+$.$text()+"] \uff1e "+f),_["$critical="](s(L=t.$critical())?L:$.$critical()),_["$fumble="](s(L=t.$fumble())?L:$.$fumble()),x=[s(L=t.$success())?L:$.$success()],C(_,"condition=",x),x[x.length-1]})):r})},Opal.queue(function(e){var D,z,r,S,v,R,N,G,y=e.module,A=e.klass,g=e.const_set,H=e.send2,I=e.find_super,h=e.def,s=[];return e.top.$require("bcdice/game_system/Cthulhu"),D=s,z=G=[y(s[0],"BCDice")].concat(D),R=[y(G[0],"GameSystem")].concat(z),N=e.$r(R),r=R,g((v=[S=A(R[0],N("Cthulhu"),"Cthulhu_SimplifiedChinese")].concat(r))[0],"ID","Cthulhu:SimplifiedChinese"),g(v[0],"NAME","\u514b\u82cf\u9c81\u7684\u547c\u5524 \u7b2c\u516d\u7248"),g(v[0],"SORT_KEY","\u56fd\u969b\u5316:Simplified Chinese:\u514b\u82cf\u9c81\u7684\u547c\u5524 \u7b2c\u516d\u7248"),g(v[0],"HELP_MESSAGE","c=\u5927\u6210\u529f\u503c \uff0f f=\u5927\u5931\u8d25\u503c \uff0f s=\u6781\u96be\u6210\u529f\n\n1d100<=n    c\u30fbf\u30fbs\u5168\u90e8\u5173\u95ed\uff08\u53ea\u8fdb\u884c\u6570\u503c\u6bd4\u8f83\u5224\u5b9a\uff09\n\n\u30fb\u5e26cfs\u5224\u5b9a\u7684\u5224\u5b9a\u6307\u4ee4\n\nCC\t \u63b71d100\u9ab0 c=1\u3001f=100\nCCB  \u540c\u4e0a\uff0cc=5\u3001f=96\n\n\u4f8b\uff1aCC<=80  \uff08\u4ee580\u6280\u80fd\u5024\u8fdb\u884c\u884c\u4e3a\u5224\u5b9a\u3002\u5e76\u4ee51%\u7684\u6807\u51c6\u4f7f\u7528cf\u7684\u503c\uff09\n\u4f8b\uff1aCCB<=55 \uff08\u4ee555\u6280\u80fd\u5024\u8fdb\u884c\u884c\u4e3a\u5224\u5b9a\u3002\u5e76\u4ee55%\u7684\u6807\u51c6\u4f7f\u7528cf\u7684\u503c\uff09\n\n\u30fb\u5173\u4e8e\u7ec4\u5408\u9ab0\n\nCBR(x,y)\tc=1\u3001f=100\nCBRB(x,y)\tc=5\u3001f=96\n\n\u30fb\u5173\u4e8e\u5bf9\u6297\u9ab0\nRES(x-y)\tc=1\u3001f=100\nRESB(x-y)\tc=5\u3001f=96\n\n\u203b\u6545\u969c\u503c\u5224\u5b9a\n\n\u30fbCC(x) c=1\u3001f=100\nx=\u6545\u969c\u503c\u3002\u9ab0\u70b9\u5728x\u4ee5\u4e0a\u5e76\u4e14\u53d1\u751f\u5927\u5931\u8d25\u65f6\uff0c\u4f1a\u548c\u5927\u5931\u8d25\u4e00\u8d77\u663e\u793a\uff08\u6587\u672c\u4e3a\u300c\u5927\u5931\u8d25\uff06\u6545\u969c\u300d\uff09\n\u6ca1\u6709\u53d1\u751f\u5927\u5931\u8d25\u65f6\uff0c\u4e0e\u6210\u529f\u6216\u5931\u8d25\u65e0\u5173\uff0c\u6587\u6597\u90fd\u4f1a\u663e\u793a\u4e3a\u300c\u6545\u969c\u300d\uff08\u4e0d\u663e\u793a\u6210\u529f\u6216\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u8986\u76d6\u663e\u793a\uff09\n\n\u30fbCCB(x) c=5\u3001f=96\n\u540c\u4e0a\n\n"),S.$register_prefix_from_super_class(),h(S,"$initialize",function M(p){var B=this;return M.$$p=null,H(B,I(B,"initialize",M,!1,!0),"initialize",[p],null),B.locale="zh_hans"})})}}]);