document.addEventListener("DOMContentLoaded", function() {
    // <!-- FB SDK LOAD START -->
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '819537608488389',
            cookie     : true,
            xfbml      : true,
            version    : 'v5.0'
          });
            
          FB.AppEvents.logPageView();   
          checkLoginState()  
          addScript(loginSub)
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
    // <!-- FB SDK LOAD END -->
    const user = new User() 
    const logoutScript = `    
      function logout() { 
        document.getElementById("logoutbtn").addEventListener('click', 
          FB.logout(function(response) {
            location.reload();
      })); 
      }  `
    const loginSub = `
        FB.Event.subscribe('auth.login', function(response) {
          location.reload(); 
        }); `

      function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
        // console.log('statusChangeCallback');
        console.log(response);                   // The current login status of the person.
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
          testAPI();  
        } else {                                 // Not logged into your webpage or we are unable to tell.
        //   document.getElementById('status').innerHTML = 'Please log ' +
        //     'into this webpage.';
        console.log('please login')

        }
      }
    
    
      function checkLoginState() {  // Called when a person is finished with the Login Button.
        FB.getLoginStatus(function(response) {   // See the onlogin handler
          statusChangeCallback(response);
        });
      }


      function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        // console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
        //   console.log('Successful login for: ' + response.name);
        // //   document.getElementById('status').innerHTML =
        // //     'Thanks for logging in, ' + response.name + '!';
        // console.log(`thanks for login ${response.name}`)
        user.name = response.name
        user.uid = response.id
        // logs user
        loginUser(user.name)
        });
      }

      function loginUser(username){
        document.getElementById("logbtn").innerHTML = `<a class="button is-small is-link is-inverted" id="logoutbtn" onclick="logout()">Logout</a>`
        flashMessage(`Welcome ${username}!`)
        addScript(logoutScript)
      }
      
      function flashMessage(msg) {
        document.getElementById("flashmsg").innerHTML = `<em> ${msg} </em>`
      }
      
      function addScript(js){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = js
        document.body.appendChild(script);
      }

});