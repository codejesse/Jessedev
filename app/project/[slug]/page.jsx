import React from 'react'
import { getAllProjects, getProjectBySlug } from '@/libs/projects'

export const dynamicParams = false

export async function generateStaticParams() {
  const { projects } = await getAllProjects()
  return projects.map(project => ({ slug: project.slug }))
}


export default async function page({ params }) {
    const { project } = await getProjectBySlug(params.slug)
  return (
    <div>page</div>
  )
}
