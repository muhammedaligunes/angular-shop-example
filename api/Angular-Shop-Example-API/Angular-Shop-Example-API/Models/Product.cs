using System.ComponentModel.DataAnnotations.Schema;

namespace Angular_Shop_Example_API.Models
{

  [Table("tbl_products")]
  public class Product
  {
    public int id { get; set; }
    public string name { get; set; }
    public int price { get; set; }
    public string description { get; set; }
    public string imageUrl { get; set; }
    public int? categoryId { get; set; }

  }
}
