import Navbar from "./components/Custom/Navbar";
import Info from "./components/Custom/Info";
import ExplorePlatforms from "./components/Custom/ExplorePlatforms";
import WhyChooseRinZ from "./components/Custom/Whychoose/WhyChooseRinZ";
import CourseComponent from "./components/Custom/CourseComponent";
import FeedbackComponent from "./components/Custom/Feedback/FeedbackComponent";
import ToolFeatures from "./components/Custom/ToolFeatures";
import ContactForm from "./components/Custom/ContactForm/ContactForm";
import Footer from "./components/Custom/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Info/>
      <ExplorePlatforms/>
      <WhyChooseRinZ/>
      <CourseComponent/>
      <FeedbackComponent/>
      <ToolFeatures/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
