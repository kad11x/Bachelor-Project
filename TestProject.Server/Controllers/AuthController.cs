using Microsoft.AspNetCore.Mvc;

namespace TestProject.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // URL will be /api/auth
    public class AuthController : ControllerBase
    {
        [HttpPost("login")] // Full URL: POST /api/auth/login
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // Dummy login check (hardcoded)
            if (request.Username == "admin" && request.Password == "password123")
            {
                return Ok(new { message = "Login successful!" });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
    }

    // Model class for login data (sent from React)
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
