(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[6230],{3289:(ee,ne,j)=>{j(5151),Opal.queue(function(s){var I,J,Z,_,p,q,E,U,x,L=s.module,H=s.klass,b=s.const_set,P=s.send2,F=s.find_super,d=s.def,w=s.eqeqeq,v=s.send,y=s.rb_minus,c=s.truthy,u=s.rb_plus,C=s.rb_ge,T=s.range,W=s.rb_gt,k=s.eqeq,A=s.not,D=s.thrower,B=s.to_ary,G=s.neqeq,S=[],n=s.nil,M=s.$$$;return I=S,J=x=[L(S[0],"BCDice")].concat(I),E=[L(x[0],"GameSystem")].concat(J),U=s.$r(E),Z=E,p=[_=H(E[0],U("Base"),"LostRoyal")].concat(Z),q=s.$r(p),_.$$prototype.randomizer=n,b(p[0],"ID","LostRoyal"),b(p[0],"NAME","\u30ed\u30b9\u30c8\u30ed\u30a4\u30e4\u30eb"),b(p[0],"SORT_KEY","\u308d\u3059\u3068\u308d\u3044\u3084\u308b"),b(p[0],"HELP_MESSAGE","\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\n\n\u884c\u70ba\u5224\u5b9a\n\u3000LR[x,x,x,x,x,x]\n\u3000\u3000x \u306e\u4e26\u3073\u306b\u306f\u3010\u5224\u5b9a\u8868\u3011\u306e\u6570\u5024\u3092\u9806\u756a\u306b\u5165\u529b\u3059\u308b\u3002\n\u3000\u3000\uff08\u4f8b\uff1a LR[1,3,0,1,2,3] \uff09\n\n\u30d5\u30a1\u30f3\u30d6\u30eb\u8868\n\u3000FC\n\n\u98a8\u529b\u6c7a\u5b9a\u8868\n\u3000WPC\n\n\u611f\u60c5\u6c7a\u5b9a\u8868\n\u3000EC\n\n\u5e0c\u671b\u70b9\u306e\u6c7a\u5b9a\n\u3000HRx\n\u3000\u3000x \u306b\u306f\u30c0\u30a4\u30b9\u306e\u6570\uff08 1 - 2 \uff09\u3092\u6307\u5b9a\n"),_.$register_prefix("LR\\[[0-5],[0-5],[0-5],[0-5],[0-5],[0-5]\\]","FC","WPC","EC","HR[1-2]"),d(_,"$initialize",function f(t){var e=this;return f.$$p=null,P(e,F(e,"initialize",f,!1,!0),"initialize",[t],null),e.sort_add_dice=!0,e.d66_sort_type=M(q("D66SortType"),"NO_SORT")}),d(_,"$eval_game_system_specific_command",function(t){var e,i=this;return w(/LR\[([0-5]),([0-5]),([0-5]),([0-5]),([0-5]),([0-5])\]/i,e=t)?i.$check_lostroyal([q("Regexp").$last_match(1).$to_i(),q("Regexp").$last_match(2).$to_i(),q("Regexp").$last_match(3).$to_i(),q("Regexp").$last_match(4).$to_i(),q("Regexp").$last_match(5).$to_i(),q("Regexp").$last_match(6).$to_i()]):w(/FC/,e)?i.$roll_fumble_chart():w(/WPC/,e)?i.$roll_wind_power_chart():w(/EC/,e)?i.$roll_emotion_chart():w(/HR([1-2])/,e)?i.$roll_hope(q("Regexp").$last_match(1).$to_i()):n}),d(_,"$check_lostroyal",function(t){var r,i=this,e=n,$=n,o=n,l=n,m=n;return e=[],v(3,"times",[],function a(h){var R,g=null==a.$$s?this:a.$$s;return null==g.randomizer&&(g.randomizer=n),null==h&&(h=n),R=g.randomizer.$roll_once(6),e["$<<"](R)},{$$s:i}),r=($=v(e,"map",[],function(h){return null==h&&(h=n),t["$[]"](y(h,1))}).$to_a()).$inject("+"),o=i.$find_sequence(e),l="3D6 => ["+e.$join(",")+"] => ("+$.$join("+")+") => "+r,c(o["$nil?"]())||c(o["$empty?"]())||(m=c(i["$fumble_?"](e,o))?3:o.$size(),l=u(l," | "+o.$size()+" chain! ("+o.$join(",")+") => "+u(r,m)),c(C(o.$size(),3))&&(l=u(l," [\u30b9\u30da\u30b7\u30e3\u30eb]")),c(i["$fumble_?"](e,o))&&(l=u(l," [\u30d5\u30a1\u30f3\u30d6\u30eb]"))),l}),d(_,"$find_sequence",function(t){var e;return t=t.$sort(),e=v(T(1,6,!0),"map",[],function $(r){return null==r&&(r=n),(null==$.$$s?this:$.$$s).$find_sequence_from_start_key(t,r)},{$$s:this}),v(v(e,"select",[],function(r){return null==r&&(r=n),W(r.$size(),1)}),"max",[],function(r,o){return null==r&&(r=n),null==o&&(o=n),r.$size()["$<=>"](o.$size())})}),d(_,"$find_sequence_from_start_key",function(t,i){var e=n,$=n;for(e=[],$=i;c(t["$include?"]($));)e["$<<"]($),$=u($,1);if(A(e["$empty?"]())&&k(e["$[]"](0),1))for($=6;c(t["$include?"]($));)e.$unshift($),$=y($,1);return e}),d(_,"$fumble_?",function(t,i){try{var e=D("return");return v(i,"each",[],function(r){if(null==r&&(r=n),!c(C(t.$count(r),2)))return n;e.$throw(!0)},{$$ret:e}),!1}catch($){if($===e)return $.$v;throw $}}),d(_,"$roll_fumble_chart",function(){var i;return"1D6 => ["+(i=this.randomizer.$roll_once(6))+"] "+["\u4f55\u304b\u306e\u554f\u984c\u3067\u8a00\u3044\u4e89\u3044\u3001\u4e3b\u541b\u306b\u7121\u793c\u3092\u50cd\u3044\u3066\u3057\u307e\u3046\u3002\u3042\u306a\u305f\u306f\u4e3b\u541b\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u5931\u3046\u304b\u3001\u3010\u6642\u9593\u3011\u3092\uff11\u70b9\u6d88\u8cbb\u3057\u3066\u548c\u89e3\u306e\u8a71\u3057\u5408\u3044\u3092\u6301\u3064\u304b\u9078\u3079\u308b\u3002","\u898b\u904e\u3054\u305b\u3070\u4eba\u3005\u3092\u4e0d\u5e78\u306b\u3059\u308b\u5371\u967a\u306b\u906d\u9047\u3059\u308b\u3002\u3042\u306a\u305f\u306f\u9003\u3052\u51fa\u3057\u3066\u5192\u967a\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u5931\u3046\u304b\u3001\u3053\u308c\u306b\u7acb\u3061\u5411\u304b\u3044\u3010\u547d\u6570\u3011\u3092\uff12\u70b9\u6e1b\u3089\u3059\u304b\u3092\u9078\u3079\u308b\u3002","\u3042\u306a\u305f\u304c\u60f9\u304b\u308c\u305f\u306e\u306f\u597d\u610f\u306b\u4ed8\u3051\u8fbc\u3080\u4eba\u3060\u3063\u305f\u3002\u3042\u306a\u305f\u306f\u305d\u306e\u5834\u3092\u53bb\u3063\u3066\u604b\u6155\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u5931\u3046\u304b\u3010\u6b63\u7fa9\u3011\u3092\uff11\u70b9\u6e1b\u3089\u3057\u3066\u793c\u3092\u5c3d\u304f\u3059\u304b\u3092\u9078\u3079\u308b\u3002","\u91d1\u92ad\u7684\u306a\u554f\u984c\u3067\u3001\u751f\u547d\u3068\u9b42\u306e\u82e6\u3057\u307f\u3092\u80cc\u8ca0\u3046\u4eba\u306b\u51fa\u4f1a\u3046\u3002\u3042\u306a\u305f\u306f\u5e87\u8b77\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u5931\u3046\u304b\u51fa\u8cbb\u3092\uff13\u70b9\u5897\u3084\u3059\u304b\u3092\u9078\u3079\u308b\u3002","\u8972\u6483\u3092\u53d7\u3051\u308b\u3002\u82e6\u3082\u306a\u304f\u53e9\u304d\u4f0f\u305b\u308b\u3068\u3001\u5351\u5c48\u306a\u614b\u5ea6\u3067\u547d\u4e5e\u3044\u3092\u3057\u3066\u304d\u305f\u3002\u5bb9\u8d66\u306a\u304f\u547d\u3092\u596a\u3044\u5bdb\u5bb9\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u5931\u3046\u304b\u3001\u5bc6\u544a\u306b\u3088\u3063\u3066\u3010\u8840\u8def\u3011\u304c\uff11\uff24\uff16\u70b9\u5897\u3048\u308b\u304b\u3092\u9078\u3076\u3053\u3068\u304c\u3067\u304d\u308b\u3002","\u98a8\u805e\u306b\u3088\u308a\u3001\u53cb\u304c\u60aa\u306b\u8eab\u3092\u8cb6\u3081\u305f\u3068\u77e5\u308b\u3002\u5171\u306b\u4e26\u3093\u3060\u6226\u5834\u304c\u8272\u892a\u305b\u308b\u60f3\u3044\u3060\u3002\u6226\u53cb\u306e\u540d\u8a89\u70b9\u3092\uff11\u70b9\u6e1b\u3089\u3059\u304b\u3001\u3010\u9152\u3068\u6b4c\u3011\u3059\u3079\u3066\u3092\u5931\u3046\u304b\u3092\u9078\u3079\u308b\u3002"]["$[]"](y(i,1))}),d(_,"$roll_wind_power_chart",function(){try{var t=D("return"),e=n,$=n,r=n;return e=0,$=0,r="",v(this,"loop",[],function o(){var l,m,h,g,a=null==o.$$s?this:o.$$s,z=n;if(null==a.randomizer&&(a.randomizer=n),h=a.randomizer.$roll_once(6),e=u(e,h),m=[[!0,0,"\u307b\u307c\u51ea\uff08\u632f\u308a\u8db3\u3057\uff09"],[!0,0,"\u5f31\u3044\u98a8\uff08\u632f\u308a\u8db3\u3057\uff09"],[!1,0,"\u3086\u308b\u3084\u304b\u306a\u98a8"],[!1,0,"\u3086\u308b\u3084\u304b\u306a\u98a8"],[!1,1,"\u3084\u3084\u5f37\u3044\u98a8\uff08\u5100\u5f0f\u70b9\u30d7\u30e9\u30b9\uff11\uff09"],[!1,2,"\u5f37\u3044\u98a8\uff08\u9f8d\u3092\u5e7b\u8996\u3001\u5100\u5f0f\u70b9\u30d7\u30e9\u30b9\uff12\uff09"],[!1,3,"\u4f53\u304c\u63fa\u3089\u3050\u307b\u3069\u306e\u98a8\uff08\u9f8d\u3092\u5e7b\u8996\u3001\u5100\u5f0f\u70b9\u30d7\u30e9\u30b9\uff13\uff09"]]["$[]"](y([e,7].$min(),1)),g=null==(l=B(m))[0]?n:l[0],z=null==l[2]?n:l[2],$=u($,null==l[1]?n:l[1]),z=G(e,h)?"1D6["+h+"]+"+y(e,h)+" "+z:"1D6["+h+"] "+z,r=c(r["$empty?"]())?z:r+" => "+z,c(g))return n;r=u(r," [\u5408\u8a08\uff1a\u5100\u5f0f\u70b9 +"+$+" ]"),t.$throw(r)},{$$s:this,$$ret:t})}catch(o){if(o===t)return o.$v;throw o}}),d(_,"$roll_emotion_chart",function(){var i;return"1D6 => ["+(i=this.randomizer.$roll_once(6))+"] "+["\u611b\u60c5\uff0f\u6bba\u610f","\u53cb\u60c5\uff0f\u8ca0\u76ee","\u5d07\u62dd\uff0f\u5acc\u60aa","\u8208\u5473\uff0f\u4fae\u8511","\u4fe1\u983c\uff0f\u5ac9\u59ac","\u5b88\u8b77\uff0f\u6b32\u60c5"]["$[]"](y(i,1))}),d(_,"$roll_hope",function(t){try{var i=D("return"),$=n,r=n;return $=0,r="",v(this,"loop",[],function o(){var m,l=null==o.$$s?this:o.$$s,a=n;if(null==l.randomizer&&(l.randomizer=n),m=l.randomizer.$roll_once(6),a=0,c(C(t,2))&&(a=l.randomizer.$roll_once(6)),$=u($,u(m,a)),r=k(t,2)?u(r,"2D6["+m+","+a+"]"):u(r,"1D6["+m+"]"),c(l.$is_1or2(m))||c(l.$is_1or2(a)))return r=u(r," \uff08\u632f\u308a\u8db3\u3057\uff09 => ");r=u(r," => \u5408\u8a08 "+$),i.$throw(r)},{$$s:this,$$ret:i})}catch(o){if(o===i)return o.$v;throw o}}),d(_,"$is_1or2",function(t){return[1,2]["$include?"](t)})})}}]);