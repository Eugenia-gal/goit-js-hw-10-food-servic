import dishCard from '../templates/dish-card.hbs';
import dishes from '../menu.json';

const foodMenuContainerEl = document.querySelector('.js-menu');
const dishCardsMarkup = createDishCardsMarkup(dishes);

foodMenuContainerEl.insertAdjacentHTML('beforeend', dishCardsMarkup);

function createDishCardsMarkup(menuList) {
    return dishCard(menuList);
}