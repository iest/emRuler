# emRuler
*A super simple em unit ruler.*

![Screenshot](screenshot.png)

## Instructions

1. Copy the following javascript:
`javascript:(function(){function c(c){b.innerHTML=Math.round(c/a)+"em"}var b,a=16;b=document.createElement("div"),document.body.appendChild(b),b.setAttribute("style",'position:fixed;bottom:0;right:0;background:#1abc9c;color:#34495e;padding:.5em;font-family:"Futura"');var d=document.body.offsetWidth;c(d),window.onresize=function(){d=document.body.offsetWidth,c(d)}})();`
2. Create a new bookmark
3. Paste in the javascript to the address field. (You might have to add a dummy bookmark first, then go back and edit it)
4. ???
5. PROFIT


## Caveats
Since there's no reliable way to figure out the body font size of the browser, it gets hard coded right at the top of `emRuler.js`, as `bodyFontSize`.

(Most browsers have 16px as the default, so that's what it defaults to).


Think this is great/terrible? Let me know on twitter [@iestynw](http://twitter.com/iestynw).
