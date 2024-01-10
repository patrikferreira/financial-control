using back_end.Context;
using back_end.Service;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string conString = builder.Configuration.GetConnectionString("conection_db");
ServerVersion version = ServerVersion.AutoDetect(conString);
builder.Services.AddDbContext<FinancialControlContext>(opt => opt.UseMySql(conString, version));
builder.Services.AddScoped<AuthService, AuthService>();
var app = builder.Build();
app.UseCors(e => e.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
