
function render() {
    const productStore = localStorageUtil.getProducts();

    headerPage.render(productStore.length);
    productsPage.render();
}


spinnerPage.render();
let CATALOG =[];


//https://api.jsonserve.com/EPKOwd
// server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body =>{
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error=>{
        spinnerPage.handleClear();
        errorPage.render();
    })