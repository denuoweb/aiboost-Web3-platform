var S=Object.defineProperty,A=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var N=(s,a,r)=>a in s?S(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,w=(s,a)=>{for(var r in a||(a={}))W.call(a,r)&&N(s,r,a[r]);if(b)for(var r of b(a))z.call(a,r)&&N(s,r,a[r]);return s},v=(s,a)=>A(s,R(a));import{r as l,a as t,m as o,j as e,F as h}from"./vendor.9d61ef2e.js";import{N as _}from"./Notification.4ef9342e.js";import{C as $,s as H}from"./index.86ce83b0.js";import{A as g}from"./index.esm.93ba3bbd.js";function B(){const{initLottery:s,lotteryManager:a,lotteryEntryFee:r,lotteryPlayers:d,winner:y,lotteryPrice:f,isLoading:c,startLottery:k,lotteryStatus:n,enterLottery:j,lotteryTimeRemaining:O,endLottery:E,isEther:F,currentAccount:i}=l.exports.useContext($),[L,C]=l.exports.useState({lotteryManager:null,lotteryEntryFee:0,lotteryPlayers:[],lotteryWinner:null,lotteryPrice:0}),[T,M]=l.exports.useState(!1),p=l.exports.useRef();l.exports.useEffect(()=>{i===a.toLowerCase()&&(i||a.toLowerCase()!==null)&&M(!0)});let x="";y!=="0x0000000000000000000000000000000000000000"&&(x=y),console.log("\u{1F480}",c,n),console.log("Status",n),l.exports.useEffect(()=>{async function m(){await s(),C(()=>v(w({},L),{lotteryManager:a,lotteryEntryFee:r,lotteryPlayers:d,lotteryPrice:f}))}m()},[]);const u={hidden:{opacity:0,y:300},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:75,delay:.1}}};return t("div",{className:"flex-1 bg-slate-900 space-y-8 text-slate-200 p-4",children:[t(o.div,{className:"container bg-neutral-900 mx-auto shadow-lg border border-slate-700 my-4 rounded-lg max-w-lg p-4",variants:u,initial:"hidden",animate:"visible",children:[t("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:["Lottery Game"," ",n=="1"&&e("span",{className:"text-xs p-2 bg-slate-600 shadow-md shadow-slate-800 rounded-full text-teal-200 antialiased font-bold",children:"Started"}),n=="2"&&e("span",{className:"text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-rose-600 antialiased font-bold",children:"Ended"})]}),t("div",{className:"pt-5",children:[t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Total Players :"," ",e("span",{className:"text-teal-400 text-lg",children:d.length})]}),t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Manager : ","",e("span",{className:"text-teal-400",children:e("a",{href:`https://ropsten.etherscan.io/address/${a}`,target:"_blank",rel:"noreferrer",className:"text-sm tracking-wide uppercase text-teal-400",children:a})})]}),t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Entry Fee :"," ",e("span",{className:" text-teal-400 text-md",children:+r/10**18})," ","ETH"]}),t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Winning Price :"," ",e("span",{className:"text-teal-400 text-md",children:f})," ETH"]})]})]}),i?e(o.div,{className:"container mx-auto bg-zinc-900 shadow-lg border border-slate-700 p-5 my-4 rounded-lg max-w-lg",variants:u,initial:"hidden",animate:"visible",children:c?e("div",{className:"bg-zinc-900 flex-1 items-center py-4 flex justify-center",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})}):e("div",{className:"container mx-auto",children:T?e(h,{children:e("form",{action:"",children:t("div",{className:"flex justify-center space-x-9",children:[t("h6",{className:"text-xs pt-3 text-teal-500 antialiased tracking-widest uppercase font-semibold",children:[" ",e(g,{className:"inline"})," You are the Lottery Manager"]}),n!="1"?t(h,{children:[e("input",{ref:p,placeholder:"Enter Time in Minutes",name:"lottery timer",type:"number",min:"1",pattern:"[0-9]",step:"0.0001",className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),e("button",{type:"button",className:"px-7 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-600",onClick:()=>{c&&Loader,console.log("\u{1F192}\u{1F525}\u{1F49A}",+p.current.value),k(+p.current.value)},children:"Start"})]}):e("button",{type:"button",className:"px-7 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600",onClick:()=>{E()},children:"End Now"})]})})}):e(h,{children:n=="1"?t("div",{className:"tracking-wider text-slate-200 justify-evenly",children:[t("h6",{className:"text-xs text-red-500 antialiased tracking-widest uppercase font-semibold",children:[" ",e(g,{className:"inline"})," Only Use Ropsten Test Network"]}),t("h1",{className:"pt-4 text-sm text-slate-400 text-justify",children:[" ","The lottery Manager can start the lottery and it will end after the remaining time has passed."]}),e("div",{className:"pt-5 flex justify-center",children:e("button",{type:"button",className:"px-7 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600",disabled:c,onClick:()=>{j()},children:"Enter"})})]}):t("div",{className:"tracking-wider text-slate-200 justify-evenly",children:[t("h6",{className:"text-xs text-red-500 antialiased tracking-widest uppercase font-semibold",children:[" ",e(g,{className:"inline"})," Only Use Ropsten Test Network"]}),t("h1",{className:"pt-4 text-sm text-slate-400 text-justify",children:[" ","The lottery Manager will start the lottery soon don't forget to participate to win the prize money."]})]})})})}):e(o.div,{className:"container mx-auto bg-neutral-900 shadow-lg border border-slate-700 p-5 my-4 rounded-lg max-w-lg",variants:u,initial:"hidden",animate:"visible",children:e("div",{className:"flex flex-row gap-2 antialiased tracking-wider text-slate-200 justify-evenly",children:"\u26A0\uFE0F Connect your wallet to participate in the lottery"})}),i&&t(h,{children:[d.length>1?t(o.div,{className:"container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:2.1},children:[e("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:"Players"}),d.map((m,P)=>e("p",{className:"pt-3 text-teal-400",children:e("a",{href:`https://ropsten.etherscan.io/address/${m}`,target:"_blank",rel:"noreferrer",className:"tracking-wide uppercase text-teal-400 hover:cursor-pointer",children:H(m)})},P))]}):"",n=="2"?t(o.div,{className:"container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:2.1},children:[e("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:"Winner"}),e("p",{className:"pt-3 text-teal-400 hover:cursor-pointer",children:e("a",{href:`https://ropsten.etherscan.io/address/${x}`,target:"_blank",rel:"noreferrer",className:"tracking-wide uppercase text-teal-400 hover:cursor-pointer",children:x})})]}):" "]}),e(_,{props:{id:"Lottery",isEther:F,account:i}})]})}export{B as default};
