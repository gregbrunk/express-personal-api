Welcome to my personal api! Here's what you need to know!
    
  documentation_url: "https://github.com/gregbrunk/express_personal_api/documentation/gregbrunk_api_readme.txt",
  base_url: "https://serene-meadow-13371.herokuapp.com",
  endpoints:
     - {method: "GET", path: "/api", description: "Describes all available endpoints"},
     - {method: "GET", path: "/api/profile", description: "Greg's profile information"},
     - {method: "GET", path: "/api/lived_cities", description: "Information about all the cities where Greg has lived."},
     - {method: "GET", path: "/api/lived_cities/:id", description: "Information about a particular city where Greg has lived."},
     - {method: "POST", path: "/api/lived_cities", description: "Add a new city where Greg has lived."},
     - {method: "PUT", path: "/api/lived_cities/:id", description: "Update an attribute of a city where Greg has lived."},
     - {method: "DELETE", path: "/api/lived_cities/:id", description: "Remove a city where Greg has lived."}

