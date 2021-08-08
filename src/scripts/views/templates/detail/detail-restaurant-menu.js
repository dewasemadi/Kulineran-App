const foodTemplate = (food) => `
<span class="d-flex">
    <img src="/icons/food-icon.svg" alt="${food.name}"
        width="25px" height="25px" class="my-auto">
    <p class="my-auto ms-2 food-name">${food.name}</p>
</span>
`;

const drinkTemplate = (drink) => `
<span class="d-flex">
    <img src="/icons/drink-icon.svg" alt="${drink.name}"
        width="25px" height="25px" class="my-auto">
    <p class="my-auto ms-2 drink-name">${drink.name}</p>
</span>
`;

export {
  foodTemplate,
  drinkTemplate,
};
