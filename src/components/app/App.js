import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import {Component} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

  render() {
      return (
          <div className="app">
              <AppHeader/>
              <main>
                  <RandomChar/>
                  <div className="char__content">
                      <CharList onCharSelected={this.onCharSelected} />
                      <ErrorBoundary>
                          <CharInfo charId={this.state.selectedChar}/>
                      </ErrorBoundary>
                  </div>
              </main>
          </div>
      );
  }
}

export default App;
