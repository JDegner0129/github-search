var React = require('react');
var Issue = require('./issue.jsx');

var IssueList = React.createClass({
    render: function() {
        var issues = this.props.issues.map(function (issue) {
            return (
                <Issue key={issue.url} title={issue.title} url={issue.url} user={issue.user} />
            );
        });
        return (
            <div className="issue-list">
                {issues}
            </div>
        );
    },
});

module.exports = IssueList;