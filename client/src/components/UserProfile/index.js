import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_IMAGES } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import ImageCarousel from "../ImageCarousel";
import { List, Container, Segment, Header, Button } from "semantic-ui-react";
import Jumbotron from "../Jumbotron";

function UserProfile() {

  const {loading: loadingUser, data: userData } = useQuery(QUERY_USER);
  const user = userData?.user || [];

  const {loading: loadingImages, data: imagesData} = useQuery(QUERY_IMAGES);
  const images = imagesData?.images || [];

  let category1;
  let category2;
  let category3;
  let categoryNameArray = [];
  let categoryIdArray = [];
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let imageSrcArray = [];

  function pullCategoryData() {
  
    const topCategoriesObj = user.userScore;

    let sortable = [];
    for( var category in topCategoriesObj){
      sortable.push([category, topCategoriesObj[category]]);
    };
    sortable.shift();
    const topCategoriesSorted = sortable.sort(function(a,b){
      return b[1]-a[1]
    });

    category1 = topCategoriesSorted[0];
    category2 = topCategoriesSorted[1];
    category3 = topCategoriesSorted[2];

    for (let i = 0; i < images.length; i++) {
      let imageCategory = images[i].category;
      if (imageCategory.scoreCategory === category1[0]){
        category1 = imageCategory;
        image1 = images[i];
      } else if (imageCategory.scoreCategory === category2[0]) {
        category2 = imageCategory;
        image2 = images[i];
      } else if (imageCategory.scoreCategory === category3[0]) {
        category3 = imageCategory;
        image3 = images[i];
      } 
    }
    categoryNameArray = [category1.name, category2.name, category3.name];
    categoryIdArray = [category1._id, category2._id, category3._id];
    imageSrcArray = [image1, image2, image3];
  }
  

  

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      Auth.logout();
    } catch (e) {
      console.log(e);
    }
  };

  if(!loadingUser && !loadingImages){
    if (Auth.loggedIn()){
      pullCategoryData();
      return (
        <Container >
          <Segment.Group horizontal>
              <Segment horizontal textAlign="center">
                <h1 font-size="50px">{user.firstName} {user.lastName}</h1>
                <Segment textAlign="center" s>
                <Button onClick={handleLogout}>Log Out</Button>
              </Segment>
              </Segment>
              
            <Segment textAlign="center">
              <Header>Top Art Styles</Header>
              <List>
                <List.Item>
                  <Link 
                    to={`/art/${categoryIdArray[0]}`} 
                    style={{color: "black", fontWeight: "bold"}}
                  >
                    {categoryNameArray[0]}
                  </Link>
                </List.Item>
                <List.Item>
                  <Link 
                    to={`/art/${categoryIdArray[1]}`} 
                    style={{color: "black", fontWeight: "bold"}}
                  >
                    {categoryNameArray[1]}
                  </Link>
                </List.Item>
                <List.Item>
                  <Link 
                    to={`/art/${categoryIdArray[2]}`} 
                    style={{color: "black", fontWeight: "bold"}}
                  >
                    {categoryNameArray[2]}
                  </Link>
                </List.Item>
              </List>
              
            </Segment>
          </Segment.Group>
          <Segment.Group >
            <Segment textAlign="center">
              <Header>Top Art Pieces</Header>
            </Segment>
            <Segment> 
              <ImageCarousel images={imageSrcArray} />
            </Segment>
          </Segment.Group>
          

        </Container>
      );
    } else {
      return(
      <Jumbotron>
        <h1>You Are Not Logged In!</h1>
        <Button
          className="primary"
          name="login"
          as={Link}
          to="/login"
        >
          Login Here
        </Button>
        <Button
          className="secondary"
          name="signup"
          as={Link}
          to="/signup"
        >
          Signup
        </Button>

        
      </Jumbotron>
      );
    }
  }


}
  
export default UserProfile;
