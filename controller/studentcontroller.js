exports.index = (req,res) => {
    res.send("hello mca student!");
};

exports.show = (req,res) => {
    res.send(`showing data for ID: ${req.params.id}`);
};

exports.store = (req,res) => {
    res.send(`data received: ${req.body.name}, ${req.body.city}`);
};

exports.update = (req,res) => {
    res.send(`data updated for ID:  ${req.params.id}, name: ${req.body.name}, city: ${req.body.city}`);
};

exports.delete = (req,res) => {
    res.send(`data deleted for id: ${req.params.id}`);
};