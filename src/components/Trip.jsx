import "./TripStyle.css";
import data from "../../src/data/index.json"

function Trip() {
  return (
    <div className="trip">
      <h1>Our offer</h1>
      <p>You can choose from our selection of trips</p>
      <div className="tripcard">
      {data?.trips?.map((item,index) => {
          return (
            <div key={index} className="t-card">
              <div className="t-image">
                <img src={item.image} alt="" />
              </div>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default Trip;