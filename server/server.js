const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 5000;
const PublicPath = path.join(__dirname, '..', 'dist')
const app = express();

app.use(express.static(PublicPath));


app.get('*' , (req, res)=>{
    res.sendFile(path.join(PublicPath,'index.html'))
});


app.listen(PORT, ()=>{
    console.log('Server is running...')
})