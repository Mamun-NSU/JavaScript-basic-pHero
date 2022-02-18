function oddFriend(friends) {

    // IF the parameter of this function is not an Array, then this error message shown
    if (typeof friends != 'object') {
        return 'Please give an Array';
    }
    var friend = friends[0];
    // IF the value of this Array is not String, then this error message shown
    if (typeof friend != 'string') {
        return 'Please give name as string';
    }

    for (var i = 0; i < friends.length; i++) {
        friend = friends[i];
        if (friend.length % 2 == 1) {
            return friend;
        }
    }

}

var friends = ["Pias", "Sazzad", "Asifur", "Misuk", "Sazzad", "Abdullah Al Mamun", "Hasnat", "Sazzad", "Ibrahim", "Sujit"];
var friends2 = [];
console.log(oddFriend(friends));