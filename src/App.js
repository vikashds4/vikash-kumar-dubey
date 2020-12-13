import React from 'react'
import './App.css'
import cloud from './images/clou.png'
import vikash from './images/vikash.jpg'
import bottom_pic from './images/hacker_PNG18.png'
import hard_work from './images/icons8-hard-working-48.png'
import laptop_coding from './images/icons8-laptop-coding-64.png'
import knight from './images/icons8-knight-40.png'
import mountain from './images/moun.png'
import mn from './images/Mountain-Transparent-Background.png'
// class App extends React.Component{
//   render()
//   {
//     return(
//       <div className="App">
//         <div>
//         <div className="top-container">
//         <img className="top-cloud" src="images/clou.png" alt="cloud-img" height="100px"/>
//         <h1>I'm Vikash.</h1>
//         <p className="pro">A <span className="pro">Pro</span>grammer and Designer.</p>
        
//         <img className="moun" />
//     </div>
//     </div>
//      </div>
//     );
//   }
// }

function App(){
  return(
    <div className="App">
    
    <div className="top-container">
      <img className="top-cloud" src={cloud}  alt="cloud-img" height="100px" />
      <h1>I'm Vikash.</h1>
      <p className="pro">A <span className="pro">Pro</span>grammer and Designer.</p>
    
      <img className="moun" />
    </div>
<div className="middle-container">
  <div className="profile">
    <img className="vikash" src={vikash} alt=""/>
    <h2><img className="bottom-pic" src={bottom_pic}/></h2>
    <p>hey, This is me Vikash Kumar Dubey <br/>student of College Of Commerce Arts and Science.<br/> I'm a programmer, web designer and developer. I love to play chess.</p>
  </div>
  <hr/>
  <div className="skills">
    <h2>My Skills.</h2>
    <div className="skill-row">
      
      <h3><img className="" src={hard_work} alt=""/> &nbsp;Ability to work under pressure</h3>
      <p>I like to keep myself calm in tensed situation and not becoming too overwhelmed or stressed. I'm not getting disappointed easily because I've patience. I like to work as a team and I've good leadership skills.</p>
    </div>
    <div className="skill-row">
      <h3>
      <img className="" src={laptop_coding} alt=""/> &nbsp;&nbsp;Design & Development</h3>
      <p>I’m proficient in C programming, C++ and Java and familiar with Python. I am also good at web development having knowledge in HTML, CSS, JavaScript, PHP and progressing to jQuery, React JS and Angular JavaScript.<br/>  
In addition to above, I am efficient at creative graphics design using Adobe XD, Adobe photoshop, Adobe illustrator(basic) and Adobe after effects.
</p>
    </div>
  </div>
  <hr/>
  <div className="contact-me">
    <h2>Get In Touch</h2>
    <h3><img src={knight} />If you love to code and play chess.</h3>
    <p>Can you beat me in chess? Let's talk about coding. We can code while we eat Pizza !</p>
    <a className="btn" href="mailto:vikashgautam11@outlook.com">CONTACT ME</a>
  </div>
 



 </div>
 </div>

  );
}

export default App;
