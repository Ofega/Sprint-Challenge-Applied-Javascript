const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articles = response.data.articles;

        articles.javascript.forEach(article => {
            cardsContainer.appendChild(Card(article));
        });
        articles.bootstrap.forEach(article => {
            cardsContainer.appendChild(Card(article));
        });
        articles.technology.forEach(article => {
            cardsContainer.appendChild(Card(article));
        });
        articles.jquery.forEach(article => {
            cardsContainer.appendChild(Card(article));
        });
        articles.node.forEach(article => {
            cardsContainer.appendChild(Card(article));
        });
    })

function Card(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const avatar = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    avatar.setAttribute('src', article.authorPhoto);

    headline.textContent = article.headline;
    authorName.textContent = article.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(avatar);

    return card;
}
