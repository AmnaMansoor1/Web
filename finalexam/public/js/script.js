// Wait for the page to fully load
window.addEventListener('load', function () {
    // Initialize Swiper for the banner slider
    const bannerSlider = new Swiper('.homepage-slider', {
        loop: true, // Enables infinite looping
        slidesPerView: 1, // Display one slide at a time
        spaceBetween: 10, // Space between slides
        pagination: {
            el: '.swiper-pagination', // Pagination element
            clickable: true, // Allows pagination dots to be clickable
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next button element
            prevEl: '.swiper-button-prev', // Previous button element
        },
        autoplay: {
            delay: 3000, // Automatically switch slides every 3 seconds
            disableOnInteraction: false, // Autoplay will not stop on interaction
        },
    });

    // Example for related-color-item slider or horizontal slider
    const relatedColorSlider = new Swiper('.related-color-item-main', {
        loop: false, // No looping
        slidesPerView: 2.5, // Show 2.5 slides by default
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // Responsive settings
            750: {
                slidesPerView: 4, // Show 4 slides on screens wider than 750px
                spaceBetween: 20, // Adjust space for wider screens
            },
        },
    });
});

// for new swiper at bottom 
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Enable infinite loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
//for cards show more


// Define the cards to be added dynamically
// Define the cards to be added dynamically
const moreCards = `
  <div class="col">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/250" class="card-img-top" alt="Product">
      <div class="card-body text-center">
        <h5 class="card-title fw-bold">New Product</h5>
        <p class="card-text text-muted">Rs. 12,999</p>
      </div>
    </div>
  </div>
`;

// Add event listener for the "Show More" button
document.addEventListener('DOMContentLoaded', () => {
  const showMoreButton = document.getElementById('show-more');
  const productContainer = document.getElementById('product-container');

  showMoreButton.addEventListener('click', () => {
    // Create a new row for the additional cards
    const newRow = document.createElement('div');
    newRow.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'g-4');

    // Add 4 new cards to the new row
    newRow.innerHTML = moreCards.repeat(4);

    // Append the new row to the product container
    productContainer.appendChild(newRow);
  });
});

// for wishlist
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('product-container').addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-wishlist')) {
        const productId = event.target.dataset.productId;
        console.log('Add to Wishlist button clicked:', productId); // Debug log
  
        fetch('/wishlist/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              alert(data.error);
            } else {
              alert('Added to wishlist!');
            }
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }
    });
  });
  

