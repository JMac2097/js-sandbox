const User = function(name) {
    this.name = name;
    this.chatroom = null;
}


User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}  // this will be a list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                //  Single user message
                to.recieve(message, from);
            }else{
                //  Mass message
                for(key in users) {
                    if(user[key] !== from) {
                        users[key].recieve();
                    }
                }
            }
        }
    }
}