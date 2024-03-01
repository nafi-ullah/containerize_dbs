# Hackathon 2024

- Change the isOffline variable in db/connect.js to run in offline.
- If port 5000 is busy, then change this 5000 to 8080 in compose.yaml file

## Code Example

Store your environment variables in a `.env` file. [example](./.env)

Add a simple dockerfile to build an image from your solution. Make sure to mention the environment variables you are using in the dockerfile with proper values. [example](./Dockerfile)

Add a compose.yaml file to add all local dependencies of your solution. [example](/compose.yaml)

Optionally, add a `.dockerignore` file to tell docker which files or folders you do not want to copy. [example](./.dockerignore)

**DO NOT** explicitly declare custom network in your docker compose file.

## Judge Instruction

### If a compose file exists:

Judge engine will run `docker compose up -d --build` if a compose file is found.

**RECOMMENDED**: It is highly recommended that you add a compose file as it reduces chances of making a mistake.

1. You can check logs in your docker compose using `docker compose logs -f`.

2. You can start your services by simply running

   ```sh
   docker compose up -d --build
   ```

3. You can shut down your services by running
   ```sh
   docker compose down
   ```

### Otherwise:

Judge will build the solution and run a standalone container

```sh
docker build --tag=sol:latest .
docker run -dit -p 5000:5000 --rm --name=sol sol:latest
```

**NOTE**: We will use port 5000. Make sure you are exposing correct port in your dockerfile.
