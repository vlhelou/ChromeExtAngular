var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "geral",
                      policy =>
                      {
                          policy.AllowAnyOrigin();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("geral");

app.MapGet("/", () =>
{
    var segundos = DateTime.Now.Second;
    return new
    {
        valor = $"Segundos:{segundos}"
    };
});

app.Run();

