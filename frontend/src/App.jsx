import DisplayCards from "./components/DisplayCards";

function App() {
  return (
    <div>
      <DisplayCards basePath="/terminals" />
      <DisplayCards basePath="/cars" />
      <DisplayCards basePath="/users" />

    </div>
  );
}

export default App;
