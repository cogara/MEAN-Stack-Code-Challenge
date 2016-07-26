###### Description

# Grocery List

## Requirements

For this challenge you will be making a grocery list. Each item will contain two values: `name (String)` and `qty (Number)`. This application must be full stack (includes a `view`, `client-side`, `server-side`, and `database`. On your view, a user should be able to add items to the grocery list. As items are added to your list, they should be listed below under `Grocery Items`. In your `Grocery Items list `a user should be able to perform two actions: `Update` the values (change `name` or `qty`) as well as `Remove` items as they are retreived at the store. Both actions should update the values stored in the database as well as the view.

##### Decisions you will have to make:

> jQuery or AngularJS?
  - I chose angular for this project because I feel it gave more flexibility in retrieving information and showing it on the DOM compared to jQuery. I can access full objects from the HTML to be able to manipulate the database as needed with more control.

> MongoDB or PostgreSQL?
  - When choosing what database to use, I considered what relationships the object would have with eachother. Because each object was completely independent of each other, I didn't feel the strength of SQL tables and relational data was needed. MongoDB allowed me to store single objects and felt that it has an easier syntax of grabbing all the objects, or independent objects depending on the task.

##### Decisions you will NOT have to make:

> Node & Express

