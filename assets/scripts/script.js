let mainResult = document.querySelector('.main_result');
let mainOutList = document.querySelector('.main_out-list');
let divAlert = document.querySelectorAll('.alert');

divAlert[1].style.transform = 'translateX(0)'

let infoBtn = document.querySelector('.info_btn')
infoBtn.addEventListener('click', ()=> {
    divAlert[1].style.transform = 'translateX(-100vw)'
})

/* Arrow generator of random numbers */ 
let randomList = [];
randomList[0] = Math.floor(Math.random() * 10);

while (randomList.length < 4) {
    let newRandom = Math.floor(Math.random() * 10);    
    if (newRandom !== randomList[0] && newRandom !== randomList[1] && newRandom !== randomList[2]) {
        randomList.push(newRandom)
    } else {
        console.log('Сожалею но число ' + newRandom + ' уже есть. ');
    }
    console.log(randomList);
}

/* Function get input data and search error */
let btn = document.querySelector(".main_btn");
btn.addEventListener('click', btnFunction)

function btnFunction() {
    /* Get data from input */
    let row = document.querySelectorAll(".main_input");
    let input = [
        Math.abs(row[0].value),
        Math.abs(row[1].value),
        Math.abs(row[2].value),
        Math.abs(row[3].value),
    ]

    let isError = false;
    let errorType = ''

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        for (let temp = 0; temp < input.length; temp++) {
            let element2 = input[temp];

            if (i == temp) {
                continue;
            } else if (element == element2) {
                isError = true;
                errorType = 'Числа повторяются!'
                break;
            } else if (element > 9) {
                isError = true;
                errorType = 'Число больше чем нужно!'
                break;
            }
        }
    }
    errorType?alert(errorType):console.log('Нет ошибок');
    console.log(isError);

    /* Check amount of cows and bulls */
    let cow = 0;
    let bull = 0;

    for (let index = 0; index < input.length; index++) {
        let element = input[index];
        if (element === "") {
            alert('Мне кажется, что ты забыл число или ввёл его неправильно!');
            isError = true;
            break;
        }
        for (let t = 0; t < randomList.length; t++) {
            let element2 = randomList[t];

            if (element == element2 && t == index) {
                bull++;
            } 
            if (element == element2 && t !== index) {
                cow++;
            }
            /* Output amount of bulls and cows */
            tempHtml = '<div class="main_result-item"><div class="main_result-num" id="cow">'+cow+'</div><div class="main_result-num" id="bull">'+bull+'</div></div>'
        }      
    }

    let steps = document.querySelectorAll('.main_result-item').length;

    if (bull == 4) {
        divAlert[0].style.transform = 'translateX(0vw)';
        alertHtml = '<div class="info_subtitle"></div>' + 'Колличество шагов: ' + steps + '</div>'
        divAlert[0].insertAdjacentHTML('afterbegin', alertHtml);
    }
   
    let outHtml = '<div class="main_out-item"><div class="main_out-num">'+input[0]+'</div><div class="main_out-num">'+input[1]+'</div><div class="main_out-num">'+input[2]+'</div><div class="main_out-num">'+input[3]+'</div></div>'

    if (isError == false) {
        mainResult.insertAdjacentHTML('beforeend', tempHtml);
        mainOutList.insertAdjacentHTML('beforeend', outHtml);
    }
}