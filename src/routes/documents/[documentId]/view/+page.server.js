// this is counterfind internal
const counterfindID = -500
const licensorID = 3

// What if someone types in an id that they don't have access to?

//load function to return document (if user has permission to view it)
export const load = async ({ fetch, params  }) => {
  const response = await fetch(`http://localhost:4000/documents/${params.documentId}`)
  const document = await response.json()
  let availableDoc = null
  // this is possibly the area to write if statement regarding token access?
    // if licensor id == counterfind id, then availableDoc is the document
  if (licensorID == counterfindID){
    availableDoc = document
  } 
    // if document.restrict_to == null, then availableDoc is the document
  if (document.restrict_to == null){
    availableDoc = document
  }  
    // if licensor id == document.restrict_to, availableDoc is the document
  if (licensorID == document.restrict_to){
    availableDoc = document
  }
   return {
    availableDoc
  }
}

