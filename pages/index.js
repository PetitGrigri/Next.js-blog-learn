import Layout, { siteTitle } from '../components/layout'
import { useEffect, useState } from 'react'

import Date from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedMarkdownsData } from '../lib/markdown'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({allMarkdownsData, allPostsData}) {

  // Simple Test with useEffect / useState
  const [test, setTest] = useState("First post !");
  useEffect(() => {
    window.setTimeout(() => setTest("First post ;)"), 3000);
  });


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue magna a ante vehicula porttitor. Pellentesque urna urna, ultrices vitae metus commodo, gravida consectetur turpis. Proin fermentum nisl lectus. Nulla mauris ante, malesuada eu placerat sed, porttitor nec est. Curabitur laoreet est feugiat tincidunt gravida. Fusce in auctor diam. Pellentesque finibus aliquet quam a venenatis. Donec consequat dolor ac nisi semper, at sodales velit varius. Maecenas suscipit nisl eros, ac blandit dolor gravida eu. Mauris efficitur tincidunt risus at interdum. Sed non ornare ante, id tristique dui. 
        </p>
        <p>
          Please to a look to my{' '}
          <Link href="/markdown/first-post">
            <a>{test}</a>
          </Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <div className={utilStyles.columns}>
        {/* Markdown posts */}
        <section className={utilStyles.column}>
          <h2 className={utilStyles.headingLg}>Markdown</h2>
          <ul className={utilStyles.list}>
            {allMarkdownsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/markdown/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        
        {/* Dummy posts */}
        <section className={utilStyles.column}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ slug, createdAt, title }) => (
              <li className={utilStyles.listItem} key={slug}>
                <Link href={`/post/${slug}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={createdAt} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allMarkdownsData = getSortedMarkdownsData();
  const allPostsData = await getSortedPostsData();
  
  return {
    props: {
      allMarkdownsData,
      allPostsData
    }
  }
}

