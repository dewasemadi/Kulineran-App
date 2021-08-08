/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import restauranDBsource from '../../data/restaurantDB-source';
import homePageInitiator from '../../utils/home-page-initiator';

const Home = {
  async render() {
    return `
      <notfound-illustration id="not-found-detail" class="d-none"></notfound-illustration>
      <div id="home-section-container">
        <header class="jumbotron"><my-jumbotron></my-jumbotron></header>
        <div class="container pb-3" id="main-content-restaurant">
          <p class="features-tittle mt-5">Why choosing Kulineran?</p>
          <p class="features-description my-2">One platform with a lot of features</p>
          <kulineran-features></kulineran-features>

          <p class="recommendation-tittle">Restaurant recommendations</p>
          <p class="recommendation-desc my-2">Based on rating</p>
          <my-preloader></my-preloader>
          <div id="recommended-restaurants" class="d-flex my-5 overflow-x"></div>

          <p class="recommendation-tittle align-center">Are you ready?</p>
          <p class="recommendation-desc my-2 align-center">Let's explore the restaurant now!</p>
          <search-bar></search-bar>

          <my-preloader></my-preloader>

          <div id="restaurants" class="list mt-5"></div>
          <nofound-search class="d-none" id="nofound-illustration"></nofound-search>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const skipToContentContainer = document.querySelector('#skip-to-content');
    const recommendedRestaurantsContainer = document.querySelector('#recommended-restaurants');
    const restaurantsListContainer = document.querySelector('#restaurants');
    const searchbar = document.querySelector('#searchElement');
    const noFoundIllustration = document.querySelector('#nofound-illustration');
    const btnJumbotronContainer = document.querySelector('#button-jumbotron');
    const typeWriterContainer = document.querySelector('#typewriter');
    const notFoundContainer = document.querySelector('#not-found-detail');
    const homeContainer = document.querySelector('#home-section-container');

    try {
      const dataSource = await restauranDBsource.restaurantList();
      let restaurantsBuffer = [];
      restaurantsBuffer = await dataSource;

      homePageInitiator.init({
        data: dataSource,
        skipContent: skipToContentContainer,
        btnJumbotron: btnJumbotronContainer,

        buffer: restaurantsBuffer,
        recommendationContainer: recommendedRestaurantsContainer,
        restaurantsContainer: restaurantsListContainer,
        searchElement: searchbar,
        illustration: noFoundIllustration,
        typewriter: typeWriterContainer,
      });

      await this._deletePreloader();
    } catch (error) {
      notFoundContainer.classList.remove('d-none');
      homeContainer.classList.add('d-none');
      await this._deletePreloaderError();
    }
  },

  async _deletePreloader() {
    const preloaderContainer = document.querySelectorAll('my-preloader');
    preloaderContainer.forEach((preloader) => {
      preloader.style.display = 'none';
    });
  },

  async _deletePreloaderError() {
    const preloaderContainer = document.querySelector('my-preloader');
    preloaderContainer.style.display = 'none';
  },
};

export default Home;
