﻿using back_end.Context;
using back_end.DTO;
using back_end.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private FinancialControlContext _context;
        public UserController(FinancialControlContext ctx)
        {
            this._context = ctx;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAll()
        {
            try
            {
                return Ok(this._context.Users.Include(x => x.Transactions));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{Id}")]
        public ActionResult<User> GetById(int Id)
        {
            try
            {
                User user = this._context.Users.FirstOrDefault(x => x.Id == Id);
                return Ok(user);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult<User> Add([FromForm] UserDTO user)
        {
            try
            {
                User newUser = new User()
                {
                    Name = user.Name,
                    UserName = user.UserName,
                    Email = user.Email,
                    Password = user.Password,
                    created_at = DateTime.Now,
                    updated_at = DateTime.Now,
                };

                this._context.Add(newUser);
                this._context.SaveChanges();
                return CreatedAtAction(nameof(GetById), new { Id = newUser.Id }, newUser);
            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpPut("{Id}")]
        public ActionResult<User> Edit(int Id, [FromForm] UserDTO user)
        {
            try
            {
                if (Id != null)
                {

                    User userToEdit = this._context.Users.FirstOrDefault(x => x.Id == Id);
                    userToEdit.Name = user.Name;
                    userToEdit.UserName = user.UserName;
                    userToEdit.Email = user.Email;
                    userToEdit.Password = user.Password;
                    userToEdit.updated_at = DateTime.Now;

                    this._context.SaveChanges();

                    return CreatedAtAction(nameof(GetById), new { Id = userToEdit.Id }, userToEdit);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch
            {
                return StatusCode(500, "");
            }
        }

        [HttpDelete("{Id}")]
        public ActionResult<User> Delete(int Id)
        {

            try
            {
                if (Id != null)
                {
                    User userToDelete = this._context.Users.FirstOrDefault(x => x.Id == Id);
                    this._context.Users.Remove(userToDelete);
                    this._context.SaveChanges();
                    return Ok();
                }
                return StatusCode(500);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

    }
}
