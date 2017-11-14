using System.Collections.Generic;
using System.Web.Http;
using AureliaAuthServer.Api.Models;

namespace AureliaAuthServer.Api.Controllers
{
    [Authorize]
    public class ProductController : ApiController
    {
        public List<Product> Get()
        {
            return new List<Product>
            {
                new Product{Id = 1, Name = "Dell Laptop"},
                new Product{Id = 2, Name = "LG Monitor"},
                new Product{Id = 3, Name = "Microsoft Keyboard and Mouse"}
            };
        }
    }
}
