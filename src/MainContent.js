import './MainContent.css';
import EventList from './EventList';


export default function Header() {
    return (
        <main className="Main">
          <h1>Blocos Recomendados</h1>
          <EventList/>
        </main>
    );
  }
  