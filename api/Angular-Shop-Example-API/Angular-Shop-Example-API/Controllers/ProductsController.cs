using Angular_Shop_Example_API.Data;
using Angular_Shop_Example_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angular_Shop_Example_API.Controllers
{

  [ApiController]
  [Route("products")]
  public class ProductsController : Controller
  {


    private IAppRepository appRepository;

    public ProductsController(IAppRepository appRepository)
    {
      this.appRepository = appRepository;
    }

   /* [HttpGet]
    public ActionResult GetProducts()
    {
      var products = appRepository.GetProducts();
      return Ok(products);
    }*/

    [HttpGet]
    public ActionResult<Product[]> GetProducts(int categoryId)
    {
      var products = appRepository.GetProductsWithCategoryId(categoryId);
      return Ok(products);
    }


    public IActionResult Index()
    {
      return View();
    }
  }
}
