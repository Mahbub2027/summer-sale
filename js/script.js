let totalPrice = 0;
function handleClickbtn(data){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = data.childNodes[3].innerText.split(/(\d+\.\d+)/)[0]; 
    
    const ol = document.createElement('ol');
    ol.innerText = itemName;
    selectedItemContainer.appendChild(ol);
    const price = data.childNodes[3].innerText.split(/(\d+\.\d+)/)[1];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);


    const applyButton = document.getElementById('btn-apply');
    if(totalPrice >= 200 ){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true)
    }  
    
    const purchaseButton = document.getElementById('btn-purchase');
    if(totalPrice >= 0 ){
        purchaseButton.removeAttribute('disabled');
    }
    else{
        purchaseButton.setAttribute('disabled', true)
    }  
    
    

    document.getElementById('btn-home').addEventListener('click', function(){
        
        location.reload();
        selectedItemContainer.innerText= "";
    })

}


/* document.getElementById('cuppon-input').addEventListener('keyup', function(event){
    const cupponField = event.target.value;
    const applyButton = document.getElementById('btn-apply');
    if(cupponField === 'SELL200'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true)
    }
}) */


document.getElementById('total-price').addEventListener('keyup', function(){
    // const total = document.getElementById('total-price')
    const totalPrice = document.getElementById('total-price')
    const applyButton = document.getElementById('btn-purchase');
    if(totalPrice >= 200){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true)
    }  
})


document.getElementById('btn-apply').addEventListener('click', function(){
    const discountAmount = totalPrice * 0.20;
    document.getElementById('discount-price').innerText = discountAmount.toFixed(2);
    
    const finalAmount = totalPrice - discountAmount;
    document.getElementById('total').innerText = finalAmount.toFixed(2);


})

