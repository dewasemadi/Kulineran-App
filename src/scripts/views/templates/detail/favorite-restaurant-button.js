const likeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeBtn" class="likeContainer" style="cursor: pointer;">
    <i class="bi bi-heart my-2 bookmark-icon" style="font-size: 2em;"></i>
</button>
`;

const likedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likedBtn" class="likeContainer" style="cursor: pointer;">
    <i class="bi bi-heart-fill my-2 bookmark-icon" style="font-size: 2em; color: #EB4132;"></i>
</button>
`;

export { likeButtonTemplate, likedButtonTemplate };
