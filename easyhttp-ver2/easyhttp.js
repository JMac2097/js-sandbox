

// Easy HTTP version 2

class EasyHTTP {
// Make http GET request
    get(url) {
        return new Promise((resolve, reject) => {

            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
    };

    // Make HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
    };

    // Make HTTP PUT request  --- Update
    put(url, data) {
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
    };

    // Make an Http DELETE
    delete(url) {
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => resolve(`Resource Deleted!!`))
            .catch(err => reject(err));

        });
    };
};

