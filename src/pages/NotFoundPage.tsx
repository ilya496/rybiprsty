function NotFoundPage() {
  return (
    <div className="container not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">Oops! You've lost the beat...</h1>
        <p className="not-found__message">
          It seems this page has gone off track. But don't worry, the show goes
          on!
        </p>
        <a href="/" className="not-found__cta">
          Back to the stage
        </a>
      </div>
      <div className="not-found__animation">
        <img
          src="/images/vinyl.svg"
          alt="Spinning vinyl"
          className="not-found__vinyl"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
