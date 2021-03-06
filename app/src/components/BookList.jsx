/** @jsx React.DOM */
'use strict'
var React = require("react");
var Book = require("./Book");

var BookList = React.createClass({

    handleOnClick: function(book) {
        this.props.bookClickAction(book);
    },
    render: function() {

        var columnsPerRow = 4;
        return (

            <div className="row">
        {this.props.books.map(function(book, index){
             var rowEnd;
             if(index%columnsPerRow == columnsPerRow-1){
                 rowEnd = <div className="clearfix"></div>
             }
            return(
            <div key = {book._id || book.id }>
            {
            //putting the book property in each Child
                React.Children.map(this.props.children, function(child) {
                    return React.cloneElement(child, { book: book });
                }.bind(book))
            }
            {rowEnd}
            </div>
            )
        }.bind(this))}
            
        </div>

        )
    }

});

module.exports = BookList;