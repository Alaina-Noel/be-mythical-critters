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
    for (const [ingredient, quantity] of Object.entries(recipe.ingredients)) {
      console.log(ingredient)
      if (this.pantry[ingredient] <= quantity) {
        return "I can't brew that Potion"
      } else {
        if (this.potions[recipe.name]) {
          this.potions[recipe.name] += 1;
          this.pantry[ingredient] -= quantity;
        } else {
          this.potions[recipe.name] = 1;
          this.pantry[ingredient] -= quantity;
        }
      }
    }
    return `Brewed 1 ${recipe.name}`
  }

}

module.exports = Witch;