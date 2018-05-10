const data = [

    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/med/men/83.jpg'
    },
    {
        name: 'Jane Doe',
        age: 45,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/med/women/83.jpg'
    },
    {
        name: 'Derek Man',
        age: 32,
        gender: 'male',
        lookingFor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/med/men/81.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display

function nextProfile() {

    const currentProfile = profiles.next().value;


    if(currentProfile !== undefined) {

        document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}
        </li>
        <li class="list-group-item">Age: ${currentProfile.age}
        </li>
        <li class="list-group-item">Gender: ${currentProfile.gender} Looking For: ${currentProfile.lookingFor}
        </li>
        <li class="list-group-item">Location: ${currentProfile.location}
        </li>
        </ul>
        `;
        
        document.getElementById('image-display').innerHTML = `
        <img src="${currentProfile.image}" />
        `;
    } else {
        window.location.reload();
    };
}

// Profile iterator

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles [nextIndex++], done: false } : 
            { done: true };
        }
    };
};