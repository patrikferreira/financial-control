using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Model
{
    public class Transaction
    {
        [Key] public int Id { get; set; }
        [Required, ForeignKey("Users")] public int UserId { get; set; }
        [Required, StringLength(32)] public string Description { get; set; }
        [Required] public decimal Amount { get; set; }
        [StringLength(255)] public string Notes { get; set; }
        [Required, Column("created_at", TypeName = "DateTime")] public DateTime created_at { get; set; }
        [Required, Column("updated_at", TypeName = "DateTime")] public DateTime updated_at { get; set; }
        [Required] public bool IsPaid { get; set; }
        [Required] public TransactionType TransactionType { get; set; }
        public int? InComeCategoryId { get; set; }
        public int? OutComeCategoryId { get; set; }
    }
}
