const reverseString = (word) => {
    let reversedString = ''
    for (let i = word.length -1; i >= 0; i--) {
        reversedString += word[i]
    }
    console.log(reversedString)
}

const string = 'Daniel'
reverseString(string)