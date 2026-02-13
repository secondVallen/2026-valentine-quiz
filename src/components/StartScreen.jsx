export default function StartScreen({ onStart }) {
  return (
    <div className="container">
      <h1>Let's see how well you remember random things about us 👴🏻👵🏻</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
