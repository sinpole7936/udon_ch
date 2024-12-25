(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[2902],{6425:(ie,$e,te)=>{te(5151),Opal.modules["bcdice/dice_table/table"]=function(e){var j,g,i,E,B,x,z,d,S,b=e.module,h=e.klass,T=e.hash2,y=e.defs,R=e.truthy,_=e.def,u=e.rb_minus,l=[],M=e.nil;return j=l,g=S=[b(l[0],"BCDice")].concat(j),i=d=[b(S[0],"DiceTable")].concat(g),B=[E=h(d[0],null,"Table")].concat(i),x=e.$r(B),(z=E.$$prototype).times=z.sides=z.name=z.items=M,y(E,"$from_i18n",function(f,s){var o=M;return o=x("I18n").$t(f,T(["locale"],{locale:s})),this.$new(o["$[]"]("name"),o["$[]"]("type"),o["$[]"]("items"))}),_(E,"$initialize",function(f,s,a){var o=this,c=M;return o.name=f,o.items=a.$freeze(),c=/(\d+)D(\d+)/i.$match(s),R(c)||o.$raise(x("ArgumentError"),"Unexpected table type: "+s),o.times=c["$[]"](1).$to_i(),o.sides=c["$[]"](2).$to_i()}),_(E,"$roll",function(f){var a,s=this;return a=f.$roll_sum(s.times,s.sides),s.$choice(a)}),_(E,"$choice",function(f){var a,s=this;return a=u(f,s.times),x("RollResult").$new(s.name,f,s.items["$[]"](a))})},Opal.modules["bcdice/dice_table/d66_range_table"]=function(e){var m,A,n,i,E,B,x,$,k,b=e.module,h=e.klass,T=e.def,y=e.rb_plus,R=e.rb_times,_=e.send,u=[],l=e.nil;return m=u,A=k=[b(u[0],"BCDice")].concat(m),n=$=[b(k[0],"DiceTable")].concat(A),E=[i=h($[0],null,"D66RangeTable")].concat(n),B=e.$r(E),(x=i.$$prototype).items=x.name=l,T(i,"$initialize",function(D,f){return this.name=D,this.items=f.$freeze()}),T(i,"$roll",function(D){var s,a,o,c=l;return s=D.$roll_once(6),a=D.$roll_once(6),o=y(R(s,10),a),c=_(this.items,"find",[],function(F){return null==F&&(F=l),F["$[]"](0)["$include?"](o)}),B("RollResult").$new(this.name,o,c["$[]"](1))})},Opal.modules["bcdice/dice_table/d66_grid_table"]=function(e){var k,$,E,B,x,z,D,w,A,b=e.module,h=e.klass,T=e.hash2,y=e.defs,R=e.def,_=e.rb_plus,u=e.rb_times,l=e.rb_minus,M=[],m=e.nil;return k=M,$=A=[b(M[0],"BCDice")].concat(k),E=w=[b(A[0],"DiceTable")].concat($),x=[B=h(w[0],null,"D66GridTable")].concat(E),z=e.$r(x),(D=B.$$prototype).name=D.items=m,y(B,"$from_i18n",function(s,a){var c=m;return c=z("I18n").$t(s,T(["locale","raise"],{locale:a,raise:!0})),this.$new(c["$[]"]("name"),c["$[]"]("items"))}),R(B,"$initialize",function(s,a){return this.name=s,this.items=a.$freeze()}),R(B,"$roll",function(s){var o,c,J,F,q;return o=s.$roll_once(6),c=s.$roll_once(6),J=_(u(o,10),c),F=l(o,1),q=l(c,1),z("RollResult").$new(this.name,J,this.items["$[]"](F)["$[]"](q))})},Opal.modules["bcdice/format"]=function(e){var m,A,g,$,d,k,b=e.module,h=e.eqeqeq,T=e.def,y=e.truthy,R=e.eqeq,_=e.rb_gt,u=[],l=e.nil;return m=u,A=k=[b(u[0],"BCDice")].concat(m),$=[g=b(k[0],"Format")].concat(A),d=e.$r($),g.$module_function(),T(g,"$comparison_operator",function(n){var i;return h("==",i=n)?"=":h("!=",i)?"<>":h(d("Symbol"),i)?n.$to_s():l}),T(g,"$modifier",function(n){return y(n["$nil?"]())?l:R(n,0)?"":y(_(n,0))?"+"+n:n.$to_s()})},Opal.queue(function(e){var B,f,F,L,t,U,r,q,I,N,a,o,z,b=e.module,h=e.klass,T=e.const_set,y=e.send2,R=e.find_super,_=e.def,u=e.truthy,l=e.rb_plus,M=e.rb_le,m=e.rb_ge,j=e.eqeq,k=e.thrower,S=e.hash2,A=e.defs,g=e.neqeq,$=e.range,d=e.top,w=[],n=e.nil,i=e.$$$;return d.$require("bcdice/dice_table/table"),d.$require("bcdice/dice_table/d66_range_table"),d.$require("bcdice/dice_table/d66_grid_table"),d.$require("bcdice/format"),B=w,f=z=[b(w[0],"BCDice")].concat(B),a=[b(z[0],"GameSystem")].concat(f),o=e.$r(a),F=a,I=[q=h(a[0],o("Base"),"MonotoneMuseum")].concat(F),N=e.$r(I),q.$$prototype.randomizer=n,T(I[0],"ID","MonotoneMuseum"),T(I[0],"NAME","\u30e2\u30ce\u30c8\u30fc\u30f3\u30df\u30e5\u30fc\u30b8\u30a2\u30e0RPG"),T(I[0],"SORT_KEY","\u3082\u306e\u3068\u304a\u3093\u307f\u3086\u3046\u3057\u3042\u3080RPG"),T(I[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\n\u3000\u30fb\u901a\u5e38\u5224\u5b9a\u3000\u3000\u3000\u3000\u3000\u30002D6+m>=t[c,f]\n\u3000\u3000\u4fee\u6b63\u5024m,\u76ee\u6a19\u5024t,\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c,\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\u3002([]\u3054\u3068\u7701\u7565\u3067\u304d\u307e\u3059)\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3001\u6210\u529f\u3001\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\u30fb\u5404\u7a2e\u8868\n\u3010\u6539\u8a02\u7248\u74b0\u5883\u3011\n\u3000\u30fb\u611f\u60c5\u8868\u3000MET\n\u3000\u30fb\u5146\u5019\u8868\uff08\u6226\u95d8\u6642\uff09\u3000MBOT\uff0f\u5146\u5019\u8868\uff08\u975e\u6226\u95d8\u6642\uff09\u3000MNOT\n\u3000\u30fb\u6b6a\u307f\u8868\u3000MDT\n\u3000\u30fb\u4e16\u754c\u6b6a\u66f2\u8868\u3000MWDT\n\u3000\u30fb\u6c38\u52ab\u6d88\u5931\u8868\u3000MEDT\n\u3010\u65e7\u7248\u74b0\u5883\u3011\n\u3000\u30fb\u611f\u60c5\u8868\u3000ET\uff0f\u611f\u60c5\u8868 2.0\u3000ET2\n\u3000\u30fb\u5146\u5019\u8868\u3000OT\uff0f\u5146\u5019\u8868ver2.0\u3000OT2\uff0f\u5146\u5019\u8868ver3.0\u3000OT3\n\u3000\u30fb\u6b6a\u307f\u8868\u3000DT\uff0f\u6b6a\u307f\u8868ver2.0\u3000DT2\uff0f\u6b6a\u307f\u8868\uff08\u91ce\u5916\uff09\u3000DTO\uff0f\u6b6a\u307f\u8868\uff08\u6d77\uff09\u3000DTS\uff0f\u6b6a\u307f\u8868\uff08\u9928\u30fb\u57ce\uff09\u3000DTM\n\u3000\u30fb\u4e16\u754c\u6b6a\u66f2\u8868\u3000WDT\uff0f\u4e16\u754c\u6b6a\u66f2\u88682.0\u3000WDT2\n\u3000\u30fb\u6c38\u52ab\u6d88\u5931\u8868\u3000EDT\n\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\n"),_(q,"$initialize",function W(G){var t=this;return W.$$p=null,y(t,R(t,"initialize",W,!1,!0),"initialize",[G],null),t.d66_sort_type=i(N("D66SortType"),"NO_SORT"),t.sort_add_dice=!0}),_(q,"$eval_game_system_specific_command",function(G){var t,L=this;return u(t=L.$check_roll(G))?t:L.$roll_tables(G,i(L.$class(),"TABLES"))}),q.$private(),_(q,"$check_roll",function(G){try{k("eval_return");var t,U,r=this,v=n,H=n,P=n,Y=n,C=n,K=n,O=n,X=n,Q=n,ee=n,Z=n,V=n,ne=n;return v=/^(\d+)D6([+\-\d]*)>=(\?|\d+)(\[(\d+)?(,(\d+))?\])?$/i.$match(G),u(v)?(H=v["$[]"](1).$to_i(),P=u(v["$[]"](2))?N("ArithmeticEvaluator").$eval(v["$[]"](2)):0,Y=v["$[]"](3).$to_i(),C=u(K=(t=v["$[]"](5))===n||null==t?n:t.$to_i())?K:12,O=u(K=(U=v["$[]"](7))===n||null==U?n:U.$to_i())?K:2,Q=(X=r.randomizer.$roll_barabara(H,6).$sort()).$sum(),ee=X.$join(","),Z=l(Q,P),V=u(M(Q,O))?N("Result").$fumble(r.$translate("MonotoneMuseum.automatic_failure")):u(m(Q,C))?N("Result").$critical(r.$translate("MonotoneMuseum.automatic_success")):j(Y,0)?N("Result").$success(n):u(m(Z,Y))?N("Result").$success(r.$translate("success")):N("Result").$failure(r.$translate("failure")),ne=["("+G+")",Q+"["+ee+"]"+N("Format").$modifier(P),Z.$to_s(),V.$text()].$compact(),V["$text="](ne.$join(" \uff1e ")),V):n}catch(p){if(p===e.t_eval_return)return p.$v;throw p}}),L=I,U=[t=h(I[0],i(N("DiceTable"),"D66RangeTable"),"MMTable")].concat(L),r=e.$r(U),A(t,"$from_i18n",function(H,P){var C=n;return C=r("I18n").$translate(H,S(["locale","raise"],{locale:P,raise:!0})),this.$new(C["$[]"]("name"),C["$[]"]("items"))}),_(t,"$initialize",function v(H,P){var K,C=this;return v.$$p=null,g(P.$size(),r("RANGE").$size())&&C.$raise(r("UnexpectedTableSize").$new(H,P.$size())),K=r("RANGE").$zip(P),y(C,R(C,"initialize",v,!1,!0),"initialize",[H,K],null)}),T(U[0],"RANGE",[$(11,12,!1),$(13,14,!1),$(15,16,!1),$(21,22,!1),$(23,24,!1),$(25,26,!1),$(31,32,!1),$(33,34,!1),$(35,36,!1),$(41,42,!1),$(43,44,!1),$(45,46,!1),$(51,52,!1),$(53,54,!1),$(55,56,!1),$(61,62,!1),$(63,64,!1),$(65,66,!1)].$freeze()),function(W,G){var L=[W].concat(G),t=e.$r(L);W.$private(),_(W,"$translate_tables",function(r){return S(["ET","ET2","OT","DT","DT2","WDT","WDT2","OT2","DTO","DTS","EDT","DTM","OT3","MET","MBOT","MNOT","MDT","MWDT","MEDT"],{ET:i(t("DiceTable"),"D66GridTable").$from_i18n("MonotoneMuseum.table.ET",r),ET2:i(t("DiceTable"),"D66GridTable").$from_i18n("MonotoneMuseum.table.ET2",r),OT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.OT",r),DT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.DT",r),DT2:t("MMTable").$from_i18n("MonotoneMuseum.table.DT2",r),WDT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.WDT",r),WDT2:t("MMTable").$from_i18n("MonotoneMuseum.table.WDT2",r),OT2:t("MMTable").$from_i18n("MonotoneMuseum.table.OT2",r),DTO:t("MMTable").$from_i18n("MonotoneMuseum.table.DTO",r),DTS:t("MMTable").$from_i18n("MonotoneMuseum.table.DTS",r),EDT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.EDT",r),DTM:t("MMTable").$from_i18n("MonotoneMuseum.table.DTM",r),OT3:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.OT3",r),MET:i(t("DiceTable"),"D66GridTable").$from_i18n("MonotoneMuseum.table.MET",r),MBOT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.MBOT",r),MNOT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.MNOT",r),MDT:t("MMTable").$from_i18n("MonotoneMuseum.table.MDT",r),MWDT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.MWDT",r),MEDT:i(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.MEDT",r)})})}(e.get_singleton_class(q),I),T(I[0],"TABLES",q.$translate_tables("ja_jp").$freeze()),q.$register_prefix("\\d+D6",N("TABLES").$keys())})}}]);