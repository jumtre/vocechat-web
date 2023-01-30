"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[377],{11089:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(70537),l=n(27418),o=n(14566),s=n(52334),a=n(66160),r=n(24563),d=n(15621),c=n(80683);const p=e=>{var t,n;let{id:p,type:x="channel"}=e;const u=(0,a.CG)((e=>"channel"==x?e.footprint.autoDeleteMsgChannels.find((e=>e.gid==p)):e.footprint.autoDeleteMsgUsers.find((e=>e.uid==p)))),[m,{isSuccess:f}]=(0,s.ar)(),[h,g]=(0,i.useState)(null!==(t=null===u||void 0===u?void 0:u.expires_in)&&void 0!==t?t:0),{t:b}=(0,o.$G)("setting",{keyPrefix:"auto_delete_msg"}),{t:v}=(0,o.$G)(),w=[{title:b("off"),value:0},{title:b("5_min"),value:300},{title:b("10_min"),value:600},{title:b("1_hour"),value:3600},{title:b("1_day"),value:86400},{title:b("1_week"),value:604800}];(0,i.useEffect)((()=>{f&&l.Am.success(v("tip.update"))}),[f]);const j=null!==(n=null===u||void 0===u?void 0:u.expires_in)&&void 0!==n?n:0;return(0,c.jsxs)("section",{className:"max-w-[512px] h-full relative",children:[(0,c.jsxs)("div",{className:"text-sm",children:[(0,c.jsx)("h2",{children:b("title")}),(0,c.jsx)("p",{className:"text-gray-500",children:b("desc")})]}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)(d.Z,{options:w.map((e=>{let{title:t}=e;return t})),values:w.map((e=>{let{value:t}=e;return t})),value:h||0,onChange:e=>{g(e)}})}),j!==h&&(0,c.jsx)(r.Z,{saveHandler:()=>{m("user"==x?{users:[{uid:p,expires_in:h}]}:{groups:[{gid:p,expires_in:h}]})},resetHandler:()=>{var e;g(null!==(e=null===u||void 0===u?void 0:u.expires_in)&&void 0!==e?e:0)}})]})}},64631:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(21812),l=n(80683);function o(e){return e<=16?8:e<=24?12:e<=32?16:e<=40?18:e<=56?22:e<=80?48:64}const s=e=>{let{src:t="",name:n="Deleted User",type:s="user",width:a,height:r,...d}=e;return t&&0!==t.length?(0,l.jsx)("img",{src:t,...d}):(0,l.jsx)("div",{className:"rounded-full flex items-center justify-center",style:{width:a,height:r,fontSize:o(a),fontWeight:400,fontFamily:"'Lato', 'Lato-Regular', 'Helvetica Neue'",background:"channel"===s?"#EAECF0":"#4c99e9",color:"channel"===s?"#475467":"#FFFFFF"},children:(0,i.Qm)(n)})}},80874:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(70537),l=n(10336);const o=e=>{let{id:t="root-modal",mask:n=!0,children:o}=e;const[s,a]=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;n&&e.classList.add("mask");const i=document.createElement("div");return i.classList.add("wrapper"),e.appendChild(i),a(i),()=>{e.removeChild(i)}}),[t,n]),s?(0,l.createPortal)(o,s):null}},71044:(e,t,n)=>{n.d(t,{Z:()=>y});var i,l=n(70537),o=n(64084),s=n(7829);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}const r=(e,t)=>{let{title:n,titleId:o,...s}=e;return l.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?l.createElement("title",{id:o},n):null,i||(i=l.createElement("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3596 22 8.77516 21.6039 7.35578 20.8583L3.06538 21.9753C2.6111 22.0937 2.1469 21.8213 2.02858 21.367C1.99199 21.2266 1.99198 21.0791 2.02855 20.9386L3.1449 16.6502C2.3972 15.2294 2 13.6428 2 12C2 6.47715 6.47715 2 12 2Z",fill:"#22CCEE"})))},d=(0,l.forwardRef)(r);var c;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}const x=(e,t)=>{let{title:n,titleId:i,...o}=e;return l.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),n?l.createElement("title",{id:i},n):null,c||(c=l.createElement("path",{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z",fill:"#616161"})))},u=(0,l.forwardRef)(x);var m=n(64631);const f=n(57889).ZP.div`
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 432px;
  gap: 4px;
  .icons {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #22ccee;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      background: #f9fafb;
      border-radius: 8px;
      width: 128px;
      padding: 14px 0 12px 0;

      &:not(.disabled):hover {
        background: #f2f4f7;
      }
      &.call,
      &.more {
        svg path {
          fill: #22ccee;
        }
      }
      &.disabled {
        color: #667085;
        svg path {
          fill: #667085;
        }
      }
      .txt {
        user-select: none;
      }
    }
  }
  &.card {
    padding: 16px;
    width: 280px;
    background: #ffffff;
    box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 6px;
    .icons {
      padding-bottom: 2px;
    }
  }
