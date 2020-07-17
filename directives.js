//DIRECTIVES

weatherApp.directive('weatherReport', function(){

    return {
      restrict : 'E', //restricts only for HTML element
      templateUrl : 'directives/weatherReport.html',
      replace : true, //this replace the content of template url to the object 'weatherReport' completly
      scope :{
        weatherDay: "=",
        convertToStandard: "&", //use & if we passing a function
        convertToDate: "&",
        dateFormat: "@" //use @ if it is string
      }

    }

});