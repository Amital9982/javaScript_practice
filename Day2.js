// let pattern = 'love'
// let regEx = new RegExp(pattern)


// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)
// console.log(regEx)

function cleanAndCount(text) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase();

    // Split the text into words
    const words = cleanedText.split(/\s+/);

    // Count the frequency of each word
    const wordCounts = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    // Convert the word counts to an array of [word, count] pairs
    const wordCountPairs = Object.entries(wordCounts);

    // Sort the array based on word frequency in descending order
    wordCountPairs.sort((a, b) => b[1] - a[1]);

    // Get the three most common words
    const mostCommonWords = wordCountPairs.slice(0, 3);

    return mostCommonWords;
}