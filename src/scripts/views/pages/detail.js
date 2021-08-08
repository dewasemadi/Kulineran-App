/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import restaurantsDBsource from '../../data/restaurantDB-source';
import detailPageInitiator from '../../utils/detail-page-initiator';

import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <my-preloader></my-preloader>
    <notfound-illustration id="not-found-detail" class="d-none"></notfound-illustration>
    <toast-notification></toast-notification>
    <div id="toast-2"></div>

    <div id="detail-container" class="d-none">
      <div id="detail-resto-info-container"></div>      
      <div id="categories-container" class="categories container"></div>

      <section class="bg-menu mt-2">
          <div class="container py-4">
              <p class="menu-resto-tittle">Menu Available</p>
              <div class="menu-container pt-4">
                  <div>
                      <p class="foods-tittle">Foods</p>
                      <div id="food-container" class="foods-container pt-3"></div>
                  </div>
                  <div>
                      <p class="drinks-tittle">Drinks</p>
                      <div id="drink-container" class="drinks-container pt-3"></div>
                  </div>
              </div>
          </div>
      </section>

      <section class="bg-menu mt-2">
          <div class="container py-4">
              <p class="menu-resto-tittle">Customer Reviews</p>
              <div id="review-container" class="review-container mt-4"></div>
          </div>
      </section>

      <my-review class="mb-3"></my-review>

      <div class="container">
        <p class="menu-resto-tittle mt-5">Suggested restaurants for you</p>
        <div id="recommended-restaurants" class="d-flex my-4 overflow-x"></div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    this._scrollTop();
    const skipToContentContainer = document.querySelector('#skip-to-content');
    const detailRestoInfoContainer = document.querySelector('#detail-resto-info-container');
    const detailRestoCategoryContainer = document.querySelector('#categories-container');

    const foodContainer = document.querySelector('#food-container');
    const drinkContainer = document.querySelector('#drink-container');
    const reviewContainer = document.querySelector('#review-container');
    const notFoundContainer = document.querySelector('#not-found-detail');
    const toastContainerInit = document.querySelector('#toast-container');
    const recommendedRestaurantsContainer = document.querySelector('#recommended-restaurants');

    const formContainer = document.querySelector('form');
    const userName = document.querySelector('#name');
    const userReview = document.querySelector('#review');
    const toast = document.querySelector('#toast-2');

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const allData = await restaurantsDBsource.restaurantList();
      const dataSourceById = await restaurantsDBsource.detailRestaurant(url.id);

      detailPageInitiator.init({
        data: dataSourceById,
        skipContent: skipToContentContainer,
        contentTarget: '#main-content-restaurant-info',
        info: detailRestoInfoContainer,
        category: detailRestoCategoryContainer,
        food: foodContainer,
        drink: drinkContainer,
        review: reviewContainer,

        id: url.id,
        form: formContainer,
        inputName: userName,
        inputReview: userReview,
        toastContainer: toastContainerInit,
        allDataSource: allData,
        suggested: recommendedRestaurantsContainer,
      });

      LikeButtonPresenter.init({
        likeBtnContainer: document.querySelector('#likeBox'),
        toastContainer: toast,
        restaurant: {
          id: dataSourceById.restaurant.id,
          name: dataSourceById.restaurant.name,
          city: dataSourceById.restaurant.city,
          rating: dataSourceById.restaurant.rating,
          description: dataSourceById.restaurant.description,
          pictureId: dataSourceById.restaurant.pictureId,
        },
      });
      await this._deletePreloader();
    } catch (error) {
      notFoundContainer.classList.remove('d-none');
      await this._deletePreloaderError();
    }
  },

  _scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

  async _deletePreloader() {
    const detailContainer = document.querySelector('#detail-container');
    const preloaderContainer = document.querySelector('my-preloader');
    const detailRestoCategoryContainer = document.querySelector('#categories-container');

    preloaderContainer.style.display = 'none';
    detailContainer.classList.remove('d-none');
    detailRestoCategoryContainer.classList.add('pb-4');
  },

  async _deletePreloaderError() {
    const preloaderContainer = document.querySelector('my-preloader');
    preloaderContainer.style.display = 'none';
  },
};

export default Detail;
