const buttonWithLink = (target, text, classCustom) => `
    <a href="${target}" class="smooth text-decoration-none">
        <button class="${classCustom}" aria-label="${text}">${text}</button> 
    </a>
`;

export default buttonWithLink;
