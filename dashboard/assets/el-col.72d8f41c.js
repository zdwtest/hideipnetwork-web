import{h as b,d as p,i as _,j as n,k,o as h,l as w,w as $,m as v,n as j,u as c,q as N,s as C,v as x,x as E,y as u,z as r,A as O,B as g,C as S}from"./index.f8d8420e.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],P=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:B}}),A=p({name:"ElRow"}),L=p({...A,props:P,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);k(R,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=n(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,!!t.align)]);return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var q=x(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const H=E(q),D=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),I=p({name:"ElCol"}),J=p({...I,props:D,setup(f){const t=f,{gutter:l}=O(R,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];g(o)&&(s==="span"?e.push(a.b(`${t[s]}`)):o>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var T=x(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const M=E(T);export{M as E,H as a};
