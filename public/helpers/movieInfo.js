const request = require('request-promise-native');

const movieInfo = function(input) {

  const typeID = 1;
  const movieArr = [];
  // const randomNumber = Math.floor(Math.random() * 10) + 1;

  query = `https://imdb-api.com/en/API/SearchMovie/${process.env.MOVIES_API_KEY}/`
  return request(query + input)
    .then(body1 => {
      const response1 = JSON.parse(body1);
      const item = response1['results'][0];

      const id = item['id'];
      const imageLink = item['image'];
      const fullLink = 'https://www.imdb.com/title/' + id

      movieArr.push(input, imageLink, fullLink);

      const descriptionQuery = `https://imdb-api.com/en/API/Title/${process.env.MOVIES_API_KEY}/`;
      return request(descriptionQuery + id);
    })
    .then(body2 => {

      const response2 = JSON.parse(body2);
      const plot = response2['plot'];

      movieArr.push(plot);
      movieArr.push(typeID);

      return movieArr;
    })
    .catch(err => {
      return (err);
    });
};

module.exports = movieInfo;
