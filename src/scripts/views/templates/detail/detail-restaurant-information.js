import CONFIG from '../../../globals/config';

const detailRestaurantInformation = (restaurant) => `
<div class="img-detail-restaurant">
    <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="img-fluid-detail lazyload">
</div>

<div class="bg-detail-resto">
    <div class="container py-2 pb-3">
        <div class="d-flex space-between">
            <div>
                <p id="main-content-restaurant-info" class="detail-resto-tittle my-2">${restaurant.name}</p>
                <div class="rating-location my-2 flex-direct-detail">
                    <div class="d-flex rat-width">
                        <i class="bi bi-star star-detail-icon"></i>
                        <p class="ms-1 rating-detail-desc">${restaurant.rating}</p>
                    </div>
                    <div class="d-flex">
                        <span class="mx-2 separate-detail-icon">|</span>
                        <i class="bi bi-geo-alt loc-detail-icon"></i>
                        <div class="ms-1 loc-detail-desc">${restaurant.address}, ${restaurant.city}</div>
                    </div>
                </div>
            </div>
            <div id="likeBox"></div>
            <!-- 
            <button aria-label="like this restaurant" id="likeBtn" class="likeContainer">
                <i class="bi bi-bookmark my-2 bookmark-icon" style="font-size: 1.9em; cursor: pointer;"></i>
            </button>
            -->
        </div>
        <p class="mt-3 description-tittle">Description</p>
        <p class="my-2 detail-resto-desc">${restaurant.description}</p>
    </div>
</div>
`;

export default detailRestaurantInformation;
