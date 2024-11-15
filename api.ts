import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const api = express.Router();

// Middleware to parse JSON bodies
api.use(bodyParser.json());

// Example API endpoint
api.get('/dujitang/index', (req, res) => {
    request.post({
        url: 'https://apis.tianapi.com/dujitang/index',
        form: {
            key: '01fa7878b499ab53f6b6fe8ab77c1d2c'
        }
    }, function (err: any, response: any, tianapi_data: any) {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        // 处理数据
        return res.json(JSON.parse(tianapi_data));
    });
});

// Another example API endpoint
api.post('/data', (req, res) => {
    const data = req.body;
    // 处理数据
    res.json({ receivedData: data });
});

export default api;