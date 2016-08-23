var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var timeField=''; 
var h=1; 
var m=1; 
var tm=1; 
var s=0; 
var ts=0; 
var ms=0; 
var show=true; 
var init=0; 
var ii=0; 


function reset() { 
clearTimeout(clocktimer); 
h=1;m=1;tm=1;s=0;ts=0;ms=0; 
init=0;show=true; 
timeField='00:00:00.00'; 
document.StopWatch.Watch.value=timeField; 
var CF = document.StopWatch; 
ii = 0; } 

function upTime() { 
var cdateObj = new Date(); 
var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 

if (t>999) { s++; } 

if (s>=(m*base)) { ts=0; 
m++; } else { 
ts=parseInt((ms/100)+s); 
if(ts>=base) { ts=ts-((m-1)*base); } } 

if (m>(h*base)) { tm=1; 
h++; } else { 
tm=parseInt((ms/100)+m); 
if(tm>=base) { tm=tm-((h-1)*base); } } 

ms = Math.round(t/10); 
if (ms>99) {ms=0;} 
if (ms==0) {ms='00';} 
if (ms>0&&ms<=9) { ms = '0'+ms; } 

if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
dm=tm-1; 
if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
dh=h-1; 
if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 

timeField = dh + ':' + dm + ':' + ds + '.' + ms; 
if (show==true) { document.StopWatch.Watch.value = timeField; } 

clocktimer = setTimeout("upTime()",1); } 

function findTIME() { 
if (init==0) {  dateObj = new Date(); 
upTime(); 
init=1; 
} else { if(show==true) { 
show=false; 
} else { show=true; } } } 


document.getElementById('btn_start').addEventListener("click", findTIME);
document.getElementById('btn_stop').addEventListener("click", reset);
