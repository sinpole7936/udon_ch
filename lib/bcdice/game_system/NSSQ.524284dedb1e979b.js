(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[3678],{7729:(p,O,F)=>{F(5151),Opal.queue(function(l){var I,Y,X,s,y,v,T,U,Q,E=l.module,N=l.klass,C=l.const_set,u=l.truthy,b=l.def,z=l.rb_plus,D=l.eqeq,x=l.rb_ge,B=l.rb_lt,w=l.thrower,q=l.rb_minus,H=l.send,A=l.rb_gt,G=l.eqeqeq,k=l.rb_le,P=[],r=l.nil;return I=P,Y=Q=[E(P[0],"BCDice")].concat(I),T=[E(Q[0],"GameSystem")].concat(Y),U=l.$r(T),X=T,y=[s=N(T[0],U("Base"),"NSSQ")].concat(X),v=l.$r(y),s.$$prototype.randomizer=r,C(y[0],"ID","NSSQ"),C(y[0],"NAME","SRS\u3058\u3083\u306a\u3044\u4e16\u754c\u6a39\u306e\u8ff7\u5baeTRPG"),C(y[0],"SORT_KEY","\u3048\u3059\u3042\u3042\u308b\u3048\u3059\u3057\u3084\u306a\u3044\u305b\u304b\u3044\u3057\u3086\u306e\u3081\u3044\u304d\u3086\u3046TRPG"),C(y[0],"HELP_MESSAGE","\u25a0 \u5224\u5b9a (xSQ\xb1y>=z)\n  xD6\u306e\u5224\u5b9a\u30023\u3064\u4ee5\u4e0a\u632f\u3063\u305f\u3068\u304d\u3001\u51fa\u76ee\u306e\u9ad8\u30442\u3064\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u7d76\u5bfe\u6210\u529f\u3001\u7d76\u5bfe\u5931\u6557\u3082\u8a08\u7b97\u3057\u307e\u3059\u3002\n  2\u3064\u306e\u30b5\u30a4\u30b3\u30ed\u3092\u4f7f\u7528\u3057\u3066\u51fa\u76ee\u306b1\u304c\u3042\u3063\u305f\u5834\u5408\u306f\u3001FP\u306e\u7372\u5f97\u3082\u8868\u793a\u3057\u307e\u3059\u30023\u3064\u4ee5\u4e0a\u4f7f\u7528\u3057\u305f\u5834\u5408\u306f\u8868\u793a\u3057\u307e\u305b\u3093\u3002\n  \xb1y: y\u306b\u4fee\u6b63\u5024\u3092\u5165\u529b\u3002\xb1\u306e\u8a08\u7b97\u306b\u5bfe\u5fdc\u3002\u7701\u7565\u53ef\u80fd\u3002\n  z: \u76ee\u6a19\u5024\u3002\u7701\u7565\u53ef\u80fd\u3002\n\n\u25a0 \u30c0\u30e1\u30fc\u30b8\u30ed\u30fc\u30eb (xDR(C)(+)y)\n  xD6\u306e\u30c0\u30e1\u30fc\u30b8\u30ed\u30fc\u30eb\u3002\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30d2\u30c3\u30c8\u306e\u81ea\u52d5\u5224\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002C\u3092\u4ed8\u3051\u308b\u3068\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30a2\u30c3\u30d7\u72b6\u614b\u3067\u8a08\u7b97\u3067\u304d\u307e\u3059\u3002+\u3092\u4ed8\u3051\u308b\u3068\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30d2\u30c3\u30c8\u6642\u306e\u30c0\u30a4\u30b9\u304c8\u500b\u306b\u306a\u308a\u307e\u3059\u3002\n  x: x\u306b\u632f\u308b\u30c0\u30a4\u30b9\u6570\u3092\u5165\u529b\u3002\n  y: y\u306b\u8010\u6027\u3092\u5165\u529b\u3002\n  \u4f8b) 5DR3 5DRC4 5DRC+4\n\n\u25a0 \u56de\u5fa9\u30ed\u30fc\u30eb (xHRy)\n  xD6\u306e\u56de\u5fa9\u30ed\u30fc\u30eb\u3002\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30d2\u30c3\u30c8\u304c\u767a\u751f\u3057\u307e\u305b\u3093\u3002\n  x: x\u306b\u632f\u308b\u30c0\u30a4\u30b9\u6570\u3092\u5165\u529b\u3002\n  y: y\u306b\u8010\u6027\u3092\u5165\u529b\u3002\u7701\u7565\u3057\u305f\u5834\u54083\u3002\n  \u4f8b) 2HR 10HR2\n\n\u25a0 \u63a1\u96c6\u30ed\u30fc\u30eb (TC\xb1z,SC\xb1z,GC\xb1z)\n  \u5c11\u3057\u3060\u3051(T)\u3001\u305d\u3053\u305d\u3053(S)\u3001\u30ac\u30c3\u30c4\u30ea(G)\u63a1\u53d6\u63a1\u6398\u4f10\u63a1\u3092\u884c\u3044\u307e\u3059\u3002\n  z: z\u306b\u8ffd\u52a0\u3067\u30ed\u30fc\u30eb\u3059\u308b\u56de\u6570\u3092\u5165\u529b\u3002\u7701\u7565\u53ef\u80fd\u3002\n  \u4f8b) TC SC+1 GC-1\n"),s.$register_prefix("\\d+SQ[\\+\\-\\d]*","\\d+DR(C)?(\\+)?\\d+","[TSG]C","\\d+HR\\d*"),b(s,"$eval_game_system_specific_command",function($){var e,n,i,t=this;return u(e=u(n=u(i=t.$roll_sq($))?i:t.$damage_roll($))?n:t.$heal_roll($))?e:t.$collecting_roll($)}),s.$private(),b(s,"$roll_sq",function($){try{w("eval_return");var e,i=r,c=r,_=r,o=r,a=r,d=r,f=r,g=r,R=r,m=r;return i=/(\d+)SQ([+\-\d]+)?(([>=]+)(\d+))?/i.$match($),u(i)?(c=i["$[]"](1).$to_i(),_=v("ArithmeticEvaluator").$eval(i["$[]"](2)),o=(e=i["$[]"](5))===r||null==e?r:e.$to_i(),d=(a=this.randomizer.$roll_barabara(c,6)).$sort().$reverse().$take(2),f=z(d.$sum(),_),g=a.$count(1),R=D(d,[6,6])?v("Result").$critical(" \uff1e \u7d76\u5bfe\u6210\u529f\uff01"):D(d,[1,1])?v("Result").$fumble(" \uff1e \u7d76\u5bfe\u5931\u6557\uff01"):u(o)&&u(x(f,o))?v("Result").$success(" \uff1e \u6210\u529f"):u(o)&&u(B(f,o))?v("Result").$failure(" \uff1e \u5931\u6557"):v("Result").$new(),m=D(c,2)&&u(x(g,1))?" (\u3010FP\u3011"+g+"\u7372\u5f97)":"",["("+$+")","["+a.$join(",")+"]"+v("Format").$modifier(_),f+"["+d.$join(",")+"]"+R.$text()+m].$join(" \uff1e ")):r}catch(j){if(j===l.t_eval_return)return j.$v;throw j}}),b(s,"$damage_roll",function($){var t=this,e=r,n=r,i=r,c=r,_=r,o=r,a=r,d=r;return e=/(\d+)DR(C)?(\+)?(\d+)/i.$match($),u(e)?(n=e["$[]"](1).$to_i(),i=e["$[]"](2)["$nil?"]()["$!"](),c=e["$[]"](3)["$nil?"]()["$!"](),_=e["$[]"](4).$to_i(),a="("+$+") \uff1e ["+(o=t.randomizer.$roll_barabara(n,6)).$join(",")+"]"+_+" \uff1e "+t.$damage(o,_)+"\u30c0\u30e1\u30fc\u30b8",d=u(i)?1:2,u(x(q(o.$count(6),o.$count(1)),d))&&(a=z(a," \u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30d2\u30c3\u30c8\uff01\n"),a=z(a,t.$additional_damage_roll(c,_))),a):r}),b(s,"$additional_damage_roll",function($,t){var n,i=r;return"("+(n=u($)?8:4)+"DR"+t+") \uff1e ["+(i=this.randomizer.$roll_barabara(n,6)).$join(",")+"]"+t+" \uff1e "+this.$damage(i,t)+"\u30c0\u30e1\u30fc\u30b8"}),b(s,"$heal_roll",function($){var t,n=r,i=r,c=r,_=r,o=r;return n=/^(\d+)HR(\d+)?$/i.$match($),u(n)?(i=n["$[]"](1).$to_i(),c=u(_=(t=n["$[]"](2))===r||null==t?r:t.$to_i())?_:3,"("+$+") \uff1e ["+(o=this.randomizer.$roll_barabara(i,6)).$join(",")+"]"+c+" \uff1e "+this.$damage(o,c)+"\u56de\u5fa9"):r}),b(s,"$damage",function($,t){return H($,"count",[],function(n){return null==n&&(n=r),A(n,t)})}),b(s,"$collecting_roll",function($){try{w("eval_return");var n=r,i=r,c=r,_=r,o=r,a=r;return n=/([TSG])C([+\-\d]+)?/i.$match($),!u(n)||(i=n["$[]"](1),c=v("ArithmeticEvaluator").$eval(n["$[]"](2)),_=G("T",o=i)?3:G("S",o)?4:G("G",o)?5:r,a=z(q(_,2),c),u(k(a,0)))?r:H(v("Array"),"new",[a],function f(g){var S,R=null==f.$$s?this:f.$$s,m=r;return null==R.randomizer&&(R.randomizer=r),null==g&&(g=r),S=(m=R.randomizer.$roll_barabara(2,6)).$sum(),"("+$+") \uff1e "+S+"["+m.$join(",")+"]: "+R.$result_collecting(g,S,_)},{$$s:this}).$join("\n")}catch(f){if(f===l.t_eval_return)return f.$v;throw f}}),b(s,"$result_collecting",function($,t,e){return u(k(t,e))&&u(A(q(e,2),$))?"\uff01\u3042\u3042\u3063\u3068\uff01":u(k(q(e,2),$))?"\u6210\u529f\uff08\u8ffd\u52a0\u5206\uff09":"\u6210\u529f"})})}}]);