export const load = async ({ fetch, params  }) => {
  const response = await fetch(`http://localhost:4000/documents/${params.documentId}`)
  const document = await response.json()
  return {
    document
  }
}