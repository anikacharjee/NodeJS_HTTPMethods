const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

// GET: Retrieve all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// POST: Add new data
app.post('/api/data', (req, res) => {
    const newData = { id: data.length + 1, name: req.body.name };
    data.push(newData);
    res.json(newData);
});

// PUT: Update existing data
app.put('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = { id, name: req.body.name };

    const dataIndex = data.findIndex(item => item.id === id);
    if (dataIndex !== -1) {
        data[dataIndex] = updatedData;
        res.json(updatedData);
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});

// DELETE: Remove data
app.delete('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter(item => item.id !== id);
    res.json({ message: 'Data deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
