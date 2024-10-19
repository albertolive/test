import Parser from 'rss-parser';

const parser = new Parser();

const getRSSFeed = async (req, res) => {
  const { feedUrl } = req.query;
  try {
    const feed = await parser.parseURL(feedUrl);
    res.status(200).json(feed.items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching RSS feed' });
  }
};

export default getRSSFeed;
