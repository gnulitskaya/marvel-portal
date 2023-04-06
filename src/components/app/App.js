import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";

function App() {
  return (
    <div className="app">
            <AppHeader/>
            <main>
                {/* <RandomChar/> */}
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                {/* <img className="bg-decoration" src={decoration} alt="vision"/> */}
            </main>
        </div>
  );
}

export default App;
