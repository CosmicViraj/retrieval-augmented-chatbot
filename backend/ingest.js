const loadPDF = require("./loadPDF");
const splitText = require("./splitText");
const getEmbedding = require("./embedding");
const { getCollection } = require("./chroma");

async function ingest() {
    try {
        console.log("Loading PDF...");

        // Change filename to your actual PDF name
        const text = await loadPDF("./data/documents/sample.pdf");

        console.log("PDF Loaded Successfully!");

        console.log("Chunking text...");
        const docs = await splitText(text);

        console.log(`Created ${docs.length} chunks`);

        const collection = await getCollection();

        console.log("Creating embeddings and storing...");

        for (let i = 0; i < docs.length; i++) {
            const content = docs[i].pageContent;

            const embedding = await getEmbedding(content);

            await collection.add({
                ids: [`chunk-${i}`],
                embeddings: [embedding],
                documents: [content],
                metadatas: [{
                    source: "sample.pdf",
                    chunk: i
                }]
            });

            console.log(`Stored chunk ${i + 1}/${docs.length}`);
        }

        console.log("✅ Indexing Completed");
    }
    catch (error) {
        console.error("❌ Error:");
        console.error(error);
    }
}

ingest();