using Angular_Shop_Example_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Angular_Shop_Example_API.Controllers
{

  [ApiController]
  [Route("categories")]
  public class CategoriesController : Controller
  {

    private IAppRepository appRepository;

    public CategoriesController(IAppRepository appRepository)
    {
      this.appRepository = appRepository;
    }

    [HttpGet]
    public ActionResult GetCategories()
    {
      var categories = appRepository.GetCategories();
      return Ok(categories);
    }


    

    public IActionResult Index()
    {
      return View();
    }
  }
}
