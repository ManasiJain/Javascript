function Response(clicked_object){
    debugger;
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
