(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[8521],{588:(W,X,B)=>{B(5151),Opal.queue(function(e){var I,N,U,i,$,s,A,v,F,w,g=e.module,D=e.klass,_=e.const_set,L=e.send2,G=e.find_super,b=e.def,a=e.truthy,k=e.hash2,p=e.send,P=e.rb_le,y=e.rb_gt,R=e.not,j=e.rb_plus,E=[],n=e.nil,h=e.$$$;return I=E,N=w=[g(E[0],"BCDice")].concat(I),v=[g(w[0],"GameSystem")].concat(N),F=e.$r(v),U=v,$=[i=D(v[0],F("Base"),"MamonoScramble")].concat(U),s=e.$r($),(A=i.$$prototype).round_type=A.randomizer=n,_($[0],"ID","MamonoScramble"),_($[0],"NAME","\u30de\u30e2\u30ce\u30b9\u30af\u30e9\u30f3\u30d6\u30eb"),_($[0],"SORT_KEY","\u307e\u3082\u306e\u3059\u304f\u3089\u3093\u3075\u308b"),_($[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a xMS<=t\n\u3000[\u5224\u5b9a]\u3092\u884c\u3046\u3002\u6210\u5426\u3068[\u30de\u30ea\u30e7\u30af]\u306e\u4e0a\u6607\u91cf\u3092\u8868\u793a\u3059\u308b\u3002\n\u3000x: \u30c0\u30a4\u30b9\u6570\n\u3000t: \u80fd\u529b\u5024\uff08\u76ee\u6a19\u5024\uff09\n\n\u30fb\u30a2\u30af\u30b7\u30c7\u30f3\u30c8\u8868 ACC\n"),b(i,"$initialize",function c(u){var r=this;return c.$$p=null,L(r,G(r,"initialize",c,!1,!0),"initialize",[u],null),r.sides_implicit_d=12,r.round_type=h(s("RoundType"),"CEIL")}),b(i,"$eval_game_system_specific_command",function(u){var r;return a(r=this.$roll_ability(u))?r:this.$roll_tables(u,s("TABLES"))}),i.$private(),b(i,"$roll_ability",function(u){var r=n,l=n,d=n,f=n,C=n,S=n,M=n,x=n,z=n;return r=h(s("Command"),"Parser").$new("MS",k(["round_type"],{round_type:this.round_type})).$has_prefix_number().$disable_modifier().$restrict_cmp_op_to("<="),l=r.$parse(u),a(l)?(d=this.randomizer.$roll_barabara(l.$prefix_number(),12).$sort(),f=p(d,"count",[],function(t){return null==t&&(t=n),P(t,l.$target_number())}),C=d.$count(1),S=y(C,0),M=d["$include?"](12),x=a(M)&&R(S)?0:j(f,C),z=["("+l+")","["+d.$join(",")+"]",a(y(f,0))?"\u6210\u529f, [\u30de\u30ea\u30e7\u30af]\u304c"+x+"\u4e0a\u304c\u308b":"\u5931\u6557"],p(s("Result").$new(),"tap",[],function(t){var m,T;return null==t&&(t=n),t["$text="](z.$join(" \uff1e ")),t["$condition="](y(f,0)),m=[a(T=t["$success?"]())?S:T],p(t,"critical=",m),m[m.length-1]})):n}),_($[0],"TABLES",k(["ACC"],{ACC:h(s("DiceTable"),"Table").$new("\u30a2\u30af\u30b7\u30c7\u30f3\u30c8\u8868","1D12",["\u601d\u308f\u306c\u5bfe\u7acb\uff1a[\u5224\u5b9a]\u306710\u301c12\u306e\u51fa\u76ee\u30921\u500b\u3067\u3082\u51fa\u3057\u305f\u5834\u5408\u3001\u3010\u8010\u4e45\u5024\u3011\u30922\u70b9\u6e1b\u3089\u3059\u3002","\u90fd\u5e02\u306e\u8ff7\u5bae\u5316\uff1a[\u5224\u5b9a]\u306b\u3010\u793e\u4f1a\u3011\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u3002","\u4e0d\u7a4f\u306a\u5929\u6c17\uff1a\u7279\u5225\u306a\u52b9\u679c\u306f\u767a\u751f\u3057\u306a\u3044\u3002","\u7a81\u7136\u306e\u96f7\u96e8\uff1a\u30a8\u30ea\u30a2\u306e[\u7279\u6027]\u306b[\u96e8]\u3084[\u6c34\u305f\u307e\u308a]\u306a\u3069\u3092\u8db3\u3057\u3066\u3082\u3044\u3044\u3002","\u95a2\u4fc2\u306a\u3044\u5371\u6a5f\uff1a[\u5224\u5b9a]\u306b\u5931\u6557\u3057\u305fPC\u306e\u3010\u8010\u4e45\u5024\u3011\u30922\u70b9\u6e1b\u3089\u3059\u3002","\u304b\u3089\u308a\u3068\u6674\u5929\uff1a\u30a8\u30ea\u30a2\u306e[\u7279\u6027]\u306b[\u5f37\u3044\u65e5\u5149]\u3084[\u65e5\u3060\u307e\u308a]\u306a\u3069\u3092\u8db3\u3057\u3066\u3082\u3044\u3044\u3002","\u8b0e\u306e\u304a\u796d\u308a\uff1a[\u5224\u5b9a]\u30671\u301c3\u306e\u51fa\u76ee\u30921\u500b\u3067\u3082\u51fa\u3057\u305f\u5834\u5408\u3001\u3010\u8010\u4e45\u5024\u3011\u30922\u70b9\u56de\u5fa9\u3059\u308b\u3002","\u3059\u3054\u3044\u4eba\u3054\u307f\uff1a\u30a8\u30ea\u30a2\u306e[\u7279\u6027]\u306b[\u91ce\u6b21\u99ac]\u3084[\u89b3\u5149\u5ba2]\u306a\u3069\u3092\u8db3\u3057\u3066\u3082\u3044\u3044\u3002","\u30de\u30ea\u30e7\u30af\u4e71\u6c17\u6d41\uff1a[\u5224\u5b9a]\u306b\u3010\u7570\u8cea\u3011\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u3002","\u9b54\u8853\u30c6\u30ed\u4e8b\u4ef6\uff1aGM\u304c1D\u3092\u30ed\u30fc\u30eb\u3059\u308b\u3002\u51fa\u76ee\u304c1\u301c3\u306a\u3089\u3010\u8eab\u4f53\u3011\u3001\u51fa\u76ee\u304c4\u301c6\u306a\u3089\u3010\u7570\u8cea\u3011\u3001\u51fa\u76ee\u304c7\u301c9\u306a\u3089\u3010\u793e\u4f1a\u3011\u304c[\u5224\u5b9a]\u3067\u4f7f\u3048\u306a\u3044\u300210\u301c12\u306f\u4f55\u3082\u8d77\u304d\u306a\u3044\u3002","\u30de\u30ea\u30e7\u30af\u4f4e\u6c17\u5727\uff1a[\u5224\u5b9a]\u306b\u3010\u8eab\u4f53\u3011\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u3002","\u5e73\u7a4f\u306a\u6642\u9593\uff1a\u7279\u5225\u306a\u52b9\u679c\u306f\u767a\u751f\u3057\u306a\u3044\u3002"])}).$freeze()),i.$register_prefix("\\d+MS",s("TABLES").$keys())})}}]);