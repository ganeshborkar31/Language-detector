# Language Prediction Web App

## Overview

The Language Prediction Web App is a tool for predicting the language of a given text. Built using FastAPI for the backend and HTML, CSS, and JavaScript for the frontend, this application provides a user-friendly interface for language detection. It handles various inputs and displays appropriate messages for both prediction and errors.

## Features

- **Language Prediction**: Predict the language of a given text using an ML model.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Displays a user-friendly message when no text is entered.
- **Loading Indicator**: Shows a loading message while processing the prediction.


## Project Structure

The project is organized as follows:
```
Language-predictor/
├── app
│   ├── main.py
│   ├── model
│   │   ├── model.py
│   │   └── trained_pipeline-0.1.0.pkl
│   ├── requirements.txt
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── script.js
│   └── templates
│       └── index.html
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Python 3.7+**: Required for running the FastAPI application.
- **pip**: Python package installer.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ganeshborkar31/Language-predictor.git
   cd Language-predictor

2. **Create and Activate a Virtual Environment**

    ```bash
    python -m venv myvenv
    source myvenv/bin/activate  # On Windows, use `myvenv\Scripts\activate`

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt

4. **Ensure requirements.txt includes:**
    ```Copy code 
    fastapi
    uvicorn
    pydantic
    scikit-learn
    
    

5. **Run the FastAPI application:**

    ```bash
    cd app
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
       ```

     - On error (empty input):

       ```json
   
       {
       "error": "Please enter some text."
       }
       ```
## **Troubleshooting**

1. #### Error: TypeError: expected string or bytes-like object, got 'TextInput'
    - Solution: Ensure the input is a string and properly extracted in the FastAPI endpoint.
 
2. #### To ensure that your Python server remains running after you disconnect from an SSH session, you can use several methods. Given your command python -m uvicorn main:app --host 0.0.0.0 --port 8000, here are some effective ways to keep it running:
- Using nohup

  1. The nohup (no hang-up) command allows processes to continue running in the background even after you log out from the SSH session.

     - Run the Command with nohup:

       ```bash
       nohup python -m uvicorn main:app --host 0.0.0.0 --port 8000 > server.log 2>&1 &
       ````

   2. nohup: Prevents the process from being stopped when you log out.
       > server.log 2>&1: Redirects both stdout and stderr to server.log.
       &: Runs the command in the background.

      - Verify the Process:

          - You can check if the server is running by looking for the process:

          ```bash
          ps aux | grep uvicorn
          ```

   3. Stop the Process (if needed):

       - To stop the process, you’ll need to find its process ID (PID) and then kill it:

       ```bash
         kill <PID>

## **Contact**
- ganeshborkar107@gmail.com

### Summary of the `README.md` Sections

1. **Overview**: Brief introduction to what the project does.
2. **Project Structure**: Overview of the project directory and files.
3. **Getting Started**: Instructions to set up and run the project locally.
4. **Usage**: How to use the web application.
5. **API Endpoints**: Details of the API endpoint used by the frontend.
6. **Troubleshooting**: Common issues and their solutions.
7. **Contact**: Contact information for feedback or questions.

Feel free to adjust the content according to your project's specific details and requirements!
