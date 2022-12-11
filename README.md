# telegram-app
<div align="center"><img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" height="50" width="50"/></div>
<div align='center'><a href='https://github.com/ainurcoding/telegram-app-api'> >>Visit backend repository<< </a></div>
<hr />

### Description

<p>Telegram App is a real-time application that can carry out real-time chat conversations between its users. This application is made using NodeJS, JavaScript, CSS, and HTML technology. For use on the backend, I use Express JS (a library from NodeJS) and React JS for the front end (also a library from NodeJS).

</p>
<hr/>

## General Information

### Table of contents

<div id='table-of-content'>List</div>

- <a href='#build-with'>Build With</a>
- <a href='#structure-folder'>Structure Folder</a>
- <a href='#installation-guide'>Installation Guide</a>
- <a href='#commands'>Commands</a>
- <a href='#endpoint'>Endpoint Application</a>
- <a href='#ss-app'>Screenshot Application</a>
- <a href='#packages-included'>Packages Included</a>
- <a href='#demo-application'>Demo Application</a>
- <a href='#for-more-information'>For More Information</a>



### Build with 
<ul id='build-with'>
  <li><a href='https://html5.org/'>HTML 5: for markup language</a></li>
  <li><a href='https://www.w3.org/Style/CSS/Overview.en.html'>CSS: for styling website display</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS: for main language set dynamic website application</a></li>
  <li><a href='https://reactjs.org/'>React JS: for library from node to create powerfull website application</a></li>
  <li><a href='https://html5.org/'>Bootstrap: a library framework of CSS/HTML/JS </a></li>
  <li><a href='https://html5.org/'>Axios: dependency for fetching data from API</a></li>
  <li><a href='https://github.com/ainurcoding/mama_recipe_app/blob/master/frontend/package.json'>and se more for dependecy on package.json</a></li>
</ul>

<a href='#table-of-content'>Back to top</a>
<hr />

### Structure Folder 

<p id='structure-folder'>Frontend</p>
<ul>
  <li>public || <span><b><i>You can drop anything if that is accesseble for public</i></b></span></li>
  <li>src</li>
  <ul>
    <li>assets ||<span><b><i>You can store various needs for this website, such as images, styles, javascript, and others.</i></b></span></li>
    <li>components ||<span><b><i>This folder is for storing layouts, such as Navbar.</i></b></span></li>
    <li>pages ||<span><b><i>This folder is the main folder in the website display for this application.</i></b></span></li>
    <li>redux ||<span><b><i>Redux to set the global state, as well as the use of user data.</i></b></span></li>
    <li>router ||<span><b><i>The router is used to set the endpoint of this application.</i></b></span></li>
  </ul>
</ul>
<a href='#table-of-content'>Back to top</a>
<hr/>

### Installation Guide 

<p id='installation-guide'>Backend</p>
<ol type="1">
  <li>Your first step is to add the .env settings contained in the backend folder, with the examples contained in the .env-example.</li>
  <li>Continue with database creation.</li>
  <li>You can first import the postman documentation contained in this repo and pay attention to the fields in each POST request.
</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>When there is a description of the Server running on Port (with the port you have specified), the API is ready to use.</li>
</ol>
<hr />
<p>Frontend</p>
<ol type="1">
  <li>Make sure your backend is ready to use, and the backend server is running.</li>
  <li>Set .env in the frontend folder to be your backend URL for example, your backend server is: <b>'localhost:5000'</b>.</li>
  <li>Run the front-end server with the command npm run start on Shell / Git Bash.</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>If the website page has appeared, then the front end is ready to use.</li>
</ol>

<a href='#table-of-content'>Back to top</a>
<hr />

### Commands 
<p id='commands'>Running the Application</p>

`npm run start`

Build the Application

`npm run build`

Testing the Application

`npm run test`

Eject The Application

`npm run eject`

<a href='#table-of-content'>Back to top</a>
<hr />

### Endpoint of Application 

<p id='endpoint'>List</p>

`PATH /` - Access Login page\
`PATH /register` - Access Register page\
`PATH /forgot-password` - Access forgot password page\
`PATH /chat-list` - Access chat list page\
`PATH *` - Access 404 Not Found page

<a href='#table-of-content'>Back to top</a>
<hr />

### Screenshot Application 

<details id='ss-app' >
  <summary>
    Login Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-fe/blob/master/ss/login%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Register Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-fe/blob/master/ss/regist%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Chat-list Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-fe/blob/master/ss/chat-list%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Chat-room Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-fe/blob/master/ss/chat-room%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Profile-setting Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-fe/blob/master/ss/setting%20users.png" alt="login Page" />
</details>

<a href='#table-of-content'>Back to top</a>
<hr />

### Packages Included 

- <p id='packages-included'>NPM dependencies</p>


  ![](https://img.shields.io/badge/bcrypt-v5.0.1-blue)
  ![](https://img.shields.io/badge/body--parser-v1.19.2-blue)
  ![](https://img.shields.io/badge/cors-v2.8.5-blue)
  ![](https://img.shields.io/badge/dotenv-v16.0.0-blue)
  ![](https://img.shields.io/badge/express-v4.17.3-blue)
  ![](https://img.shields.io/badge/express--validator-v5.3.1-blue)
  ![](https://img.shields.io/badge/helmet-v5.0.2-blue)
  ![](https://img.shields.io/badge/pg-v8.7.3-blue)
  ![](https://img.shields.io/badge/multer-v1.4.4-blue)
  ![](https://img.shields.io/badge/xss--clean-v0.1.1-blue)
  ![](https://img.shields.io/badge/jsonwebtoken-v8.5.1-blue)
  ![](https://img.shields.io/badge/sweetalert-v2.1.2-blue)
  ![](https://img.shields.io/badge/reactstrap-v9.0.2-blue)
  ![](https://img.shields.io/badge/react-router-dom-v6.3.0-blue)
  ![](https://img.shields.io/badge/react-dom-v17.0.2-blue)
  ![](https://img.shields.io/badge/react-v17.0.2-blue)
  ![](https://img.shields.io/badge/jwt-decode-v3.1.2-blue)
  ![](https://img.shields.io/badge/axios-v0.26.1-blue)
  ![](https://img.shields.io/badge/bootstrap-v5.1.3-blue)
  
<a href='#table-of-contents'>Back to top</a>
<hr />

### Demo Application
<p id='demo-application'><a href='https://github.com/ainurcoding/telegram-app-api'>Visit backend repository</a></p>
<p>Visit this link for app demo <a href='https://telegram-app-henna.vercel.app/'>Telegram App</a></p>

<a href='#table-of-content'>Back to top</a>
<hr />

### For More Information 
<p id='for-more-information'>My Social media account:</p> <br />
<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667' alt='ig-icon'></img><span> : @ainurridwan_</span>
</div>

<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667' alt='gmail-icon'></img><span> : ainurridwank2@gmail.com</span>
</div>

<a href='#table-of-content'>Back to top</a>

<div align='center'>
:copyright: Ainur Ridwan, 2022
</div>
