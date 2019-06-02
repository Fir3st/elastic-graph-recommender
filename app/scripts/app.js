angular.module('recsApp', ['elasticsearch']);

//var esBaseURL = 'http://ec2-54-234-184-186.compute-1.amazonaws.com:9616';
// Variable should be updated by srv.sh startup script.
var esBaseURL = 'http://localhost:9200';
angular.module('recsApp')
.service('esClient', function (esFactory) {
  return esFactory({
    host: esBaseURL
  });
});
