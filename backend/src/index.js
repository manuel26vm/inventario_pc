import app from './app.js';

const port = process.env.PORT || 1999;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

