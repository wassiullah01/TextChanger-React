(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},27:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(13),r=t.n(o),c=(t(25),t(7));t(27);function d(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.msg),n.a.createElement("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))))}function s(e){var a={color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"danger"===e.mode?"#e54b4b":"white"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black"}},n.a.createElement("h1",null,"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne",style:a},n.a.createElement("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("b",null," Analyze your text"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextChanger gives you a way to analyze your text quickly and efficiently"))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("b",null,"Free to use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextChanger is a free character counter tool that provides instant character count & word count statics for a given text. TextChanger reports the number of words and characters. Thus it is suitable for writing text with words/characters limit."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("b",null,"Browser Compatible"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This web counter software works in any browser such as Chrome,Firewall,Opera,Internet Explorer etc. It suits to count characters in Facebook,Blog,books,excel documents,pdf documnet,essays etc."))))))}function i(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("a",{className:"navbar-brand ml-2 text-".concat("light"===e.mode?"dark":"light"),href:"/home"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link text-".concat("light"===e.mode?"dark":"light"),href:"/home"},"Home",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link text-".concat("light"===e.mode?"dark":"light"),href:"/about"},e.AboutText))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.RedMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label mr-3",htmlFor:"flexSwitchCheckDefault"},e.buttontext)),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label mr-3",htmlFor:"flexSwitchCheckDefault"},e.btntext))))))}function m(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black"}},e.heading),n.a.createElement("div",{className:"form-group mt-5",style:{color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black"}},n.a.createElement("textarea",{placeholder:"Enter any text",className:"form-control",style:{backgroundColor:"dark"===e.mode?"#13466e":"danger"===e.mode?"#C0392B":"white",color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black"},value:o,onChange:function(e){r(e.target.value)},id:"mybox",rows:"9"}),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("Converted to Uppercase","primary")}},"Convert to UpperCase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("Converted to Lowercase","primary")}},"Convert to Lowercase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),onClick:function(){r(""),e.showAlert("Text is cleared","primary")}},"Clear All"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),"data-toggle":"tooltip","data-placement":"top",title:"Download file",onClick:function(){var a=document.createElement("a"),t=document.getElementById("mybox").value,l=new Blob([t],{type:"text/plain"});a.href=URL.createObjectURL(l),a.download="myfile.txt",document.body.appendChild(a),a.click(),e.showAlert("File is downloaded","primary")}},"Download"),n.a.createElement("button",{disabled:0===o.length,id:"popup",className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),"data-toggle":"tooltip","data-placement":"top",title:"Copy",onClick:function(){var e=document.getElementById("mybox").value;navigator.clipboard.writeText(e),document.getElementById("forpopup").classList.toggle("show")}},"Copy",n.a.createElement("span",{className:"popuptext",id:"forpopup"},"Copied!")),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat("dark"===e.mode?"secondary":"danger"===e.mode?"danger":"outline-primary"," mt-2 ml-2"),onClick:function(){var a=o.split(/[ ]+/);r(a.join(" ")),e.showAlert("Extra spaces are removed","primary")}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"danger"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,o.split(/\s+/).filter(function(e){return""!==e}).length," words and ",o.length," characters "),n.a.createElement("p",null,.008*o.split("").filter(function(e){return""!==e}).length," minutes to read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter in textBox above to preview here"),n.a.createElement("p",null,o)))}i.defaultProps={title:"Company Name",AboutText:"About My Company"};var u=t(14),b=t(0);var h=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)("Light Mode"),h=Object(c.a)(r,2),g=h[0],p=h[1],E=Object(l.useState)("Light Mode"),y=Object(c.a)(E,2),w=y[0],v=y[1],f=Object(l.useState)(null),k=Object(c.a)(f,2),x=k[0],C=k[1],N=function(e,a){C({msg:e,type:a}),setTimeout(function(){C(null)},3e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,null,n.a.createElement(i,{title:"Text Changer",AboutText:"About Us",mode:t,RedMode:function(){"light"===t?(o("danger"),document.body.style.backgroundColor="#C0392B",v("Red Mode"),N("Red mode enables","light")):(o("light"),v("Light Mode"),document.body.style.backgroundColor="white",N("Light mode enables","dark"))},toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#042743",p("Dark Mode"),N("Dark mode enables","light")):(o("light"),p("Light Mode"),document.body.style.backgroundColor="white",N("Light mode enables","dark"))},btntext:g,buttontext:w}),n.a.createElement(d,{alert:x}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{path:"/TextChanger-React/home"},n.a.createElement(m,{showAlert:N,heading:"Enter your text to analyze below",mode:t})),n.a.createElement(b.a,{path:"/TextChanger-React/about"},n.a.createElement(s,{mode:t}))))))},g=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,37)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),g()}},[[16,3,2]]]);
//# sourceMappingURL=main.41a8e263.chunk.js.map