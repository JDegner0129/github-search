var React = require('react');

var Issue = React.createClass({
    render: function () {
        return (
            <div className="issue">
                <a href={this.props.url}>
                    <h4>{this.props.title} <small>{this.props.user}</small></h4>
                </a>
            </div>
        )
    },
});

module.exports = Issue;