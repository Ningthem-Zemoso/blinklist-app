export interface BookModel {
  id: number
  title: string
  slug: string
  author: string
  mins_to_read: number
  image_url: string
  category: string
  created_at: string
}

export interface LibraryModel {
  id: number
  status: string
  bookId: number
  book: BookModel
}