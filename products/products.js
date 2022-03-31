//product navigation bar
let shoes=document.getElementById("shoes");
let shirts=document.getElementById("shirts");
let movies=document.getElementById("movies");
let shoesDp=document.getElementById("shoesDp");
let shirtsDp=document.getElementById("shirtsDp");
let moviesDp=document.getElementById("moviesDp");
//when navigation product type is clicked show the products
shoes.onclick=function(){
  shoesDp.style.display="block";
  shirtsDp.style.display="none";
  moviesDp.style.display="none";
  // active border
  shoes.classList.add("productactive");
  shirts.classList.remove("productactive");
  movies.classList.remove("productactive");
}

shirts.onclick=function(){
  shirtsDp.style.display="block";
  shoesDp.style.display="none";
  moviesDp.style.display="none";
    //active border
    shoes.classList.remove("productactive");
    shirts.classList.add("productactive");
    movies.classList.remove("productactive");
}
movies.onclick=function(){
  shirtsDp.style.display="none";
  shoesDp.style.display="none";
  moviesDp.style.display="block";
    //active border
    shoes.classList.remove("productactive");
    movies.classList.add("productactive");
    shirts.classList.remove("productactive");
}
//====================================================
//===================CART=============================
//get id to add product to cart of all the products
let $add_Cart1=document.getElementById("addItem1");
let $add_Cart2=document.getElementById("addItem2");
let $add_Cart3=document.getElementById("addItem3");
let $add_Cart4=document.getElementById("addItem4");
let $add_Cart5=document.getElementById("addItem5");
let $add_Cart6=document.getElementById("addItem6");
//get id to substract product to cart
let $sub_Cart1=document.getElementById("subItem1");
let $sub_Cart2=document.getElementById("subItem2");
let $sub_Cart3=document.getElementById("subItem3");
let $sub_Cart4=document.getElementById("subItem4");
let $sub_Cart5=document.getElementById("subItem5");
let $sub_Cart6=document.getElementById("subItem6");
//get id to update cart product quantity
let $quantityValue1=document.getElementById("valueQuantity1");
let $quantityValue2=document.getElementById("valueQuantity2");
let $quantityValue3=document.getElementById("valueQuantity3");
let $quantityValue4=document.getElementById("valueQuantity4");
let $quantityValue5=document.getElementById("valueQuantity5");
let $quantityValue6=document.getElementById("valueQuantity6");
//get id to cart order summary to add the contents to it
let $cartItem1=document.getElementById("cartOrder1");
let $cartItem2=document.getElementById("cartOrder2");
let $cartItem3=document.getElementById("cartOrder3");
let $cartItem4=document.getElementById("cartOrder4");
let $cartItem5=document.getElementById("cartOrder5");
let $cartItem6=document.getElementById("cartOrder6");
//get item name to add to cart
let $nameItem1=document.getElementById("itmNm1");
let $nameItem2=document.getElementById("itmNm2");
let $nameItem3=document.getElementById("itmNm3");
let $nameItem4=document.getElementById("itmNm4");
let $nameItem5=document.getElementById("itmNm5");
let $nameItem6=document.getElementById("itmNm6");
//get colors from products
let $blue1=document.getElementById("blue1");
let $blue2=document.getElementById("blue2");
let $blue3=document.getElementById("blue3");
let $blue4=document.getElementById("blue4");
let $blue5=document.getElementById("blue5");
let $blue6=document.getElementById("blue6");
let $red1=document.getElementById("red1");
let $red2=document.getElementById("red2");
let $red3=document.getElementById("red3");
let $red4=document.getElementById("red4");
let $red5=document.getElementById("red5");
let $red6=document.getElementById("red6");
let $yellow1=document.getElementById("yellow1");
let $yellow2=document.getElementById("yellow2");
let $yellow3=document.getElementById("yellow3");
let $yellow4=document.getElementById("yellow4");
let $yellow5=document.getElementById("yellow5");
let $yellow6=document.getElementById("yellow6");
let $green1=document.getElementById("green1");
let $green2=document.getElementById("green2");
let $green3=document.getElementById("green3");
let $green4=document.getElementById("green4");
let $green5=document.getElementById("green5");
let $green6=document.getElementById("green6");
//get price of the product
let $priceProduct1=document.getElementById("itmprice1");
let $priceProduct2=document.getElementById("itmprice2");
let $priceProduct3=document.getElementById("itmprice3");
let $priceProduct4=document.getElementById("itmprice4");
let $priceProduct5=document.getElementById("itmprice5");
let $priceProduct6=document.getElementById("itmprice6");
//get subtotal price of the product
let $subtotal=document.getElementById("subtotal");
//update the total price
let $totalPrice=document.getElementById("total");
//shipping taxes
let $shipTax=document.getElementById("shipTax");
//taxes
let $Taxes=document.getElementById("Taxes");

