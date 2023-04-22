import itemsCounter from './src/modules/allItemsCounter.js';

describe('itemsCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="food__container">
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <h2 id="recipe"></h2>
    `;
  });

  test('updates category title with correct count', () => {
    itemsCounter();

    const mealTitle = document.querySelector('#recipe');
    expect(mealTitle.textContent).toBe('Recipes(0)');
  });

  test('does not update category title if no cards are present', () => {
    document.body.innerHTML = `
      <div class="food__container"></div>
      <h2 id="recipe"></h2>      
    `;
    itemsCounter();

    const mealTitle = document.querySelector('#recipe');
    expect(mealTitle.textContent).toBe('Recipes(0)');
  });
});