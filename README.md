A very simplE Console Emulator.
Any console.logs in javascript are displayed in HTML


Demo
----
See Demo here: http://embed.plnkr.co/DhnB5E

Any `console.log()` calls in your Javascript, will get rendered to HTML

```console.log("--------------------------------------")
console.log("Declaring An Array with 3 elements: ")
var a = [100, 200, 300];
console.log("a:" + a);
console.log("a.length :" + a.length);
    
```
OutPut in HTML
```-------------------------------------- 
Declaring An Array with 3 elements: 
a:100,200,300 
a.length :3 
```


Needs only one script + AngularAnd HTML directive   
```
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js"></script>
<script src="script.js"></script>
```


  ```
  <div ng-controller="DemoCtrl">
    <pre ng-repeat="line in console">
        <span >{{line.message}}</span><br>
    </pre>
  </div>
  ```


