import"./index-e4062cb7.js";function o(o){const l=new Date-o,a=Math.floor(l/1e3),r=Math.floor(a/60),t=Math.floor(r/60),e=Math.floor(t/24),n=Math.floor(e/30);return a<60?`${a}秒前`:r<60?`${r}分钟前`:t<24?`${t}小时前`:e<30?`${e}天前`:n<3?`${n}个月前`:null}const l=o=>o.map((o=>({...o,picurl:o.smallPicurl.replace("_small.webp",".jpg")})));export{o as f,l as s};
