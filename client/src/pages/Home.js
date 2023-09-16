import React from "react";
import {
  Container,
  Image,
  Header,
  Button,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/quiz");
  };

  return (
    <Container  >
      
        <h1  class="ui header orange centered" style={{'marginBottom': '2em', 'marginTop': '1em'}} >Welcome to Deco!</h1>
     
     
     <div class="ui stackable three column grid ">
     
          <div class="column">
          
          <h2 class="ui header purple centered"> Take the Test </h2>
          <div class='ui header centered'>
          <i class="paint brush icon"></i>
          </div>
          <h3 class="ui header centered">Rate each image on a scale of 1 to 5 </h3>
          
          </div>

        <div class="column">
          <h2 class="ui header purple centered">Review Results  </h2>         
          <div class='ui header centered'>
          <i class="camera retro icon"></i>
          </div>
          <h3 class="ui header centered">Head to your profile page to see your top three art styles </h3>
        </div>
        <div class="column">
          <h2 class="ui header purple centered">Use your Style!</h2>
          <div class='ui header centered'>
          <i class="image outline icon"></i>
          </div>
          <h3 class="ui header centered">Use your new found art styles to decorate your home </h3>
        </div>
       
      </div>

      <Grid.Row>
      <div class='ui header centered' style={{'margin': '2em', 'padding': '2em'}} >
          <Button className="secondary text-dark centered" onClick={navigateProfile} > Take the Test</Button>
          </div>
      </Grid.Row>
    </Container>
  );
};

export default Home;
