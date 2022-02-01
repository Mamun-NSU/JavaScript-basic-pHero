
const names = ["Mamun", "Pias", "Asif", "Sohan", "Anik", "Sony", "Pias", "Mamun", "Antu", "Sazzad", "Pias", "Misuk", "Mamun", "Anik", "Sazzad", "Asif", "Misuk"];

function removeDuplicate(names) {
    const unique = [];

    // for (var i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }

    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
console.log(removeDuplicate(names));
