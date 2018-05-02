

// Easy HTTP version 3

class EasyHTTP {
// Make http GET request
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    };

    // Make HTTP POST request
    async post(url, data) {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;

    };

    // Make HTTP PUT request  --- Update
    async put(url, data) {
       
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;

    };

    // Make an Http DELETE
    async delete(url) {
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await `Resource Deleted!`;
        return resData;

    };
};

