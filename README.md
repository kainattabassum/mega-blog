# MEGA BLOG

## npm install

1. [@reduxjs/toolkit](https://redux-toolkit.js.org)
2. [react-redux](https://react-redux.js.org)
3. [react-router-dom](https://reactrouter.com/en/main)
4. [appwrite](https://appwrite.io)
5. [@tinymce/tinymce-react](https://www.npmjs.com/package/@tinymce/tinymce-react)
6. [react-html-parser](https://www.npmjs.com/package/react-html-parser)
7. [react-hook-form](https://react-hook-form.com)

## .env

> ___CRA (Create React App):___

1. store variable with UpperCase + REACT_APP initail **REACT_APP_VARIABLE_NAME**
2. can access with process.env.VARIABLE_NAME

> ___VITE:___

1. store variable with UpperCase + VITE initails **VITE_VARIABLE_NAME**
2. can access with import.meta.env.VARIABLE_NAME

```
VITE_APPWRITE_URL=""
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID="" 
```

## Appwrite Services
  
Create project on appwrite: [Link here step by step](https://drive.google.com/drive/folders/1i3zd4R9kPLB1zYA7m4yIBFAaMTS2Ls42?usp=drive_link)

> ___Authentication auth.js___

- createAccount()
- login()
- getCurrentUser()
- logout()

> ___Database > config.js___

- createPost()
- updatePost()
- deletePost()
- getPost()
- getPosts() > document listing
- uploadFile()
- deleteFile()
- getFilePreview()

## REDUX/TOOLKIT
