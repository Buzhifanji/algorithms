import{d as i,h as e,T as m,i as u,b as d,j as p,k as c,l as v,r as n,m as f,n as g}from"./app.0e857c99.js";import{S as b}from"./SkipLink.ca05307a.js";var y=i({name:"FadeSlideY",setup(l,{slots:a}){const r=u(),s=r.resolve,t=r.pending;return()=>e(m,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:t},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=i({name:"Layout",setup(){const l=g(),a=d(),r=f(),s=p(),t=c(),o=v(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(n("CommonWrapper"),{},{default:()=>s.value.home?e(n("HomePage")):e(y,()=>e(n("NormalPage"),{key:r.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(n("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>e(n("BloggerInfo"))}:{}})]}});export{S as default};
