/**
 * Retrieves a character and their associated quotes based on the provided slug.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug of the character.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the character and their quotes, or an error response.
 */

import projects from "@/app/data/projects.json"
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const project = projects.data.find(item => item.slug === params.slug)
    if (!project) {
      return new NextResponse('Not found', { status: 404 })
    }

    return NextResponse.json({
      project,
    })
    
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}