# ECommerce Microservices Solution

This is a simple .NET 6 microservices-based eCommerce application.

## Services
- **ProductService**: Manages product data.
- **OrderService**: Handles orders.
- **GatewayService**: API Gateway using Ocelot.

## Running the Solution

```bash
docker-compose up --build


to run locally

dotnet restore ECommerceMicroservices.sln


dotnet run --project Services/ProductService/ProductService.csproj
dotnet run --project Services/OrderService/OrderService.csproj
dotnet run --project Services/GatewayService/GatewayService.csproj


ProductService will be accessible at http://localhost:5001/product.

OrderService will be accessible at http://localhost:5002/order.

API Gateway will be accessible at http://localhost:5000 and will route requests to the appropriate services.

You can use Swagger to test the endpoints:

ProductService Swagger: http://localhost:5001/swagger

OrderService Swagger: http://localhost:5002/swagger