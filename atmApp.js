//console.log('wroking!');
window.noteAvailability={
    numOf2000 : 0, 
    numOf500 : 0, 
    numOf200 : 0, 
    numOf100  : 0, 
    numOf50 : 0, 
    numOf20 : 0, 
    numOf10 : 0, 
    numOf5 : 0, 
    numOf2 : 0, 
    numOf1: 0

}

appendNotesVal();

document.getElementById('amountVal').addEventListener('click', function(){
    
    document.querySelector('.errorbox').classList.add('hidden');

})
document.getElementById('getMoney').addEventListener('click', function(){
    var totalAmount = document.getElementById('amountVal').value;
    if(isNaN(totalAmount) ){
        document.querySelector('.errorbox').classList.remove('hidden');
        document.querySelector('.errorbox').innerText = 'not a number';
    }
    else{
        document.querySelector('.errorbox').classList.add('hidden');
    //set initial value for all on click
    window.noteAvailability.numOf1 = 0;
    window.noteAvailability.numOf2 = 0;
    window.noteAvailability.numOf5 = 0;
    window.noteAvailability.numOf10 = 0;
    window.noteAvailability.numOf20 = 0;
    window.noteAvailability.numOf50 = 0;
    window.noteAvailability.numOf100 = 0;
    window.noteAvailability.numOf200 = 0;
    window.noteAvailability.numOf500  = 0;
    window.noteAvailability.numOf2000 = 0;
   // alert('working');    
    //console.log('wroking!');
    
    
    //max not object value update
    
    maxNotCheck(totalAmount);

    var remNotes1 = checkRemainders(totalAmount);   

    if(remNotes1 > 0) maxNotCheck(remNotes1);
    var remNotes2 = checkRemainders(remNotes1);

    if(remNotes2 > 0) maxNotCheck(remNotes2);
    var remNotes3 = checkRemainders(remNotes2);
    

    if(remNotes3 > 0) maxNotCheck(remNotes3);
    var remNotes4 = checkRemainders(remNotes3);

    if(remNotes4 > 0) maxNotCheck(remNotes4);
    var remNotes5 = checkRemainders(remNotes4);

    if(remNotes5 > 0) maxNotCheck(remNotes5);
    var remNotes6 = checkRemainders(remNotes5);

    if(remNotes6 > 0) maxNotCheck(remNotes6);
    var remNotes7 = checkRemainders(remNotes6);

    if(remNotes7 > 0) maxNotCheck(remNotes7);
    var remNotes8 = checkRemainders(remNotes7);

    if(remNotes8 > 0) maxNotCheck(remNotes8);
    var remNotes9 = checkRemainders(remNotes8);

    if(remNotes9 > 0) maxNotCheck(remNotes9);
    var remNotes10 = checkRemainders(remNotes9);

    if(remNotes10 > 0) maxNotCheck(remNotes10);
    
    

    appendNotesVal();

    }
})
function maxNotCheck(amountToCheck){
    if(amountToCheck / 2000 > 1 ) {    
        window.noteAvailability.numOf2000 = parseInt(amountToCheck/2000);
    }
    else if(amountToCheck / 500 > 1 ) { 
        window.noteAvailability.numOf500 = parseInt(amountToCheck / 500);
    }
    else if(amountToCheck / 200 > 1 ) { 
        window.noteAvailability.numOf200 = parseInt(amountToCheck / 200);
    }
    else if(amountToCheck / 100 > 1 ) { 
        window.noteAvailability.numOf100 = parseInt(amountToCheck / 100);
    }
    else if(amountToCheck / 50 > 1 )  {
        window.noteAvailability.numOf50 = parseInt(amountToCheck / 50);
    }
    else if(amountToCheck / 20 > 1 ) {
        window.noteAvailability.numOf20 = parseInt(amountToCheck / 20);
    }
    else if(amountToCheck / 10 > 1 ) { 
        window.noteAvailability.numOf10 = parseInt(amountToCheck / 10);
    }
    else if(amountToCheck / 5 > 1 )  {
        window.noteAvailability.numOf5 = parseInt(amountToCheck / 5);
    }
    else if(amountToCheck / 2 > 1 ) {
        window.noteAvailability.numOf2 = parseInt(amountToCheck / 2);
    }
    else {
        window.noteAvailability.numOf1 = parseInt(amountToCheck / 1);
    }

}

function checkRemainders(remainAmount){
    if(remainAmount / 2000 > 1 ) {    
        remainNotes = remainAmount % 2000;
    }
    else if(remainAmount / 500 > 1 ) { 
        remainNotes = remainAmount % 500;
    }
    else if(remainAmount / 200 > 1 ) { 
        remainNotes = remainAmount % 200;
    }
    else if(remainAmount / 100 > 1 ) { 
        remainNotes = remainAmount % 100;
    }
    else if(remainAmount / 50 > 1 )  {
        remainNotes = remainAmount % 50;
    }
    else if(remainAmount / 20 > 1 ) {
        remainNotes = remainAmount % 20;
    }
    else if(remainAmount / 10 > 1 ) { 
        remainNotes = remainAmount % 10;
    }
    else if(remainAmount / 5 > 1 )  {
        remainNotes = remainAmount % 5;
    }
    else if(remainAmount / 2 > 1 ) {
        remainNotes = remainAmount % 2;
    }
    else {
        remainNotes = remainAmount % 1;
    }
    return remainNotes;

}


function appendNotesVal(){
var totalNotes = window.noteAvailability.numOf1 +
                    window.noteAvailability.numOf2 +
                    window.noteAvailability.numOf5 +
                    window.noteAvailability.numOf10 +
                    window.noteAvailability.numOf20 +
                    window.noteAvailability.numOf50 +
                    window.noteAvailability.numOf100 +
                    window.noteAvailability.numOf200 +
                    window.noteAvailability.numOf500 +
                    window.noteAvailability.numOf2000;
var totalNotesVal = window.noteAvailability.numOf1*1 +
                    window.noteAvailability.numOf2*2 +
                    window.noteAvailability.numOf5*5 +
                    window.noteAvailability.numOf10*10 +
                    window.noteAvailability.numOf20*20 +
                    window.noteAvailability.numOf50*50 +
                    window.noteAvailability.numOf100*100 +
                    window.noteAvailability.numOf200*200 +
                    window.noteAvailability.numOf500*500 +
                    window.noteAvailability.numOf2000*2000;
 document.getElementById('rs1').innerText = window.noteAvailability.numOf1;
 document.getElementById('rs2').innerText = window.noteAvailability.numOf2;
 document.getElementById('rs5').innerText = window.noteAvailability.numOf5;
 document.getElementById('rs10').innerText = window.noteAvailability.numOf10;
 document.getElementById('rs20').innerText = window.noteAvailability.numOf20;
 document.getElementById('rs50').innerText = window.noteAvailability.numOf50;
 document.getElementById('rs100').innerText = window.noteAvailability.numOf100;
 document.getElementById('rs200').innerText = window.noteAvailability.numOf200;
 document.getElementById('rs500').innerText = window.noteAvailability.numOf500;
 document.getElementById('rs2000').innerText = window.noteAvailability.numOf2000;
 document.getElementById('totalNotes').innerText = totalNotes;
 document.getElementById('totalValue').innerText = totalNotesVal;
}

