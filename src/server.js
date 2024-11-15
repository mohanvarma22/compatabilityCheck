// server.js
import express from 'express';
import fileUpload from 'express-fileupload';
import compatibilityCheck from './compatibilityCheck.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust the path to 'public' in the root directory
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '../public')));  // Adjusts path to 'public' in root

// Explicit route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));  // Adjusts path to 'index.html'
});

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.folder) {
    return res.status(400).send('No files were uploaded.');
  }

  const folder = req.files.folder;
  const files = Array.isArray(folder) ? folder : [folder];  // Ensure files is an array

  compatibilityCheck.checkCompatibility(files, (result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
