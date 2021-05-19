const multer = require("multer");
const path = require("path");

const upload = (name = "user") => {
  const storage = multer.diskStorage({
    destination: path.join(__dirname, `./../../public/images`),
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      // console.log({ ff: file, req });
      cb(null, `${name}-${file.fieldname}-${Date.now()}${ext}`);
    },
  });
  return multer({ storage: storage });
};
module.exports = upload;
