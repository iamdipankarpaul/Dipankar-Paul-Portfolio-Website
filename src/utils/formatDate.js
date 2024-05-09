export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// const formattedDate = formatDate("2024-05-10");
// // Output: "May, 2024" for "2024-05-10"
// console.log(formattedDate.split(" ").join(", "));
