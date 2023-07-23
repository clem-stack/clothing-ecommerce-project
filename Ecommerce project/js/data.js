let productsData = [{
    id: 1,
    name:"Colorful Pattern Shirt",
    image: "/assets/img/product-1-1.jpg",
    image2: "/assets/img/product-1-2.jpg",
    newprice: 238.85,
    oldprice: 250.00,
    category: "shirt",
},
{
    id: 2,
    name:"Colorful Pattern Shirt",
    image: "/assets/img/product-2-1.jpg",
    image2: "/assets/img/product-2-2.jpg",
    newprice: 238.85,
    oldprice: 250.00,
    category: "shirt",
},
{
    id: 3,
    name:"Sneakers",
    image: "/assets/img/product-3-1.jpg",
    image2: "/assets/img/product-3-2.jpg",
    newprice: 200.00,
    oldprice: 280.00,
    category: "shoe",
},
{
    id: 4,
    name:"Baggy pants",
    image: "/assets/img/product-4-1.jpg",
    image2: "/assets/img/product-4-2.jpg",
    newprice: 38.85,
    oldprice: 45.49,
    category: "trouser",
},
{
    id: 5,
    name:"Colorful Scarf",
    image: "/assets/img/product-5-1.jpg",
    image2: "/assets/img/product-5-2.jpg",
    newprice: 34.99,
    oldprice: 54.99,
    category: "hat",
},
{
    id: 6,
    name:"Colorful Flower Pattern Shirt",
    image: "/assets/img/product-6-1.jpg",
    image2: "/assets/img/product-6-2.jpg",
    newprice: 118.00,
    oldprice: 130.00,
    category: "shirt",
},
{
    id: 7,
    name:"Pattern Blouse",
    image: "/assets/img/product-7-1.jpg",
    image2: "/assets/img/product-7-2.jpg",
    newprice: 238.85,
    oldprice: 250.00,
    category: "women top",
},
{
    id: 8,
    name:"Henley Shirt",
    image: "/assets/img/product-8-1.jpg",
    image2: "/assets/img/product-8-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category: "shirt",
},
{
    id: 9,
    name:"Colorful Flower Pattern Shirt",
    image: "/assets/img/product-9-1.jpg",
    image2: "/assets/img/product-9-2.jpg",
    newprice: 118.00,
    oldprice: 130.00,
    category: "shirt",
},
{
    id: 10,
    name:"MultiColor women shoe",
    image: "/assets/img/product-10-1.jpg",
    image2: "/assets/img/product-10-2.jpg",
    newprice: 200.00,
    oldprice: 300.00,
    category: "shoe",
},
{
    id: 11,
    name:"Flower pattern Women Trouser",
    image: "/assets/img/product-11-1.jpg",
    image2: "/assets/img/product-11-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category: "trouser",
},
{
    id: 12,
    name:"Women white V-neck T-shirt",
    image: "/assets/img/product-12-1.jpg",
    image2: "/assets/img/product-12-2.jpg",
    newprice: 100.00,
    oldprice: 180.00,
    category: "shirt",
},
{
    id: 13,
    name:"Women Bag",
    image: "/assets/img/product-13-1.jpg",
    image2: "/assets/img/product-13-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category:  "bag",
},
{
    id: 14,
    name:"Men Vintage Graffiti Shirt",
    image: "/assets/img/product-14-1.jpg",
    image2: "/assets/img/product-14-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category:  "shirt",
},
{
    id: 15,
    name:"Men Beach Stripe Printed Short Sleeve Shirt SHorts Two Piece",
    image: "/assets/img/product-15-1.jpg",
    image2: "/assets/img/product-15-2.jpg",
    newprice: 450.00,
    oldprice: 630.00,
    category:  "shirt",
},
{
    id: 16,
    name:"Men Hawaiian Shirt Summer Stripe Short Sleeve",
    image: "/assets/img/product-16-1.jpg",
    image2: "/assets/img/product-16-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category:  "shirt",
},
{
    id: 17,
    name:"Men Button Down Sleeve Strip Shirt",
    image: "/assets/img/product-17-1.jpg",
    image2: "/assets/img/product-17-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category:  "shirt",
},
{
    id: 18,
    name:"Butterfly Shirt",
    image: "/assets/img/product-18-1.jpg",
    image2: "/assets/img/product-18-2.jpg",
    newprice: 300.00,
    oldprice: 450.00,
    category:  "shirt",
}
]


const tabContainer = document.querySelector('.tabcontainer');
const productGalleryContainer = document.querySelector('.productgallerycontainer');

let generateProductCatalog = () => {
    return (tabContainer.innerHTML = productsData.map((x) => {
        let {id, name, image, image2, newprice, oldprice, category} = x

        return `
            <div class="productitem" id = id-product-${id}>
                <div class="productbanner">
                    <a href="productpage.html" class="productimagelink">
                        <img src=${image} alt="product-1-1" class="productimage default">

                        <img src=${image2} alt="product-1-1" class="productimage hover">
                    </a>

                    <div class="productactions">
                        <a href="#" class="actionbtns" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
                        <a href="#" class="actionbtns" aria-label="Add to Wishlist"><i class="fi fi-rs-heart"></i></a>
                        <a href="#" class="actionbtns" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
                    </div>

                    <div class="productbadge light-pink">Hot</div>
                </div>

                <div class="productdesc">
                    <span class="productcategory">${category}</span>
                    <a href="productpage.html"><h3 class="producttitle">${name}</h3></a>
                    <div class="productrating">
                        <i class="fi-rs-star"></i>
                        <i class="fi-rs-star"></i>
                        <i class="fi-rs-star"></i>
                        <i class="fi-rs-star"></i>
                        <i class="fi-rs-star"></i>
                    </div>
                    <div class="productprice">
                        <span class="newprice">$ ${newprice}</span>
                        <span class="oldprice">$ ${oldprice}</span>
                    </div>
                    <a href="#" class="actionbtns cartbtn" aria-label="Add to Cart"><i class="fi fi-rs-shopping-bag"></i></a>
                </div>
            </div>
        `
    }).join(''));
}

generateProductCatalog();

