exports.lambdaHandler = async (event, context) => {
  var response;

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify('ToDo: Add some load data'),
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
