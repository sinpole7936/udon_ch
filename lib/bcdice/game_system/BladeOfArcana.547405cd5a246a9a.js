(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[4890],{5037:(O,ee,E)=>{E(5151),Opal.queue(function(t){var I,Y,Z,R,T,_,g,U,D,F=t.module,w=t.klass,A=t.const_set,K=t.send2,V=t.find_super,b=t.def,p=t.eqeqeq,C=t.eqeq,G=t.not,z=t.neqeq,a=t.truthy,B=t.rb_lt,y=t.rb_le,q=t.rb_gt,S=t.rb_minus,J=t.send,u=t.rb_plus,M=t.rb_ge,P=[],n=t.nil;return I=P,Y=D=[F(P[0],"BCDice")].concat(I),g=[F(D[0],"GameSystem")].concat(Y),U=t.$r(g),Z=g,T=[R=w(g[0],U("Base"),"BladeOfArcana")].concat(Z),_=t.$r(T),R.$$prototype.randomizer=n,A(T[0],"ID","BladeOfArcana"),A(T[0],"NAME","\u30d6\u30ec\u30a4\u30c9\u30fb\u30aa\u30d6\u30fb\u30a2\u30eb\u30ab\u30ca\uff08\u30d1\u30c3\u30c1\u7248\uff09"),A(T[0],"SORT_KEY","\u3075\u308c\u3044\u3068\u304a\u3075\u3042\u308b\u304b\u306a"),A(T[0],"HELP_MESSAGE","\u25a0\u884c\u70ba\u5224\u5b9a\u3000nA[m][Cx][Fy]\n\u3000n\uff1a\u30c0\u30a4\u30b9\u6570\u3000\u3000m\uff1a\u5224\u5b9a\u5024(\u7701\u7565\u6642\u306f\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3068\u540c\u3058)\n\u3000x\uff1a\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024(\u7701\u7565\u6642\u306f1)\u3000\u3000y\uff1a\u30d5\u30a1\u30f3\u30d6\u30eb\u5024(\u7701\u7565\u6642\u306f20)\n\u3000\u6ce8\uff09[m]\u3001[Cx]\u3001[Fy]\u306f\u7701\u7565\u53ef\u80fd\u3002\n\u3000\u3000\u4f8b\uff093A12C4F15\u21923\u500b\u632f\u308a12\u4ee5\u4e0b\u3067\u6210\u529f\u3002C\u50244\u3001F\u5024\u306f15\u3002\n\u3000\u3000\u4f8b\uff093A12\u21923\u500b\u632f\u308a12\u4ee5\u4e0b\u3067\u6210\u529f\u3002C\u50241\u3001F\u5024\u306f20\u3002\n\n\u25a0\u5404\u7a2e\u8868\u3000(+\uff1a\u51fa\u76ee2\uff5e21\u306b\u5909\u66f4\u3000-\uff1a\u51fa\u76ee0\uff5e19\u306b\u5909\u66f4)\n\u25cf\u30ea\u30a4\u30f3\u30ab\u30fc\u30cd\u30a4\u30b7\u30e7\u30f3\n\u3000\u56e0\u7e01\u8868\u3000CTR[+/-]\u3000\u3000\u524d\u4e16\u9082\u9005\u8868\u3000DJV[-]\n\u3000\u60aa\u5fb3\u30b7\u30fc\u30f3\u8868\u3000AKST[+/-]\n\u25cfThe 3rd\uff08\u7b2c\u4e09\u7248\uff09\n\u3000\u56e0\u7e01\u8868\u3000CT3[+/-]\n\u3000\u6ce8\uff09[]\u5185\u306f\u7701\u7565\u53ef\u80fd\u3002\n\u3000\u3000\u4f8b\uff09CTR\u2192\u56e0\u7e01\u8868\uff08R\u7248\uff09\u3092\u51fa\u76ee1\uff5e20\u3067\u30ed\u30fc\u30eb\u3059\u308b\u3002\n\u3000\u3000\u4f8b\uff09CTR+\u2192\u56e0\u7e01\u8868\uff08R\u7248\uff09\u3092\u51fa\u76ee2\uff5e21\u3067\u30ed\u30fc\u30eb\u3059\u308b\u3002\n"),R.$register_prefix("\\d+A","CT3[\\+\\-]?","CTR[\\+\\-]?","DJV\\-?","AKST[\\+\\-]?"),b(R,"$initialize",function h(o){var e=this;return h.$$p=null,K(e,V(e,"initialize",h,!1,!0),"initialize",[o],null),e.sort_add_dice=!0}),b(R,"$eval_game_system_specific_command",function(o){var e,r=this,$=n,f=n,i=n,s=n,c=n,l=n,v=n,k=n,m=n;return p(/^(\d+)A(\d*)([CF]?)(\d*)([CF]?)(\d*)$/,e=o.$upcase())?($=_("Regexp").$last_match(1).$to_i(),f=_("Regexp").$last_match(2).$to_i(),i=_("Regexp").$last_match(3),s=_("Regexp").$last_match(4),c=_("Regexp").$last_match(5),l=_("Regexp").$last_match(6),z(i["$empty?"](),s["$empty?"]())||z(c["$empty?"](),l["$empty?"]())||G(c["$empty?"]())&&C(i,c)?n:(C(i,"C")?(v=s.$to_i(),k=l.$to_i()):(v=l.$to_i(),k=s.$to_i()),r.$rollAct($,f,v,k))):p(/^CT3([+-]?)$/,e)?(m=_("Regexp").$last_match(1),r.$tableText("\u56e0\u7e01\u8868(The 3rd)\u3000\u300eBoA3\u300fP292",["\u3010\u4ed6\u751f\u3011","\u3010\u5e2b\u5f1f\u3011","\u3010\u5fd8\u5374\u3011","\u3010\u5144\u59c9\u3011","\u3010\u8cb8\u3057\u3011","\u3010\u6155\u60c5\u3011","\u3010\u4e3b\u5f93\u3011","\u3010\u5f37\u6575\u3011","\u3010\u79d8\u5bc6\u3011","\u3010\u6069\u4eba\u3011","\u3010\u544a\u767a\u3011","\u3010\u53cb\u4eba\u3011","\u3010\u4ec7\u6575\u3011","\u3010\u7236\u6bcd\u3011","\u3010\u501f\u308a\u3011","\u3010\u4fe1\u983c\u3011","\u3010\u5e7c\u5b50\u3011","\u3010\u53d6\u5f15\u3011","\u3010\u5730\u7e01\u3011","\u3010\u540c\u5fd7\u3011","\u3010\u4e0d\u5be9\u3011","\u3010\u81ea\u8eab\u3011"],m)):p(/^CTR([+-]?)$/,e)?(m=_("Regexp").$last_match(1),r.$tableText("\u56e0\u7e01\u8868(\u30ea\u30a4\u30f3\u30ab\u30fc\u30cd\u30a4\u30b7\u30e7\u30f3)\u3000\u300eBAR\u300fP51\u3001299",["\u3010\u4ed6\u751f\u3011","\u3010\u5e2b\u5f1f\u3011","\u3010\u5fd8\u5374\u3011","\u3010\u5144\u59c9\u3011","\u3010\u8cb8\u3057\u3011","\u3010\u61a7\u61ac\u3011","\u3010\u4e3b\u5f93\u3011","\u3010\u5f37\u6575\u3011","\u3010\u79d8\u5bc6\u3011","\u3010\u6069\u4eba\u3011","\u3010\u53d6\u5f15\u3011","\u3010\u53cb\u4eba\u3011","\u3010\u6028\u6575\u3011","\u3010\u5f8c\u63f4\u3011","\u3010\u501f\u308a\u3011","\u3010\u4fe1\u983c\u3011","\u3010\u5f1f\u59b9\u3011","\u3010\u5546\u58f2\u3011","\u3010\u5947\u7e01\u3011","\u3010\u540c\u5fd7\u3011","\u3010\u6709\u70ba\u3011","\u3010\u81ea\u8eab\u3011"],m)):p(/^DJV(-?)$/,e)?(m=_("Regexp").$last_match(1),r.$tableText("\u524d\u4e16\u9082\u9005\u8868\uff08\u30c7\u30b8\u30e3\u30d6\uff09\u3000\u300eBAR\u300fP235",["\u3010\u9bae\u70c8\u306a\u98a8\u3011\n\u98a8\u306f\u61d0\u304b\u3057\u3044\u5302\u3044\u3092\u3001\u9999\u308a\u3092\u904b\u3093\u3067\u304f\u308b\u3002\u305d\u308c\u306f\u2026\u2026\u3002","\u3010\u8584\u6697\u3044\u5f71\u3011\n\u307e\u308b\u3067\u6642\u304c\u6b62\u307e\u3063\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u304b\u306e\u3088\u3046\u3060\u3002","\u3010\u64cd\u308a\u306e\u7cf8\u3011\n\u305d\u308c\u306f\u3042\u306a\u305f\u3092\u5c0e\u304f\u8718\u86db\u306e\u7cf8\u3002","\u3010\u5929\u4e0a\u306e\u5149\u3011\n\u5049\u5927\u306a\u308b\u3082\u306e\u304c\u3082\u305f\u3089\u3059\u3001\u5929\u4e0a\u304b\u3089\u306e\u5fa1\u3057\u308b\u3057\u3002","\u3010\u6e29\u3082\u308a\u3011\n\u6625\u306e\u3072\u306a\u305f\u306e\u3088\u3046\u306a\u6e29\u304b\u3055\u3092\u611f\u3058\u308b\u3002","\u3010\u92ed\u3044\u30ca\u30a4\u30d5\u3011\n\u92ed\u3044\u30ca\u30a4\u30d5\u306e\u3088\u3046\u306a\u8996\u7dda\u3092\u611f\u3058\u308b\u3002\u3053\u308c\u306f\u2026\u2026\u3002","\u3010\u5171\u9cf4\u3011\n\u540c\u3058\u611f\u899a\u3092\u611f\u3058\u308b\u3001\u3075\u305f\u308a\u306f\u901a\u3058\u5408\u3063\u3066\u3044\u308b\u3002","\u3010\u57ce\u58c1\u3011\n\u53b3\u3057\u304f\u9ad8\u3044\u57ce\u58c1\u306e\u3088\u3046\u306b\u91cd\u304f\u5805\u304f\u539a\u3044\u3002","\u3010\u7815\u3051\u308b\u5668\u3011\n\u843d\u3061\u308c\u3070\u7815\u3051\u308b\u3002\u7815\u3051\u308c\u3070\u305d\u308c\u306f\u5668\u3067\u306f\u306a\u3044\u3002","\u3010\u967d\u708e\u3011\n\u6c42\u3081\u308c\u3070\u63fa\u3089\u3044\u3067\u6d88\u3048\u308b\u3002","\u3010\u7d42\u308f\u308a\u306a\u304d\u5186\u74b0\u3011\n\u305d\u308c\u306f\u3042\u306a\u305f\u3092\u6349\u3048\u5de1\u308b\u8f2a\u5efb\u306e\u8f2a\u3002","\u3010\u5929\u79e4\u3011\n\u63fa\u308c\u308b\u30d0\u30e9\u30f3\u30b9\u3001\u63fa\u308c\u7d9a\u3051\u308b\u5b89\u5b9a\u3002","\u3010\u6d41\u308c\u308b\u6c34\u3011\n\u3072\u3068\u3064\u6240\u306b\u3068\u3069\u307e\u3089\u305a\u3001\u59ff\u3092\u56fa\u3081\u308b\u3053\u3068\u306f\u306a\u3044","\u3010\u5149\u308b\u5203\u3011\n\u92ed\u304f\u5149\u308b\u5203\u306e\u3088\u3046\u306a\u3001\u92ed\u3044\u307e\u306a\u3056\u3057\u3002","\u3010\u60aa\u9b54\u3011\n\u3042\u307e\u308a\u306b\u3082\u5371\u967a\u306a\u9b45\u529b\u3001\u305d\u308c\u306f\u60aa\u9b54\u7684\u3060\u3063\u305f\u3002","\u3010\u7259\u3011\n\u7372\u7269\u3092\u5f15\u304d\u88c2\u304f\u92ed\u304f\u9577\u3044\u3001\u7259\u3002","\u3010\u8f1d\u304f\u661f\u3011\n\u661f\u306f\u6697\u304f\u5c0f\u3055\u3044\u3002\u3060\u304c\u305d\u3053\u306b\u8f1d\u304f\u3002","\u3010\u51b4\u3048\u6e21\u308b\u6708\u5149\u3011\n\u51b7\u305f\u3055\u3068\u5b89\u3089\u304b\u3055\u304c\u540c\u5c45\u3057\u3066\u3044\u308b\u3002","\u3010\u7167\u308a\u3064\u3051\u308b\u592a\u967d\u3011\n\u6691\u3044\u3002","\u3010\u71c3\u3048\u3055\u304b\u308b\u708e\u3011\n\u708e\u306f\u3059\u3079\u3066\u3092\u7834\u58ca\u3057\u3001\u3059\u3079\u3066\u3092\u6ec5\u307c\u3059\u3002","\u3010\u4e16\u754c\u3011\n\u3059\u3079\u3066\u306f\u3053\u306e\u4e16\u754c\u306e\u4e2d\u3067\u8d77\u3053\u308a\u3001\u7d42\u308f\u308b\u3002","\u3010\u306a\u3057\u3011"],m)):p(/^AKST([+-]?)$/,e)?(m=_("Regexp").$last_match(1),r.$tableText("\u60aa\u5fb3\u30b7\u30fc\u30f3\u8868\u3000\u300eGoV\u300fP16\u3001164",["\u25bc\u30a6\u30a7\u30f3\u30c8\u30b9\uff0f\u6b62\u307e\u306a\u3044\u98a8\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u72c2\u6c17\u306b\u5f53\u3066\u3089\u308c\u305f\u306e\u304b\u3001\u901a\u308a\u9b54\u7684\u6bba\u4eba\u8005\u304c\u73fe\u308c\u308b\u3002\u5207\u308a\u88c2\u304b\u308c\u305f\u4eba\u3005\u306e\u60b2\u9cf4\u304c\u97ff\u304d\u6e21\u308b\u3002","\u25bc\u30a8\u30d5\u30a7\u30af\u30c8\u30b9\uff0f\u539f\u521d\u306e\u529b\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u914d\u4e0b\u304c\u7121\u6cd5\u3092\u50cd\u304f\u3002\u5e97\u5148\u3067\u91d1\u54c1\u3092\u8981\u6c42\u3057\u305f\u308a\u3001\u66b4\u529b\u3092\u632f\u308b\u3063\u305f\u308a\u3057\u3066\u3044\u308b\u3002","\u25bc\u30af\u30ec\u30a2\u30fc\u30bf\uff0f\u5080\u5121\u4eba\u5f62\u306e\u738b\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u914d\u4e0b\u304c\u4eba\u3005\u306e\u884c\u52d5\u3092\u76e3\u8996\u3057\u3066\u3044\u308b\u3002\u9055\u53cd\u3057\u305f\u8005\u306b\u306f\u5373\u5ea7\u306b\u7f70\u304c\u4e0e\u3048\u3089\u308c\u308b\u3002","\u25bc\u30de\u30fc\u30c6\u30eb\uff0f\u751f\u3051\u308b\u795e\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u914d\u4e0b\u304c\u4eba\u3005\u306b\u6bba\u622e\u8005\u3078\u306e\u4fe1\u4ef0\u3092\u544a\u767d\u3057\u3001\u5fe0\u8aa0\u3092\u5ba3\u8a93\u3059\u308b\u3088\u3046\u306b\u5f37\u8981\u3057\u3066\u3044\u308b\u3002","\u25bc\u30b3\u30ed\u30ca\uff0f\u7c12\u596a\u8005\n\u3010\u884c\u52d5\u3011\u5606\u304d\u60b2\u3057\u3093\u3067\u3044\u308b\u8005\u304c\u3044\u308b\u3002\u6bba\u622e\u8005\u306b\u3088\u3063\u3066\u3001\u8ca1\u7523\u3001\u5730\u4f4d\u3001\u5bb6\u65cf\u3042\u308b\u3044\u306f\u3001\u604b\u4eba\u3092\u596a\u3044\u53d6\u3089\u308c\u305f\u3068\u3044\u3046\u3002","\u25bc\u30d5\u30a3\u30cb\u30b9\uff0f\u6c38\u9060\u306e\u4eba\n\u3010\u884c\u52d5\u3011\u602a\u7269\u304c\u4eba\u3005\u3092\u8650\u6bba\u3057\u3066\u3044\u308b\u3002\u3053\u306e\u5730\u306b\u306f\u4eba\u9593\u304c\u591a\u3059\u304e\u308b\u306e\u3060\u3068\u3044\u3046\u3002\u305d\u308c\u304c\u5f7c\u3089\u306e\u4e3b\u306e\u6c7a\u5b9a\u3060\u3002","\u25bc\u30a8\u30eb\u30b9\uff0f\u7121\u79c1\u306a\u308b\u611b\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u914d\u4e0b\u304c\u7565\u596a\u3092\u50cd\u3044\u3066\u3044\u308b\u3002\u3069\u3046\u3084\u3089\u3001\u6bba\u622e\u8005\u306b\u732e\u4e0a\u3059\u308b\u3082\u306e\u3092\u4e89\u3063\u3066\u3044\u308b\u3088\u3046\u3060\u3002","\u25bc\u30a2\u30c0\u30de\u30b9\uff0f\u4e07\u7269\u306e\u4fdd\u8b77\u8005\n\u3010\u884c\u52d5\u3011\u53cd\u9006\u8005\u3068\u540d\u6307\u3057\u3055\u308c\u308b\u3002\u4eba\u3005\u306f\u541b\u305f\u3061\u306b\u63a5\u89e6\u3057\u3088\u3046\u3068\u3057\u306a\u3044\u3002\u60c5\u5831\u3092\u96c6\u3081\u308b\u306b\u3082\u82e6\u52b4\u3057\u305d\u3046\u3060\u3002","\u25bc\u30a2\u30eb\u30c9\u30fc\u30eb\uff0f\u7d42\u308f\u308a\u306a\u304d\u6226\u3044\n\u3010\u884c\u52d5\u3011\u306a\u3089\u305a\u8005\u306e\u96c6\u56e3\u304c\u4eba\u3005\u3092\u8972\u3063\u3066\u3044\u308b\u3002\u529b\u3092\u793a\u3055\u306a\u3051\u308c\u3070\u5207\u308a\u6368\u3066\u3089\u308c\u308b\u306e\u306f\u5f7c\u3089\u306a\u306e\u3060\u3002","\u25bc\u30d5\u30a1\u30f3\u30bf\u30b9\u30de\uff0f\u8b00\u7565\u306e\u6e26\n\u3010\u884c\u52d5\u3011\u4eba\u3005\u306f\u541b\u3092\u898b\u308b\u306a\u308a\u9003\u3052\u51fa\u3057\u305f\u3002\u3069\u3046\u3084\u3089\u6050\u308d\u3057\u3044\u6bba\u4eba\u8005\u3060\u3068\u601d\u308f\u308c\u3066\u3044\u308b\u3088\u3046\u3060\u3002","\u25bc\u30a2\u30af\u30b7\u30b9\uff0f\u771f\u7406\u306e\u63a2\u7a76\u8005\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306e\u914d\u4e0b\u306e\u624b\u306b\u3088\u3063\u3066\u3001\u4eba\u3005\u304c\u9023\u308c\u53bb\u3089\u308c\u3066\u3044\u308b\u3002\u8ab0\u3072\u3068\u308a\u3082\u3069\u3063\u3066\u3053\u306a\u3044\u3002","\u25bc\u30ec\u30af\u30b9\uff0f\u6355\u7e1b\u8005\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u3078\u306e\u6050\u6016\u306b\u99c6\u3089\u308c\u305f\u4eba\u3005\u306f\u305d\u306e\u547d\u4ee4\u306b\u3057\u305f\u304c\u3063\u3066\u5f92\u515a\u3092\u7d44\u307f\u3001PC\u305f\u3061\u3092\u635c\u7d22\u3057\u3066\u3044\u308b\u3002","\u25bc\u30a2\u30af\u30a2\uff0f\u6fb1\u3093\u3060\u6c34\n\u3010\u884c\u52d5\u3011\u4eba\u3005\u306f\u7363\u306e\u3088\u3046\u306b\u751f\u304d\u3066\u3044\u308b\u3002\u8a00\u8449\u306f\u901a\u3058\u306a\u3044\u3002\u6709\u52b9\u306a\u306e\u306f\u529b\u3001\u66b4\u529b\u3060\u3051\u3060\u3002","\u25bc\u30b0\u30e9\u30c7\u30a3\u30a6\u30b9\uff0f\u6697\u304d\u6b7b\u306e\u5203\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u3068\u305d\u306e\u914d\u4e0b\u306b\u3088\u3063\u3066\u8650\u6bba\u304c\u884c\u306a\u308f\u308c\u3066\u3044\u308b\u3002\u898b\u6e21\u3059\u9650\u308a\u3001\u6b7b\u8005\u3070\u304b\u308a\u3060\u3002","\u25bc\u30a2\u30f3\u30b0\u30eb\u30b9\uff0f\u7d14\u767d\u306e\u6050\u6016\n\u3010\u884c\u52d5\u3011\u904a\u3073\u3068\u3057\u3066\u4eba\u9593\u72e9\u308a\u304c\u884c\u306a\u308f\u308c\u3066\u3044\u308b\u3002\u4eba\u3005\u306f\u9003\u3052\u60d1\u3044\u3001\u6bba\u622e\u8005\u306f\u6109\u60a6\u306b\u7b11\u3046\u3002","\u25bc\u30c7\u30a3\u30a2\u30dc\u30eb\u30b9\uff0f\u60aa\u9b54\u306e\u56c1\u304d\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306f\u5c11\u5e74\u5c11\u5973\u3092\u53ec\u3057\u4e0a\u3052\u3066\u3044\u308b\u3002\u53ec\u3057\u4e0a\u3052\u3089\u308c\u305f\u8005\u305f\u3061\u306f\u97f3\u4fe1\u4e0d\u901a\u3068\u306a\u3063\u3066\u3057\u307e\u3046\u3002","\u25bc\u30d5\u30eb\u30ad\u30d5\u30a7\u30eb\uff0f\u88cf\u5207\u308a\u8005\n\u3010\u884c\u52d5\u3011\u4eba\u3005\u306f\u731c\u7591\u306e\u76ee\u3067\u541b\u3092\u898b\u308b\u3002\u5618\u3092\u5410\u304f\u306e\u304c\u666e\u901a\u306e\u5834\u6240\u3067\u771f\u5b9f\u3092\u898b\u3044\u3060\u305b\u308b\u3060\u308d\u3046\u304b\u3002","\u25bc\u30b9\u30c6\u30e9\uff0f\u7834\u6ec5\u3078\u306e\u611b\n\u3010\u884c\u52d5\u3011\u8857\u3084\u6751\u843d\u304c\u7834\u58ca\u3055\u308c\u3066\u3044\u308b\u3002\u713c\u3051\u91ce\u539f\u306e\u4e2d\u3001\u4eba\u3005\u306f\u529b\u306a\u304f\u3046\u305a\u304f\u307e\u308b\u3002\u3053\u3053\u306b\u306f\u7d76\u671b\u3060\u3051\u304c\u3042\u3063\u305f\u3002","\u25bc\u30eb\u30ca\uff0f\u596a\u3046\u8005\n\u3010\u884c\u52d5\u3011\u541b\u305f\u3061\u306e\u76ee\u306e\u524d\u306b\u7565\u596a\u304c\u7e70\u308a\u8fd4\u3055\u308c\u308b\u3002\u7565\u596a\u306e\u305f\u3081\u306b\u7565\u596a\u3092\u884c\u306a\u3046\u6bba\u622e\u8005\u306e\u914d\u4e0b\u305f\u3061\u3002","\u25bc\u30c7\u30af\u30b9\u30c8\u30e9\uff0f\u90aa\u60aa\u306a\u6280\n\u3010\u884c\u52d5\u3011\u6bba\u622e\u8005\u306b\u3088\u308b\u975e\u9053\u306a\u4eba\u4f53\u5b9f\u9a13\u304c\u7e70\u308a\u8fd4\u3055\u308c\u3066\u3044\u308b\u3002\u305d\u306e\u305f\u3081\u306e\u5b9f\u9a13\u6750\u6599\u304c\u96c6\u3081\u3089\u308c\u3066\u3044\u308b\u3002","\u25bc\u30a4\u30b0\u30cb\u30b9\uff0f\u6839\u6e90\u305f\u308b\u708e\n\u3010\u884c\u52d5\u3011\u8857\u3084\u96c6\u843d\u3001\u3042\u308b\u3044\u306f\u5e97\u8217\u3084\u4f4f\u5b85\u304c\u713c\u304d\u8a0e\u3061\u306b\u5408\u3046\u3002\u4eba\u3005\u306f\u4e92\u3044\u306b\u9665\u308c\u3001\u78d4\u5211\u304c\u884c\u306a\u308f\u308c\u3066\u3044\u308b\u3002","\u25bc\u30aa\u30fc\u30d3\u30b9\uff0f\u95c7\u306e\u9396\n\u3010\u884c\u52d5\u3011\u4e16\u754c\u306e\u5b8c\u5168\u306a\u308b\u7834\u6ec5\u3001\u4eba\u985e\u306e\u7d76\u6ec5\u3001\u7121\u4f5c\u70ba\u3067\u5e83\u7bc4\u56f2\u306a\u8650\u6bba\u304c\u884c\u306a\u308f\u308c\u308b\u3002"],m)):n}),b(R,"$rollAct",function(o,r,e,$){var i=n,s=n,c=n,l=n;return null==r&&(r=0),null==e&&(e=0),null==$&&($=0),a(B(e,1))&&(e=1),a(y(r,0))?r=e:a(q(e,r))&&(e=r),a(y($,0))&&($=20),a(y(o,0))&&(o=1,$=S($,5)),a(B($,2))?$=2:a(q($,20))&&($=20),s=(i=this.randomizer.$roll_barabara(o,20).$sort()).$sum(),l="("+o+"A"+r+"C"+e+"F"+$+") \uff1e "+(c=i.$join(","))+" \uff1e ",C(o,1)||(s=J(c.$split(","),"map",[],"to_i".$to_proc()).$min(),l=u(l,s+" \uff1e ")),a(M(s,$))?_("Result").$fumble(u(l,"\u30d5\u30a1\u30f3\u30d6\u30eb")):a(y(s,e))?_("Result").$critical(u(l,"\u30af\u30ea\u30c6\u30a3\u30ab\u30eb")):a(q(s,r))?_("Result").$failure(u(l,"\u5931\u6557")):_("Result").$success(u(l,"\u6210\u529f"))},-2),b(R,"$tableText",function(o,r,e){var f,i=n,s=n;return null==e&&(e=""),i=f=this.randomizer.$roll_once(20),C(e,"+")?i=u(i,1):C(e,"-")&&(i=S(i,1)),s=o+" \uff1e "+i,a(e["$empty?"]())||(s=u(s,"["+f+e+"1]")),u(u(s," \uff1e "),r["$[]"](i))},-3)})}}]);