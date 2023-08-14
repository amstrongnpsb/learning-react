import Button from "./components/elements/button";
function App() {
  return (
    <>
      <div className="flex m-auto bg-slate-500 w-5/6 gap-3 justify-around p-3 box-border">
        <Button background=" bg-slate-900" name="Login" />
        <Button name=" Register" background="bg-blue-900" />
        <Button background=" bg-violet-900" name="Logout" />
        <Button />
      </div>
    </>
  );
}

export default App;
