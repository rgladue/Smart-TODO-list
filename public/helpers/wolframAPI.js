const request = require('request-promise-native');


const typeResponse = function(input) {

  query = 'https://www.wolframalpha.com/queryrecognizer/query.jsp?appid=DEMO&mode=Default&output=json&i=What is '
  return request(query + input)
    .then(body => {

      const response = JSON.parse(body);
      const type = response['query'][0]['domain'];
      const altTypeArr = response['query'][0]['subresults'];
      let altType = undefined;

      if (altTypeArr) {
        altType = altTypeArr[0]['domain'];
      }

      return [type, altType];
    })
    .catch(err => {
      return (err);
    });
};

module.exports = typeResponse;
