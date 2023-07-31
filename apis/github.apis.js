const links = require('../configs/Links.config');

const CommitI = {
    async script() {
        const response = await fetch(
          'https://api.github.com/repos' + links.githubProject + 'commits'
        );
        const commits = await response.json();
        const latestCommit = commits[0];
        const Sha = latestCommit.Sha;

        const shortSha = Sha.slice(0,7);
        const commitMessage = latestCommit.commit.message;
        const commitUrl = latestCommit.html_url;
    },
}