using back_end.Model;
using System.ComponentModel.DataAnnotations;

namespace back_end.DTO
{
    public class TransactionDTO
    {
        [Required] public int UserId { get; set; }
        [Required, StringLength(32)] public string Description { get; set; }
        [Required] public decimal Amount { get; set; }
        [StringLength(255)] public string Notes { get; set; }
        [Required] public bool IsPaid { get; set; }
        [Required] public TransactionType TransactionType { get; set; }
        public int? InComeCategoryId { get; set; }
        public int? OutComeCategoryId { get; set; }
    }
}
