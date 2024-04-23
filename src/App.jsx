import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    e.target.value === "" ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
    } else {
      alert(`Request sent from ${email}`);
      setEmail("");
    }
  };

  return (
    <main className={styles.container}>
      <img
        src="/desktop/image-host.jpg"
        alt="Podcast host illustration"
        className={styles["image-host"]}
      />
      <img src="/desktop/logo.svg" alt="Home" className={styles.logo} />
      <img
        src="/desktop/bg-pattern-dots.svg"
        alt="Background pattern"
        className={styles["image-bg"]}
      />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Publish your podcasts <span>everywhere.</span>
        </h1>
        <p className={styles.description}>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
        <form className={styles["request-access"]} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.email}
            placeholder="Email address"
            value={email}
            onChange={handleChange}
          />
          <button
            className={styles.cta}
            aria-label="Click to request access for pod"
          >
            Request Access
          </button>
          {error ? (
            <p className={styles.error}>Oops! Please enter your email</p>
          ) : null}
        </form>
        <div className={styles.icons}>
          <img
            src="/desktop/spotify.svg"
            alt="Spotify"
            className={styles.icon}
          />
          <img
            src="/desktop/apple-podcast.svg"
            alt="Apple podcast"
            className={styles.icon}
          />
          <img
            src="/desktop/google-podcasts.svg"
            alt="Google podcasts"
            className={styles.icon}
          />
          <img
            src="/desktop/pocket-casts.svg"
            alt="Pocket casts"
            className={styles.icon}
          />
        </div>
      </div>
    </main>
  );
};
