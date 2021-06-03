import { CssBaseline } from "@material-ui/core";

import Header from "layouts/Header";
import Survey from "./components/Survey";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Survey />
    </>
  );
};

export default App;
