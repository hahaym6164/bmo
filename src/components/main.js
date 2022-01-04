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
    sortByTitle(e) {
        let list = this.state.bookList
        if (list) {
            list.sort((a, b) => {
                var titleA = a.title.toUpperCase();
                var titleB = b.title.toUpperCase()
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            })
            this.setState({
                bookList: list
            })
        }
    }
    sortByYear(e) {
        let list = this.state.bookList
        if (list) {
            list.sort((a, b) => {
                console.log(a.first_publish_year);
                return b.first_publish_year - a.first_publish_year
            })

            this.setState({
                bookList: list
            })
        }
    }


    render() {
        let { bookList } = this.state;
        return (
            <div className="main">
                <div className='searchBar'>
                    <form onSubmit={this.searchBooksByTitle.bind(this)}>
                        <label>

                            <input type="text" className="searchInput" placeholder="Enter Book Title Here" />

                            <input type="submit" className="searchInput" value="Search" /> </label>
                        <br></br>
                        <button onClick={this.sortByTitle.bind(this)}> Sort by title</button>
                        <button onClick={this.sortByYear.bind(this)}>Sort by latest year</button>
                    </form>
                </div>

                <div className="bookList">


                    {bookList && bookList.map((i) => (
                        <div key={i.key} className='singleBook'>


                            <div className="bookCover"><img src={coverUrl + i.cover_i + postfixCover}></img></div>
                            <div className="info">
                                <h4>{i.title}</h4>

                                <p>Published:  <span>{i.first_publish_year}</span></p>
                                <p>Authors:

                                    {i.author_name && i.author_name.map(name =>
                                        <span className="authors" key={this.state.nameKey++}> {name} <label>/</label></span>

                                    )}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
