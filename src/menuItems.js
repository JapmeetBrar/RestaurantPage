import ChickenWings from './imgs/chicken-wings.jpg';
import FrenchFries from './imgs/french-fries.jpg';
import Soup from './imgs/soup.jpg';
import Pasta from './imgs/pasta.jpg';

let menu = [
    {
        name: 'Chicken Wings',
        price: '$10.99',
        description: '12 Traditional Chicken Wings with no breading. Tossed in our secret homemade Buffalo Sauce.',
        source: ChickenWings
    },
    {
        name: 'Crispy Fries',
        price: '$6.99',
        description: 'Homemade, double fried, extra crispy French Fries. Seasoned with in-house special seasoning.',
        source: FrenchFries
    },
    {
        name: 'Soup',
        price: '$8.99',
        description: 'Daily Special Soup served with a side of Garlic Bread, cooked to perfection and basted in butter.',
        source: Soup
    },
    {
        name: 'Penne Pasta',
        price: '$14.99',
        description: 'Classic Penne Pasta from Rome made with tomato garlic sauce, cherry tomatoes, and basil.',
        source: Pasta
    }
]

export default menu;