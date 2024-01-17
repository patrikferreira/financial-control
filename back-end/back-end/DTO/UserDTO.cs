using back_end.Model;
using System.ComponentModel.DataAnnotations;

namespace back_end.DTO
{
    public class UserDTO
    {
        [Required, StringLength(32)] public string Name { get; set; }
        [Required, StringLength(8)] public string UserName { get; set; }
        [Required, StringLength(8)] public string Password { get; set; }
        [Required, StringLength(120)] public string Email { get; set; }
        public Guid? token { get; set; } = null;

        public decimal? income { get; set; }
        public decimal? outcome { get; set; }
        public decimal? balance { get; set; }

        public UserDTO() { }
        public UserDTO(User user, decimal income, decimal outcome, decimal balance)
        {
            Name = user.Name;
            UserName = user.UserName;
            Password = user.Password;
            Email = user.Email;
            token = user.token;
            this.income = income;
            this.outcome = outcome;
            this.balance = balance;

        }
    }
}
