import { getAllPostSlugs, getPostData } from '../../lib/posts'

import Article from '../../components/posts/Article';
import { ArticleProvider } from '../../store/provider/ArticleProvider';

/**
 *
 *
 * @export
 * @param {*} {postData}
 * @return {*} 
 */
export default function Post({postData}) {

  return (
    <ArticleProvider>
      <Article 
        id={postData.id}
        userId={postData.userId}
        body={postData.body}
        title={postData.title}
        createdAt={postData.createdAt}
      />
    </ArticleProvider>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  
  const paths = slugs
    .map((slug) => ({
      params: {
          slug
      }
    }));

    return {
      paths,
      fallback: false,
    };
  }
  