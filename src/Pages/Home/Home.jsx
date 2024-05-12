import Main from '../../components/Main';
import Places from '../../components/Places';
import Trip from '../../components/Trip'

function Home() {
  return (
    <div>
      <Main 
        class="main"
        mainImg="/img/12.jpg"
        title="Discover the Czech Republic"
        paragraph="Choose your travel package"
        url="/"
        btnClass="show"
        btnText="Travel package"
      />
      <Places />
      <Trip />
    </div>
  )
}

export default Home;