`;var h=n(63211),g=n(50911),b=n(66160),v=n(14566),w=n(80683);const j=e=>{let{uid:t,type:n="embed",cid:i}=e;const{t:l}=(0,v.$G)("member"),{t:a}=(0,v.$G)(),{canCopyEmail:r,copyEmail:c,removeFromChannel:p,canRemoveFromChannel:x,canRemove:j,removeUser:y}=(0,g.Z)({uid:t,cid:i}),{data:C}=(0,b.CG)((e=>({data:e.users.byId[t]})));if(!C)return null;const{name:N,email:k,avatar:Z}=C,_="embed"==n&&j,E=k||x||_;return(0,w.jsxs)(f,{className:n,children:[(0,w.jsx)(m.Z,{width:80,height:80,className:"rounded-full w-20 h-20 object-cover",src:Z,name:N}),(0,w.jsx)("h2",{className:"text-lg select-text font-bold text-[#1c1c1e]",children:N}),(0,w.jsx)("span",{className:"text-sm text-[#98a2b3] select-text",children:k}),(0,w.jsxs)("ul",{className:"icons",children:[(0,w.jsx)(o.OL,{to:`/chat/dm/${t}`,children:(0,w.jsxs)("li",{className:"icon chat",children:[(0,w.jsx)(d,{}),(0,w.jsx)("span",{className:"txt",children:l("send_msg")})]})}),(0,w.jsx)(s.ZP,{disabled:!E,interactive:!0,popperOptions:{strategy:"fixed"},placement:"bottom-start",trigger:"click",hideOnClick:!0,content:(0,w.jsxs)(h.Z,{children:[r&&(0,w.jsx)("li",{className:"item",onClick:c.bind(void 0,k),children:l("copy_email")}),x&&(0,w.jsx)("li",{className:"item danger",onClick:p.bind(null,t),children:l("remove_from_channel")}),_&&(0,w.jsx)("li",{className:"item danger",onClick:y.bind(null,t),children:l("remove")})]}),children:(0,w.jsxs)("li",{className:"icon more "+(E?"":"disabled"),children:[(0,w.jsx)(u,{}),(0,w.jsx)("span",{className:"txt",children:a("more")})]})})]})]})},y=(0,l.memo)(j)},24563:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(14566),l=n(57889),o=n(80683);const s=l.ZP.div`
  width: 100%;
  position: absolute;
  bottom: 64px;
  left: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  background: #fff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 25px;
  .txt {
    padding: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 14px;
    .btn {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      padding: 8px 14px;
      background: #1fe1f9;
      border: 1px solid #1fe1f9;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 25px;
      &.reset {
        background: none;
        color: #667085;
        border: none;
        box-shadow: none;
      }
    }
  }
