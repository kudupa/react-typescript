import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const names = [
    { firstname: "Bruce", lastname: "Wayne" },
    { firstname: "Clark", lastname: "Kent" },
  ];

  return (
    <div className="App">
      <Greet name="Karthik" messages={10} isLoggedin={false} />
      <PersonList names={names} />
      <Status status="success" />
      <Heading>I am children</Heading>
      <Oscar>
        <Heading>Oscar goes to Leaonardo Decaprio</Heading>
      </Oscar>
      <Button
        onClickHandler={(event, id) => {
          console.log("Button clicked");
        }}
      />
      <Input
        value=""
        onChangeHandler={(event) => {
          console.log("Input value changed", event.target.value);
        }}
      />
      <Container
        styles={{
          border: "1px solid black",
          backgroundColor: "yellow",
          padding: "1rem",
        }}
      />{" "}
      {/* For Styling */}
    </div>
  );
}

export default App;
