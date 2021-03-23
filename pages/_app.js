import '../styles/globals.css'
import NavBar from "../component/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>

   <NavBar />
   <Component {...pageProps} />
    </div>)
}

export default MyApp
