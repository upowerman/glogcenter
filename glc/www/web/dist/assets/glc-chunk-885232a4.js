var u=(n,c,t)=>new Promise((_,r)=>{var s=e=>{try{a(t.next(e))}catch(i){r(i)}},o=e=>{try{a(t.throw(e))}catch(i){r(i)}},a=e=>e.done?_(e.value):Promise.resolve(e.value).then(s,o);a((t=t.apply(n,c)).next())});import{r as f,o as l,c as p,F as h,a as g,b as d,d as y,e as m,t as x,u as v,f as w,_ as k,g as b}from"./glc-entry-c39e8b6b.js";const N={style:{display:"flex","flex-wrap":"wrap"}},z=["onClick"],B={style:{display:"flex","align-items":"center","justify-content":"center",width:"90px",height:"90px",cursor:"pointer"}},$={style:{"text-align":"center"}},L=d("br",null,null,-1),S={__name:"SvgIconList",props:{copyName:{type:Boolean,default:!0}},emits:["select"],setup(n,{emit:c}){const t=n,_=f(["account","add","apply","approve","arrow-left","close-bold","close","cloud-download","contract","dept","detail","dict","download","dragable","edit-password","exit","home","item","log","maximize","menu","message","minimize","new","normalize","minus","refresh-left","refresh-right","reload","role","save","scan","search","select","setting","side-menu","sort","success-filled","to-all","to-left","to-other","send","flow-manage","flow","task-manage","task","finish","to-right","upload","user","users","zoom"]),r=s=>u(this,null,function*(){var o;c("select",s),t.copyName&&((o=navigator.clipboard)==null||o.writeText(s).then(()=>{w.info(`已复制图标名称：${s}`)}))});return(s,o)=>{const a=k;return l(),p("div",N,[(l(!0),p(h,null,g(v(_),e=>(l(),p("div",{key:e,class:"c-svgicon-item",style:{width:"90px",height:"90px"},onClick:i=>r(e)},[d("div",B,[d("div",$,[y(a,{name:e,size:"24"},null,8,["name"]),m(),L,m(),d("span",null,x(e),1)])])],8,z))),128))])}}},D={__name:"Dashboard",setup(n){return(c,t)=>(l(),b(S))}};export{D as default};