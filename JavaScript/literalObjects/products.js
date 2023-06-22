let products = [
    { id: 1, name: "Milk", price: 120, categories: ["Family", "Food"] },
    { id: 2, name: "Rice", price: 80, categories: ["Family", "Food"] },
    { id: 3, name: "Washing Machine", price: 7800, categories: ["Home Appliances"] }
  ];


  for (let i=0; i < products.length; i++) {
    let product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }