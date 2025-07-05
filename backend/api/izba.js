const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const { id } = req.query;
    const filePath = path.join(process.cwd(), 'flats.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const flat = data.find(item => String(item.id) === String(id));
    if (flat) {
        res.status(200).json(flat);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
};
