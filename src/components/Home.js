import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [],
    };
  }
  componentDidMount() {
    const url = `http://localhost:4000/flowers`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data.flowerslist);
        this.setState({
          flowers: result.data.flowerslist,
        });
      })
      .catch((err) => console.log(err));
  }

  addFavFlower = (index)=>{
    const addFlower ={
      name:this.state.flowers[index].name,
      instructions: this.state.flowers[index].instructions,
      photo:this.state.flowers[index].photo
    }
    const url = `http://localhost:4000/addFlower`;
    axios.post(url,addFlower).then(res=>{
    }).catch();
  }

  render() {
    return (
      <>
        <h1>API Flowers</h1>
        {
        this.state.flowers.map((flower,i)=>{
          return(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={flower.photo} />
          <Card.Body>
            <Card.Title>{flower.name}</Card.Title>
            <Card.Text>
              {flower.instructions}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.addFavFlower(i)}>Add to Favorite</Button>
          </Card.Body>
        </Card>
          )
        })}
      </>
    );
  }
}

export default Home;
