let mainResult = document.querySelector('.main_result');
let mainOutList = document.querySelector('.main_out-list');



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
    let row = document.querySelectorAll(".main_input");
    let input = [
        row[0].value,
        row[1].value,
        row[2].value,
        row[3].value,
    ]
    let outHtml = '<div class="main_out-item"><div class="main_out-num">'+input[0]+'</div><div class="main_out-num">'+input[1]+'</div><div class="main_out-num">'+input[2]+'</div><div class="main_out-num">'+input[3]+'</div></div>'
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        let isError = false;


        

        for (let temp = 0; temp < input.length; temp++) {
            let element2 = input[temp];

            /* console.log("element1: " + element);
            console.log("element2: " + element2); */

            if (i == temp) {
                continue;
            } else if (element == element2) {
                isError = true;
                alert("А число " + element + " уже есть гад! сейчас уйду")
                break;
            }
        }
        
        /* console.log(isError); */
        if (isError == true) {
            alert('Я выхожу из этого вонючего цикла!');
            break;
        } else 
        
        console.log(isError);
        


    } /* End of 'for' */
    

    
    /* Check amount of cows and bulls */
    let cow = 0;
    let bull = 0;

    for (let index = 0; index < input.length; index++) {
        let element = input[index];
        if (element == "") {
            alert('nepravilnie chisla')
            break
        }
        for (let i = 0; i < randomList.length; i++) {
            let element2 = randomList[i];
            
            if (element == element2 && i == index) {
                bull++;
                /* bullHtml = '<div class="main_result-num" id="bull">'+bull+'</div>';
                console.log('bull: ' + bullHtml); */
            } 
            if (element == element2 && i !== index) {
                cow++;
                /* cowHtml = '<div class="main_result-num" id="cow">'+cow+'</div>';
                console.log('cow: ' + cowHtml); */
            }
            tempHtml = '<div class="main_result-item"><div class="main_result-num" id="cow">'+cow+'</div><div class="main_result-num" id="bull">'+bull+'</div></div>'
        }      
    }
        
        
    mainResult.insertAdjacentHTML('beforeend', tempHtml);
    mainOutList.insertAdjacentHTML('beforeend', outHtml);
    



    /* let cowHtml = document.createElement('div');
    cowHtml.className = 'main_result-item';
    cowHtml.innerHTML = '<div class="main_result-num" id="cow">'+cow+'</div>';
    mainResult.append(cowHtml); */
} /* End of function */