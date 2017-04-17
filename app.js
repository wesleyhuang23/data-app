var data = [
    {
        name: 'Europe',
        plan: '$10,525,200',
        forecast: '$12,700,200',
        bestCase: [
            '$12,700,200',
            '$11,700,400'
        ],
        commit: [
            '$12,700,200',
            '$11,700,400'
        ]
    },
    {
        name: 'Belgium',
        plan: '$2,525,200',
        forecast: '$3,125,200',
        bestCase: [
            '$2,900,450',
            '$2,890,120'
        ],
        commit: [
            '$2,900,450',
            '$2,890,120'
        ]
    },
    {
        name: 'England',
        plan: '$4,600,400',
        forecast: '$2,500,600',
        bestCase: [
            '$3,900,300',
            '$2,900,300'
        ],
        commit: [
            '$3,900,300',
            '$2,900,120'
        ]
    },
    {
        name: 'Sweden',
        plan: '$2,425,200',
        forecast: '$5,425,200',
        bestCase: [
            '$6,200,300',
            '$2,400,900'
        ],
        commit: [
            '$6,200,200',
            '$2,400,900'
        ]
    },
    {
        name: 'Finland',
        plan: '$1,700,200',
        forecast: '$4,700,200',
        bestCase: [
            '$4,702,120',
            '$4,300,200'
        ],
        commit: [
            '$4,702,120',
            '$4,300,200'
        ]
    }
]
let results = []

//creating each row for the table
for(let i = 0; i < data.length; i++){
    
    let name = document.createElement('div');
    name.className = "name"
    let plan = document.createElement('div');
    plan.className = 'plane';
    let forecast = document.createElement('div');
    forecast.className = 'forecase';
    let bestCase = document.createElement('div');
    bestCase.className = 'best'
    let commit = document.createElement('div');
    commit.className = 'commit';

    name.innerHTML = data[i].name;
    plan.innerHTML = data[i].plan;
    forecast.innerHTML = data[i].forecast;

    //best case and commit has multiple elements that needed to be appended;
    for(let j = 0; j < data[i].bestCase.length; j++){
        let item = document.createElement('p');
        item.innerHTML = data[i].bestCase[j];
        bestCase.appendChild(item);
    }

    for(let x = 0; x < data[i].commit.length; x++){
        let item = document.createElement('p');
        item.innerHTML = data[i].commit[x];
        commit.appendChild(item);
    }

    let table = document.getElementsByClassName('container'); //getting the container and appending the data

    table[0].appendChild(name);
    table[0].appendChild(plan);
    table[0].appendChild(forecast);
    table[0].appendChild(bestCase);
    table[0].appendChild(commit);
}

//SHOW MORE AND LESS LOGIC
let showLess = document.getElementsByClassName('best');
let showLess2 = document.getElementsByClassName('commit');

console.log(showLess, showLess2);

let selector = document.getElementsByTagName('input');
console.log(selector);
selector[0].checked = true; //default selection or showing more

function less(){
    console.log('clicked');
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
