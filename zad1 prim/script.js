let date = new Date();

let day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

let htmlTag = document.createElement("p");
let text = document.createTextNode('Today\'s date is ' + day + '.' + month + '.' + year);
htmlTag.appendChild(text);
let element = document.getElementById("org_div1");
element.appendChild(htmlTag);

function getInput(){
    let userDate = document.getElementById('day').value;
    let userYear = userDate[0] + userDate[1] + userDate[2] + userDate[3];
    let userMonth = userDate[5] + userDate[6];
    let userDay = userDate[8] + userDate[9];
    let userFullDate = userDay + userMonth + userYear;
    // alert(userFullDate);
    checkInput(userYear, userMonth, userDay);
}

function calculateSubstraction (rok, miesionc, dzien){
    let dni = Math.abs(day - dzien);
    let miesionce = Math.abs(month - miesionc);
    let roki = Math.abs(year - rok);
    alert('It\'s ' + dni + ' days, ' + miesionce + ' months and  ' + roki + ' years from current months days and years;pp');
}
function checkInput(rok, miesionc, dzien){
    if (rok>year){
        alert('It\'s a date from future!');
        calculateSubstraction(rok,miesionc,dzien);
    }
    else if(rok<year){
        alert('It\'s a date from past!');
    }
    else if(rok==year){
        if(miesionc>month){
            alert('It\'s a date from future! ');
        }
        else if(miesionc<month){
            alert('It\'s a date from past!');
        }
        else if (miesionc == month){
            if(dzien>day){
                alert('It\'s a date from future!');
            }
            else if(dzien<day){
                alert('It\'s a date from past!');
            }
            else if(dzien == day){
                alert('Wow');
            }
        }
    }
}

document.querySelector("button").addEventListener('click', getInput);
