const menuData = [
  {
    foodTitle: "Appetizers",
    theMenu: [
      {
        id: 1,
        foodTitle: "Appetizers",
        name: "Buffalo Chicken Wings",
        description:
          "Perfectly seasoned crispy buffalo wings with creamy blue cheese dip and fresh, crunchy celery",
        price: "$8.00",
        img: require("../src/assets/FoodMenuImg/buffalo-wings.jpg"),
      },
      {
        id: 2,
        name: "Chicken Spinach Eggrolls",
        description:
          "Specially made with garlic chicken, spinach, gouda cheese, plus a red pepper salsa for dipping",
        price: "$5.00",
        img: require("../src/assets/FoodMenuImg/chicken-spinach-egg-rolls.jpg"),
      },
      {
        id: 3,
        name: "Carrots in a Blanket",
        description:
          "Healthy and delicious Veggie appetizer for both kids and adults , paired with classic yellow mustard",
        price: "$7.00",
        img: require("../src/assets/FoodMenuImg/roated-carrots-blanket.jpg"),
      },
    ],
  },
  {
    foodTitle: "Burgers",
    theMenu: [
      {
        id: 4,
        name: "Classic Cheese Burger",
        description:
          "Succulent and juicy cheese burger, stuffed with the right toppings.",
        price: "$7.00",
        img: require("../src/assets/FoodMenuImg/classic-cheese-burger.jpeg"),
      },
      {
        id: 5,
        name: "Crispy Chicken Burger",
        description:
          "Well seasoned crispy fried chicken marinated in buttermilk",
        price: "$6.00",
        img: require("../src/assets/FoodMenuImg/crispy-chicken-burger.jpg"),
      },
      {
        id: 6,
        name: "Greek Lamb Burger",
        description:
          "Homely lamb burger with flavorful Greek twist that takes it to another level of addictive!",
        price: "$7.00",
        img: require("../src/assets/FoodMenuImg/greek-lamb-burger.jpg"),
      },
    ],
  },
  {
    foodTitle: "Dishes",
    theMenu: [
      {
        id: 7,
        name: "Jambalaya Pasta",
        description:
          "Nicely made Jambalaya Pasta with chicken, Andouille sausage, shrimp, and all the Cajun flavor.",
        price: "$13.00",
        img: require("../src/assets/FoodMenuImg/jambalaya-pasta.png"),
      },
      {
        id: 8,
        name: "Chicken Fried Rice",
        description:
          "Delicious long rice with moist and tender chicken with flavorful peas and carrots",
        price: "$11.00",
        img: require("../src/assets/FoodMenuImg/chicken-fried-rice.jpg"),
      },
      {
        id: 9,
        name: "Tomato Shrimp Pasta",
        description:
          "Mouthwatering Pasta made with spicy tomato sauce and shrimp incredibly loaded with flavor.",
        price: "$10.00",
        img: require("../src/assets/FoodMenuImg/tomato-shrimp-pasta.jpg"),
      },
    ],
  },
  {
    foodTitle: "Sandwiches",
    theMenu: [
      {
        id: 10,
        name: "Ham Sandwich",
        description:
          "Ham Sandish made with few fresh herbs mixed with some olive oil.",
        price: "$4.00",
        img: require("../src/assets/FoodMenuImg/ham-sandwich.jpg"),
      },
      {
        id: 11,
        name: "Steak Sandwich",
        description:
          "Juicy steak sandwich, with tender  beef slices, caramelised onion, garlic aioli, mustard, lettuce and tomato",
        price: "$5.00",
        img: require("../src/assets/FoodMenuImg/steak-sandwich.jpg"),
      },
      {
        id: 12,
        name: "Veggie Sandwich",
        description:
          "Creamy and saucy sandwich packed to the gills with veggies.",
        price: "$4.00",
        img: require("../src/assets/FoodMenuImg/veggie-sandwich.jpg"),
      },
    ],
  },
  {
    foodTitle: "Salad",
    theMenu: [
      {
        id: 13,
        name: "Greek Salad",
        description:
          "Healthy salad loaded with lots of fresh veggies, olives and feta and tossed with a tangy lemon-herb vinaigrette.",
        price: "$4.00",
        img: require("../src/assets/FoodMenuImg/greek-salad.jpg"),
      },
      {
        id: 14,
        name: "Orzo Salad",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$5.00",
        img: require("../src/assets/FoodMenuImg/orzo-salad.jpg"),
      },
    ],
  },
  {
    foodTitle: "Protein",
    theMenu: [
      {
        id: 15,
        name: "Glazed Roasted Chicken",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$8.00",
        img: require("../src/assets/FoodMenuImg/glazed-roasted-chicken.png"),
      },
      {
        id: 16,
        name: "Grilled Fish",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$6.00",
        img: require("../src/assets/FoodMenuImg/grilled-fish.jpg"),
      },
      {
        id: 17,
        name: "Prawn in Batter",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$8.00",
        img: require("../src/assets/FoodMenuImg/prawn-in-batter.jpg"),
      },
    ],
  },

  {
    foodTitle: "Cakes",
    theMenu: [
      {
        id: 18,
        name: "Andes Mint Cake",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$12.00",
        img: require("../src/assets/FoodMenuImg/andes-mint-cake.jpg"),
      },

      {
        id: 19,
        name: "Strawberry Cake",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$8.00",
        img: require("../src/assets/FoodMenuImg/strawberry-cake.jpg"),
      },
      {
        id: 20,
        name: "Chocolate Brownies",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$11.00",
        img: require("../src/assets/FoodMenuImg/chocolate-brownies.jpg"),
      },
    ],
  },

  {
    foodTitle: "Drinks",
    theMenu: [
      {
        id: 21,
        name: "Margarita",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$12.00",
        img: require("../src/assets/FoodMenuImg/margarita.jpg"),
      },
      {
        id: 22,
        name: "Pineapple Mango Mimosa",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$12.00",
        img: require("../src/assets/FoodMenuImg/pineapple-mango-mimosa.jpg"),
      },
      {
        id: 23,
        name: "Soda",
        description:
          "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
        price: "$12.00",
        img: require("../src/assets/FoodMenuImg/soda.jpg"),
      },
    ],
  },
];

export default menuData;