import CONFIG from '../../globals/config';

const cardRestaurantItem = (restaurant) => `
<a href="#/detail/${restaurant.id}" class="text-decoration-none">
    <div class="card-container">
        <div class="picture-container">
            <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                class="img-fluid lazyload" alt="${restaurant.name}" title="${restaurant.name}">
        </div>

        <div class="p-3">
            <h4 class="card-tittle mb-3">${restaurant.name}</h4>
            <p class="card-description">${restaurant.description.slice(0, 170)}...</p>

            <div class="rat-see-container d-flex space-between mt-3">
                <div class="rating-location">
                    <i class="bi bi-star star-icon"></i>
                    <p class="rating ms-1">${restaurant.rating}</p>
                    <span class="mx-2 separate">|</span>
                    <i class="bi bi-geo-alt location-icon"></i>
                    <div class="location ms-1">${restaurant.city}</div>
                </div>
                <div class="see-more see-more-overview d-flex">
                    <p>See more</p>
                    <i class="bi bi-arrow-right ms-1"></i>
                </div>
            </div>
        </div>
    </div>
</a>
`;

export default cardRestaurantItem;
