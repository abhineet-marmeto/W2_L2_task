document.addEventListener('DOMContentLoaded', function () {
  var jsonData = {
    "items": [
      {
        "category": "Exquisite Watches",
        "tag_line": "Gold Luxury",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "499.00",
        "product_image": "image1.png",
        "ambient_color": "#FFD700",
      },
      {
        "category": "Dainty Timepieces",
        "tag_line": "Silver Luxury",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "469.00",
        "product_image": "image2.png",
        "ambient_color": "#C0C0C0",
      },
      {
        "category": "Elegant Timepieces",
        "tag_line": "Choose Luxury",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "529.00",
        "product_image": "image3.png",
        "ambient_color": "#228B22",
      },
      {
        "category": "Exquisite Watches",
        "tag_line": "Choose Luxury",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "599.00",
        "product_image": "image4.png",
        "ambient_color": "#FF4500",
      },
    ]
  };

  var splide = new Splide('#image-carousel', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    arrows: true, // Removes the pagination controls
    pagination: false,
  }).mount();

  splide.on('move', function (newIndex) {
    var item = jsonData.items[newIndex];
    document.getElementById('category').innerText = item.category;
    document.getElementById('tagline').innerHTML = item.tag_line + ', ';
    document.getElementById('description').innerText = item.description;
    document.getElementById('price').innerText = '$ ' + item.price;
    document.body.style.background = `linear-gradient(to right, ${item.ambient_color}, #C0C0C0)`;
  });

  // Set initial values
  var initialItem = jsonData.items[0];
  document.getElementById('category').innerText = initialItem.category;
  document.getElementById('tagline').innerHTML = initialItem.tag_line + ', ';
  document.getElementById('description').innerText = initialItem.description;
  document.getElementById('price').innerText = '$ ' + initialItem.price;
  document.body.style.background = `linear-gradient(to right, ${initialItem.ambient_color}, #C0C0C0)`;
});
