const products = document.querySelectorAll('.product');

products.forEach((product) => {
  product.addEventListener('mouseenter', () => {
    const details = product.querySelector('.product-details');
    details.style.display = 'grid';
  });

  product.addEventListener('mouseleave', () => {
    const details = product.querySelector('.product-details');
    details.style.display = 'none';
  });
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const productName = product.querySelector('.product-name').textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});