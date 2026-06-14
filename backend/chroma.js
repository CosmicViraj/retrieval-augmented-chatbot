const { ChromaClient } = require("chromadb");

const client = new ChromaClient({
    host: process.env.CHROMA_HOST || "localhost",
    port: process.env.CHROMA_PORT || 8000
});

async function getCollection() {
    return await client.getOrCreateCollection({
        name: "rag-data",
        embeddingFunction: null
    });
}

module.exports = { getCollection };