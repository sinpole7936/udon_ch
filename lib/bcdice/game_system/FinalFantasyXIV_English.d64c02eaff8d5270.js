(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[1763],{2526:(Y,H,L)=>{L(5151),Opal.modules["bcdice/game_system/FinalFantasyXIV"]=function(n){var P,G,z,o,$,a,v,I,y,g=n.module,V=n.klass,s=n.const_set,r=n.truthy,h=n.def,k=n.hash2,x=n.rb_gt,F=n.rb_plus,X=n.eqeq,S=n.rb_ge,T=[],e=n.nil,A=n.$$$;return P=T,G=y=[g(T[0],"BCDice")].concat(P),v=[g(y[0],"GameSystem")].concat(G),I=n.$r(v),z=v,$=[o=V(v[0],I("Base"),"FinalFantasyXIV")].concat(z),a=n.$r($),o.$$prototype.randomizer=e,s($[0],"ID","FinalFantasyXIV"),s($[0],"NAME","FINAL FANTSY XIV TTRPG"),s($[0],"SORT_KEY","\u3075\u3042\u3044\u306a\u308b\u3075\u3042\u3093\u305f\u3057\u304414TTRPG"),s($[0],"HELP_MESSAGE","\u30fb\u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a nAB+m>=x\n  d20\u306e\u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a\u3092\u884c\u3046\u3002\u30c0\u30a4\u30b9\u6570\u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u5927\u304d\u3044\u51fa\u76ee1\u500b\u3092\u63a1\u7528\u3059\u308b\u3002\n  n: \u30c0\u30a4\u30b9\u6570\uff08\u7701\u7565\u6642 1\uff09\n  m: \u4fee\u6b63\u5024\uff08\u7701\u7565\u53ef\uff09\n  x: \u76ee\u6a19\u5024\uff08\u7701\u7565\u53ef\uff09\n  \u57fa\u672c\u52b9\u679c\u306e\u307f\u3001\u30c0\u30a4\u30ec\u30af\u30c8\u30d2\u30c3\u30c8\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u3092\u81ea\u52d5\u5224\u5b9a\u3002\n  \u4f8b\uff09AB, AB+5, AB+5>=14, 2AB+5>=14\n\u30fb\u884c\u70ba\u5224\u5b9a nDC+m>=x\n  \u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a\u3068\u540c\u69d8\u3002\n  \u5931\u6557\u3001\u6210\u529f\u3092\u81ea\u52d5\u5224\u5b9a\u3002\n"),o.$register_prefix("\\d*AB","\\d*DC"),h(o,"$eval_game_system_specific_command",function(p){var u;return r(u=this.$abirity_roll(p))?u:this.$action_roll(p)}),o.$private(),h(o,"$abirity_roll",function(p){var i=this,t=e,c=e,B=e,m=e,C=e,f=e,_=e,d=e,l=e,E=e;return t=A(a("Command"),"Parser").$new("AB",k(["round_type"],{round_type:i.$round_type()})).$enable_prefix_number().$restrict_cmp_op_to(">=",e).$parse(p),r(t)?(c=r(B=t.$prefix_number())?B:1,m=i.randomizer.$roll_barabara(c,20).$sort(),r(x(c,1))&&(C="["+m.$join(",")+"]"),_=(f=m["$[]"](-1,1))["$[]"](0),d=F(_,t.$modify_number()),l=X(_,20)?a("Result").$critical(i.$translate("critical")):r(t.$cmp_op()["$nil?"]())?a("Result").$new():r(S(d,t.$target_number()))?a("Result").$success(i.$translate("FinalFantasyXIV.directhit")):a("Result").$failure(i.$translate("FinalFantasyXIV.normalhit")),E=["("+t.$to_s("after_modify_number")+")",C,_+"["+f.$join(",")+"]"+a("Format").$modifier(t.$modify_number()),d,l.$text()].$compact(),l["$text="](E.$join(" \uff1e ")),l):e}),h(o,"$action_roll",function(p){var i=this,t=e,c=e,B=e,m=e,C=e,f=e,_=e,d=e,l=e,E=e;return t=A(a("Command"),"Parser").$new("DC",k(["round_type"],{round_type:i.$round_type()})).$enable_prefix_number().$restrict_cmp_op_to(">=",e).$parse(p),r(t)?(c=r(B=t.$prefix_number())?B:1,m=i.randomizer.$roll_barabara(c,20).$sort(),r(x(c,1))&&(C="["+m.$join(",")+"]"),_=(f=m["$[]"](-1,1))["$[]"](0),d=F(_,t.$modify_number()),l=r(t.$cmp_op()["$nil?"]())?a("Result").$new():r(S(d,t.$target_number()))?a("Result").$success(i.$translate("success")):a("Result").$failure(i.$translate("failure")),E=["("+t.$to_s("after_modify_number")+")",C,_+"["+f.$join(",")+"]"+a("Format").$modifier(t.$modify_number()),d,l.$text()].$compact(),l["$text="](E.$join(" \uff1e ")),l):e})},Opal.queue(function(n){var T,P,v,I,b,y,w,A,g=n.module,V=n.klass,s=n.const_set,r=n.send2,h=n.find_super,k=n.def,F=[];return n.top.$require("bcdice/game_system/FinalFantasyXIV"),T=F,P=A=[g(F[0],"BCDice")].concat(T),y=[g(A[0],"GameSystem")].concat(P),w=n.$r(y),v=y,s((b=[I=V(y[0],w("FinalFantasyXIV"),"FinalFantasyXIV_English")].concat(v))[0],"ID","FinalFantasyXIV:English"),s(b[0],"NAME","FINAL FANTSY XIV TTRPG(English)"),s(b[0],"SORT_KEY","\u56fd\u969b\u5316:English:FINAL FANTASY XIV TTRPG"),s(b[0],"HELP_MESSAGE","Ability Checks nAB+m>=CR\n  Perform a d20 ability check. If a die count is specified, the highest roll is adopted.\n  n: die count(optional)\n  m: modifiy number(optional)\n  CR: Challenge Ratting(optional)\n  Base Effect only, Direct hit and Critical are automatically evaluated.\n  Example: AB, AB+5, AB+5>=14, 2AB+5>=14\nMaking checks nDC+m>=CR\n  Same as ability check.\n  Success and Failure ar automatically evaluated.\n"),I.$register_prefix_from_super_class(),k(I,"$initialize",function R(z){var $=this;return R.$$p=null,r($,h($,"initialize",R,!1,!0),"initialize",[z],null),$.locale="en_us"})})}}]);