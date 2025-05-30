using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// ✅ Serve static files from "tiles" directory at "/tiles" path
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "tile")),
    RequestPath = "/tile"
});

// Optional: Add this if you're using controllers or API
//app.MapControllers();

app.Run();
