javascript:function toEms(a){emRuler.innerHTML=Math.round(a/bodyFontSize)+"em"}if(document.querySelector(".emRuler")){var oldEmRuler=document.querySelector(".emRuler");oldEmRuler.parentNode.removeChild(oldEmRuler)}else{var bodyFontSize=16,emRuler;emRuler=document.createElement("div"),emRuler.classList.add("emRuler"),document.body.appendChild(emRuler);var style="position:fixed;bottom:0;right:0;background:#1abc9c;color:#34495e;padding:.5em;font-family:'Futura'";emRuler.setAttribute("style",style);var width=document.body.offsetWidth;toEms(width),window.onresize=function(){width=document.body.offsetWidth,toEms(width)}}