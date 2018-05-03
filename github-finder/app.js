// init github
const gitHub = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get inpout text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        gitHub.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert('User not found!', 'alert alert-danger');

            } else {
                // Show the profile
                ui.showProfile(data.profile);
                // Show repos
                ui.showRepos(data.repos);
            };
        });
    } else {
        // Clear the profile
        ui.clearProfile();
    };

});


