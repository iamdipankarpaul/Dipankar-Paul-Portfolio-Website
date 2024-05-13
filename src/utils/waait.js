export default function waait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
