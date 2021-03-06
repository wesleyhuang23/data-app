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
        comments: [
            'Good',
        ]
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
        comments: [
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
        let monthly = document.createElement('div');
        monthly.className = 'monthly'
        let commit = document.createElement('div');
        commit.className = 'commit';
        let comments = document.createElement('div');
        comments.className = 'comments';

        name.innerHTML = data[i].name;
        plan.innerHTML = toDollar(data[i].plan);
        forecast.innerHTML = toDollar(data[i].forecast);
        monthly.innerHTML = toDollar(data[i].monthlyPlan);

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

        for(let y = 0; y < data[i].comments.length; y++){
            let item = document.createElement('p');
            item.innerHTML = data[i].comments[y];
            comments.appendChild(item);
        }

        let table = document.getElementsByClassName('container'); //getting the container and appending the data

        table[0].appendChild(name);
        table[0].appendChild(plan);
        table[0].appendChild(forecast);
        table[0].appendChild(bestCase);
        table[0].appendChild(monthly);
        table[0].appendChild(commit);
        table[0].appendChild(comments);

        //will check for default field selection to hide or show in the table
        createTable();
    }
}

table(); //creates the initial table on load

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
//resets the table clearing the old one;
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
    for(let i = 0; i < document.getElementsByClassName('comments').length; i++){
        parent.removeChild(document.getElementsByClassName('comments')[i])
        i--
    }
    for(let i = 0; i < document.getElementsByClassName('monthly').length; i++){
        parent.removeChild(document.getElementsByClassName('monthly')[i])
        i--
    }
}
//counters to keep track of acsencending or descending
let countn = 0;
let countp = 0;
let countf = 0;
let countb = 0;
let countm = 0;
let countc = 0;
let countcom = 0;

