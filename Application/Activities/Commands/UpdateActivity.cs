using System;
using System.Runtime.InteropServices;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class UpdateActivity
{
  public class Command : IRequest
  {
    public required Activity Activity { get; set; }
  }

  public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
  {
    public async Task Handle(Command request, CancellationToken cancellationToken)
    {
      var existingActivity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken) ?? throw new Exception("Activity not found");

      // existingActivity.Title = request.Activity.Title;

      mapper.Map(request.Activity, existingActivity);

      await context.SaveChangesAsync(cancellationToken);

    }
  }

}
