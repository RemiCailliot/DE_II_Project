const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const store = new MongoStore({
    url: "mongodb://localhost:27019/test-app", //YOUR MONGODB URL
    collection:'sessions',
    autoRemove: 'native'
})
app.listen(4000, () => {
    console.log("App listening on port 4000")
})
app.use(session({
    secret: 'secret string',
    resave: false,
    saveUninitialized: true,
    store: store,
}))
app.get('/',function(req,res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant=0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
res.send({
    pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
});
});
app.get('/end', (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            res.send('Session is destroyed')
        }
    }); //THIS DESTROYES THE SESSION.
})