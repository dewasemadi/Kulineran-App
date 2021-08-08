const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#empty-resto');
  I.see('Oops! there are no favorites yet', '.noresult-tittle');

  I.amOnPage('/');
  I.seeElement('.list a');
  I.seeElement('.list a h4.card-tittle');
  const firstRestaurantContainer = locate('.list a').first();
  const firstRestaurant = locate('.list a h4.card-tittle').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantContainer);

  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/favorites');
  I.seeElement('.list a');
  const firstLikedRestaurant = locate('.list a h4.card-tittle').first();
  const likedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
