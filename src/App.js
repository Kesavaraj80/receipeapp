import Carousel from 'react-material-ui-carousel'
import './App.css';

function App() {

  const receipies = [{
    imageurl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=375,341",
    name: "Chorizo & mozzarella gnocchi bake"
  },
  {
    imageurl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-chicken-cf6f9e2.jpg?quality=90&webp=true&resize=375,341",
    name: "Easy butter chicken"
  },
  {
    imageurl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg?quality=90&webp=true&resize=375,341",
    name: "Easy classic lasagne"
  },
  {
    imageurl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-teriyaki-c845724.jpg?quality=90&webp=true&resize=375,341",
    name: "Easy teriyaki chicken"
  }];


  return (
    <Carousel className="App"
    autoPlay={true}
    animation="slide"
    >
      {
        receipies.map((item)=>{
          return(
            <div className="receipie_container">
              <img src={item.imageurl}alt={item.name} className="r_image"></img>
              <h1>{item.name}</h1>
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default App;
