var request = require('request');
var React = require('react');
var SearchForm = require('./search-form.jsx');
var IssueList = require('./issue-list.jsx');

var githubApiUrl = 'https://api.github.com/search/issues?q=';

var IssueApp = React.createClass({
    searchGithub: function(query) {
        var options = {
            'url': githubApiUrl + encodeURIComponent(query),
            'headers': {
                'User-Agent': 'github-search',
            },
            'json': true,
            'withCredentials': false,
        };

        console.log(options.url);

        var self = this;
        request(options, function (err, response, body) {
            if (err) {
                console.log(err);
                return;
            }

            var newIssues = [];
            body.items.forEach(function (item) {
                var issue = {
                    url: item.html_url,
                    title: item.title,
                    user: item.user.login,
                };
                newIssues.push(issue);
            });

            self.setState({
                issues: newIssues,
            });
        });
    },
    getInitialState: function() {
        return {
            issues: [],
        };
    },
    render: function() {
        return (
            <div>
                <SearchForm onSearchSubmit={this.searchGithub} />
                <IssueList issues={this.state.issues} />
            </div>
        );
    },
});

React.render(
    <IssueApp />,
    document.getElementById('issue-content')
);