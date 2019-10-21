const dataSample = require('./dataSample');

exports.lambdaHandler = async (event, context) => {
  var response;
  
  var filter = dataSample.filter(sample => sample.id === event.pathParameters.id)
  var data = filter && filter.length > 0 && filter[0];

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify(data || null),
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      }
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
