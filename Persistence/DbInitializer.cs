using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
  public static async Task SeedData(AppDbContext context)
  {
    if (context.Activities.Any()) return;

    var activities = new List<Activity>{
      new Activity
      {
      Title = "Morning Run",
      Date = DateTime.Now.AddMonths(-2),
      Description = "A 5km run in the park",
      Category = "Exercise",
      City = "New York",
      Venue = "Central Park",
      Latitude = 40.785091,
      Longitude = -73.968285
      },
      new Activity
      {
      Title = "Book Club Meeting",
      Date = DateTime.Now.AddMonths(-1),
      Description = "Discussing the latest novel",
      Category = "Social",
      City = "Los Angeles",
      Venue = "Library Hall",
      Latitude = 34.052235,
      Longitude = -118.243683
      },
      new Activity
      {
        Title = "Cooking Class",
        Date = DateTime.Now.AddMonths(-3),
        Description = "Learning to cook Italian dishes",
        Category = "Food",
        City = "Chicago",
        Venue = "Community Center",
        Latitude = 41.878113,
        Longitude = -87.629799
      },
      new Activity
      {
      Title = "Yoga Session",
        Date = DateTime.Now.AddMonths(-4),
        Description = "A relaxing yoga session",
        Category = "Exercise",
        City = "San Francisco",
        Venue = "Yoga Studio",
        Latitude = 37.774929,
        Longitude = -122.419418
      },
      new Activity
      {
        Title = "Tech Meetup",
        Date = DateTime.Now.AddMonths(-5),
        Description = "Networking with tech enthusiasts",
        Category = "Technology",
        City = "Seattle",
        Venue = "Tech Hub",
        Latitude = 47.606209,
        Longitude = -122.332069
      },
      new Activity
      {
        Title = "Art Exhibition",
        Date = DateTime.Now.AddMonths(-6),
        Description = "Showcasing local artists",
        Category = "Art",
        City = "Austin",
        Venue = "Art Gallery",
        Latitude = 30.267153,
        Longitude = -97.743057
      },
      new Activity
      {
        Title = "Charity Run",
        Date = DateTime.Now.AddMonths(-7),
        Description = "Running for a cause",
        Category = "Charity",
        City = "Boston",
        Venue = "City Square",
        Latitude = 42.360081,
        Longitude = -71.058884
      },
      new Activity
      {
        Title = "Music Concert",
        Date = DateTime.Now.AddMonths(-8),
        Description = "Live performance by a famous band",
        Category = "Music",
        City = "Nashville",
        Venue = "Concert Hall",
        Latitude = 36.162663,
        Longitude = -86.781601
      },
      new Activity
      {
        Title = "Photography Workshop",
        Date = DateTime.Now.AddMonths(-9),
        Description = "Learning photography basics",
        Category = "Education",
        City = "Denver",
        Venue = "Photography Studio",
        Latitude = 39.739236,
        Longitude = -104.990251
      },
      new Activity
      {
        Title = "Startup Pitch Event",
        Date = DateTime.Now.AddMonths(-10),
        Description = "Pitching ideas to investors",
        Category = "Business",
        City = "Silicon Valley",
        Venue = "Conference Center",
        Latitude = 37.387474,
        Longitude = -122.057543
      }
    };

    await context.Activities.AddRangeAsync(activities);
    await context.SaveChangesAsync();

  }
}
