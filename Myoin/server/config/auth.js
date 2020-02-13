

function ensureAuthenticated(req,res,next){
     if(req.isAuthenticated()){
         return next();
     }
     else{
     req.flash('err_msg','please login to view the pages');
     res.redirect('/users/login');
}
}
function forwardAuthenticated(req , res ,next){
    if(!req.isAuthenticated()){
    return next();
}
else{
res.redirect('/dashboard');
}
}
module.exports = {ensureAuthenticated,forwardAuthenticated}