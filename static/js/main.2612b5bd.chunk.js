(this.webpackJsonppresentit=this.webpackJsonppresentit||[]).push([[0],{28:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t.n(i),a=t(15),c=t.n(a),o=t(1),l=t(2),d=t(8),u=t(5),s=t(7),b=t.n(s),m=t(12),h=t(4),f=t(16),p=t.n(f),j={normal:{add:function(e){return"heading"===e?"singleHeader":"image"===e?"image":"blockquote"===e?"blockquote":void 0},remove:function(e){return"normal"}},blockquote:{add:function(e){if("paragraph"===e)return"blockquote"},remove:function(e){return"normal"}},image:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},manyImages:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},singleHeader:{add:function(e){return"heading"===e?"twoHeaders":"paragraph"===e?"headerSingleParagraph":"list"===e?"headerList":"image"===e?"headerImage":"code_block"===e?"headerCodeblock":void 0},remove:function(e){return"normal"}},twoHeaders:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerList:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerImage:{add:function(e){return"normal"},remove:function(e){return"image"===e?"singleHeader":"heading"===e?"image":void 0}},headerSingleParagraph:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerParagraphImage":void 0},remove:function(e){return"heading"===e?"normal":"paragraph"===e?"singleHeader":void 0}},headerManyParagraphs:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerCodeblock:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerManyParagraphsImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerParagraphImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}}};var g=r.a.createContext({getNumbersOfSlide:function(){return 1},getCurrentSlide:function(){return{number:0,state:"normal"}},getThumbnails:function(){return[]},addSlide:function(){},removeSlide:function(){},changeCurrentSlide:function(){},getElementsForSlide:function(){return[]},addElement:function(){},removeElement:function(){},changeElementValue:function(){}}),x=t(0);var v=function(){var e=Object(i.useContext)(g),n=e.addElement,t=(0,e.getCurrentSlide)();return Object(x.jsxs)("div",{style:{},children:[Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:1,value:"Heading 1"})},style:{padding:"10px",marginRight:"5px"},children:"H1"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:2,value:"Heading 2"})},style:{padding:"10px",marginRight:"5px"},children:"H2"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:3,value:"Heading 3"})},style:{padding:"10px",marginRight:"5px"},children:"H3"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:4,value:"Heading 4"})},style:{padding:"10px",marginRight:"5px"},children:"H4"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:5,value:"Heading 5"})},style:{padding:"10px",marginRight:"5px"},children:"H5"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:6,value:"Heading 6"})},style:{padding:"10px",marginRight:"5px"},children:"H6"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"paragraph",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})},style:{padding:"10px",marginRight:"5px"},children:"P"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"image",value:"https://via.placeholder.com/500x500"})},style:{padding:"10px",marginRight:"5px"},children:"Img"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"list",value:" \xb7 hello there"})},style:{padding:"10px",marginRight:"5px"},children:"Li"}),Object(x.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"blockquote",value:"A wise man once said..."})},style:{padding:"10px",marginRight:"5px"},children:"Q"})]})};var O=function(e){var n=e.src,t=e.active,r=e.number,a=Object(i.useContext)(g),c=a.removeSlide,o=a.getThumbnails,l=Object(i.useState)(!1),d=Object(h.a)(l,2),u=d[0],s=d[1],b=""!==n?Object(x.jsx)("img",{src:n,alt:"Slide",style:{width:"100px",height:"100px",verticalAlign:"middle",border:t?"1px solid red":"none"}}):Object(x.jsx)("div",{style:{display:"inline-block",width:"100px",height:"100px",verticalAlign:"middle",border:t?"1px solid red":"none"},children:"Loading"});return Object(x.jsxs)("span",{style:{position:"relative",display:"inline-block"},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[b,u&&o().length>1&&Object(x.jsx)("button",{style:{position:"absolute",top:0,right:0},onMouseDown:function(){c(r)},children:"X"})]})};var y,w,S=function(){var e=Object(i.useContext)(g),n=e.changeCurrentSlide,t=e.getCurrentSlide,r=e.addSlide,a=e.getThumbnails,c=e.getNumbersOfSlide,o=t();return Object(x.jsxs)("div",{style:{},children:[Object(x.jsx)("button",{onClick:function(){n(o.number-1)},disabled:0===o.number,style:{height:"100px"},children:"<"}),a().map((function(e,n){return Object(x.jsx)(O,{src:e,number:n,active:o.number===n},n)})),Object(x.jsx)("button",{style:{height:"100px"},onClick:function(){o.number===c()-1?r():n(o.number+1)},children:o.number===c()-1?"+":">"})]})},k=l.b.div(y||(y=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),E=l.b.button(w||(w=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"])));function N(e){var n=e.level,t=e.item,r=e.removeElement,a=e.changeElementValue,c=Object(i.useRef)(null),o=Object(i.useState)(!1),l=Object(h.a)(o,2),d=l[0],u=l[1];function s(e){c.current&&c.current.setAttribute("contenteditable","true"),u(!0)}function b(e){c.current&&c.current.setAttribute("contenteditable","false"),u(!1),""===e.target.innerText?r(t.id):a(t.id,e.target.innerText)}function m(e){"Enter"===e.code&&e.preventDefault()}function f(e){}var p=1===n?Object(x.jsx)("h1",{ref:c,onKeyDown:m,onInput:f,onBlur:b,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"5em",padding:"5px",border:"".concat(d?"1px solid red":"none")},children:t.value}):2===n?Object(x.jsx)("h2",{ref:c,onKeyDown:m,onInput:f,onBlur:b,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"4.5em",padding:"5px",border:"".concat(d?"1px solid red":"none")},children:t.value}):3===n?Object(x.jsx)("h3",{ref:c,onKeyDown:m,onInput:f,onBlur:b,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"4em",padding:"5px",border:"".concat(d?"1px solid red":"none")},children:t.value}):Object(x.jsx)("h4",{ref:c,onKeyDown:m,onInput:f,onBlur:b,onFocus:s,"data-id":t.id,tabIndex:-1,style:{fontSize:"3em",padding:"5px",border:"".concat(d?"1px solid red":"none")},children:t.value});return Object(x.jsxs)(k,{children:[p,d&&Object(x.jsx)(E,{onMouseDown:function(){r(t.id)},children:"X"})]})}N.displayName="Header";var I,C,H,D=N,F=l.b.div(I||(I=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),P=l.b.button(C||(C=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),T=l.b.p(H||(H=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function M(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(h.a)(a,2),o=c[0],l=c[1],d=Object(i.useRef)(null);return Object(x.jsxs)(F,{children:[Object(x.jsx)(T,{selected:o,onKeyDown:function(e){"Enter"===e.code&&e.preventDefault()},ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),l(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){d.current&&d.current.setAttribute("contenteditable","true"),l(!0)},tabIndex:-1,"data-id":n.id,children:n.value}),o&&Object(x.jsx)(P,{onMouseDown:function(){t(n.id)},children:"X"})]})}M.displayName="Paragraph";var R,q,A,V=M,z=l.b.div(R||(R=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),B=l.b.button(q||(q=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),L=l.b.img(A||(A=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function K(e){var n=e.item,t=e.removeElement,r=Object(i.useState)(!1),a=Object(h.a)(r,2),c=a[0],o=a[1];return Object(x.jsxs)(z,{children:[Object(x.jsx)(L,{selected:c,src:n.value,alt:n.value,onBlur:function(e){o(!1)},onFocus:function(e){o(!0)},tabIndex:-1,"data-id":n.id}),c&&Object(x.jsx)(B,{onMouseDown:function(){t(n.id)},children:"X"})]})}K.displayName="Image";var X,J,U,Q=K,_=l.b.div(X||(X=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),G=l.b.button(J||(J=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),W=l.b.p(U||(U=Object(o.a)(["\n  white-space: pre;\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function Y(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(h.a)(a,2),o=c[0],l=c[1],d=Object(i.useRef)(null);return Object(x.jsxs)(_,{children:[Object(x.jsx)(W,{selected:o,onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),d.current&&function(e){var n=window.getSelection();if(n){var t=n.getRangeAt(0);t.deleteContents();var i=document.createTextNode(e);t.insertNode(i),t.setStartAfter(i),n.removeAllRanges(),n.addRange(t)}}("\n \xb7 "))},ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),l(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){d.current&&d.current.setAttribute("contenteditable","true"),l(!0)},tabIndex:-1,"data-id":n.id,children:n.value}),o&&Object(x.jsx)(G,{onMouseDown:function(){t(n.id)},children:"X"})]})}Y.displayName="List";var Z,$,ee,ne=Y,te=l.b.div(Z||(Z=Object(o.a)(["\n  position: relative;\n  display: inline-block;\n"]))),ie=l.b.button($||($=Object(o.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),re=l.b.blockquote(ee||(ee=Object(o.a)(["\n  font-size: 1.3em;\n  padding: 50px;\n  border: ",";\n\n  background: #f9f9f9;\n\n  &:before {\n    color: #ccc;\n    content: open-quote;\n    font-size: 4em;\n    line-height: 0.1em;\n    margin-right: 0.25em;\n    vertical-align: -0.4em;\n  }\n\n  p {\n    display: inline;\n  }\n"])),(function(e){return e.selected?"1px solid red":"none"}));function ae(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(h.a)(a,2),o=c[0],l=c[1],d=Object(i.useRef)(null);return Object(x.jsxs)(te,{children:[Object(x.jsx)(re,{selected:o,onKeyDown:function(e){"Enter"===e.code&&e.preventDefault()},ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),l(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){d.current&&d.current.setAttribute("contenteditable","true"),l(!0)},tabIndex:-1,"data-id":n.id,children:Object(x.jsx)("p",{children:n.value})}),o&&Object(x.jsx)(ie,{onMouseDown:function(){t(n.id)},children:"X"})]})}ae.displayName="Blockquote";var ce,oe,le,de,ue=ae,se="#424242",be="#737373",me="#4285f4",he=l.b.div(ce||(ce=Object(o.a)(["\n  background-color: ",";\n  color: white;\n\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),me);var fe,pe=l.b.div(oe||(oe=Object(o.a)(["\n  background-color: ",";\n  color: white;\n\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .top {\n  }\n\n  .bottom {\n  }\n"])),me),je=l.b.div(le||(le=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n"]))),ge=l.b.div(de||(de=Object(o.a)([""])));var xe,ve,Oe,ye=l.b.div(fe||(fe=Object(o.a)(["\n  background-color: ",";\n  color: white;\n  min-height: 100%;\n"])),me);var we,Se=l.b.div(xe||(xe=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ke=l.b.div(ve||(ve=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),me),Ee=l.b.div(Oe||(Oe=Object(o.a)(["\n  flex: 2;\n\n  p {\n    color: ",";\n  }\n"])),be);var Ne,Ie,Ce,He=l.b.div(we||(we=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: ",";\n\n  .top {\n  }\n\n  .bottom {\n  }\n"])),be);var De,Fe=l.b.div(Ne||(Ne=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Pe=l.b.div(Ie||(Ie=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),me),Te=l.b.div(Ce||(Ce=Object(o.a)(["\n  flex: 2;\n\n  p {\n    color: ",";\n  }\n"])),be);var Me,Re,qe,Ae=l.b.div(De||(De=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .top {\n    background-color: ",";\n    flex: 1;\n    display: flex;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      display: flex;\n      align-items: flex-end;\n      color: white;\n    }\n  }\n  .bottom {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    flex: 2;\n\n    pre {\n      display: block;\n      width: 100%;\n      height: 100%;\n\n      code {\n        height: 100%;\n      }\n    }\n  }\n"])),me);var Ve,ze,Be,Le=l.b.div(Me||(Me=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Ke=l.b.div(Re||(Re=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: ",";\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n  }\n\n  .paragraphs {\n    flex: 2;\n\n    p {\n    }\n  }\n"])),me),Xe=l.b.div(qe||(qe=Object(o.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  img {\n    max-width: 100%;\n  }\n"])));var Je,Ue=l.b.div(Ve||(Ve=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Qe=l.b.div(ze||(ze=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n    color: ",";\n  }\n\n  p {\n    color: ",";\n    flex: 1;\n  }\n"])),se,be),_e=l.b.div(Be||(Be=Object(o.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  img {\n    max-width: 100%;\n  }\n"])));var Ge,We=l.b.div(Je||(Je=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    max-width: 100%;\n  }\n"])));var Ye,Ze,$e,en=l.b.div(Ge||(Ge=Object(o.a)(["\n  background-color: ",";\n  color: white;\n\n  min-height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  .image {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  }\n"])),me);var nn,tn,rn,an=l.b.div(Ye||(Ye=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),cn=l.b.div(Ze||(Ze=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),me),on=l.b.div($e||($e=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex: 2;\n\n  img {\n    max-width: 100%;\n  }\n"])));var ln=l.b.div(nn||(nn=Object(o.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),dn=l.b.div(tn||(tn=Object(o.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),me),un=l.b.div(rn||(rn=Object(o.a)(["\n  flex: 2;\n\n  ul,\n  li {\n    color: ",";\n    list-style-type: circle;\n    @include margin-left(1rem);\n\n    li {\n      @include margin-bottom(1rem);\n    }\n  }\n"])),be);var sn,bn,mn,hn={singleHeader:function(e){var n=e.children;return n.find((function(e){return"Header"===e.type.displayName}))?Object(x.jsx)(he,{children:Object(x.jsx)("div",{className:"container",children:n})}):Object(x.jsx)(x.Fragment,{})},twoHeaders:function(e){var n=e.children.filter((function(e){return"Header"===e.type.displayName})),t=Object(h.a)(n,2),i=t[0],r=t[1];return i?Object(x.jsxs)(pe,{children:[Object(x.jsx)(je,{children:i}),Object(x.jsx)(ge,{children:r})]}):Object(x.jsx)(x.Fragment,{})},normal:function(e){var n=e.children;return Object(x.jsx)(ye,{children:n})},headerSingleParagraph:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(x.jsxs)(Se,{children:[Object(x.jsx)(ke,{children:t}),Object(x.jsx)(Ee,{children:i})]}):Object(x.jsx)(x.Fragment,{})},headerCodeblock:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(x.jsxs)(Ae,{children:[Object(x.jsx)("div",{className:"top",children:t}),Object(x.jsx)("div",{className:"bottom",children:i})]}):Object(x.jsx)(x.Fragment,{})},headerManyParagraphsImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(x.jsxs)(Le,{children:[Object(x.jsxs)(Ke,{children:[t,Object(x.jsx)("div",{className:"paragraphs",children:r})]}),Object(x.jsx)(Xe,{children:i})]}):Object(x.jsx)(x.Fragment,{})},headerParagraphImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(x.jsxs)(Ue,{children:[Object(x.jsxs)(Qe,{children:[t,r]}),Object(x.jsx)(_e,{children:i})]}):Object(x.jsx)(x.Fragment,{})},image:function(e){var n=e.children.find((function(e){return"Image"===e.type.displayName}));return n?Object(x.jsx)(We,{children:n}):Object(x.jsx)(x.Fragment,{})},manyImages:function(e){var n=e.children,t=n.length>=2&&n.length<=4?"50%":n.length>=5&&n.length<=7?"33.3%":n.length>7?"25%":0;return Object(x.jsx)(en,{children:n.map((function(e,n){return Object(x.jsx)("div",{className:"image",style:{flex:"".concat(t)},children:e},n)}))})},headerImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName}));return t?Object(x.jsxs)(an,{children:[Object(x.jsx)(cn,{children:t}),Object(x.jsx)(on,{children:i})]}):Object(x.jsx)(x.Fragment,{})},headerList:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"List"===e.type.displayName}));return t?Object(x.jsxs)(ln,{children:[Object(x.jsx)(dn,{children:t}),Object(x.jsx)(un,{children:i})]}):Object(x.jsx)(x.Fragment,{})},blockquote:function(e){var n=e.children.find((function(e){return"Blockquote"===e.type.displayName}));return n?Object(x.jsxs)(He,{children:[Object(x.jsx)("div",{className:"top",children:n}),Object(x.jsx)("div",{className:"bottom"})]}):Object(x.jsx)(x.Fragment,{})},headerManyParagraphs:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(x.jsxs)(Fe,{children:[Object(x.jsx)(Pe,{children:t}),Object(x.jsx)(Te,{children:i})]}):Object(x.jsx)(x.Fragment,{})}},fn=l.b.div(sn||(sn=Object(o.a)(["\n  width: 80vw;\n"]))),pn=l.b.div(bn||(bn=Object(o.a)(["\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 */\n  position: relative;\n"]))),jn=l.b.div(mn||(mn=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  a {\n    color: #51c2f7;\n  }\n\n  // taken from https://websemantics.uk/tools/responsive-font-calculator/\n  @media (min-width: 12em) {\n    font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));\n    min-height: 0vw;\n  }\n  @media (min-width: 120em) {\n    font-size: 1.5rem;\n  }\n"])));function gn(e,n){var t=Object(i.useContext)(g),r=t.getCurrentSlide,a=t.getElementsForSlide,c=t.removeElement,o=t.changeElementValue,l=hn[r().state];return Object(x.jsx)(fn,{children:Object(x.jsx)(pn,{children:Object(x.jsx)(jn,{className:r().state,ref:n,children:Object(x.jsx)(l,{children:a(r().number).map((function(e){switch(e.type){case"heading":return Object(x.jsx)(D,{removeElement:c,changeElementValue:o,level:e.level,item:e},e.id);case"paragraph":return Object(x.jsx)(V,{item:e,removeElement:c,changeElementValue:o},e.id);case"image":return Object(x.jsx)(Q,{item:e,removeElement:c},e.id);case"list":return Object(x.jsx)(ne,{item:e,removeElement:c,changeElementValue:o},e.id);case"blockquote":return Object(x.jsx)(ue,{item:e,removeElement:c,changeElementValue:o},e.id);default:return Object(x.jsx)(x.Fragment,{})}}))})})})})}var xn,vn,On,yn,wn,Sn=Object(i.forwardRef)(gn),kn=Object(l.a)(xn||(xn=Object(o.a)(['\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  body {\n    font-family: "Roboto", sans-serif;\n  }\n  ']))),En=l.b.div(vn||(vn=Object(o.a)([""]))),Nn=l.b.div(On||(On=Object(o.a)(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"]))),In=l.b.div(yn||(yn=Object(o.a)([""]))),Cn=l.b.div(wn||(wn=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));var Hn=function(){var e=function(){var e=Object(i.useRef)(null),n=Object(i.useState)(0),t=Object(h.a)(n,2),r=t[0],a=t[1],c=Object(i.useState)([""]),o=Object(h.a)(c,2),l=o[0],s=o[1],f=Object(i.useState)([]),g=Object(h.a)(f,2),x=g[0],v=g[1],O=Object(i.useState)(["normal"]),y=Object(h.a)(O,2),w=y[0],S=y[1];function k(){return(k=Object(m.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v([].concat(Object(u.a)(x),[n])),j[w[n.slide]]?(t=j[w[n.slide]].add(n.type))&&S(w.map((function(e,i){return i===n.slide?t:e}))):S(w.map((function(e,t){return t===n.slide?"normal":e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function n(){return(n=Object(m.a)(b.a.mark((function n(){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.current){n.next=5;break}return n.next=3,p()(e.current);case 3:t=n.sent,s(l.map((function(e,n){return n===r?t.toDataURL():e})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r,x]),{getNumbersOfSlide:function(){return w.length},getThumbnails:function(){return l},getCurrentSlide:function(){return{number:r,state:w[r]}},ref:e,addElement:function(e){return k.apply(this,arguments)},removeElement:function(e){var n=x.find((function(n){return n.id===e}));if(n)if(v(Object(u.a)(x.filter((function(n){return n.id!==e})))),j[w[n.slide]]){var t=j[w[n.slide]].remove(n&&n.type);t&&S(w.map((function(e,i){return i===n.slide?t:e})))}else S(w.map((function(e,t){return t===n.slide?"normal":e})))},changeElementValue:function(e,n){v(x.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{value:n}):t})))},changeCurrentSlide:function(e){a(e)},getElementsForSlide:function(e){return x.filter((function(n){return n.slide===e}))},addSlide:function(){S([].concat(Object(u.a)(w),["normal"])),a(r+1),s([].concat(Object(u.a)(l),[""]))},removeSlide:function(e){v(Object(u.a)(x.filter((function(n){return n.slide!==e})).map((function(n){return n.slide>e?Object(d.a)(Object(d.a)({},n),{},{slide:n.slide-1}):n})))),S(Object(u.a)(w.filter((function(n,t){return t!==e})))),a(r===l.length-1?r-1:r),s(l.filter((function(e,n){return n!==r})))}}}(),n=e.ref,t=e.getCurrentSlide,r=e.addElement,a=e.changeCurrentSlide,c=e.removeSlide,o=e.removeElement,l=e.changeElementValue,s=e.getElementsForSlide,f=e.addSlide,O=e.getThumbnails,y=e.getNumbersOfSlide;return Object(x.jsxs)(g.Provider,{value:{getNumbersOfSlide:y,getCurrentSlide:t,getThumbnails:O,addElement:r,removeElement:o,changeElementValue:l,removeSlide:c,addSlide:f,getElementsForSlide:s,changeCurrentSlide:a},children:[Object(x.jsx)(kn,{}),Object(x.jsxs)(Cn,{children:[Object(x.jsx)(In,{children:Object(x.jsx)(v,{})}),Object(x.jsx)(Nn,{children:Object(x.jsx)(Sn,{ref:n})}),Object(x.jsx)(En,{children:Object(x.jsx)(S,{})})]})]})},Dn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Hn,{})}),document.getElementById("root")),Dn()}},[[28,1,2]]]);
//# sourceMappingURL=main.2612b5bd.chunk.js.map