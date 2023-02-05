import Counter from "./Counter";
import Home from "./Home";
import NotFound from "./NotFound";

export default function ShowComponent({ componentShowing }) {
  const selectComponent = () => {
    switch (componentShowing) {
      case "home":
        return <Home />;

      case "counter":
        return <Counter />;

      default:
        return <NotFound/>
    }
  };

  return selectComponent();
}
