export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "620px",
    margin: "10px",
  };
  return (
    <div style={styles}></div>
  );
}
