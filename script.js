function firstWord(str) {
    // Trim leading whitespace to ignore spaces before the first word
    str = str.trim();
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If there is no space, return the whole string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, spaceIndex);
}

// Test cases
console.log(firstWord('see and stop')); // 'see'
console.log(firstWord(' Hello World!')); // 'Hello'
console.log(firstWord('12345')); // '12345'
console.log(firstWord('')); // ''
console.log(firstWord('   leading spaces test')); // 'leading'
console.log(firstWord('singleWord')); // 'singleWord'