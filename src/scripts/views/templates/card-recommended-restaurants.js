import CONFIG from '../../globals/config';

const cardRecommendedRestaurans = (restaurant) => `
    <div class="card-recommendation-box m-1 me-2">
        <a href="#/detail/${restaurant.id}" class="text-decoration-none">
            <div class="d-flex rec-display">
                <div class="pic-recommendation-container">
                    <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                    class="img-fluid-rec lazyload" alt="${restaurant.name}" title="${restaurant.name}">
                </div>
                
                <div class="detail-rec-container p-3">
                    <h4 class="card-tittle mb-3">${restaurant.name}</h4>
                    <p class="rec-desc">${restaurant.description.slice(0, 170)}..</p>

                    <div class="d-flex space-between mt-3">
                        <div class="rating-location">
                            <i class="bi bi-star star-icon"></i>
                            <p class="rating ms-1">${restaurant.rating}</p>
                            <span class="mx-2 separate">|</span>
                            <i class="bi bi-geo-alt location-icon"></i>
                            <div class="location ms-1">${restaurant.city}</div>
                        </div>
                        <div class="see-more d-flex">
                            <p>See more</p>
                            <i class="bi bi-arrow-right ms-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
`;

export default cardRecommendedRestaurans;
