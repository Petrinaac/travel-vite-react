
import "./PlacesStyle.css"
import data from "../data/index.json"

const Places = () => {
  return (
    <div className="places">
      <h1>Popular places</h1>
      <p>
Here you will find a selection of the most popular places that people visit.</p>
      {data?.places?.map((item,index) => {
          return (
            <div key={index} className={item.className}>
        <div className="des-text">
          <h2>{item.heading}</h2>
          <p>{item.text}</p>
        </div>
        <div className="image">
          <img src={item.img1} alt="image1" />
          <img src={item.img2} alt="Mountain View" />
      </div>
          </div>
          );
        })}
    </div>
  )
}

export default Places;