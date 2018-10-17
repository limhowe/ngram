/**
 * System requirement - node version >= 10.0
 * 
 * HOW TO RUN CODE
 * - NODE_ENV= node lim_howe.js
 */

/**
 * @param {boolean} enableCache determines whether to use cache
 */
const nGramGenerator = (enableCache = false) => {
  let words, cache;
  /**
   * generate next grams using previous grams and 1 grams(which is words)
   */
  const generateNextGram = () => {
    const cacheLength = cache.length;
    const nGrams = [];
    for (let i = 0; i < cacheLength -1; i++) {
      nGrams.push(`${words[i]} ${cache[i+1]}`);
    }
    cache = nGrams;
    return nGrams;
  };

  /**
   * generate n gram based on words
   */
  const generateNGram = gram => {
    const nGrams = [];
    const n = words.length - gram + 1;
    for (let i = 0; i < n; i++) {
      nGrams.push(words.slice(i, i + gram).join(' '));
    }
    return nGrams;
  };

  /** 
   * generate all grams for given text
   * */  

  return text => {
    if (!text) return [];
    words = text.split(' ').filter(item => item);
    if (enableCache) {
      cache = words;
    }

    const totalGram = words.length;
    let grams = [...words];
    for (let i = 2; i <= totalGram; i++) {
      let nGrams;
      if (enableCache) {
        nGrams = generateNextGram();
      } else {
        nGrams = generateNGram(i);
      }
      grams = grams.concat(nGrams);
    }

    return grams;
  };
};



export default nGramGenerator;
