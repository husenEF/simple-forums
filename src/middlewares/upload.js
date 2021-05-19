const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, `./../../public/images`),
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    console.log({ ff: file, req });
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
