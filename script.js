const mainContent = document.getElementById('main-content');

function addCartFunctionality() {
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.parentElement;
            const productName = productCard.querySelector('h3').textContent;
            const selectedSize = productCard.querySelector('.size-select').value;
            const whatsappLink = `https://wa.me/201009562181?text=مرحبا، أريد شراء ${productName} بالمقاس ${selectedSize}`;
            window.open(whatsappLink, '_blank');
        });
    });
}

document.getElementById('home-btn').addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.innerHTML = `<section class="hero"><div class="hero-images"><img src="images/black-hoodie.jpg" alt="Black Hoodie"><img src="images/white-hoodie.jpg" alt="White Hoodie"></div></section>`;
});

document.getElementById('shop-btn').addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.innerHTML = `<section class="products"><h2>Our Collection</h2><div class="product-grid">
        <div class="product-card">
            <img src="images/black-hoodie.jpg" alt="Black Hoodie">
            <h3>Black Hoodie</h3>
            <select class="size-select">
                <option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
            </select>
            <p class="price">700 EGP</p>
            <button class="add-to-cart">Buy</button>
        </div>
        <div class="product-card">
            <img src="images/white-hoodie.jpg" alt="White Hoodie">
            <h3>White Hoodie</h3>
            <select class="size-select">
                <option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
            </select>
            <p class="price">700 EGP</p>
            <button class="add-to-cart">Buy</button>
        </div>
    </div></section>`;
    addCartFunctionality();
});

document.getElementById('about-btn').addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.innerHTML = `<section class="about"><h2>About BOB</h2><p>BOB started as a vision to create hoodies that are more than just clothing—they represent individuality, style, and a bold attitude. Inspired by urban life and street culture, BOB combines comfort with luxury using black and gold aesthetics. Each hoodie tells a story, and owning one is joining a movement of those who dare to stand out.</p></section>`;
});

document.getElementById('contact-btn').addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.innerHTML = `<section class="contact"><h2>Contact Us</h2><p>Call us at: <strong>+201009562181</strong></p></section>`;
});
