//write a function that accepts a single string and returns the
// letter that occurs the most

function letterOccurance(str) {
    let checker = str.split('')
    let bigLetters = {}
    let greatest = {
        letter: '',
        value: 0
    }

    checker.forEach(c => {
        //so here it actually checks if bigLetters has the property h which will return undefined which is also false but because of our ! (bang) this false becomes true
        if (!bigLetters[c]) {
            //here we actually are saying h: 0
            //in other words bigLetters[c] is h and we are assigning it the value of 0
            bigLetters[c] = 0
        }
        //then our else just makes sure to always increment that value at least once
        bigLetters[c]++
        if (bigLetters[c] > greatest.value) {
            greatest.value = bigLetters[c]
            greatest.letter = c
        }
    })
    return bigLetters
}

letterOccurance('hello')