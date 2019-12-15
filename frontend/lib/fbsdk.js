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

    function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
        console.log('statusChangeCallback');
        console.log(response);                   // The current login status of the person.
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
          testAPI();  
        } else {                                 // Not logged into your webpage or we are unable to tell.
        //   document.getElementById('status').innerHTML = 'Please log ' +
        //     'into this webpage.';
        console.log('please login')
        }
      }
    
    
      function checkLoginState() {               // Called when a person is finished with the Login Button.
        FB.getLoginStatus(function(response) {   // See the onlogin handler
          statusChangeCallback(response);
          if (response.status === 'connected') {
            loginUser()
          }
        });
      }
    
      FB.Event.subscribe('auth.login', function(response) {
        // do something with response
        statusChangeCallback(response);
        loginUser()
      });

      //   Logout user.
      document.getElementById("logoutbtn").addEventListener('click', 
        FB.logout(function(response) {
            // Person is now logged out
            location.reload();
            flashMessage("Successfuly Logged Out!")
         }));


      function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
        //   document.getElementById('status').innerHTML =
        //     'Thanks for logging in, ' + response.name + '!';
        console.log(`thanks for login ${response.name}`)
        user.name = response.name
        });
      }

      function loginUser(){
        document.getElementById("logbtn").innerHTML = `<a class="button is-small is-link is-inverted" id="logoutbtn">Logout</a>`
        flashMessage("Successfuly Logged In!")
      }

      function flashMessage(msg) {
          document.getElementById("flashmsg").innerHTML = `<em> ${msg} </em>`
      }

});