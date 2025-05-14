using Microsoft.AspNetCore.Mvc;
using OrderService.Models;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private static List<Order> orders = new List<Order>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(orders);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Order order)
        {
            orders.Add(order);
            return Ok(order);
        }
    }
}
