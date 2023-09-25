using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Model
{
    public class User
    {
        [Key] public int Id { get; set; }
        [Required, StringLength(32)] public string Name { get; set; }
        [Required, Column("Email")] public string Email { get; set; }
        [Required, StringLength(8)] public string UserName { get; set; }
        [Required, StringLength(8)] public string Password { get; set; }
        [Required, Column("created_at", TypeName = "DateTime")] public DateTime created_at { get; set; }
        [Required, Column("updated_at", TypeName = "DateTime")] public DateTime updated_at { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }

    }
}
