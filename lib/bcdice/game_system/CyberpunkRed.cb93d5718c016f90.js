(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[1435],{1846:(Z,O,X)=>{X(5151),Opal.modules["bcdice/game_system/cyberpunk_red/tables"]=function(o){var A,H,Y,G,P,m,t,h,r,f,B,k,N,W,D,x=o.module,E=o.klass,R=o.ensure_kwargs,S=o.get_kwarg,M=o.def,C=o.rb_plus,u=o.hash2,F=o.range,T=[],i=o.nil,$=o.$$$;return A=T,H=D=[x(T[0],"BCDice")].concat(A),N=[x(D[0],"GameSystem")].concat(H),W=o.$r(N),Y=N[0],G=W("Base"),P=N,m=k=[B=E(Y,G,"CyberpunkRed")].concat(P),h=[t=E(k[0],null,"ScreamSheetRandomizerTable")].concat(m),r=o.$r(h),(f=t.$$prototype).type_table=f.locale=f.a_table=f.of_table=f.b_table=f.c_table=i,M(t,"$initialize",function(n){var l,e,_,c,b,s,a=this;return n=R(n),l=S(n,"locale"),e=S(n,"type_table"),_=S(n,"a_table"),c=S(n,"of_table"),b=S(n,"b_table"),s=S(n,"c_table"),a.locale=l,a.type_table=e,a.a_table=_,a.of_table=c,a.b_table=b,a.c_table=s}),M(t,"$roll",function(n){var c,a,p,l=this,e=i,_=i,b=i,s=i;return e="",_=n.$roll_once(6),c=l.type_table.$choice(_),e=C(e,""+c+r("I18n").$translate("CyberpunkRed.news",u(["locale","raise"],{locale:l.locale,raise:!0}))+"\u3000\u300e"),_=n.$roll_once(10),b=l.a_table.$choice(_).$body(),e=C(e,b),_=n.$roll_once(6),s=l.of_table.$choice(_).$body(),e=C(e,s),_=n.$roll_once(10),b=l.a_table.$choice(_).$body(),e=C(e,b),_=n.$roll_once(6),s=l.of_table.$choice(_).$body(),e=C(e,s),_=n.$roll_once(10),a=l.b_table.$choice(_).$body(),e=C(e,a),_=n.$roll_once(10),p=l.c_table.$choice(_).$body(),e=C(e,p),C(e,"\u300f")}),function(g,v,m){var t=E(g,null,"ShopPeopleTable"),h=[t].concat(m),r=o.$r(h),f=t.$$prototype;f.locale=f.staff_table=f.people_a_table=f.people_b_table=i,M(t,"$initialize",function(n){var l,e,_,c,b=this;return n=R(n),l=S(n,"locale"),e=S(n,"staff_table"),_=S(n,"people_a_table"),c=S(n,"people_b_table"),b.locale=l,b.staff_table=e,b.people_a_table=_,b.people_b_table=c}),M(t,"$roll",function(n){var l=this,e=i,_=i,c=i,b=i;return e=r("I18n").$translate("CyberpunkRed.ShopPeopleTableText.intro",u(["locale","raise"],{locale:l.locale,raise:!0})),_=n.$roll_once(6),c=(c=l.staff_table.$choice(_).$body())["$[]"](F(0,-2,!1)),e=C(e,c),e=C(e,r("I18n").$translate("CyberpunkRed.ShopPeopleTableText.shop_staff",u(["locale","raise"],{locale:l.locale,raise:!0}))),_=n.$roll_once(6),b=(b=l.people_a_table.$choice(_).$body())["$[]"](F(0,-2,!1)),e=C(e,b),e=C(e,r("I18n").$translate("CyberpunkRed.ShopPeopleTableText.people_a",u(["locale","raise"],{locale:l.locale,raise:!0}))),_=n.$roll_once(6),b=(b=l.people_b_table.$choice(_).$body())["$[]"](F(0,-2,!1)),e=C(e,b),e=C(e,r("I18n").$translate("CyberpunkRed.ShopPeopleTableText.people_b",u(["locale","raise"],{locale:l.locale,raise:!0}))),C(e,r("I18n").$translate("CyberpunkRed.ShopPeopleTableText.outro",u(["locale","raise"],{locale:l.locale,raise:!0})))})}(k[0],0,k),function(g,v){var m=[g].concat(v),t=o.$r(m);return g.$private(),M(g,"$translate_tables",function(r){var f,y,n,l,e,_,c,b,s,a,p,J,Q,V,z,U,q,K,j;return f=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.NightMarketTypeTable",r),y=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketFoodsTable",r),n=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketMechanicTable",r),l=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketWeaponsTable",r),e=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketCyberwareTable",r),_=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketFashionTable",r),c=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightMarketSuvivalTable",r),b=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ScreamSheetTypeTable",r),s=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ScreamSheetATable",r),a=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ScreamSheetBTable",r),p=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ScreamSheetCTable",r),J=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ScreamSheetOfTable",r),Q=$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.VendingMachineTypeTable",r),V=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.VendingMachineFoodTable",r),z=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.VendingMachineFashionTable",r),U=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.VendingMachineStrangeTable",r),q=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ShopStaffTable",r),K=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ShopPeopleATable",r),j=$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.ShopPeopleBTable",r),u(["FFD","HFD","NCDT","NCMT","NMCT","NMCFO","NMCME","NMCWE","NMCCY","NMCFA","NMCSU","SCST","SCSA","SCSB","SCSC","SCSR","VMCT","VMCE","VMCF","VMCS","VMCR","STOREA","STOREB","STOREC","STORE"],{FFD:$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.FrameFatalDamageTable",r),HFD:$(t("DiceTable"),"Table").$from_i18n("CyberpunkRed.HeadFatalDamageTable",r),NCDT:$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightCityDaytimeEncounterTable",r),NCMT:$(t("DiceTable"),"RangeTable").$from_i18n("CyberpunkRed.NightCityMidnightEncounterTable",r),NMCT:f,NMCFO:y,NMCME:n,NMCWE:l,NMCCY:e,NMCFA:_,NMCSU:c,SCST:b,SCSA:s,SCSB:a,SCSC:p,SCSR:t("ScreamSheetRandomizerTable").$new(u(["locale","type_table","a_table","b_table","c_table","of_table"],{locale:r,type_table:b,a_table:s,b_table:a,c_table:p,of_table:J})).$freeze(),VMCT:Q,VMCE:V,VMCF:z,VMCS:U,VMCR:$(t("DiceTable"),"ChainTable").$new(t("I18n").$translate("CyberpunkRed.VendingMachineTable.name",u(["locale","raise"],{locale:r,raise:!0})),"1D6",[V,V,V,z,z,U]),STOREA:q,STOREB:K,STOREC:j,STORE:t("ShopPeopleTable").$new(u(["locale","staff_table","people_a_table","people_b_table"],{locale:r,staff_table:q,people_a_table:K,people_b_table:j})).$freeze()}).$freeze()})}(o.get_singleton_class(B),k)},Opal.queue(function(o){var H,Y,v,m,t,h,r,P,B,N,x=o.module,E=o.klass,R=o.const_set,S=o.send2,M=o.find_super,C=o.def,u=o.truthy,F=o.hash2,T=o.rb_plus,i=o.rb_minus,$=o.rb_gt,A=[],d=o.nil,D=o.$$$;return o.top.$require("bcdice/game_system/cyberpunk_red/tables"),H=A,Y=N=[x(A[0],"BCDice")].concat(H),P=[x(N[0],"GameSystem")].concat(Y),B=o.$r(P),v=P,t=[m=E(P[0],B("Base"),"CyberpunkRed")].concat(v),h=o.$r(t),r=m.$$prototype,null==m.locale&&(m.locale=d),r.randomizer=d,R(t[0],"ID","CyberpunkRed"),R(t[0],"NAME","\u30b5\u30a4\u30d0\u30fc\u30d1\u30f3\u30afRED"),R(t[0],"SORT_KEY","\u3055\u3044\u306f\u3042\u306f\u3093\u304f\u308c\u3064\u3068"),R(t[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\u3000CPx+y>z\n\u3000(x\uff1d\u80fd\u529b\u5024\u3068\u6280\u80fd\u5024\u306e\u5408\u8a08\u3001y\uff1d\u4fee\u6b63\u5024\u3001z\uff1d\u96e3\u6613\u5ea6 or \u53d7\u52d5\u5074\u3000x\u3001y\u3001z\u306f\u7701\u7565\u53ef)\n\u3000\u4f8b\uff09CP12 CP10+2>12\u3000CP7-1\u3000CP8+4\u3000CP7>12\u3000CP\u3000CP>9\n\n\u5404\u7a2e\u8868\n\u30fb\u81f4\u547d\u7684\u640d\u50b7\u8868\n\u3000FFD\u3000\uff1a\u8eab\u4f53\u3078\u306e\u81f4\u547d\u7684\u640d\u50b7\n\u3000HFD\u3000\uff1a\u982d\u90e8\u3078\u306e\u81f4\u547d\u7684\u640d\u50b7\n\u30fb\u906d\u9047\u8868\n\u3000NCDT\u3000\uff1a\u30ca\u30a4\u30c8\u30b7\u30c6\u30a3(\u65e5\u4e2d)\n\u3000NCMT\u3000\uff1a\u30ca\u30a4\u30c8\u30b7\u30c6\u30a3(\u6df1\u591c)\n\u30fb\u30b9\u30af\u30ea\u30fc\u30e0\u30b7\u30fc\u30c8\n\u3000SCSR\u3000\uff1a\u30b9\u30af\u30ea\u30fc\u30e0\u30b7\u30fc\u30c8(\u30e9\u30f3\u30c0\u30e0)\n\u3000SCST\u3000\uff1a\u30b9\u30af\u30ea\u30fc\u30e0\u30b7\u30fc\u30c8\u5206\u985e\n\u3000SCSA\u3000\uff1a\u30d8\u30c3\u30c9\u30e9\u30a4\u30f3A\n\u3000SCSB\u3000\uff1a\u30d8\u30c3\u30c9\u30e9\u30a4\u30f3B\n\u3000SCSC\u3000\uff1a\u30d8\u30c3\u30c9\u30e9\u30a4\u30f3C\n\u30fb\u6700\u5bc4\u308a\u306e\u81ea\u8ca9\u6a5f\n\u3000VMCR\u3000\uff1a\u6700\u5bc4\u308a\u306e\u81ea\u8ca9\u6a5f\u8868\n\u3000VMCT\u3000\uff1a\u81ea\u8ca9\u6a5f\u30bf\u30a4\u30d7\u6c7a\u5b9a\u8868\n\u3000VMCE\u3000\uff1a\u98df\u54c1\n\u3000VMCF\u3000\uff1a\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3\n\u3000VMCS\u3000\uff1a\u5909\u306a\u3082\u306e\n\u30fb\u30dc\u30c7\u30ac\u306e\u5ba2\n\u3000STORE\u3000\uff1a\u30dc\u30c7\u30ac\u306e\u5ba2\u3068\u5e97\u54e1\n\u3000STOREA\u3000\uff1a\u5e97\u4e3b\u307e\u305f\u306f\u30ec\u30b8\u4fc2\n\u3000STOREB\u3000\uff1a\u5909\u308f\u3063\u305f\u5ba2\u305d\u306e1\n\u3000STOREC\u3000\uff1a\u5909\u308f\u3063\u305f\u5ba2\u305d\u306e2\n\u30fb\u591c\u306e\u5e02\n\u3000NMCT\u3000\uff1a\u5546\u54c1\u306e\u5206\u91ce\n\u3000NMCFO\u3000\uff1a\u98df\u54c1\u3068\u30c9\u30e9\u30c3\u30b0\n\u3000NMCME\u3000\uff1a\u500b\u4eba\u7528\u96fb\u5b50\u6a5f\u5668\n\u3000NMCWE\u3000\uff1a\u6b66\u5668\u3068\u9632\u5177\n\u3000NMCCY\u3000\uff1a\u30b5\u30a4\u30d0\u30fc\u30a6\u30a7\u30a2\n\u3000NMCFA\u3000\uff1a\u8863\u6599\u54c1\u3068\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3\u30a6\u30a7\u30a2\n\u3000NMCSU\u3000\uff1a\u30b5\u30d0\u30a4\u30d0\u30eb\u7528\u54c1\n"),R(t[0],"TABLES",m.$translate_tables(m.locale)),R(t[0],"CP_RE",/^CP(?<ability>\d+)?(?<modifier>[+-]\d+)?(?<target>>=\d+)?/.$freeze()),C(m,"$initialize",function f(y){var l=this;return f.$$p=null,S(l,M(l,"initialize",f,!1,!0),"initialize",[y],null),l.sort_add_dice=!1,l.d66_sort_type=D(h("D66SortType"),"NO_SORT")}),C(m,"$eval_game_system_specific_command",function(y){var l,n=this;return n.$debug("eval_game_system_specific_command begin string",y),u(l=n.$cp_roll_result(y))?l:n.$roll_tables(y,h("TABLES"))}),m.$private_constant("CP_RE"),C(m,"$cp_roll_result",function(y){var n=this,e=d,b=d,s=d,a=d,p=d;if(e=D(h("Command"),"Parser").$new("CP",F(["round_type"],{round_type:D(h("RoundType"),"FLOOR")})).$enable_suffix_number().$restrict_cmp_op_to(d,">").$parse(y),u(e["$nil?"]()))return d;switch(b=0,s=0,a=h("Result").$new(),p=[n.randomizer.$roll_once(10)],s=T(s,p.$first()),u(e.$suffix_number())&&(b=T(b,e.$suffix_number())),u(e.$modify_number())&&(b=T(b,e.$modify_number())),s=T(s,b),p.$first().valueOf()){case 10:p["$<<"](n.randomizer.$roll_once(10)),s=T(s,p.$last()),a["$critical="](!0);break;case 1:p["$<<"](n.randomizer.$roll_once(10)),s=i(s,p.$last()),a["$fumble="](!0)}return u(e.$target_number())&&a["$condition="]($(s,e.$target_number())),a["$text="]("(1D10"+h("Format").$modifier(b)+e.$cmp_op()+e.$target_number()+")"),a["$text="](T(a.$text()," \uff1e ")),a["$text="](T(a.$text(),p.$first()+"["+p.$first()+"]"+h("Format").$modifier(b))),a["$text="](T(a.$text()," \uff1e ")),u(a["$critical?"]())&&(a["$text="](T(a.$text(),n.$translate("CyberpunkRed.critical")+" \uff1e ")),a["$text="](T(a.$text(),p.$last()+"["+p.$last()+"] \uff1e "))),u(a["$fumble?"]())&&(a["$text="](T(a.$text(),n.$translate("CyberpunkRed.fumble")+" \uff1e ")),a["$text="](T(a.$text(),p.$last()+"["+p.$last()+"] \uff1e "))),a["$text="](T(a.$text(),s.$to_s())),u(a["$success?"]())&&a["$text="](T(a.$text()," \uff1e "+n.$translate("success"))),u(a["$failure?"]())&&a["$text="](T(a.$text()," \uff1e "+n.$translate("failure"))),a}),m.$register_prefix("CP",h("TABLES").$keys())})}}]);