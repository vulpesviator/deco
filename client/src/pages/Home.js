import React from "react";
import {
  Container,
  Button,
  Grid,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const Home = () => {
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/quiz");
  };
  const loggedIn = Auth.loggedIn();

  return (
    <Container className="homePage-container" >
      
        <h1  class="ui header orange centered" style={{'marginBottom': '2em'}} >Welcome to Deco!</h1>
     
     
     <div class="ui stackable three column grid " style={{'box-shadow': '-9px 9px 18px -3px rgba(0,0,0,0.5)'}}>
     
          <div class="column" >
          {loggedIn ? (
            <h2 class="ui header purple centered" onClick={navigateProfile}> Take the Test </h2>
          ) : (<h2 class="ui header purple centered" onClick={() => navigate("/login")}> Take the Test </h2>)}
          <div >
            {loggedIn ? (
              <img class='ui small image centered' src='/images/easel.png' alt='easel icon' onClick={navigateProfile}></img>
            ): (
              <img class='ui small image centered' src='/images/easel.png' alt='easel icon' onClick={() => navigate("/login")}></img>
            )}
          
          </div>
          <h3 class="ui header centered">Rate each image on a scale of 1 to 5 </h3>
          
          </div>

        <div class="column" >
          
          {loggedIn ? (<h2 class="ui header purple centered" onClick={() => navigate("/profile")}>Review Results  </h2>
            ) : (
          <h2 class="ui header purple centered" onClick={() => navigate("/login")}>Review Results  </h2>)}         
          <div >
            {loggedIn ? (
              <img class='ui small image centered' src='/images/camera.png' alt='camera icon' onClick={() => navigate("/profile")}></img>
            ) : (
              <img class='ui small image centered' src='/images/camera.png' alt='camera icon' onClick={() => navigate("/login")}></img>
            )}
          
          </div>
          <h3 class="ui header centered">Head to your profile page to see your top three art styles </h3>
        </div>
        <div class="column" >
          {loggedIn ? (
              <h2 class="ui header purple centered" onClick={() => navigate("/categories")}>Use your Style!</h2>
            ) : (
              <h2 class="ui header purple centered" onClick={() => navigate("/login")}>Use your Style!</h2>
            )}
          <div >
            {loggedIn ? (
              <img class='ui small image centered' src='/images/paintbrush.png' alt='paintbrush icon' onClick={() => navigate("/categories")}></img>
            ) : (
              <img class='ui small image centered' src='/images/paintbrush.png' alt='paintbrush icon' onClick={() => navigate("/login")}></img>
            )}
          </div>
          <h3 class="ui header centered">Use your new found art styles to decorate</h3>
        </div>
       
      </div>

      <Grid.Row>
      <div class='ui header centered' style={{'margin': '2em', 'padding': '2em'}} >
        {loggedIn ? (
          <Button className="secondary text-dark centered" onClick={navigateProfile} > Take the Test</Button>

        ) : (
          <>
           <Button className="secondary text-dark centered"  style= {{'margin': '1em'}}onClick={() => navigate("/login")} > LogIn</Button>
          <Button className="secondary text-dark centered"style= {{'margin': '1em'}} onClick={() => navigate("/signup")} > Signup</Button>
          </>
        )}
          </div>
      </Grid.Row>
    </Container>
  );
};

export default Home;
// test comment