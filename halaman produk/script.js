const form = document.getElementById('review-form');
    const nameInput = document.getElementById('reviewer-name');
    const ratingInput = document.getElementById('reviewer-rating');
    const commentInput = document.getElementById('reviewer-comment');
    const reviewsList = document.getElementById('reviews-list');

    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');

    const renderReviews = () => {
      reviewsList.innerHTML = '';
      reviews.forEach(r => {
        const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        reviewsList.innerHTML += `
          <div class="bg-gray-100 p-4 rounded-xl">
            <p class="text-sm text-yellow-500 font-medium">${stars}</p>
            <p class="text-gray-800 mt-1">${r.comment}</p>
            <p class="text-sm text-gray-500 mt-1">— ${r.name}</p>
          </div>
        `;
      });
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newReview = {
        name: nameInput.value.trim(),
        rating: parseInt(ratingInput.value),
        comment: commentInput.value.trim()
      };
      reviews.unshift(newReview);
      localStorage.setItem('reviews', JSON.stringify(reviews));
      renderReviews();
      form.reset();
    });
  document.getElementById("back-button").addEventListener("click", function () {
    window.history.back();
    });
    renderReviews();