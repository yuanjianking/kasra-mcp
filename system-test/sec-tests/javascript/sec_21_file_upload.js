// SEC-21: Unrestricted File Upload
// Test: TC-CR-028
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: '/uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const fs = require('fs');
  fs.renameSync(file.path, '/uploads/' + file.originalname);  // No extension/type check
  res.send('uploaded');
});
