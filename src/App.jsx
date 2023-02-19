import AppRoutes from "@/components/AppRoutes";
import Theme from "@/components/Theme";
import "@/styles/App.scss";

function App() {
  return (
    <div id="App">
      <Theme>
        <AppRoutes />
      </Theme>
    </div>
  );
}

export default App;
