// function addtocart(e){
//     console.log()
// }
let container = document.querySelector(".mainContainer");
fetch("/js/shop.json")
.then(res=>res.json()).then(
    product=>{
        let AddtoHtml=""
          product.map((p)=>{
            AddtoHtml +=`
        <div class="item">    
                <img class="img"src="${p.img}" />
                <h1 class="title">${p.title}</h1>
                <h3 class="price">${p.price}</h3>
            </div>
      

      `
     container.innerHTML=AddtoHtml
   })
    }
)
const text = "Shopping";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("animated-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // تعيين التأخير بين كتابة الحروف
  }
}

typeWriter(); // بدء الكتابة
