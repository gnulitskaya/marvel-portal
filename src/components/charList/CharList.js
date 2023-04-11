import './charList.scss';
import MarvelService from "../../services/MarvelService";
import {Component} from "react";

class CharList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    loadCharsList = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.loadCharsList();
    }

    render() {
        const { charList } = this.state;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    { charList.map((item, index) => (
                            <CharItem key={index} char={item}/>
                        ))
                    }
                </ul>
                <button className="button button__main button__long center">
                    <div className="inner">Load more</div>
                </button>
            </div>
        )
    }
}

const CharItem = ({char}) => {
    const { name, thumbnail } = char;

    return (
        <li className="char__item">
            <img src={thumbnail} alt={name}/>
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;