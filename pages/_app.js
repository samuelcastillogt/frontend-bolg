import { AppProps } from "next/app"
import Layout from "../components/Layout"
import "./index.css"
const MyApp =({ Component, pageProps })=>{
    return(
        <Layout>
             <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp