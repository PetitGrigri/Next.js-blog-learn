import { getAllPostSlugs, getPostData } from '../../lib/posts'

import Date from '../../components/date'
import Head from 'next/head';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
      </article>
    </Layout>
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
  