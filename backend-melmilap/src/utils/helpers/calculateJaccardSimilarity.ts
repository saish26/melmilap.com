export const calculateJaccardSimilarity = (set1: any, set2: any) => {
  const intersection = set1.filter((item) => set2.includes(item));
  const union = [...new Set([...set1, ...set2])];

  const similarity = intersection.length / union.length;
  return similarity;
};
