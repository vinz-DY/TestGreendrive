import DisplayCards from "./components/DisplayCards";

function App() {
  return (
    <div>
      <DisplayCards basePath="/terminals" />
      <DisplayCards basePath="/cars" />
      <DisplayCards basePath="/profils" />
    </div>
  );
}

export default App;
