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

      
  
  //<div class="header"> is parent?//
     

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {

  const menu = document.createElement('div');
  const studentList = document.createElement('ul');
  const facultyList = document.createElement('ul');
  const newList = document.createElement('ul');
  const techList = document.createElement('ul');
  const musicList = document.createElement('ul');
  const logList =document.createElement('ul');

menu.append(studentList);
menu.append(facultyList);
menu.append(newList);
menu.append(techList);
menu.append(musicList);
menu.append(logList);


studentList.classList.add('menu');
facultyList.classList.add('menu');
newList.classList.add('menu');
techList.classList.add('menu');
musicList.classList.add('menu');
logList.classList.add('menu');

menu.textContent = 'HERE';
studentList.textContent = menuItems[0];
facultyList.textContent = menuItems[1];
newList.textContent = menuItems[2];
techList.textContent = menuItems[3];
musicList.textContent = menuItems[4];
logList.textContent = menuItems[5];



// const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);

// menuButton.addEventListener('click', (event) => {

//   menu.classList.toggle('menu--open');

// });


return menu;

}
 
// }
//  const header =document.querySelector('.header');
//  menuItems.forEach(element => {
//    header.append(createMenu (element));


//  });


//  menuItems.forEach((menu => {
//    header.append(createMenu(menu[0], menu[1], menu[2], menu[3], menu[4]))

//  }));


