const request = require('request-promise-native');

const foodInfo = function(input) {

  const typeID = 3;
  const foodArr = [];
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOODS_API_KEY}&query=`;
  return request(query + input)
    .then(body1 => {

      const response1 = JSON.parse(body1);
      const item = response1['results'][randomNumber];

      const id = item['id'];
      const recipePic = item['image'];

      foodArr.push(input, recipePic);

      const descriptionQuery = 'https://api.spoonacular.com/recipes/' + id.toString();
      const access = `/information?apiKey=${process.env.FOODS_API_KEY}`;
      return request(descriptionQuery + access);
    })
    .then(body2 => {
      const response2 = JSON.parse(body2);
      const detail = response2['summary'];
      const foodLink = response2['sourceUrl'];

      foodArr.push(foodLink, detail);
      foodArr.push(typeID);
      return foodArr;
    })
    .catch(err => {
      return (err);
    });
};

module.exports = foodInfo;
