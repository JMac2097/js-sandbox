// init github
const gitHub = new GitHub;

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

            } else {
                // Show the profile

            };
        });
    } else {
        // Clear the profile
    };

});


