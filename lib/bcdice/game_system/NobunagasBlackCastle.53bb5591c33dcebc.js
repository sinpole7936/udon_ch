(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[7566],{7969:(Y,F,K)=>{K(5151),Opal.modules["bcdice/dice_table/table"]=function(t){var N,j,M,v,B,E,R,n,x,C=t.module,q=t.klass,S=t.hash2,I=t.defs,W=t.truthy,a=t.def,i=t.rb_minus,f=[],b=t.nil;return N=f,j=x=[C(f[0],"BCDice")].concat(N),M=n=[C(x[0],"DiceTable")].concat(j),B=[v=q(n[0],null,"Table")].concat(M),E=t.$r(B),(R=v.$$prototype).times=R.sides=R.name=R.items=b,I(v,"$from_i18n",function(o,u){var _=b;return _=E("I18n").$t(o,S(["locale"],{locale:u})),this.$new(_["$[]"]("name"),_["$[]"]("type"),_["$[]"]("items"))}),a(v,"$initialize",function(o,u,d){var _=this,w=b;return _.name=o,_.items=d.$freeze(),w=/(\d+)D(\d+)/i.$match(u),W(w)||_.$raise(E("ArgumentError"),"Unexpected table type: "+u),_.times=w["$[]"](1).$to_i(),_.sides=w["$[]"](2).$to_i()}),a(v,"$roll",function(o){var d,u=this;return d=o.$roll_sum(u.times,u.sides),u.$choice(d)}),a(v,"$choice",function(o){var d,u=this;return d=i(o,u.times),E("RollResult").$new(u.name,o,u.items["$[]"](d))})},Opal.queue(function(t){var M,R,w,c,k,l,o,u,B,C=t.module,q=t.klass,S=t.const_set,I=t.send2,W=t.find_super,a=t.def,i=t.truthy,f=t.rb_le,b=t.rb_ge,y=t.rb_plus,N=t.eqeq,L=t.rb_gt,x=t.rb_lt,H=t.hash2,A=[],n=t.nil,g=t.$$$;return t.top.$require("bcdice/dice_table/table"),M=A,R=B=[C(A[0],"BCDice")].concat(M),o=[C(B[0],"GameSystem")].concat(R),u=t.$r(o),w=o,k=[c=q(o[0],u("Base"),"NobunagasBlackCastle")].concat(w),l=t.$r(k),c.$$prototype.randomizer=n,S(k[0],"ID","NobunagasBlackCastle"),S(k[0],"NAME","\u4fe1\u9577\u306e\u9ed2\u3044\u57ce"),S(k[0],"SORT_KEY","\u306e\u3075\u306a\u304b\u306e\u304f\u308d\u3044\u3057\u308d"),S(k[0],"HELP_MESSAGE","\u25a0\u5224\u5b9a\u3000sDRt        s: \u80fd\u529b\u5024 t:\u76ee\u6a19\u5024\n\n\u4f8b)+3DR12: \u80fd\u529b\u5024+3\u3001DR12\u30671d20\u3092\u632f\u3063\u3066\u3001\u305d\u306e\u7d50\u679c\u3092\u8868\u793a(\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30fb\u30d5\u30a1\u30f3\u30d6\u30eb\u3082\u8868\u793a)\n\n\u25a0\u30a4\u30cb\u30b7\u30a2\u30c6\u30a3\u30f4\u3000INS\n\n\u4f8b)INS: 1d6\u3092\u632f\u3063\u3066\u3001\u30a4\u30cb\u30b7\u30a2\u30c6\u30a3\u30f4\u306e\u7d50\u679c\u3092\u8868\u793a(PC\u5148\u884c\u3092\u6210\u529f\u3068\u3057\u3066\u8868\u793a)\n\n\u25a0NPC\u80fd\u529b\u5024\u4f5c\u6210\u3000NPCST\n\n\u4f8b)NPCST: 3d6\u30924\u56de\u632f\u3063\u3066\u3001\u5404\u80fd\u529b\u5024\u3068HP\u3092\u8868\u793a\n\n\n\u25a0\u5404\u7a2e\u8868\n\n\u30fb\u906d\u9047\u53cd\u5fdc\u8868(ERT)\n\u30fb\u6b66\u5668\u8868(SWT)/\u305d\u306e\u4ed6\u306e\u5947\u5999\u306a\u6b66\u5668\u8868(OSWT)\n\u30fb\u93a7\u8868(ART)\n\n"),a(c,"$initialize",function m(e){var s=this;return m.$$p=null,I(s,W(s,"initialize",m,!1,!0),"initialize",[e],null),s.sort_add_dice=!0,s.d66_sort_type=g(l("D66SortType"),"NO_SORT")}),a(c,"$eval_game_system_specific_command",function(e){var s,$,h,r=this;return i(s=i($=i(h=r.$resolute_action(e))?h:r.$resolute_initiative(e))?$:r.$roll_tables(e,l("TABLES")))?s:r.$make_npc_status(e)}),c.$private(),a(c,"$result_dr",function(e,r,s){return i(f(r,1))?l("Result").$fumble("\u30d5\u30a1\u30f3\u30d6\u30eb"):i(b(r,20))?l("Result").$critical("\u30af\u30ea\u30c6\u30a3\u30ab\u30eb"):i(b(e,s))?l("Result").$success("\u6210\u529f"):l("Result").$failure("\u5931\u6557")}),a(c,"$resolute_action",function(e){var r=this,s=n,$=n,h=n,D=n,z=n,T=n,p=n;return s=/^([+-]?\d*)DR(\d+)$/.$match(e),i(s)?($=s["$[]"](1).$to_i(),h=s["$[]"](2).$to_i(),D=r.randomizer.$roll_once(20),z=y(D.$to_s(),r.$with_symbol($)),T=r.$result_dr(y(D,$),D,h),p=["("+e+")",z,y(D,$),T.$text()],T["$text="](p.$join(" \uff1e ")),T):n}),a(c,"$with_symbol",function(e){return N(e,0)?"+0":i(L(e,0))?"+"+e:e.$to_s()}),a(c,"$resolute_initiative",function(e){var s=n,$=n;return N(e,"INS")?(s=this.randomizer.$roll_once(6),($=i(b(s,4))?l("Result").$success("PC\u5148\u884c"):l("Result").$failure("\u6575\u5148\u884c"))["$text="]("("+e+") \uff1e "+s+" \uff1e "+$.$text()),$):n}),a(c,"$make_npc_status",function(e){var r=this,s=n,$=n,h=n,D=n,z=n,T=n;return N(e,"NPCST")?(s=r.randomizer.$roll_sum(3,6),$=r.randomizer.$roll_sum(3,6),h=r.randomizer.$roll_sum(3,6),D=r.randomizer.$roll_sum(3,6),z=r.randomizer.$roll_once(8),T=y(z,r.$calc_status(D)),i(x(T,1))&&(T=1),"("+e+") \uff1e "+["\u5fc3"+r.$with_symbol(r.$calc_status(s))+"("+s+")","\u6280"+r.$with_symbol(r.$calc_status($))+"("+$+")","\u4f53"+r.$with_symbol(r.$calc_status(h))+"("+h+")","\u8010\u4e45"+r.$with_symbol(r.$calc_status(D))+"("+D+")","HP"+T+"("+z+")"].$join(", ")):n}),a(c,"$calc_status",function(e){return i(f(e,4))?-3:i(f(e,6))?-2:i(f(e,8))?-1:i(f(e,12))?0:i(f(e,14))?1:i(f(e,16))?2:i(f(e,20))?3:n}),S(k[0],"TABLES",H(["OSWT","SWT","ART","ERT"],{OSWT:g(l("DiceTable"),"Table").$new("\u305d\u306e\u4ed6\u306e\u5947\u5999\u306a\u6b66\u5668\u8868","1D10",["\u516d\u5c3a\u68d2\uff08D4\uff09","\u624b\u69cd\uff08D4\uff09","\u5f13\u77e2\uff08D6\uff09","\u9244\u6247\uff08D4\uff09","\u5927\u925e\uff08D8\uff09","\u5439\u304d\u77e2\uff08D2\uff09\uff0b\u611f\u67d3","\u97ad\uff08D3\uff09","\u718a\u624b\uff08D4\uff09","\u77f3\u3064\u3076\u3066\uff08D3\uff09","\u4e38\u592a\uff08D4\uff09"]),SWT:g(l("DiceTable"),"Table").$new("\u6b66\u5668\u8868","1D12",["\u5c16\u3089\u305b\u305f\u9aa8\u306e\u676d\uff08D3\uff09","\u7af9\u69cd\uff08D4\uff09","\u767e\u59d3\u304b\u3089\u596a\u3063\u305f\u936c\uff08D4\uff09","\u8107\u5dee\u3057\uff08D4\uff09","\u624b\u88cf\u5263\u3000D6\u672c\uff08D4\uff09","\u5200\uff08D6\uff09","\u9396\u938c\uff08D6\uff09","\u592a\u5200\uff08D8\uff09","\u7a2e\u5b50\u5cf6\u9283\uff082D6\uff09\u3000\u5f3e\u4e38\uff08\u5fc3+5\uff09\u767a","\u5927\u69cd\uff08D8\uff09","\u7206\u88c2\u5f3e\uff08D4\uff09\u3000\u5fc3+3\u767a","\u65ac\u99ac\u5200\uff08D10\uff09"]),ART:g(l("DiceTable"),"Table").$new("\u93a7\u8868","1D6",["\u9632\u5177\u306f\u3001\u4f55\u3082\u306a\u3044","\u9632\u5177\u306f\u3001\u4f55\u3082\u306a\u3044","\u90e8\u5206\u93a7\uff08\u8179\u5dfb\u304d\uff09\u3000-D2\u30c0\u30e1\u30fc\u30b8","\u304a\u8cb8\u3057\u5177\u8db3\u3000-D3\u30c0\u30e1\u30fc\u30b8","\u6b66\u8005\u93a7\u3000-D4\u30c0\u30e1\u30fc\u30b8","\u5927\u93a7\u3000-D6\u30c0\u30e1\u30fc\u30b8"]),ERT:g(l("DiceTable"),"Table").$new("\u906d\u9047\u53cd\u5fdc\u8868","2D6",["\u304a\u524d\u3089\u3001\u6bba\u3059\uff01","\u304a\u524d\u3089\u3001\u6bba\u3059\uff01","\u618e\u60aa\u306e\u8996\u7dda\u3067\u7768\u3093\u3067\u304f\u308b\u3002\u3059\u304d\u3092\u898b\u305b\u308c\u3070\u3001\u653b\u6483\u3057\u3066\u304f\u308b\u3002","\u618e\u60aa\u306e\u8996\u7dda\u3067\u7768\u3093\u3067\u304f\u308b\u3002\u3059\u304d\u3092\u898b\u305b\u308c\u3070\u3001\u653b\u6483\u3057\u3066\u304f\u308b\u3002","\u618e\u60aa\u306e\u8996\u7dda\u3067\u7768\u3093\u3067\u304f\u308b\u3002\u3059\u304d\u3092\u898b\u305b\u308c\u3070\u3001\u653b\u6483\u3057\u3066\u304f\u308b\u3002","\u8b66\u6212\u306f\u3057\u3066\u3044\u308b\u304c\u3001\u7279\u306b\u3001\u6226\u95d8\u306f\u671b\u3093\u3067\u3044\u306a\u3044\u3002\u6012\u3089\u305b\u306a\u3051\u308c\u3070\u3001\u81ea\u5206\u305f\u3061\u306e\u76ee\u7684\u306b\u6cbf\u3063\u3066\u52d5\u304f\u3002","\u8b66\u6212\u306f\u3057\u3066\u3044\u308b\u304c\u3001\u7279\u306b\u3001\u6226\u95d8\u306f\u671b\u3093\u3067\u3044\u306a\u3044\u3002\u6012\u3089\u305b\u306a\u3051\u308c\u3070\u3001\u81ea\u5206\u305f\u3061\u306e\u76ee\u7684\u306b\u6cbf\u3063\u3066\u52d5\u304f\u3002","\u4e2d\u7acb\u3002\u4f55\u304b\u3092\u4e0e\u3048\u305f\u308a\u3001\u53d6\u5f15\u306e\u6750\u6599\u3092\u63d0\u793a\u3057\u305f\u308a\u3067\u304d\u308c\u3070\u3001\u4ea4\u6e09\u3067\u304d\u305d\u3046\u3060\u3002","\u4e2d\u7acb\u3002\u4f55\u304b\u3092\u4e0e\u3048\u305f\u308a\u3001\u53d6\u5f15\u306e\u6750\u6599\u3092\u63d0\u793a\u3057\u305f\u308a\u3067\u304d\u308c\u3070\u3001\u4ea4\u6e09\u3067\u304d\u305d\u3046\u3060\u3002","\u597d\u610f\u7684\u306b\u4f1a\u8a71\u3067\u304d\u305d\u3046\u3060\u3002\u5411\u3053\u3046\u3082\u53d6\u5f15\u3057\u305f\u304c\u3063\u3066\u3044\u308b\u3002","\u597d\u610f\u7684\u306b\u4f1a\u8a71\u3067\u304d\u305d\u3046\u3060\u3002\u5411\u3053\u3046\u3082\u53d6\u5f15\u3057\u305f\u304c\u3063\u3066\u3044\u308b\u3002"])}).$freeze()),c.$register_prefix("[+-]?\\d*DR[\\d]+","INS","NPCST",l("TABLES").$keys())})}}]);