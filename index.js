let [miliseconds, seconds, minutes, hours ] = [0, 0, 0, 0] ;
let displaytime = document.getElementById("display");
let displaylaptime = document.getElementById("displaylaptime");
let timer = null;

function stopwatch(){
    miliseconds++;{
        if(miliseconds == 100){
            miliseconds = 0;
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                }
            }
        }
    }
    h = hours < 10 ? "0" + hours : hours ;
    m = minutes < 10 ? "0" + minutes : minutes ;
    s = seconds < 10 ? "0" + seconds : seconds ;
    ms = miliseconds < 10 ? "0" + miliseconds : miliseconds;


    displaytime.innerHTML = h +":"+ m +":"+ s +":"+ ms;
}
function watchstart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    [miliseconds, seconds, minutes, hours ] = [0, 0, 0, 0] ;
    displaytime.innerHTML = " 00 : 00 : 00 : 00 ";
}

function timelap(){
        displaylaptime.innerHTML = h +":"+ m +":"+ s +":"+ ms ;
}