//======================================================================
//=======================INCREMENT======================================
//increment number of items of the product
//==================PRODUCT 1 OF SHOES=========================
$add_Cart1.addEventListener('click', () =>{ 
    //if there is  atleast one order from the product then add it to the cart 
  if($quantityValue1.innerHTML=="0"){
        $cartItem1.innerHTML='<div class="summary-item" id="summaryItm1"><div class="image"></div><div class="text"><span class="itemNm" id="itemNm1">Item Name Here</span><span class="item-info" id="itemInfo1">Sub information</span></div><div class="quantity"><i class="fa-solid fa-circle-minus" id="ordersummarysub1"></i><span id="ordersummaryquantity1">0</span><i class="fa-solid fa-circle-plus" id="ordersummaryadd1"></i> </div><div class="price" id="priceSummary1">0</div><div class="trash" id="trash1"> <i class="fa-solid fa-trash-can"></i></div></div>';
  }

  //add products to the cart until max reaches 5
  if($quantityValue1.innerHTML!=="5" ){  
    $quantityValue1.innerHTML= parseInt($quantityValue1.innerHTML) + 1;

 //get id of cart product quantity to update in order summary
  document.getElementById("ordersummaryquantity1").innerHTML= parseInt($quantityValue1.innerHTML) ;
  
  //show price in order summary
 $priceSummary1=document.getElementById("priceSummary1");
  $priceSummary1.innerHTML=parseInt($priceSummary1.innerHTML)+parseInt($priceProduct1.innerHTML.substring(1));
  //show updated subtotal in order summary
  $subtotal.innerHTML=$priceSummary1.innerHTML;  
  //show updaed total price
  $totalPrice.innerHTML=parseInt($priceSummary1.innerHTML)+(10+15);
  //show updated shipping taxes 
$shipTax.innerHTML="15";
//show updated Taxes
$Taxes.innerHTML="10";
}

  
//////////////////////////ORDER SUMMARY //////////////////////////////////////
//get id of cart product addition button in order summary
let $orderAddSum1=document.getElementById("ordersummaryadd1");
//get id of cart product substract button in order summary
let $orderSubSum1=document.getElementById("ordersummarysub1");
//get id of cart product update in order summary
let $updateSummary1= document.getElementById("ordersummaryquantity1");
//get id for item name to update
let $itemName1=document.getElementById("itemNm1");
//get id for sub info in cart
let $itemInfo1=document.getElementById("itemInfo1");
//show item name in order summary
$itemName1.innerHTML =$nameItem1.innerHTML;
//get color for sub info
if ($blue1.checked==true){
  $itemInfo.innerHTML=$blue1.value;
}
else if($red1.checked==true){
  $itemInfo1.innerHTML=$red1.value;
}
else if($yellow1.checked==true){
  $itemInfo1.innerHTML=$yellow1.value;
}
else if($green1.checked==true){
  $itemInfo1.innerHTML=$green1.value;
}
else{
  $blue1.checked==true;
  $itemInfo1.innerHTML=$blue1.value;
}

  //increment number of items in the main product
  $orderAddSum1.addEventListener('click', () =>{ 
    if($updateSummary1.innerHTML!=="5" ){
      $updateSummary1.innerHTML= parseInt($updateSummary1.innerHTML) + 1;
   //get id of cart product quantity to update in order summary
    $quantityValue1.innerHTML= parseInt($updateSummary1.innerHTML);
      //show price in order summary
  let $priceSummary1=document.getElementById("priceSummary1");
  $priceSummary1.innerHTML=parseInt($priceSummary1.innerHTML)+parseInt($priceProduct1.innerHTML.substring(1));
  //show updated subtotal in order summary
  $subtotal.innerHTML=parseInt($priceSummary1.innerHTML)+parseInt($subtotal.innerHTML);
    //show updaed total price
    $totalPrice.innerHTML=parseInt($priceSummary1.innerHTML)+(10+15);
    //show updated shipping taxes 
$shipTax.innerHTML="15";
//show updated Taxes
$Taxes.innerHTML="10";
    }});


  //Decrement number of items in the main product
  $orderSubSum1.addEventListener('click', () =>{ 
    if($updateSummary1.innerHTML!=="0" ){
      // alert("teus")
      $updateSummary1.innerHTML= parseInt($updateSummary1.innerHTML) - 1;
   //get id of cart product quantity to update in order summary
    $quantityValue1.innerHTML= parseInt($updateSummary1.innerHTML);
      //show price in order summary
  let $priceSummary1=document.getElementById("priceSummary1");
  $priceSummary1.innerHTML=parseInt($priceSummary1.innerHTML)-parseInt($priceProduct1.innerHTML.substring(1));
  //show updated subtotal in order summary
  $subtotal.innerHTML=parseInt($subtotal.innerHTML)-parseInt($priceSummary1.innerHTML);
    //show updaed total price
    $totalPrice.innerHTML=parseInt($priceSummary1.innerHTML)+(10+15);
  if($quantityValue1.innerHTML=="0"){
    $cartItem1.innerHTML='<div style="color:white;">No Items Added</div>';
      //show updaed total price
  $totalPrice.innerHTML="0";
    //show updated shipping taxes 
$shipTax.innerHTML="0";
//show updated Taxes
$Taxes.innerHTML="0";
  }


    }});

  //=======================CLEAR PRODUCT======================================
//increment number of items of the product
let $clearProduct1=document.getElementById("trash1");
$clearProduct1.addEventListener('click', () =>{ 
//clear product id
document.getElementById("summaryItm1").style.display="none";
$quantityValue1.innerText="0";
//clear subtotal
//show updated subtotal in order summary
$subtotal.innerHTML=$priceSummary1.innerHTML="0";
//show updated total price
$totalPrice.innerHTML="0";
//show updated shipping taxes 
$shipTax.innerHTML="0";
//show updated Taxes
$Taxes.innerHTML="0";
});

/////////////////////////////////////////////////////////////////////////    
});   
//=======================================================
//==================PRODUCT 2 OF SHOES=========================
$add_Cart2.addEventListener('click', () =>{ 
  //if there is  atleast one order from the product then add it to the cart 
if($quantityValue2.innerHTML=="0"){
      $cartItem2.innerHTML='<div class="summary-item" id="summaryItm"><div class="image"></div><div class="text"><span class="itemNm" id="itemNm2">Item Name Here</span><span class="item-info" id="itemInfo">Sub information</span></div><div class="quantity"><i class="fa-solid fa-circle-minus" id="ordersummarysub"></i><span id="ordersummaryquantity">0</span><i class="fa-solid fa-circle-plus" id="ordersummaryadd"></i> </div><div class="price" id="priceSummary">0</div><div class="trash" id="trash"> <i class="fa-solid fa-trash-can"></i></div></div>';
}

//add products to the cart until max reaches 5
if($quantityValue2.innerHTML!=="5" ){  
  $quantityValue2.innerHTML= parseInt($quantityValue2.innerHTML) + 1;

//get id of cart product quantity to update in order summary
document.getElementById("ordersummaryquantity").innerHTML= parseInt($quantityValue2.innerHTML) ;

//show price in order summary
$priceSummary=document.getElementById("priceSummary");
$priceSummary.innerHTML=parseInt($priceSummary.innerHTML)+parseInt($priceProduct2.innerHTML.substring(1));
//show updated subtotal in order summary
$subtotal.innerHTML=$priceSummary.innerHTML;  
//show updaed total price
$totalPrice.innerHTML=parseInt($priceSummary.innerHTML)+(10+15);
//show updated shipping taxes 
$shipTax.innerHTML="15";
//show updated Taxes
$Taxes.innerHTML="10";
}


//////////////////////////ORDER SUMMARY //////////////////////////////////////
//get id of cart product addition button in order summary
let $orderAddSum=document.getElementById("ordersummaryadd");
//get id of cart product substract button in order summary
let $orderSubSum=document.getElementById("ordersummarysub");
//get id of cart product update in order summary
let $updateSummary= document.getElementById("ordersummaryquantity");
//get id for item name to update
let $itemName2=document.getElementById("itemNm2");
//get id for sub info in cart
let $itemInfo=document.getElementById("itemInfo");
//show item name in order summary
$itemName2.innerHTML =$nameItem2.innerHTML;
//get color for sub info
if ($blue2.checked==true){
$itemInfo.innerHTML=$blue2.value;
}
else if($red2.checked==true){
$itemInfo.innerHTML=$red2.value;
}
else if($yellow2.checked==true){
$itemInfo.innerHTML=$yellow2.value;
}
else if($green2.checked==true){
$itemInfo.innerHTML=$green2.value;
}
else{
$blue2.checked==true;
$itemInfo.innerHTML=$blue2.value;
}

//increment number of items in the main product
$orderAddSum.addEventListener('click', () =>{ 
  if($updateSummary.innerHTML!=="5" ){
    $updateSummary.innerHTML= parseInt($updateSummary.innerHTML) + 1;
 //get id of cart product quantity to update in order summary
  $quantityValue2.innerHTML= parseInt($updateSummary.innerHTML);
    //show price in order summary
let $priceSummary=document.getElementById("priceSummary");
$priceSummary.innerHTML=parseInt($priceSummary.innerHTML)+parseInt($priceProduct2.innerHTML.substring(1));
//show updated subtotal in order summary
$subtotal.innerHTML=$priceSummary.innerHTML;
  //show updaed total price
  $totalPrice.innerHTML=parseInt($priceSummary.innerHTML)+(10+15);
  //show updated shipping taxes 
$shipTax.innerHTML="15";
//show updated Taxes
$Taxes.innerHTML="10";
  }});


//Decrement number of items in the main product
$orderSubSum.addEventListener('click', () =>{ 
  if($updateSummary.innerHTML!=="0" ){
    // alert("teus")
    $updateSummary.innerHTML= parseInt($updateSummary.innerHTML) - 1;
 //get id of cart product quantity to update in order summary
  $quantityValue2.innerHTML= parseInt($updateSummary.innerHTML);
    //show price in order summary
let $priceSummary=document.getElementById("priceSummary");
$priceSummary.innerHTML=parseInt($priceSummary.innerHTML)-parseInt($priceProduct2.innerHTML.substring(1));
//show updated subtotal in order summary
$subtotal.innerHTML=$priceSummary.innerHTML;
  //show updaed total price
  $totalPrice.innerHTML=parseInt($priceSummary.innerHTML)+(10+15);
if($quantityValue1.innerHTML=="0"){
  $cartItem2.innerHTML='<div style="color:white;">No Items Added</div>';
    //show updaed total price
$totalPrice.innerHTML="0";
  //show updated shipping taxes 
$shipTax.innerHTML="0";
//show updated Taxes
$Taxes.innerHTML="0";
}


  }});

//=======================CLEAR PRODUCT======================================
//increment number of items of the product
let $clearProduct=document.getElementById("trash");
$clearProduct.addEventListener('click', () =>{ 
//clear product id
document.getElementById("summaryItm").style.display="none";
$quantityValue2.innerText="0";
//clear subtotal
//show updated subtotal in order summary
$subtotal.innerHTML=$priceSummary.innerHTML="0";
//show updated total price
$totalPrice.innerHTML="0";
//show updated shipping taxes 
$shipTax.innerHTML="0";
//show updated Taxes
$Taxes.innerHTML="0";
});

/////////////////////////////////////////////////////////////////////////    
});   
//======================================================================
//=======================DECREMENT======================================
//decrement number of items of the product
$sub_Cart1.addEventListener('click', () =>{
  if($quantityValue1.innerHTML!=="0"){
    $quantityValue1.innerHTML= parseInt($quantityValue1.innerHTML) - 1;
    //get id of cart product quantity to update in order summary
  document.getElementById("ordersummaryquantity").innerHTML= parseInt($quantityValue1.innerHTML) ;
    //show price in order summary
    let $priceSummary=document.getElementById("priceSummary");
    $priceSummary.innerHTML=parseInt($priceSummary.innerHTML)-parseInt($priceProduct1.innerHTML.substring(1));
    //show updated subtotal in order summary
    $subtotal.innerHTML=$priceSummary.innerHTML;
      //show updaed total price
  $totalPrice.innerHTML=parseInt($priceSummary.innerHTML)+(10+15);
  

  } 

  //if there is no atleast one product in the cart in order summary, then remove it from the cart 
  if($quantityValue1.innerHTML=="0"){
    $cartItem1.innerHTML='<div style="color:white;">No Items Added</div>';

  }
  
});    



