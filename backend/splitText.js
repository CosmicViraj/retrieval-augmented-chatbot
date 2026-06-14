const { RecursiveCharacterTextSplitter } =
require("@langchain/textsplitters");

async function splitText(text) {
    const splitter =
    new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100
    });

    return await splitter.createDocuments([text]);
}

module.exports = splitText;