import { endpoint } from '@/utils/endpoint'

export async function getAllProjects() {
  const data = await fetch(`${endpoint}/projects`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getProjectBySlug(slug) {
  const data = await fetch(`${endpoint}/projects/${slug}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}