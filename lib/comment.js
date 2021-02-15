const FAKE_JSON_COMMENTS_URL = "https://jsonplaceholder.typicode.com/posts/{post_id}/comments";

/**
 * Get the a list of the comments related to a post
 *
 * @return {{
    *  postId: number,
    *  id: number,
    *  name: string,
    *  email: string,
    *  body: string, 
    * }[]} 
    */
export function getComments (postId) {
  const url = FAKE_JSON_COMMENTS_URL.replace('{post_id}', postId);
    // Get fake post

  return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json());
  }