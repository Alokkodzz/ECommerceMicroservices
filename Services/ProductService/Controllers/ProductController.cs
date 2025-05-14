using Microsoft.AspNetCore.Mvc;
using ProductService.Models;
using Npgsql;
using Dapper;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IConfiguration _config;

        public ProductController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            using var connection = new NpgsqlConnection(_config.GetConnectionString("Postgres"));
            var products = await connection.QueryAsync<Product>("SELECT * FROM Products");
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Product product)
        {
            using var connection = new NpgsqlConnection(_config.GetConnectionString("Postgres"));
            var sql = "INSERT INTO alok.Products (Name, Price, ImageUrl) VALUES (@Name, @Price, @ImageUrl)";
            await connection.ExecuteAsync(sql, product);
            return Ok(product);
        }
    }
}
