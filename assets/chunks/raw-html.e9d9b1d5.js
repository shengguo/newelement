import{h as c,r,o as u,c as f,a as _,w as t,F as g,d as o,ar as e,Z as b,g as d}from"../app.5ad23346.js";const T=o(" Closes automatically "),y=o(" Won't close automatically "),C=c({__name:"basic",setup(p){const s=()=>{e({title:"Title",message:b("i",{style:"color: teal"},"This is a reminder")})},i=()=>{e({title:"Prompt",message:"This is a message that does not automatically close",duration:0})};return(l,n)=>{const m=r("el-button");return u(),f(g,null,[_(m,{plain:"",onClick:s},{default:t(()=>[T]),_:1}),_(m,{plain:"",onClick:i},{default:t(()=>[y]),_:1})],64)}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const S=o(" Success "),k=o(" Warning "),$=o(" Info "),v=o(" Error "),j=c({__name:"different-types",setup(p){const s=()=>{e({title:"Success",message:"This is a success message",type:"success"})},i=()=>{e({title:"Warning",message:"This is a warning message",type:"warning"})},l=()=>{e({title:"Info",message:"This is an info message",type:"info"})},n=()=>{e({title:"Error",message:"This is an error message",type:"error"})};return(m,h)=>{const a=r("el-button");return u(),f(g,null,[_(a,{plain:"",onClick:s},{default:t(()=>[S]),_:1}),_(a,{plain:"",onClick:i},{default:t(()=>[k]),_:1}),_(a,{plain:"",onClick:l},{default:t(()=>[$]),_:1}),_(a,{plain:"",onClick:n},{default:t(()=>[v]),_:1})],64)}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O=o(" Hide close button "),P=c({__name:"no-close",setup(p){const s=()=>{e.success({title:"Info",message:"This is a message without close button",showClose:!1})};return(i,l)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:t(()=>[O]),_:1})}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const M=o(" Notification with offset "),x=c({__name:"offsetting",setup(p){const s=()=>{e.success({title:"Success",message:"This is a success message",offset:100})};return(i,l)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:t(()=>[M]),_:1})}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const w=o(" Top Right "),I=o(" Bottom Right "),z=o(" Bottom Left "),L=o(" Top Left "),B=c({__name:"positioning",setup(p){const s=()=>{e({title:"Custom Position",message:"I'm at the top right corner"})},i=()=>{e({title:"Custom Position",message:"I'm at the bottom right corner",position:"bottom-right"})},l=()=>{e({title:"Custom Position",message:"I'm at the bottom left corner",position:"bottom-left"})},n=()=>{e({title:"Custom Position",message:"I'm at the top left corner",position:"top-left"})};return(m,h)=>{const a=r("el-button");return u(),f(g,null,[_(a,{plain:"",onClick:s},{default:t(()=>[w]),_:1}),_(a,{plain:"",onClick:i},{default:t(()=>[I]),_:1}),_(a,{plain:"",onClick:l},{default:t(()=>[z]),_:1}),_(a,{plain:"",onClick:n},{default:t(()=>[L]),_:1})],64)}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const H=o(" Use HTML String "),E=c({__name:"raw-html",setup(p){const s=()=>{e({title:"HTML String",dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})};return(i,l)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:t(()=>[H]),_:1})}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{W as _,F as a,R as b,U as c,V as d,Z as e};
