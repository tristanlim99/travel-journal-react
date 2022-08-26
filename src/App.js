import Navbar from "./component/Navbar";
import Main from "./component/Main";
import data from "./Data";

function App() {
  const dataFile = data.map((item) => {
    return (
      <Main
        country={item.country}
        date={item.date}
        description={item.description}
        img={`./img/${item.img}`}
        location={item.locationName}
        map={item.map}
      />
    );
    // console.log(item);
  });
  return (
    <div>
      <Navbar />
      <section className="main-content">{dataFile}</section>
    </div>
  );
}

export default App;