//=============================================================================
//===========================PERSONAL DETAILS==================================

function saveData(){

  // Getting Values in the form

  // Getting the first name of the user
  let fname=document.getElementById("fn").value;
  //getting the last name of the user
  let lname=document.getElementById("ln").value;
  //getting the address of the user
  let address=document.getElementById("address").value;
  //getting the nic of the user
  let nic=document.getElementById("nic").value;
  //getting the contact of the user
  let contact=document.getElementById("tel").value;
  //getting the email of the user
  let email=document.getElementById("email").value;
  //getting the name of the credit card holder
  let cardName=document.getElementById("ch").value;
  //getting the credit card no of the user
  let cardn1=document.getElementById("ccn1").value;
  //getting the exipration date from the user
  let date=document.getElementById("date").value;
  //getting the cvv number from the user
  let cvv=document.getElementById("cvv").value;
  // getting the chosen payment method
  let pvisa=document.getElementById("visa");
  let pam=document.getElementById("am");
  let pmc=document.getElementById("mc");
 
//get id to cart order summary to add the contents to it
// let $cartItem1=document.getElementById("cartOrder1");
// let $cartItem2=document.getElementById("cartOrder2");
// let $cartItem3=document.getElementById("cartOrder3");
// let $cartItem4=document.getElementById("cartOrder4");
// let $cartItem5=document.getElementById("cartOrder5");
// let $cartItem6=document.getElementById("cartOrder6");

// //check whether atleast a product is added to the cart
// if ($cartItem1=="" && $cartItem2=="" && $cartItem3=="" &&$cartItem4==""&&$cartItem5==""&&$cartItem6=="" ){
//   swal({
//     text: "Please Enter Atleast One Product to the cart",
//   });
// }

  // Validation of the user inputs

  //function which validates user first name input
  function userFname(fname){
      //check whether the first name input field is empty
      if(fname==""){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates user last name input
  function userLname(lname){
      //check whether the last name input field is empty
      if(lname==""){
          return false;
      }
      else{
          return true;
      }
  } 
  //function which validates user address input
  function userAddress(address){
      //check whether the address input field is empty
      if(address==""){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates user nic input
  function userNic(nic){
      //check whether the nic input field is empty
      if(nic==""){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates users contact
  function userContact(contact){
      //check whether the contact field is not empty and has 10digits
      if(contact=="" || contact.length!==10 || contact.match(/[A-Za-z\s]/)!==null){
          return false;
      } 
      else{
          return true;
      }
  }
  //function which validates user Email
  function userEmail(email){
      //check whether the email input field is empty
      if(email=="" || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates user card name input
  function userCname(cardName){
      //check whether the card name input field is empty
      if(cardName=="" || cardName.match (/^[A-Za-z]+$/)==null){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates user card number input
  function userCn1(cardn1){
      //check whether the card number input field is empty
      if(cardn1=="" || cardn1.match (/^[0-9]+$/)==null){
          return false;
      }
      else{
          return true;
      }
  }

  //function which validates user card exipration date input
  function userDate(date){
      //check whether the expiration date input field is empty
      if(date==""){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates user card cvv number input
  function userCvv(cvv){
      //check whether the card cvv number input field is empty
      if(cvv=="" || cvv.length!==3 || cvv.match(/^[0-9]+$/)==null){
          return false;
      }
      else{
          return true;
      }
  }
  //function which validates payment method
  function payment(){
    if (pvisa.checked==true){
      return true;
    }
       else  if (pam.checked==true){
      return true;
    }
    else if (pmc.checked==true){
      return true;
    }
  }


  //DISPLAY POPUP FOR VALIDATION


  if (userFname(fname)==false){
    swal({
      text: "Please Enter Your First Name",
    });
  }
  else if (userLname(lname)==false){
      swal({
        text: "Please Enter Your Last Name",
      });
  }
  else if (userAddress(address)==false){
    swal({
      text: "Please Enter The Address",
    });
  }
  else if (userNic(nic)==false){
      swal({
        text: "Please Enter Your NIC",
      });
  }
  else if(userContact(contact)==false){
    swal({
      text: "Please Enter Your Contact Number",
    });
  }
  else if(userEmail(email)==false){
    swal({
      text: "Please Enter Your Email",
    });
  }
  else if (userCname(cardName)==false){
      swal({
        text: "Please Enter the Name of Card Holder",
      });
  }
  else if (userCn1(cardn1)==false){
    swal({
      text: "Please Enter the First 16 Numbers of the Card",
    });
  }
  else if (userDate(date)==false){
    swal({
      text: "Please Enter the Expiration Date of the Card",
    });
  }
  else if (userCvv(cvv)==false){
    swal({
      text: "Please Enter the CVV Numbers of the Card",
    });
  }
  else{
    swal({
      text: "All Good!, Your Data has been Saved, Success",
    });

  }
  //invoice
  $nameinvoice=document.getElementById("nameinvoice");
  $emailinvoice=document.getElementById("emailinvoice");
  $nameinvoice.innerHTML=fname +" " + lname;
  $emailinvoice.innerHTML=email;


}
//reset data 
function resetData(){
  location.reload();
}