import '../css/Home.css';

import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className="above-fold" id="outer-container">
      <div id="page-wrap">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="intro">
          <h1>
            Hi, my
            <br />
            name is <b>Alex</b>
          </h1>
          <p>I am an <b>aspiring developper</b> from 
            <br />
            Montreal, Canada
          </p>
        </div>
        <div className="scroll">
          <span className="span-container">
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
          </span>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;