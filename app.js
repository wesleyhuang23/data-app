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
for(let i = 0; i < data.length; i++){
    
    let name = document.createElement('div');
    let plan = document.createElement('div');
    let forecast = document.createElement('div');
    let bestCase = document.createElement('div');
    let commit = document.createElement('div');
    name.innerHTML = data[i].name;
    plan.innerHTML = data[i].plan;
    forecast.innerHTML = data[i].forecast;
    bestCase.innerHTML = data[i].bestCase[0];
    commit.innerHTML = data[i].commit[0];

    let table = document.getElementsByClassName('container');

    table[0].appendChild(name);
    table[0].appendChild(plan);
    table[0].appendChild(forecast);
    table[0].appendChild(bestCase);
    table[0].appendChild(commit);
}
console.log(name);


