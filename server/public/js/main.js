document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log('Message sent:', result);
        } catch (error) {
          console.error('Error sending message:', error);
        }
      });
    }
  
    const productList = document.getElementById('product-list');
    if (productList) {
      fetch('/api/products')
        .then((response) => response.json())
        .then((products) => {
          products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
              <h2>${product.name}</h2>
              <p>${product.description}</p>
              <p>$${product.price}</p>
              <img src="${product.image_url}" alt="${product.name}">
            `;
            productList.appendChild(productDiv);
          });
        })
        .catch((error) => console.error('Error fetching products:', error));
    }
  });
  