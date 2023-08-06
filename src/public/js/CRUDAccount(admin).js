// const Account = require("../../models/accounts")
// const router = require("../../routes/adminRoute")
// const { route } = require("../../routes/adminRoute")

// // router.get("/acc", (req, res) => {
// //     Account.find().exec((err, acc) => {
// //         if(err){}
// //         else
// //         res.render("CRUDAccount",{
// //             acc = acc,
// //         })
// //     })
// // })

// router.post('/add', upload, (req,res) => {
//     const acc = new Account({
//         username: req.body.name,
//         password: req.body.password,
//         email: req.body.email,
//         role: req.body.role,
//     })
//     acc.save((err) => {
//         if(err){}
//         else{
//             req.session.message = {
//                 type: 'success',
//                 message: 'User added successfully!'
//             }
//             res.redirect("/")
//         }
//     })
// })


// // module.exports = router