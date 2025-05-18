### Welcome To QuoteCast

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Munsif-Ali/quotecast_backend.git
   ```

2. Navigate to the project directory:
   ```bash
    cd quotecast_backend
   ```
3. Create `.env` file in the root directory and add the following environment variables:
   ```bash
   PORT=3000
   MONGODB_URI= YOUR_MONGODB_URI
   JWT_SECRET= CREATE_YOUR_OWN_SECRET
   JWT_REFRESH_SECRET= CREATE_YOUR_OWN_REFRESH_SECRET
   OPENWEATHER_API_KEY= YOUR_OPENWEATHER_API_KEY
   QUOTE_API_URL=https://dummyjson.com/quotes/random
   GEMINI_API_KEY= YOUR_GEMINI_API_KEY
   ```
4. Install the required dependencies:
   ```bash
    npm install
   ```
5. Start the server:
   ```bash
    npm start
   ```
6. Open your browser and navigate to `http://localhost:3000/api` to see the application in action.

## For Application

1. Clone the repository:

   ```bash
   git clone https://github.com/Munsif-Ali/quote_cast_app.git
   ```

2. Navigate to the project directory:
   ```bash
    cd quote_cast_app
   ```
3. Change the API Base URL in the `lib/core/constants/string_const.dart` file to point to your backend server:

   ```dart
   class StringConst {
    ..................
     static const String baseUrl = 'http://YOUR_BACKEND_SERVER_IP:3000/api';
    }
   ```

4. Install the required dependencies:
   ```bash
    flutter pub get
   ```
5. Run the application:
   ```bash
    flutter run
   ```

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user

Body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

- **POST** `/api/auth/login` - Login a user

  Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

- **POST** `/api/auth/logout` - Logout a user

  Body:

  ```json
  {
    "refreshToken": "string"
  }
  ```

- **POST** `/api/auth/refresh` - Refresh JWT token

  Body:

  ```json
  {
    "refreshToken": "string"
  }
  ```

### Weather

- **GET** `/api/weather` - Get current weather data

  Query Parameters:

  - `city`: The city name (e.g., `Islamabad`)

    Authentication: Bearer token required

### Quote

- **GET** `/api/quote` - Get a random quote

  Authentication: Bearer token required

### Affirmation

- **GET** `/api/affirmation` - Get a random affirmation

  Authentication: Bearer token required

  Body:

  ```json
  {
    "weather": {
      "city": "Islamabad",
      "country": "PK",
      "temperature": 30.47,
      "feels_like": 29.66,
      "humidity": 35,
      "wind_speed": 3,
      "description": "clear sky",
      "icon": "01n"
    },
    "quote": "string"
  }
  ```

### All Users

- **GET** `/api/get-all-users` - Get all users

  Authentication: Bearer token required
