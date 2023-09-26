import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import { getAllContacts, getContact, createNewContact, updateContact, deleteContact } from './controllers/ContactController.js';

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

// Запросы
app.get("/contacts", getAllContacts)
app.get("/contact/:id", getContact)
app.post("/contact", createNewContact)
app.patch("/contact/:id", updateContact)
app.delete("/contact/:id", deleteContact)

app.listen(3100, () => {
  console.log("Server start!")
})