import './App.css';
import Card from './components/card/Card';

function App() {
    let cards = [
        {
            image: 'https://media.istockphoto.com/vectors/pumkin-and-kawaii-flying-ghost-in-comic-style-vector-id1175313236?k=20&m=1175313236&s=612x612&w=0&h=Lvq33n4G7ttmL4DS6DetryZljFlvwZ6TMKBiS3_t0B0=',
            title: 'Card 1',
            content: 'contenido de texto'
        },
        {
            image: 'https://media.istockphoto.com/vectors/pumkin-and-kawaii-flying-ghost-in-comic-style-vector-id1175313236?k=20&m=1175313236&s=612x612&w=0&h=Lvq33n4G7ttmL4DS6DetryZljFlvwZ6TMKBiS3_t0B0=',
            title: 'Card 2',
            content: 'contenido de texto 2'
        },
        {
            image: 'https://media.istockphoto.com/vectors/pumkin-and-kawaii-flying-ghost-in-comic-style-vector-id1175313236?k=20&m=1175313236&s=612x612&w=0&h=Lvq33n4G7ttmL4DS6DetryZljFlvwZ6TMKBiS3_t0B0=',
            title: 'Card 3',
            content: 'contenido de texto 3'
        }
    ];

    cards = cards.map(({image, title, content}) => {
        return <Card image={image} title={title} content={content}/>
    });

  return (
    <div className="App">
      <h1>Happy Halloween</h1>
      <div className="card-container">
          { cards }
      </div>
    </div>
  );
}

export default App;
