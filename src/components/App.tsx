import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";

interface AppState {
  user: User | undefined;
}

class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  render() {
    return <div>App works with class Component</div>;
  }
}

export default App;
