import { Schema, model } from "mongoose"

const ContactScheme = new Schema(
    {
        name: String,
        phoneNumber: String,
        comment: String
    }
)

export default model("Contact", ContactScheme)