'use strict';
//footer for AAF 
let
getEle,
query,

createDate,leDate,
datum,datumN,
footerCreated,docEdited,
effortSpan,
projectStartDate,ongoingProjDate,

whatWorked,whatFailed,//buttons
ww,wf,//query selector all

disableFailed,enableFailed,disableWorked,enableWorked,//toggle

filter;

//Date footer

 datum    = new Date('15 January 2019'); //The day thought was captured
datumN    = new Date('08 November 2019');//Latest Edit

getEle    = (id) => document.getElementById(id);
 query    = (selector) => document.querySelectorAll(selector);

footerCreated = () => 
{
    effortSpan              = getEle('effortSpan');
    createDate              = getEle('createDate');
    leDate                  = getEle('leDate');
    projectStartDate        = new Date('25 March 2018');
    ongoingProjDate         = new Date();
    createDate.innerHTML    = `Created on: ${datum.toDateString()}`;
    leDate.innerHTML        = `Last edit: ${datumN.toDateString()}`;
    effortSpan.innerHTML    = `Year: ${projectStartDate.getFullYear()} - ${ongoingProjDate.getFullYear()}`;
    return effortSpan, createDate, leDate, projectStartDate, ongoingProjDate;
}

//DOM load complete
if (document.readyState === 'complete') {
    document.addEventListener('DOMContentLoaded', footerCreated);
}else{
    footerCreated();
}

//Filter results visibility
whatWorked    = getEle('ww');
whatFailed    = getEle('wf');

        ww    = query('.failed');
        wf    = query('.worked');

filter = {
    hideFailed: () =>{
        for(var i = 0; i<ww.length; i++){
            ww[i].parentElement.parentElement.classList.toggle('hide')
          }
          if (ww[0].parentNode.parentElement.classList.contains('hide')) {
              filter.disableFailed()
          } else if(!ww[0].parentNode.parentElement.classList.contains('hide')){
              filter.enableFailed()
          }
    },
    
    hideWorked: () =>{
        for(var i = 0; i<wf.length; i++){
            wf[i].parentNode.parentElement.classList.toggle('hide')
          }
          if (wf[0].parentNode.parentElement.classList.contains('hide')) {
            filter.disableWorked()
        } else if(!wf[0].parentNode.parentElement.classList.contains('hide')){
            filter.enableWorked()
        }

    },

    disableFailed: () => {
        whatFailed.setAttribute('disabled', true);
        whatFailed.classList.toggle('disabledState');
        whatWorked.innerText    = 'Reset';
    },

    enableFailed: () => {
        whatFailed.removeAttribute('disabled');
        whatFailed.classList.toggle('disabledState');
        whatWorked.innerText    = 'Show What Worked';
    },

    disableWorked: () => {
        whatWorked.setAttribute('disabled', true);
        whatWorked.classList.toggle('disabledState');
        whatFailed.innerText    = 'Reset';
    
    },

    enableWorked: () => {
        whatWorked.removeAttribute('disabled');
        whatWorked.classList.toggle('disabledState');
        whatFailed.innerText    = 'Show What Failed';
    }

}

whatWorked.addEventListener( 'click', filter.hideFailed);
whatFailed.addEventListener( 'click', filter.hideWorked);

//https://devhints.io/dom-selection


//test capture error
const attempt = (fn,...arg)=>{
    try{
        return fn(...arg);//returns a function with arguments comma separated
    }catch(e){
        return e instanceof Error ? e   : new Error(e)//after execution of the function, returns the caught error from ternary operator.
    }
}

var jh       = (selector) => document.querySelectorAll(selector);

var caughtError = [];
var elements = attempt(jh, 'footer', 'effortSpan');//function with arguments comma separated
if (elements instanceof Error) {//if this statement is true
	
	caughtError.push(elements);//create an empty array
};
console.log(elements.item([0][1]).innerText);