# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:7.0-bullseye-slim-amd64
WORKDIR /opt/BookStoreApi

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# copy and publish app and libraries
# ADD . .

ENTRYPOINT ["dotnet", "watch", "--launch-profile", "publicdev"]