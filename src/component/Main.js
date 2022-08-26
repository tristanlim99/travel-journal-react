export default function Main(param) {
  const { country, date, description, img, location, map } = param;
  return (
    <div className="container">
      <img className="img" src={img} alt={img}></img>
      <div className="content">
        <div className="location">
          <img
            className="location-logo"
            src="./img/location-logo.png"
            alt="location"
          ></img>
          <p className="country">{country}</p>
          <p>
            <a className="google-map" href={map}>
              View on Google Maps
            </a>
          </p>
        </div>
        <h1>{location}</h1>
        <h5 className="date">{date}</h5>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
