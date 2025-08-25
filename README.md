# Silverstripe/React POC
This is a proof of concept for an integration of React into Silverstripe.

## Running the project
Use the `dev` branch of the repo.

Add a `.env` file in the root as follows

```
# DB credentials
SS_DATABASE_CLASS="MySQLDatabase"
SS_DATABASE_SERVER="db"
SS_DATABASE_USERNAME="root"
SS_DATABASE_PASSWORD="root"
SS_DATABASE_NAME="products_app_db"

SS_ENVIRONMENT_TYPE="dev"
SS_DEFAULT_ADMIN_USERNAME="admin"
SS_DEFAULT_ADMIN_PASSWORD="password"
```

Run `docker compose up -d` 

Run `yarn build`

Go to `localhost:8000/dev/build` in the browser (Email: admin, Password: password)


