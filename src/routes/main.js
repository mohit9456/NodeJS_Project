const express = require("express");

const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
// const Contact = require("../models/contact");
const Technical = require("../models/technical")
const Blog = require("../models/blog")

const routes = express.Router()








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
    const technicals = await Technical.find()

    let techslugs = technicals.filter((tech) => {
        if(req.params['slug'] === tech.slug){
            return tech;
        }
    })

    if(req.params["slug"] === techslugs[0].slug){
        res.render("techslug", {
            details : details,
            techslug: techslugs
        })
    }else if(req.query["slug"] !== techslugs[0].slug){
        res.render("error")
    }
})







routes.get("/technicals/:slug", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});
    const services = await Service.find() 

    let techslugs = services.filter((tech) => {
        if(req.params['slug'] === tech.slug){
            return tech;
        }
    })


    if(req.params["slug"] === techslugs[0].slug){
        res.render("techslug", {
            details : details,
            techslug: techslugs
        })
    }else if(req.query["slug"] !== techslugs[0].slug){
        res.render("error")
    }
})
















routes.get("/contact-us", async(req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("contact", {
        details : details
    });
})













routes.get("/blogs/linux-commands", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug2", {
        details : details,
    })
})

routes.get("/blogs/django-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug1", {
        details : details,
    })
})

routes.get("/blogs/flask-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug3", {
        details : details,
    })
})

routes.get("/blogs/sql-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug4", {
        details : details,
    })
})

routes.get("/blogs/deployment-of-nodejs", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug5", {
        details : details,
    })
})

routes.get("/blogs/install-vscod-in-android", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug6", {
        details : details,
    })
})

routes.get("/blogs/upgrade-window-11", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug7", {
        details : details,
    })
})

routes.get("/blogs/pc-coding-in-budget", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug8", {
        details : details,
    })
})

routes.get("/blogs/save-money-as-student", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug9", {
        details : details,
    })
})

routes.get("/blogs/mongodb-cheatsheet", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug10", {
        details : details,
    })
})


routes.get("/blogs/hindi-typing-in-windows", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug11", {
        details : details,
    })
})

routes.get("/blogs/delete-user-account-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug12", {
        details : details,
    })
})


routes.get("/blogs/folder-protect-by-password-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug13", {
        details : details,
    })
})

routes.get("/blogs/install-bluestack-in-window-10", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug14", {
        details : details,
    })
})

routes.get("/blogs/google-chrome-as-text-editor", async (req, res) => {
    const details = await Detail.findOne({"_id":"64ab1063f6956e2e4b391451"});

    res.render("slug15", {
        details : details,
    })
})



routes.get("*", async(req, res) => {
    res.render("error")
})




// routes.post("/process-contact-form", async (req, res) =>{
    // console.log("Form is Submitted");
    // console.log(req.body);
    //save the data in db
    // try{
    //     const Data = await Contact.create(req.body)
    //     res.redirect("/")
    // }catch(err){
    //     console.log(err)
    //     res.redirect("/")
    // }
// })


module.exports = routes;