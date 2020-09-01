export default function randomize(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - 0)) + 0;
}
