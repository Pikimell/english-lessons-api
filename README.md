# English Learning Telegram Bot

This repository contains the backend serverless application for an English learning Telegram bot. The bot allows students to schedule lessons, take tests, register for consultations, join loyalty programs, and more. The project is built using AWS Lambda (serverless) and MongoDB with Mongoose for data storage.

## Features

- **CRUD Operations** for Appointments, Questions, Schedules, Students, Tests, and Webinars.
- **User Functionalities**:

  - Take a level test
  - Schedule consultations and interviews
  - Choose lesson packages (individual, pair, or group sessions)
  - Access free trial lessons
  - View schedule and receive reminders
  - Participate in loyalty programs
  - Access learning resources via Telegram
  - Receive information on webinars, marathons, and programs

- **Administrator Functionalities**:
  - Manage user records
  - Schedule lessons and send reminders
  - View and update lesson packages and sessions
  - Broadcast messages and manage loyalty points

## Project Structure

```
src/
├── controllers/         # Contains controllers handling CRUD logic for each resource
├── db/                  # Mongoose model definitions for MongoDB
├── handlers/            # AWS Lambda handlers for each function
├── helpers/             # Utility functions
└── services/            # Service layer for CRUD operations on each model
```

## Setup and Installation

### Prerequisites

- Node.js v14+
- MongoDB
- AWS CLI and AWS account
- Serverless Framework

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/english-learning-bot.git
   cd english-learning-bot
   ```

1. **Install dependencies:**

   ```bash
   npm install
   ```

1. **Create ENV file:** Create Env file.
1. **Configure ENV file:** Update Env file variables.

1. **Deploy using Serverless:**
   Ensure you are authenticated with AWS and then run:
   ```bash
   serverless deploy
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
TG_TOKEN=<Your TG_TOKEN String>
MONGODB_USER=<Your MONGODB_USER String>
MONGODB_PASSWORD=<Your MONGODB_PASSWORD String>
MONGODB_URL=<Your MONGODB_URL String>
MONGODB_DB=<Your MONGODB_DB String>
```

## Usage

Once deployed, the bot's API will be accessible via the endpoints defined in `serverless.yml`. Each function corresponds to specific bot actions, and you can test them using tools like Postman or by connecting the bot to Telegram.

### Example API Endpoints

- **Create Appointment**: `POST /appointment`
- **Get Appointment**: `GET /appointment/{id}`
- **Get All Appointments**: `GET /appointment`
- **Update Appointment**: `PUT /appointment/{id}`
- **Delete Appointment**: `DELETE /appointment/{id}`
- (Similar CRUD endpoints exist for `question`, `schedule`, `student`, `test`, and `webinar` resources.)

## Development

- **Add Handlers**: Handlers for each function are in `src/handlers/`, wrapping each controller.
- **Controllers**: CRUD logic for each resource is located in `src/controllers/`.
- **Database Models**: All database models are defined in `src/db/models/`.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact [volodkaposhta@gmail.com](volodkaposhta@gmail.com).

```

### Explanation

- **Features**: Provides a high-level overview of the bot's functionality.
- **Project Structure**: Describes the folder organization and purpose of each directory.
- **Setup and Installation**: Step-by-step guide for cloning, installing dependencies, and configuring the project.
- **Environment Variables**: Specifies essential environment variables.
- **Usage**: Lists basic usage and endpoints for interacting with the bot.
- **Development**: Notes on adding new features or modifying the project.
- **Testing**: Command for running tests.
- **Contributing**: Encourages collaboration.
- **License and Contact**: Standard sections for open-source projects.
```
