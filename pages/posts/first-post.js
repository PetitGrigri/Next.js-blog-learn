import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post by PetitGrigri</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>First post by PetitGrigri</h1>

      <p>
      Pellentesque interdum erat quis enim posuere ultricies. Aenean cursus tempus vestibulum. Phasellus pellentesque viverra convallis. Vestibulum cursus, metus at auctor porta, turpis ligula pulvinar eros, eu iaculis velit elit non lectus. Fusce imperdiet nunc sit amet diam posuere commodo. Pellentesque a mattis lacus. Nulla id arcu in sapien consequat hendrerit in venenatis arcu. Proin tempus fermentum erat, vel fringilla nibh porta vitae. Sed euismod nunc sit amet tempus gravida. Sed nibh lectus, rutrum ut ullamcorper vel, accumsan eget mi. Vestibulum tincidunt mollis mi. 
      </p>
    </Layout>
  )
}
