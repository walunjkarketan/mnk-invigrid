const db = require("../models");

const File = db.file;
exports.createUploadFile = (req, res) => {
    var i = -1;
    let fileSizeInBytes = req.file.size
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes /= 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return File.create({
        name: req.file.name,
        original_name: req.file.originalname,
        name: req.file.filename,
        size: Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i],
        userId: req.body.user_id
    })
        .then((file) => {

            res.send(file);
        })
        .catch((err) => {
            console.log(">> Error while creating tutorial: ", err);
        });
};

exports.getFilesById = (req, res) => {

    return File.findAll({
        where: { userId: req.params.id }
    })
        .then((file) => {

            res.send(file);
        })
        .catch((err) => {
            console.log(">> Error while creating tutorial: ", err);
        });
};