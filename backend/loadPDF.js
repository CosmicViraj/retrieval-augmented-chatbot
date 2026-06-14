const { PDFLoader } = require("@langchain/community/document_loaders/fs/pdf");

async function loadPDF(path) {
    const loader = new PDFLoader(path);

    const docs = await loader.load();

    return docs.map(doc => doc.pageContent).join("\n");
}

module.exports = loadPDF;