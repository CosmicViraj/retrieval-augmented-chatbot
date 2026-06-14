# retrieval-augmented-chatbot
AI-powered RAG (Retrieval Augmented Generation) chatbot that allows users to chat with PDF documents using vector embeddings, ChromaDB, and LLM-based responses.


### 🤖 AI Knowledge Base Chatbot (RAG System)

## 📌 Overview

This is a Retrieval-Augmented Generation (RAG) chatbot that allows users to upload documents (PDF) and ask intelligent questions based on the content.

## It combines:

Document processing
Vector embeddings
Semantic search
LLM-based response generation

## Features

- PDF document ingestion
- Text chunking & embedding generation
- Semantic search using ChromaDB
- AI-powered question answering
- Fast Node.js backend (Express)
- Simple frontend UI
- REST API integration


## 🏗️ Architecture
PDF → Chunking → Embeddings → ChromaDB → Retrieval → LLM → Answer

# 🛠️ Tech Stack
Backend:
Node.js
Express.js
ChromaDB
LangChain
Groq API (or LLM provider)
pdf-parse
Frontend:
HTML
JavaScript
Fetch API
AI / NLP:
HuggingFace Transformers (@xenova/transformers)
MiniLM embeddings model


## 📁 Project Structure
```md
rag-chatbot/
│
├── backend/
│   ├── server.js
│   ├── rag.js
│   ├── retriever.js
│   ├── embedding.js
│   ├── ingest.js
│   ├── chroma.js
│   ├── loadPDF.js
│   └── data/
│       └── sample.pdf
│
├── frontend/
│   └── index.html
│
├── package.json
└── README.md
```
# ⚙️ Installation & Setup

1. Clone repository
```git clone https://github.com/your-username/rag-chatbot.git```


2. Install dependencies
```npm install```

3. Start ChromaDB (required)
```chroma run```

4. Run ingestion (load PDF into vector DB)
```cd backend
node ingest.js
```

5. Start backend server
```node server.js```

Server runs at:
```http://localhost:5000```

6. Open frontend

Open:

```frontend/index.html```

or use Live Server.

## 💬 API Endpoint

POST /chat

Request:

{
  "question": "What is machine learning?"
}

Response:

{
  "answer": "Machine learning is...",
  "sources": ["chunk1", "chunk2"]
}

## 📌 Example Questions
What is AI?
Explain machine learning
What is RAG?
Summarize the document
What are embeddings?

## ⚠️ Known Issues
ChromaDB must be running before starting server
Large PDFs may take time to embed
Requires Node.js v18+

1.Future Improvements
2.Add streaming responses
3.Multi-PDF upload support
4.Chat history memory
5.Deploy to cloud (Render/Vercel)
6.Upgrade to OpenAI / Groq advanced models


## 👨‍💻 Author

Viraj Jadhav
