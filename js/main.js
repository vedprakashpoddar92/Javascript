/* console.log()
const title = document.getElementById('task-title');
console.log(title)
title.style.background = '#2e3d50';
title.style.color = '#fff';
title.style.padding = '5px';
title.innerHTML = '<span style="color:red">My List</span>' */

//document.querySelector

/* console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

const lists = document.querySelector('li:nth-child(even)');
lists.style.color = 'red';
lists.textContent = 'Hello world';
lists.style.background = '#ccc';

console.log(document.querySelector('li:nth-child(3)'))
 */

 //document.getElementsByClassName

 /* const items = document.getElementsByClassName('collection-item')
 console.log(items)
 console.log(items[0]);
 console.log(items[0].style.background = '#ccc')
 console.log(items[1].textContent = 'Ved') 

 const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); */
 
/* const lis = document.getElementsByTagName('li');
console.log(lis[1].style.background='#f7f7f7')
console.log(lis[3].style.color = 'blue')

let listA = Array.from(lis);
listA.reverse();

listA.forEach(function(li, index){
        li.style.color = 'red';
        li.textContent = 'Testing text';

}) */

const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(function(item, index){
        item.textContent = `${index} : Testing`;
})

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach(function(li, index){
        li.style.background = '#ccc';
})

for(let i = 0; i < lieven.length; i++){
        lieven[i].style.background = '#f7f7f7';
}
console.log(items)