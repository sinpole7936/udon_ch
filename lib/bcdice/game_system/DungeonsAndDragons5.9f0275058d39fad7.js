(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[544],{2179:(X,Z,B)=>{B(5151),Opal.queue(function(d){var L,Y,V,D,w,T,q,J,C,H=d.module,G=d.klass,x=d.const_set,M=d.send2,I=d.find_super,v=d.def,i=d.truthy,z=d.eqeq,g=d.rb_gt,t=d.rb_plus,E=d.neqeq,k=d.rb_ge,R=d.send,S=[],e=d.nil;return L=S,Y=C=[H(S[0],"BCDice")].concat(L),q=[H(C[0],"GameSystem")].concat(Y),J=d.$r(q),V=q,w=[D=G(q[0],J("Base"),"DungeonsAndDragons5")].concat(V),T=d.$r(w),D.$$prototype.randomizer=e,x(w[0],"ID","DungeonsAndDragons5"),x(w[0],"NAME","\u30c0\u30f3\u30b8\u30e7\u30f3\u30ba\uff06\u30c9\u30e9\u30b4\u30f3\u30ba\u7b2c5\u7248"),x(w[0],"SORT_KEY","\u305f\u3093\u3057\u3088\u3093\u3059\u3042\u3093\u3068\u3068\u3089\u3053\u3093\u30595"),x(w[0],"HELP_MESSAGE","\u30fb\u653b\u6483\u30ed\u30fc\u30eb\u3000AT[x][@c][>=t][y]\n\u3000x\uff1a+-\u4fee\u6b63\u3002\u7701\u7565\u53ef\u3002\n\u3000c:\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3002\u7701\u7565\u53ef\u3002\n\u3000t:\u6575\u306e\u30a2\u30fc\u30de\u30fc\u30af\u30e9\u30b9\u3002>=\u3092\u542b\u3081\u3066\u7701\u7565\u53ef\u3002\n\u3000y:\u6709\u5229(A), \u4e0d\u5229(D)\u3002\u7701\u7565\u53ef\u3002\n\u3000\u30d5\u30a1\u30f3\u30d6\u30eb\uff0f\u5931\u6557\uff0f\u6210\u529f\uff0f\u30af\u30ea\u30c6\u30a3\u30ab\u30eb \u3092\u81ea\u52d5\u5224\u5b9a\u3002\n\u3000\u4f8b\uff09AT AT>=10 AT+5>=18 AT-3>=16 ATA AT>=10A AT+3>=18A AT-3>=16 ATD AT>=10D AT+5>=18D AT-5>=16D\n\u3000    AT@19 AT+5@18 AT-2@19>=15\n\u30fb\u80fd\u529b\u5024\u5224\u5b9a\u3000AR[x][>=t][y]\n\u3000\u653b\u6483\u30ed\u30fc\u30eb\u3068\u540c\u69d8\u3002\u5931\u6557\uff0f\u6210\u529f\u3092\u81ea\u52d5\u5224\u5b9a\u3002\n\u3000\u4f8b\uff09AR AR>=10 AR+5>=18 AR-3>=16 ARA AR>=10A AR+3>=18A AR-3>=16 ARD AR>=10D AR+5>=18D AR-5>=16D\n\u30fb\u4e21\u624b\u6301\u3061\u306e\u30c0\u30e1\u30fc\u30b8\u30002HnDx[m]\n\u3000n:\u30c0\u30a4\u30b9\u306e\u500b\u6570\n\u3000x:\u30c0\u30a4\u30b9\u306e\u9762\u6570\n\u3000m:+-\u4fee\u6b63\u3002\u7701\u7565\u53ef\u3002\n\u3000\u30d1\u30e9\u30c7\u30a3\u30f3\u3068\u30d5\u30a1\u30a4\u30bf\u30fc\u306e\u6b66\u5668\u306e\u4e21\u624b\u6301\u3061\u306b\u3088\u308b\u30c0\u30e1\u30fc\u30b8\u30c0\u30a4\u30b9\u306e1,2\u306e\u51fa\u76ee\u306e\u632f\u308a\u76f4\u3057\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u4f8b)2H3D6 2H1D10+3 2H2D8-1\n"),D.$register_prefix("AT([+-]\\d+)?(@\\d+)?(>=\\d+)?[AD]?","AR([+-]\\d+)?(>=\\d+)?[AD]?","2H(\\d+)D(\\d+)([+-]\\d+)?"),v(D,"$initialize",function y(m){var n=this;return y.$$p=null,M(n,I(n,"initialize",y,!1,!0),"initialize",[m],null),n.sort_barabara_dice=!1}),v(D,"$eval_game_system_specific_command",function(m){var n,s,a=this;return i(n=i(s=a.$attack_roll(m))?s:a.$ability_roll(m))?n:a.$twohands_damage_roll(m)}),v(D,"$number_with_sign_from_int",function(m){return z(m,0)?"":i(g(m,0))?"+"+m:m.$to_s()}),v(D,"$attack_roll",function(m){var a=this,n=e,s=e,f=e,c=e,u=e,$=e,A=e,o=e,_=e,h=e,l=e;return n=/^AT([-+]\d+)?(@(\d+))?(>=(\d+))?([AD]?)/.$match(m),i(n)?(s=n["$[]"](1).$to_i(),f=n["$[]"](3).$to_i(),c=n["$[]"](5).$to_i(),u=n["$[]"](6),$=0,A="",o="AT"+a.$number_with_sign_from_int(s),i(g(f,0))?o=t(o,"@"+f):f=20,i(g(c,0))&&(o=t(o,">="+c)),i(u["$empty?"]())||(o=t(o,u.$to_s())),_=["("+o+")"],i(u["$empty?"]())?A=$=a.randomizer.$roll_once(20):(h=a.randomizer.$roll_barabara(2,20),A=t(t("[",h.$join(",")),"]"),$=z(u,"A")?h.$max():h.$min()),E(s,0)?(_.$push(""+A+a.$number_with_sign_from_int(s)),_.$push(t($,s).$to_s())):(i(u["$empty?"]())||_.$push(A),_.$push($.$to_s())),l=T("Result").$new(),i(k($,f))?(l["$critical="](!0),l["$success="](!0),_.$push("\u30af\u30ea\u30c6\u30a3\u30ab\u30eb")):z($,1)?(l["$fumble="](!0),_.$push("\u30d5\u30a1\u30f3\u30d6\u30eb")):i(g(c,0))&&(i(k(t($,s),c))?(l["$success="](!0),_.$push("\u6210\u529f")):_.$push("\u5931\u6557")),R(T("Result").$new(),"tap",[],function(r){var p;return null==r&&(r=e),r["$text="](_.$join(" \uff1e ")),i(l)?((i(g(c,0))||i(l["$critical?"]())||i(l["$fumble?"]()))&&r["$condition="](l["$success?"]()),r["$critical="](l["$critical?"]()),p=[l["$fumble?"]()],R(r,"fumble=",p),p[p.length-1]):e})):e}),v(D,"$ability_roll",function(m){var a=this,n=e,s=e,f=e,c=e,u=e,$=e,A=e,o=e,_=e,h=e;return n=/^AR([-+]\d+)?(>=(\d+))?([AD]?)/.$match(m),i(n)?(s=n["$[]"](1).$to_i(),f=n["$[]"](3).$to_i(),c=n["$[]"](4),u=0,$="",A="AR"+a.$number_with_sign_from_int(s),i(g(f,0))&&(A=t(A,">="+f)),i(c["$empty?"]())||(A=t(A,c.$to_s())),o=["("+A+")"],i(c["$empty?"]())?$=u=a.randomizer.$roll_once(20):(_=a.randomizer.$roll_barabara(2,20),$=t(t("[",_.$join(",")),"]"),u=z(c,"A")?_.$max():_.$min()),E(s,0)?(o.$push(""+$+a.$number_with_sign_from_int(s)),o.$push(t(u,s).$to_s())):(i(c["$empty?"]())||o.$push($),o.$push(u.$to_s())),h=T("Result").$new(),i(g(f,0))&&(i(k(t(u,s),f))?(h["$success="](!0),o.$push("\u6210\u529f")):o.$push("\u5931\u6557")),R(T("Result").$new(),"tap",[],function(b){var r;return null==b&&(b=e),b["$text="](o.$join(" \uff1e ")),i(h)?(i(g(f,0))&&b["$condition="](h["$success?"]()),b["$critical="](h["$critical?"]()),r=[h["$fumble?"]()],R(b,"fumble=",r),r[r.length-1]):e})):e}),v(D,"$twohands_damage_roll",function(m){var a=this,n=e,s=e,f=e,c=e,u=e,$=e,A=e,o=e,_=e,h=e,l=e;return n=/^2H(\d+)D(\d+)([+-]\d+)?/.$match(m),i(n)?(s=n["$[]"](1).$to_i(),f=n["$[]"](2).$to_i(),c=n["$[]"](3).$to_i(),u=a.$number_with_sign_from_int(c),$=["(2H"+s+"D"+f+u+")"],A=a.randomizer.$roll_barabara(s,f),o=t(t("[",A.$join(",")),"]"),$.$push(""+o+u),_=[],h=[],l=0,R(A,"each",[],function b(r){var p=null==b.$$s?this:b.$$s,j=e;return null==p.randomizer&&(p.randomizer=e),null==r&&(r=e),i(g(r.$to_i(),2))?(l=t(l,r.$to_i()),_.$push(r)):(j=p.randomizer.$roll_once(f),l=t(l,j.$to_i()),h.$push(j))},{$$s:a}),i(h["$empty?"]())||$.$push(t(t(t(t("[",_.$join(",")),"]["),h.$join(",")),"]"+u)),$.$push(t(l,c).$to_s()),R(T("Result").$new(),"tap",[],function(r){var p;return null==r&&(r=e),p=[$.$join(" \uff1e ")],R(r,"text=",p),p[p.length-1]})):e})})}}]);