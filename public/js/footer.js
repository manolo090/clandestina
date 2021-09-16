const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
                <img src="img/light-logo.png" alt="" class="logo">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-tittle">men</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>
                    <ul class="category">
                        <li class="category-tittle">women</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>
                </div>
            </div>
            <p class="footertittle">abut compant</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in. Vel animi sapiente asperiores exercitationem eum soluta porro possimus. Animi libero, culpa ratione optio molestias est cum qui accusantium odio eos dolorum molestiae, ad odit hic ipsum suscipit? Accusamus libero deserunt cumque quidem labore assumenda facilis odio modi praesentium voluptates harum sequi ipsum aliquid explicabo ut non sed fugit error, magni dolor, maxime earum et numquam est? Aperiam hic sequi iste officiis nisi voluptatum ratione, magni, magnam voluptatibus atque dolorum fugiat in enim accusamus modi tenetur, cum odit! Reprehenderit dignissimos, quod quos eveniet consectetur laudantium nobis rem doloribus aspernatur atque?</p>
            <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();