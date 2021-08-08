/* eslint-disable no-new */
/* eslint-disable array-callback-return */
import TypeWriter from 'typewriter-effect/dist/core';
import cardRecommendationItem from '../views/templates/card-recommended-restaurants';
import cardRestaurantOverview from '../views/templates/card-restaurants-overview';
import searchRestaurantInit from './search-restaurants-initiator';

import skipToContent from '../views/templates/skip-to-content';
import btnWithLink from '../views/templates/button-with-link';

const homePageInitiator = {
  init({
    data,
    skipContent,
    btnJumbotron,
    buffer,
    recommendationContainer,
    restaurantsContainer,
    searchElement,
    illustration,
    typewriter,
  }) {
    this._data = data;
    this._skipContent = skipContent;
    this._btnJumbotron = btnJumbotron;
    this._buffer = buffer;
    this._recommendationContainer = recommendationContainer;
    this._restaurantsContainer = restaurantsContainer;
    this._searchElement = searchElement;
    this._illustration = illustration;
    this._typewriter = typewriter;

    this._skipToContent();
    this._btnJumbotronInit();
    this._recommendedRestaurant();
    this._restaurantList();
    this._searchRestaurant();
    this._typewriterInit();
  },

  _skipToContent() {
    this._skipContent.innerHTML = skipToContent('#main-content-restaurant');
  },

  _btnJumbotronInit() {
    this._btnJumbotron.innerHTML = btnWithLink(
      '#main-content-restaurant',
      'Browse Now',
      'btn-jumbotron'
    );
  },

  _recommendedRestaurant() {
    if (this._recommendationContainer) {
      this._data.restaurants
        .filter((restaurant) => parseFloat(restaurant.rating) >= 4.5)
        .map((filteredRestaurant) => {
          this._recommendationContainer.innerHTML += cardRecommendationItem(filteredRestaurant);
        });
    }
  },

  _restaurantList() {
    this._buffer.restaurants.forEach((restaurant) => {
      this._restaurantsContainer.innerHTML += cardRestaurantOverview(restaurant);
    });
  },

  _searchRestaurant() {
    searchRestaurantInit.init({
      searchElement: this._searchElement,
      restaurantsBuffer: this._data.restaurants,
      restaurantsContainerInit: this._restaurantsContainer,
      illustration: this._illustration,
    });
  },

  _typewriterInit() {
    const options = {
      strings: ['good mood.', 'good people.', 'good investments.'],
      autoStart: true,
      loop: true,
    };

    new TypeWriter(this._typewriter, options);
  },
};

export default homePageInitiator;
