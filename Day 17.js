const fetchData = async() => {
    try {
        const response = await fetch("hhttps://dummyjson.com/products");
        const data = await response.json();
        const recipes = data.recipes;
        const products = document.getElementById('products');

        recipes.forEach((item)=>{
            products.innerHTML = products.innerHTML + `
                <div class="card mx-auto my-3" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Recipe Cuisine${item.cuisine}</p>
                        <a href="#" class="btn btn-danger">Buy Now</a>
                    </div>
                </div>
            `
        });
    
    } catch (error) {
        console.log(error);
    }
}

fetchData();