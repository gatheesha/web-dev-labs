# WAD Laboratory 02 – ict24896: Results

> Response time and size vary by network and run. Record the exact values displayed beside the response in Postman when preparing screenshots or the final submission.

## 1. Get All Posts
- **Method and URL:** `GET https://jsonplaceholder.typicode.com/posts`
- **Request headers/body:** No custom headers; no body.
- **Status:** `200 OK` — the request succeeded.
- **Response headers:** `Content-Type: application/json; charset=utf-8`; the response was compressed and cacheable.
- **Response body:** JSON array containing 100 post objects. Each includes `userId`, `id`, `title`, and `body`.
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because it returns the collection of posts.

## 2. Get One Post
- **Method and URL:** `GET https://jsonplaceholder.typicode.com/posts/1`
- **Request headers/body:** No custom headers; no body.
- **Status:** `200 OK` — the resource was retrieved successfully.
- **Response headers:** `Content-Type: application/json; charset=utf-8`.
- **Response body:** `{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit..."}`
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because it returns the single post whose ID is 1.

## 3. Create Post
- **Method and URL:** `POST https://jsonplaceholder.typicode.com/posts`
- **Request header:** `Content-Type: application/json`
- **Request body:** `{"title":"WAD Laboratory 02","body":"Creating a sample post using Postman","userId":1}`
- **Status:** `201 Created` — a new resource was accepted and represented as created.
- **Response headers:** `Content-Type: application/json; charset=utf-8`; `Location: https://jsonplaceholder.typicode.com/posts/101`; `Content-Length: 112`.
- **Response body:** `{"title":"WAD Laboratory 02","body":"Creating a sample post using Postman","userId":1,"id":101}`
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because the submitted fields are returned with a generated ID of 101.

## 4. Replace Post
- **Method and URL:** `PUT https://jsonplaceholder.typicode.com/posts/1`
- **Request header:** `Content-Type: application/json`
- **Request body:** `{"title":"Replaced WAD post","body":"This resource has been fully replaced","userId":1}`
- **Status:** `200 OK` — the replacement request succeeded.
- **Response headers:** `Content-Type: application/json; charset=utf-8`.
- **Response body:** `{"title":"Replaced WAD post","body":"This resource has been fully replaced","userId":1,"id":1}`
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because the response represents post 1 using the complete replacement data.

## 5. Delete Post
- **Method and URL:** `DELETE https://jsonplaceholder.typicode.com/posts/1`
- **Request headers/body:** No custom headers; no body.
- **Status:** `200 OK` — the delete operation was accepted.
- **Response headers:** `Content-Type: application/json; charset=utf-8`; `Content-Length: 2`.
- **Response body:** `{}`
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because the successful status and empty object indicate the simulated deletion completed.

## 6. Update Post (optional)
- **Method and URL:** `PATCH https://jsonplaceholder.typicode.com/posts/1`
- **Request header:** `Content-Type: application/json`
- **Request body:** `{"title":"Partially updated WAD post","body":"Only selected fields are modified","userId":1}`
- **Status:** `200 OK` — the partial update succeeded.
- **Response headers:** `Content-Type: application/json; charset=utf-8`.
- **Response body:** `{"userId":1,"id":1,"title":"Partially updated WAD post","body":"Only selected fields are modified"}`
- **Response time/size:** Copy the exact values shown by Postman for this run.
- **Conclusion:** Matches the purpose because the response contains the updated fields while retaining the resource ID.

## Important note
JSONPlaceholder simulates POST, PUT, PATCH, and DELETE operations. It returns realistic successful responses but does not permanently change its stored data.
