/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeBtnContainer: document.querySelector('#likeBtnContainer'),
    toastContainer: document.querySelector('#toast-container'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
