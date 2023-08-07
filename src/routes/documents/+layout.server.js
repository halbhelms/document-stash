export const load = async ({ fetch  }) => {
  const response = await fetch("http://localhost:4000/documents")
  const documents = await response.json()
  return {
    documents
  }
}
