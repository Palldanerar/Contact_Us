import express from 'express';
import mongoose from 'mongoose';
import Contact from "./Schema/Contact.js"


const app = express()

app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/Contact_Us")
    .then(() => {
        console.log("БАЗА ДАННЫХ ПОДКЛЮЧЕНА")
    })
    .catch((err) => {
        console.log(`БАЗА ДАННЫХ НЕ ПОДКЛЮЧЕНА. Ошибка: ${err}`)
    })

app.get("/", (req, res) => {
    res.send("API для сервиса добавления контактов")
})

app.get('/users', async (req, res) => {
    const users = await Contact.find({});
    res.json(users);
})

app.post("/users", async (req, res) => {
    try {

        const contactPhone = await Contact.findOne({phoneNumber: req.body.phoneNumber})

        if(contactPhone) {
            return res.json({status: "FAIL", message: "Данный номер уже существует!"})
        }

        const doc = new Contact({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            comment: req.body.comment
        })
    
        await doc.save()
        res.json({status: "OK", message: "Контакт успешно добавлен!"})

    } catch(err) {
        res.json(err)
    }
})

app.listen(3100, () => {
  console.log("Server start!")
})