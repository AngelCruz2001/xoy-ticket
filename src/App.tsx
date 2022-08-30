import { Hero, Navbar, Searchbar, Title, Match, Team, Carousel, Brands, Footer } from 'components';
import calendarIcon from "assets/icons/calendar.svg";
import ticketIcon from "assets/icons/tickets.svg";
import { useWindowDimensions } from './hooks/useWindowDimensions';
import './App.css';

export const App = () => {
  const { width } = useWindowDimensions();
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {/* {
        width < 900 &&
        <Searchbar />
      }
      <Hero />
      <Title title='PRÓXIMOS PARTIDOS' icon={calendarIcon} />
      <section>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </section>
      <Title title='TICKETS POR EQUIPOS' icon={ticketIcon} />

      <Team /> */}

      <form action="">
        <input type="text" placeholder="Usuario " />
        <input type="text" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
   

      <Carousel />

      <Brands />

      <Footer />

    </div>
  )
}
