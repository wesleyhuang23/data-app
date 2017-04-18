var data = [
    {
        name: 'Europe',
        plan: 10525200,
        forecast: 12700200,
        bestCase: [
            12700200,
            11700400
        ],
        monthlyPlan: 234450300,
        commit: [
            12700200,
            11700400
        ],
        comments: [
            'great'
        ]
    },
    {
        name: 'Belgium',
        plan: 2525200,
        forecast: 3125200,
        bestCase: [
            2900450,
            2890120
        ],
        monthlyPlan: 203000200,
        commit: [
            2900450,
            2890120
        ],
        comments: [
            'discount price'
        ]
    },
    {
        name: 'England',
        plan: 4600400,
        forecast: 2500600,
        bestCase: [
            3900300,
            2900300
        ],
        monthlyPlan: 120200300,
        commit: [
            3900300,
            2900120
        ],
        comments: []
    },
    {
        name: 'Sweden',
        plan: 2425200,
        forecast: 5425200,
        bestCase: [
            6200300,
            2400900
        ],
        monthlyPlan: 432244561,
        commit: [
            6200200,
            2400900
        ],
        comments: [
            'more data coming'
        ]
    },
    {
        name: 'Finland',
        plan: 1700200,
        forecast: 4700200,
        bestCase: [
            4702120,
            4300200
        ],
        monthlyPlan: 243444020,
        commit: [
            4702120,
            4300200
        ],
        comment: [
            'for reference only'
        ]
    }
]
//function to make dollar display;
function toDollar(num){
    let result = [];
    let count = 0;
    let str = num.toString()
    for(let i = str.length - 1; i >= 0; i--){
        if(count === 3){
            result.unshift(',');
            result.unshift(str[i]);
            count = 1;
        } else {
            result.unshift(str[i])
            count++
        }
    }
    result.unshift('$');
    return result.join('');
}

//creating each row for the table
function table(){
    for(let i = 0; i < data.length; i++){
        
        let name = document.createElement('div');
        name.className = "name"
        let plan = document.createElement('div');
        plan.className = 'plan';
        let forecast = document.createElement('div');
        forecast.className = 'forecast';
        let bestCase = document.createElement('div');
        bestCase.className = 'best'
        let commit = document.createElement('div');
        commit.className = 'commit';

        name.innerHTML = data[i].name;
        plan.innerHTML = toDollar(data[i].plan);
        forecast.innerHTML = toDollar(data[i].forecast);

        //best case and commit has multiple elements that needed to be appended;
        for(let j = 0; j < data[i].bestCase.length; j++){
            let item = document.createElement('p');
            item.innerHTML = toDollar(data[i].bestCase[j]);
            bestCase.appendChild(item);
        }

        for(let x = 0; x < data[i].commit.length; x++){
            let item = document.createElement('p');
            item.innerHTML = toDollar(data[i].commit[x]);
            commit.appendChild(item);
        }

        let table = document.getElementsByClassName('container'); //getting the container and appending the data

        table[0].appendChild(name);
        table[0].appendChild(plan);
        table[0].appendChild(forecast);
        table[0].appendChild(bestCase);
        table[0].appendChild(commit);
    }
}

table();

//SHOW MORE AND LESS LOGIC
let showLess = document.getElementsByClassName('best');
let showLess2 = document.getElementsByClassName('commit');

let selector = document.getElementsByTagName('input');
selector[0].checked = true; //default selection or showing more

function less(){
    if(selector[1].checked){
        selector[0].checked = false;
    }

    for(let i = 0; i < showLess.length; i++){
        let current = showLess[i];
        for(let j = 1; j < current.childNodes.length; j++){
            current.childNodes[j].style.display = 'none';
        }
    }

    for(let i = 0; i < showLess2.length; i++){
        let current = showLess2[i];
        for(let j = 1; j < current.childNodes.length; j++){
            current.childNodes[j].style.display = 'none';
        }
    }
}
function more(){
    if(selector[0].checked){
        selector[1].checked = false;
    }
    for(let i = 0; i < showLess.length; i++){
        let current = showLess[i];
        for(let j = 1; j < current.childNodes.length; j++){
            current.childNodes[j].style.display = 'block';
        }
    }
    for(let i = 0; i < showLess2.length; i++){
        let current = showLess2[i];
        for(let j = 1; j < current.childNodes.length; j++){
            current.childNodes[j].style.display = 'block';
        }
    }
}

