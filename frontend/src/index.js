document.addEventListener("DOMContentLoaded", function() {
    // const app = new App()
    const apiAdapter = new ApiAdapter()
    const allHexagrams = apiAdapter.getAllHexagrams()
    
    function getHexagram(hexnum){
        allHexagrams.then(result => {
            // return result[hexnum - 1]
            console.log(result[hexnum - 1])
        })
    }

    getHexagram(2)
    // console.log(allHexagrams)
    // console.log(Array.from(allHexagrams))
    // test that we can get data from the backend
        // const BACKEND_URL = 'http://localhost:3000';
        // fetch(`${BACKEND_URL}/api/v1/hexagrams/1`)
        // .then(response => response.json())
        // .then(parsedResponse => console.log(parsedResponse));
    
});
