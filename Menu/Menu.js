/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

      
     

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu() {

  const header = document.querySelector('.header')
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  const studentList = document.createElement('li');
  const facultyList = document.createElement('li');
  const newList = document.createElement('li');
  const techList = document.createElement('li');
  const musicList = document.createElement('li');
  const logList = document.createElement('li');

menu.appendChild(list)
list.appendChild(studentList)
list.appendChild(facultyList)
list.appendChild(newList)
list.appendChild(techList)
list.appendChild(musicList)
list.appendChild(logList)
header.appendChild(menu)


menu.classList.add('menu');


studentList.textContent = menuItems[0];
facultyList.textContent = menuItems[1];
newList.textContent = menuItems[2];
techList.textContent = menuItems[3];
musicList.textContent = menuItems[4];
logList.textContent = menuItems[5];



return menu;

}


const menu = createMenu()
const menuButton = document.querySelector('.header');

console.log(menu)
console.log(menuButton);

menuButton.addEventListener('click', _ => {

  menu.classList.toggle('menu--open');

});




