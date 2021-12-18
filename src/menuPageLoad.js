import menu from './menuItems'

export default function loadMenuPage(){
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let menuHeader = document.createElement('h1');
    menuHeader.className = 'contact-title';
    menuHeader.textContent = 'MENU';

    card.append(menuHeader, populateMenu(menu));

    content.append(card);
}

function populateMenu(itemList){

    let menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    for (let item of itemList){

        let foodItem = document.createElement('div');
        foodItem.className='item';

        let itemImage = document.createElement('img');
        itemImage.className = 'item-pic';
        itemImage.src = item.source;

        let description = document.createElement('div');
        description.className = 'description';

        let itemName = document.createElement('h2');
        itemName.className = 'name'
        itemName.innerHTML = `${item.name} <br> ${item.price}`;
        
        let itemText = document.createElement('p');
        itemText.className = 'body';
        itemText.textContent = item.description;

        description.append(itemName, itemText);
        foodItem.append(itemImage, description);

        menuContainer.append(foodItem);
    }
    return menuContainer;
    
}