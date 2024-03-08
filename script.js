// Sample news data
const newsData = [
    {
        title: 'Breaking News: Exciting Event Happening!',
        date: 'Published on March 3, 2024',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla vel libero efficitur efficitur. Morbi commodo, nunc et euismod elementum, purus justo scelerisque orci, eu lacinia justo mi non odio.'
    },
    {
        title: 'New Technological Advancements Unveiled',
        date: 'Published on March 2, 2024',
        content: 'Integer nec arcu vel risus ullamcorper ullamcorper. Fusce et justo vel velit tincidunt tristique a id ligula. Proin vitae scelerisque quam.'
    }
    // Add more news articles as needed
];

// Function to generate news articles dynamically
function generateNewsArticles() {
    const newsContainer = document.getElementById('newsContainer');

    newsData.forEach(news => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('news-title');
        titleElement.textContent = news.title;

        const dateElement = document.createElement('p');
        dateElement.classList.add('news-date');
        dateElement.textContent = news.date;

        const contentElement = document.createElement('p');
        contentElement.classList.add('news-content');
        contentElement.textContent = news.content;

        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(dateElement);
        articleDiv.appendChild(contentElement);

        newsContainer.appendChild(articleDiv);
    });
}

// Call the function to generate news articles
generateNewsArticles();
