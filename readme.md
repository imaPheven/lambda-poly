# lambda-poly

Goal of lambda is to demonstrate orchestration of many back-end languages. Currently this uses a mono-repo structure.

## Apps
- [Book Store Api](./BookStoreApi/) ASP.Net controller based WebAPI with MongoDB for crud opperations
- [MVC Movies](./MvcMovie/) is a Razor web app with ASP.NET Core


## Running locally in docker-compose

### Sample data

Get the sample db for postgres
``` sh
# mkdir and cd
mkdir -p backend-postgres/entrypoint
pushd ./backend-postgres/entrypoint

# download
curl https://edu.postgrespro.com/demo-small-en.zip --output demo-small-en.zip
unzip demo-small-en.zip

# remove DROP DATABASE command (MAC OS)
sed 's/DROP DATABASE demo/-- DROP DATABASE demo/g' demo-small-en-20170815.sql > demo-small-en.sql

# Clean up
rm ./demo-small-en-20170815.sql
rm *.zip
popd
```

### Setup https
Follow instructionson setting up [Developing ASP.NET Core Applications with Docker over HTTPS](https://github.com/dotnet/dotnet-docker/blob/f9627bd9a7f0ebd4e5ab37fe0bc807b9dab086c2/samples/run-aspnetcore-https-development.md#developing-aspnet-core-applications-with-docker-over-https)

### Configure env vars
``` sh
# copy example.env and replace with desired values for U$SER and PA$$
# sed (mac os) replace with admin:admin
sed 's/PA\$\$/admin/g' example.env | sed 's/U$ER/admin/g' > dev.env
# Replace user:pass
cat api-bookstore/appsettings.Development.json | sed 's/user:passs/admin:admin/g' > appsettings.Developments.json 
mv appsettings.Developments.json api-bookstore
```
Update `BookStoreApi/appsettings.Development.json` with mongo db connection string

### Run

``` sh
docker-compose build
docker-compose up
backend-postgres admin-postgres
backend-mongo admin-mongo
```

Navigate to:
- MVC Movies: http://localhost:3010
- Book store api swagger: http://localhost:3011/swagger/index.html
- Manage Mongo (express): http://localhost:3020
- Manage Postgres (Adminer): http://localhost:3021/?pgsql=backend-postgres

More Docs:
- .Net
  - [Run applications in a .NET SDK container](https://github.com/dotnet/dotnet-docker/blob/main/samples/run-in-sdk-container.md)
  - [Selecting .net Tags](https://github.com/dotnet/dotnet-docker/blob/f9627bd9a7f0ebd4e5ab37fe0bc807b9dab086c2/samples/selecting-tags.md)
  - [.Net Samples](https://github.com/dotnet/dotnet-docker/tree/f9627bd9a7f0ebd4e5ab37fe0bc807b9dab086c2/samples/dotnetapp)
  - [Host and Deply](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-7.0)
  - [Hosting ASP.NET Core images with Docker Compose over HTTPS](https://learn.microsoft.com/en-us/aspnet/core/security/docker-compose-https?view=aspnetcore-7.0)
  - [Deployment Models](https://learn.microsoft.com/en-us/dotnet/core/deploying/?view=vs-2022)