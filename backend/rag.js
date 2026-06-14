const Groq =
require("groq-sdk");

const retrieve =
require("./retriever");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function askQuestion(question){

    const docs =
    await retrieve(question);

    const context =
    docs.join("\n");

    const prompt = `
Use only the context below.

Context:
${context}

Question:
${question}

Answer:
`;

    const response =
    await groq.chat.completions.create({

        model:
        "llama-3.3-70b-versatile",

        messages:[
            {
                role:"user",
                content:prompt
            }
        ]
    });

    return {
        answer:
        response.choices[0]
        .message.content,

        sources: docs
    };
}

module.exports = askQuestion;