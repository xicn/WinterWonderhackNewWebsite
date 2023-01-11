import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer className="mt-10 text-center text-sm text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
    >
      <p class="copyright">
        Made with 💓 by{" "}
        <a
          href="/humans.txt"
          target="_blank"
          rel="noopener"
          className="underline decoration-dotted hover:bg-indigo-500 active:bg-indigo-600"
        >
          humans
        </a>
        .
      </p>

      <p class="copyright">
        Questions? Email us at{" "}
        <a
          href="mailto:team@winterwonderhack.com"
          className="underline decoration-dotted hover:bg-indigo-500 active:bg-indigo-600"
        >
          team@winterwonderhack.com
        </a>
        !
      </p>
    </motion.footer>
  );
};

export default Footer;
