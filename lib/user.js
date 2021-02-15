const FAKE_JSON_USER_URL = "https://jsonplaceholder.typicode.com/users/{user_id}";

/**
 * Get the a list of the comments related to a post
 *
 * @return {{
 *  id: number,
 *  name: string,
 *  phone: string,
 *  email: string,
 *  username: string,
 *  website: string, 
 *  company: {
 *    bs: string, 
 *    catchPhrase: string, 
 *    name: string,   
 *  },
 *  address: {
 *    geo: {
 *      lat: string, 
 *      lng: string,
 *    },
 *    city: string, 
 *    street: string, 
 *    suite: string, 
 *    zipcode: string
 *  }
 * }}
 */
export function getUser (userId) {
  const url = FAKE_JSON_USER_URL.replace('{user_id}', userId);
    // Get fake post

  return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json());
  }