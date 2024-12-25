(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[9106],{2341:(J,Q,w)=>{w(5151),Opal.queue(function(s){var P,L,Y,_,t,a,m,T,k,v,j,R,y=s.module,N=s.klass,d=s.const_set,D=s.send2,S=s.find_super,f=s.def,G=s.eqeqeq,b=s.truthy,c=s.to_ary,p=s.hash2,E=s.rb_plus,z=s.rb_lt,A=s.rb_gt,h=[],e=s.nil,g=s.$$$;return P=h,L=R=[y(h[0],"BCDice")].concat(P),v=[y(R[0],"GameSystem")].concat(L),j=s.$r(v),Y=v,T=[m=N(v[0],j("Base"),"Kamigakari")].concat(Y),k=s.$r(T),m.$$prototype.randomizer=e,d(T[0],"ID","Kamigakari"),d(T[0],"NAME","\u795e\u6211\u72e9"),d(T[0],"SORT_KEY","\u304b\u307f\u304b\u304b\u308a"),d(T[0],"HELP_MESSAGE","\u30fb\u5404\u7a2e\u8868\n \u30fb\u611f\u60c5\u8868(ET)\n \u30fb\u970a\u7d0b\u6d88\u8cbb\u306e\u4ee3\u511f\u8868(RT)\n \u30fb\u4f1d\u5947\u540d\u5b57\u30fb\u540d\u524d\u6c7a\u5b9a\u8868(NT)\n \u30fb\u9b54\u5883\u81e8\u754c\u8868(KT)\n \u30fb\u7372\u5f97\u7d20\u6750\u30c1\u30e3\u30fc\u30c8(MTx x\u306f\uff3b\u6cd5\u5247\u969c\u5bb3\uff3d\u306e\uff3b\u5f37\u5ea6\uff3d\u3002\u7701\u7565\u6642\u306f\uff11)\n\u3000\u3000\u4f8b\uff09 MT\u3000MT3\u3000MT9\n\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\n"),f(m,"$initialize",function _(l){var a=this;return _.$$p=null,D(a,S(a,"initialize",_,!1,!0),"initialize",[l],null),a.sort_add_dice=!0,a.d66_sort_type=g(k("D66SortType"),"NO_SORT")}),f(m,"$eval_game_system_specific_command",function(l){var t,a,r=this,n=e,i=e,u=e,o=e,K=e;return n="",i="",r.$debug("eval_game_system_specific_command command",l),G(/^MT(\d*)$/,l.$upcase())?(u=k("Regexp").$last_match(1),u=(u=b(o=u)?o:1).$to_i(),a=r.$getGetMaterialTableResult(u),n=null==(t=c(a))[0]?e:t[0],K=null==t[2]?e:t[2],b((i=null==t[1]?e:t[1])["$empty?"]())?"":n+"("+K+") \uff1e "+i):r.$roll_tables(l,g(r.$class(),"TABLES"))}),f(m,"$getGetMaterialTableResult",function(l){var t,a,n,i,o,r=this,$=e,u=e,M=e;return n=r.$translate("Kamigakari.MT.name"),i=r.$translate("Kamigakari.MT.items"),a=r.$get_table_by_d66(i),$=null==(t=c(a))[0]?e:t[0],u=null==t[1]?e:t[1],a=r.$getMaterialEffect(l),u=u+","+(null==(t=c(a))[1]?e:t[1]),M=r.$getPrice(o=null==t[0]?e:t[0]),$=r.$translate("Kamigakari.MT.result_format",p(["material","effect"],{material:$,effect:o})),b(M["$nil?"]())||($=E($,"\uff1a"+M)),[n,$,u]}),f(m,"$getMaterialEffect",function(l){var t,a,r=this,n=e,i=e,$=e,u=e;return n=r.randomizer.$roll_once(6),i="",$="",b(z(n,6))?(a=r.$getMaterialEffectNomal(l),i=null==(t=c(a))[0]?e:t[0],u=null==t[1]?e:t[1],$=r.$translate("Kamigakari.MT.common_material.name")):(a=r.$getMaterialEffectRare(),i=null==(t=c(a))[0]?e:t[0],u=null==t[1]?e:t[1],$=r.$translate("Kamigakari.MT.rare_material.name")),[i=$+"\uff1a"+i,n=n+","+u]}),f(m,"$getMaterialEffectNomal",function(l){var t,a,n,r=this,i=e,$=e,o=e;return n=r.$translate("Kamigakari.MT.common_material.items"),i=r.randomizer.$roll_d66(g(k("D66SortType"),"NO_SORT")),$=r.$get_table_by_number(i,n),r.$debug("getMaterialEffectNomal result",$),b($["$=~"](/\+n/))&&(a=r.$getMaterialEffectPower(l),o=null==(t=c(a))[1]?e:t[1],$=$.$sub(/\+n/,"+"+(null==t[0]?e:t[0])),i=i+","+o),[$,i]}),f(m,"$getMaterialEffectPower",function(l){var t,a,n,i;return n=[[4,[1,1,1,2,2,3]],[8,[1,1,2,2,3,3]],[9,[1,2,3,3,4,5]]],b(A(l,9))&&(l=9),i=this.$get_table_by_number(l,n),a=this.$get_table_by_1d6(i),[null==(t=c(a))[0]?e:t[0],null==t[1]?e:t[1]]}),f(m,"$getMaterialEffectRare",function(){var l,t,r,a=this,n=e,i=e,u=e;return r=[[3,E("**",a.$translate("Kamigakari.MT.rare_material.give_attribute"))],[5,E("**",a.$translate("Kamigakari.MT.rare_material.halve_damage"))],[6,a.$translate("Kamigakari.MT.rare_material.optional_by_GM")]],n=a.randomizer.$roll_once(6),i=a.$get_table_by_number(n,r),a.$debug("getMaterialEffectRare result",i),b(i["$include?"]("**"))&&(t=a.$getAttribute(),u=null==(l=c(t))[1]?e:l[1],i=i.$sub("**",(null==l[0]?e:l[0]).$to_s()),n=n+","+u),[i,n]}),f(m,"$getAttribute",function(){var t,a,l=this;return t=l.$translate("Kamigakari.MT.attribute"),a=l.randomizer.$roll_d66(g(k("D66SortType"),"NO_SORT")),[l.$get_table_by_number(a,t),a]}),f(m,"$getPrice",function(l){var a,t=this,r=e;return a=b(r=l.$match(/\+(\d+)/))?r["$[]"](1).$to_i():b(l["$include?"](t.$translate("Kamigakari.MT.rare_material.give_attribute")))?3:b(l["$include?"](t.$translate("Kamigakari.MT.rare_material.halve_damage")))?4:0,[e,"500G("+t.$translate("Kamigakari.MT.effect_power")+":1)","1000G("+t.$translate("Kamigakari.MT.effect_power")+":2)","1500G("+t.$translate("Kamigakari.MT.effect_power")+":3)","2000G("+t.$translate("Kamigakari.MT.effect_power")+":4)","3000G("+t.$translate("Kamigakari.MT.effect_power")+":5)"]["$[]"](a)}),t=[_=s.get_singleton_class(m)].concat(T),a=s.$r(t),_.$private(),f(_,"$translate_tables",function(n){return p(["RT","ET","KT","NT"],{RT:g(a("DiceTable"),"Table").$from_i18n("Kamigakari.table.RT",n),ET:g(a("DiceTable"),"D66Table").$from_i18n("Kamigakari.table.ET",n),KT:g(a("DiceTable"),"D66Table").$from_i18n("Kamigakari.table.KT",n),NT:g(a("DiceTable"),"D66Table").$from_i18n("Kamigakari.table.NT",n)})}),d(T[0],"TABLES",m.$translate_tables("ja_jp")),m.$register_prefix("MT",k("TABLES").$keys())})}}]);