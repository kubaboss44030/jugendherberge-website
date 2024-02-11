document.addEventListener('DOMContentLoaded', () => {
    createRatingStars();
});

function createRatingStars() {
    const ratingSections = document.querySelectorAll('section');
    ratingSections.forEach(section => {
        const ratingContainer = document.createElement('div');
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.innerHTML = '☆';
            star.classList.add('star');
            star.dataset.value = i;
            star.addEventListener('click', function() {
                setRating(this, section.id);
            });
            ratingContainer.appendChild(star);
        }
        section.querySelector('p').appendChild(ratingContainer);
    });
}

function setRating(star, sectionId) {
    const stars = star.parentNode.children;
    const ratingValue = star.dataset.value;
    Array.from(stars).forEach(s => {
        s.innerHTML = s.dataset.value <= ratingValue ? '★' : '☆';
    });
    console.log(`Bewertung für ${sectionId}: ${ratingValue} Sterne`);
}

