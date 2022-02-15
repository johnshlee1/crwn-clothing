import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage= () => {
  return (
    <div>
    {/* <button onClick={() => props.history.push('/topics2')}>Topics2</button>
      <Link to='/topics'>Topics</Link> */}
      <h1>HATS PAGE</h1>
    </div>
  )
}
// const TopicsList= (props) => {
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}/13`}>TO TOPIC 13 </Link>
//       <Link to={`${props.match.url}/17`}>TO TOPIC 17 </Link>
//       <Link to={`${props.match.url}/21`}>TO TOPIC 21 </Link>
//     </div>
//   )
// }
// const TopicsDetail= (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   )
// }
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        {/* <Route exact path="/whateverthepathishere/topics" component={TopicsList} />
        <Route path="/whateverthepathishere/topics/:topicId" component={TopicsDetail} />
        <Route exact path="/blog/topics" component={TopicsList} />
        <Route path="/blog/topics/:topicId" component={TopicsDetail} /> */}
      </Switch>
    </div>
  )
}

export default App;
