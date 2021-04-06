import express from 'express'
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(
    path.resolve(__dirname, '../../dist'),
    { maxAge: '1y', etag: false})
);


app.get('/api/login', (req, res) => {
    console.log('hit the point');
    res.status(200).send("Yeah Sure");
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
