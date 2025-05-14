using Microsoft.AspNetCore.Mvc;
using ProductService.Models;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private static List<Product> products = new List<Product>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(products);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Product product)
        {
            products.Add(product);
            return Ok(product);
        }
    }
}
