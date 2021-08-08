/* eslint-disable array-callback-return */
import skipToContent from '../views/templates/skip-to-content';
import detailRestaurantItem from '../views/templates/detail/detail-restaurant-information';
import detailCategoryItem from '../views/templates/detail/detail-restaurant-category';
import { foodTemplate, drinkTemplate } from '../views/templates/detail/detail-restaurant-menu';
import reviewTemplate from '../views/templates/detail/detail-restaurant-review';
import formReviewInitiator from './form-review-initiator';
import suggestedRestaurantTemplate from '../views/templates/card-recommended-restaurants';

const detailPageInitiator = {
  init({
    data,
    skipContent,
    contentTarget,
    info,
    category,
    food,
    drink,
    review,
    id,
    form,
    inputName,
    inputReview,
    toastContainer,
    allDataSource,
    suggested,
  }) {
    this._data = data;
    this._skipContent = skipContent;
    this._contentTarget = contentTarget;
    this._info = info;
    this._category = category;
    this._food = food;
    this._drink = drink;
    this._review = review;
    this._id = id;
    this._form = form;
    this._inputName = inputName;
    this._inputReview = inputReview;
    this._toastContainer = toastContainer;
    this._allDataSource = allDataSource;
    this._suggested = suggested;

    this._skipToContent();
    this._loadResto();
    this._loadCategory();
    this._loadFood();
    this._loadDrink();
    this._loadReview();
    this._formHandlerInit();
    this._suggestedRestaurant();
  },

  _skipToContent() {
    this._skipContent.innerHTML = skipToContent(this._contentTarget);
  },

  _loadResto() {
    this._info.innerHTML = detailRestaurantItem(this._data.restaurant);
  },

  _loadCategory() {
    this._data.restaurant.categories.forEach((category) => {
      this._category.innerHTML += detailCategoryItem(category);
    });
  },

  _loadFood() {
    this._data.restaurant.menus.foods.forEach((food) => {
      this._food.innerHTML += foodTemplate(food);
    });
  },

  _loadDrink() {
    this._data.restaurant.menus.drinks.forEach((drink) => {
      this._drink.innerHTML += drinkTemplate(drink);
    });
  },

  _loadReview() {
    this._data.restaurant.customerReviews.forEach((review) => {
      this._review.innerHTML += reviewTemplate(review);
    });
  },

  _formHandlerInit() {
    formReviewInitiator.init({
      id: this._id,
      form: this._form,
      name: this._inputName,
      review: this._inputReview,
      container: this._review,
      toastContainer: this._toastContainer,
    });
  },

  _suggestedRestaurant() {
    if (this._suggested) {
      this._allDataSource.restaurants
        .filter((restaurant) => parseFloat(restaurant.rating) >= 4.5)
        .map((filteredRestaurant) => {
          this._suggested.innerHTML += suggestedRestaurantTemplate(filteredRestaurant);
        });
    }
  },
};

export default detailPageInitiator;
