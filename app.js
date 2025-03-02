

function insertEmailAdress( emailAdress){
    const emailTag = document.querySelector('#myemail');
    emailTag.href = emailAdress;

}

insertEmailAdress('mailto:mochachogarex@gmail.com')