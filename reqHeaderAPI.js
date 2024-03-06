const express = require('express');
const app = express();

app.get('/api/whoami', (req,res)=>
{
    const ip = req.ip; // Get ip addr
    const prefLang = req.get('Accept-Language'); // Get preferred language
    const userAgent = req.get('User-Agent'); // Get user agent
    res.json({
        ipaddress: ip,
        language: prefLang,
        software: userAgent
    }); // send json
})