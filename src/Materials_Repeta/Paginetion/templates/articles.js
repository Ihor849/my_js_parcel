export default function articlesTpl(articles) {
  const { url, urlToImage, title, author, description } = articles;

  articles.map(article => {
    return `
    <li>
    	<a href= "${url}" target="_blank" rel="noopener noreferrer">
				<article>
          <img src="${url}" alt="${title}" width="480" />
          <h2>${title}</h2>
          <p>Posted by: ${author}</p>
          <p>${description}</p>
        </article>
      </a>
    </li>
    `;
  });
}
