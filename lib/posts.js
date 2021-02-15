import { randomDate } from "./date";

/**
 * @type {{
 *  id: number,
 *  userId: number,
 *  title: string,
 *  body: string
 * }[]|null} posts
 */
var posts = null;

const FAKE_JSON_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * Get the a list of Posts
 *
 * @return {{
 *  id: number,
 *  userId: number,
 *  title: string,
 *  body: string,
 *  createdAt: Date, 
 *  slug: string
 * }[]} 
 */
async function getPosts () {
  // Get fake post
  if (posts === null) {
    const tempoPosts = await fetch(FAKE_JSON_POSTS_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    });
    
    posts = tempoPosts.map((post) => {
      return {
        ...post,
        createdAt: randomDate({since: new Date(2010, 1, 1)}),
        slug: post.title.toLowerCase().replace(/ /g, '-')
      }
    });
  }

  return posts;
};

/**
 * 
 * @param {{
 *  id: number,
 *  userId: number,
 *  title: string,
 *  body: string,
 *  createdAt: Date, 
 *  slug: string
 * }} post
 */
function formatPost({createdAt, title, ...others}) {
  return ({
    ...others, 
    title: title[0].toUpperCase() + title.substr(1),
    createdAt: createdAt.toISOString()
  })
}

/**
 *
 *
 * @export
 * @return {{
 *  id: number,
 *  userId: number,
 *  title: string,
 *  body: string,
 *  createdAt: Date, 
 *  slug: string
 * }[]} 
 */
export async function getSortedPostsData() {
  const posts = await getPosts();
  
  return posts
    .sort((a, b) => Math.sign(b.createdAt.getTime() - a.createdAt.getTime()))
    .map(formatPost)
  ;
}

export async function getAllPostSlugs() {
  const posts = await getPosts();
  
  return posts
    .map((post) => post.slug)
  ;
}

export async function getPostData(slug) {
  const posts = await getPosts();

  return posts
    .filter((post) => post.slug === slug)
    .map(formatPost)
    .shift()
  ;
}

