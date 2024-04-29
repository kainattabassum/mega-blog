# MEGA BLOG

### npm install

    - @reduxjs/toolkit
    - react-redux
    - react-router-dom
    - appwrite
    - @tinymce/tinymce-react
    - react-html-parser
    - react-hook-form

### .env

- **CRA (Create React App):**

  1. store variable with UpperCase + REACT_APP initail [**REACT_APP_VARIABLE_NAME**]
  2. can access with process.env.VARIABLE_NAME

- **VITE:**

  1. store variable with UpperCase + VITE initails [**VITE_VARIABLE_NAME**]
  2. can access with import.meta.env.VARIABLE_NAME

  ````javascript
  VITE_APPWRITE_URL=""
  VITE_APPWRITE_PROJECT_ID=""
  VITE_APPWRITE_DATABASE_ID=""
  VITE_APPWRITE_COLLECTION_ID=""
  VITE_APPWRITE_BUCKET_ID="" ```
  ````

## Appwrite Services

### 1. Authentication > auth.js
  - createAccount()
  - login()
  - getCurrentUser()
  - logout()
