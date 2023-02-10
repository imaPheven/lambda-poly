# Create image based on the official Node image from dockerhub
FROM mcr.microsoft.com/dotnet/sdk:7.0-bullseye-slim-amd64

RUN apt update
RUN apt install sqlite3 -y

# Create app directory
WORKDIR /opt/MvcMovie

RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:~/.dotnet/tools"

COPY ./src/*.csproj .
RUN dotnet restore




# Copy source
ADD ./src /opt/MvcMovie

RUN dotnet ef database update

# Serve the app
ENTRYPOINT ["dotnet", "run", "--launch-profile", "publicdev"]