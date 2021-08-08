Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Unliking restaurant', async ({ I }) => {
  I.seeElement('#empty-resto');
  I.see('Oops! there are no favorites yet', '.noresult-tittle');

  I.amOnPage('/');
  I.seeElement('.list a');
  I.seeElement('.list a h4.card-tittle');
  const firstRestaurantBtn = locate('.list a').first();
  I.click(firstRestaurantBtn);

  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.seeElement('#likedBtn');
  I.click('#likedBtn');

  I.amOnPage('/#/favorites');
  I.seeElement('#empty-resto');
  I.see('Oops! there are no favorites yet', '.noresult-tittle');
});
