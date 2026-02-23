// 1. Apna WhatsApp No yahan likho
const whatsappNumber = "923702755410"; 

// 2. 15 Products ka Data
const products = [
    { name: "BOOST PLUS 20000MAH POWER BANK ", price: "3999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec_7_9Pkry4kGigVV6w23bdZJOilrNOsr3w&s" },
    { name: "EVO PODS ", price: "2999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJihbeZxabybBnXc2EPSe8fx81VF7z3Wl6IA&s" },
    { name: "EARBUDS ONE ", price: "3799", img: "https://img.drz.lazcdn.com/static/pk/p/f5c6cee43e02a8e82681a399dcf946ca.jpg_960x960q80.jpg_.webp" },
    { name: "GOOGLE PIXLE 30W SHO", price: "1399", img: "https://5.imimg.com/data5/IOS/Default/2023/11/363229349/XG/SP/VU/182495721/product-jpeg-500x500.png" },
    { name: "REX H.F INTERLINK", price: "599", img: "https://interlinkcap.com/cdn/shop/files/WhatsAppImage2025-11-27at12.23.50PM_1_533x.jpg?v=1764398121" },
    { name: "60W CABLE SET", price: "499", img: "https://static-01.daraz.pk/p/f75027d21b24fe12e194e9966494c1ef.jpg" },
    { name: "6 IN 1 LADIES SMART WATCH ", price: "2999", img: "https://www.anasvlogs.com/cdn/shop/files/A59_girls_watch.jpg?v=1728070282&width=1445" },
    { name: "DY88 COLING FAN", price: "1999", img: "https://pk-live-21.slatic.net/kf/S2253f28307404a628c1efef3dab23f44a.jpg" },
    { name: "BIKE SPEAKER WITH HEAD LIGHT ", price: "2499", img: "https://sc04.alicdn.com/kf/H218ac9a9cf8e4ad685b7b77dc021d6eds.jpg" },
    { name: "ULTRA SMART WATCH", price: "2999", img: "https://img.drz.lazcdn.com/static/pk/p/5c3f0dd36bb8d2718f26436e1fedfae1.jpg_960x960q80.jpg_.webp" },
    { name: "MINI FAN ", price: "999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWwLI1-F3Qm0_ZNR2pmVzAz9HqiTpAhNjhg&s" },
    { name: "VLOGGING TRIPOD KIT", price: "1499", img: "https://static01.galaxus.com/productimages/7/8/6/8/2/7/1/3/2/9/5/9/1/7/7/8/9/0/3/2022b3e5-9595-4df7-aff6-0bdae562af6e_cropped.jpg_720.jpeg" },
    { name: "STEREO EARBUDS ", price: "1199", img: "https://static-01.daraz.pk/p/00cd5044d2cf9a4f9aeb06eff3b8c55e.jpg" },
    { name: "CAMERA SHAPE BLUTHOOT SPEAKER", price: "1699", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSkyJfnxQyaLZByjCVtG_39LtdSqzmWgYfg&s" },
    { name: "SAMSUNG 45W CHARGER C TO C ", price: "1999", img: "https://img.drz.lazcdn.com/static/pk/p/626e74921d9b905ed7802e789e2ff199.jpg_720x720q80.jpg" }
];

// 3. Page Badalne ka function
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// 4. Products Render karna
function displayProducts(data) {
    const container = document.getElementById('product-container');
    container.innerHTML = "";
    data.forEach(item => {
        let msg = encodeURIComponent(`Hello HRH Enterprises! I want to order: ${item.name} for Rs.${item.price}`);
        container.innerHTML += `
            <div class="card">
                <img src="${item.img}">
                <h3>${item.name}</h3>
                <p class="price">Rs. ${item.price}</p>
                <a href="https://wa.me/${whatsappNumber}?text=${msg}" class="wa-btn">Order on WhatsApp</a>
            </div>
        `;
    });
}

// 5. Search Logic
function searchItems() {
    let val = document.getElementById('searchBox').value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(val));
    displayProducts(filtered);
}

// Start pe products dikhao
displayProducts(products);