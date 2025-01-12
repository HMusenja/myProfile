require("dotenv").config();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Email Transport Configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Change this if using another email provider (e.g., "hotmail", "yahoo").
  auth: {
    user: process.env.EMAIL, // We’ll secure this in Step 3
    pass: process.env.EMAIL_PASSWORD, // We’ll secure this in Step 3
  },
});

// Cloud Function to Trigger on New Messages
exports.sendEmailNotification = functions.firestore
  .document("messages/{messageId}") // Listens for new messages in the "messages" collection
  .onCreate(async (snap) => {
    const messageData = snap.data();

    const mailOptions = {
      from: process.env.EMAIL, // Your email
      to: process.env.EMAIL,   // Email where you’ll receive messages
      subject: `New Message from ${messageData.name}`,
      text: `
        You have received a new message:
        
        Name: ${messageData.name}
        Email: ${messageData.email}
        Message: ${messageData.message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });

