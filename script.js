var consoleArray = [];

var serverlogconfig = {
  "debug": false,
  "error": true,
  "info": true,
  "warn": true,
  "log": true
};

var createLogger = function(o,m) {
  console.log("CREATING LOGGER FOR",o,m);
  return function() {
    o.apply(console, arguments);
    //sendit bro
    var result = {};
    result.method = m;
    var rc = Array.prototype.map.call(arguments, function(x) {
      return JSON.stringify(x);
    });
    result.message = rc.join(" ");
    consoleArray.push(result);
  };
}

for (method in serverlogconfig) {
  if (serverlogconfig[method]) {
    var oldMethod = console[method];
    console[method] = createLogger(oldMethod,method);
  }
}

var app = angular.module('demo', []);
app.controller('DemoCtrl', function($scope, $log) {
  $scope.console = consoleArray;
  var oldLog = console.log;
  try {
    for (method in serverlogconfig) {
      if (serverlogconfig[method]) {
        var oldMethod = console[method];
        console[method] = (function(oldMethod) {
          return function() {
            var argsBro = arguments;
            $scope.$apply(function() {
              oldMethod.apply(null, argsBro);
            });
          };
        })(oldMethod)
      }
    }
  } catch (e) {}
});

setTimeout(function() {
  console.error("You Can Console.whatever at whenever..and it will show up in html.")
})
