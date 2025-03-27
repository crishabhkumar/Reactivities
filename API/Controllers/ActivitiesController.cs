using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
      // return await context.Activities.ToListAsync();

      return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
      // var activity = await context.Activities.FindAsync(id);
      // return activity == null ? NotFound() : activity;

      return await Mediator.Send(new ActivityDetails.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
      // context.Activities.Add(activity);
      // await context.SaveChangesAsync();
      // return activity.Id;

      return await Mediator.Send(new CreateActivity.Command { activity = activity });
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateActivity(string id, Activity activity)
    {
      // var existingActivity = await context.Activities.FindAsync(id);
      // if (existingActivity == null) return NotFound();
      // existingActivity.Title = activity.Title;
      // existingActivity.Description = activity.Description;
      // existingActivity.Category = activity.Category;
      // existingActivity.Date = activity.Date;
      // existingActivity.City = activity.City;
      // existingActivity.Venue = activity.Venue;
      // existingActivity.Latitude = activity.Latitude;
      // existingActivity.Longitude = activity.Longitude;
      // await context.SaveChangesAsync();

      await Mediator.Send(new UpdateActivity.Command { Activity = activity });
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
      // var activity = await context.Activities.FindAsync(id);
      // if (activity == null) return NotFound();
      // context.Activities.Remove(activity);
      // await context.SaveChangesAsync();

      await Mediator.Send(new DeleteActivity.Command { Id = id });
      return NoContent();
    }
  }
}
