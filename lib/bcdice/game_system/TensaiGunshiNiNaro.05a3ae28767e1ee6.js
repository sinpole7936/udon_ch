(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[24],{1323:(ee,ne,z)=>{z(5151),Opal.queue(function(t){var F,Q,O,l,i,n,u,h,N,Y,E,W,M,P=t.module,w=t.klass,b=t.const_set,U=t.send2,H=t.find_super,g=t.def,s=t.truthy,A=t.send,D=t.hash2,J=t.rb_divide,R=t.rb_gt,k=[],e=t.nil,o=t.$$$;return F=k,Q=M=[P(k[0],"BCDice")].concat(F),E=[P(M[0],"GameSystem")].concat(Q),W=t.$r(E),O=E,h=[u=w(E[0],W("Base"),"TensaiGunshiNiNaro")].concat(O),N=t.$r(h),(Y=u.$$prototype).randomizer=Y.round_type=e,b(h[0],"ID","TensaiGunshiNiNaro"),b(h[0],"NAME","\u5929\u624d\u8ecd\u5e2b\u306b\u306a\u308d\u3046"),b(h[0],"SORT_KEY","\u3066\u3093\u3055\u3044\u304f\u3093\u3057\u306b\u306a\u308d\u3046"),b(h[0],"HELP_MESSAGE","\u30fb\u884c\u70ba\u5224\u5b9a\nTN6\u2026\u300c\u6709\u5229\u300d\u3092\u5f97\u3066\u3044\u306a\u3044\u5834\u5408\u30016\u9762\u30c0\u30a4\u30b9\u30922\u3064\u632f\u3063\u3066\u5224\u5b9a\u3057\u307e\u3059\u3002\nTN10\u2026\u300c\u6709\u5229\u300d\u3092\u5f97\u3066\u3044\u308b\u5834\u5408\u300110\u9762\u30c0\u30a4\u30b9\u30922\u3064\u632f\u3063\u3066\u5224\u5b9a\u3057\u307e\u3059\u3002\n\u4e0d\u8abf \u6c17\u3065\u304b\u306c\u3046\u3061\u306e\u4e0d\u6e80\u3010C\u3011\u2026\u5224\u5b9a\u306e\u30c0\u30a4\u30b9\u76ee\u304c\u300c4\u300d\u3067\u3082\u5224\u5b9a\u306b\u6210\u529f\u3057\u307e\u305b\u3093\u3002\u6570\u5b57\u306e\u5f8c\u308d\u306b\u3010C\u3011\u3092\u3064\u3051\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN6C\n\u8ecd\u5e2b\u30b9\u30ad\u30eb \u3007\u3007\u30b5\u30dd\u30fc\u30c8\u3010S\u3011\u2026\u6c7a\u6226\u30d5\u30a7\u30a4\u30ba\u306e\u5224\u5b9a\u4e2d\u300c3\u300d\u306e\u51fa\u76ee\u3092\u51fa\u3057\u3066\u3082\u5224\u5b9a\u306b\u6210\u529f\u3057\u307e\u3059\u3002\u6570\u5b57\u306e\u5f8c\u308d\u306b\u3010S\u3011\u3092\u3064\u3051\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN6S\n\u82f1\u5091\u30b9\u30ad\u30eb/\u6b66\u4eba \u714c\u3081\u304f\u5203\u3010B\u3011\u2026\u6c7a\u6226\u30d5\u30a7\u30a4\u30ba\u306e\u5224\u5b9a\u4e2d\u300c3\u300d\u306e\u51fa\u76ee\u3092\u51fa\u3057\u3066\u3082\u5224\u5b9a\u306b\u6210\u529f\u3068\u306a\u308a\u3001\u30b9\u30da\u30b7\u30e3\u30eb\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u6570\u5b57\u306e\u5f8c\u308d\u306b\u3010B\u3011\u3092\u3064\u3051\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN6B\n\u82f1\u5091\u30b9\u30ad\u30eb/\u30ab\u30ea\u30b9\u30de \u5fa1\u8eab\u306e\u305f\u3081\u306a\u3089\u3070\u3010Y\u3011\u2026\u300c\u4ea4\u6d41\u300d\u300c\u30b9\u30ab\u30a6\u30c8\u300d\u306e\u5224\u5b9a\u4e2d\u300c3\u300d\u306e\u51fa\u76ee\u3092\u51fa\u3057\u3066\u3082\u5224\u5b9a\u306b\u6210\u529f\u3068\u306a\u308a\u3001\u30b9\u30da\u30b7\u30e3\u30eb\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u6570\u5b57\u306e\u5f8c\u308d\u306b\u3010Y\u3011\u3092\u3064\u3051\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN6Y\n\u82f1\u5091\u30b9\u30ad\u30eb/\u82f1\u5091\u6c4e\u7528 \u51c4\u8155\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3010A\u3011\u2026\u6d3b\u52d5\u30d5\u30a7\u30a4\u30ba\u306e\u5224\u5b9a\u4e2d\u300c3\u300d\u306e\u51fa\u76ee\u3092\u51fa\u3057\u3066\u3082\u5224\u5b9a\u306b\u6210\u529f\u3068\u306a\u308a\u3001\u30b9\u30da\u30b7\u30e3\u30eb\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u6570\u5b57\u306e\u5f8c\u308d\u306b\u3010A\u3011\u3092\u3064\u3051\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN6A\n\u6570\u5b57\u306e\u5f8c\u308d\u306b\u8907\u6570\u306e\u30b3\u30de\u30f3\u30c9\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\n\u3000\u4f8b\uff09TN10CYA\n\u30fb\u30c0\u30e1\u30fc\u30b8\u8a08\u7b97 xDM>=t\n\u3000[\u30c0\u30e1\u30fc\u30b8\u8a08\u7b97]\u3092\u884c\u3046\u3002\u6210\u5426\u3068\u3010HP\u3011\u306e\u6e1b\u5c11\u91cf\u3092\u8868\u793a\u3059\u308b\u3002\n\u3000x: 6\u9762\u30c0\u30a4\u30b9\u6570\n\u3000t: \u9632\u5fa1\u529b\n\u30fb\u5404\u7a2e\u8868\n\u95a2\u4fc2\u6c7a\u5b9a\u8868 RELA\n\u5e73\u6642\u5929\u624d\u8ecd\u5e2b\u8868 PTGS\n\u5e73\u6642\u82f1\u5091\u8868 PTHE\n\u30b9\u30ab\u30a6\u30c8\u8868 SCOU\n\u5909\u8abf\u8868 BDST\n"),g(u,"$initialize",function l(r){var n=this;return l.$$p=null,U(n,H(n,"initialize",l,!1,!0),"initialize",[r],null),n.d66_sort_type=o(N("D66SortType"),"ASC"),n.round_type=o(N("RoundType"),"FLOOR")}),u.$register_prefix("TN(6|10)[CSBYA]*","\\d+DM"),g(u,"$eval_game_system_specific_command",function(r){var n,$,i=this;return s(n=s($=i.$roll_judge(r))?$:i.$roll_damage(r))?n:i.$roll_tables(r,o(i.$class(),"TABLES"))}),u.$private(),g(u,"$roll_judge",function(r){var i=this,n=e,$=e,a=e,m=e,f=e,d=e,y=e,_=e,c=e,B=e,j=e,S=e,T=e,C=e,L=e,x=e,G=e;return n=/^TN(6|10)([CSBYA]*)$/.$match(r),s(n)?($=[4,5,6,7,8,9,10],a=[6,10],m=[1],f=n["$[]"](1)["$=="]("10"),d=n["$[]"](2)["$include?"]("C"),y=n["$[]"](2)["$include?"]("S"),_=n["$[]"](2)["$include?"]("B"),c=n["$[]"](2)["$include?"]("Y"),B=n["$[]"](2)["$include?"]("A"),s(y["$|"](_)["$|"](c)["$|"](B))&&$.$push(3),s(_["$|"](c)["$|"](B))&&a.$push(3),s(d)&&$.$delete(4),j=s(f)?10:6,S=i.randomizer.$roll_barabara(2,j),T=[],C=!1,L=!1,x=!1,s(S.$intersection(a)["$empty?"]())||(C=!0,T.$push(i.$translate("TensaiGunshiNiNaro.JUDGE.critical")),(G=[]).$push(i.$translate("TensaiGunshiNiNaro.NORMAL.critical")),s(_)&&G.$push(i.$translate("TensaiGunshiNiNaro.BLADE.critical")),s(c)&&G.$push(i.$translate("TensaiGunshiNiNaro.YOU.critical")),T.$push("\uff08"+G.$join("")+"\uff09")),s(S.$intersection(m)["$empty?"]())||(L=!0,T.$push(i.$translate("TensaiGunshiNiNaro.JUDGE.fumble")),T.$push("\uff08"+i.$translate("TensaiGunshiNiNaro.NORMAL.fumble")+"\uff09")),s(S.$intersection($)["$empty?"]())?T.$push(i.$translate("failure")):(x=!0,T.$push(i.$translate("success"))),A(N("Result").$new(),"tap",[],function(p){var v;return null==p&&(p=e),p["$text="](r+" \uff1e ["+S.$join(",")+"] \uff1e "+T.$join("")),p["$condition="](x),p["$critical="](C),A(p,"fumble=",v=[L]),v[v.length-1]})):e}),g(u,"$roll_damage",function(r){var i=this,$=e,a=e,m=e,f=e,d=e;return $=o(N("Command"),"Parser").$new("DM",D(["round_type"],{round_type:i.round_type})).$has_prefix_number().$disable_modifier().$restrict_cmp_op_to(">=").$parse(r),s($)?(a="",m=!1,f=i.randomizer.$roll_sum($.$prefix_number(),6),d=J(f,$.$target_number()).$floor(),s(R(d,3))&&(d=3),s(R(d,0))?(m=!0,a=i.$translate("TensaiGunshiNiNaro.DAMAGE.success",D(["damage","dec"],{damage:f.$to_s(),dec:d.$to_s()}))):a=i.$translate("TensaiGunshiNiNaro.DAMAGE.failure",D(["damage"],{damage:f.$to_s()})),A(N("Result").$new(),"tap",[],function(_){var c;return null==_&&(_=e),_["$text="](r+" \uff1e "+f+" \uff1e "+a),A(_,"condition=",c=[m]),c[c.length-1]})):e}),i=[l=t.get_singleton_class(u)].concat(h),n=t.$r(i),l.$private(),g(l,"$translate_tables",function(a){return D(["RELA","PTGS","PTHE","SCOU","BDST"],{RELA:o(n("DiceTable"),"D66Table").$from_i18n("TensaiGunshiNiNaro.table.RELA",a),PTGS:o(n("DiceTable"),"D66Table").$from_i18n("TensaiGunshiNiNaro.table.PTGS",a),PTHE:o(n("DiceTable"),"D66Table").$from_i18n("TensaiGunshiNiNaro.table.PTHE",a),SCOU:o(n("DiceTable"),"D66Table").$from_i18n("TensaiGunshiNiNaro.table.SCOU",a),BDST:o(n("DiceTable"),"Table").$from_i18n("TensaiGunshiNiNaro.table.BDST",a)})}),b(h[0],"TABLES",u.$translate_tables("ja_jp")),u.$register_prefix(N("TABLES").$keys())})}}]);