(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[3732],{8631:(H,I,C)=>{C(5151),Opal.queue(function(r){var E,R,B,u,$,D,a,x,h,f=r.module,g=r.klass,_=r.const_set,q=r.eqeqeq,d=r.def,v=r.not,o=r.eqeq,b=r.truthy,W=r.rb_le,k=r.rb_plus,m=[],s=r.nil;return E=m,R=h=[f(m[0],"BCDice")].concat(E),a=[f(h[0],"GameSystem")].concat(R),x=r.$r(a),B=a,$=[u=g(a[0],x("Base"),"CrashWorld")].concat(B),D=r.$r($),u.$$prototype.randomizer=s,_($[0],"ID","CrashWorld"),_($[0],"NAME","\u589c\u843d\u4e16\u754c"),_($[0],"SORT_KEY","\u3064\u3044\u3089\u304f\u305b\u304b\u3044"),_($[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a CWn\n\u521d\u671f\u76ee\u6a19\u5024n (\u5fc5\u9808)\n\u4f8b\u30fbCW8\n"),u.$register_prefix("CW"),d(u,"$eval_game_system_specific_command",function(i){var e=s;return e=s,q(/CW(\d+)/i,i)&&(e=this.$getCrashWorldRoll(D("Regexp").$last_match(1).$to_i())),e}),d(u,"$getCrashWorldRoll",function(i){var e=s,t=s,l=s,n=s;for(this.$debug("target",i),e="(",t=!1,l=0,n=0;v(t);)n=this.randomizer.$roll_once(12),e=o(e,"(")?"("+n:e+", "+n,b(W(n,i))||o(n,11)?(i=n,l=k(l,1)):(o(n,12),t=!0);return o(n,12)&&(l=0),e=e+")  \u6210\u529f\u5ea6 : "+l,o(n,12)&&(e+=" \u30d5\u30a1\u30f3\u30d6\u30eb"),e})})}}]);