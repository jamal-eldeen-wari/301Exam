import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";

class FavFlowers extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      favFlower:[],
      updateObj:{},
      showingUpdateModel:false,
    }
  }

  componentDidMount(){
    const url = `http://localhost:4000/favFlower`;
    axios.get(url).then(response=>{
      console.log(response.data.flowerslist);
      this.setState({
        favFlower:response.data.flowerslist,
      })
    }).catch();
  }
  showModel =(element) =>{
    this.setState({
      updateObj:element,
      showingUpdateModel:true

    })
  }

  deleteFlower = (id)=>{
    const url = `http://localhost:4000/deleteFlower/${id}`;
    axios.delete(url).then(response=>{
      this.setState({
        favFlower:response.data.flowerslist,
      })
    }).catch();
  }

  updateFlower = (e)=>{
    const flowerId = this.state.updateObj._id;
    const body ={
      name:e.target.name.value,
      photo:e.target.photo.value,
      instructions:e.target.instructions.value,
    }
    const url = `http://localhost:4000/updateFlower/${flowerId}`;
    axios.put(url,body).then(response=>{
      const updateFlowerArr = this.state.favFlower.map(flower=>{
        if(flower._id === flowerId){
          flower.name = response.data.flowerslist.name;
          flower.photo = response.data.flowerslist.photo;
          flower.instructions = response.data.flowerslist.instructions;
          return flower;
        }
        return flower;
      });
      this.setState({
        favFlower:updateFlowerArr
      })
      this.showModel({})
      this.setState({showingUpdateModel:false});
    }).catch()
  }


  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
        {
        this.state.favFlower.map((flower,i)=>{
          return(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={flower.photo} />
          <Card.Body>
            <Card.Title>{flower.name}</Card.Title>
            <Card.Text>
              {flower.instructions}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.showModel(flower)}>Update</Button>
            <Button variant="danger" onClick={() => this.deleteFlower(flower._id)}>Delete</Button>
          </Card.Body>
        </Card>
          )
        })}
      </>
    )
  }
}


export default FavFlowers;
