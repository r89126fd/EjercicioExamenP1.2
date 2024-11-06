async function fetchProducts()  {
          try {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const products = await response.json();

                    const productList = document.getElementById('product-list');
                    productList.innerHTML ='',

                    products.forEach(product => {
                              const productCard = `
                                  <div class="col-md-4 mb-4">
                                      <div class="card h-100">
                                          <img src="${product.image}" class="card-img-top" alt="${product.title}">
                                          <div class="card-body">
                                              <h5 class="card-title">${product.title}</h5>
                                              <p class="card-text">${product.description}</p>
                                              <p class="card-text"><strong>Categoría:</strong> ${product.category}</p>
                                              <p class="card-text"><strong>Precio:</strong> L${product.price.toFixed(2)}</p>
                                          </div>
                                      </div>
                                  </div>
                              `;
                    productList.innerHTML += productCard;
                    });
                    }catch (error) {
                              console.error('Error al obtener los productos:', error);
                    }
          }

fetchProducts();