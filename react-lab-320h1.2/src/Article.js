import React from 'react';

function Article({ date, title, imageSrc, text }) {
  return (
    <article className="top-article">
      <h2>{date}</h2>
      <h1>{title}</h1>
      <img src={imageSrc} alt={`Image for ${title}`} />
      <p>{text}</p>
      <div className="continue-wrapper">
        <a className="continue" href="....">Continues...</a>
      </div>
    </article>
  );
}

export default Article;
