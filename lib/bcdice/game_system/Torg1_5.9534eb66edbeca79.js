(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[5098],{6061:(X,Z,Q)=>{Q(5151),Opal.modules["bcdice/game_system/Torg"]=function(n){var z,H,R,o,l,a,G,K,A,B=n.module,U=n.klass,k=n.const_set,O=n.send,T=n.def,d=n.truthy,w=n.to_ary,E=n.rb_gt,c=n.rb_plus,y=n.neqeq,D=n.thrower,I=n.eqeq,S=n.rb_lt,h=n.rb_minus,W=n.rb_le,q=n.rb_divide,C=[],r=n.nil;return z=C,H=A=[B(C[0],"BCDice")].concat(z),G=[B(A[0],"GameSystem")].concat(H),K=n.$r(G),R=G,l=[o=U(G[0],K("Base"),"Torg")].concat(R),a=n.$r(l),o.$$prototype.randomizer=r,k(l[0],"ID","Torg"),k(l[0],"NAME","\u30c8\u30fc\u30b0"),k(l[0],"SORT_KEY","\u3068\u304a\u304f"),k(l[0],"HELP_MESSAGE",'\u30fb\u5224\u5b9a\u3000(TGm)\n\u3000TORG\u5c02\u7528\u306e\u5224\u5b9a\u30b3\u30de\u30f3\u30c9\u3067\u3059\u3002\n\u3000"TG(\u6280\u80fd\u57fa\u672c\u5024)"\u3067\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002R\u30b3\u30de\u30f3\u30c9\u306b\u8aad\u66ff\u3055\u308c\u307e\u3059\u3002\n\u3000\u632f\u308a\u8db3\u3057\u3092\u81ea\u52d5\u3067\u884c\u3044\u300120\u306e\u51fa\u76ee\u304c\u51fa\u305f\u3068\u304d\u306b\u306f\u6280\u80fd\u7121\u3057\u5024\u3082\u4e26\u8a18\u3057\u307e\u3059\u3002\n\u30fb\u5404\u7a2e\u8868\u3000"(\u8868\u30b3\u30de\u30f3\u30c9)(\u6570\u5024)"\u3067\u632f\u308a\u307e\u3059\u3002\n\u3000\u30fb\u4e00\u822c\u7d50\u679c\u8868 \u6210\u529f\u5ea6\u51fa\u529b\u300cRTx or RESULTx\u300d\n\u3000\u30fb\u5a01\u5727/\u5a01\u5687 \u5bfe\u4eba\u884c\u70ba\u7d50\u679c\u8868\u300cITx or INTIMIDATEx or TESTx\u300d\n\u3000\u30fb\u6311\u767a/\u30c8\u30ea\u30c3\u30af \u5bfe\u4eba\u884c\u70ba\u7d50\u679c\u8868\u300cTTx or TAUNTx or TRICKx or CTx\u300d\n\u3000\u30fb\u9593\u5408\u3044 \u5bfe\u4eba\u884c\u70ba\u7d50\u679c\u8868\u300cMTx or MANEUVERx\u300d\n\u3000\u30fb\u30aa\u30fc\u30ba\uff08\u4e00\u822c\u4eba\uff09\u30c0\u30e1\u30fc\u30b8\u3000\u300cODTx or ORDSx or ODAMAGEx\u300d\n\u3000\u30fb\u30dd\u30b7\u30d3\u30ea\u30c6\u30a3\u30fc\u80fd\u529b\u8005\u30c0\u30e1\u30fc\u30b8\u300cDTx or DAMAGEx\u300d\n\u3000\u30fb\u30dc\u30fc\u30ca\u30b9\u8868\u300cBTx+y or BONUSx+y or TOTALx+y\u300d x\u306f\u6570\u5024, y\u306f\u6280\u80fd\u57fa\u672c\u5024\n'),o.$register_prefix("TG","1R20","RT","Result","IT","Intimidate","Test","TT","Taunt","Trick","CT","MT","Maneuver","ODT","ords","odamage","DT","damage","BT","bonus","total"),T(o,"$replace_text",function(e){return e=(e=(e=(e=(e=(e=(e=e.$gsub(/Result/i,"RT")).$gsub(/(Intimidate|Test)/i,"IT")).$gsub(/(Taunt|Trick|CT)/i,"TT")).$gsub(/Maneuver/i,"MT")).$gsub(/(ords|odamage)/i,"ODT")).$gsub(/damage/i,"DT")).$gsub(/(bonus|total)/i,"BT"),(e=O(e,"gsub",[/TG(\d+)/i],function(){return"1R20+"+a("Regexp").$last_match(1)})).$gsub(/TG/i,"1R20")}),T(o,"$torg_check",function(e){try{D("eval_return");var t,s,i=this,_=r,g=r,b=r,f=r,u=r,m=r;return d(/(^|\s)S?(1R20([+-]\d+)*)(\s|$)/i["$=~"](e))?(e=a("Regexp").$last_match(2),_=a("Regexp").$last_match(3),i.$debug(_),d(_)&&(_=a("ArithmeticEvaluator").$eval(_)),i.$debug(_),_=_.$to_i(),s=i.$torg_dice(),b=null==(t=w(s))[1]?r:t[1],f=null==t[2]?r:t[2],u=i.$get_torg_bonus(g=null==t[0]?r:t[0]),m=d(_)?d(E(_,0))?u+"["+f+"]+"+_:u+"["+f+"]"+_:u+"["+f+"]",m=c(m,c(" \uff1e ",c(u,_).$to_s())),y(g,b)&&(m=c(m,c(c("(\u6280\u80fd\u7121",c(i.$get_torg_bonus(b),_).$to_s()),")"))),m="("+e+") \uff1e "+m):r}catch(x){if(x===n.t_eval_return)return x.$v;throw x}}),T(o,"$torg_dice",function(){var $=r,t=r,s=r,i=r,_=r,g=r;for($=!0,t=!0,s=0,i=0,_="";d($);)g=this.randomizer.$roll_once(20),s=c(s,g),d(t)&&(i=c(i,g)),d(_["$empty?"]())||(_=c(_,",")),_=c(_,g.$to_s()),I(g,20)?t=!1:y(g,10)&&($=!1,t=!1);return[s,i,_]}),T(o,"$eval_game_system_specific_command",function(e){try{D("eval_return");var t,s,g,x,i=this,_=r,b=r,f=r,u=r,m=r;if(_=e.$upcase(),_=i.$replace_text(_),d(g=i.$torg_check(_)))return g;if(b="1",f="",u=0,!d(/([RITMDB]T)(\d+([+-]\d+)*)/i["$=~"](_)))return r;switch(m=a("Regexp").$last_match(1),x=a("Regexp").$last_match(2),m.valueOf()){case"RT":u=a("ArithmeticEvaluator").$eval(x),b=i.$get_torg_success_level(u),f="\u4e00\u822c\u7d50\u679c";break;case"IT":u=a("ArithmeticEvaluator").$eval(x),b=i.$get_torg_interaction_result_intimidate_test(u),f="\u5a01\u5727/\u5a01\u5687";break;case"TT":u=a("ArithmeticEvaluator").$eval(x),b=i.$get_torg_interaction_result_taunt_trick(u),f="\u6311\u767a/\u30c8\u30ea\u30c3\u30af";break;case"MT":u=a("ArithmeticEvaluator").$eval(x),b=i.$get_torg_interaction_result_maneuver(u),f="\u9593\u5408\u3044";break;case"DT":u=a("ArithmeticEvaluator").$eval(x),d(_["$=~"](/ODT/i))?(b=i.$get_torg_damage_ords(u),f="\u30aa\u30fc\u30ba\u30c0\u30e1\u30fc\u30b8"):(b=i.$get_torg_damage_posibility(u),f="\u30dd\u30b7\u30d3\u30ea\u30c6\u30a3\u80fd\u529b\u8005\u30c0\u30e1\u30fc\u30b8");break;case"BT":s=i.$get_torg_bonus_text(x),b=null==(t=w(s))[0]?r:t[0],u=null==t[1]?r:t[1],f="\u30dc\u30fc\u30ca\u30b9"}return y(f,"")&&(b=f+"\u8868["+u+"] \uff1e "+b),b}catch(J){if(J===n.t_eval_return)return J.$v;throw J}}),T(o,"$get_torg_success_level",function(e){return this.$get_torg_table_result(e,[[0,"\u304e\u308a\u304e\u308a"],[1,"\u3075\u3064\u3046"],[3,"\u307e\u3042\u3088\u3044"],[7,"\u304b\u306a\u308a\u3088\u3044"],[12,"\u3059\u3054\u3044"]])}),T(o,"$get_torg_interaction_result_intimidate_test",function(e){return this.$get_torg_table_result(e,[[0,"\u6280\u80fd\u306a\u3057"],[5,"\u840e\u7e2e"],[10,"\u9006\u8ee2\u8ca0\u3051"],[15,"\u30e2\u30e9\u30eb\u5d29\u58ca"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),T(o,"$get_torg_interaction_result_taunt_trick",function(e){return this.$get_torg_table_result(e,[[0,"\u6280\u80fd\u306a\u3057"],[5,"\u840e\u7e2e"],[10,"\u9006\u8ee2\u8ca0\u3051"],[15,"\u9ad8\u63da\uff0f\u9006\u8ee2\u8ca0\u3051"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),T(o,"$get_torg_interaction_result_maneuver",function(e){return this.$get_torg_table_result(e,[[0,"\u6280\u80fd\u306a\u3057"],[5,"\u75b2\u52b4"],[10,"\u840e\u7e2e\uff0f\u75b2\u52b4"],[15,"\u9006\u8ee2\u8ca0\u3051\uff0f\u75b2\u52b4"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),T(o,"$get_torg_table_result",function(e,$){var t=r;return t="1",function(){try{var s=D("break");return O($,"each",[],function(_){var g;return null==_&&(_=r),g=_["$[]"](0),d(E(g,e))&&s.$throw(),t=_["$[]"](1)})}catch(i){if(i===s)return i.$v;throw i}}(),t}),T(o,"$get_torg_damage_ords",function(e){return this.$get_torg_damage(e,4,"\u30ec\u30d9\u30eb\u8ca0\u50b7  KO15",[[0,"1"],[1,"O1"],[2,"K1"],[3,"O2"],[4,"O3"],[5,"K3"],[6,"\u8ee2\u5012 K\uff0fO4"],[7,"\u8ee2\u5012 K\uff0fO5"],[8,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO7"],[9,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO9"],[10,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO10"],[11,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO11"],[12,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  KO12"],[13,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  KO13"],[14,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  KO14"],[15,"4\u30ec\u30d9\u30eb\u8ca0\u50b7  KO15"]])}),T(o,"$get_torg_damage_posibility",function(e){return this.$get_torg_damage(e,3,"\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5",[[0,"1"],[1,"1"],[2,"O1"],[3,"K2"],[4,"2"],[5,"O2"],[6,"\u8ee2\u5012 O2"],[7,"\u8ee2\u5012 K2"],[8,"\u8ee2\u5012 K2"],[9,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K3"],[10,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K4"],[11,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  O4"],[12,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K5"],[13,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  O4"],[14,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5"],[15,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5"]])}),T(o,"$get_torg_damage",function(e,$,t,s){var _=r,g=r;return d(S(e,0))?"1":(_=h(s.$length(),1),d(W(e,_))?this.$get_torg_table_result(e,s):(g=q(h(e,_),2).$to_i(),c(c("",c(g,$).$to_s()),t)))}),T(o,"$get_torg_bonus_text",function(e){try{D("eval_return");var _,t=this,s=r,i=r,g=r,b=r;return i=(s=e.$split(/\+/)).$shift().$to_i(),_=a("ArithmeticEvaluator").$eval(s.$join("+")),g=t.$get_torg_bonus(i),t.$debug("TORG BT resultValue",g),t.$debug("TORG BT mod",_),I(_,0)?b=g.$to_s():(b=t.$getTorgBonusOutputTextWhenModDefined(i,g,_),i=i+"+"+_),[b,i]}catch(f){if(f===n.t_eval_return)return f.$v;throw f}}),T(o,"$getTorgBonusOutputTextWhenModDefined",function(e,$,t){var s=this;return s.$debug("getTorgBonusOutputTextWhenModDefined value, mod",e,t),d(E(t,0))?$+"["+e+"]+"+t+" \uff1e "+c($,t):(s.$debug("resultValue",$),s.$debug("mod",t),$+"["+e+"]"+t+" \uff1e "+c($,t))}),T(o,"$get_torg_bonus",function(e){var s=r,i=r;return s=this.$get_torg_table_result(e,[[1,-12],[2,-10],[3,-8],[5,-5],[7,-2],[9,-1],[11,0],[13,1],[15,2],[16,3],[17,4],[18,5],[19,6],[20,7]]),d(E(e,20))&&(i=c(q(h(e,21),5).$to_i(),1),s=c(s,i)),s})},Opal.queue(function(n){var q,z,G,K,M,F,A,j,r,B=n.module,U=n.klass,k=n.const_set,O=n.def,T=n.truthy,d=n.rb_lt,w=n.rb_minus,E=n.rb_le,c=n.rb_divide,y=n.rb_plus,D=n.rb_times,S=[],h=n.nil;return n.top.$require("bcdice/game_system/Torg"),q=S,z=r=[B(S[0],"BCDice")].concat(q),A=[B(r[0],"GameSystem")].concat(z),j=n.$r(A),G=A,M=[K=U(A[0],j("Torg"),"Torg1_5")].concat(G),F=n.$r(M),k(M[0],"ID","Torg1.5"),k(M[0],"NAME","\u30c8\u30fc\u30b01.5\u7248"),k(M[0],"SORT_KEY","\u3068\u304a\u304f1.5"),K.$register_prefix(F("Torg").$prefixes()),O(K,"$get_torg_success_level",function(o){return this.$get_torg_table_result(o,[[0,"\u304e\u308a\u304e\u308a"],[1,"\u3075\u3064\u3046"],[3,"\u307e\u3042\u3088\u3044"],[7,"\u304b\u306a\u308a\u3088\u3044"],[12,"\u3059\u3054\u3044"]])}),O(K,"$get_torg_interaction_result_intimidate_test",function(o){return this.$get_torg_table_result(o,[[0,"\u840e\u7e2e"],[5,"\u6280\u80fd\u306a\u3057"],[10,"\u9006\u8ee2\u8ca0\u3051"],[15,"\u30e2\u30e9\u30eb\u5d29\u58ca"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),O(K,"$get_torg_interaction_result_taunt_trick",function(o){return this.$get_torg_table_result(o,[[0,"\u840e\u7e2e"],[5,"\u6280\u80fd\u306a\u3057"],[10,"\u9006\u8ee2\u8ca0\u3051"],[15,"\u9ad8\u63da\uff0f\u9006\u8ee2\u8ca0\u3051"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),O(K,"$get_torg_interaction_result_maneuver",function(o){return this.$get_torg_table_result(o,[[0,"\u75b2\u52b4"],[5,"\u840e\u7e2e"],[10,"\u6280\u80fd\u306a\u3057"],[15,"\u9006\u8ee2\u8ca0\u3051\uff0f\u75b2\u52b4"],[17,"\u30d7\u30ec\u30a4\u30e4\u30fc\u30ba\u30b3\u30fc\u30eb"]])}),O(K,"$get_torg_damage_ords",function(o){return this.$get_torg_damage(o,4,8,[[0,"1"],[1,"O1"],[2,"K1"],[3,"O2"],[4,"K2"],[5,"\u8ee2\u5012 O3"],[6,"\u8ee2\u5012 K3"],[7,"\u8ee2\u5012 K\uff0fO4"],[8,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  KO4"],[9,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO5"],[10,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5"],[11,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO6"],[12,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  KO6"],[13,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO7"],[14,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  KO7"],[15,"4\u30ec\u30d9\u30eb\u8ca0\u50b7  KO8"]])}),O(K,"$get_torg_damage_posibility",function(o){return this.$get_torg_damage(o,3,5,[[0,"1"],[1,"1"],[2,"O1"],[3,"K1"],[4,"2"],[5,"O2"],[6,"\u8ee2\u5012 K2"],[7,"\u8ee2\u5012 O3"],[8,"\u8ee2\u5012 K3"],[9,"\u8ee2\u5012 K\uff0fO3"],[10,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO4"],[11,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO4"],[12,"1\u30ec\u30d9\u30eb\u8ca0\u50b7  KO4"],[13,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  K\uff0fO5"],[14,"2\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5"],[15,"3\u30ec\u30d9\u30eb\u8ca0\u50b7  KO5"]])}),O(K,"$get_torg_damage",function(o,l,a,N){var e=h,$=h;return T(d(o,0))?"1":(e=w(N.$length(),1),T(E(o,e))?this.$get_torg_table_result(o,N):($=c(w(o,e),2).$to_i(),y(l,D($,1))+"\u30ec\u30d9\u30eb\u8ca0\u50b7  KO"+y(a,D($,1))))})})}}]);