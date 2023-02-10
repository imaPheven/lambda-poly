# lambda-poly

Goal of lambda is to demonstrate orchestration of many back-end languages. Currently this uses a mono-repo structure.

## Apps
- [Book Store Api](./BookStoreApi/) ASP.Net controller based WebAPI with MongoDB for crud opperations
- [MVC Movies](./MvcMovie/) is a Razor web app with ASP.NET Core


## Running locally in docker-compose

### Setup https
Follow instructionson setting up [Developing ASP.NET Core Applications with Docker over HTTPS](https://github.com/dotnet/dotnet-docker/blob/f9627bd9a7f0ebd4e5ab37fe0bc807b9dab086c2/samples/run-aspnetcore-https-development.md#developing-aspnet-core-applications-with-docker-over-https)

### Configure env vars
``` sh
# copy example.env and replace with desired values for U$SER and PA$$
cp example.env dev.env
```
Update `BookStoreApi/appsettings.Development.json` with mongo db connection string

### Run

``` sh
docker-compose build
docker-compose up
```

Navigate to:
- Book store api swagger: http://localhost:5088/swagger/index.html
- MVC Movies: http://localhost:7186
- Manage Mongo (express): http://localhost:8050