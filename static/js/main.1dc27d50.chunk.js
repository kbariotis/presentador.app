(this.webpackJsonppresentit=this.webpackJsonppresentit||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t.n(i),a=t(15),c=t.n(a),o=t(2),d=t(1),l=t(16),u=t(8),s=t(5),m=t(7),b=t.n(m),h=t(13),f=t(4),p=t(20),g=t.n(p),j={normal:{add:function(e){return"heading"===e?"singleHeader":"image"===e?"image":"blockquote"===e?"blockquote":void 0},remove:function(e){return"normal"}},blockquote:{add:function(e){if("paragraph"===e)return"blockquote"},remove:function(e){return"normal"}},image:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},manyImages:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},singleHeader:{add:function(e){return"heading"===e?"twoHeaders":"paragraph"===e?"headerSingleParagraph":"list"===e?"headerList":"image"===e?"headerImage":"code_block"===e?"headerCodeblock":void 0},remove:function(e){return"normal"}},twoHeaders:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerList:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerImage:{add:function(e){return"normal"},remove:function(e){return"image"===e?"singleHeader":"heading"===e?"image":void 0}},headerSingleParagraph:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerParagraphImage":void 0},remove:function(e){return"heading"===e?"normal":"paragraph"===e?"singleHeader":void 0}},headerManyParagraphs:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerCodeblock:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerManyParagraphsImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerParagraphImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}}};var x=r.a.createContext({getNumbersOfSlide:function(){return 1},getCurrentSlide:function(){return{number:0,state:"normal"}},getThumbnails:function(){return[]},addSlide:function(){},removeSlide:function(){},changeCurrentSlide:function(){},getElementsForSlide:function(){return[]},addElement:function(){},removeElement:function(){},changeElementValue:function(){}}),v=t(0);var O=function(){var e=Object(i.useContext)(x),n=e.addElement,t=(0,e.getCurrentSlide)();return Object(v.jsxs)("div",{style:{},children:[Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:1,value:"Heading 1"})},style:{padding:"10px",marginRight:"5px"},children:"H1"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:2,value:"Heading 2"})},style:{padding:"10px",marginRight:"5px"},children:"H2"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:3,value:"Heading 3"})},style:{padding:"10px",marginRight:"5px"},children:"H3"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:4,value:"Heading 4"})},style:{padding:"10px",marginRight:"5px"},children:"H4"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:5,value:"Heading 5"})},style:{padding:"10px",marginRight:"5px"},children:"H5"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:6,value:"Heading 6"})},style:{padding:"10px",marginRight:"5px"},children:"H6"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"paragraph",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})},style:{padding:"10px",marginRight:"5px"},children:"P"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"image",value:"https://via.placeholder.com/500x500"})},style:{padding:"10px",marginRight:"5px"},children:"Img"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"list",value:" \xb7 hello there"})},style:{padding:"10px",marginRight:"5px"},children:"Li"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"blockquote",value:"A wise man once said..."})},style:{padding:"10px",marginRight:"5px"},children:"Q"})]})};var y=function(e){var n=e.src,t=e.active,r=e.number,a=Object(i.useContext)(x),c=a.removeSlide,o=a.getThumbnails,d=Object(i.useState)(!1),l=Object(f.a)(d,2),u=l[0],s=l[1],m=""!==n?Object(v.jsx)("img",{src:n,alt:"Slide",style:{width:"100px",height:"100px",verticalAlign:"middle",border:t?"1px solid red":"none"}}):Object(v.jsx)("div",{style:{display:"inline-block",width:"100px",height:"100px",verticalAlign:"middle",border:t?"1px solid red":"none"},children:"Loading"});return Object(v.jsxs)("span",{style:{position:"relative",display:"inline-block"},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[m,u&&o().length>1&&Object(v.jsx)("button",{style:{position:"absolute",top:0,right:0},onMouseDown:function(){c(r)},children:"X"})]})};var w,S,k=function(){var e=Object(i.useContext)(x),n=e.changeCurrentSlide,t=e.getCurrentSlide,r=e.addSlide,a=e.getThumbnails,c=e.getNumbersOfSlide,o=t();return Object(v.jsxs)("div",{style:{},children:[Object(v.jsx)("button",{onClick:function(){n(o.number-1)},disabled:0===o.number,style:{height:"100px"},children:"<"}),a().map((function(e,n){return Object(v.jsx)(y,{src:e,number:n,active:o.number===n},n)})),Object(v.jsx)("button",{style:{height:"100px"},onClick:function(){o.number===c()-1?r():n(o.number+1)},children:o.number===c()-1?"+":">"})]})},E=d.c.div(w||(w=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),I=d.c.button(S||(S=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"])));function N(e){var n=e.level,t=e.item,r=e.removeElement,a=e.changeElementValue,c=Object(i.useRef)(null),o=Object(i.useState)(!1),d=Object(f.a)(o,2),l=d[0],u=d[1];function s(e){c.current&&c.current.setAttribute("contenteditable","true"),u(!0)}function m(e){c.current&&c.current.setAttribute("contenteditable","false"),u(!1),""===e.target.innerText?r(t.id):a(t.id,e.target.innerText)}function b(e){"Enter"===e.code&&e.preventDefault()}function h(e){}var p=1===n?Object(v.jsx)("h1",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"4em",border:"".concat(l?"1px solid red":"none")},children:t.value}):2===n?Object(v.jsx)("h2",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"3.5em",border:"".concat(l?"1px solid red":"none")},children:t.value}):3===n?Object(v.jsx)("h3",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"3em",border:"".concat(l?"1px solid red":"none")},children:t.value}):4===n?Object(v.jsx)("h4",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"3.5em",border:"".concat(l?"1px solid red":"none")},children:t.value}):5===n?Object(v.jsx)("h5",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"3em",border:"".concat(l?"1px solid red":"none")},children:t.value}):Object(v.jsx)("h6",{ref:c,onKeyDown:b,onInput:h,onBlur:m,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"2.5em",border:"".concat(l?"1px solid red":"none")},children:t.value});return Object(v.jsxs)(E,{children:[p,l&&Object(v.jsx)(I,{onMouseDown:function(){r(t.id)},children:"X"})]})}N.displayName="Header";var C,D,H,F=N,P=d.c.div(C||(C=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),T=d.c.button(D||(D=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),M=d.c.p(H||(H=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function R(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(f.a)(a,2),o=c[0],d=c[1],l=Object(i.useRef)(null);return Object(v.jsxs)(P,{children:[Object(v.jsx)(M,{selected:o,onKeyDown:function(e){"Enter"===e.code&&e.preventDefault()},ref:l,onInput:function(e){},onBlur:function(e){l.current&&l.current.setAttribute("contenteditable","false"),d(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){l.current&&l.current.setAttribute("contenteditable","true"),d(!0)},tabIndex:-1,"data-id":n.id,children:n.value}),o&&Object(v.jsx)(T,{onMouseDown:function(){t(n.id)},children:"X"})]})}R.displayName="Paragraph";var q,z,A,B=R,V=d.c.div(q||(q=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),L=d.c.button(z||(z=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),K=d.c.img(A||(A=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function X(e){var n=e.item,t=e.removeElement,r=Object(i.useState)(!1),a=Object(f.a)(r,2),c=a[0],o=a[1];return Object(v.jsxs)(V,{children:[Object(v.jsx)(K,{selected:c,src:n.value,alt:n.value,onBlur:function(e){o(!1)},onFocus:function(e){o(!0)},tabIndex:-1,"data-id":n.id}),c&&Object(v.jsx)(L,{onMouseDown:function(){t(n.id)},children:"X"})]})}X.displayName="Image";var J,U,Q,_=X,G=d.c.div(J||(J=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),W=d.c.button(U||(U=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),Y=d.c.p(Q||(Q=Object(o.a)(["\n  white-space: pre-wrap;\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function Z(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(f.a)(a,2),o=c[0],d=c[1],l=Object(i.useRef)(null);return Object(v.jsxs)(G,{children:[Object(v.jsx)(Y,{selected:o,onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),l.current&&function(e){var n=window.getSelection();if(n){var t=n.getRangeAt(0);t.deleteContents();var i=document.createTextNode(e);t.insertNode(i),t.setStartAfter(i),n.removeAllRanges(),n.addRange(t)}}("\n \xb7 "))},ref:l,onInput:function(e){},onBlur:function(e){l.current&&l.current.setAttribute("contenteditable","false"),d(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){l.current&&l.current.setAttribute("contenteditable","true"),d(!0)},tabIndex:-1,"data-id":n.id,children:n.value}),o&&Object(v.jsx)(W,{onMouseDown:function(){t(n.id)},children:"X"})]})}Z.displayName="List";var $,ee,ne,te=Z,ie=d.c.div($||($=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),re=d.c.button(ee||(ee=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),ae=d.c.blockquote(ne||(ne=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 50px;\n  border: ",';\n  quotes: "\u201c" "\u201d" "\u2018" "\u2019";\n\n  background: #f9f9f9;\n\n  &:before {\n    color: #ccc;\n    content: open-quote;\n    font-size: 4em;\n    line-height: 0.1em;\n    margin-right: 0.25em;\n    vertical-align: -0.4em;\n  }\n\n  p {\n    display: inline;\n  }\n'])),(function(e){return e.selected?"1px solid red":"none"}));function ce(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(f.a)(a,2),o=c[0],d=c[1],l=Object(i.useRef)(null);return Object(v.jsxs)(ie,{children:[Object(v.jsx)(ae,{selected:o,onKeyDown:function(e){"Enter"===e.code&&e.preventDefault()},ref:l,onInput:function(e){},onBlur:function(e){l.current&&l.current.setAttribute("contenteditable","false"),d(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){l.current&&l.current.setAttribute("contenteditable","true"),d(!0)},tabIndex:-1,"data-id":n.id,children:Object(v.jsx)("p",{children:n.value})}),o&&Object(v.jsx)(re,{onMouseDown:function(){t(n.id)},children:"X"})]})}ce.displayName="Blockquote";var oe,de,le,ue,se=ce,me="#424242",be="#737373",he="#4285f4",fe=d.c.div(oe||(oe=Object(o.a)(["\n  background-color: ",";\n  color: white;\n\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 2em;\n"])),he);var pe,ge=d.c.div(de||(de=Object(o.a)(["\n  background-color: ",";\n  color: white;\n\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),he),je=d.c.div(le||(le=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n"]))),xe=d.c.div(ue||(ue=Object(o.a)(["\n  padding: 1.5em;\n"])));var ve,Oe,ye,we=d.c.div(pe||(pe=Object(o.a)(["\n  background-color: ",";\n  color: white;\n  min-height: 100%;\n  padding: 1.5em;\n"])),he);var Se,ke=d.c.div(ve||(ve=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Ee=d.c.div(Oe||(Oe=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),he),Ie=d.c.div(ye||(ye=Object(o.a)(["\n  flex: 2;\n  padding: 1.5em;\n\n  p {\n    color: ",";\n  }\n"])),be);var Ne,Ce,De,He=d.c.div(Se||(Se=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: ",";\n\n  .top {\n  }\n\n  .bottom {\n  }\n"])),be);var Fe,Pe=d.c.div(Ne||(Ne=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Te=d.c.div(Ce||(Ce=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),he),Me=d.c.div(De||(De=Object(o.a)(["\n  flex: 2;\n  padding: 1.5em;\n  p {\n    color: ",";\n    padding-bottom: 0.5em;\n  }\n"])),be);var Re,qe,ze,Ae=d.c.div(Fe||(Fe=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .top {\n    background-color: ",";\n    flex: 1;\n    display: flex;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      display: flex;\n      align-items: flex-end;\n      color: white;\n    }\n  }\n  .bottom {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    flex: 2;\n\n    pre {\n      display: block;\n      width: 100%;\n      height: 100%;\n\n      code {\n        height: 100%;\n      }\n    }\n  }\n"])),he);var Be,Ve,Le,Ke=d.c.div(Re||(Re=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Xe=d.c.div(qe||(qe=Object(o.a)(["\n  padding: 1em;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: ",";\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n  }\n\n  .paragraphs {\n    flex: 2;\n\n    p {\n    }\n  }\n"])),he),Je=d.c.div(ze||(ze=Object(o.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 1.5em;\n  img {\n    max-width: 100%;\n  }\n"])));var Ue,Qe=d.c.div(Be||(Be=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),_e=d.c.div(Ve||(Ve=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n    color: ",";\n  }\n\n  p {\n    color: ",";\n    flex: 1;\n  }\n"])),me,be),Ge=d.c.div(Le||(Le=Object(o.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 1.5em;\n\n  img {\n    max-width: 100%;\n  }\n"])));var We,Ye=d.c.div(Ue||(Ue=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1.5em;\n\n  img {\n    max-width: 100%;\n  }\n"])));var Ze,$e,en,nn=d.c.div(We||(We=Object(o.a)(["\n  background-color: ",";\n  color: white;\n  padding: 1.5em;\n\n  min-height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  .image {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    padding: 0.5em;\n\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  }\n"])),he);var tn,rn,an,cn=d.c.div(Ze||(Ze=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),on=d.c.div($e||($e=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),he),dn=d.c.div(en||(en=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex: 2;\n  padding: 1.5em;\n\n  img {\n    max-width: 100%;\n  }\n"])));var ln=d.c.div(tn||(tn=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),un=d.c.div(rn||(rn=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),he),sn=d.c.div(an||(an=Object(o.a)(["\n  flex: 2;\n  padding: 1.5em;\n  font-size: 1.1em;\n\n  line-height: 2em;\n  color: ",";\n"])),be);var mn,bn,hn,fn={singleHeader:function(e){var n=e.children;return n.find((function(e){return"Header"===e.type.displayName}))?Object(v.jsx)(fe,{children:Object(v.jsx)("div",{className:"container",children:n})}):Object(v.jsx)(v.Fragment,{})},twoHeaders:function(e){var n=e.children.filter((function(e){return"Header"===e.type.displayName})),t=Object(f.a)(n,2),i=t[0],r=t[1];return i?Object(v.jsxs)(ge,{children:[Object(v.jsx)(je,{children:i}),Object(v.jsx)(xe,{children:r})]}):Object(v.jsx)(v.Fragment,{})},normal:function(e){var n=e.children;return Object(v.jsx)(we,{children:n})},headerSingleParagraph:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(ke,{children:[Object(v.jsx)(Ee,{children:t}),Object(v.jsx)(Ie,{children:i})]}):Object(v.jsx)(v.Fragment,{})},headerCodeblock:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Ae,{children:[Object(v.jsx)("div",{className:"top",children:t}),Object(v.jsx)("div",{className:"bottom",children:i})]}):Object(v.jsx)(v.Fragment,{})},headerManyParagraphsImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Ke,{children:[Object(v.jsxs)(Xe,{children:[t,Object(v.jsx)("div",{className:"paragraphs",children:r})]}),Object(v.jsx)(Je,{children:i})]}):Object(v.jsx)(v.Fragment,{})},headerParagraphImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Qe,{children:[Object(v.jsxs)(_e,{children:[t,r]}),Object(v.jsx)(Ge,{children:i})]}):Object(v.jsx)(v.Fragment,{})},image:function(e){var n=e.children.find((function(e){return"Image"===e.type.displayName}));return n?Object(v.jsx)(Ye,{children:n}):Object(v.jsx)(v.Fragment,{})},manyImages:function(e){var n=e.children,t=n.length>=2&&n.length<=4?"50%":n.length>=5&&n.length<=7?"33.3%":n.length>7?"25%":0;return Object(v.jsx)(nn,{children:n.map((function(e,n){return Object(v.jsx)("div",{className:"image",style:{flex:"".concat(t)},children:e},n)}))})},headerImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName}));return t?Object(v.jsxs)(cn,{children:[Object(v.jsx)(on,{children:t}),Object(v.jsx)(dn,{children:i})]}):Object(v.jsx)(v.Fragment,{})},headerList:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"List"===e.type.displayName}));return t?Object(v.jsxs)(ln,{children:[Object(v.jsx)(un,{children:t}),Object(v.jsx)(sn,{children:i})]}):Object(v.jsx)(v.Fragment,{})},blockquote:function(e){var n=e.children.find((function(e){return"Blockquote"===e.type.displayName}));return n?Object(v.jsxs)(He,{children:[Object(v.jsx)("div",{className:"top",children:n}),Object(v.jsx)("div",{className:"bottom"})]}):Object(v.jsx)(v.Fragment,{})},headerManyParagraphs:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Pe,{children:[Object(v.jsx)(Te,{children:t}),Object(v.jsx)(Me,{children:i})]}):Object(v.jsx)(v.Fragment,{})}},pn=d.c.div(mn||(mn=Object(o.a)(["\n  width: 80vw;\n"]))),gn=d.c.div(bn||(bn=Object(o.a)(["\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 */\n  position: relative;\n"]))),jn=d.c.div(hn||(hn=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  background: white;\n\n  a {\n    color: #51c2f7;\n  }\n\n  :root {\n    // taken from https://websemantics.uk/tools/responsive-font-calculator/\n    font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));\n    padding: calc(1rem + ((1vw - 0.48rem) * 0.6944));\n    min-height: 0vw;\n  }\n"])));function xn(e,n){var t=Object(i.useContext)(x),r=t.getCurrentSlide,a=t.getElementsForSlide,c=t.removeElement,o=t.changeElementValue,d=fn[r().state];return Object(v.jsx)(pn,{children:Object(v.jsx)(gn,{children:Object(v.jsx)(jn,{className:r().state,ref:n,children:Object(v.jsx)(d,{children:a(r().number).map((function(e){switch(e.type){case"heading":return Object(v.jsx)(F,{removeElement:c,changeElementValue:o,level:e.level,item:e},e.id);case"paragraph":return Object(v.jsx)(B,{item:e,removeElement:c,changeElementValue:o},e.id);case"image":return Object(v.jsx)(_,{item:e,removeElement:c},e.id);case"list":return Object(v.jsx)(te,{item:e,removeElement:c,changeElementValue:o},e.id);case"blockquote":return Object(v.jsx)(se,{item:e,removeElement:c,changeElementValue:o},e.id);default:return Object(v.jsx)(v.Fragment,{})}}))})})})})}var vn,On,yn,wn,Sn,kn=Object(i.forwardRef)(xn),En=Object(d.a)(vn||(vn=Object(o.a)(["\n  ",'\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  body {\n    font-family: "Roboto", sans-serif;\n  }\n'])),l.a),In=d.c.div(On||(On=Object(o.a)([""]))),Nn=d.c.div(yn||(yn=Object(o.a)(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"]))),Cn=d.c.div(wn||(wn=Object(o.a)([""]))),Dn=d.c.div(Sn||(Sn=Object(o.a)(["\n  background: #eee;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));var Hn=function(){var e=function(){var e=Object(i.useRef)(null),n=Object(i.useState)(0),t=Object(f.a)(n,2),r=t[0],a=t[1],c=Object(i.useState)([""]),o=Object(f.a)(c,2),d=o[0],l=o[1],m=Object(i.useState)([]),p=Object(f.a)(m,2),x=p[0],v=p[1],O=Object(i.useState)(["normal"]),y=Object(f.a)(O,2),w=y[0],S=y[1];function k(){return(k=Object(h.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v([].concat(Object(s.a)(x),[n])),j[w[n.slide]]?(t=j[w[n.slide]].add(n.type))&&S(w.map((function(e,i){return i===n.slide?t:e}))):S(w.map((function(e,t){return t===n.slide?"normal":e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function n(){return(n=Object(h.a)(b.a.mark((function n(){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.current){n.next=5;break}return n.next=3,g()(e.current);case 3:t=n.sent,l(d.map((function(e,n){return n===r?t.toDataURL():e})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r,x]),{getNumbersOfSlide:function(){return w.length},getThumbnails:function(){return d},getCurrentSlide:function(){return{number:r,state:w[r]}},ref:e,addElement:function(e){return k.apply(this,arguments)},removeElement:function(e){var n=x.find((function(n){return n.id===e}));if(n)if(v(Object(s.a)(x.filter((function(n){return n.id!==e})))),j[w[n.slide]]){var t=j[w[n.slide]].remove(n&&n.type);t&&S(w.map((function(e,i){return i===n.slide?t:e})))}else S(w.map((function(e,t){return t===n.slide?"normal":e})))},changeElementValue:function(e,n){v(x.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{value:n}):t})))},changeCurrentSlide:function(e){a(e)},getElementsForSlide:function(e){return x.filter((function(n){return n.slide===e}))},addSlide:function(){S([].concat(Object(s.a)(w),["normal"])),a(r+1),l([].concat(Object(s.a)(d),[""]))},removeSlide:function(e){v(Object(s.a)(x.filter((function(n){return n.slide!==e})).map((function(n){return n.slide>e?Object(u.a)(Object(u.a)({},n),{},{slide:n.slide-1}):n})))),S(Object(s.a)(w.filter((function(n,t){return t!==e})))),a(r===d.length-1?r-1:r),l(d.filter((function(e,n){return n!==r})))}}}(),n=e.ref,t=e.getCurrentSlide,r=e.addElement,a=e.changeCurrentSlide,c=e.removeSlide,o=e.removeElement,d=e.changeElementValue,l=e.getElementsForSlide,m=e.addSlide,p=e.getThumbnails,y=e.getNumbersOfSlide;return Object(v.jsxs)(x.Provider,{value:{getNumbersOfSlide:y,getCurrentSlide:t,getThumbnails:p,addElement:r,removeElement:o,changeElementValue:d,removeSlide:c,addSlide:m,getElementsForSlide:l,changeCurrentSlide:a},children:[Object(v.jsx)(En,{}),Object(v.jsxs)(Dn,{children:[Object(v.jsx)(Cn,{children:Object(v.jsx)(O,{})}),Object(v.jsx)(Nn,{children:Object(v.jsx)(kn,{ref:n})}),Object(v.jsx)(In,{children:Object(v.jsx)(k,{})})]})]})},Fn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Hn,{})}),document.getElementById("root")),Fn()}},[[29,1,2]]]);
//# sourceMappingURL=main.1dc27d50.chunk.js.map