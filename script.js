var product = [{
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Minecraft-creeper-face.jpg',
    name: 'Minecraft',
    price: 260,
    description: 'Minecraft เป็นเกมแห่งการสร้างสรรค์ที่ให้คุณสร้างและสำรวจโลกไร้ขอบเขต! สนุกกับโหมด Survival ที่ต้องเอาชีวิตรอดจากมอนสเตอร์ และ Creative ที่คุณสามารถสร้างได้อย่างอิสระ เล่นคนเดียวหรือกับเพื่อน ๆ เพื่อสัมผัสประสบการณ์สุดพิเศษในโลกที่คุณออกแบบเอง!',
    type: 'game'
}, {
    id: 2,
    img: 'https://i0.wp.com/www.pipeworks.com/wp-content/uploads/2022/09/Terraria.jpg?fit=800%2C800&ssl=1',
    name: 'Terraria',
    price: 150,
    description: ' Terraria เกมผจญภัยและสำรวจที่เปิดโลกกว้างให้คุณค้นหาและสร้างอาณาจักรของตัวเอง ผสมผสานการต่อสู้กับบอสสุดท้าทาย สำรวจถ้ำลึกลับ รวบรวมทรัพยากร และสร้างสิ่งปลูกสร้างได้อย่างอิสระ ให้คุณได้สัมผัสประสบการณ์ใหม่ในโลกที่เต็มไปด้วยการผจญภัย!',
    type: 'game'
},
{
    id: 3,
    img: 'https://s.pacn.ws/1/p/pf/starbound-457843.10.jpg?v=rlqid2',
    name: 'Starbound',
    price: 170,
    description: 'Starbound เป็นเกมผจญภัยในอวกาศที่ให้คุณออกสำรวจดาวเคราะห์หลากหลาย พร้อมสร้างฐาน ท่องสำรวจ รวบรวมทรัพยากร และต่อสู้กับสิ่งมีชีวิตต่างดาว ดื่มด่ำในเนื้อเรื่องที่น่าติดตามหรือผจญภัยไปในกาแล็กซี่อย่างอิสระ สร้างโลกในแบบของคุณได้ไม่รู้จบ!',
    type: 'game'

}, {
    id: 4,
    img: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
    name: 'Red dead redemption 2',
    price: 1300,
    description: 'Red Dead Redemption 2 เป็นเกมแอ็กชันผจญภัยในยุคคาวบอย ผู้เล่นรับบท Arthur Morgan แก๊งนอกกฎหมาย ที่ต้องดิ้นรนเอาตัวรอดและเผชิญความขัดแย้งในโลกเปิดอันสมจริง',
    type: 'game'
}, {
    id: 5,
    img: 'https://upload.wikimedia.org/wikipedia/th/c/cc/Grand_Theft_Auto_V_Cover.png',
    name: 'Grand Theft Auto V',
    price: 1200,
    description: 'GTA V หรือ Grand Theft Auto V เป็นเกมแนวแอคชั่นผจญภัยแบบโอเพ่นเวิลด์ พัฒนาโดย Rockstar Games ผู้เล่นจะได้รับบทบาทเป็นสามตัวละครหลัก ได้แก่ ไมเคิล เทรเวอร์ และแฟรงคลิน โดยต้องทำภารกิจต่างๆ ในเมืองลอสซานโตส ซึ่งมีทั้งการปล้น การขับรถ และการต่อสู้ เกมนี้ยังมีโหมดออนไลน์ที่ให้ผู้เล่นร่วมมือหรือแข่งขันกับผู้เล่นอื่นๆ ทั่วโลก',
    type: 'game'
}, {
    id: 6,
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuElM9ybFsWjM0EG0PRPN81jjZ20DOrPzeWOedkh6CIDiWzqan',
    name: 'ELDEN RING OFFICIAL ART BOOK Volume I',
    price: 900,
    description: 'ELDEN RING OFFICIAL ART BOOK Volume I คือหนังสือที่รวมภาพศิลปะและแนวคิดจากเกม Elden Ring ซึ่งประกอบด้วยการออกแบบตัวละคร ศัตรู บอส อาวุธ และฉากต่าง ๆ ที่ละเอียดและน่าตื่นตา แสดงให้เห็นถึงกระบวนการสร้างสรรค์โลกในเกม',
    type: 'Artbook'
}, {
    id: 7,
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNHL2ZZZchWjdq431GKAU08VCvhrr11-KbIICkxqLCRUeL-lIT',
    name: 'The Art of Cuphead',
    price: 900,
    description: 'The Art of Cuphead คือหนังสือรวมภาพศิลปะและเบื้องหลังการสร้างเกม Cuphead ที่นำเสนอกราฟิกสไตล์การ์ตูนยุค 1930 รวมถึงการออกแบบตัวละครและบอส',
    type: 'Artbook'
}, {
    id: 8,
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlGMttfwkXFHBxJAnmGSVOf_nJQdS21zMbk-iC0xDMiHn9zRPk',
    name: 'The Art of Final Fantasy XVI.',
    price: 900,
    description: 'The Art of Final Fantasy XVI เป็นหนังสือที่รวบรวมงานศิลปะและแนวคิดการออกแบบจากเกม Final Fantasy XVI ซึ่งประกอบด้วยภาพของตัวละคร ฉาก สิ่งมีชีวิต รวมถึงบรรดา Eikons ที่โดดเด่นในภาคนี้ ผู้อ่านจะได้เห็นรายละเอียดของโลก Valisthea และเบื้องหลังการสร้างสรรค์ที่สะท้อนถึงบรรยากาศและสไตล์เฉพาะตัวของเกม',
    type: 'Artbook'
}, {
    id: 9,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAb7rFg5jPTxkzz42Jd1Zobhr73Q8xZxNSwbHsreVYZ1-N-VOw',
    name: 'The Art of DOOM: Eternal',
    price: 900,
    description: 'The Art of DOOM: Eternal เป็นหนังสือที่รวบรวมงานศิลปะและแนวคิดการออกแบบจากเกม DOOM: Eternal ซึ่งนำเสนอภาพกราฟิกของตัวละคร ศัตรู อาวุธ และฉากต่าง ๆ ที่น่าตื่นเต้น รวมถึงการสำรวจเบื้องหลังการสร้างเกมที่เต็มไปด้วยความเข้มข้นและสไตล์เฉพาะตัวของซีรีส์ DOOM',
    type: 'Artbook'
}, {
    id: 10,
    img: 'https://image.api.playstation.com/vulcan/img/cfn/11307RW7B5mvRMeOG-1pM9RnGdpRQVQ2iXinFe9755wHVXH0-mRqwizRWZQK8wMHat3XhtITgBGvRuT7JLJkkZenNxUerkoj.png',
    name: 'Monster Hunter World: Iceborne',
    price: 490,
    description: 'Monster Hunter World: Iceborne เป็นส่วนขยายของเกม Monster Hunter: World ที่เพิ่มมอนสเตอร์ใหม่ สถานที่ใหม่ และระบบการเล่นใหม่ โดยมีฉากหลังเป็นภูมิภาคน้ำแข็งและหิมะ พร้อมเนื้อเรื่องที่ขยายออกไป',
    type: 'DLC'
}, {
    id: 11,
    img: 'https://howlongtobeat.com/games/139385_Elden_Ring_Shadow_of_the_Erdtree.jpg',
    name: 'ELDEN RING Shadow of the Erdtree',
    price: 490,
    description: 'Elden Ring DLC: Shadow of the Erdtree คือส่วนเสริมสำหรับเกม Elden Ring ที่จะเพิ่มเนื้อหาใหม่ เช่น ตัวละครใหม่ มอนสเตอร์ และพื้นที่สำรวจใหม่ โดยเนื้อเรื่องจะมุ่งเน้นไปที่การสำรวจประวัติศาสตร์และความลึกลับของ Erdtree ผู้เล่นจะได้สัมผัสประสบการณ์การเล่นที่ลึกซึ้งยิ่งขึ้นในโลกของ Elden Ring',
    type: 'DLC'
}, {
    id: 12,
    img: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Last_of_Us_Left_Behind_cover.jpg',
    name: 'The Last Of Us: Left Behind',
    price: 490,
    description: 'Left Behind คือส่วนเสริม (DLC) ของเกม The Last of Us ที่เน้นเรื่องราวของ Ellie ก่อนเหตุการณ์ในเกมหลัก โดยเล่าเรื่องราวเกี่ยวกับมิตรภาพของเธอกับ Riley เพื่อนสนิท ในขณะที่พวกเขาต้องเผชิญกับความท้าทายในโลกหลังวันสิ้นโลก DLC นี้สำรวจความสัมพันธ์และอารมณ์ของตัวละคร พร้อมการเล่นที่มีกลไกใหม่ ๆ ที่ทำให้ผู้เล่นได้สัมผัสประสบการณ์ที่ลึกซึ้งยิ่งขึ้น',
    type: 'DLC'
}, {
    id: 13,
    img: 'https://m.media-amazon.com/images/M/MV5BMGM2ZWVlY2EtZTViNy00OTRlLThkZjAtMTVjNzQ3YTRkYjU4XkEyXkFqcGc@._V1_.jpg',
    name: 'BioShock Infinite: Burial at Sea',
    price: 490,
    description: 'BioShock Infinite: Burial at Sea คือส่วนเสริมของเกม BioShock Infinite ที่แบ่งออกเป็นสองตอน โดยเนื้อเรื่องเกิดขึ้นในเมือง Rapture และสำรวจชีวิตของ Booker DeWitt และ Elizabeth ขณะที่พวกเขาค้นพบความลับของเมืองใต้น้ำ DLC นี้มุ่งเน้นที่ธีมของการเลือกและผลกระทบที่มีต่อชีวิตของตัวละคร',
    type: 'DLC'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openThisDetail(${i})"class="product-items ${product[i].type}">
            <img class="product-img" src = "${product[i].img}"alt = "">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)} THB</p>
                   </div > `;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsometime(idsearch) {
    
    var value = $("#" + idsearch.id).val().toLowerCase();
    console.log(value);

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.toLowerCase().includes(value)) {
            html += `<div onclick="openThisDetail(${i})" class="product-items ${product[i].type}">
                <img class="product-img" src="${product[i].img}" alt="">
                <p style="font-size: 1.2vw;">${product[i].name}</p>
                <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)} THB</p>
            </div>`;
        }
    }

    if (html === '') {
        $("#productlist").html('<p>Not found product</p>');
    } else {
        $("#productlist").html(html);
    }
}


function seachproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if (param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("." + param).css('display', 'block')
    }
}

var productindex = 0;
function openThisDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modaldetail").css('display', 'flex')
    $("#mddes-img").attr('src', product[index].img);
    $("#mddes-name").text(product[index].name)
    $("#mddes-price").text(numberWithCommas(product[index].price) + ' THB')
    $("#mddes-des").text(product[index].description)
}

function functionclose() {
    $(".modal").css('display', 'none')

}
var cart = [];
function Buytocart() {
    var pass = true;
    for (let i = 0; i < cart.length; i++) {
        if (productindex == cart[i].index) {
            console.log('found same product')
            cart[i].count++;
            pass = false;

        }


    }

    if (pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)
        cart.push(obj)

    }
    console.log(cart)

    Swal.fire({
        title: "Success",
        text: "Add to cart!!",
        imageUrl: "https://media1.tenor.com/m/aXVFqv8KInAAAAAC/anime-frieren.gif",
        imageWidth: 298,
        imageHeight: 279,
        imageAlt: "Custom image",
    });

    $("#cartcount").css('display', 'flex').text(cart.length)
}

$("#buyButton").click(() => {
    Buytocart();
});

function openClass() {
    $('#modalCart').css('display', 'flex')
    rendercart();
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                    <div class="cartlist-left">
                        <img src="${cart[i].img}"
                            alt="">
                        <div class="cartlist-detail">
                            <p style="font-size: 1.5vw;">${cart[i].name}</p>
                            <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count)} THB</p>
                        </div>
                    </div>
                    <div class="cartlist-right">
                        <p onclick="deinitems('-' , ${i})" class="btnc">-</p>
                        <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                        <p onclick="deinitems('+' , ${i})" class="btnc">+</p>
                    </div>
                </div>`;
        }
        $("#mycart").html(html)

    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}
