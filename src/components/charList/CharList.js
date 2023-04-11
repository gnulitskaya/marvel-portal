import './charList.scss';
import MarvelService from "../../services/MarvelService";
import {Component} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

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

    renderItems(arr) {
        const items = arr.map((item) => {

            return (
                <li
                    className="char__item"
                    key={item.id}>
                    <img src={item.thumbnail} alt={item.name}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error} = this.state;

        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long center">
                    <div className="inner">Load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;