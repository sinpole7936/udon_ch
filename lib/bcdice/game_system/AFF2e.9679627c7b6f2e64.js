(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[6147],{2590:(ne,se,T)=>{T(5151),Opal.queue(function(t){var V,U,ee,i,b,x,q,X,z,E=t.module,B=t.klass,h=t.const_set,a=t.def,R=t.send,l=t.rb_plus,o=t.truthy,w=t.rb_le,H=t.rb_ge,M=t.rb_lt,Y=t.rb_gt,F=t.eqeqeq,K=t.neqeq,L=t.rb_minus,y=[],r=t.nil;return V=y,U=z=[E(y[0],"BCDice")].concat(V),q=[E(z[0],"GameSystem")].concat(U),X=t.$r(q),ee=q,b=[i=B(q[0],X("Base"),"AFF2e")].concat(ee),x=t.$r(b),i.$$prototype.randomizer=r,h(b[0],"ID","AFF2e"),h(b[0],"NAME","ADVANCED FIGHTING FANTASY 2nd Edition"),h(b[0],"SORT_KEY","\u3042\u3068\u306f\u3093\u3059\u3068\u3075\u3042\u3044\u3066\u3044\u3093\u304f\u3075\u3042\u3093\u305f\u3057\u30442"),h(b[0],"HELP_MESSAGE","\u5bfe\u6297\u306a\u3057\u30ed\u30fc\u30eb\tFF{\u76ee\u6a19\u5024}+{\u88dc\u6b63}\n\u5bfe\u6297\u30ed\u30fc\u30eb\tFR{\u80fd\u529b\u5024}+{\u88dc\u6b63}\n\u6b66\u5668\u30ed\u30fc\u30eb\tFD[2,3,3,3,3,3,4]+{\u88dc\u6b63}\n\u9632\u5177\u30ed\u30fc\u30eb\tFD[0,0,0,0,1+1,1+1,2+2]+{\u88dc\u6b63}\n"),i.$register_prefix("FF.+","FR.+","FD.+"),a(i,"$explicit_sign",function(n){return this.$format("%+d",n)}),a(i,"$eval_term",function(n){var e=r;return e=0,R(n,"scan",[/[+-]?\d+/],function(s){return null==s&&(s=r),e=l(e,s.$to_i())}),e}),a(i,"$parentheses",function(n){return l(l("(",n),")")}),a(i,"$successful_or_failed",function(n,e){switch(n.valueOf()){case 2:return o(w(e,1))?"\u6210\u529f\uff08\u5927\u6210\u529f\u3067\u306f\u306a\u3044\uff09":"\u5927\u6210\u529f\uff01";case 12:return o(H(e,12))?"\u5931\u6557\uff08\u5927\u5931\u6557\u3067\u306f\u306a\u3044\uff09":"\u5927\u5931\u6557\uff01";default:return o(w(n,e))?"\u6210\u529f":"\u5931\u6557"}}),a(i,"$critical",function(n){switch(n.valueOf()){case 2:return"\u30d5\u30a1\u30f3\u30d6\u30eb\uff01";case 12:return"\u5f37\u6253\uff01";default:return r}}),a(i,"$clamp",function(n,e,_){return o(M(n,e))?e:o(Y(n,_))?_:n}),a(i,"$eval_game_system_specific_command",function(n){var _,e=this,s=r,c=r,D=r,f=r,d=r,$=r,p=r,S=r,v=r,u=r,C=r,k=r,G=r,N=r;if(F(/^FF/,_=n))c=(s=x("Regexp").$last_match()).$post_match(),f="2D6<="+(D=e.$eval_term(c)),p=($=(d=e.randomizer.$roll_barabara(2,6)).$sum())+"["+d.$join(",")+"]",S=e.$successful_or_failed($,D),v=[e.$parentheses(f),p,S];else if(F(/^FR/,_))c=(s=x("Regexp").$last_match()).$post_match(),u=e.$eval_term(c),f="2D6"+e.$explicit_sign(u),p=($=(d=e.randomizer.$roll_barabara(2,6)).$sum())+"["+d.$join(",")+"]"+e.$explicit_sign(u),C=e.$critical($),v=[e.$parentheses(f),p,C,l($,u)].$compact();else if(F(/^FD/,_)){if(c=(s=x("Regexp").$last_match()).$post_match(),s=/^\[(.+)\]/.$match(c),!o(s))return"\u30c0\u30e1\u30fc\u30b8\u30b9\u30ed\u30c3\u30c8\u306f\u5fc5\u9808\u3067\u3059\u3002";if(c=s.$post_match(),k=R(s["$[]"](1).$split(","),"map",[],function I(A){return null==A&&(A=r),(null==I.$$s?this:I.$$s).$eval_term(A)},{$$s:e}),K(k.$size(),7))return"\u30c0\u30e1\u30fc\u30b8\u30b9\u30ed\u30c3\u30c8\u306e\u9577\u3055\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059\u3002";u=e.$eval_term(c),f="1D6"+e.$explicit_sign(u),p=""+($=e.randomizer.$roll_once(6))+e.$explicit_sign(u),G=e.$clamp(l($,u),1,7),N=k["$[]"](L(G,1)),v=[e.$parentheses(f),p,l($,u),N+"\u30c0\u30e1\u30fc\u30b8"]}return v.$join(" \uff1e ")})})}}]);