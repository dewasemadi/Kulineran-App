/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */

import cardRestaurantItem from '../views/templates/card-restaurants-overview';
import noResultFoundTemplate from '../views/templates/no-result-found';

const SearchRestaurantInitiator = {
  init({ searchElement, restaurantsBuffer, restaurantsContainerInit, illustration }) {
    this._searchElement = searchElement;
    this._restaurantsBuffer = restaurantsBuffer;
    this._restaurantsContainerInit = restaurantsContainerInit;
    this._illustration = illustration;

    if (searchElement) {
      searchElement.addEventListener('keyup', (event) => {
        this._eventSearch(event);
      });
    }
  },

  _eventSearch(event) {
    const searchRestaurant = event.target.value.toLowerCase();
    const filteredRestaurants = this._restaurantsBuffer.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchRestaurant) ||
        restaurant.city.toLowerCase().includes(searchRestaurant)
    );

    if (Array.isArray(filteredRestaurants) && filteredRestaurants.length) {
      this._displayRestaurants(filteredRestaurants);
      this._restaurantsContainerInit.classList.remove('d-none');
      this._illustration.classList.add('d-none');
    } else {
      this._restaurantsContainerInit.classList.add('d-none');
      this._illustration.classList.remove('d-none');
      this._illustration.innerHTML = noResultFoundTemplate(searchRestaurant);
    }
  },

  _displayRestaurants(restaurants) {
    const userKeyword = restaurants.map((restaurant) => cardRestaurantItem(restaurant)).join('');
    this._restaurantsContainerInit.innerHTML = userKeyword;
  },
};

export default SearchRestaurantInitiator;
