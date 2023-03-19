module.exports = (req, res) => {

    res.send = (data,err) => {
        if(err) throw err;
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(JSON.stringify(data))
    }
}