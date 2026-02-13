export default function EndScreen({ score, total }) {
  let message = "";

  if (score > 7) {
    message = "Impressive as always 😎";
  } else if (score > 5) {
    message = "Not too shabby 😌";
  } else if (score > 2) {
    message = "Nice try 👏🏻";
  } else {
    message = "I still love you 🫂";
  }

  return (
    <div className="container">
      <h1>{message}</h1>
      <p>
        You scored {score} out of {total}!
      </p>
    </div>
  );
}
