import 'normalize.css';
import './index.scss';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
console.log($);