
function bestFriend(friends) {
    console.log(typeof friends)
    if (typeof number != "object") {
        return "Please enter a number";
    }

    var myBestFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.length > myBestFriend.length) {
            myBestFriend = friend;
        }
    }
    return myBestFriend;
}

var friends = ["Mamun", "Pias", "Misuk", "Sazzad", "Abdullah Al Mamun", "Hasnat", "Sazzad", "Asifur", "Ibrahim", "Sujit"];

console.log("My best friend is: ", bestFriend(friends));