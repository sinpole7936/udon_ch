(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[5322],{1453:(Y,H,I)=>{I(5151),Opal.queue(function(t){var E,V,L,o,d,i,v,G,C,x=t.module,j=t.klass,h=t.const_set,$=t.truthy,g=t.def,F=t.hash2,A=t.rb_gt,R=t.rb_plus,T=t.eqeq,B=t.rb_ge,k=[],e=t.nil,w=t.$$$;return E=k,V=C=[x(k[0],"BCDice")].concat(E),v=[x(C[0],"GameSystem")].concat(V),G=t.$r(v),L=v,d=[o=j(v[0],G("Base"),"FinalFantasyXIV")].concat(L),i=t.$r(d),o.$$prototype.randomizer=e,h(d[0],"ID","FinalFantasyXIV"),h(d[0],"NAME","FINAL FANTSY XIV TTRPG"),h(d[0],"SORT_KEY","\u3075\u3042\u3044\u306a\u308b\u3075\u3042\u3093\u305f\u3057\u304414TTRPG"),h(d[0],"HELP_MESSAGE","\u30fb\u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a nAB+m>=x\n  d20\u306e\u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a\u3092\u884c\u3046\u3002\u30c0\u30a4\u30b9\u6570\u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u5927\u304d\u3044\u51fa\u76ee1\u500b\u3092\u63a1\u7528\u3059\u308b\u3002\n  n: \u30c0\u30a4\u30b9\u6570\uff08\u7701\u7565\u6642 1\uff09\n  m: \u4fee\u6b63\u5024\uff08\u7701\u7565\u53ef\uff09\n  x: \u76ee\u6a19\u5024\uff08\u7701\u7565\u53ef\uff09\n  \u57fa\u672c\u52b9\u679c\u306e\u307f\u3001\u30c0\u30a4\u30ec\u30af\u30c8\u30d2\u30c3\u30c8\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u3092\u81ea\u52d5\u5224\u5b9a\u3002\n  \u4f8b\uff09AB, AB+5, AB+5>=14, 2AB+5>=14\n\u30fb\u884c\u70ba\u5224\u5b9a nDC+m>=x\n  \u30a2\u30d3\u30ea\u30c6\u30a3\u5224\u5b9a\u3068\u540c\u69d8\u3002\n  \u5931\u6557\u3001\u6210\u529f\u3092\u81ea\u52d5\u5224\u5b9a\u3002\n"),o.$register_prefix("\\d*AB","\\d*DC"),g(o,"$eval_game_system_specific_command",function(f){var _;return $(_=this.$abirity_roll(f))?_:this.$action_roll(f)}),o.$private(),g(o,"$abirity_roll",function(f){var n=this,r=e,u=e,b=e,l=e,p=e,c=e,a=e,m=e,s=e,y=e;return r=w(i("Command"),"Parser").$new("AB",F(["round_type"],{round_type:n.$round_type()})).$enable_prefix_number().$restrict_cmp_op_to(">=",e).$parse(f),$(r)?(u=$(b=r.$prefix_number())?b:1,l=n.randomizer.$roll_barabara(u,20).$sort(),$(A(u,1))&&(p="["+l.$join(",")+"]"),a=(c=l["$[]"](-1,1))["$[]"](0),m=R(a,r.$modify_number()),s=T(a,20)?i("Result").$critical(n.$translate("critical")):$(r.$cmp_op()["$nil?"]())?i("Result").$new():$(B(m,r.$target_number()))?i("Result").$success(n.$translate("FinalFantasyXIV.directhit")):i("Result").$failure(n.$translate("FinalFantasyXIV.normalhit")),y=["("+r.$to_s("after_modify_number")+")",p,a+"["+c.$join(",")+"]"+i("Format").$modifier(r.$modify_number()),m,s.$text()].$compact(),s["$text="](y.$join(" \uff1e ")),s):e}),g(o,"$action_roll",function(f){var n=this,r=e,u=e,b=e,l=e,p=e,c=e,a=e,m=e,s=e,y=e;return r=w(i("Command"),"Parser").$new("DC",F(["round_type"],{round_type:n.$round_type()})).$enable_prefix_number().$restrict_cmp_op_to(">=",e).$parse(f),$(r)?(u=$(b=r.$prefix_number())?b:1,l=n.randomizer.$roll_barabara(u,20).$sort(),$(A(u,1))&&(p="["+l.$join(",")+"]"),a=(c=l["$[]"](-1,1))["$[]"](0),m=R(a,r.$modify_number()),s=$(r.$cmp_op()["$nil?"]())?i("Result").$new():$(B(m,r.$target_number()))?i("Result").$success(n.$translate("success")):i("Result").$failure(n.$translate("failure")),y=["("+r.$to_s("after_modify_number")+")",p,a+"["+c.$join(",")+"]"+i("Format").$modifier(r.$modify_number()),m,s.$text()].$compact(),s["$text="](y.$join(" \uff1e ")),s):e})})}}]);