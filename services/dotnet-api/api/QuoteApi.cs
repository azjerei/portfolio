namespace DotNetApi
{
  using System.Text.Json.Serialization;
  using Newtonsoft.Json;

  public static class QuoteApi
  {
    public static void Setup(WebApplication application)
    {
      application.MapGet("/quote", () =>
      {
        return new Quote(quotes.ElementAt(random.Next(0, quotes.Count)));
      })
      .WithName("GetQuote")
      .WithOpenApi();
    }

    private static readonly IList<string> quotes = JsonConvert.DeserializeObject<IList<string>>(File.ReadAllText("assets/quotes.json")) ?? Enumerable.Empty<string>().ToList();
    private static readonly Random random = new();
  }
}