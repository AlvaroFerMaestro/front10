const url = "http://localhost:3000/api/v1" /* "https://proyect10back.vercel.app/api/v1" */;  

export const API =  async ({ endpoint, method = "GET", body, isJSON = true }) =>
{
    const headers = {};

    isJSON ? headers["Content-Type"] = "application/json" : null;


  const res =  await  fetch (url + endpoint, {
    body: isJSON ? JSON.stringify(body) : body,
    method,
    headers
  });

  console.log(url + endpoint);
  
  const response = await res.json();
  return response;
};

 