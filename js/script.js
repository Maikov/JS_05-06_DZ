var clocktimer, dateObj, dh, dm, ds, ms; 
var timeField=''; 
var h = 1; 
var m = 1; 
var tm = 1; 
var s = 0; 
var ts = 0; 
var ms = 0; 
var show = true; 
var init = 0; 
var ii = 0; 

function reset() { 
  clearTimeout(clocktimer); 
  init = 0; show = true; 
  timeField = '00:00:00.000'; 
  document.StopWatch.Watch.value=timeField; 
  var CF = document.StopWatch; 
  ii = 0; } 

function upTime() { 
  var cdateObj = new Date(); 
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s*1000); 
  var ms = Math.floor((t % 1000)) + 000;
  var ds = Math.floor((t / 1000) % 60);
  var dm = Math.floor((t / 1000 / 60) % 60);
  var dh = Math.floor((t / (1000 * 60 * 60)) % 24);
  ms = (ms < 10 ? '00' + ms : ms);
  ms = (ms < 100 ? '0' + ms : ms);
  ds = (ds < 10 ? '0' + ds : ds);
  dm = (dm < 10 ? '0' + dm : dm);
  dh = (dh < 10 ? '0' + dh : dh);
  timeField = dh + ':' + dm + ':' + ds + '.' + ms; 
  if (show == true) { document.StopWatch.Watch.value = timeField; } 
  clocktimer = setTimeout("upTime()",1); } 

function findTIME() { 
  if (init == 0) { dateObj = new Date(); 
  upTime(); 

  init=1; 
  } else { if(show == true) { 
  	
  show = false; 

  } else { show = true; } } 
} 

document.getElementById('btn_start').addEventListener("click", findTIME);
document.getElementById('btn_stop').addEventListener("click", reset);
