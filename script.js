var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
	  document.getElementById("myBtn").click();
  }
});

// I could not figure out the correct way to submit an answer to question 2 in Level 2. 

// Level 2 Question 1. What is the DOM? The DOM stands for «Document Object Model» and is a programmming interface for HTML and XML documents. The DOM is kind of the owner of the objects in a document(webpage). The DOM methods is the actions you can perform while the DOM properties is the values you can change. All HTML elements gets defined as objects inside the DOM and are available for manipulating and creating web pages. You dont have to do 

// question 2. List three methods to manipulate the DOM. Using Javascript we can manipulate the DOM by adding HTML elements to the DOM, update HTML elements inside the DOM and delete HTML elements from the DOM.

// question 3. What is an asynchronous call? Asynchronous calls doesnt wait for the API call to return from the serverr but continues the execution in your program and then the call returns from the server. Then a «callback» function is executed. The opposite of this would be an sunchronous call which means that the code execution WILL wait for the API call to return before continuing. The application will therefore wait for the respons is returned by the API. 

// question 4. Briefly explain what the sources tab in Chromes Developers Tools does. If you enter your sources tab in chromes dev tools, you can view files  and edit both CSS and javaScript iwith new code. You can create snippets of javaScript which you can run and save in your filesystem. 


// question 5. What is a JavaScript promise? A Promise is a proxy for a value that can be unknown when its created. It lets asynchronous methods return valies like synchronous methods. It returns a promise to supply the value. The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// question 6. What is an API? API stands for Application program interface and is a set of methods of communications between various  software components. It allows software to communicate with other software and serve data. 

// question 7. What is a JavaScript Event? Javascript events are events happening to an HTML elements that Javascript can react to.  Javascript lets you execute code whhen events are detected.

// question 8. What is event bubbling?  Bubbling is when an event happens on an element and runds the handlers on it first,and then it's parents and then up on other ancestors. It's called «bubbling» because when events «bubble» from the inner element up through parents like a bubble in the water. 