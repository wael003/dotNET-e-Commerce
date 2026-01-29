using System;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(SignInManager<User> signInManager) : BaseApiController
{
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDTOs registerDTOs)
    {
        var user = new User
        {
            UserName = registerDTOs.Email,
            Email = registerDTOs.Email
        };

        var result = await signInManager.UserManager.CreateAsync(user, registerDTOs.Password);

        if (!result.Succeeded)
        {
            foreach (var Error in result.Errors)
            {
                ModelState.AddModelError(Error.Code, Error.Description);
            }
            return ValidationProblem();
        }

        await signInManager.UserManager.AddToRoleAsync(user, "Member");

        return Ok();
    }

    [HttpGet("user-info")]
    public async Task<IActionResult> GetUserInfo()
    {
        if (User.Identity?.IsAuthenticated == false) return NoContent();

        var user = await signInManager.UserManager.GetUserAsync(User);

        if (user == null) return Unauthorized();

        var roles = await signInManager.UserManager.GetRolesAsync(user);

        return Ok(new
        {
            user.Email,
            user.UserName,
            Roles = roles
        });
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
        await signInManager.SignOutAsync();
        return NoContent();
    }
}



