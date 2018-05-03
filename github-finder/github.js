

class GitHub {
    constructor() {
        this.client_id = 'b4acf12f5d3bb5eea2db';
        this.client_secret = '6ccd3867d512f6bcd29627136a5eb347f8d271e0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
        

        return {
            profile,
            repos
        };

    };
}