import { models } from "$lib/server/db/index.js"

export const actions = {
  default: async({ request }) => {
    const data = await request.formData()
    const title = data.get('title')
    const author = data.get('author')
    const contents = data.get('contents')
    const restrict_to = data.get('restrict_to')
    models.Document.add(title, author, contents, restrict_to)
    return{
      message: `Document ${title} successfully added.`
    }
  }
}