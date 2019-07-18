let inputName = document.getElementById('name'),
    resultName = document.getElementById('result_name'),
    resultform = document.getElementById('result_form'),
    resultScore = document.getElementById('result_score')
    submitButton = document.getElementById('btn_submit'),
    inputForm = document.getElementById('input_form');

    resultform.style.display = 'none';

submitButton.addEventListener('click', function(){

    let finalScore = CalculateScore();
    resultName.innerText += " " + inputName.value + "!";
    resultScore.innerText += " " + finalScore;
    inputForm.style.display = 'none';
    resultform.style.display = 'inline';
    
});

function CalculateScore(){
    var colours = document.getElementsByName('colour');
    var music = document.getElementsByName('music');
    var movie = document.getElementsByName('movie');
    var passtime = document.getElementsByName('passtime');
    var describe = document.getElementsByName('describe');
    let score = 0;

    for (let index = 0; index < colours.length; index++) {
        if(colours[index].checked)
            score+=Number(colours[index].value);    
        }    
        
    for (let index = 0; index < music.length; index++) {
        if(music[index].checked)
            score+=Number(music[index].value);    
        }    

    for (let index = 0; index < movie.length; index++) {
        if(movie[index].checked)
            score+=Number(movie[index].value);    
        }    

    for (let index = 0; index < passtime.length; index++) {
        if(passtime[index].checked)
            score+=Number(passtime[index].value);    
        }    

    for (let index = 0; index < describe.length; index++) {
        if(describe[index].checked)
            score+=Number(describe[index].value);    
        }    
    return score;
}
