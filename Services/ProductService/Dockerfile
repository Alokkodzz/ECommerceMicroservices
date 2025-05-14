# Use ASP.NET Core SDK image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . .

# Restore and install dependencies
RUN dotnet restore

# Publish
RUN dotnet publish -c Release -o /app/publish

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "ProductService.dll"]