`,a=e=>{let{saveHandler:t,resetHandler:n}=e;const{t:l}=(0,i.$G)("setting");return(0,o.jsxs)(s,{className:"animate__animated animate__flipInX animate__faster",children:[(0,o.jsx)("span",{className:"txt",children:l("save_tip")}),(0,o.jsxs)("div",{className:"btns",children:[(0,o.jsx)("button",{className:"btn reset",onClick:n,children:l("reset")}),(0,o.jsx)("button",{className:"btn",onClick:t,children:l("save_change")})]})]})}},7477:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(57889),l=n(15924),o=n(64084);const s=n.p+"static/media/arrow.left.92fbb139607631555459.svg";var a=n(80683);const r=i.ZP.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  > .left {
    max-height: 100vh;
    overflow: scroll;
    padding: 32px 16px;
    min-width: 212px;
    background-color: #f5f6f7;

    > .title {
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
      margin-bottom: 32px;
      padding-left: 24px;
      background-size: 16px;
      background: url(${s}) no-repeat left;
    }

    > .items {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 36px;

      &:before {
        padding-left: 12px;
        content: attr(data-title);
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #6b7280;
        margin-bottom: 2px;
      }

      .item {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #44494f;
        border-radius: 4px;

        &:hover,
        &.curr {
          background: #e7e5e4;
        }

        > a {
          display: block;
          padding: 4px 12px;
        }
      }

      &.danger .item {
        cursor: pointer;
        padding: 4px 12px;
        color: #ef4444;

        &:hover {
          background: none;
        }
      }
    }
  }

  > .right {
    background-color: #fff;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 32px;

    > .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 32px;
    }
  }
`,d=e=>{let{closeModal:t,title:n="Settings",navs:i=[],dangers:s=[],nav:d,children:c}=e;const{pathname:p}=(0,l.TH)();return(0,a.jsxs)(r,{children:[(0,a.jsxs)("div",{className:"left",children:[(0,a.jsx)("h2",{onClick:t,className:"title",children:n}),i.map((e=>{let{title:t,items:n}=e;return(0,a.jsx)("ul",{"data-title":t,className:"items",children:n.map((e=>{let{name:t,title:n}=e;return(0,a.jsx)("li",{className:"item "+(t==(null===d||void 0===d?void 0:d.name)?"curr":""),children:(0,a.jsx)(o.OL,{to:`${p}?nav=${t}`,children:n})},t)}))},t)})),s.length?(0,a.jsx)("ul",{className:"items danger",children:s.map((e=>{if("boolean"===typeof e||!e)return null;const{title:t,handler:n}=e;return(0,a.jsx)("li",{onClick:n,className:"item",children:t},t)}))}):null]}),(0,a.jsxs)("div",{className:"right",children:[d&&(0,a.jsx)("h4",{className:"title",children:d.title}),c]})]})}},63211:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(57889).ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 20px 25px 20px rgba(31, 41, 55, 0.1), 0 10px 10px rgba(31, 41, 55, 0.04);
  border-radius: 12px;
  min-width: 200px;
  .item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
    padding: 6px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    .icon {
      width: 20px;
      height: 20px;
      path {
        fill: #475467;
      }
    }
    &.sb {
      justify-content: space-between;
    }
    &:hover {
      background-color: #22ccee;
      color: #fff;
      .icon {
        path {
          fill: #fff;
        }
      }
    }
    &.bottom_line {
      margin-bottom: 9px;
      &:before {
        position: absolute;
        content: "";
        left: 6px;
        bottom: -4px;
        display: block;
        padding: 0 6px;
        box-sizing: border-box;
        width: calc(100% - 12px);
        height: 1px;
        background-color: #f2f4f7;
      }
    }
    &.danger {
      color: #a11043;
      &:hover {
        background-color: #b42318;
        color: #fff;
      }
    }
    &[data-disabled="true"] {
      color: #a4a8b3;
      .icon {
        path {
          fill: #a4a8b3;
        }
      }
    }
  }
