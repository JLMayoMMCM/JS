const task = document.getElementById('task');
const btnadd = document.getElementById('btnadd');
const tasklist = document.getElementById('tasklist');

let tasks = [];

btnadd.addEventListener('click', () => {
    tasks.push(task.value);

    tasklist.innerHTML = '';

    tasks.forEach((task) => {
        tasklist.innerHTML += `<li>${task}</li>`;
        console.log(task);
    });

    task.value = '';
    console.log('Button clicked');
});

 

