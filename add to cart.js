const product = [
    {
        id: 0,
        image: 'aa-1.jpeg',
        title: 'cocktail dress',
        price:  120000
    },
    {
        id: 1,
        image: 'bb-1.jpeg',
        title: 'maxi dress',
        price: 80000,
    },
    {
        id: 2,
        image: 'cc-1.jpeg',
        title: 'kimono dress',
        price:  170000,
    },
    {
        id: 3,
        image: 'dd-1.jpeg',
        title: 'gown',
        price: 200000,
    },
    {
        id: 4,
        image: 'ee-1.jpeg',
        title: 'shirt dress',
        price:  13000,
    },
    {
        id: 5,
        image: 'ff-1.jpeg',
        title: 'sweat fit',
        price:  5000,
    },
    {
        id: 6,
        image: 'gg-1.jpeg',
        title: 'men sweats',
        price:  4000,
    },
    {
        id: 7,
        image: 'hh-1.jpeg',
        title: 'men shirt',
        price:  12000,
    },
    {
        id: 8,
        image: 'ii-1.jpeg',
        title: 'hoodie',
        price: 3000,
    },
    {
        id: 9,
        image: 'jj-1.jpeg',
        title: 'suit',
        price:  140000,
    },
];
const categories = [...new Set(product.map((item)=>
    { return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class="box">
                <div class="img-box">
                     <img class='images' src=${image}></img>
                       </div>
            <div class='bottom'>
            <P>${title}</p>
            <h2>ksh ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('');   

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j = 0;
        if(cart.length==0){
            document.getElementById('cartitem').innerHTML = "your cart is empty";
        }
        else{
            document.getElementById("cartitem").innerHTML = cart.map((items)=>
            {
                var{image, title, price} = items;
                return(
                    `<div class='cart-item'>
                    <div class='row-ing' src=${image}>
                    </div>
                    <P style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2`+
                    "<i class='fa fa-trash' onclick='delElement("+(j++) +")'></i></div>"
    
                );

            }).join('');
        }
    }