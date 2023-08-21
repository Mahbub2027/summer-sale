let totalPrice = 0;
function handleClickbtn(data){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = data.childNodes[3].innerText.split(/(\d+\.\d+)/)[0]; //[0].split(/(\d+\.\d+)/);
    //console.log(itemName);
    const ol = document.createElement('ol');
    ol.innerText = itemName;
    selectedItemContainer.appendChild(ol);
    const price = data.childNodes[3].innerText.split(/(\d+\.\d+)/)[1];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);



    document.getElementById('btn-home').addEventListener('click', function(){
        selectedItemContainer.innerText= "";
        // totalPrice.value = "";
    })
}



















/* function handleClickbtn(data){
    console.log(data.childNodes[3].innerText);
} */

/* 
function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total;
  } */