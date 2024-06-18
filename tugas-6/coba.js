const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000;
// middleware untuk parsing json
app.use(express.json());
// app.get('/api/users', (req,res)=>{
//     res.json([
//         {id : 1, name :"alice"},
//         {id : 2, name :"daffa"}
//     ])
// })
// app.post('/api/users',(req,res)=>{
//     const newUser = req.body;
//     // proses penyimpanan data baru
//     console.log('user added : ',newUser);
//     res.status(201).json(newUser)
// })
app.get('/api/users/:id',(req,res)=>{
    const userId = req.params.id;
    res.json({id: userId, name : "Alice"})
})
app.post('/api/users/:id/posts',(req,res)=>{
    const userId = req.params.id;
    const searchQuery = req.query.q;
      // Ambil postingan pengguna berdasarkan ID dan query pencarian
    res.json({
        userId : userId,
        query : searchQuery,
        posts : ['post 1','post 2']
    })
})
app.listen(port, ()=>{
    console.log(`Server running at <http://localhost>:${port}`)
})