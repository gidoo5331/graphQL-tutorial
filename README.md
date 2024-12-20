# GraphQL with docker
## Start the GraphQL Server
1. First build the app using `docker build -t my-app .`  
**NB:** Replace `my-app` with your preferred image name.

2. Run the container with `docker run -d -p 4000:4000 my-app` . \
 This will start the GraphQL server on port 4000.