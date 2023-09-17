import React from "react";
import {
  Container,
  Button,
  Grid,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const AboutUs = () => {
    return (
    <div class="ui four stackable  cards" style= {{'marginTop': '2em', 'marginRight': '2em', 'marginLeft': '2em'}}>
  <div class="card" >
    <div class="image">
    <img src= '/images/clare-aboutus.jpeg' alt='clare'></img>
    </div>
    <div class="content">
      <div class="ui header purple centered" >Clare Bryar</div>
      <div class="meta">
   
      </div>
      <div class=" description" >
       Coding Bootcamp student, Chicago native, pasta enthusiast, former water polo player, currently working in the home services industry
      </div>
    </div>
    <div class="extra content">
      <a href='https://github.com/clarebryar'>
       <div class=' ui centered header'></div>
        <i class="github icon"></i>
      </a>
    </div>
  </div>
  <div class="card">
    <div class="image">
    <img src='/images/travis.jpg' alt='Travis' ></img>
    </div>
    <div class="content">
      <div class="ui header purple centered">Travis Hoffman</div>
      <div class="meta">
        <span class="date">Data Miner</span>
      </div>
      <div class="description">
      Considered his own favorite cryptid, this particular species is renowned for being peer-reviewed, snarky,
            and his ability to make things pretty.
      </div>
    </div>

    <div class="extra content">
      <a href='https://github.com/vulpesviator'>
       <div ></div>
        <i class="github icon"></i>
      </a>

    </div>
  </div>
  <div class="card">
    <div class="image">
      <img ></img>
    </div>
    <div class="content">
      <div class="ui header purple centered">Danny Wittig</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
    <a href='https://github.com/deegeedubs'>
       <div ></div>
        <i class="github icon"></i>
      </a>
    </div>
 </div>

 <div class="card">
    <div class="image">
      <img ></img>
    </div>
    <div class="content">
      <div class="ui header purple centered">Hannah Wolfson</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
    <a href='https://github.com/hanwol525'>
       <div class=' ui centered header'></div>
        <i class="github icon"></i>
      </a>
    </div>
 </div>
</div>
    )
};

export default AboutUs;