import meal1 from "../assets/main-courses-image-1.jpg";
import meal2 from "../assets/main-courses-image-2.jpg";
import meal3 from "../assets/main-courses-image-3.jpg";
import meal4 from "../assets/main-courses-image-4.jpg";
import meal5 from "../assets/main-courses-image-5.jpg";
import meal6 from "../assets/main-courses-image-6.jpg";

import dessert1 from "../assets/desserts-image-1.jpg";
import dessert2 from "../assets/desserts-image-2.jpg";
import dessert3 from "../assets/desserts-image-3.jpg";
import dessert4 from "../assets/desserts-image-4.jpg";
import dessert5 from "../assets/desserts-image-5.jpg";
import dessert6 from "../assets/desserts-image-6.jpg";

import softDrink1 from "../assets/soft-drinks-image-1.jpg";
import softDrink2 from "../assets/soft-drinks-image-2.jpg";
import softDrink3 from "../assets/soft-drinks-image-3.jpg";
import softDrink4 from "../assets/soft-drinks-image-4.jpg";
import softDrink5 from "../assets/soft-drinks-image-5.jpg";
import softDrink6 from "../assets/soft-drinks-image-6.jpg";
// Main Courses
const meals = [
  {
    title: "Green Salad",
    price: "$20.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    badge: "New",
    image: meal1,
  },
  {
    title: "French Toast",
    price: "$40.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    image: meal2,
  },
  {
    title: "Palak Paneer",
    price: "$20.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    image: meal3,
  },
  {
    title: "Cherry Salsa",
    price: "$20.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    image: meal4,
  },
  {
    title: "Spicy Pork Vindaloo",
    price: "$40.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    badge: "Hot",
    image: meal5,
  },
  {
    title: "Pork Vindaloo",
    price: "$20.00",
    desc: "Vegetables, Cheese, Ground Meats, Tomato Sauce, Seasoning and Spices",
    image: meal6,
  },
];

// Desserts
const desserts = [
  {
    title: "Ice Cream",
    price: "$30.00",
    desc: "Chocolate, Double Scoop, Blue Lagoon, Cola, Butter Crunch",
    badge: "New",
    image: dessert1,
  },
  {
    title: "Cake",
    price: "$40.00",
    desc: "Cassata Cake, Red Velvet Cake, Pound Cake, Sponge Cake, Genoise Cake, Chiffon Cake",
    image: dessert2,
  },
  {
    title: "Donut",
    price: "$20.00",
    desc: "Cruller, Glazed Doughnut, Berliner, Beignet, Jelly Doughnut, Liege, Sour Cream Doughnut",
    image: dessert3,
  },
  {
    title: "Brownies",
    price: "$30.00",
    desc: "Blondie, Espresso Brownie, Buckeye Brownie, Cream Cheese Brownies, Chocolate Fudge Brownies",
    image: dessert4,
  },
  {
    title: "Cupcake",
    price: "$40.00",
    desc: "Lemon Cupcakes, Ultimate Nutella Cupcakes, Coconut Cupcakes, Oreo Cupcakes",
    image: dessert5,
  },
  {
    title: "Waffles",
    price: "$20.00",
    desc: "Belgium Waffles, American Waffles, Toaster Waffles, Liege Waffles, Pizzelle Waffles",
    image: dessert6,
  },
];

// Soft Drinks
const softDrinks = [
  {
    title: "All Fresh Juice",
    price: "$30.00",
    desc: "Apple, Avocado, Orange, Green Cucumber, Lemon, Mangoes, Guava",
    badge: "New",
    image: softDrink1,
  },
  {
    title: "Wine",
    price: "$40.00",
    desc: "Red Wine, Merlot, Chardonnay, Rosé, Syrah, Malbec, Sauvignon Blanc",
    image: softDrink2,
  },
  {
    title: "Cocktail",
    price: "$20.00",
    desc: "Classic Cocktails, Margarita, Negroni, Dry Martini, Daiquiri, Bloody Mary",
    image: softDrink3,
  },
  {
    title: "Beer",
    price: "$30.00",
    desc: "Kingfisher, Tuborg, Carlsberg, Budweiser, Heineken, Corona, Hoegaarden",
    image: softDrink4,
  },
  {
    title: "Tea & Coffee",
    price: "$40.00",
    desc: "Cappuccino, Espresso, Latte, Filter Coffee, Black Tea, Green Tea, Milk Coffee",
    image: softDrink5,
  },
  {
    title: "Mineral Water",
    price: "$10.00",
    desc: "Mineral Water",
    image: softDrink6,
  },
];

export { meals, desserts, softDrinks };
