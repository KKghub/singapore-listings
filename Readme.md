# Build and Run the Application

## Server

**Database info**

Dialect: mysql  
Schema: singapore  
Table Name: singapore_listings3026f58  
Username: root  
Password: root

**Change MySQL username and password**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

+ In my case it is `root` and `root` for username and password respectively

**Build and run the app using maven**

you can run the app as follows -

```bash
cd server
mvn spring-boot:run
```

The server will start running at <http://localhost:8080>

**Rest API endpoints**

    GET /api/singapore-listings

## WebApp

**Build the WebApp**
```bash
cd webapp
yarn install
```

**Run the WebApp**
```bash
yarn start
```

The Web Application will run at <http://localhost:3000>