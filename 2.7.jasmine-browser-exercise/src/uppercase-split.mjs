/**
 * Takes a string and splits it by uppercase letter
 * @param {string} label
 * @returns {string}
 */
export function uppercaseSplit(label) {
  const lowercased = label.toLowerCase(); // CpuCoreCount -> cpuCoreCount
  const arrayOfChars = Array.from(label); // CpuCoreCount -> ['C', 'p', 'u', 'C', 'o',....]
  const separated = arrayOfChars //                     space here 👇 and          👇 here
    .map((l, i) => (lowercased[i] != label[i] ? ' ' + l : l)); // [' C', 'p', 'u', ' C']
  return separated.join('').trim();
}
