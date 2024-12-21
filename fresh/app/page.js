import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let name = "Un Jae Cho";
  let link = "https://google.com";
  return (
    <div>
      <h1 className="title">Dev Project</h1>
      <p style={{ color: "white", textAlign: "right", marginRight: "100px" }}>
        by {name}
      </p>

      <div className="para">
        <h3>Not using AI code(Chatgpt, Coplit...)</h3>
        To improve my coding levels, only permit googling, not AI advise or Code
      </div>
    </div>
  );
}
