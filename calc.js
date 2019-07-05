var expression = 0;
function one(){
    document.getElementById('expr').value += 1; 
}

function two(){
    document.getElementById('expr').value += 2; 
}

function three(){
    document.getElementById('expr').value += 3; 
}

function four(){
    document.getElementById('expr').value += 4; 
}

function five(){
    document.getElementById('expr').value += 5; 
}

function six(){
    document.getElementById('expr').value += 6; 
}

function seven(){
    document.getElementById('expr').value += 7; 
}

function eight(){
    document.getElementById('expr').value += 8; 
}

function nine(){
    document.getElementById('expr').value += 9; 
}

function zero(){
    document.getElementById('expr').value += 0; 
}

function clearText(){
    document.getElementById('expr').value = ''; 
}

function add(){
    document.getElementById('expr').value += '+'; 
}

function subtract(){
    document.getElementById('expr').value += '-'; 
}

function multiply(){
    document.getElementById('expr').value += '*'; 
}

function divide(){
    document.getElementById('expr').value += '/'; 
}

function equalsTo(){
    document.getElementById('expr').value = eval(document.getElementById('expr').value);
}