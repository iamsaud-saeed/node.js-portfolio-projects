const express= require('express');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const router = express.Router();



let users = []; ///mock db of array type

//all routes in here starting with /users

  ///getting all users.
router.get('/' , (req , res) =>{
  // res.send('asalamo alikumm...from users.');
  res.send(users);
  console.log('get users fired...')
  
})
 
///posting a new user.
router.post('/' , (req, res) => { 
  console.log('Post data request submitted...');

  const user = req.body;

  users.push({...user , id : uuidv4()}); ///pushing new column in mock db a unique id using uuid  ///... means add id column with rest of the columns


  res.send(`The user with the username ${req.body.firstname} added to our mock database..`); 
 
});


// getting user by ID
router.get('/:id' , (req, res) =>{

  const {id} = req.params;
  const found_user = users.find((user) => user.id === id)
  
  res.send(found_user);

  console.log(found_user);
});


// Deleting users by ID
router.delete('/:id' , (req, res) =>{

  const {id } = req.params;

  users = users.filter((user) => user.id != id);
  res.send(`User with the id given in the request parameter has been deleted userID ${id}`);
})

// UPDATE API//

router.patch('/:id', (req, res) => {
  // Find the user with the given ID
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update the user's information
  if (req.body.firstName) {
    user.firstName = req.body.firstName;
  }
  if (req.body.lastName) {
    user.lastName = req.body.lastName;
  }
  if (req.body.age) {
    user.age = req.body.age;
  }

  // Return the updated user object
  res.json(user);
});

// router.patch('/:id' , (req , res) =>
// {
//   const { id } = req.params;
//   // const {firstName , lastName , age } = req.body;
  
//   const user=   users.find((user) => user.id === id);


//   console.log(user); 

//   if(req.body.firstname) user.firstName = req.body.firstname;
//   if(lastName) user.lastName = lastName;
//   if(age) user.age = age;
  
//   console.log('User updated successfully..');

//   res.send('User updated successfully..');
//   console.log(user);
//   res.json(user);

// });



module.exports =router;