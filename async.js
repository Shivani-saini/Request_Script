// window.onload = function(){
//     var http = new XMLHttpRequest();
    
//     http.onreadystatechange = function(){
//         if(http.readyState == 4 && http.status ==200){
//             console.log(JSON.parse(http.response));

//         }
//     };

//     http.open("GET", "tweets.json", true);
    
//     $.get("tweets.json", function(ajax){
//         console.log(ajax);
//     });
//     console.log("test");
    
// };
fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok){
            console.log('Success')
        } else {
            console.log('Not Successful')
        }
    })    
    .then(data => console.log(data))  
    .catch(error => console.log('Error'))



