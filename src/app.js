import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();
const ip = '0.0.0.0';

const bearerToken =
  'AAAAAAAAAAAAAAAAAAAAAIqCggEAAAAAMHeTVUBdvSWseqJF2pMy7gIkRTU%3DRC2igPi4uulWsf1vuX0pTV82fMevlvX3whRhJ1LsGu8vTXgsdf';

app.use(cors());

app.get('/api/tweets/:tweetId', async (req, res) => {
  const tweetId = req.params.tweetId;
  const apiUrl = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=created_at,author_id,public_metrics&expansions=author_id&user.fields=created_at,public_metrics`;
  // Your API logic here
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    const data = response.data.data;

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    return {
      status: 500,
      body: `Failed to fetch tweet data for tweet ID ${tweetId}`,
    };
  }
});

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, ip, () => {
  console.log(`Server listening on port ${port}`);
});
