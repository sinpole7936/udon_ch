(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[3721],{7305:(ue,ae,V)=>{V(5151),Opal.queue(function(o){var Q,ee,re,_e,$e,n,r,c,N,$,X,ne,P,y=o.module,Y=o.klass,g=o.const_set,j=o.eqeqeq,E=o.def,W=o.ensure_kwargs,l=o.truthy,h=o.rb_gt,C=o.rb_lt,k=o.not,m=o.eqeq,T=o.send,z=o.hash2,H=o.rb_le,B=o.rb_ge,M=o.to_ary,O=o.neqeq,q=o.rb_plus,J=o.thrower,p=[],t=o.nil,D=o.$$$;return Q=p,ee=P=[y(p[0],"BCDice")].concat(Q),X=[y(P[0],"GameSystem")].concat(ee),ne=o.$r(X),re=X[0],_e=ne("Base"),$e=X,N=[c=Y(re,_e,"TheOneRing2nd")].concat($e),$=o.$r(N),c.$$prototype.randomizer=t,g(N[0],"ID","TheOneRing2nd"),g(N[0],"NAME","\u4e00\u3064\u306e\u6307\u8f2a\uff1a\u6307\u8f2a\u7269\u8a9eTRPG2\u7248"),g(N[0],"SORT_KEY","\u3072\u3068\u3064\u306e\u3086\u3072\u308f\u3086\u3072\u308f\u3082\u306e\u304b\u305f\u308aTRPG2"),g(N[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\u30b3\u30de\u30f3\u30c9(nRG[x][@y][Az][f[0|1]][i[0|1]][w[0|1]][m[0|1]])\n \u5224\u5b9a\u7528\u306b\u96e3\u6613\u5ea6n\u3092\u6307\u5b9a\u3057\u3066\u5224\u5b9a\u30c0\u30a4\u30b9\u3092\u632f\u308b\u3002\u6280\u91cf\u30c0\u30a4\u30b9x\u3001\u75db\u6253\u5224\u5b9a\u5024y\u3001\u4fee\u6b63\u5024z\u3092\u6307\u5b9a\u53ef\u80fd\u3002\n \u6280\u91cf\u30c0\u30a4\u30b9\u3001\u75db\u6253\u5224\u5b9a\u5024\u3001\u4fee\u6b63\u5024\u306f0\u3001\u307e\u305f\u306f\u672a\u6307\u5b9a\uff080\u3068\u540c\u3058\uff09\u306b\u3067\u304d\u308b\u3002\n \u75db\u6253\u5224\u5b9a\u5024\u306e0\u3001\u672a\u6307\u5b9a\u306f\u75db\u6253\u5224\u5b9a\u3092\u884c\u308f\u306a\u3044\u3002\n \u4fee\u6b63\u5024\u306f\u5224\u5b9a\u5408\u8a08\u5024\u306b\u52a0\u7b97\u3055\u308c\u3001\u300c\u30ac\u30f3\u30c0\u30eb\u30d5\u30fb\u30eb\u30fc\u30f3\u300d\u3084\u300c\u30b5\u30a6\u30ed\u30f3\u306e\u76ee\u300d\u306f\u305d\u306e\u5f71\u97ff\u3092\u53d7\u3051\u306a\u3044\u3002\n \u4f8b1: 13RG     (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b90\u500b)\n \u4f8b2: 13RG3    (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b)\n \u4f8b3: 13RG3@10A1  (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u75db\u6253\u5224\u5b9a10\u3001\u7d50\u679c\u306b1\u3092\u52a0\u7b97)\n\n\u30fb\u8868\u7528\u30b3\u30de\u30f3\u30c9(FD[x][f[0|1]][i[0|1]])\n \u8868\u7528\u306b\u5224\u5b9a\u30c0\u30a4\u30b9\u3092\u632f\u308b\u3002\u4fee\u6b63\u5024x\u304c\u6307\u5b9a\u53ef\u80fd\u3002\u4fee\u6b63\u5024\u306f0\u3001\u3042\u308b\u3044\u306f\u672a\u6307\u5b9a(0\u3068\u540c\u3058)\u306b\u3067\u304d\u308b\u3002\n \u300c\u30ac\u30f3\u30c0\u30eb\u30d5\u30fb\u30eb\u30fc\u30f3\u300d\u3084\u300c\u30b5\u30a6\u30ed\u30f3\u306e\u76ee\u300d\u306f\u4fee\u6b63\u5024\u306e\u5f71\u97ff\u3092\u53d7\u3051\u305a\u3001\u5024\u304c10\u3092\u8d8a\u3048\u308b\u3053\u3068\u3082\u306a\u3044\u3002\n \u4f8b1: FD      (1d12\u3067\u5224\u5b9a)\n \u4f8b2: FD1     (1d12\u3067\u5224\u5b9a\u3057\u3001\u30c0\u30a4\u30b9\u76ee\u306b+1\u4fee\u6b63)\n\n\u30fb\u30b3\u30de\u30f3\u30c9\u30aa\u30d7\u30b7\u30e7\u30f3\n\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u5224\u5b9a\u30b3\u30de\u30f3\u30c9\u306a\u30894\u500b\u307e\u3067\u3001\u8868\u7528\u30b3\u30de\u30f3\u30c9\u306a\u30892\u500b\u307e\u3067\u3001\u9806\u4e0d\u540c\u3067\u6307\u5b9a\u53ef\u80fd\uff08\u91cd\u8907\u53ef\uff09\u3002\n  f: \u6709\u5229(favoured)\u30aa\u30d7\u30b7\u30e7\u30f3\u3002\u4e0d\u5229\u3068\u540c\u6642\u6307\u5b9a\u6642\u306f\u76f8\u6bba\u3002\u9078\u629e\u3055\u308c\u305f\u5024\u306b\u25ce\u3002\n  i: \u4e0d\u5229(ill-favoured)\u30aa\u30d7\u30b7\u30e7\u30f3\u3002\u6709\u5229\u3068\u540c\u6642\u6307\u5b9a\u6642\u306f\u76f8\u6bba\u3002\u9078\u629e\u3055\u308c\u305f\u5024\u306b\u25ce\u3002\n \u4f8b1: 13RG3f   (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u6709\u5229)\n \u4f8b2: FD1f     (1\u4fee\u6b63\u3001\u6709\u5229)\n \u4f8b3: 13RG3if   (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u4e0d\u5229\u3001\u6709\u5229)\n      \u203b\u6709\u5229/\u4e0d\u5229\u306f\u76f8\u6bba\u3002\n\n \u5224\u5b9a\u30b3\u30de\u30f3\u30c9\u3067\u306f\u66f4\u306b\u4e0b\u8a18\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u540c\u3058\u6761\u4ef6\u3067\u6307\u5b9a\u53ef\u80fd\u3002\n  w: \u75b2\u52b4(weary)\u72b6\u614b\u30aa\u30d7\u30b7\u30e7\u30f3\u3002\n  m: \u7d76\u671b(miserable)\u72b6\u614b\u30aa\u30d7\u30b7\u30e7\u30f3\u3002\n \u4f8b1: 13RG3wf   (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u75b2\u52b4\u72b6\u614b\u3001\u6709\u5229)\n \u4f8b2: 13RG3fiwm (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u6709\u5229\u3001\u4e0d\u5229\u3001\u75b2\u52b4\u72b6\u614b\u3001\u7d76\u671b\u72b6\u614b)\n      \u203b\u6709\u5229/\u4e0d\u5229\u306f\u76f8\u6bba\u3002\u6700\u5927\u30aa\u30d7\u30b7\u30e7\u30f3\u6570\u3067\u3042\u308b4\u3064\u3092\u6307\u5b9a\u3002\n\n\u30fb\u30aa\u30d7\u30b7\u30e7\u30f3\u30b9\u30a4\u30c3\u30c1\n \u6307\u5b9a\u3057\u305f\u30aa\u30d7\u30b7\u30e7\u30f3\u306eon/off\u30921/0\u3067\u6307\u5b9a\u53ef\u80fd\u30021\u306fon\u30010\u306foff\u3092\u8868\u3059\u3002\n \u8907\u6570\u306e\u540c\u3058\u30aa\u30d7\u30b7\u30e7\u30f3\u3078\u306e\u30b9\u30a4\u30c3\u30c1\u6307\u5b9a\u306f\u3001\u6700\u5f8c\u306e\u30b9\u30a4\u30c3\u30c1\u304c\u6709\u52b9\u3068\u306a\u308b\u3002\n \u4f8b1: 13RG3if0  (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u4e0d\u5229\u306fon\u3001\u6709\u5229\u306foff)\n      \u203b \u6709\u5229\u6307\u5b9a\u304coff\u306e\u305f\u3081\u3001\u76f8\u6bba\u3055\u308c\u305a\u4e0d\u5229\u3068\u306a\u308b\u3002\n \u4f8b2: 13RG3f1f0 (\u96e3\u6613\u5ea613 \u6280\u91cf\u30c0\u30a4\u30b93\u500b\u3001\u6709\u5229\u306f\u6700\u7d42\u7684\u306boff)\n"),c.$register_prefix("\\d+RG","FD"),g(N[0],"SAURONS_EYE_NUMBER",11),g(N[0],"GANDALF_RUNE_NUMBER",12),g(N[0],"CHOICE_DIE_MARK","\u25ce"),n=N,g((r=[y(N[0],"FavouredState")].concat(n))[0],"NORMAL",-98),g(r[0],"FAVOURED",-99),g(r[0],"ILLFAVOURED",-100),E(c,"$eval_game_system_specific_command",function(n){var r;return j(/^\d+RG/i,r=n)?this.$rg_command_exec(n):j(/^FD/i,r)?this.$fd_command_exec(n):"Error"}),c.$private(),function(d,n,e){var r=Y(d,null,"OptionData"),_=[r].concat(e),s=o.$r(_);r.$attr_reader("favoured_state","weary","miserable"),E(r,"$initialize",function(u){var i,f,R,v=this;return null==(i=(u=W(u)).$$smap.favoured_state_value)&&(i=D(s("FavouredState"),"NORMAL")),null==(f=u.$$smap.weary_condition)&&(f=!1),null==(R=u.$$smap.miserable_condition)&&(R=!1),v.favoured_state=i,v.weary=f,v.miserable=R},-1)}(N[0],0,N),E(c,"$get_adjust_number_text",function(n){var e=t;return e="",l(h(n,0))?e="+"+n:l(C(n,0))&&(e=n.$to_s()),e}),E(c,"$get_condition_text",function(n){var e=t;return m(n.$favoured_state(),D($("FavouredState"),"NORMAL"))&&k(n.$weary())&&k(n.$miserable())?"":(e="\n\u72b6\u614b\uff1a",m(n.$favoured_state(),D($("FavouredState"),"FAVOURED"))?e+="\u6709\u5229 ":m(n.$favoured_state(),D($("FavouredState"),"ILLFAVOURED"))&&(e+="\u4e0d\u5229 "),l(n.$weary())&&(e+="\u75b2\u52b4 "),l(n.$miserable())&&(e+="\u7d76\u671b "),e.$rstrip())}),E(c,"$get_options",function(n){var r=t,_=t,s=t;return r=D($("FavouredState"),"NORMAL"),_=!1,s=!1,T(n,"each",[],function a(u){var i=null==a.$$s?this:a.$$s;switch(null==u&&(u=t),u["$[]"](/[WFIM]/).valueOf()){case"W":return s=i["$on_option_switch?"](u);case"F":return r=i.$get_favoured_state(i["$on_option_switch?"](u),r,D($("FavouredState"),"FAVOURED"));case"I":return r=i.$get_favoured_state(i["$on_option_switch?"](u),r,D($("FavouredState"),"ILLFAVOURED"));case"M":return _=i["$on_option_switch?"](u);default:return t}},{$$s:this}),$("OptionData").$new(z(["favoured_state_value","weary_condition","miserable_condition"],{favoured_state_value:r,weary_condition:s,miserable_condition:_}))}),E(c,"$get_favoured_state",function(n,e,r){return l(n)?m(e,r)||m(e,D($("FavouredState"),"NORMAL"))?r:D($("FavouredState"),"NORMAL"):m(e,r)?D($("FavouredState"),"NORMAL"):e}),E(c,"$on_option_switch?",function(n){return!(!m(n.$length(),1)&&!l(h(n["$[]"](o.Range.$new(1,n.$length(),!1)).$to_i(),0)))}),E(c,"$make_successdice_roll",function(n,e){var s,a,_=t;return s=(_=this.randomizer.$roll_barabara(n,6)).$count(6),a=l(e)?T(_,"reject",[],function(i){return null==i&&(i=t),H(i,3)}).$sum():_.$sum(),[_.$to_s(),a,s]}),E(c,"$make_featdice_roll",function(n){var r,s,e=this,_=t,a=t,f=t;return r=m(n,D($("FavouredState"),"NORMAL"))?1:2,_=e.randomizer.$roll_barabara(r,12),s=e.$die_choice(_,n),l(h(r,1))?(a=_.$find_index(s),f="["+(m(a,0)?$("CHOICE_DIE_MARK"):t)+e.$get_specal_die_str(_["$[]"](0))+", "+(m(a,1)?$("CHOICE_DIE_MARK"):t)+e.$get_specal_die_str(_["$[]"](1))+"]"):f="["+e.$get_specal_die_str(s)+"]",[f,s,r]}),E(c,"$die_choice",function(n,e){return m(e,D($("FavouredState"),"ILLFAVOURED"))?l(B(n.$count($("SAURONS_EYE_NUMBER")),1))?$("SAURONS_EYE_NUMBER"):n.$min():m(e,D($("FavouredState"),"FAVOURED"))?l(B(n.$count($("GANDALF_RUNE_NUMBER")),1))?$("GANDALF_RUNE_NUMBER"):m(n.$count($("SAURONS_EYE_NUMBER")),2)?$("SAURONS_EYE_NUMBER"):T(n,"reject",[],function(_){return null==_&&(_=t),_["$=="]($("SAURONS_EYE_NUMBER"))}).$max():n["$[]"](0)}),E(c,"$get_specal_die_str",function(n){return m(n,$("GANDALF_RUNE_NUMBER"))?"\u30ac\u30f3\u30c0\u30eb\u30d5\u30fb\u30eb\u30fc\u30f3":m(n,$("SAURONS_EYE_NUMBER"))?"\u30b5\u30a6\u30ed\u30f3\u306e\u76ee":n}),g(N[0],"FD_ADJUST_NUMBER_INDEX",2),g(N[0],"FD_OPTION_START_INDEX",3),E(c,"$fd_command_exec",function(n){var e,r,s,_=this,a=t,R=t;return s=/^(FD)(-?\d*)?([FI]-?\d*)?([FI]-?\d*)?$/.$match(n),l(s)?(r=_.$get_fd_params(s),a=null==(e=M(r))[0]?t:e[0],r=_.$make_featdice_roll((null==e[1]?t:e[1]).$favoured_state()),e=M(r),_.$get_fd_roll_result("("+(R=null==e[2]?t:e[2])+"D12",null==e[0]?t:e[0],null==e[1]?t:e[1],R,a)):""}),E(c,"$get_fd_roll_result",function(n,e,r,_,s){var a,u,f,R;return u=this.$get_fd_adjust(r,s),f=null==(a=M(u))[0]?t:a[0],n=""+n+(R=null==a[1]?t:a[1])+") \uff1e "+e+R,O(s,0)||O(_,1)?n+" \uff1e ["+this.$get_specal_die_str(f)+"]":n}),E(c,"$get_fd_adjust",function(n,e){var _=t;return l([$("SAURONS_EYE_NUMBER"),$("GANDALF_RUNE_NUMBER")]["$include?"](n))?[n,this.$get_adjust_number_text(e)]:(_=q(n,e),l(h(_,10))?_=10:l(C(_,1))&&(_=1),[_,this.$get_adjust_number_text(e)])}),E(c,"$get_fd_params",function(n){var r,_;return r=n["$[]"]($("FD_ADJUST_NUMBER_INDEX")).$to_i(),_=n["$[]"](o.Range.$new($("FD_OPTION_START_INDEX"),n.$length(),!1)).$compact(),[r,this.$get_options(_)]}),g(N[0],"RG_DIFFICULTY_INDEX",1),g(N[0],"RG_SUCCESS_DICE_INDEX",3),g(N[0],"RG_PIERCING_BLOWS_INDEX",5),g(N[0],"RG_ADJUST_NUMBER_INDEX",7),g(N[0],"RG_OPTION_START_INDEX",8),E(c,"$rg_command_exec",function(n){var e,r,s,_=this,a=t,u=t,i=t,f=t,R=t,v=t,b=t,U=t,L=t,S=t,A=t,F=t,G=t,w=t;return s=/^(\d+)(RG)(\d*)(@(\d{0,2}))?(A(-?\d*))?([WFIM]-?\d*)?([WFIM]-?\d*)?([WFIM]-?\d*)?([WFIM]-?\d*)?$/.$match(n),l(s)?(a=0,r=_.$get_rg_params(s),u=null==(e=M(r))[0]?t:e[0],i=null==e[1]?t:e[1],f=null==e[2]?t:e[2],R=null==e[3]?t:e[3],r=_.$make_featdice_roll((v=null==e[4]?t:e[4]).$favoured_state()),b=null==(e=M(r))[0]?t:e[0],L=null==e[2]?t:e[2],S=O(U=null==e[1]?t:e[1],$("SAURONS_EYE_NUMBER"))?U:0,A="("+L+"D12",F=b,l(h(i,0))&&(r=_.$make_successdice_roll(i,v.$weary()),G=null==(e=M(r))[0]?t:e[0],a=null==e[2]?t:e[2],S=q(S,null==e[1]?t:e[1]),A=A+"+"+i+"D6",F=F+"+"+G),r=_.$get_rg_adjust(S,R),e=M(r),_.$get_rg_roll_result(A=""+A+(w=null==e[1]?t:e[1])+") \uff1e "+F+w,u,U,f,S=null==e[0]?t:e[0],a,v)):""}),E(c,"$get_rg_adjust",function(n,e){return n=q(n,e),l(C(n,0))&&(n=0),[n,this.$get_adjust_number_text(e)]}),E(c,"$get_rg_roll_result",function(n,e,r,_,s,a,u){try{var R,v,i=J("return"),b=t,U=t,L=t,S=t;return R=this.$get_condition_text(u),v="\u6210\u529f\u5ea6 "+a,b=T(this,"lambda",[],function(F,G,I,w){null==F&&(F=t),null==G&&(G=t),null==I&&(I=t),null==w&&(w=t),l(h(G,0))&&l(B(F,G))&&O(F,$("SAURONS_EYE_NUMBER"))&&(I+=" \u75db\u6253\u767a\u751f\uff01"),i.$throw(""+I+w)},{$$ret:i}),m(r,$("GANDALF_RUNE_NUMBER"))?(U=b.$call(r,_,U=n+"\uff1a\u81ea\u52d5\u6210\u529f["+v+"]",R),l(B(a,2))?$("Result").$critical(U):$("Result").$success(U)):l(u.$miserable())&&m(r,$("SAURONS_EYE_NUMBER"))?$("Result").$failure(n+"\uff1a\u81ea\u52d5\u5931\u6557"+R):(L="\u96e3\u6613\u5ea6 "+e+" \u9054\u6210\u5024 "+s,l(h(e,s))?$("Result").$failure(n+" "+L+"\uff1a\u5931\u6557"+R):(S=b.$call(r,_,S=n+" "+L+"\uff1a\u6210\u529f["+v+"]",R),l(B(a,2))?$("Result").$critical(S):$("Result").$success(S)))}catch(A){if(A===i)return A.$v;throw A}}),E(c,"$get_rg_params",function(n){var e,_,s,a,u,f,i;return _=n["$[]"]($("RG_DIFFICULTY_INDEX")).$to_i(),s=n["$[]"]($("RG_SUCCESS_DICE_INDEX")).$to_i(),a=n["$[]"]($("RG_ADJUST_NUMBER_INDEX")).$to_i(),u=l(i=(e=n["$[]"]($("RG_PIERCING_BLOWS_INDEX")))===t||null==e?t:e.$to_i())?i:-1,f=n["$[]"](o.Range.$new($("RG_OPTION_START_INDEX"),n.$length(),!1)).$compact(),[_,s,u,a,this.$get_options(f)]})})}}]);