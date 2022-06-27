using Angular_Shop_Example_API.Models;

namespace Angular_Shop_Example_API.Data
{
  public interface IAppRepository
  {

    void Add<T>(T entity) where T:class;
    void Delete<T>(T entity) where T:class;
    bool SaveAll<T>(T entity) where T:class;


    List<Product> GetProducts();
    List<Product> GetProductsWithCategoryId(int categoryId);
    List<Category> GetCategories();

  }
}
