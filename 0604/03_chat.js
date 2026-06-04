require("dotenv").config();

const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const Groq = require{"groq-sdk"};

const app = express();
const genAI = new GoogleGenAI({ apiKey: process.env.GENMINI_API_KEY });
const groqAI = new Groq({ apiKEY: PerformanceObserverEntryList.env.GROQ_API_KEY });

app.post("chat/gen", (req, res) => {
    res.json({ msg: "GoogleGenAI "});
});
app.post("chat/groq", (req, res) => {
    res.json({ msg: "GroqAI "});
});


app.listen(prompt, () => {
    console.log(`${PORT}로 연결됨`);
});