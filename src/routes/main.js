const express = require("express");

const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const Technical = require("../models/technical")
const Blog = require("../models/blog")
const Auth = require("../models/auth")
const bcrypt = require("bcrypt");
const routes = express.Router();
const auth = require('../middlewares/auth')
const Desc = require("../models/desc")








routes.get("/", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"})
    const slides = await Slider.find()

    const services = await Service.find()
    // // console.log(slides);
    res.render("index", {
        details : details,
        slides : slides,
        services : services
    });
})










routes.get("/blogs", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const blogs = await Blog.find()

    res.render("blog", {
        details : details,
        blogs: blogs
    })
})



// routes.get("/blogs/:slug", async (req, res) => {
//     const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
//     const blogs = await Blog.find()

//     let blogslugs = blogs.filter((tech) => {
//         if(req.params['slug'] === tech.slug){
//             return tech;
//         }
//     })
//     // if(req.params["slug"] === blogslugs[0].slug){
//     //     res.render("blogslug", {
//     //         details : details,
//     //         blogslug: blogslugs
//     //     })
//     // }else{
//     //     res.send("error")
//     // }

//     res.render("blogslug", {
//         details : details,
//         blogslug: blogslugs
//     })
// })






routes.get("/technical", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const technicals = await Technical.find()
    res.render("technical", {
        details : details,
        technicals: technicals
    })
})





routes.get("/technical/:slug", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const technicals = await Technical.find();
    const desc = await Desc.find();

    let techslugs = technicals.filter((tech) => {
        if(req.params['slug'] === tech.slug){
            return tech;
        }
    })

    if(req.params["slug"] === techslugs[0].slug){
        res.render("techslug", {
            details : details,
            techslug: techslugs,
            desc : desc,
        })
    }else if(req.query["slug"] !== techslugs[0].slug){
        res.render("error")
    }
})







routes.get("/technicals/:slug", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const services = await Service.find();
    const desc = await Desc.find(); 

    let techslugs = services.filter((tech) => {
        if(req.params['slug'] === tech.slug){
            return tech;
        }
    })


    if(req.params["slug"] === techslugs[0].slug){
        res.render("techslug", {
            details : details,
            techslug: techslugs,
            desc : desc,
        })
    }else if(req.query["slug"] !== techslugs[0].slug){
        res.render("error")
    }
})


















routes.post("/authdata", async(req, res) => {
   try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        const email = req.body.email;
        const getEmail = await Auth.findOne({email : email})
        if(password === cpassword && !getEmail){
            const authdata = new Auth(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password : req.body.password,
                }
            );
            
  
            const token = await authdata.createToken();
            console.log("token is " + token);
            
            await authdata.save();
            
            res.cookie("token", token, {
                // expires: new Date(Date.now() + 86400000),
                httpOnly: true,
                // secure: true
            });
            res.redirect("/");

            
            
        }else{
            res.redirect("/signup")
        }
        
   }catch(error){
        res.send(error);
   }
})


routes.post("/logindata", async (req,res) => {
    try {
        const password = req.body.password;
        const email = req.body.email;
        const getEmail = await Auth.findOne({email : email});

        

        if(getEmail){
            const relPas = await bcrypt.compare(password, getEmail.password);
            
            const token = await getEmail.createToken();
            console.log("token is " + token);

            if(relPas){
                
                res.cookie("token", token, {
                // expires: new Date(Date.now() + 86400000),
                httpOnly: true,
                // secure: true
                });
                // localStorage.setItem("name", "mohit")
                res.redirect('/')
                
            }else{
                res.redirect("/login");
            }
        }else{
            res.redirect("/login");
        }
    } catch (error) {
        
        res.send("error");
    }
})


routes.get('/textChange', auth, async(req, res) => {

})


routes.post('/commentData'  , async(req, res) => {
    
    Desc.create({
        comment : req.body.comment
    })
    // res.status(200).send("Post Successsfully !!")
    res.redirect('/');

})












routes.get('/logout', auth, async(req, res) => {
    try {
        res.clearCookie("token");
        console.log("success");
        res.redirect("/")
    } catch (error) {
        res.send(error)
    }
    
})



routes.get("/contact-us", async(req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("contact", {
        details : details
    });
})

routes.get("/signup", async(req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("signup", {
        details : details
    });
})

routes.get("/login", async(req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("login", {
        details : details
    });
})








routes.get("/blogs/linux-commands", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug2", {
        details : details,
        desc : desc,
        
    })
})

routes.get("/blogs/django-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();
    

    res.render("slug1", {
        desc : desc,
        details : details,
        
    })
})

routes.get("/blogs/flask-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug3", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/sql-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug4", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/deployment-of-nodejs", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug5", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/install-vscod-in-android", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug6", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/upgrade-window-11", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug7", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/pc-coding-in-budget", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug8", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/save-money-as-student", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug9", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/mongodb-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug10", {
        details : details,
        desc : desc,
    })
})


routes.get("/blogs/hindi-typing-in-windows", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug11", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/delete-user-account-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug12", {
        details : details,
        desc : desc,
    })
})


routes.get("/blogs/folder-protect-by-password-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug13", {
        details : details,
        desc : desc,
    })
    
})

routes.get("/blogs/install-bluestack-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug14", {
        details : details,
        desc : desc,
    })
})

routes.get("/blogs/google-chrome-as-text-editor", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const desc = await Desc.find();

    res.render("slug15", {
        details : details,
        desc : desc,
    })
})



routes.get("*", async(req, res) => {
    res.render("error")
})





// const genToken = async () => {
//     const token = jwt.sign({_id: "1234455323"}, "hgkseyhrfkuseyhrkuesyrkuyrfkuyehrkuwyhfkluw");
//     console.log(token);
// }

// genToken();


// const pasData = async(pass) => {
//     const passdata = await bcrypt.hash(pass, 10);
//     console.log(passdata);

//     const decode = await bcrypt.compare(pass, passdata);
//     console.log(decode);
// }

// pasData("mohit");




module.exports = routes;