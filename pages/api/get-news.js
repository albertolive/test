import axios from 'axios';

const getNews = async (req, res) => {
  const { category } = req.query;
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=TU_API_KEY`);
    const articles = response.data.articles;
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
};

export default getNews;
