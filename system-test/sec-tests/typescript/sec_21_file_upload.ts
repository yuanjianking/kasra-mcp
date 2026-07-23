// SEC-21: Unrestricted File Upload
// Test: TC-CR-028
import express from 'express';
import multer from 'multer';
import fs from 'fs';

const app = express();
const upload = multer({ dest: '/uploads/' });

app.post('/upload', upload.single('file'), (req: any, res) => {
  const file = req.file;
  fs.renameSync(file.path, '/uploads/' + file.originalname);  // No type/size check
  res.send('uploaded');
});
