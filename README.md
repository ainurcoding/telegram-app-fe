
# Telegram-App
<div align="center"><img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" height="150" width="150"/></div>

<hr/>

## General Information
### Build with
<ul>
  <li><a href='https://html5.org/'>HTML 5</a></li>
  <li><a href='https://www.w3.org/Style/CSS/Overview.en.html'>CSS</a></li>
  <li><a href='https://www.javascript.com/'>JavaScript</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS</a></li>
  <li><a href='https://reactjs.org/'>React JS (for frontend)</a></li>
  <li><a href='https://expressjs.com/'>Express JS (for backend)</a></li>
</ul>

### Structure Folder 
<p>Backend</p>
<ul>
  <li>public</li>
  <ul>
    <li>img <span><b><i>image public access</i></b></span></li>
  </ul>
  <li>src</li>
  <ul>
    <li>config ||<span><b><i>You can put database configuration in here</i></b></span></li>
    <li>controller ||<span><b><i>This folder for the logic componenent of API</i></b></span></li>
    <li>helper ||<span><b><i>This folder is used to help improve the logic of the controller, for example, response alignment.</i></b></span></li>
    <li>middleware ||<span><b><i>Middleware is used as a bridge during the routes API, for example, uploading images.</i></b></span></li>
    <li>model ||<span><b><i>Models are used to give commands to database manipulation, as in the crud example.</i></b></span></li>
    <li>router ||<span><b><i>The router is the place to set the endpoint for the API.</i></b></span></li>
  </ul>
  <li>index.js || <span><b><i>You can setup this application in this file, such as set port, set another library, and other.</i></b></span></li>
</ul>
<hr/>
<p>Frontend</p>
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
<hr/>

### Installation Guide
<p>Backend</p>
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
<hr />

### Screenshot Application
<details>
  <summary>
    Login Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-v1/blob/master/realtime-telegram-app/ss/login%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Register Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-v1/blob/master/realtime-telegram-app/ss/regist%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Chat-list Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-v1/blob/master/realtime-telegram-app/ss/chat-list%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Chat-room Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-v1/blob/master/realtime-telegram-app/ss/chat-room%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Profile-setting Page
  </summary>
<img src="https://github.com/ainurcoding/telegram-app-v1/blob/master/realtime-telegram-app/ss/setting%20users.png" alt="login Page" />
</details>
<hr />

### For More Information
<p>My Social media account:</p> <br />
<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667' alt='ig-icon'></img><span> : @ainurridwan_</span>
</div>

<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667' alt='gmail-icon'></img><span> : ainurridwank2@gmail.com</span>
</div>

<div align='center'>
:copyright: Ainur Ridwan, 2022
</div>


