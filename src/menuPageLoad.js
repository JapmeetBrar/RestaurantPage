export default function loadMenuPage(){
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let menuHeader = document.createElement('h1');
    menuHeader.className = 'contact-title';
    menuHeader.textContent = 'MENU';

    let menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    
}

function populateMenu(itemList){

    for (let item of itemList){
        let itemImage = document.createElement('img');
        itemImage.className = 'item-pic';
        itemImage.src = item.source;

        let description = document.createElement('div');
        description.className = 'description';

        let itemName = document.createElement('h2');
        itemName.className = 'item'
        itemName.innerHTML = `${item.name} <br> ${item.price}`;
        
        let itemText = document.createElement('p');
        itemText.className = 'body';
        itemText.textContent = item.description;
    }
    
}