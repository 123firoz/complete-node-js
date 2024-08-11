const express = require('express')
const fs = require('fs')    

const users = require('./MOCK_DATA(1).json')

const app = express()
const PORT = 5000

// create middlware for post data 
app.use(express.urlencoded({ extended : false}));

// routes  
// for desktop viewers 
app.get('/user-info',(request,response) => {
    const html = `
      <ul>
        ${users.map(user=> `<li>${user.first_name}</li>`).join("")}
      </ul>
    `
    return response.send(html)
})

// only for mobile viewers 
app.get('/api/user-info',(request,response) => {
    response.setHeader("name",637372)
    return response.json(users)
})

// create dynamic pathe with id : ke sath likhna means dynamic banana hota hai
//  app.get('/api/user-info/:id',(request,response) => {
//     // ab request mein se id ko get kerna  hai   aur jo id hm req se get ker rahe hai wo ak string h to usko number mein convert kerna hoga 
//     const id = Number(request.params.id) 
//     // ab ise id ke basis per apne apne user list se user ko display karunga   
//     const user  = users.find((user => user.id === id));
//     return response.json(user)    

//  })

//  create one  routes for get , patch, delete 
app.route('/api/user-info/:id').get((req,res) => {
    const id = Number(req.params.id) 
    const user  = users.find((user => user.id === id));
        return res.json(user)  
}).patch((req,res)=>{
    //Edit user with id
    return res.json({ status: "pending..."})
}).delete((req,res)=>{
    //Delete user with id
    return res.json({ status: "pending..."})
})

// post request  
app.post('/api/user-info',(req,res) => {
    //CREATE NEW USER
    const body = req.body;
    console.log(body)
    users.push({...body , id: users.length + 1})
    fs.writeFile('./MOCK_DATA(1).json',JSON.stringify(users), (err,data) =>
        {
            
         return res.json({ status : "data post successfull", id:users.length})
      })

   
})

app.listen(PORT,console.log(`Server start... on port ${PORT}`))