`},40698:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(57425),l=n(80683);const o=e=>{let{compact:t=!1,title:n="",description:o="",buttons:s,children:a,className:r}=e;return(0,l.jsxs)("div",{className:(0,i.Z)("rounded-lg bg-white drop-shadow",t?"p-4 min-w-[406px] text-left":"p-8 min-w-[440px] text-center",r),children:[n&&(0,l.jsx)("h3",{className:"text-xl text-gray-600 mb-4 font-semibold",children:n}),o&&(0,l.jsx)("p",{className:"text-sm text-gray-400 mb-2",children:o}),a,s&&(0,l.jsx)("div",{className:"pt-4 w-full flex justify-end gap-4 items-center",children:s})]})}},15621:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(70537),l=n(57889),o=n(80683);const s=l.ZP.form`
  width: 100%;
  > .option {
    &:not(:last-child) {
      margin-bottom: 8px;
    }

    > input[type="radio"] {
      display: none;

      & + .box {
        background: #ffffff;
        border: 1px solid #d0d5dd;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        transition: all ease-in-out 250ms;

        & > label {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #667085;
          cursor: pointer;
          user-select: none;
          transition: all ease-in-out 250ms;

          &:before {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 8px;
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #ffffff;
            border: 1px solid #d0d5dd;
            margin: 14px 8px 14px 14px;
            transition: all ease-in-out 500ms;
          }
        }
      }

      &:checked + .box {
        background: #22ccee;
        border: 1px solid #d0d5dd;

        & > label {
          color: #ffffff;

          &:before {
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #22ccee;
            border: 1px solid #ffffff;
          }
        }
      }
    }
  }
