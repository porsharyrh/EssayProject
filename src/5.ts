// EssayProject
function generateEssay(topic: string): string {
  const sentences = [];
  for (let i = 0; i < 10; i++) {
    sentences.push(`Sentence ${i + 1}`);
  }
  return sentences.join('. ');
}
