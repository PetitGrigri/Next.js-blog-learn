import fs from 'fs'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'

const markdownsDirectory = path.join(process.cwd(), 'markdowns')

/**
 * Return all markdowns inside the markdowns folder
 */
export function getSortedMarkdownsData() {
  // Get file names under /markdowns
  const fileNames = fs.readdirSync(markdownsDirectory)
  const allMarkdownsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(markdownsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the markdown metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort markdowns by date
  return allMarkdownsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Generate a list of file name without markdown extension inside the markdowns folder
 */
export function getAllMarkdownIds() {
  const fileNames = fs.readdirSync(markdownsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

/**
 * Get the markdown with a specific id
 * 
 * @param {String} id 
 */
export async function getMarkdownData(id) {
  const fullPath = path.join(markdownsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the markdown metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

