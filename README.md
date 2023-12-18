This project used two different front-end models. The first was a multi-page application (MPA) developed in ExpressHTML. This type of application loads a separate item for each display view, which makes it very lightweight since the client only has to hold a single view in memory at a time. Since pages are always loaded directly from the server, this model also has the advantage of immediately reflecting updates. This means, however, that MPAs are much more reliant on a stable network connection, since every navigation requires the view to be reloaded. Also, since MPAs are typically coded in some variety of HTML, they are limited in terms of the functionality they can perform. While packages like Express enhance its capabilities somewhat, the practical functionality is largely limited to displaying information in a predetermined format, and passing simple callbacks to the server. 
The single page application, or SPA developed in AngularJS provides richer functionality by bundling all of the program's views into a single application that is downloaded and run by the client. The application communicates with the back-end server via API endpoints that function as virtual entry ports to the server's functionality. Because the application is provided as a whole, it is capable of performing much more complex functions than those provided by the HTML-based MPA. Processes like dynamically changing how a view is displayed, or passing data between views - tasks that are extremely challenging in an MPA - are intrinsically provided for in the SPA framework. The primary disadvantages of the SPA surround the fact that the application must be downloaded and run by the client. For example, while the running application typically requires less bandwidth than an MPA, it may take more time to load initially, and this can deter some users. Another common issue surrounding SPAs is that they may run for long periods on the client machine without reloading. Not only does this make them less responsive to server-side updates, it also makes them more suceptible to design flaws such as memory leaks. 
Both of these front-end applications are supported by the Mongo database, chosen because it provides a more flexible and lightweight framework than traditional SQL databases. While Mongo does struggle with performance at extremely high volumes, the nature of the Travlr application is such that it is unlikely to exceed Mongo's capabilities.
The application is coded using both JSON and JavaScript. Javascript is an object-oriented language that forms the backbone of most web applications. It provides a tried-and-true framework that supplies all of the functionality required to create both the web server, and the client facing application. JSON, which stands for JavaScript Object Notation, is a lightweight data format used to store and pass information within the application.
This application uses the API, or application programming interface model for communication between the client and the server. In this model, the client interacts with the server in the form of API requests that are directed to specific endpoints on the server. These endpoints can be tested by using a third party testing program to send requests to the server. For example, in our Travlr application, sending a GET request to api/trips returns a list of trips from the database. In the client application, these trips are displayed on a webpage, but a testing program (such as Postman) would simply display the results of the request, allowing developers to verify that the server is providing the correct response. The same technique can be used to verify the PUT and DELETE methods for managing trip data, as well as the POST methods used to register and login.

The creation of a full stack web application has provided me with the opportunity to learn such critical web development concepts as RESTful API structure, authentication, JavaScript programming, and database management. Since these concepts are the foundations of modern web development, I have no doubt that this knowledge will serve me well in my future career. While I cannot claim to have mastered any of these skills as yet, I am confident that, as I continue learning, I will be able to do so.
