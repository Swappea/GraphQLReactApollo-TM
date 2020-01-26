const express = require('express');
const cors = require('cors');
const graphqlHttp = require('express-graphql');
const schema = require('./schema.js');
const path = require('path');
const app = express();

// Allow cors
app.use(cors());

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});