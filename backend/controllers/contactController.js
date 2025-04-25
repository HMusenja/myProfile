import Contact from '../models/contactModel.js';

// Save Contact Message to Database
export const saveContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error: error.message });
  }
};
