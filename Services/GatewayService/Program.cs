using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add Ocelot configuration
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Register Ocelot services
builder.Services.AddOcelot(builder.Configuration);

var app = builder.Build();

// Use CORS policy
app.UseCors("AllowAll");

// Use Ocelot middleware
await app.UseOcelot();

// Run the app
app.Run();
