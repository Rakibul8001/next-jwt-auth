import Layout from '../components/Layout'
import '../styles/globals.css'
import Axios from '../lib/axios'


function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>

        <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
