import data from "$lib/data/db.json"
export const load = async ({ fetch, params  }) => {
    return {
        addNewDocument: addNewDocument
    }
  }
// create a function that will expect a new document obj, that will add to db.json
function addNewDocument (docContents){
    console.log(docContents)
}