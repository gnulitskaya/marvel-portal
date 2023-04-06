import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";

function App() {
  return (
    <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
            </main>
        </div>
  );
}

export default App;
