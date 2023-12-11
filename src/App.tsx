import Button from "./components/Button";

function App() {
  return (
    <div className="m-4 space-x-4 space-y-4">
      <Button
        onClick={() => {
          alert("Click");
        }}
      >
        My Button
      </Button>
      <Button variant="danger">Delete</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

export default App;
