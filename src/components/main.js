import React, { Component } from "react";
import './main.css';
import axios from "axios";

const url = "http://openlibrary.org/search.json?title="
const coverUrl = "https://covers.openlibrary.org/b/id/"
const postfixCover = "-S.jpg"
export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameKey: 1,
            bookList: [
                { title: 1, key: 'k1' }, { title: 2, key: 'k2' }
            ],
            allStudentList: [],
            searchByName: '',
            searchByTag: ''
        }
    }

    searchBooksByTitle(e) {
        e.preventDefault()
        let ip = e.target[0].value
        axios.get(url + ip).then(res => {

            this.setState({
                bookList: res.data.docs
            })
            console.log(res.data.docs, 'suc');
            return res.data.docs
        }).catch(e => console.log(e, 'error'))
    }
    getCoverForEachBook() {

    }
    render() {
        let { bookList } = this.state;
        return (
            <div className="main">
                <div className='searchBar'>
                    <form onSubmit={this.searchBooksByTitle.bind(this)}>
                        <label>
                            Name:
                            <input type="text" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="bookList">
                    {bookList.map((i) => (
                        <div key={i.key} className='singleBook'>


                            <div className="bookCover"><img src={coverUrl + i.cover_i + postfixCover}></img></div>
                            <div className="info">
                                <h4>{i.title}</h4>

                                <p> First Published Year:  <span>{i.first_publish_year}</span></p>
                                <p>Authors:</p>

                                {i.author_name && i.author_name.map(name =>
                                    <span key={this.state.nameKey++}> {name} </span>

                                )}

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
