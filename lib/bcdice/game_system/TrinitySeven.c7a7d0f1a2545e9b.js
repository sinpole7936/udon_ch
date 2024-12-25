(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[2219],{6038:(O,ee,X)=>{X(5151),Opal.modules["bcdice/dice_table/table"]=function(e){var z,q,A,p,K,B,G,w,P,T=e.module,E=e.klass,m=e.hash2,i=e.defs,f=e.truthy,D=e.def,g=e.rb_minus,M=[],h=e.nil;return z=M,q=P=[T(M[0],"BCDice")].concat(z),A=w=[T(P[0],"DiceTable")].concat(q),K=[p=E(w[0],null,"Table")].concat(A),B=e.$r(K),(G=p.$$prototype).times=G.sides=G.name=G.items=h,i(p,"$from_i18n",function(y,o){var c=h;return c=B("I18n").$t(y,m(["locale"],{locale:o})),this.$new(c["$[]"]("name"),c["$[]"]("type"),c["$[]"]("items"))}),D(p,"$initialize",function(y,o,d){var c=this,j=h;return c.name=y,c.items=d.$freeze(),j=/(\d+)D(\d+)/i.$match(o),f(j)||c.$raise(B("ArgumentError"),"Unexpected table type: "+o),c.times=j["$[]"](1).$to_i(),c.sides=j["$[]"](2).$to_i()}),D(p,"$roll",function(y){var d,o=this;return d=y.$roll_sum(o.times,o.sides),o.$choice(d)}),D(p,"$choice",function(y){var d,o=this;return d=g(y,o.times),B("RollResult").$new(o.name,y,o.items["$[]"](d))})},Opal.modules["bcdice/format"]=function(e){var x,I,q,S,w,k,T=e.module,E=e.eqeqeq,m=e.def,i=e.truthy,f=e.eqeq,D=e.rb_gt,g=[],M=e.nil;return x=g,I=k=[T(g[0],"BCDice")].concat(x),S=[q=T(k[0],"Format")].concat(I),w=e.$r(S),q.$module_function(),m(q,"$comparison_operator",function(u){var A;return E("==",A=u)?"=":E("!=",A)?"<>":E(w("Symbol"),A)?u.$to_s():M}),m(q,"$modifier",function(u){return i(u["$nil?"]())?M:f(u,0)?"":i(D(u,0))?"+"+u:u.$to_s()})},Opal.queue(function(e){var p,H,Z,v,C,_,o,d,B,T=e.module,E=e.klass,m=e.const_set,i=e.truthy,f=e.def,D=e.hash2,g=e.rb_plus,M=e.range,h=e.rb_ge,x=e.rb_le,z=e.to_ary,k=e.send,P=e.rb_gt,I=e.rb_times,q=e.eqeq,S=e.top,w=[],r=e.nil,u=e.$$$;return S.$require("bcdice/dice_table/table"),S.$require("bcdice/format"),p=w,H=B=[T(w[0],"BCDice")].concat(p),o=[T(B[0],"GameSystem")].concat(H),d=e.$r(o),Z=o,C=[v=E(o[0],d("Base"),"TrinitySeven")].concat(Z),_=e.$r(C),v.$$prototype.randomizer=r,m(C[0],"ID","TrinitySeven"),m(C[0],"NAME","\u30c8\u30ea\u30cb\u30c6\u30a3\u30bb\u30d6\u30f3RPG"),m(C[0],"SORT_KEY","\u3068\u308a\u306b\u3066\u3044\u305b\u3075\u3093RPG"),m(C[0],"HELP_MESSAGE",'\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u304c\u5909\u52d5\u3057\u305f\u547d\u4e2d\u53ca\u3073\u30017\u306e\u51fa\u76ee\u304c\u3042\u308b\u5834\u5408\u306e\u30c0\u30e1\u30fc\u30b8\u8a08\u7b97\u304c\u884c\u306a\u3048\u307e\u3059\u3002\n\u306a\u304a\u3001\u901a\u5e38\u306e\u5224\u5b9a\u3068\u3057\u3066\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n\n\u30fb\u767a\u52d5/\u547d\u4e2d\u3000\uff3bTR(\xb1c*)<=(x)\xb1(y*) \u53c8\u306f TR<=(x) \u306a\u3069\uff3d*\u306f\u5fc5\u9808\u3067\u306f\u306a\u3044\u9805\u76ee\u3067\u3059\u3002\n"TR(\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u306e\u4fee\u6b63\u5024*)<=(\u767a\u52d5/\u547d\u4e2d)\xb1(\u767a\u52d5/\u547d\u4e2d\u306e\u4fee\u6b63\u5024*)"\n\u52a0\u7b97\u6e1b\u7b97\u306e\u307f\u4fee\u6b63\u5024\u3082\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002 \uff3b\u4fee\u6b63\u5024\uff3d\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u4f8b\uff09TR<=50 TR<=60+20 TR7<=40 TR-7<=80 TR+10<=80+20\n\n\u30fb\u30c0\u30e1\u30fc\u30b8\u8a08\u7b97\u3000\uff3b(x)DM(c*)\xb1(y*) \u53c8\u306f (x)DM(c*) \u53c8\u306f (x)DM\xb1(y*)\uff3d*\u306f\u5fc5\u9808\u3067\u306f\u306a\u3044\u9805\u76ee\u3067\u3059\u3002\n"(\u30c0\u30a4\u30b9\u6570)DM(7\u306e\u51fa\u76ee\u306e\u6570*)+(\u4fee\u6b63*)"\n\u52a0\u7b97\u6e1b\u7b97\u306e\u307f\u4fee\u6b63\u5024\u3082\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002 \uff3b7\u306e\u51fa\u76ee\u306e\u6570\uff3d\u304a\u3088\u3073\uff3b\u4fee\u6b63\u5024\uff3d\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u4f8b\uff096DM2+1 5DM2 4DM 3DM+3\n\u5f8c\u304b\u30897\u306e\u51fa\u76ee\u306b\u5909\u66f4\u3059\u308b\u5834\u5408\u306fC(7*6\uff0b5)\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u3066\u8a08\u7b97\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n\u30fb\u540d\u524d\u8868\u3000[TRNAME]\n\u540d\u5b57\u3068\u540d\u524d\u3092\u51fa\u3057\u307e\u3059\u3002PC\u3084\u7a81\u7136\u73fe\u308c\u305fNPC\u306e\u540d\u4ed8\u3051\u306b\u3069\u3046\u305e\u3002\n\n'),v.$register_prefix("\\d+DM","TR","TRNAME"),f(v,"$eval_game_system_specific_command",function(s){var n,$,t=this;return t.$debug("eval_game_system_specific_command command",s),i(n=i($=t.$roll_hit(s))?$:t.$roll_damage(s))?n:t.$roll_name(s)}),f(v,"$roll_hit",function(s){var t=this,$=r,l=r,a=r,b=r,N=r,R=r;return $=u(_("Command"),"Parser").$new(/TR\d*/,D(["round_type"],{round_type:t.$round_type()})).$restrict_cmp_op_to("<=").$parse(s),i($)?(l=g($.$command()["$[]"](M(2,-1,!1)).$to_i(),$.$modify_number()),a=g(7,l),b=$.$target_number(),N=t.randomizer.$roll_once(100),R=t.$get_hit_roll_result(N,b,a),$["$command="]("TR"),$["$modify_number="](l),R["$text="]("("+$+") \uff1e "+N+" \uff1e "+R.$text()),t.$debug("eval_game_system_specific_command result text",R.$text()),R):r}),f(v,"$get_hit_roll_result",function(s,t,n){return i(h(s,96))?_("Result").$fumble("\u30d5\u30a1\u30f3\u30d6\u30eb"):i(x(s,n))?_("Result").$critical("\u30af\u30ea\u30c6\u30a3\u30ab\u30eb"):i(x(s,t))?_("Result").$success("\u6210\u529f"):_("Result").$failure("\u5931\u6557")}),f(v,"$roll_damage",function(s){var t,n,$=this,a=r,b=r,N=r,R=r,U=r,J=r,Q=r,Y=r;return a=u(_("Command"),"Parser").$new(/\d+DM\d*/,D(["round_type"],{round_type:$.$round_type()})).$restrict_cmp_op_to(r).$parse(s),i(a)?(n=k(a.$command().$split("DM",2),"map",[],"to_i".$to_proc()),b=null==(t=z(n))[0]?r:t[0],N=null==t[1]?r:t[1],R=a.$modify_number(),J=(U=$.randomizer.$roll_barabara(b,6).$sort()).$join(","),n=$.$get_roll_damage_result(b,N,U,R),Q=null==(t=z(n))[0]?r:t[0],"("+a+") \uff1e ["+J+"]"+(i((Y=null==t[1]?r:t[1])["$nil?"]())?"":"\u2192["+Y.$join(",")+"]")+_("Format").$modifier(R)+" \uff1e "+Q):r}),f(v,"$get_roll_damage_result",function(s,t,n,$){var a=r,b=r;return i(x(t,0))?[g(n.$sum(),$),r]:(a=n.$clone(),i(P(t,s))&&(t=s),k(t,"times",[],function(){return a.$shift(),n.$shift(),n.$push(7)}),b=a.$pop(),i(b["$nil?"]())&&(b=1),[g(g(I(b,7["$**"](t)),a.$sum()),$),n])}),f(v,"$result_1d100",function(s,t,n,$){return i(h(t,96))?_("Result").$fumble("\u30d5\u30a1\u30f3\u30d6\u30eb"):i(x(t,7))?_("Result").$critical("\u30af\u30ea\u30c6\u30a3\u30ab\u30eb"):r}),f(v,"$roll_name",function(s){return q(s,"TRNAME")?_("NAME1").$roll(this.randomizer).$last_body()+" , "+_("NAME2").$roll(this.randomizer).$last_body():r}),m(C[0],"NAME1",u(_("DiceTable"),"Table").$new("\u540d\u5b57\u8868","1D100",e.large_array_unpack('\u6625\u65e5,\u6d45\u898b,\u98a8\u9593,\u795e\u7121\u6708,\u5009\u7530,\u4e0d\u52d5,\u5c71\u5948,\u30b7\u30e3\u30eb\u30ed\u30c3\u30af,\u9727\u96a0,\u679c\u5fc3,\u4eca\u4e95,\u9577\u702c,\u660e\u667a,\u98a8\u796d,\u5fd7\u8cab,\u4e00\u6587\u5b57,\u6708\u591c\u91ce,\u685c\u7530\u9580,\u679c\u702c,\u4e5d\u5341\u4e5d,\u901f\u6c34,\u7247\u6850,\u8449\u6708,\u30a6\u30a3\u30f3\u30b6\u30fc,\u6642\u96e8\u91cc,\u795e\u57ce,\u6c34\u969b,\u4e00\u30ce\u6c5f,\u4ec1\u85e4,\u5317\u5343\u4f4f,\u897f\u6751,\u8acf\u8a2a,\u85e4\u5bae,\u5fa1\u4ee3,\u6a58,\u9727\u751f,\u767d\u77f3,\u690e\u540d,\u7dbe\u5c0f\u8def,\u4e8c\u6761,\u5149\u660e\u5bfa,\u6625\u79cb,\u96ea\u898b,\u5200\u6761\u9662,\u30e9\u30f3\u30ab\u30b9\u30bf\u30fc,\u30cf\u30af\u30a2,\u30a8\u30eb\u30bf\u30cb\u30a2,\u30cf\u30fc\u30cd\u30b9,\u30a2\u30a6\u30b0\u30b9\u30c8\u30a5\u30b9,\u690e\u540d\u753a,\u9375\u5b88,\u831c\u30f6\u5d0e,\u93ae\u5bae,\u7f8e\u67f3,\u9396\u3005\u585a,\u6afb\u30ce\u675c,\u93e1\u30f6\u5b88,\u8f1d\u4e95,\u5357\u967d,\u96ea\u4e43\u57ce,\u516d\u89d2\u5c4b,\u9234\u3005,\u6771\u4e09\u6761,\u6731\u96c0\u9662,\u9752\u9f8d\u9662,\u767d\u864e\u9662,\u7384\u6b66\u9662,\u9e92\u9e9f\u9662,\u30ea\u30fc\u30b7\u30e5\u30bf\u30c3\u30c8,\u30b5\u30f3\u30af\u30c1\u30e5\u30a2\u30ea,\u516d\u5b9f,\u9808\u85e4,\u30df\u30ec\u30cb\u30a2\u30e0,\u4e03\u91cc,\u4e09\u679d,\u516b\u6bbf,\u85e4\u91cc,\u4e45\u5b9d,\u6771,\u8d64\u897f,\u795e\u30f6\u5d0e,\u30b0\u30e9\u30f3\u30b7\u30a2,\u30c0\u30fc\u30af\u30d6\u30fc\u30ec\u30fc\u30c9,\u5929\u5149\u5bfa,\u6708\u898b\u91cc,\u7483\u5bae,\u85e4\u898b\u6fa4,\u8d64\u8056,\u59eb\u5bae,\u83ef\u30ce\u5bae,"\u5929\u624d","\u9054\u4eba","\u8ce2\u8005","\u75be\u98a8","\u6d77\u306e","\u6700\u5f37","\u51f6\u5668","\u707c\u71b1","\u4eba\u9593\u5175\u5668","\u9b54\u738b"'))),m(C[0],"NAME2",u(_("DiceTable"),"Table").$new("\u540d\u5b57\u8868","1D100",e.large_array_unpack("\u30a2\u30e9\u30bf/\u8056,\u30a2\u30d3\u30a3\u30b9/\u30ea\u30ea\u30b9,\u30eb\u30fc\u30b0/\u30ec\u30f4\u30a3,\u30e9\u30b9\u30c8/\u30a2\u30ea\u30f3,\u30bd\u30e9/\u30e6\u30a4,\u30a4\u30fc\u30ea\u30a2\u30b9/\u30a2\u30ad\u30aa,\u30a2\u30ab\u30fc\u30b7\u30e3/\u30df\u30e9,\u30a2\u30ea\u30a8\u30b9/\u30ea\u30fc\u30bc\u30ed\u30c3\u30c6,\u30e0\u30e9\u30b5\u30e1/\u30b7\u30e3\u30eb\u30e0,\u9f8d\u8cb4/\u7adc\u59eb,\u82f1\u6a39/\u6625\u83dc,\u6e96\u4e00/\u6e4a,\u6025\u53f8\u90ce/\u5149\u7406,\u5915\u4e5f/\u611b\u5948,\u6674\u5f66/\u30a2\u30ad,\u75be\u98a8/\u30e4\u30b7\u30ed,\u30ab\u30ac\u30ea/\u706f\u82b1,\u6b21\u90ce/\u512a\u90fd,\u6625\u592a\u90ce/\u9759\u7406,\u30b8\u30f3/\u6642\u96e8,\u30a4\u30aa\u30ea/\u4f0a\u7e54,\u30e6\u30a6\u30d2/\u512a\u59eb,\u30b5\u30c4\u30ad/\u7fe0\u540d,\u30b7\u30e5\u30e9\u30a4/\u30b5\u30af\u30e9,\u30df\u30ca\u30c5\u30ad/\u59eb\u4e43,\u30ab\u30a8\u30c7/\u512a\u6a39\u83dc,\u30cf\u30eb/\u30d5\u30e6,\u30c9\u30fc\u30eb/\u745e\u6c5f,\u30cb\u30c8\u30a5\u30ec\u30b9\u30c8/\u30ad\u30ea\u30ab,\u30b9\u30ab\u30fc/\u7dbe\u702c,\u771f\u590f/\u5c0f\u590f,\u5149\u4e00/\u306e\u306e\u304b,\u5f69/\u7fe0,\u30c8\u30a6\u30ab/\u67ca\u82b1,\u547d/\u30df\u30b3\u30c8,\u53f8/\u3064\u304b\u3055,\u3086\u3068\u308a/\u306a\u3054\u307f,\u51ac\u5f66/\u89b3\u6708,\u30ab\u30ec\u30f3/\u83ef\u604b,\u6e05\u6b21\u90ce/\u4e9c\u77e2,\u30b5\u30fc\u30c9/\u5922\u5b50,\u30dc\u30c3\u30af\u30b9/\u8a69\u5b50,\u30d8\u30ea\u30aa\u30b9/\u30ab\u30a8\u30c7,\u30b2\u30fc\u30c8/\u4eac\u9999,\u30aa\u30f3\u30ea\u30fc/\u30d1\u30c8\u30ea\u30b7\u30a2,\u30b6\u30c3\u30cf\u30fc\u30af/\u30a2\u30fc\u30ea,\u30e9\u30b9\u30bf\u30d0\u30f3/\u30e9\u30b9\u30c6\u30a3,\u685c\u82b1/\u71c1\u6f84,\u8a08\u90fd/\u30ea\u30f4\u30a3\u30a2,\u30ab\u30eb\u30f4\u30a1\u30ea\u30aa/\u9999\u591c,\u60a0\u4eba/\u591c\u3005\u5b50,\u592a\u5b50/\u7fbd\u83dc,\u5915\u7acb/\u5915\u51ea,\u30a2\u30eb\u30d5/\u611b\u7f8e,\u30d5\u30a1\u30ed\u30b9/\u706f\u5229,\u30b9\u30d7\u30fc\u30c8\u30cb\u30af/\u8a69\u59eb,\u30a2\u30fc\u30cd\u30b9\u30c8/\u7d2f,\u30ca\u30a4\u30f3/\u30ab\u30b0\u30e4,\u30af\u30ea\u30a2/\u30d2\u30de\u30ef\u30ea,\u30a6\u30a9\u30fc\u30ab\u30fc/\u30aa\u30ea\u30d3\u30a2,\u30c0\u30fc\u30af/\u30af\u30aa\u30f3,\u30a6\u30a7\u30a4\u30f4/\u51db,\u30eb\u30fc\u30f3/\u30de\u30ea\u30a8,\u30a8\u30f3\u30ae/\u30bb\u30a4\u30ae,\u30b7\u30e9\u30cc\u30a4/\u30df\u30e9\u30a4,\u30d6\u30e9\u30a4\u30f3/\u30ad\u30ba\u30ca,\u30af\u30ed\u30a6/\u30ab\u30ca\u30bf,\u30b9\u30ec\u30a4\u30e4\u30fc/\u30d2\u30ab\u30eb,\u30ec\u30b9/\u30df\u30ea\u30a2\u30ea\u30a2,\u30df\u30d5\u30e6/\u30b5\u30ea\u30a8\u30eb,\u9cf4\u592e/\u97f3\u592e,\u30e2\u30f3\u30b8/\u7406\u4e9c,\u30d1\u30eb\u30c7\u30e2\u30f3\u30c8\u30a5\u30e0/\u30b9\u30ca\u30aa,\u30df\u30b7\u30a7\u30eb/\u8a69\u7a42,\u30d5\u30ec\u30f3\u30ba/\u30b5\u30f3,\u30b5\u30c8\u30ea/\u8b58,\u30ed\u30fc\u30c9/\u552f\u82b1,\u30af\u30ed\u30ce\u30b9/\u4e45\u5b9d,\u30d5\u30a3\u30e9\u30c7\u30eb\u30d5\u30a3\u30a2/\u51ac\u6d77,\u30c6\u30a3\u30f3\u30c0\u30ed\u30b9/\u7f8e\u661f,\u52c7\u5f25/\u30e6\u30fc\u30ea\u30b9,\u30a8\u30a4\u30c8/\u30a2\u30f3\u30b8\u30a7\u30e9,\u30b5\u30bf\u30f3/\u30eb\u30b7\u30a8\u30eb,\u30a8\u30fc\u30b9/\u5c0f\u6ce2,\u30bb\u30fc\u30b8/\u80e1\u8776,\u5fcd/\u5343\u4e4b,\u91cd\u543e/\u30ad\u30ea\u30b3,\u30de\u30a4\u30b1\u30eb/\u30df\u30db\u30b7,\u30ab\u30ba\u30de/\u9db4\u9999,\u30e4\u30de\u30c8/\u30a8\u30ea\u30b7\u30a8\u30eb,\u6b74\u53f2\u4e0a\u306e\u4eba\u7269\u306e\u540d\u524d\uff08\u4fe1\u9577\u3001\u30b8\u30e3\u30f3\u30cc\u306a\u3069\uff09,\u30b9\u30dd\u30fc\u30c4\u9078\u624b\u306e\u540d\u524d\uff08\u30d9\u30c3\u30ab\u30e0\u3001\u6c99\u4fdd\u91cc\u306a\u3069\uff09,\u5b66\u8005\u306e\u540d\u524d\uff08\u30bd\u30af\u30e9\u30c6\u30b9\u3001\u30a8\u30ec\u30ca\u306a\u3069\uff09,\u30a2\u30a4\u30c9\u30eb\u306e\u540d\u524d\uff08\u30bf\u30af\u30e4\u3001\u8056\u5b50\u306a\u3069\uff09,\u571f\u5730\u3001\u56fd\u3001\u753a\u306e\u540d\u524d\uff08\u30a4\u30f3\u30b0\u30e9\u30f3\u30c9\u3001\u30ef\u30b7\u30f3\u30c8\u30f3\u306a\u3069\uff09,\u30e2\u30f3\u30b9\u30bf\u30fc\u306e\u540d\u524d\uff08\u30c9\u30e9\u30b4\u30f3\u3001\u30e9\u30df\u30a2\u306a\u3069\uff09,\u6b66\u5668\u9632\u5177\u306e\u540d\u524d\uff08\u30bd\u30fc\u30c9\u3001\u30e1\u30a4\u30eb\u306a\u3069\uff09,\u81ea\u7136\u73fe\u8c61\u306e\u540d\u524d\uff08\u30ab\u30b6\u30f3\u30cf\u30ea\u30b1\u30fc\u30f3\u306a\u3069\uff09,\u6a5f\u68b0\u306e\u540d\u524d\uff08\u6d17\u6fef\u6a5f\u3001\u30c6\u30ec\u30d3\u306a\u3069\uff09,\u76ee\u306b\u3064\u3044\u305f\u7269\u306e\u540d\u524d\uff08\u30b7\u30e3\u30fc\u30da\u30f3\u3001\u30e1\u30ac\u30cd\u306a\u3069\uff09")))})}}]);