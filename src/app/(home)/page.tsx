import { ClientBooks } from './client-books'

const API_BASE = 'http://localhost:4500/api'

// Server-side fetch function
async function getBooks() {
  try {
    const res = await fetch(`${API_BASE}/books`, {
      next: { tags: ['books'] }
    })

    if (!res.ok) {
      console.error('Failed to fetch books:', res.status, res.statusText)
      return []
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

export default async function Home() {
  const books = await getBooks()

  return <ClientBooks initialBooks={books} />
}
