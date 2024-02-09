import { log } from "@/lib/logger";
import { Provider } from "react-redux";
import Feed from "./components/feed";
import Sidebar from "./components/sidebar/sidebar";
import { store } from "./store/store";
import { Toaster } from "./components/ui/toaster";

function App() {
  log.debug("App component mounted");
  return (
    <Provider store={store}>
      <div className="flex justify-center min-h-screen">
        <Sidebar />
        <Feed />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
