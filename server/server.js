import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import serverConfig from './config';

const app = express();

// import posts from './routes/post.routes';

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')));
// app.use('/api', posts);

app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});
