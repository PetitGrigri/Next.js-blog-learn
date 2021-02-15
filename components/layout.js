import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.sass'
import utilStyles from '../styles/utils.module.css'

const name = 'PetitGrigri';

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title key="title">{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        My Wonderfull blog
      </header>
      <div  className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
