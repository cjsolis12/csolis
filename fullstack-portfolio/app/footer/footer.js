import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/claudia-solis-48599422a/"
          target="_blank"
          className="text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/cjsolis12"
          target="_blank"
          className="text-2xl"
        >
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}
