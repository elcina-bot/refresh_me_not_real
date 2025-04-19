const styles = [
  "style.css"
];

const randomStyle = styles[Math.floor(Math.random() * styles.length)];
document.getElementById("theme").href = randomStyle;