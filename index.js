const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 4000;

app.get('/', (req, res) => {
    res.send(
        [
            { id: "1", name: "Urgent", color: "red" },
            { id: "2", name: "Regular", color: "yellow" },
            { id: "3", name: "Trivial", color: "blue" }
        ]
    )
})
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));