import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Treading Now" fetchUrl={requests.fetchTreanding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Doumentaries" fetchUrl={requests.fetchDoumentaries} />
    </div>
  );
}

export default App;
