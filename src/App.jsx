import "./App.css";
import Head from "./components/Head";
import Form from "./components/Form";
import Todos from "./components/Todos";
import Section from "./components/Section";
function App() {
  return (
    <div className="App">
      <div className=" font-[poppins,ray] w-5/6 sm:w-7/12 md:w-1/2 lg:w-2/5 pb-20">
        <Head />
        <Form />
        <Todos />
        <Section />
      </div>
    </div>
  );
}

export default App;
