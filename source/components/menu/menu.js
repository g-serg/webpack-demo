import './menu.scss';

export default function(array, className) {
  var menu = document.createElement('ul');
  menu.className = className;
  var listItems = '';
  array.forEach(function(item) {
    listItems += '<li><a href="./blog.html">' + item + '</a></li>';
  });
  menu.innerHTML = listItems;
  return menu;
}