const express = require('express');
const app = express();
const port = 3000;
// middleware untuk parsing json
app.use(express.json());

let categories = [
    {id : 1 , name : "Elektronik"},
    {id : 2 , name : "Perabotan"}
]

let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
]
// get all product 
app.get('/api/products',(req,res)=>{
    res.json(products);
})
// 1. get all category 
app.get('/api/category',(req,res)=>{
    res.json(categories);
})
// get product by id
app.get('/api/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id);
    const product = categories.find(p => p.id === productId);
    if(product){
        res.json(product)
    }else{
        res.status(404).json({messages : 'Product Not Found'})
    }
})
// 2. get category by id
app.get('/api/category/:id',(req,res)=>{
    const caterogyId = parseInt(req.params.id);
    const category = categories.find(c => c.id === caterogyId);
    if(category){
        res.json(category)
    }else{
        res.status(404).json({messages : 'Category Not Found'})
    }
})
// 3. post new category
app.post('/api/category/',(req,res)=>{
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : id;
    categories.push(newCategory);
    res.status(201).json(newCategory);
})
//4.  edit category
app.put('/api/category/:id',(req,res)=>{
    const caterogyId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === caterogyId);
    if(categoryIndex  !== -1){
        categories[categoryIndex] = {id : caterogyId, ...req.body};
        res.json(categories[categoryIndex]);
    }else{
        res.status(404).json({messages : 'Category Not Found'})
    }
})
// 5. delete category 
app.delete('/api/category/:id',(req,res)=>{
    const caterogyId = parseInt(req.params.id);
    categories = categories.filter(c => c.id !== caterogyId);
    res.status(204).send();
})
//6.  find product by name 
app.get('/api/search',(req,res)=>{
    const searchQuery = req.query.name;
    if(!searchQuery){
        return res.status(400).json({message : "parameter query name is required"})
    }
    const searchProduct = products.filter(p => 
        p.name.includes(searchQuery)
    )
    res.json(searchProduct)
})
// 7. find product and category 
app.get('/api/advsearch',(req,res)=>{
    const product = req.query.name;    
    const category = req.query.category;
    let filterProduct = products;
    if(category){
        filterProduct = filterProduct.filter(p =>
            p.category.includes(category)
        )
    }
    if(product){
        filterProduct = filterProduct.filter(p =>
            p.name.includes(product)
        )
    }
    // check data filterProduct jika data yang masuk tidak valid atau tidak ditemukan
    if(filterProduct.length === 0){
        res.status(404).json({message : "Data not Found"})
    }else{
        res.json(filterProduct)
    }
    
})
app.listen(port, ()=>{
    console.log(`Server running at <http://localhost>:${port}`)
})