function billingFunction() {
    var billing = document.getElementById('same');
    var billing1 = document.getElementById('billingName');
    var billing2 = document.getElementById("billingZip");
    if (billing.checked) {
      billing1.value = document.getElementById("shippingName").value;
      billing2.value = document.getElementById("shippingZip").value;
      content[0].style.color = "red";
      content[0].addEventListener("click",myClick)

    }
   else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
  }