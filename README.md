Study Planner:

- Backend: (HOS08)
1. npm install mongodb express cors dotenv
    The command above installs the following dependencies:
    1. The installation of MongoDB includes the MongoDB database driver, enabling your Node.js
    applications to establish connections with the database and manage data effectively.
    2. When you install "express," you add the Node.js web framework to your environment. Express is a
    rapid, versatile, streamlined web application framework tailored to Node.js. It equips developers with
    a toolkit and capabilities to craft web and API applications.
    3. The installation of "cors" introduces a Node.js package that facilitates cross-origin resource sharing,
    allowing resources from different origins to be shared securely.
    4. By installing "dotenv," you install a module designed to load environment variables from a '.env' file
    into the 'process.env' file. Separating configuration details from the code promotes cleaner and more
    organized development practices.
 

 - Frontend: 
1. npx create-react-app frontend
2. cd frontend
3. npm start

- for the backend i created a mongodb collection on the database. then added the connection URL to the config.env file. i created the server.mjs file and the routes in the tasks.mjs file. 
- The endpoints are GET tasks, GET one task, POST new task, DELETE task.

4. (HOS06) 
React Router using BrowserRouter
Reference: 
•	BrowserRouter | React Router API Reference
•	Routes | React Router API Reference
•	RouteObject | React Router API Reference
•	Link | React Router API Reference

React Router is a widely used library in the React ecosystem that facilitates efficient client-side routing for single-page applications (SPAs). It enables developers to create navigable user interfaces within a single HTML page, eliminating the need for full-page reloads. By defining routes and matching them to specific components, React Router dynamically renders the appropriate content based on Uniform Resource Locator (URL) changes, resulting in a seamless and fluid user experience. This library supports advanced features like nested routing, query parameter handling, and programmatic navigation, making it a powerful tool for managing client-side routing in React applications.

A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. “BrowserRouter” is typically used as the top-level router component in the application and serves as the entry point for defining “routes” and mapping them to specific components.

Before we begin, let us import the router module into our solution. Use the following commands in the “Terminal” to import the “react-router module” and start the development server.

>> npm install react-router-dom
>> npm start

- The starting page is the index.js file. This comes with create-react-app. This references the App.js file.
- I updated "index.css" file under the "src" folder with the styling code from hos06.
- Now we need to create components to accommodate routing in the application. I created three files named “Home.js”, “TaskList.js” & “Addtask.js” 
- Home.js has an introduction and description for the StudyPlanner.
- AddTask.js has a form with input boxes and a submit button. When the submit button is clicked, the handleSubmit function is called. This function makes the POST new task API call which creates the task in MongoDB. After that it redirects to the task list page, where you can see the new task.
- TaskList.js shows the list of tasks in a table format. It also contains the delete button per task.
- All the API calls happen using the JavaScript fetch function. The await keyword is used to wait for the fetch function to return.