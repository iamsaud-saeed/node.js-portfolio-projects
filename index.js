const express = require('express');
const bodyparser = require('body-parser');
const userRoutes = require('./routes/user.js');

const app= express();

const PORT = process.env.PORT || 3000;
app.use(bodyparser.json());


app.use('/users' , userRoutes);

app.get('/' , (req, res) =>{
  console.log('[TESTING DONE..}!');

  res.send('Asaalam o alikum from homepage...');
})


app.listen(PORT , ()=>  console.log(`Server is running on port http://localhost:${PORT}`));