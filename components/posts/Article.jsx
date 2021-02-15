import Author from './Author';
import Comments from '../../components/posts/Comments';
import Date from '../../components/date'
import Head from 'next/head';
import Layout from '../../components/layout'
import { NEW_ARTICLE } from '../../store/constant/article';
import PropTypes from 'prop-types'
import { articleConsummerHook } from '../../store/provider/ArticleProvider';
import { useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'

/**
 * @type {{
  *  id: number,
  *  userId: number,
  *  title: string,
  *  body: string
  * }} props
  */
const Article = ({title, createdAt, body, id, userId}) => {
  const [state, dispatch] = articleConsummerHook();

  useEffect(() => {
    dispatch({
      type: NEW_ARTICLE,
      payload: {
        articleId: id, 
        userId: userId
      }
    })
  }, [id]);

  return (
    <Layout>
      <Head>
        <title key="title">{title}</title>
      </Head>

      {/** The article */}
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {/** The related author */}
        <Author />
      </article>

      
      {/** The related comments */}
      <section>
        <h2 className={utilStyles.headingLg}>Commentaires</h2>
        <Comments />
      </section>
    </Layout>
  );
}

Article.proptype = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Article;