import "./App.css";
import Form from "./components/form";
// import Counter from "./components/counter";

function App() {
  const values = ({ username, password }) => {
    window.alert(`${username} ${password}`);
  };

  return <Form onSubmit={values} />;
}

export default App;
