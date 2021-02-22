const express = require('express');
const node  = express();
node.use(express.json());

const alarms = []
const locations =[]
const logins =[]
const videos = []


node.get('/msgs/alarm' , (req , res) =>{
    res.send(alarms)
})

node.get('/msgs/login' , (req , res) =>{
    res.send(logins)
})

node.get('/msgs/location' , (req , res) =>{
    res.send(locations)
})

node.get('/msgs/video' , (req , res) =>{
    res.send(videos)
})




node.post('/msgs/location' , (req,res)=>{
    const msg = {
        type: req.body.type,
        location_time: req.body.location_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude        
    }
    locations.push(msg);
    res.send(msg)
})

node.post('/msgs/alarm' , (req,res)=>{
    const msg2 = {
        type: req.body.type,
        alarm_type: req.body.alarm_type,
        alarm_time: req.body.alarm_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        file_list: req.body.file_list
    }
    alarms.push(msg2);
    res.send(msg2)
})

node.post('/msgs/login' , (req,res)=>{
    const msg3 = {
        type: req.body.type,
        imei: req.body.imei
    }
    logins.push(msg3);
    res.send(msg3)
})


node.post('/videos' , (req , res) =>{
    let msg = {
        imei : req.body.imei,
        filename : req.body.filename,
        data : req.body.data
    }
    videos.push(msg);
    res.send(msg);
})


const port = process.env.PORT || 3000
node.listen(port)