import React, { useState } from "react"
import './App.css';
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import EditUser from "./components/EditUser";
// import AddUser from "./components/AddUser";
import { GlobalProvider } from "./Context/GlobalState";
import Background from "./Context/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faGears, faHomeLg,faProjectDiagram,faUserFriends } from "@fortawesome/free-solid-svg-icons";
// import AddededUserList from "./components/AddededUserList";
// import Project from "./components/Project";

const navigation = [
  {id:1, name: 'Dashboard',icon: faHomeLg, path:'/', current: false },
  {id:2, name: 'Team',icon: faUserFriends, path: '/userdata-list', current: false },
  {id:3, name: 'Projects',icon:faProjectDiagram, path: '/project', current: false },
  {id:4, name: 'Calendar',icon:faCalendarDays, path: '/calender', current: false },
  {id:5, name: 'Reports', icon:faGears, path: '/setting', current: false },
]

function App() {
  const [activebtn,setActiveBtn] = useState({activeId:1});

  const ActiveHandle = (id) => {
    setActiveBtn({ activeId: id })
  }

  // const location = useLocation();
  // console.log(location,"hihihi");
  
  return (
    <GlobalProvider >
      <Background>
      <Router>
        <Navigation />
        <div className="main flex flex-wrap flex-row body-height shadow">
          <header className=" dark:bg-slate-900 dark:border-slate-700 dark:text-slate-50 basis-1/5 border-r hidden md:block transition-all duration-100" >
            <ul className="px-2 pt-4 pb-3 space-y-1 sm:px-3 overflow-y-auto">
              {navigation.map((item) => (
                <Link to={item.path} key={item.name}>
                  <li className={`text-gray-600 dark:text-slate-400 flex gap-x-2 items-center  px-3 py-3 rounded-md text-base font-medium ${activebtn.activeId === item.id && "bg-gray-300 dark:bg-pink-600 dark:text-gray-50"}`} onClick={() => ActiveHandle(item.id)}>
                  <FontAwesomeIcon icon={item.icon} /> {item.name}
                  </li>
                </Link>
              ))
              }
            </ul>
          </header>
          <main className="basis-full md:basis-4/5 overflow-y-auto h-full scroll-smooth bg-gray-200 dark:bg-gray-700">
            <div className="container mx-auto">
              <Routes>
                <Route exext path="/" element={<Home />} />
                {/* <Route path="/edit-user/:id" element={<EditUser />} /> */}
                {/* <Route path="/add-user" element={<AddUser />} /> */}
                {/* <Route path="/userdata-list" element={<AddededUserList />} /> */}
                {/* <Route path="/project" element={<Project />} /> */}
                {/* <Route path="/add-user" element={<AddUser />} /> */}
              </Routes>
            </div>
          </main>
        </div>
      </Router>
      </Background>
    </GlobalProvider>
  );
}

export default App;
