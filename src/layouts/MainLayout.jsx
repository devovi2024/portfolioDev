import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({children}) {
  return (
    <div>
      <Navbar/>
      <main></main>
      <Footer/>
    </div>
  )
}
