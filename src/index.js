const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 8000;
// path
const templatespath=path.join(__dirname,"../templates/views");
const partials=path.join(__dirname,"../templates/partials");
const staticpath=path.join(__dirname,"../public");
// register partials
hbs.registerPartials(partials);
app.use(express.static(staticpath));
app.set("views engine",hbs);
app.set("views",templatespath);
app.get("",(req,res)=>{
    res.render("index.hbs");
});
app.get("/about.hbs",(req,res)=>{
    res.render("about.hbs");
});
app.get("/weather.hbs",(req,res)=>{
    res.render("weather.hbs");
});
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        error:"Opps! Page Not Found",
    });
});
app.listen(port,()=>{
    console.log(`port number ${port}`);
});