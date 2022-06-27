using Angular_Shop_Example_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Angular_Shop_Example_API.Data
{
  public class DataContext:DbContext
  {

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    

  }
}
