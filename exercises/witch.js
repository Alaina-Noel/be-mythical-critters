class Witch {
  constructor(name) {
    this.name = name;
    this.pantry = {};
    this.recipes = [];
    this.potions = {};
  }

  collect(ingredient, quantity) {
    if (this.pantry[ingredient]) {
      this.pantry[ingredient] += quantity;
    } else {
      this.pantry[ingredient] = quantity;
    }
  }

  learnRecipe(recipe) {
    if (this.recipes.length === 0) {
      this.recipes.push(recipe);
      return `Learned: ${recipe.name}`;
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].name === recipe.name) {
          return `Already know: ${recipe.name}`;
        } else {
          this.recipes.push(recipe);
          return `Learned: ${recipe.name}`;
        }
      }
    }
  }

  brewPotion(recipe) {
    //run a check to see if the witch has learned this recipe
    console.log("potions",this.potions,"recipes", this.recipes)
    if (this.potions[recipe.name]) {
      this.potions[recipe.name] += 1;
      return `Brewed 1 ${recipe.name}`
    } else {
      this.potions[recipe.name] = 1;
      return `Brewed 1 ${recipe.name}`
    }
  }

}

module.exports = Witch;