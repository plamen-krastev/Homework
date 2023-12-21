function countWords(sentence) {
  const words = sentence.toLowerCase().match(/\w+/g); // Extract words
  const wordCount = {};

  if (words) {
    words.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  }

  return wordCount;
}

const sentence = "This is a sentence. This sentence has repeated words. Is this a test sentence?";
const wordOccurrences = countWords(sentence);

console.log(wordOccurrences);