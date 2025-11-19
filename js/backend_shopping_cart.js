document.addEventListener('DOMContentLoaded', () => {
    const urlShoppingCartUpdateEndpoint = "/student023/shop/backend/endpoints/db_shopping_cart_update"
    const minusIcons = document.querySelectorAll('#minus-icon');
    const plusIcon = document.querySelectorAll('#plus-icon');

    async function updateShoppingCart(quantity, productId) {
        try {
            const response = await fetch(urlShoppingCartUpdateEndpoint + `?quantity=${quantity}&productId=${productId}`);
            const subtotals = await response.json();
            updateTotal(subtotals);
        } catch (error) {
            console.log(error);
        }
        
    }

    function updateTotal(subtotals){
        let totalPrice = 0;
        subtotals.forEach((product) => {
            totalPrice += +product.subtotal;
        });
        document.getElementById('total-price').innerText = +totalPrice;
    }

    minusIcons.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let quantity = e.target.nextSibling;
            if(+quantity.innerText === 1) {
                return;
            }   
        
            quantity.innerText = +quantity.innerText - 1
            let productId = e.target.parentElement.attributes['data-product'].value;
            
            updateShoppingCart(quantity.innerText, productId);
        });
    });

    plusIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let quantity = e.target.previousSibling;
            if(+quantity.innerText === 12) {
                return;
            }   
        
            quantity.innerText = +quantity.innerText + 1
            let productId = e.target.parentElement.attributes['data-product'].value;
            
            updateShoppingCart(quantity.innerText, productId);
        });
    });

    // minusIcon.addEventListener('click', () => {
    //     if (+minusIcon.innerText === 1) {
    //         return;
    //     }         
    // })
});