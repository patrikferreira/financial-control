using System.ComponentModel.DataAnnotations;

namespace back_end.DTO
{
    public class UserDTO
    {
        [Required, StringLength(32)] public string Name { get; set; }
        [Required, StringLength(8)] public string UserName { get; set; }
        [Required, StringLength(8)] public string Password { get; set; }
        [Required, StringLength(120)] public string Email { get; set; }

    }
}
