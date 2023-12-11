import URL from "../constants"

async function products(setProduct, setLoading) {
     setLoading(true)
     const response = await fetch(`${URL}/api/category`)

     const data = await response.json()


     setProduct([...data])
     setLoading(false)
}

async function chooseCategory(name, setProduct, setLoading) {
     setLoading(true)
     const response = await fetch(`${URL}/api/category?category=${encodeURIComponent(name)}`)

     const data = await response.json()
     
     setProduct([...data])
     setLoading(false)
}

async function searchProduct(name, setProduct, setLoading) { 
     setLoading(true)
     const response = await fetch(`${URL}/api/search?item=${encodeURIComponent(name)}`)
     
     const data = await response.json()

     setProduct([...data])
     setLoading(false)
}

module.exports = { products, chooseCategory, searchProduct } ;