import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedBackProvider } from "./context/FeedBackContext";
import AboutIconLink from "./components/AboutIconLink";


function App() {
 

  return (
    <FeedBackProvider>
    <Router>
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
        <Route path="/" exact element={
          <>
          <FeedbackForm/>
          <FeedbackStats/>
          <FeedbackList />
          </>
        }>
        
        </Route>
        
        <Route path="/about" element={<AboutPage/>} />
        
        </Routes>
        <AboutIconLink />
      </div>
    </div>
    </Router>
    </FeedBackProvider>
  );
}

export default App;
