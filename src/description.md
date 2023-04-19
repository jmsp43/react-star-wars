
Use named exports to expose AJAX 
(asynchronous HTTP JavaScript request) functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

Obtain all of the starships from the API and render in <App> a card for each starship.


Hints


Hold the starship objects in state with the useState hook, don't forget to initialize to an empty array!

Use the useEffecthook to make the AJAX request once the app loads.

Once the starship data comes from the API, be sure to update state with the setter function.

Create and import a StarShipCard component into App.js.
.map()over each starship object in state to transform them into a <StarshipCard /> component

CORS issue? Try changing your /starshipsendpoint to /starships/👈 trust us on that one 😎.


Cards should contain the text of the starship's name.