let t=null;const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");console.log(e),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(){e.removeAttribute("disabled"),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.42855944.js.map