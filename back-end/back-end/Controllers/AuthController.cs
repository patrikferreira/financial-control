using back_end.Context;
using back_end.Model;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private FinancialControlContext _context;
        public AuthController(FinancialControlContext ctx)
        {
            this._context = ctx;
        }
        [HttpPost]
        public ActionResult Login([FromForm] string login, [FromForm] string password)
        {
            User user = _context.Users.FirstOrDefault(x => x.UserName == login);
            if(password == user.Password)
            {
                Guid tk = Guid.NewGuid();
                user.token = tk;
                _context.SaveChanges();
                return Ok(user);
            }
            return BadRequest();

        }

        [HttpGet]
        public IActionResult VerifyToken()
        {
            string token = Request.Headers["Authorization"];
            User user = _context.Users.FirstOrDefault(x => x.token == Guid.Parse(token));
            if(user != null) 
            {
                return Ok(user);
            }
            return BadRequest();
        }
    }
}
