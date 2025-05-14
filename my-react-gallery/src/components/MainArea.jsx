import styles from "./mainArea.module.css";
import Home from "../data/Home";
import Profile from "../data/profile";
import About from "../data/about";
import ImageSlider from "./ImageSlider";
import Accordion from "./Accordion";

export default function MainArea({ selected }) {
  console.log("Selected view:", selected);

  const renderComponent = () => {
    switch (selected) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'about':
        return <About />;
      case 'imageSlider':
        return <ImageSlider />;
      case 'accordion':
        return <Accordion />;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };


  return (
    <div className={styles.main}>
      {renderComponent()}
    </div>
  );
}
