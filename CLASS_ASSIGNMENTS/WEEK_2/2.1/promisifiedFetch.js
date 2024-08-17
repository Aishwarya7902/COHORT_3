function promisifiedFetch(url)
{
  return new Promise((resolve,reject)=>{
    const user=fetch(url);
    user.then((response)=>{
      if(response.status===200){
        resolve(response.json());
      }
      else{
        reject(new Error("An error occured"));
      }
    })
  })
}

const gitHubAPI="https://api.github.com/users/Aishwarya7902";
const user=promisifiedFetch(gitHubAPI);
user.then((data)=>{
  console.log(data)
})
