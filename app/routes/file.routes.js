const multer = require('multer');
const path = require('path');
const files = require("../controllers/file.controller.js");
const { authJwt } = require("../middleware");

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(pdf|jpg)$/)) {
            // upload only pdf and jpg format
            return cb(new Error('Please upload a File'))
        }
        cb(undefined, true)
    }
})

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/uploadFile", authJwt.verifyToken, imageUpload.single('file'),
        files.createUploadFile
    );

    app.get("/get-by/:id", authJwt.verifyToken, files.getFilesById);

};


