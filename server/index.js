import express from 'express';
import mongoose from 'mongoose';
import Contact from "./Schema/Contact.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

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

app.get('/contacts', async (req, res) => {
    try {
        const users = await Contact.find({});
        res.json(users);
    } catch(err) {
        res.json(err)
    }
})

app.post("/contacts", async (req, res) => {
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

app.patch("/contacts", async (req, res) => {
    try {

        await Contact.updateOne({
            phoneNumber: req.body.phoneNumber
        },{
            name: req.body.title,
            comment: req.body.comment,
        })

        res.json({status: "OK", message: "Контакт успешно обновлён!"})

    } catch(err) {
        res.json(err)
    }
})

app.delete("/contacts", async (req, res) => {
    try {
        await Contact.findOneAndDelete({
            phoneNumber: req.body.phoneNumber
        })

        res.json({status: "OK", message: "Контакт успешно удалён!"})
    } catch(err) {
        res.json(err)
    }
})

app.listen(3100, () => {
  console.log("Server start!")
})