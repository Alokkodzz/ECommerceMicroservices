using Microsoft.AspNetCore.Mvc;
using OrderService.Models;
using Npgsql;
using Dapper;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IConfiguration _config;

        public OrdersController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            using var connection = new NpgsqlConnection(_config.GetConnectionString("Postgres"));
            var orders = await connection.QueryAsync<Order>("SELECT * alok.FROM Orders");
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Order order)
        {
            using var connection = new NpgsqlConnection(_config.GetConnectionString("Postgres"));
            var sql = "INSERT INTO alok.Orders (ProductId, Quantity) VALUES (@ProductId, @Quantity)";
            await connection.ExecuteAsync(sql, order);
            return Ok(order);
        }
    }
}
