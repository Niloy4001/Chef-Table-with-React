import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Title from './components/Recipe-Title/Title'
import './App.css'

function App() {
  

  return (
    <>
      <div className='w-[90%] mx-auto'>
        {/* navbar  section*/}
        <section>
          <Navbar></Navbar>
        </section>
        {/* Banner section */}
        <section>
          <Banner></Banner>
        </section>
        {/* Recipe title*/}
        <section>
          <Title></Title>
        </section>
      </div>
    </>
  )
}

export default App
