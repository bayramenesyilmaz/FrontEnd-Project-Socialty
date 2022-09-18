import DateContainer from "./components/DateContainer";
import Navbar from "./components/Navbar";
import data from "./data.json"
import profilePng from "../src/img/Picture.png"

const { posts_by_date } = data;

const postData = Object.entries(posts_by_date).sort((a, b) => new Date(b[0]) - new Date(a[0]))

function App() {
  return (

    <div className="d-flex " >

      <div className="nav-container bg-dark">

        <Navbar />

      </div>

      <div className="main-container">
        <header>

          <div className="header-status">
            <span>
              <i className="fa-solid fa-circle" style={{ color: "rgba(172, 172, 172, 1)" }}></i>
              Published
            </span>
            <span>
              <i className="fa-solid fa-circle" style={{ color: "rgba(58, 193, 131, 1)" }}></i>
              Scheduled
            </span>
            <span>
              <i className="fa-solid fa-circle" style={{ color: "rgba(247, 191, 56, 1)" }}></i>
              Need Approval
            </span>
            <span>
              <i className="fa-solid fa-circle" style={{ color: "rgba(251, 100, 80, 1)" }}></i>
              Error
            </span>
            <span>
              <i className="fa-solid fa-circle" style={{ color: "rgba(103, 177, 242, 1)" }}></i>
              Notes
            </span>
          </div>

          <img src={profilePng} />

        </header>

        {
          postData.map((date, key) => {
            return <DateContainer key={key} date={date[0]} dateData={date[1]} />
          })
        }
      </div>

    </div>

  );
}

export default App;