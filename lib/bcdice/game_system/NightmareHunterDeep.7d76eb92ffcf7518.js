(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[1462],{9862:(te,ie,I)=>{I(5151),Opal.modules["bcdice/format"]=function(e){var d,B,m,H,w,u,y=e.module,g=e.eqeqeq,a=e.def,k=e.truthy,C=e.eqeq,c=e.rb_gt,q=[],l=e.nil;return d=q,B=u=[y(q[0],"BCDice")].concat(d),H=[m=y(u[0],"Format")].concat(B),w=e.$r(H),m.$module_function(),a(m,"$comparison_operator",function(s){var b;return g("==",b=s)?"=":g("!=",b)?"<>":g(w("Symbol"),b)?s.$to_s():l}),a(m,"$modifier",function(s){return k(s["$nil?"]())?l:C(s,0)?"":k(c(s,0))?"+"+s:s.$to_s()})},Opal.queue(function(e){var Y,U,ee,o,h,N,R,X,j,y=e.module,g=e.klass,a=e.const_set,k=e.send2,C=e.find_super,c=e.def,q=e.send,l=e.rb_minus,x=e.rb_times,d=e.rb_plus,E=e.hash2,u=e.truthy,S=e.to_ary,B=e.eqeq,m=e.neqeq,H=e.rb_ge,w=e.rb_divide,v=e.rb_gt,b=[],r=e.nil,K=e.$$$;return e.top.$require("bcdice/format"),Y=b,U=j=[y(b[0],"BCDice")].concat(Y),R=[y(j[0],"GameSystem")].concat(U),X=e.$r(R),ee=R,h=[o=g(R[0],X("Base"),"NightmareHunterDeep")].concat(ee),N=e.$r(h),o.$$prototype.randomizer=r,a(h[0],"ID","NightmareHunterDeep"),a(h[0],"NAME","\u30ca\u30a4\u30c8\u30e1\u30a2\u30cf\u30f3\u30bf\u30fc=\u30c7\u30a3\u30fc\u30d7"),a(h[0],"SORT_KEY","\u306a\u3044\u3068\u3081\u3042\u306f\u3093\u305f\u3042\u3066\u3044\u3044\u3075"),a(h[0],"HELP_MESSAGE","\u5224\u5b9a\uff08xD6+y>=a, xD6+y, xD6)\n  \u51fa\u76ee6\u306e\u500b\u6570\u3092\u30ab\u30a6\u30f3\u30c8\u3057\u3066\u3001\u305d\u306e4\u500d\u3092\u5408\u8a08\u5024\u306b\u52a0\u7b97\u3057\u307e\u3059\u3002\n  \u307e\u305f\u3001\u5bbf\u547d\u3092\u7372\u5f97\u3057\u305f\u304b\u8868\u793a\u3057\u307e\u3059\u3002\n\n  Lv\u76ee\u6a19\u5024 (xD6+y>=LVn, xD6+y>=NLn)\n    \u30ec\u30d9\u30eb\u3067\u76ee\u6a19\u5024\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n    LVn -> n*5+1, NLn -> n*5+5 \u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002\n  \u76ee\u6a19\u5024'?' (xD6+y>=?)\n    \u76ee\u6a19\u5024\u3092 '?' \u306b\u3059\u308b\u3068\u4f55Lv\u6210\u529f\u304b\u3001\u4f55NL\u6210\u529f\u304b\u3092\u8868\u793a\u3057\u307e\u3059\u3002\n\n\u203b\u5224\u5b9a\u30b3\u30de\u30f3\u30c9\u306f xD6 \u304b\u3089\u59cb\u307e\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f xD6 \u304c\u8907\u6570\u3042\u308b\u3068\u53cd\u5fdc\u3057\u307e\u305b\u3093\u3002\n"),o.$register_prefix("\\d+D6"),c(o,"$initialize",function f(n){var $=this;return f.$$p=null,k($,C($,"initialize",f,!1,!0),"initialize",[n],null),$.sort_add_dice=!0}),c(o,"$eval_game_system_specific_command",function(n){var t,$,i=this,_=r,A=r,D=r,z=r,L=r,F=r,M=r,P=r;return n=q(q(n,"sub",[/Lv(\d+)/i],function(){return l(x(N("Regexp").$last_match(1).$to_i(),5),1).$to_s()}),"sub",[/NL(\d+)/i],function(){return d(x(N("Regexp").$last_match(1).$to_i(),5),5).$to_s()}),_=K(N("Command"),"Parser").$new(/\d+D6/,E(["round_type"],{round_type:i.$round_type()})).$restrict_cmp_op_to(r,">=").$enable_question_target().$parse(n),u(_)?(A=_.$command().$to_i(),z=(D=i.randomizer.$roll_barabara(A,6).$sort()).$sum(),L=d(z,_.$modify_number()),$=i.$dice_revision(D),F=null==(t=S($))[0]?r:t[0],L=d(L,null==t[1]?r:t[1]),M=u(_["$question_target?"]())?"?":_.$target_number(),P=i.$result_text(L,_.$cmp_op(),M),["("+_+")",i.$interim_expr(_,z,D),i.$expr_with_revision(d(z,_.$modify_number()),F),L,P,i.$fate(D)].$compact().$join(" \uff1e ")):r}),c(o,"$result_text",function(n,t,$){var i=r,p=r;return B(t,">=")?m($,"?")?u(H(n,$))?"\u6210\u529f":"\u5931\u6557":(i=w(d(n,1),5).$to_i(),p=w(l(n,5),5).$to_i(),u(v(i,0))?"Lv"+i+"/NL"+p+"\u6210\u529f":"\u5931\u6557"):r}),c(o,"$fate",function(n){return u(v(n.$count(1),0))?"\u5bbf\u547d\u7372\u5f97":r}),c(o,"$interim_expr",function(n,t,$){var i=r;return u(v($.$size(),1))||m(n.$modify_number(),0)?(i=N("Format").$modifier(n.$modify_number()),t+"["+$.$join(",")+"]"+i):r}),c(o,"$expr_with_revision",function(n,t){return u(t)?""+n+t:r}),c(o,"$dice_revision",function(n){var t;return t=n.$count(6),u(v(t,0))?["+"+t+"*4",x(t,4)]:[r,0]})})}}]);