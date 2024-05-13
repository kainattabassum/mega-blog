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

> **_CRA (Create React App):_**

1. store variable with UpperCase + REACT_APP initail **REACT_APP_VARIABLE_NAME**
2. can access with process.env.VARIABLE_NAME

> **_VITE:_**

1. store variable with UpperCase + VITE initails **VITE_VARIABLE_NAME**
2. can access with import.meta.env.VARIABLE_NAME

## Appwrite Services

Create project on appwrite: [Link here step by step](https://drive.google.com/drive/folders/1i3zd4R9kPLB1zYA7m4yIBFAaMTS2Ls42?usp=drive_link)

```
VITE_APPWRITE_URL="appwrite-url"
VITE_APPWRITE_PROJECT_ID="image-3"
VITE_APPWRITE_DATABASE_ID="image-6"
VITE_APPWRITE_COLLECTION_ID="image-7"
VITE_APPWRITE_BUCKET_ID="image-9"
```

> **_Authentication appwrite/auth.js_**

- createAccount()
- login()
- getCurrentUser()
- logout()

[Account API - Document Link](https://appwrite.io/docs/references/cloud/client-web/account)

> **_Database & Storage > appwrite/config.js_**

- createPost()
- updatePost()
- deletePost()
- getPost()
- getPosts() > document listing
- uploadFile()
- deleteFile()
- getFilePreview()

[Database API](https://appwrite.io/docs/references/cloud/client-web/databases) - 
[Storage API](https://appwrite.io/docs/references/cloud/client-web/storage)

## REDUX/TOOLKIT > **_store/store.js_** & **_store/authSlice.js_**

### store.js 

```javascript
    import { configureStore } from "@reduxjs/toolkit";

        const store = configureStore({
            reducer: {
                //TODO: add more slices here for auth/post etc.
            },
        });

    export default store
```

### authSlice.js
```javascript
import { createSlice } from "@reduxjs/toolkit"

const initialState = {}
const authSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        login: (state, action) => {}
        logout: (state, action) => {}
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
```
