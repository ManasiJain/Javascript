let inputname = document.getElementById('input_name'),
    formFeedBack = document.getElementById('form_feedback'),
    formThankyou = document.getElementById('form_thankyou'),
    thankyouText = document.getElementById('thankyou'),
    btnSubmit = document.getElementById('btn_submit');

function Response(clicked_object){
    let firedButton =  clicked_object.getAttribute('value');
    let parentElementId = clicked_object.parentNode.id;

    switch (parentElementId) {
        case 'ambience-option':
            document.getElementById('ambience-result').innerText = firedButton;
            break;
        case 'food-option':
            document.getElementById('food-result').innerText = firedButton;
            break;
        case 'service-option':
            document.getElementById('service-result').innerText = firedButton;
            break;   
        case 'overall-option':
            document.getElementById('overall-result').innerText = firedButton;
            break;  
        default:
            break;
    }
}

btnSubmit.addEventListener('click', function(){
    thankyouText.innerText += " " + inputname.value;
    formThankyou.style.display = 'inline';
});
