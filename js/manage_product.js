function deleteProduct(id) {
  var confirmation = confirm("Are you sure?");
  if(confirmation) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('products_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_product.php?action=delete&id=" + id, true);
    xhttp.send();
  }
}

function editProduct(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState = 4 && xhttp.status == 200)
      document.getElementById('products_div').innerHTML = xhttp.responseText;
  };
  xhttp.open("GET", "php/manage_product.php?action=edit&id=" + id, true);
  xhttp.send();
}

function updateProduct(id) {
  var product_name = document.getElementById("product_name");
  var packing = document.getElementById("packing");
  var generic_name = document.getElementById("generic_name");
  var suppliers_name = document.getElementById("suppliers_name");

  if(!notNull(product_name.value, "product_name_error"))
    product_name.focus();
  else if(!notNull(packing.value, "pack_error"))
    packing.focus();
  else if(!notNull(generic_name.value, "generic_name_error"))
    generic_name.focus();
  else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('products_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_product.php?action=update&id=" + id + "&name=" + product_name.value + "&packing=" + packing.value + "&generic_name=" + generic_name.value + "&suppliers_name=" + suppliers_name.value, true);
    xhttp.send();
  }
}

function cancel() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState = 4 && xhttp.status == 200)
      document.getElementById('products_div').innerHTML = xhttp.responseText;
  };
  xhttp.open("GET", "php/manage_product.php?action=cancel", true);
  xhttp.send();
}

function searchProduct(text, tag) {
  if(tag == "name") {
    document.getElementById("by_generic_name").value = "";
    document.getElementById("by_suppliers_name").value = "";
  }
  if(tag == "generic_name") {
    document.getElementById("by_name").value = "";
    document.getElementById("by_suppliers_name").value = "";
  }
  if(tag == "suppliers_name") {
    document.getElementById("by_name").value = "";
    document.getElementById("by_generic_name").value = "";
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState = 4 && xhttp.status == 200)
      document.getElementById('products_div').innerHTML = xhttp.responseText;
  };
  xhttp.open("GET", "php/manage_product.php?action=search&text=" + text + "&tag=" + tag, true);
  xhttp.send();
}
