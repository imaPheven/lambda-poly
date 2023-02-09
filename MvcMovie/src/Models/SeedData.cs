using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MvcMovie.Data;
using MvcMovie.Models;
using System;
using System.Linq;
using System.Text.Json;

namespace MvcMovie.Models;

/// <summary>
/// Static class for initializing seed data
/// </summary>
public static class SeedData
{
    /// <summary>
    /// Initializes seed data with using service provider
    /// </summary>
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new MvcMovieContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<MvcMovieContext>>()))
        {
            // Look for any movies.
            if (context.Movie.Any())
            {
                return;   // DB has been seeded
            }

            var movies = LoadSeedData();

            context.Movie.AddRange(
                movies
            );
            context.SaveChanges();
        }
    }
    private static List<Movie> LoadSeedData() {
        string jsonString = System.IO.File.ReadAllText(@"./Data/movieSeed.json");
        List<Movie> movies = JsonSerializer.Deserialize<List<Movie>>(jsonString);
        return movies;
    }
    private static void WriteSeedData() {
        var poCmovies = new List<Movie>{
            new Movie
                {
                    Title = "When Harry Met Sally",
                    ReleaseDate = DateTime.Parse("1989-2-12"),
                    Genre = "Romantic Comedy",
                    Price = 7.99M,
                    Rating = "R"
                },
                new Movie
                {
                    Title = "Ghostbusters ",
                    ReleaseDate = DateTime.Parse("1984-3-13"),
                    Genre = "Comedy",
                    Price = 8.99M,
                    Rating = "PG"
                },
                new Movie
                {
                    Title = "Ghostbusters 2",
                    ReleaseDate = DateTime.Parse("1986-2-23"),
                    Genre = "Comedy",
                    Price = 9.99M,
                    Rating = "PG"
                },
                new Movie
                {
                    Title = "Rio Bravo",
                    ReleaseDate = DateTime.Parse("1959-4-15"),
                    Genre = "Western",
                    Price = 3.99M,
                    Rating = "PG"
                }};
        string pocString = JsonSerializer.Serialize(poCmovies);
        System.IO.File.WriteAllText(@"./Data/movieSeed.json", pocString);
    }
}