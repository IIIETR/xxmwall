import{b as a,y as s,s as l,o as e,c as t,w as u,i,a as o,q as n,d,e as r,F as c,g as p,l as m,h as v}from"./index-dc8e290b.js";import{_ as g}from"./uni-load-more.3ba7b3ce.js";import{g as _,h as f,i as y,j as h,o as x,a as b,r as j}from"./apis.017cc933.js";import{_ as w}from"./plugin-vueexport-helper.1b428a4d.js";const z=w({__name:"classlist",setup(w){const z=a([]),k=a(!1),L={pageNum:1,pageSize:15},F=a("");_((a=>{let{id:l=null,name:e=null,type:t=null}=a;t&&(L.type=t),l&&(L.classid=l),F.value=e,L.classid=l,s({title:e}),N()})),f((()=>{k.value||(L.pageNum++,N())}));const N=async()=>{let a;L.classid&&(a=await y(L)),L.type&&(a=await h(L)),z.value=[...z.value,...a.data],L.pageSize>a.data.length&&(k.value=!0),l("storageClassList",z.value)};return x((a=>({title:"xxmbz-"+F.value,path:"/pages/classlist/classlist?id="+L.classid+"&name="+F.value}))),b((()=>({title:"xxmbz-"+F.value,path:"id="+L.classid+"&name="+F.value}))),(a,s)=>{const l=j(p("uni-load-more"),g),_=i,f=m,y=v;return e(),t(_,{class:"calsslist"},{default:u((()=>[z.value.length||k.value?n("",!0):(e(),t(_,{key:0,class:"loadingLayout"},{default:u((()=>[o(l,{status:"loading"})])),_:1})),o(_,{class:"content"},{default:u((()=>[(e(!0),d(c,null,r(z.value,(a=>(e(),t(y,{url:"/pages/preview/preview?id="+a._id,class:"item",key:a._id},{default:u((()=>[o(f,{src:a.smallPicurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["url"])))),128))])),_:1}),z.value.length||k.value?(e(),t(_,{key:1,class:"loadingLayout"},{default:u((()=>[o(l,{status:k.value?"noMore":"loading"},null,8,["status"])])),_:1})):n("",!0),o(_,{class:"safe-area-inset-botom"})])),_:1})}}},[["__scopeId","data-v-f2075b68"]]);export{z as default};
