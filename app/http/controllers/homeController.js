const Item = require('../../models/item')
function homeController() {
    return {
        index(req,res) {
             Item.find().then(function(items){
                return res.render('home', { items: items })
            })
        }
    }
}

module.exports = homeController