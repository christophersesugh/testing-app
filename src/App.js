import "./App.css";
import ApiRequest from "./components/api-request";
import Form from "./components/form";
import Counter from "./components/counter";

function App() {
  // form component
  // const values = ({ username, password }) => {
  //   window.alert(`${username} ${password}`);
  // };

  return (
    <>
      <Counter />
      {/* <Form onSubmit={values} /> */}
      {/* <ApiRequest /> */}
    </>
  );
}

export default App;
