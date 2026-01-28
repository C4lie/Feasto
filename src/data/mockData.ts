
import { Category, FoodItem, JourneyStep } from "../types";

export const categories: Category[] = [
  { id: "1", name: "All", value: "all" },
  { id: "2", name: "Street Food", value: "street-food" },
  { id: "3", name: "Healthy", value: "healthy" },
  { id: "4", name: "Desserts", value: "desserts" },
  { id: "5", name: "Spicy", value: "spicy" },
];

export const journeySteps: JourneyStep[] = [
  {
    id: "1",
    title: "Inspiration",
    description: "Born from a love of authentic street flavors and modern aesthetics.",
    icon: "Lightbulb",
  },
  {
    id: "2",
    title: "Sourcing",
    description: "We hand-pick every ingredient directly from local organic farms.",
    icon: "Leaf",
  },
  {
    id: "3",
    title: "Culinary Art",
    description: "Crafted by master chefs who believe food is a visual experience.",
    icon: "ChefHat",
  },
];

export const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Truffle Mushroom Burger",
    image: "/images/truffle-burger.png",
    category: "street-food",
    ingredients: ["Brioche Bun", "Truffle Oil", "Swiss Cheese", "Portobello", "Arugula"],
    description: "A rich, earthy experience featuring slow-roasted portobello mushrooms and premium truffle oil on a toasted brioche bun.",
    tags: ["savory", "rich", "vegetarian"],
    calories: 650,
    recipe: {
      prepTime: "20 mins",
      cookTime: "15 mins",
      servings: 2,
      instructions: [
        "Clean the portobello mushrooms and remove stems.",
        "Marinate mushrooms in balsamic vinegar, olive oil, and garlic for 15 mins.",
        "Grill mushrooms for 4-5 mins per side until tender.",
        "Toast brioche buns with butter until golden.",
        "Assemble burger with arugula, mushroom, swiss cheese, and a drizzle of truffle oil."
      ]
    }
  },
  {
    id: "2",
    name: "Avocado Toast Royale",
    image: "/images/avocado-toast.png",
    category: "healthy",
    ingredients: ["Sourdough", "Haas Avocado", "Poached Egg", "Chili Flakes", "Lemon"],
    description: "Creamy avocado mash topped with a perfectly poached egg and a sprinkle of chili flakes for a gentle kick.",
    tags: ["healthy", "breakfast", "spicy"],
    calories: 420,
     recipe: {
      prepTime: "10 mins",
      cookTime: "5 mins",
      servings: 1,
      instructions: [
        "Toast two slices of sourdough bread.",
        "Mash a ripe avocado with lemon juice, salt, and pepper.",
        "Poach an egg in simmering water for 3 minutes (for soft yolk).",
        "Spread avocado generously on toast.",
        "Top with poached egg and sprinkle with chili flakes."
      ]
    }
  },
  {
    id: "3",
    name: "Midnight Berry Cake",
    image: "/images/midnight-berry-cake.png",
    category: "desserts",
    ingredients: ["Dark Chocolate", "Blueberries", "Vanilla Bean", "Cream", "Flour"],
    description: "Decadent dark chocolate layers infused with fresh blueberry reduction and finished with vanilla bean cream.",
    tags: ["sweet", "indulgent", "dessert"],
    calories: 550,
     recipe: {
      prepTime: "40 mins",
      cookTime: "35 mins",
      servings: 8,
      instructions: [
        "Preheat oven to 350°F (175°C).",
        "Mix cocoa powder, flour, sugar, and baking powder.",
        "Whisk eggs, milk, and oil; combine with dry ingredients.",
        "Bake for 30-35 mins. Let cool.",
        "Simmer blueberries with sugar to make reduction.",
        "Frost cake with vanilla cream and top with reduction."
      ]
    }
  },
  {
    id: "4",
    name: "Firecracker Tacos",
    image: "/images/firecracker-tacos.png",
    category: "spicy",
    ingredients: ["Corn Tortilla", "Spicy Beef", "Jalapeños", "Lime", "Cilantro"],
    description: "Authentic street tacos packed with spicy seasoned beef and topped with fresh jalapeños and zesty lime.",
    tags: ["spicy", "street-food", "mexican"],
    calories: 380,
    recipe: {
      prepTime: "15 mins",
      cookTime: "10 mins",
      servings: 3,
      instructions: [
         "Season ground beef with chili powder, cumin, and cayenne.",
         "Cook beef in a skillet over medium-high heat until browned.",
         "Warm corn tortillas on a flat pan.",
         "Fill tortillas with beef, sliced jalapeños, and cilantro.",
         "Squeeze fresh lime juice over tacos before serving."
      ]
    }
  },
  {
    id: "5",
    name: "Zen Bowl",
    image: "/images/zen-bowl.png",
    category: "healthy",
    ingredients: ["Quinoa", "Edamame", "Cucumber", "Sesame", "Tofu"],
    description: "A balanced bowl of nutrient-rich quinoa, crisp veggies, and a light sesame ginger dressing.",
    tags: ["healthy", "vegan", "light"],
    calories: 320,
    recipe: {
      prepTime: "15 mins",
      cookTime: "20 mins",
      servings: 1,
      instructions: [
         "Rinse and cook quinoa according to package instructions.",
         "Steam edamame and cube the tofu.",
         "Slice cucumber thinly.",
         "Whisk sesame oil, ginger, soy sauce, and vinegar for dressing.",
         "Combine all ingredients in a bowl and drizzle details."
      ]
    }
  },
  {
    id: "6",
    name: "Matcha Lava Cookie",
    image: "/images/matcha-lava-cookie.png",
    category: "desserts",
    ingredients: ["Matcha Powder", "White Chocolate", "Almond Flour", "Butter"],
    description: "Crispy on the outside, gooey on the inside. A matcha-infused delight with a white chocolate lava center.",
    tags: ["sweet", "japanese", "dessert"],
    calories: 290,
    recipe: {
      prepTime: "20 mins",
      cookTime: "12 mins",
      servings: 6,
      instructions: [
         "Cream butter and sugar until fluffy.",
         "Mix in matcha powder and almond flour.",
         "Flatten dough balls and place a piece of white chocolate in center.",
         "Seal dough around chocolate.",
         "Bake at 350°F (175°C) for 10-12 mins. Serve warm."
      ]
    }
  },
  // NEW ITEMS
  {
     id: "7",
     name: "Golden Ramen",
     image: "/images/golden-ramen.png",
     category: "street-food",
     ingredients: ["Ramen Noodles", "Soft Boiled Egg", "Nori", "Miso Broth", "Scallions"],
     description: "Hand-pulled noodles swimming in a rich, 12-hour slow-cooked miso broth topped with a perfect jammy egg.",
     tags: ["savory", "warm", "japanese"],
     calories: 500,
     recipe: {
      prepTime: "30 mins",
      cookTime: "4 hours",
      servings: 2,
      instructions: [
         "Simmer chicken stock with miso paste, ginger, and garlic.",
         "Boil water and cook ramen noodles for 2-3 mins.",
         "Soft boil eggs (6 mins) and marinate in soy sauce.",
         "Pour broth over noodles.",
         "Top with egg, scallions, and nori sheets."
      ]
    }
  },
  {
     id: "8",
     name: "Spicy Tuna Roll",
     image: "/images/spicy-tuna-roll.png",
     category: "spicy",
     ingredients: ["Sushi Rice", "Tuna", "Sriracha", "Nori", "Cucumber"],
     description: "Fresh ocean tuna mixed with fiery sriracha mayo, wrapped in seasoned sushi rice and crisp seaweed.",
     tags: ["spicy", "seafood", "japanese"],
     calories: 340,
     recipe: {
      prepTime: "30 mins",
      cookTime: "20 mins",
      servings: 2,
      instructions: [
         "Cook sushi rice and season with rice vinegar.",
         "Dice fresh tuna and mix with sriracha and mayo.",
         "Place nori on bamboo mat, spread rice.",
         "Add tuna mix and cucumber strips.",
         "Roll tightly and slice."
      ]
    }
  },
  {
     id: "9",
     name: "Acai Paradise",
     image: "/images/acai-paradise.png",
     category: "healthy",
     ingredients: ["Acai Pulp", "Granola", "Banana", "Strawberries", "Honey"],
     description: "A refreshing frozen acai base topped with house-made granola, fresh fruits, and a drizzle of organic honey.",
     tags: ["healthy", "breakfast", "sweet"],
     calories: 380,
     recipe: {
      prepTime: "10 mins",
      cookTime: "0 mins",
      servings: 1,
      instructions: [
         "Blend frozen acai pulp with a splash of apple juice/milk.",
         "Pour thick blend into a bowl.",
         "Slice banana and strawberries.",
         "Arrange fruit on top.",
         "Sprinkle granola and drizzle honey."
      ]
    }
  },
  {
     id: "10",
     name: "Tiramisu Cloud",
     image: "/images/tiramisu-cloud.png",
     category: "desserts",
     ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa Powder"],
     description: "Layers of coffee-soaked ladyfingers and whipped mascarpone cream, dusted with rich cocoa.",
     tags: ["sweet", "italian", "coffee"],
     calories: 450,
     recipe: {
      prepTime: "30 mins",
      cookTime: "0 mins",
      servings: 4,
      instructions: [
         "Brew strong espresso and let cool.",
         "Whisk mascarpone with sugar until creamy.",
         "Dip ladyfingers quickly in espresso.",
         "Layer ladyfingers and cheese mixture in a glass.",
         "Refrigerate for 4 hours. Dust with cocoa before serving."
      ]
    }
  },
   {
     id: "11",
     name: "Elote Corn Ribs",
     image: "/images/elote-corn-ribs.png",
     category: "street-food",
     ingredients: ["Corn", "Cotija Cheese", "Chili Powder", "Lime Mayo"],
     description: "Curled corn 'ribs' charred to perfection, slathered in tangy lime mayo and sprinkled with cheese and chili.",
     tags: ["street-food", "vegetarian", "spicy"],
     calories: 220,
     recipe: {
      prepTime: "10 mins",
      cookTime: "15 mins",
      servings: 2,
      instructions: [
         "Cut corn cobs longitudinally into quarters (ribs).",
         "Fry or air-fry corn ribs until curled and crispy.",
         "Brush with mayonnaise mixed with lime juice.",
         "Sprinkle generously with cotija cheese and chili powder.",
         "Garnish with cilantro."
      ]
    }
  },
  {
     id: "12",
     name: "Mango Sticky Rice",
     image: "/images/mango-sticky-rice.png",
     category: "desserts",
     ingredients: ["Sticky Rice", "Coconut Milk", "Ripe Mango", "Mung Beans"],
     description: "Warm coconut sweet rice paired with chilled ripe mango slices. A classic Thai favorite.",
     tags: ["sweet", "thai", "fruit"],
     calories: 360,
     recipe: {
      prepTime: "40 mins",
      cookTime: "20 mins",
      servings: 2,
      instructions: [
         "Soak sticky rice for 30 mins, then steam until soft.",
         "Heat coconut milk with sugar and salt until dissolved.",
         "Mix half the coconut sauce with cooked rice.",
         "Slice ripe mangoes.",
         "Serve rice with mango and drizzle remaining sauce."
      ]
    }
  }
];
