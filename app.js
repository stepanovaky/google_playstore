const express = require('express');
const morgan = require('morgan');

const app = express();

const apps = require('./playstore.js')

app.use(morgan('dev'));

app.listen(8000, () => {
    console.log('server started on PORT 8000');
});

app.get('/apps', (req, res) => {
    const { search = "" } = req.query;

    let results = apps
                .filter(app =>
                    app
                        .App
                        .toLowerCase()
                        .includes(search.toLowerCase()));


    
    
    
    res
        .json(results);

})

//sort	'rating' or 'app'	sort the list by either rating or app, any other value results in an error, if no value provided do not perform a sort.
// genres	one of ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card']	If present the value must be one of the list otherwise an error is returned. Filter the list by the given value.