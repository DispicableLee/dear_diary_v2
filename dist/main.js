!function(){"use strict";var e;e=class{constructor(e){this.ele=e,this.ele.innerHTML="<h1>its alive!</h1>",this.ele.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.ele.children[0].innerText="Ouch"}},document.addEventListener("DOMContentLoaded",(()=>{console.log("loaded");const n=document.getElementById("main");new e(n)}))}();
//# sourceMappingURL=main.js.map