const limit = 99;

function deinitems(action, index) {
    if (action == '-') {
        if (cart[index].count > 0) {
            cart[index].count--;
            $("#countitems" + index).text(cart[index].count)

            if (cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete??',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Detete',
                    cancelButtonText: 'Cancel'
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            cart.splice(index, 1)
                            console.log(cart)
                            rendercart();
                            $("#cartcount").css('display', 'flex').text(cart.length)


                            if (cart.length <= 0) {
                                $("#cartcount").css('display', 'none')

                            }

                        }
                        else {
                            cart[index].count++;
                            $("#countitems" + index).css('display', 'flex').text(cart[index].count)

                        }
                    })

            }
        }
    }
    else if (action == '+') {
        if (cart[index].count < limit) {
            cart[index].count++;

            let mycart = cart[index].count * cart[index].price;


            $("#countitems" + index).text(cart[index].count);


            $("#mycart" + index).text(mycart.toFixed(2));

        } else {
            Swal.fire({
                icon: 'info',
                title: 'Limit reached',
                text: 'You cannot add more than ' + limit + ' of this item.'
            });
        }
    }
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].count;
    }
    return total;
}

function checkout() {
    const totalAmount = calculateTotal();

    if (cart.length > 0) {
        Swal.fire({
            title: "ยืนยันการชำระ",
            text: `ทั้งหมดราคา ${numberWithCommas(totalAmount)} THB. Do you want to proceed?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "การชำระ เสร็จสิ้น!!",
                    text: "ขอบคุณที่ใช้บริการ <3",
                    icon: "success",
                });

                
                cart = [];
                rendercart();
                $("#cartcount").css("display", "none");
            }
        });
    } else {
        Swal.fire({
            title: "Cart is empty",
            text: "Please add some items to the cart before checking out.",
            icon: "info",
        });
    }
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                    <div class="cartlist-left">
                        <img src="${cart[i].img}"
                            alt="">
                        <div class="cartlist-detail">
                            <p style="font-size: 1.5vw;">${cart[i].name}</p>
                            <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count)} THB</p>
                        </div>
                    </div>
                    <div class="cartlist-right">
                        <p onclick="deinitems('-' , ${i})" class="btnc">-</p>
                        <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                        <p onclick="deinitems('+' , ${i})" class="btnc">+</p>
                    </div>
                </div>`;
        }
        html += `<div class="cart-total">
                    <p>Total: ${numberWithCommas(calculateTotal())} THB</p>
                 </div>`;
        $("#mycart").html(html);

    } else {
        $("#mycart").html(`<p>Not found product list</p>`);
    }
}
function deinitems(operation, index) {
    if (operation === '+') {
        cart[index].count += 1;
    } else if (operation === '-' && cart[index].count > 1) {
        cart[index].count -= 1;
    } else if (operation === '-' && cart[index].count === 1) {
        cart.splice(index, 1);
    }
    rendercart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
