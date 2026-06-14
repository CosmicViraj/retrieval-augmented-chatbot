const { getCollection } = require("./chroma");
const getEmbedding = require("./embedding");

async function retrieveDocs(query, topK = 3) {
    const collection = await getCollection();

    const queryEmbedding = await getEmbedding(query);

    const results = await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: topK
    });

    return results.documents[0];
}

module.exports = retrieveDocs;