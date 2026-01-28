export interface FoodItem {
  id: string;
  name: string;
  image: string;
  category: string; // "featured", "spicy", etc.
  ingredients: string[];
  description: string;
  tags: string[];
  calories?: number;
  recipe?: {
    prepTime: string;
    cookTime: string;
    servings: number;
    instructions: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  value: string; // for filtering
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}
