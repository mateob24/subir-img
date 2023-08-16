const app = require('express')(),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images')
        },
        filename: (req, file, cb) =>{
            cb(null, file.originalname)
        }
    })
    upload = multer({storage});

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root:__dirname})
})

app.post('/subir', upload.single('archivo'), (req, res) => {
    console.log(req.file);
    res.send('Archivo se subio correctamente')
})

app.post('/multiple', upload.array('archivo', 2), (req, res) => {
console.log(req.files);
    res.send('Archivos se subieron correctamente')
})

app.listen(3000, () => console.log('SERVIDOR FUNCIONANDO'))