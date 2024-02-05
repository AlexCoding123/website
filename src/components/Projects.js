import '../css/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h1>
      A Glimpse into My Portfolio
      </h1>
      <p>
        Diving into coding adventures,
        I’ve put together some cool stuff,<br/>
        from apps that fit in your pocket 
        to websites that wow.<br/>
         Ready to take a peek?
        Here's where my ideas come to life
      </p>
      <div>
        <div className="gh-links">
          <div>    
            <h1>LOGO</h1>  
            <div>
              <h1>Traffic Light Simulator</h1>
              <p>Curiosity got the best of me, and I found myself fascinated <br/>
              by how snapshots of car plates are captured. <br/> So, I rolled up my sleeves and built a program that does just that—neat, huh?
              </p>
            </div>  
          </div>
          <hr/>
          <div className="mobile-app">    
            <h1>LOGO</h1>  
            <div>
              <h1>Custom Calendar App</h1>
              <p>Check out my Android calendar app that's got a neat twist <br/>
               – it's also your daily weather buddy! Plan your day with precision<br />
                and never let the rain catch you by surprise again
              </p>
            </div>  
          </div>
          <hr/>
          <div>    
            <h1>LOGO</h1>  
            <div>
              <h1>Traffic Light Simulator</h1>
              <p>Curiosity got the best of me, and I found myself fascinated <br/>
              by how snapshots of car plates are captured. <br/> So, I rolled up my sleeves and built a program that does just that—neat, huh?
              </p>
            </div>  
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default Projects;