import express from "express";
import bodyParser from "body-parser";
import cors from "cors";



let app = express();
const PORT = 3002
app.use(bodyParser());

app.use(cors());

app.post('/api/login', (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(500).json({"error" : "No email or password "})
    }
    res.status(200).json({"success" : req.body})
})


app.listen(PORT, () => {
    console.log(`conected on port ${PORT}`);
});



