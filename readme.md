# url-shortener

## Installation
Download project and open in a text editor
In terminal, make your way to the project file and enter the following:
```
  npm install express --save-dev
  ```
  ```
  npm install body-parser --save-dev
  ```
---

## Endpoints
**In a web browser:**
  http://localhost:3000/url - should give the result of "{"working":"Working"}"

**In postman:**
* Put the application to POST,
* Select Body,
* And then raw.
* Place:
  http://localhost:3000/api/v1/urls
* in the text bar to the left of the POST selection

* in the text section under raw place:
{
	"url": ""
}

* in the empty parentheses, place a url of your choice and press send
