import './App.scss'
import { Form } from './components/Form'
import imgCardFrontUrl from './assets/bg-card-front.png'
import imgCardBackUrl from './assets/bg-card-back.png'
import svgCardLogoUrl from './assets/card-logo.svg'

function App() {

  return (
    <main>
      <section className='cards'>
        <div className='card-front'>
          <img className='card-front__img' src={imgCardFrontUrl} alt='Card Front' />
          <img className='card-front__logo' src={svgCardLogoUrl} alt="Card Logo" />
          <p className='card-front__number'>0000 0000 0000 0000</p>
          <p className='card-front__name'>Jane Appleseed</p>
          <p className='card-front__exp-date'>00/00</p>
        </div>
        <div className='card-back'>
          <img className='card-back__img' src={imgCardBackUrl} alt='Card Back' />
          <p className='card-back__cvc'>000</p>
        </div>
      </section>
      <Form />
    </main>
  )
}

export default App