//ASCENDING AND DESCENDING LOGIC
function clearTable(){
    let parent = document.getElementsByClassName('container')[0];
    for(let i = 0; i < document.getElementsByClassName('name').length; i++){
        parent.removeChild(document.getElementsByClassName('name')[i])
        i--
    }
    for(let i = 0; i < document.getElementsByClassName('plan').length; i++){
        parent.removeChild(document.getElementsByClassName('plan')[i])
        i--
    }
    for(let i = 0; i < document.getElementsByClassName('forecast').length; i++){
        parent.removeChild(document.getElementsByClassName('forecast')[i])
        i--
    }
    for(let i = 0; i < document.getElementsByClassName('best').length; i++){
        parent.removeChild(document.getElementsByClassName('best')[i])
        i--
    }
    for(let i = 0; i < document.getElementsByClassName('commit').length; i++){
        parent.removeChild(document.getElementsByClassName('commit')[i])
        i--
    }
}
let countn = 0;
let countp = 0;
let countf = 0;
let countb = 0;
let countc = 0;

function sortName(){
    if(countn === 0){
        data.sort(function(a,b){
            return a.name > b.name;
        })
        countn++
        clearTable();
        table();
    } else if(countn === 1){
        data.sort(function(a,b){
            return b.name > a.name;
        })
        countn = 0
        clearTable();
        table();
    } 
}
function sortPlan(){
    if(countp === 0){
        data.sort(function(a, b){
            return b.plan - a.plan
        })
        countp++
        clearTable();
        table();
    } else if(countp === 1){
        data.sort(function(a, b){
            return a.plan - b.plan
        })
        countp = 0;
        clearTable();
        table();
    } 
}

function sortForeCast(){
    if(countf === 0){
        data.sort(function(a, b){
            return b.forecast - a.forecast
        })
        countf++
        clearTable();
        table();
    } else if(countf === 1){
        data.sort(function(a, b){
            return a.forecast - b.forecast
        })
        clearTable();
        table();
        countf = 0
    }
}

function sortBestCase(){
    if(countb === 0){
        data.sort(function(a, b){
            return b.bestCase[0] - a.bestCase[0];
        })
        countb++
        clearTable();
        table();
    } else if(countb === 1){
        data.sort(function(a, b){
            return a.bestCase[0] - b.bestCase[0];
        })
        countb = 0;
        clearTable();
        table();
    }
}

function sortCommit(){
    if(countc === 0){
        data.sort(function(a, b){
            return b.commit[0] - a.commit[0]
        })
        countc++
        clearTable();
        table();
    } else if(countc === 1){
        data.sort(function(a, b){
            return a.commit[0] - b.commit[0]
        })
        countc = 0;
        clearTable();
        table();
    }
}

//TABLE DISPLAY SELECTOR LOGIC
let def = document.getElementsByClassName('dropdown')[0];
console.log(def.childNodes)

function formCheck(){
    let inputs = [];
    let count = 0;
    console.log('form check');
    inputs.push(document.getElementById('name'));
    inputs.push(document.getElementById('plan'));
    inputs.push(document.getElementById('forecast'));
    inputs.push(document.getElementById('bestCase'));
    inputs.push(document.getElementById('monthlyPlan'));
    inputs.push(document.getElementById('commit'));
    inputs.push(document.getElementById('comment'));

    
    console.log(inputs);
    console.log(inputs.length);
}

function dropdown(){
    console.log('clicked');
    let dropdown = document.getElementsByClassName('dropdown')[0];
    console.log(document.getElementsByClassName('dropdown'));
    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function createTable(){
    let info = [];
    let name = document.getElementById('name');
    let plan = document.getElementById('plan');
    let forecast = document.getElementById('forecast');
    let bestCase = document.getElementById('best');
    let monthlyPlan = document.getElementById('monthlyPlan');
    let commit = document.getElementById('commit');
    let comment = document.getElementById('comment');

    console.log(name.checked);

    
}