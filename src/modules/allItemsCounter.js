const itemsCounter = () => {
  const allmeals = document.querySelectorAll('.food__item').length;
  let sum = 0;

  for (let i = 0; i <= allmeals; i += 1) {
    sum = i;
  }
  const mealTitle = document.querySelector('#recipe');
  mealTitle.innerHTML = `Recipes(${sum})`;
};

export default itemsCounter;