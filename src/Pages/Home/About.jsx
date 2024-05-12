import Main from '../../components/Main';
import AboutUs from '../../components/AboutUs'

function About() {
  return (
    <div>
      <Main 
      class="main-mid"
      mainImg="/img/hrensko.jpg"
      title="About"
      btnClass="hide"
      />
      <AboutUs />
    </div>
  )
}

export default About;