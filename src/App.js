// import React from "react";
// import Navbar from "./component/navbar";
// import Hero from "./component/hero";
// function App() {
//   return (
//       <Navbar/>,
//       <Hero/>

//   );
// }

// export default App;
import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Analytics from "./component/analytics";
import Newslatter from "./component/newslatter";
import Cards from "./component/cards";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics/>
      <Newslatter/>
      <Cards/>
      <Footer />
    </>
  );
}

export default App;

