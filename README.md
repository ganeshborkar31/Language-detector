# Language Prediction Web App

## Overview

The Language Prediction Web App is a tool for predicting the language of a given text. Built using FastAPI for the backend and HTML, CSS, and JavaScript for the frontend, this application provides a user-friendly interface for language detection. It handles various inputs and displays appropriate messages for both predictions and errors.

## Features

- **Language Prediction**: Predicts the language of a given text using an ML model.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Displays a user-friendly message when no text is entered.
- **Loading Indicator**: Shows a loading message while processing the prediction.

## Project Structure

The project is organized as follows:
```plaintext
- `app/` - Contains the FastAPI application code.
  - `main.py` - FastAPI application with endpoints and logic.
- `static/` - Contains static assets served by FastAPI.
  - `css/` - Stylesheets for the frontend.
    - `styles.css` - Main stylesheet for styling the web app.
  - `js/` - JavaScript files for frontend functionality.
    - `script.js` - Handles API requests and updates the UI.
- `templates/` - Contains HTML files served by FastAPI.
  - `index.html` - The main HTML file for the web app.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Python 3.7+**: Required for running the FastAPI application.
- **pip**: Python package installer.

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   cd <repository_directory>

2. **Create and Activate a Virtual Environment**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt

4. **Ensure requirements.txt includes:**
    ```Copy code 
    fastapi
    uvicorn
    

5. **Run the FastAPI application:**

    ```bash
    python -m uvicorn app.main:app --reload

The application will be available at http://127.0.0.1:8000.

## Usage

1. Open your browser and navigate to http://127.0.0.1:8000.
2. Enter the text you want to analyze in the text box.
3. Click the "Predict" button.
4. The predicted language or an error message will be displayed below the button.

## API Endpoints
### POST /predict/

- Request Body:

    ```json
    {
    "text": "input text"
    }

- Response:

    - On success:

    ```json

    {
    "language": "Predicted Language"
    }

  - On error (empty input):

    ```json

    {
    "error": "Please enter some text."
    }
## **Troubleshooting**

- Error: TypeError: expected string or bytes-like object, got 'TextInput'
    - Solution: Ensure the input is a string and properly extracted in the FastAPI endpoint.


### Summary of the `README.md` Sections

1. **Overview**: Brief introduction to what the project does.
2. **Project Structure**: Overview of the project directory and files.
3. **Getting Started**: Instructions to set up and run the project locally.
4. **Usage**: How to use the web application.
5. **API Endpoints**: Details of the API endpoint used by the frontend.
6. **Troubleshooting**: Common issues and their solutions.
7. **Contact**: Contact information for feedback or questions.

Feel free to adjust the content according to your project's specific details and requirements!
