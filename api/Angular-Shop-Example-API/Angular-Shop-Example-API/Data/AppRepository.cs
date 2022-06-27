using Angular_Shop_Example_API.Models;

namespace Angular_Shop_Example_API.Data
{
  public class AppRepository : IAppRepository
  {

    private DataContext context;

    public AppRepository(DataContext context)
    {
      this.context = context;
    }

    public void Add<T>(T entity) where T : class
    {
      context.Add(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
      context.Remove(entity);
    }

    public List<Category> GetCategories()
    {
       return context.Categories.ToList();
      
    }

    public List<Product> GetProducts()
    {
      return context.Products.ToList();
    }

    public List<Product> GetProductsWithCategoryId(int categoryId)
    {
      return context.Products.Where(product => product.categoryId == categoryId).ToList();
    }

    public bool SaveAll<T>(T entity) where T : class
    {
      return context.SaveChanges() > 0;
    }
  }
}
