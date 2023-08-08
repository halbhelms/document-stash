const licensorId = 1

export const load = async ({ fetch  }) => {
  const response = await fetch("http://localhost:4000/documents")
  const documents = await response.json()
  // filter docs for global and for this licensor
  const filteredDocs = documents.filter( document => {
    return document.restrict_to == licensorId || document.restrict_to == null
  })
  return {
    filteredDocs
  }
}
