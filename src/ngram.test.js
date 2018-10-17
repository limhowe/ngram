import nGramGenerator from './ngram';

test('should return empty array', () => {
  const gen = nGramGenerator(true);
  expect(gen()).toEqual([]);
});

test('should return correct result', () => {
  const gen = nGramGenerator(true);
  const result = gen('show me the code');
  expect(result.length).toBe(10);
});

test('should return punctuate space', () => {
  const gen = nGramGenerator(true);
  const result = gen('show me  the code');
  expect(result.length).toBe(10);
  expect(gen()).toEqual([]);
});