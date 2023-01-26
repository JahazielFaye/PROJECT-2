const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/feed', (req, res) => {
    res.render('feed', { title: 'Title of Place', description: 'Description of Place', link: 'Link to Category Place' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = router;