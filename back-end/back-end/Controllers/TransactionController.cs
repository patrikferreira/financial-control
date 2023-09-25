﻿using back_end.Context;
using back_end.DTO;
using back_end.Model;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("transaction")]
    public class TransactionController : ControllerBase
    {
        private FinancialControlContext _context;
        public TransactionController(FinancialControlContext ctx)
        {
            this._context = ctx;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Transaction>> GetAll()
        {
            try
            {
                return Ok(this._context.Transactions);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{Id}")]
        public ActionResult<Transaction> GetById(int Id)
        {
            try
            {
                Transaction transaction = this._context.Transactions.FirstOrDefault(x => x.Id == Id);
                return Ok(transaction);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult<Transaction> Add([FromForm] TransactionDTO transaction)
        {
            try
            {
                Transaction newTransaction = new Transaction()
                {
                    UserId = transaction.UserId,
                    Description = transaction.Description,
                    Amount = transaction.Amount,
                    Notes = transaction.Notes,
                    IsPaid = transaction.IsPaid,
                    TransactionType = transaction.TransactionType,
                    InComeCategoryId = transaction.InComeCategoryId,
                    OutComeCategoryId = transaction.OutComeCategoryId,
                    created_at = DateTime.Now,
                    updated_at = DateTime.Now,
                };

                this._context.Add(newTransaction);
                this._context.SaveChanges();
                return CreatedAtAction(nameof(GetById), new { Id = newTransaction.Id }, newTransaction);
            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpPut("{Id}")]
        public ActionResult<Transaction> Edit(int Id, [FromForm] TransactionDTO transaction)
        {
            try
            {
                if (Id != null)
                {
                    Transaction transactionToEdit = _context.Transactions.FirstOrDefault(x => x.Id == Id);
                    transactionToEdit.updated_at = DateTime.Now;
                    transactionToEdit.Description = transaction.Description;
                    transactionToEdit.Amount = transaction.Amount;
                    transactionToEdit.OutComeCategoryId = transaction.OutComeCategoryId;
                    transactionToEdit.InComeCategoryId = transaction.InComeCategoryId;
                    transactionToEdit.IsPaid = transaction.IsPaid;
                    transactionToEdit.TransactionType = transaction.TransactionType;

                    this._context.SaveChanges();

                    return CreatedAtAction(nameof(GetById), new { Id = transactionToEdit.Id }, transactionToEdit);
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
        public ActionResult<Transaction> Delete(int Id)
        {
            try
            {
                if (Id != null)
                {
                    Transaction transactionToDelete = this._context.Transactions.FirstOrDefault(x => x.Id == Id);
                    this._context.Transactions.Remove(transactionToDelete);
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