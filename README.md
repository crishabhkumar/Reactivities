# Reactivities

Reactivities is a full-stack web application built with a .NET 9.0 backend and a React + TypeScript frontend. It is designed to manage activities, providing CRUD functionality for events and their details.

## Project Structure

The project is organized into the following directories:

- **API/**: Contains the backend API built with ASP.NET Core.
- **Application/**: Contains the application logic, including commands, queries, and core utilities.
- **Domain/**: Defines the domain models used throughout the application.
- **Persistence/**: Handles database interactions using Entity Framework Core.
- **client/**: Contains the frontend application built with React, TypeScript, and Vite.

## Features

### Backend

- ASP.NET Core API with controllers for managing activities.
- Entity Framework Core for database access and migrations.
- SQLite database for local development.
- MediatR for implementing CQRS (Command Query Responsibility Segregation).
- AutoMapper for object mapping.
- Seed data for initial database population.

### Frontend

- React + TypeScript for building the user interface.
- Material-UI (MUI) for styling and components.
- Axios for making HTTP requests to the backend API.
- Vite for fast development and build tooling.
- Dynamic category-based images for activities.

## Installation Instructions

### Prerequisites

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [SQLite](https://www.sqlite.org/) (optional, for database inspection)

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/reactivities.git
   cd reactivities
   ```

2. Navigate to the `API` directory:

   ```sh
   cd API
   ```

3. Restore dependencies:

   ```sh
   dotnet restore
   ```

4. Apply database migrations:

   ```sh
   dotnet ef database update
   ```

5. Run the API:
   ```sh
   dotnet run
   ```
   The API will be available at `https://localhost:5001`.

### Frontend Setup

1. Navigate to the `client` directory:

   ```sh
   cd client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

### Adding Category Images

1. Navigate to the `public` directory in your project.
2. Create the folder structure: `public/images/categoryImages`.
3. Add images corresponding to your activity categories. Ensure the filenames match the `activity.category` values in your application. For example:
   - `music.jpg` for a "music" category.
   - `sports.jpg` for a "sports" category.
   - `travel.jpg` for a "travel" category.

### Example Folder Structure

```
public/
└── images/
    └── categoryImages/
        ├── music.jpg
        ├── sports.jpg
        ├── travel.jpg
        ├── education.jpg
        └── food.jpg
```

## Seed Data

The backend includes a database seeder that populates the database with sample activities. This is automatically executed when the application starts if the database is empty.

## API Endpoints

The API provides the following endpoints for managing activities:

- `GET /api/activities`: Retrieve a list of all activities.
- `GET /api/activities/{id}`: Retrieve details of a specific activity.
- `POST /api/activities`: Create a new activity.
- `PUT /api/activities/{id}`: Update an existing activity.
- `DELETE /api/activities/{id}`: Delete an activity.

## Frontend Overview

The frontend displays a list of activities fetched from the API. Each activity includes details such as title, date, description, category, and location. The application uses Material-UI components for styling and layout. The `ActivityDetail` component dynamically loads images based on the `activity.category` value.

## Development Notes

### Backend

- The backend uses SQLite for local development. The connection string is configured in `API/appsettings.Development.json`.
- Migrations are located in the `Persistence/Migrations` directory.

### Frontend

- TypeScript types for activities are defined in `client/src/lib/types/index.d.ts`.
- The frontend communicates with the backend API at `https://localhost:5001`.
- The `ActivityDetail` component uses Material-UI's `CardMedia` to display category-based images dynamically.

## Technologies Used

### Backend

- ASP.NET Core 9.0
- Entity Framework Core
- MediatR
- AutoMapper
- SQLite

### Frontend

- React
- TypeScript
- Material-UI
- Axios
- Vite