function sortName(){
    if(countn === 0){
        data.sort((a,b) => {
            return a.name > b.name;
        })
        countn++
        clearTable();
        table();
    } else if(countn === 1){
        data.sort((a,b) => {
            return b.name > a.name;
        })
        countn = 0
        clearTable();
        table();
    } 
}
function sortPlan(){
    if(countp === 0){
        data.sort((a, b) => {
            return b.plan - a.plan
        })
        countp++
        clearTable();
        table();
    } else if(countp === 1){
        data.sort((a, b) => {
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
        data.sort((a, b) => {
            return b.bestCase[0] - a.bestCase[0];
        })
        countb++
        clearTable();
        table();
    } else if(countb === 1){
        data.sort((a, b) => {
            return a.bestCase[0] - b.bestCase[0];
        })
        countb = 0;
        clearTable();
        table();
    }
}

function sortMonthly(){
    if(countm === 0){
        data.sort((a, b) => {
            return b.monthlyPlan - a.monthlyPlan
        })
        countm++
        clearTable();
        table();
    } else if(countm === 1){
        data.sort((a, b) => {
            return a.monthlyPlan - b.monthlyPlan;
        })
        countm = 0;
        clearTable();
        table();
    }
}

function sortCommit(){
    if(countc === 0){
        data.sort((a, b) => {
            return b.commit[0] - a.commit[0]
        })
        countc++
        clearTable();
        table();
    } else if(countc === 1){
        data.sort((a, b) => {
            return a.commit[0] - b.commit[0]
        })
        countc = 0;
        clearTable();
        table();
    }
}

function sortComments(){
    if(countcom === 0){
        data.sort((a, b) => {
            return b.comments[0] > a.comments[0]
        })
        countcom++
        clearTable();
        table();
    } else if(countcom === 1){
        data.sort((a, b) => {
            return a.comments[0] > b.comments[0]
        })
        countcom = 0;
        clearTable();
        table();
    }
}

//TABLE DISPLAY SELECTOR LOGIC
let def = document.getElementsByClassName('dropdown')[0];

function formCheck(){
    let inputs = [];
    inputs.push(document.getElementById('name'));
    inputs.push(document.getElementById('plan'));
    inputs.push(document.getElementById('forecast'));
    inputs.push(document.getElementById('best'));
    inputs.push(document.getElementById('monthly'));
    inputs.push(document.getElementById('commit'));
    inputs.push(document.getElementById('comments'));
    let check = inputs.filter(function(input){
        return input.checked === true;    
    })
    if(check.length === 5){
        for(let i = 0; i < inputs.length; i++){
            if(!inputs[i].checked){
                inputs[i].disabled = true;
                document.getElementById('l' + inputs[i].id).style.opacity = '0.2';
            }
        }
    } else if(check.length < 5){
        for(let i = 0; i < inputs.length; i++){
            inputs[i].disabled = false;
            document.getElementById('l' + inputs[i].id).style.opacity = '1';
        }
    }
}

var first = 0;
var second = 0;
function dropdown(){
    formCheck();
    let dropdown = document.getElementsByClassName('dropdown')[0];
    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    first = 1;
}
function assignClick(){
    button.onclick = dropdown();
}
var final;
function createTable(){
    // commit.removeChild(document.getElementById('dropdown-btn'));
    let dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.style.display = 'none';
    let inputs = [];
    inputs.push(document.getElementById('name'));
    inputs.push(document.getElementById('plan'));
    inputs.push(document.getElementById('forecast'));
    inputs.push(document.getElementById('best'));
    inputs.push(document.getElementById('monthly'));
    inputs.push(document.getElementById('commit'));
    inputs.push(document.getElementById('comments'));
    //shows fields that are checked
    let check = inputs.filter((input) => {
        return input.checked === true;
    })
    for(let i = 0; i < check.length; i++){
        let current = document.getElementsByClassName(check[i].id);
        for(let j = 0; j < current.length; j++){
            current[j].style.display = 'block';
        }
        let current2 = document.getElementsByClassName('h-' + check[i].id);
        for(let x = 0; x < current2.length; x++){
            current2[x].style.display = 'block';
        }
    }
    //Sets table size when differnt number of field selected
    let tableDisplay = document.getElementsByClassName('container')[0];
    if(check.length === 5){
        tableDisplay.id = '';
    } else if(check.length === 4){
        tableDisplay.id = 'four';
    } else if(check.length === 3){
        tableDisplay.id = 'three';
    } else if (check.length === 2){
        tableDisplay.id = 'two';
    } else if(check.length === 1) {
        tableDisplay.id = 'one';
    }
    //needs to remove button before it hides
    if(second === 0){
        let commit = document.getElementById('header-commit');
        let btn = document.getElementsByClassName('dropdown-button');
        if(first === 1){
            commit.removeChild(btn[0]);
            final = check[check.length - 1].id
        }
        second++
    } else if(second === 1){
        let commit = document.getElementById('header-' + final);
            let btn = document.getElementsByClassName('dropdown-button');
            if(first === 1){
                commit.removeChild(btn[0]);
                final = check[check.length - 1].id
        }
    }
    //hides fields that are unchecked
    let uncheck = inputs.filter(function(input){
        return input.checked !== true;
    })
    for(let i = 0; i < uncheck.length; i++){
        let current = document.getElementsByClassName(uncheck[i].id);
        for(let j = 0; j < current.length; j++){
            current[j].style.display = 'none';
        }
        let current2 = document.getElementsByClassName('h-' + uncheck[i].id);
        for(let x = 0; x < current2.length; x++){
            current2[x].style.display = 'none';
        }
    }

    if(first === 1){
        let last = document.getElementsByClassName('h-' + check[check.length - 1].id)[0];
        let img = document.createElement('img');
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/TriangleArrow-Down.svg';
        img.style.height = '15px';
        img.style.width = '15px';

        let button = document.createElement('button');
        button.appendChild(img);
        button.id = 'dropdown-btn'
        button.className = 'dropdown-button';
        button.style.position = 'relative';
        button.style.float = 'right';
        button.style.marginTop = '20px';
        button.style.top = '20px';
        button.style.right = '-20px';
        button.style.zIndex = '2';
        button.style.borderRadius = '5px';
        last.appendChild(button);
        button.onclick = function(){
            formCheck();
            let dropdown = document.getElementsByClassName('dropdown')[0];
            if(dropdown.style.display === 'none'){
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
            first = 1;
        }
    }
    
    
}


let img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/TriangleArrow-Down.svg';
img.style.height = '15px';
img.style.width = '15px';

let button = document.createElement('button');
button.appendChild(img);
button.id = 'dropdown-btn'
button.className = 'dropdown-button';
button.style.position = 'relative';
button.style.top = '20px';
button.style.right = '-20px';
button.style.float = 'right';
button.style.marginTop = '20px';
button.style.zIndex = '2';
button.style.borderRadius = '5px';
button.onclick = function(){
    dropdown();
};


let commit = document.getElementById('header-commit');
commit.appendChild(button);
// commit.removeChild(document.getElementById('dropdown-btn'));