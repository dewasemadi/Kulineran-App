const restaurantReviewTemplate = (customerReviews) => `
<div class="border-review p-3">
    <p class="user-name">${customerReviews.name}</p>
    <div class="d-flex my-1">
        <i class="my-auto bi bi-calendar-check calendar-icon"></i>
        <p class="my-auto ms-2 time-review">${customerReviews.date}</p>
    </div>
    <p class="message mt-3">${customerReviews.review}</p>
</div>
`;

export default restaurantReviewTemplate;
