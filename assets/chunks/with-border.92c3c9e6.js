import{h as k,k as u,r as p,o as b,c as v,b as c,a as o,F as V,f as z,w as _,j as x,d as g,t as O,g as S}from"../app.5ad23346.js";const U=k({__name:"basic",setup(h){const d=u(!0),r=u(!1),i=u(!1),t=u(!1),n=u(!1),m=u(!1);return(a,l)=>{const s=p("el-checkbox");return b(),v(V,null,[c("div",null,[o(s,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),label:"Option 1",size:"large"},null,8,["modelValue"]),o(s,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value=e),label:"Option 2",size:"large"},null,8,["modelValue"])]),c("div",null,[o(s,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=e=>i.value=e),label:"Option 1"},null,8,["modelValue"]),o(s,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value=e),label:"Option 2"},null,8,["modelValue"])]),c("div",null,[o(s,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=e=>n.value=e),label:"Option 1",size:"small"},null,8,["modelValue"]),o(s,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),label:"Option 2",size:"small"},null,8,["modelValue"])]),c("div",null,[o(s,{modelValue:n.value,"onUpdate:modelValue":l[6]||(l[6]=e=>n.value=e),label:"Option 1",size:"small",disabled:""},null,8,["modelValue"]),o(s,{modelValue:m.value,"onUpdate:modelValue":l[7]||(l[7]=e=>m.value=e),label:"Option 2",size:"small",disabled:""},null,8,["modelValue"])])],64)}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const j={class:"demo-button-style"},y={class:"demo-button-style"},C={class:"demo-button-style"},$=k({__name:"button-style",setup(h){const d=u(["Shanghai"]),r=u(["Shanghai"]),i=u(["Shanghai"]),t=u(["Shanghai"]),n=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(m,a)=>{const l=p("el-checkbox-button"),s=p("el-checkbox-group");return b(),v(V,null,[c("div",null,[o(s,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),size:"large"},{default:_(()=>[(b(),v(V,null,x(n,e=>o(l,{key:e,label:e},{default:_(()=>[g(O(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),c("div",j,[o(s,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e)},{default:_(()=>[(b(),v(V,null,x(n,e=>o(l,{key:e,label:e},{default:_(()=>[g(O(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),c("div",y,[o(s,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),size:"small"},{default:_(()=>[(b(),v(V,null,x(n,e=>o(l,{key:e,label:e,disabled:e==="Beijing"},{default:_(()=>[g(O(e),1)]),_:2},1032,["label","disabled"])),64))]),_:1},8,["modelValue"])]),c("div",C,[o(s,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),size:"small",disabled:""},{default:_(()=>[(b(),v(V,null,x(n,e=>o(l,{key:e,label:e},{default:_(()=>[g(O(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])])],64)}}});var B=z($,[["__scopeId","data-v-be009f66"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const G=g("Disabled"),T=g("Not disabled"),M=k({__name:"disabled",setup(h){const d=u(!1),r=u(!0);return(i,t)=>{const n=p("el-checkbox");return b(),v(V,null,[o(n,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=m=>d.value=m),disabled:""},{default:_(()=>[G]),_:1},8,["modelValue"]),o(n,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=m=>r.value=m)},{default:_(()=>[T]),_:1},8,["modelValue"])],64)}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const P=k({__name:"grouping",setup(h){const d=u(["selected and disabled","Option A"]);return(r,i)=>{const t=p("el-checkbox"),n=p("el-checkbox-group");return b(),S(n,{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=m=>d.value=m)},{default:_(()=>[o(t,{label:"Option A"}),o(t,{label:"Option B"}),o(t,{label:"Option C"}),o(t,{label:"disabled",disabled:""}),o(t,{label:"selected and disabled",disabled:""})]),_:1},8,["modelValue"])}}});var K=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const A=g("Check all"),N=k({__name:"intermediate",setup(h){const d=u(!1),r=u(!0),i=u(["Shanghai","Beijing"]),t=["Shanghai","Beijing","Guangzhou","Shenzhen"],n=a=>{i.value=a?t:[],r.value=!1},m=a=>{const l=a.length;d.value=l===t.length,r.value=l>0&&l<t.length};return(a,l)=>{const s=p("el-checkbox"),e=p("el-checkbox-group");return b(),v(V,null,[o(s,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=f=>d.value=f),indeterminate:r.value,onChange:n},{default:_(()=>[A]),_:1},8,["modelValue","indeterminate"]),o(e,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=f=>i.value=f),onChange:m},{default:_(()=>[(b(),v(V,null,x(t,f=>o(s,{key:f,label:f},{default:_(()=>[g(O(f),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const w=k({__name:"limitation",setup(h){const d=u(["Shanghai","Beijing"]),r=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(i,t)=>{const n=p("el-checkbox"),m=p("el-checkbox-group");return b(),S(m,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),min:1,max:2},{default:_(()=>[(b(),v(V,null,x(r,a=>o(n,{key:a,label:a},{default:_(()=>[g(O(a),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const D={class:"mt-4"},F={class:"mt-4"},I={class:"mt-4"},L=k({__name:"with-border",setup(h){const d=u(!0),r=u(!1),i=u(!1),t=u(!0),n=u(["Option1"]);return(m,a)=>{const l=p("el-checkbox"),s=p("el-checkbox-group");return b(),v(V,null,[c("div",null,[o(l,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),label:"Option1",size:"large",border:""},null,8,["modelValue"]),o(l,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),label:"Option2",size:"large",border:""},null,8,["modelValue"])]),c("div",D,[o(l,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),label:"Option1",border:""},null,8,["modelValue"]),o(l,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),label:"Option2",border:""},null,8,["modelValue"])]),c("div",F,[o(s,{modelValue:n.value,"onUpdate:modelValue":a[4]||(a[4]=e=>n.value=e),size:"small"},{default:_(()=>[o(l,{label:"Option1",border:""}),o(l,{label:"Option2",border:""})]),_:1},8,["modelValue"])]),c("div",I,[o(s,{modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=e=>n.value=e),size:"small"},{default:_(()=>[o(l,{label:"Option1",border:"",disabled:""}),o(l,{label:"Option2",border:"",disabled:""})]),_:1},8,["modelValue"])])],64)}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{q as _,H as a,J as b,K as c,Q as d,R as e,W as f};
