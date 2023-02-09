# Create image based on the official Node image from dockerhub
FROM bitnami/dotnet-sdk:7.0.102-debian-11-r8

RUN apt update
RUN apt install sqlite3 -y

# Create app directory
WORKDIR /opt/MvcMovie

RUN dotnet tool install --global dotnet-ef

ENV PATH="$PATH:/app/.dotnet/tools"



# RUN cat << \EOF >> ~/.bash_profile \
# # Add .NET Core SDK tools
# export PATH="$PATH:/app/.dotnet/tools" \
# EOF


# Copy source
ADD ./src /opt/MvcMovie

RUN dotnet ef database update



# Install dependecies
RUN dotnet restore

ENV ASPNETCORE_ENVIRONMENT=Development
RUN dotnet dev-certs https -t -ep ${HOME}/.aspnet/https/MvcMovie.pfx -p $DEV_SECRET
RUN dotnet user-secrets -p MvcMovie.csproj set "Kestrel:Certificates:Development:Password" "$DEV_SECRET" --id $DEV_CERT_PASS
# Expose the port the app runs in
EXPOSE 5070

# Serve the app
CMD ["dotnet", "run"]