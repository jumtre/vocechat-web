"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[286],{66286:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(70537),n=s(27418),r=s(14566),i=s(80308),c=s(15312),l=s(65809),o=s(66160),d=s(51285),m=s(4472),g=s(99487),u=s(44992),h=s(15924),p=s(80683);function x(){const e=(0,h.s0)();return(0,p.jsx)(m.Z,{className:"w-full",onClick:()=>{e("/send_magic_link")},children:"Sign in with Magic Link"})}function f(){const{t:e}=(0,r.$G)("auth"),a=(0,h.s0)();return(0,p.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,p.jsx)("span",{children:e("login.no_account")}),(0,p.jsx)("a",{className:"text-primary-400 cursor-pointer",onClick:()=>{a("/register")},children:e("sign_up")})]})}var w=s(67093);function k(){const e=(0,o.CG)((e=>e.server.name)),{t:a}=(0,r.$G)("auth"),{t:s}=(0,r.$G)(),{data:h,isLoading:k}=(0,l.n8)(),[j,{isSuccess:b,isLoading:_,error:y}]=(0,c.YA)(),{clientId:v}=(0,u.Z)(),{data:N,isSuccess:Z}=(0,l.ww)(),[S,P]=(0,t.useState)({email:"",password:""});(0,t.useEffect)((()=>{const e=new URLSearchParams(location.search),a=e.get("code"),s=e.get("state"),t=e.get("magic_token"),n=e.get("exists");if(a&&s&&j({code:a,state:s,type:"oidc"}),t&&"undefined"!==typeof n){"true"==n?j({magic_token:t,type:"magiclink"}):location.href=`/#/register/set_name/login?magic_token=${t}`}}),[]),(0,t.useEffect)((()=>{if(y)switch(y.status){case 401:case 404:n.ZP.error("Username or Password incorrect");break;case 410:n.ZP.error("No associated account found, please contact user admin for an invitation link to join.");break;case"PARSING_ERROR":break;default:n.ZP.error("Something Error")}else;}),[y]),(0,t.useEffect)((()=>{b&&n.ZP.success(s("tip.login"))}),[b]);const C=e=>{const{type:a}=e.target.dataset,{value:s}=e.target;a&&P((e=>(e[a]=s,{...e})))},{email:E,password:R}=S;if(!Z)return null;const{magic_link:G,github:$,google:L,metamask:O,oidc:q=[],who_can_sign_up:A}=N,I=h&&G,T=I||L&&v||O||q.length>0||$;return k?null:(0,p.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,p.jsxs)("div",{className:"py-8 px-10 shadow-md rounded-xl",children:[(0,p.jsxs)("div",{className:"flex-center flex-col pb-6",children:[(0,p.jsx)("img",{src:`${i.ZP}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 mb-3 md:mb-7 rounded-full"}),(0,p.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-white md:mb-2",children:a("login.title",{name:e})})]}),(0,p.jsxs)("form",{className:"flex flex-col gap-5 w-80 md:min-w-[360px] ",onSubmit:e=>{e.preventDefault(),j({...S,type:"password"})},children:[(0,p.jsx)(g.Z,{className:"large",name:"email",value:E,type:"email",required:!0,placeholder:a("placeholder_email"),"data-type":"email",onChange:C}),(0,p.jsx)(g.Z,{className:"large",type:"password",value:R,name:"password",required:!0,"data-type":"password",onChange:C,placeholder:a("placeholder_pwd")}),(0,p.jsx)(m.Z,{type:"submit",disabled:_,children:_?"Signing":a("sign_in")})]}),T&&(0,p.jsx)(d.Z,{content:"OR"}),(0,p.jsxs)("div",{className:"flex flex-col gap-3",children:[I&&(0,p.jsx)(x,{}),(0,p.jsx)(w.Z,{})]}),"EveryOne"===A&&(0,p.jsx)(f,{})]})})}}}]);