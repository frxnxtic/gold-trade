const https = require('https');

module.exports = (req, res) => {
    const { id } = req.query;
    https.get('https://gold-trade-be.vercel.app/flats.json', (resp) => {
        let data = '';
        resp.on('data', chunk => data += chunk);
        resp.on('end', () => {
            const flats = JSON.parse(data);
            const flat = flats.find(item => String(item.id) === String(id));
            if (flat) res.status(200).json(flat);
            else res.status(404).json({ error: 'Not found' });
        });
    }).on('error', () => {
        res.status(500).json({ error: 'Read error' });
    });
};
