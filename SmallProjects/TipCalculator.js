let tipCalButton = document.getElementById("btn-cal"),
    clearFormButton = document.getElementById("clear-form"),
    billAmountText = document.getElementById('bill-amount'),
    noOfPeopleText = document.getElementById('no-people'),
    experienceText = document.getElementById('service-exp'),
    totalTipDisplay = document.getElementById('final-tip'),
    perPersonShareDisplay = document.getElementById('final-share'),
    errorMessage = document.getElementById('error-msg');

    errorMessage.style.display = 'none';
    totalTipDisplay.style.display = 'none';
    perPersonShareDisplay.style.display = 'none';
    tipCalButton.disabled = true;


tipCalButton.addEventListener('click', function(){

    errorMessage.style.display = 'none';
    let totalBill = Number(billAmountText.value),
        noOfPeople = Number(noOfPeopleText.value),
        tipPercent = CalculateTip(),
        totalTip = 0,
        perPersonShare = 0;
        debugger;
        totalTip = (totalBill * tipPercent)/100;
        perPersonShare = (totalBill + totalTip)/noOfPeople;

        ShowResult(perPersonShare, totalTip);
});

function EnableCalculateBtn(){
    if (billAmountText.value != "" && noOfPeopleText.value !="") 
        tipCalButton.disabled = false;
    else
        tipCalButton.disabled = true;
}

function ShowResult(perPersonShare, totalTip){
    if (isNaN(perPersonShare) || isNaN(totalTip) || Number(noOfPeopleText.value) <= 0 || Number(billAmountText.value) < 0) {
        totalTipDisplay.style.display = 'none';
        perPersonShareDisplay.style.display = 'none';
        errorMessage.style.display = 'inline';
    }
    else
    {
        totalTipDisplay.style.display = 'inline';
        perPersonShareDisplay.style.display = 'inline';

        perPersonShareDisplay.innerText = 'Share per person (Including tip): '+perPersonShare;
        totalTipDisplay.innerText = 'Tip : '+totalTip;
    }
}

function ClearForm(){
    document.getElementById('tipCalculator-Form').reset();
    EnableCalculateBtn();
     totalTipDisplay.style.display = 'none';
     perPersonShareDisplay.style.display = 'none';
     errorMessage.style.display = 'none';
}

function CalculateTip(){
    let exp = experienceText.value,
        tip = 0;

    switch (exp) {
        case '1':
            tip = 10;
            break;
        case '2':
            tip = 8;
            break;
        case '3':
            tip = 6;
            break;
        case '4':
            tip = 4;
            break;
        case '5':
            tip = 2;
            break;
        case '6':
            tip = 0;
            break;
        default:
            tip = 0;
            break;
    }
    return tip;
}