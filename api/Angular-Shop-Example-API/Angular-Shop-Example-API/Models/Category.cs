using System.ComponentModel.DataAnnotations.Schema;

namespace Angular_Shop_Example_API.Models
{

  [Table("tbl_categories")]
  public class Category
  {

    public int id { get; set; }
    public string name { get; set; }
    public int? parent_category_id { get; set; }




  }
}
