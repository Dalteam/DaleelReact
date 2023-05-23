const search = () =>{
    const searchbox = document.getElementById("search-item")//.value
    const storeitems=document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname =document.getElementsByTagName("h2")
    for (let index = 0; index < pname.length; index++) {
        const match = product[index].getElementsByTagName("h2")[0];
        if (match) {
           let textvalue=  match.textContent||match.innerHTML
           if (textvalu.indexOf(searchbox) > -1) {
            
            product[i].dal.display = '';
           }else {
            product[i].dal.display = 'none';
           }


           }
            
        }
        
    }
