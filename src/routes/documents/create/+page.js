import data from "$lib/data/db.json"

export const load = async ({ fetch, params  }) => {
    // Get all licensors
    const licensors = fetch('http://localhost:4000/licensors')
    return {
        addNewDocument: addNewDocument,
        licensors
    }
  }
// create a function that will expect a new document obj, that will add to db.json
function addNewDocument (docContents){
    docContents.restrict_to = null

    fetch('http://localhost:4000/documents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(docContents)
    })
}