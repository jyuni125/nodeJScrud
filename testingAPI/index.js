// const request = new XMLHttpRequest();

// request.open("GET","http://localhost:3003/accounts/retrive?field=id,username,password");
// request.send();


// request.onload = () => {
//     if(request.status === 200){
//         console.log(JSON.parse(request.response));
//     }
//     else{
//         console.log(`error ${request.status}`);
//     }
// }




// fetch('http://localhost:3003/accounts/retrive?field=id,username,password')
// .then(fromresove=>{
//     console.log(fromresove);
// }).catch(fromreject=>{
//     console.log(fromreject);
// })



// console.log("working");
// const api_url = 
//       "http://127.0.0.1:3003/accounts/retrive?field=id,username,password";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
//     console.log(response);
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }


// getapi(api_url);









// headers.append('Access-Control-Allow-Origin', 'http://localhost:3003');
// headers.append('Access-Control-Allow-Credentials', 'true');

// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));


// var myData = async () => {
//     try {
//        const raw_response = await fetch("https://jsonplaceholder.typicode.com/users");
//        if (!raw_response.ok) { // check for the 404 errors
//            throw new Error(raw_response.status);
//        }
//        const json_data = await raw_response.json();
//           console.log(json_data);
//        }
//        catch (error) { // catch block for network errors
//             console.log(error); 
//         }
// }
// fetchUsers();











// const _reprojection_url = 
//        "http://127.0.0.1:3003/accounts/retrive?field=id,username,password";

// async function get_ajax_data(){
//     var _reprojected_lat_lng = await $.ajax({
//                              type: 'GET',
//                              dataType: 'jsonp',
//                              data: {},
//                              url: _reprojection_url,
//                              error: function (jqXHR, textStatus, errorThrown) {
//                                  console.log(jqXHR)
//                              },
//                              success: function (data) {
//                                  console.log(data);

//                                  // note: data is already json type, you
//                                  //       just specify dataType: jsonp
//                                  return data;
//                              }
//                          });


// } // function      




const url = 'http://127.0.0.1:3003/accounts/retrive?field=id,username,password'

 const data=()=>{
            
            const result = fetch(url).then((fromresolve)=>{
                return fromresolve.json();
            })
            return result;
        }

        const displaydetails=async()=>{
            const samp = await data();
            
            console.log("-----------------------FOREACH---------------------------")
            //for each
            Object.values(samp).forEach(val=>{
                console.log(val.id+"|"+val.username);
            })
            console.log("------------------------FORLOOP----------------------------")
            //for loop
            for(let i=0; i<Object.keys(samp).length;i++){
                console.log("PASSSWORD : "+samp[i].password+"||"+samp[i].username);
            }
            console.log("-----------------------FORIN-------------------------------")
            //for in
            for(let property in samp){
                console.log("Sample username: "+samp[property].username);
            }

            console.log("-----------------------FOROF-------------------------------")
            for(let property of samp){
                console.log(property);
            }
        }
       
        displaydetails();
