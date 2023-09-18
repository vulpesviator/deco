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
      <img src= '/images/Danny_485.jpeg' alt='A dashing man named Danny Wittig'></img>
    </div>
    <div class="content">
      <div class="ui header purple centered">Danny Wittig</div>
      <div class="meta">
      </div>
      <div class="description">
      How does one find the words to describe Danny Wittig. An innovator, a problem solver, a free thinker... these are just a few of the many descriptors attributed to him. If you were to ask him yourself, he would probably say he is just a humble kid from the east end of Pittsburgh, looking to make his place in the world. But the reality is, you could never really know Danny until you meet him, shake his hand, and let him tell you about his life.
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