`,a="",r=[],d=e=>{let{options:t,values:n=r,value:l=a,defaultValue:d="",onChange:c}=e;const p=(0,i.useId)(),[x,u]=(0,i.useState)(d),m=l!==a?l:x;return(0,o.jsx)(s,{children:t.map(((e,t)=>(0,o.jsxs)("div",{className:"option",children:[(0,o.jsx)("input",{type:"radio",checked:(n!==r?n.indexOf(m):m)===t,onChange:()=>{const e=n===r?t:n[t];l===a&&u(e),c&&c(e)},id:`${p}-${t}`}),(0,o.jsx)("div",{className:"box",children:(0,o.jsx)("label",{htmlFor:`${p}-${t}`,children:e})})]},t)))})}},26209:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(70537),l=n(34108),o=n(27418);const s=e=>{const{enableToast:t=!0}=e||{},[n,s]=(0,i.useState)(!1);(0,i.useEffect)((()=>{n&&t&&o.ZP.success("Copied!")}),[n]);const a=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection();if(!n)return!1;const i=n.rangeCount>0&&n.getRangeAt(0);t.select();const l=document.execCommand("copy");return document.body.removeChild(t),i&&(n.removeAllRanges(),n.addRange(i)),l};return{copied:n,copy:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=0;return n||(t?(0,l.VP)(e).then((()=>{s(!0),i=window.setTimeout((()=>{s(!1)}),500)})):(s(a(e)),i=window.setTimeout((()=>{s(!1)}),500))),()=>{clearTimeout(i)}}}}},50911:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(70537),l=n(27418),o=n(15924),s=n(69195),a=n(6144),r=n(52334),d=n(26209),c=n(66160),p=n(14566);const x=e=>{let{uid:t,cid:n}=e;const{t:x}=(0,p.$G)(),[u,m]=(0,i.useState)(void 0),f=(0,o.bS)(`/users/${t}`),[h,{isSuccess:g}]=(0,r.EO)(),[b,{isSuccess:v}]=(0,a.Cg)(),w=(0,o.s0)(),{copy:j}=(0,d.Z)(),{user:y,channel:C,loginUser:N}=(0,c.CG)((e=>({user:"undefined"!==typeof t?e.users.byId[t]:t,channel:"undefined"!==typeof n?e.channels.byId[n]:n,loginUser:e.authData.user})));(0,i.useEffect)((()=>{m(null!==t&&void 0!==t?t:null===N||void 0===N?void 0:N.uid)}),[t,N]),(0,i.useEffect)((()=>{(v||g)&&(l.ZP.success(x("tip.delete")),g&&f&&w("/users"))}),[v,g,f]);const k=!(null===N||void 0===N||!N.is_admin),Z=null===N||void 0===N?void 0:N.uid,_=!!n&&!(null!==C&&void 0!==C&&C.is_public)&&k,E=!!n&&!(null!==C&&void 0!==C&&C.is_public)&&(k||(null===C||void 0===C?void 0:C.owner)==Z)&&t!=(null===C||void 0===C?void 0:C.owner);return{canDeleteChannel:_,canRemove:k&&Z!=t&&!n&&1!==t,removeUser:e=>{const t=!Number.isNaN(+e)&&e||u;t&&(h(t),(0,s.Bn)())},startChat:()=>{w(`/chat/dm/${t}`)},removeFromChannel:e=>{if(!n)return;const t=!Number.isNaN(+e)&&e||u;t&&(b({id:+n,members:[+t]}),(0,s.Bn)())},canRemoveFromChannel:E,canCopyEmail:!(null===y||void 0===y||!y.email),copyEmail:e=>{const t="string"==typeof e&&e||(null===y||void 0===y?void 0:y.email);j(t||""),(0,s.Bn)()}}}},13507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var i=n(70537),l=n(15924),o=n(64084),s=n(7477),a=n(27418),r=n(80874),d=n(52334),c=n(40698),p=n(69885),x=n(14566),u=n(80683);const m=e=>{let{id:t,closeModal:n}=e;const{t:o}=(0,x.$G)("setting"),{t:s}=(0,x.$G)(),m=(0,l.s0)(),[f,{isLoading:h,isSuccess:g}]=(0,d.EO)();return(0,i.useEffect)((()=>{g&&(a.ZP.success(s("tip.delete")),n(),m("/chat"))}),[g]),t?(0,u.jsx)(r.Z,{id:"modal-modal",children:(0,u.jsx)(c.Z,{className:"compact",title:o("dm.delete"),description:o("dm.delete_desc"),buttons:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{onClick:n.bind(null,void 0),className:"cancel",children:s("action.cancel")}),(0,u.jsx)(p.Z,{onClick:()=>{f(t)},className:"danger",children:h?"Deleting":s("action.remove")})]})})}):null};var f=n(71044);function h(e){let{id:t=0}=e;return(0,u.jsx)("section",{className:"w-full h-full flex justify-center items-start",children:(0,u.jsx)(f.Z,{uid:t})})}var g=n(11089);const b=e=>{const{t:t}=(0,x.$G)("setting");return[{title:t("nav.general"),items:[{name:"overview",title:t("nav.overview"),component:(0,u.jsx)(h,{id:e})},{name:"auto_delete_msg",title:t("nav.auto_delete_msg"),component:(0,u.jsx)(g.Z,{id:e,type:"user"})}]}]};var v=n(66160);let w="";function j(){const{t:e}=(0,x.$G)(),{uid:t=0}=(0,l.UO)(),{loginUser:n}=(0,v.CG)((e=>({loginUser:e.authData.user,user:t?e.users.byId[+t]:void 0}))),a=(0,l.s0)(),[r]=(0,o.lr)(),d=b(+t),c=d.map((e=>{let{items:t}=e;return t})).flat(),p=r.get("nav");w=w||(r.get("f")||"/");const[f,h]=(0,i.useState)(!1),g=()=>{h((e=>!e))};if(!t)return null;const j=c.find((e=>e.name==p))||c[0],y=null===n||void 0===n?void 0:n.is_admin;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{nav:j,closeModal:()=>{a(w),w=""},title:"DM Setting",navs:d,dangers:[y&&{title:e("action.remove_user"),handler:g}],children:j.component}),f&&(0,u.jsx)(m,{closeModal:g,id:+t})]})}}}]);