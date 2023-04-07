/**
 * @param {import("@/service/banner/banner-utils").PairedBanner[]} paired
 */
export function sequenceFromPairedBanner(paired) {
  const sequences = paired
    .filter((item) => item.pc.yn)
    .reduce((acc, cur) => {
      acc.push({
        seq: cur.pc.sequence,
        pc: cur.pc.id,
        mobile: cur.mobile.id,
        sourceUrl: cur.mobile.sourceUrl,
      });
      return acc;
    }, []);

  // sort
  sequences.sort((lhs, rhs) => lhs.seq - rhs.seq);

  return reallocationSequences(sequences);
}

export function getIdBySequenceItem(item) {
  return item.pc.toString();
}

export function updateSequences(sequences, origin, destination) {
  const duplicated = copySequences(sequences);

  // delete
  const [selectedItem] = duplicated.splice(origin, 1);
  // append
  duplicated.splice(destination, 0, selectedItem);
  // allocation sequence
  reallocationSequences(duplicated);

  return duplicated;
}

export function reallocationSequences(sequences) {
  sequences.forEach((item, seq) => (item.seq = seq + 1));
  return sequences;
}

export function copySequences(originSequences) {
  return originSequences.reduce((acc, cur) => {
    acc.push({ ...cur });
    return acc;
  }, []);
}
