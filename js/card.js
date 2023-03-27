let btnCart = document.querySelectorAll("#btncart")
btnCart.forEach(function(button, index){
    button.addEventListener("click", function(event){
        let btnItem= event.target
        let product = btnItem.parentElement.parentElement.parentElement
        let product1 = btnItem.parentElement.parentElement.parentElement.parentElement
        let productImg = product.querySelector("img").src
        let productName = product1.querySelector("h3").innerText
        let productPrice = product1.querySelector(".price").innerText
        let productList = [{ 
            namepd : productName,
            imgpd : productImg,
            pricepd:productPrice
        }]
        let json =JSON.stringify(productList)
        localStorage.setItem(productName,json)
        let productDetal = JSON.parse(localStorage.getItem(productName))
        let productImg1 = productDetal.imgpd
        let productName1 = productDetal.namepd
        let productPrice1 = productDetal.pricepd
        addcart(productImg, productName, productPrice)
    })
})
function addcart(productImg, productName, productPrice){
    let addtr = document.createElement("tr")
    let trContent ='<tr style="padding: 15px 0px;background-color:white;box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);border-radius: 10px;" class="row no-gutters"><td style="display:flex;flex-wrap: nowrap;"  class="col l-3"><img style="width: 80px;height: 70px;padding-left: 12px;" src="./assets/img/iphone-11-trang-600x600 - Copy.jpg" alt=""><p style="margin-left:5px;">Iphone 11</p> </td><td class="col l-3"><p style="line-height: 74px;">11.500.000 vnd</p></td><td class="col l-3"><input style="margin: 27.5px;width: 40px;text-align: end;font-weight: 600;border: 1px solid;border-radius: 50%;" type="number" value="1" min="1"></td><td class="col l-3"><p style="line-height: 74px;">Xóa</p></td></tr>'
    addtr.innerHTML = trContent
    let cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
} 