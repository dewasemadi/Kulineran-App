Feature('Add Costumer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add Costumer Review', ({ I }) => {
  const costumer = 'Asep Looping';
  const reviewText = 'Add review from e2e testing';

  I.seeElement('.list a');
  const firstRestaurant = locate('.list a').first();
  I.click(firstRestaurant);

  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('.btn-submit');
  I.fillField('#name', costumer);
  I.fillField('#review', reviewText);
  I.click('.btn-submit');

  I.see(reviewText, 'p.message');
});
