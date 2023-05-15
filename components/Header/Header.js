class Header{
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }


    render(count) {
        const hrml = `
        <div class = "header-container">
            <div class = "header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                🛒 ${count}
            </div>
        </div>
        
        `;
        ROOT_HEADER.innerHTML = hrml;
    }
}

const headerPage = new Header();
