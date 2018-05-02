

class GitHub {
    constructor() {
        this.client_id = 'b4acf12f5d3bb5eea2db';
        this.client_secret = '6ccd3867d512f6bcd29627136a5eb347f8d271e0';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        };

    };
}