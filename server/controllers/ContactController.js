import Contact from "../Models/Contact.js"

export const getAllContacts = async (req, res) => {
    try {

        const constacts = await Contact.find()

        res.json(constacts)

    } catch(err) {
        res.json({
            message: `Ошибка при получении контактов! Ошибка ${err}` 
        })
    }
}

export const getContact = async (req, res) => {
    try {

        const constact = await Contact.findOne({_id: req.params.id})

        if(!constact) {
            res.json({
                message: "Контакта с данным носером не существует!"
            })
        }

        res.json(constact)

    } catch(err) {
        res.json({
            message: `Ошибка при получении контакта! Ошибка ${err}` 
        })
    }
}

export const createNewContact = async (req, res) => {
    try {

        const contactPhone = await Contact.findOne({phoneNumber: req.body.phoneNumber})

        if(contactPhone) {
            return res.json({message: "Данный контакт уже существует!"})
        }

        const doc = new Contact({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            comment: req.body.comment
        })
    
        await doc.save()
        res.json({message: "Контакт успешно добавлен!"})

    } catch(err) {
        res.json({
            message: `Ошибка при удалении контакта! Ошибка ${err}` 
        })
    }
}

export const updateContact = async (req, res) => {
    try {

        await Contact.updateOne({
            _id: req.params.id
        },{
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            comment: req.body.comment,
        })

        res.json({message: "Контакт успешно обновлён!"})

    } catch(err) {
        res.json({
            message: `Ошибка при обновлении контакта! Ошибка ${err}` 
        })
    }
}

export const deleteContact = async (req, res) => {
    try {

        await Contact.findOneAndDelete({
            _id: req.params.id
        })

        res.json({message: "Контакт успешно удалён!"})

    } catch(err) {
        res.json({
            message: `Ошибка при удалении контакта! Ошибка ${err}` 
        })
    }
} 