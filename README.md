# emRuler
*A super simple em unit ruler.*

![Screenshot](screenshot.png)

## Instructions

Firstly, copy the following script:

`javascript:(function(){function c(c){b.innerHTML=Math.round(c/a)+"em"}var b,a=16;b=document.createElement("div"),document.body.appendChild(b),b.setAttribute("style",'position:fixed;bottom:0;right:0;background:#1abc9c;color:#34495e;padding:.5em;font-family:"Futura"');var d=document.body.offsetWidth;c(d),window.onresize=function(){d=document.body.offsetWidth,c(d)}})();`
(or grab it from [here](https://raw.github.com/iest/emRuler/master/bookmarklet.js))

2. Create a new bookmark
3. Paste in the javascript to the address field. (You might have to add a dummy bookmark first, then go back and edit it)
4. ???
5. PROFIT


## Caveats
Since there's no reliable way to figure out the body font size of the browser, it's hard coded to 16px. Change the variable `a` in the bookmarklet if you want to change this.


Think this is great/terrible? Let me know on twitter [@_iest](http://twitter.com/_iest).
