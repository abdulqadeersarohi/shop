const whatsappNumber = "923332736004";

const products = [
    { name: "BOOST PLUS 20000MAH POWER BANK", price: "3999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec_7_9Pkry4kGigVV6w23bdZJOilrNOsr3w&s" },
    { name: "EVO PODS", price: "2999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJihbeZxabybBnXc2EPSe8fx81VF7z3Wl6IA&s" },
    { name: "EARBUDS ONE", price: "3799", img: "https://img.drz.lazcdn.com/static/pk/p/f5c6cee43e02a8e82681a399dcf946ca.jpg" },
    { name: "GOOGLE PIXEL 30W CHARGER", price: "1399", img: "https://5.imimg.com/data5/IOS/Default/2023/11/363229349/XG/SP/VU/182495721/product-jpeg-500x500.png" },
    { name: "REX H.F INTERLINK", price: "599", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCRM6NcKhmhRN25yoU0rdMkZHt9Rx5iVSnA&s" },
    { name: "60W CABLE SET", price: "499", img: "https://static-01.daraz.pk/p/f75027d21b24fe12e194e9966494c1ef.jpg" },
    { name: "6 IN 1 LADIES SMART WATCH", price: "2999", img: "https://www.anasvlogs.com/cdn/shop/files/A59_girls_watch.jpg" },
    { name: "DY88 COOLING FAN", price: "1999", img: "https://pk-live-21.slatic.net/kf/S2253f28307404a628c1efef3dab23f44a.jpg" },
    { name: "BIKE SPEAKER WITH HEAD LIGHT", price: "2499", img: "https://sc04.alicdn.com/kf/H218ac9a9cf8e4ad685b7b77dc021d6eds.jpg" },
    { name: "ULTRA SMART WATCH", price: "2999", img: "https://img.drz.lazcdn.com/static/pk/p/5c3f0dd36bb8d2718f26436e1fedfae1.jpg" },

    { name: "MINI FAN", price: "999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWwLI1-F3Qm0_ZNR2pmVzAz9HqiTpAhNjhg&s" },
    { name: "VLOGGING TRIPOD KIT", price: "1499", img: "https://static01.galaxus.com/productimages/7/8/6/8/2/7/1/3/2/9/5/9/1/7/7/8/9/0/3/2022b3e5-9595-4df7-aff6-0bdae562af6e_cropped.jpg_720.jpeg" },
    { name: "STEREO EARBUDS", price: "1199", img: "https://static-01.daraz.pk/p/00cd5044d2cf9a4f9aeb06eff3b8c55e.jpg" },
    { name: "CAMERA SHAPE BLUETOOTH SPEAKER", price: "1699", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSkyJfnxQyaLZByjCVtG_39LtdSqzmWgYfg&s" },
    { name: "SAMSUNG 45W CHARGER C TO C", price: "1999", img: "https://img.drz.lazcdn.com/static/pk/p/626e74921d9b905ed7802e789e2ff199.jpg" },

    { name: "ALFA CHIP INTERNET", price: "1199", img: "https://img.drz.lazcdn.com/static/pk/p/db94dae3705ca5cabf618ddcabfb8cf1.jpg_960x960q80.jpg_.webp" },
    { name: "LENOVO NECKBAND ", price: "899", img: "https://pakistanstore.pk/wp-content/uploads/2022/01/Lenovo-HE05-Headphone.jpg" },
    { name: "HP WIRELESS MOUSE ", price: "849", img: "https://static-01.daraz.pk/p/07882853d0529f02120d14cc7ade0553.jpg" },
    { name: "XBOX 360 GAME PAD ", price: "2499", img: "https://gamesandgears.pk/wp-content/uploads/2016/12/1-10.jpg" },
    { name: "X-69 TYPE C HEADFREE ", price: "549", img: "https://static-01.daraz.pk/p/9cda29de095b99727ec01d4cac1342aa.jpg" },

    { name: "D1 DIGIT MOBILE ", price: "2999", img: "https://shoptech.com.pk/wp-content/uploads/2026/03/F3C15C87-FA02-4BF8-BE3B-71AD7AF3EBC7_1000x-236x300.webp" },
    { name: "BMW5 MOBILE PHONE ", price: "2799", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJvrWwlGQb283suLpe-R0luLtEzqWEvkeAA&s" },
    { name: "ITEL 2165 MOBILE ", price: "2699", img: "https://static-01.daraz.pk/p/3fcb5499b91ec275a04195915124b4cf.jpg" },
    { name: "DIGIT BOLT MOBILE ", price: "2299", img: "https://shuhaz.com/wp-content/uploads/2025/08/digit-bolt-1-8-inch-display-dual-sim-1200mah-battery-76.webp" },
    { name: "VEGOTEL SMART MOBILE PHONE ", price: "3499", img: "https://vgotel.com/cdn/shop/files/i104-1000x1000-Laurel-Green_940x.jpg?v=1755198012" },

    { name: "BX 324 DRIVE GRIP ", price: "1099", img: "https://pk-live-21.slatic.net/kf/S5d14b95040424b94abed3c583845d2b6t.jpg" },
    { name: "3 in 1 INTERLINK CABLE ", price: "599", img: "https://pk-live-21.slatic.net/kf/Sd42ff2e86f4041208027979426d1c4c0H.jpg" },
    { name: "K8 BLUETHOOT MIC ", price: "999", img: "https://umaimaessentials.com/cdn/shop/files/WhatsAppImage2024-07-17at4.49.07PM.jpg?v=1721217544" },
    { name: "INTERLINK BRAVO 10000MAH POWERBANK", price: "2699", img: "https://interlinkcap.com/cdn/shop/files/WhatsAppImage2025-08-27at3.30.14PM_533x.jpg?v=1759401917" },
    { name: "GALAXY BUDS 3 PRO  ", price: "2999", img: "https://technoshop.pk/wp-content/uploads/2024/12/Samsung-R630-Galaxy-Buds3-Pro.webp" },

    { name: "AIRPODS PRO COPY", price: "999", img: "https://m.media-amazon.com/images/I/61SUj2aKoEL.jpg" },
    { name: "SOLAR BLUETHOOT SPEAKER", price: "1699", img: "https://rmgtraders.pk/wp-content/uploads/2025/05/sp6.webp" },
    { name: "KTS-1685 SPEAKER WITH MIC ", price: "4899", img: "https://img.website.xin/contents/sitefiles3607/18036930/images/9119888.jpg" },
    { name: "X-35 COMPUTER SPEAKER", price: "2499", img: "https://sc04.alicdn.com/kf/Ha067851cbad844fe8d673d8769117a6ft.jpg" },
    { name: "AUDIONIC BETTLE BUDS LITE", price: "4849", img: "https://static-01.daraz.pk/p/c02da9f2dac92ea12c15a63a1119f1f5.png" },

    { name: "DANY PREMUIM IPHONE CABLE ", price: "499", img: "https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/1/2/1280818-1.jpg" },
    { name: "POP UP IPHONE H.F ", price: "499", img: "https://img.drz.lazcdn.com/static/pk/p/30ba64e1a12ba2a451880ff82d39197c.jpg_720x720q80.jpg" },
    { name: "INTERLINK TYPE C CHARGER ", price: "999", img: "https://pk-live-21.slatic.net/kf/S73c24964e5e648c0a0f16c38de6db59bA.jpg" },
    { name: "REVIVE CAR CHARGER ", price: "1099", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWZScTC3RQ_lPwp96-_nuNJprLJLzshynpA&s" },
    { name: "INTERLINK AXE MICRO", price: "199", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpvhwGwUuFQb7ZaEjgvN3CnwaL746J6ESWg&s" },

    { name: "POWER CABLE ", price: "199", img: "https://www.laptopspares.pk/cdn/shop/products/laptop-power-cablejpg_829x.jpg?v=1608974553" },
    { name: "HDMI CABLE", price: "299", img: "https://img.drz.lazcdn.com/static/pk/p/d9cbd77524c729a73e72d7a0c28501fe.jpg_720x720q80.jpg" },
    { name: "RGB GAMING MOUSE", price: "1299", img: "https://img.drz.lazcdn.com/static/pk/p/79361435810297f6aebac8cabe66545f.jpg_720x720q80.jpg" },
];

// باقی code same rahega
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

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

function searchItems() {
    let val = document.getElementById('searchBox').value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(val));
    displayProducts(filtered);
}

displayProducts(products);