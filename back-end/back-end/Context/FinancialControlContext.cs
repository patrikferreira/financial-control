using back_end.Model;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context
{
    public class FinancialControlContext : DbContext
    {
        public FinancialControlContext(DbContextOptions<FinancialControlContext> options) : base(options)
        {

        }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
