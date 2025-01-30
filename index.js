const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3751;


app.use(cors());

app.get('/', (req, res) => {

    const currentDate = new Date().toISOString();

    res.json({
        email: "obijekwudamian@gmailcom", 
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/D-blac/HNG12-0-"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});