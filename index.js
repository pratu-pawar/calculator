
let screen = document.getElementById('screen');
buttons = document .querySelector('button');
let screenValue = '';
for(item of buttons){ 
    item.addEventlistener('click', (e) =>{ 
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText== 'X'){ 
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue
            
        }
        else if (buttonText =='C'){ 
            screenValue = "=";
            screen.value = screenValue;
        }
        else if (buttonText== '='){ 
            screen.value = evel(screenValue)

        }
        else{ 
            screenValue +=buttonText;
            screen.value = screenValue;
        }

    })
}
