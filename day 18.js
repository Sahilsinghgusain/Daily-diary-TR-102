const fetchData = async() =>{
    try {
        const  response =  await fetch("https://dummyjson.com/products/search?q=phone");
        const data = await response.json();
        const products = data.products;
        const gadgets =document.getElementById('gadgets');
            
        products.forEach((item)=>{
            gadgets.innerHTML = gadgets.innerHTML + `
                <div class="card mx-auto my-3" style="width: 18rem;">
                    <img src="${item.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.price}</h5>
                        <p class="card-text">${item.title}</p>
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