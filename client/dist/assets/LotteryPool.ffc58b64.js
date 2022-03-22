import{r as o,j as a,a as t,L as c}from"./vendor.7f4d1569.js";import{C as u,L as m}from"./index.0bd86941.js";function N(){const[i,x]=o.exports.useState(0),{lotteriesDetails:r,initLotteryPool:p,startLottery:h,isLoading:n,provider:d}=o.exports.useContext(u);o.exports.useEffect(()=>{p(),d&&d.getBlock().then(e=>{x(()=>+e.timestamp)})},[i]);const f=()=>{const e=prompt("lottery end time in minutes?");h(+e)},s=e=>Math.floor((e-i)/60);return a("div",{className:"flex-1 bg-slate-900 space-y-8 text-slate-200 p-4",children:t("div",{className:"container mx-auto max-w-8xl p-4",children:[a("button",{className:"border border-teal-400 p-2 rounded-lg text-teal-400 my-4 hover:shadow-lg hover:shadow-teal-900",onClick:f,children:"create lottery"}),a("h2",{className:"text-4xl font-thin py-2 text-teal-400 tracking-wide",children:"Available Lotteries"}),t("div",{className:"flex flex-row gap-4 flex-wrap",children:[n&&a(m,{full:!0}),r.length>0&&!n&&r.map((e,l)=>{if(!(l>5)&&+s(e.endedTimeStamp)>0)return t(c,{to:`/lottery/${e.lotteryContract}`,className:"p-4 w-xs border border-indigo-400 rounded-xl bg-slate-800 transition duration-300 hover:shadow-lg hover:shadow-indigo-900",children:[t("h2",{className:"text-indigo-500 font-bold text-2xl tracking-wider",children:["lottery #",l+1]}),t("span",{children:["Ending in"," ",t("span",{className:"text-teal-600 font-semibold",children:[s(e.endedTimeStamp)," mins"]})]}),t("p",{className:"truncate",children:["address:"," ",a("span",{className:"text-xs text-teal-500",children:e.lotteryContract})]})]},e.lotteryContract)}),!(r.length>0||n)&&a("p",{children:"No Lottery Available"})]}),a("h2",{className:"text-4xl font-thin py-2 text-teal-400 tracking-wide mt-4",children:"Ended Lotteries"}),t("div",{className:"flex flex-row gap-4 flex-wrap",children:[n&&a(m,{full:!0}),r.length>0&&!n&&r.map((e,l)=>{if(!(l>5)&&+s(e.endedTimeStamp)<0)return t(c,{to:`/lottery/${e.lotteryContract}`,className:"p-4 w-xs opacity-50 transform  blur-[0.5px] border border-red-600 rounded-xl bg-slate-800",children:[t("h2",{className:"text-red-500 font-bold text-2xl tracking-wider",children:["lottery #",l+1]}),t("span",{children:["Ending in"," ",t("span",{className:"text-red-600 font-semibold",children:[s(e.endedTimeStamp)," mins"]})]}),t("p",{className:"truncate",children:["address:"," ",a("span",{className:"text-xs text-teal-500",children:e.lotteryContract})]})]},e.lotteryContract)})]}),!(r.length>0||n)&&a("p",{children:"No Lottery Available"})]})})}export{N as default};