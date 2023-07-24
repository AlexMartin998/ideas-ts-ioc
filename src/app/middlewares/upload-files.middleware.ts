import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: path.join(__dirname, './../../../public/uploads'),
  filename: (req, file, cb) => {
    cb(null, (uuidv4() + path.extname(file.originalname)).toLocaleLowerCase());
  },
});

export const uploadFiles = multer({
  storage,
  limits: { fileSize: 2000000 }, // 2MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|svg/;
    const mimetype = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname));

    if (mimetype && extName) return cb(null, true);
    cb(new Error('Invalid file'));
  },
});
