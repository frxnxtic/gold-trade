const https = require('https');

module.exports = (req, res) => {
    const { id } = req.query;
    https.get('https://gold-trade-be.vercel.app/flats.json', (resp) => {
        let data = '';
        resp.on('data', chunk => data += chunk);
        resp.on('end', () => {
            try {
                const flats = JSON.parse(data);

                // Если id = all, вернуть весь массив
                if (id === 'all') {
                    res.status(200).json(flats);
                    return;
                }

                // В остальных случаях ищем по id
                const flat = flats.find(item => String(item.id) === String(id));
                if (flat) {
                    res.status(200).json(flat);
                } else {
                    res.status(404).json({ error: 'Not found' });
                }
            } catch (e) {
                res.status(500).json({ error: 'Parse error' });
            }
        });
    }).on('error', () => {
        res.status(500).json({ error: 'Read error' });
    });
};
