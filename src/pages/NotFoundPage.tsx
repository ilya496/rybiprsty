function NotFoundPage() {
  return (
    <div className="container not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">Oops! Work in progress...</h1>
        <p className="not-found__message">
          It seems this page isn't available right now. But don't worry, the
          show goes on!
        </p>
        <a href="/" className="not-found__cta">
          Back to the stage
        </a>
      </div>
      <img
        src="/images/vinyl.svg"
        alt="Spinning vinyl"
        className="not-found__vinyl"
      />
    </div>
  );
}

export default NotFoundPage;
