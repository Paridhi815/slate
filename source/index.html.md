---
title: Account and Transaction API Specification v3.1.6
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="account-and-transaction-api-specification">Account and Transaction API Specification v3.1.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Account and Transaction API Specification

Base URLs:

* <a href="/open-banking/v3.1/aisp">/open-banking/v3.1/aisp</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials

    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

- oAuth2 authentication. OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU

    - Flow: authorizationCode
    - Authorization URL = [https://authserver.example/authorization](https://authserver.example/authorization)
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

<h1 id="account-and-transaction-api-specification-account-access">Account Access</h1>

## Create Account Access Consents

<a id="opIdCreateAccountAccessConsents"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /open-banking/v3.1/aisp/account-access-consents \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
POST /open-banking/v3.1/aisp/account-access-consents HTTP/1.1

Content-Type: application/json; charset=utf-8
Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript
const inputBody = '{
  "Data": {
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {}
}';
const headers = {
  'Content-Type':'application/json; charset=utf-8',
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/account-access-consents',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json; charset=utf-8',
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.post '/open-banking/v3.1/aisp/account-access-consents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.post('/open-banking/v3.1/aisp/account-access-consents', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json; charset=utf-8',
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/open-banking/v3.1/aisp/account-access-consents', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/account-access-consents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json; charset=utf-8"},
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/open-banking/v3.1/aisp/account-access-consents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /account-access-consents`

> Body parameter

```json
{
  "Data": {
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {}
}
```

<h3 id="create-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBReadConsent1](#schemaobreadconsent1)|true|Default|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 201 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2019-08-24T14:15:22Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="create-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Account Access Consents Created|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

## Get Account Access Consents

<a id="opIdGetAccountAccessConsentsConsentId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/account-access-consents/{ConsentId} \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/account-access-consents/{ConsentId} HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/account-access-consents/{ConsentId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/account-access-consents/{ConsentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/account-access-consents/{ConsentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/account-access-consents/{ConsentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/account-access-consents/{ConsentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/account-access-consents/{ConsentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /account-access-consents/{ConsentId}`

<h3 id="get-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2019-08-24T14:15:22Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Account Access Consents Read|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

## Delete Account Access Consents

<a id="opIdDeleteAccountAccessConsentsConsentId"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /open-banking/v3.1/aisp/account-access-consents/{ConsentId} \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
DELETE /open-banking/v3.1/aisp/account-access-consents/{ConsentId} HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/account-access-consents/{ConsentId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.delete '/open-banking/v3.1/aisp/account-access-consents/{ConsentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.delete('/open-banking/v3.1/aisp/account-access-consents/{ConsentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/open-banking/v3.1/aisp/account-access-consents/{ConsentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/account-access-consents/{ConsentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/open-banking/v3.1/aisp/account-access-consents/{ConsentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /account-access-consents/{ConsentId}`

<h3 id="delete-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 400 Response

```json
{
  "Code": "string",
  "Id": "string",
  "Message": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="delete-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Account Access Consents Deleted|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-accounts">Accounts</h1>

## Get Accounts

<a id="opIdGetAccountsAccountId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/accounts/{AccountId} \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/accounts/{AccountId} HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/accounts/{AccountId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/accounts/{AccountId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/accounts/{AccountId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/accounts/{AccountId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/accounts/{AccountId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/accounts/{AccountId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /accounts/{AccountId}`

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "string",
        "Status": "Deleted",
        "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
        "Currency": "string",
        "AccountType": "Business",
        "AccountSubType": "ChargeCard",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "2019-08-24T14:15:22Z",
        "MaturityDate": "2019-08-24T14:15:22Z",
        "SwitchStatus": "string",
        "Account": [
          {
            "SchemeName": "string",
            "Identification": "string",
            "Name": "string",
            "SecondaryIdentification": "string"
          }
        ],
        "Servicer": {
          "SchemeName": "string",
          "Identification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Accounts Read|[OBReadAccount6](#schemaobreadaccount6)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-balances">Balances</h1>

## Get Balances

<a id="opIdGetBalances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/balances \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/balances HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/balances',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/balances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/balances', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/balances', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/balances");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/balances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /balances`

<h3 id="get-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "DateTime": "2019-08-24T14:15:22Z",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditLine": [
          {
            "Included": true,
            "Type": "Available",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Balances Read|[OBReadBalance1](#schemaobreadbalance1)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-beneficiaries">Beneficiaries</h1>

## Get Beneficiaries

<a id="opIdGetBeneficiaries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/beneficiaries \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/beneficiaries HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/beneficiaries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/beneficiaries',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/beneficiaries', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/beneficiaries', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/beneficiaries");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/beneficiaries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /beneficiaries`

<h3 id="get-beneficiaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryId": "string",
        "BeneficiaryType": "Trusted",
        "Reference": "string",
        "SupplementaryData": {},
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-beneficiaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Beneficiaries Read|[OBReadBeneficiary5](#schemaobreadbeneficiary5)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-direct-debits">Direct Debits</h1>

## Get Direct Debits

<a id="opIdGetDirectDebits"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/direct-debits \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/direct-debits HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/direct-debits',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/direct-debits',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/direct-debits', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/direct-debits', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/direct-debits");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/direct-debits", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /direct-debits`

<h3 id="get-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "string",
        "DirectDebitId": "string",
        "MandateIdentification": "string",
        "DirectDebitStatusCode": "Active",
        "Name": "string",
        "PreviousPaymentDateTime": "2019-08-24T14:15:22Z",
        "Frequency": "string",
        "PreviousPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-direct-debits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Direct Debits Read|[OBReadDirectDebit2](#schemaobreaddirectdebit2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-offers">Offers</h1>

## Get Offers

<a id="opIdGetOffers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/offers \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/offers HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/offers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/offers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/offers', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/offers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/offers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/offers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /offers`

<h3 id="get-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "string",
        "OfferId": "string",
        "OfferType": "BalanceTransfer",
        "Description": "string",
        "StartDateTime": "2019-08-24T14:15:22Z",
        "EndDateTime": "2019-08-24T14:15:22Z",
        "Rate": "string",
        "Value": 0,
        "Term": "string",
        "URL": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Fee": {
          "Amount": "string",
          "Currency": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Offers Read|[OBReadOffer1](#schemaobreadoffer1)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-parties">Parties</h1>

## Get Parties

<a id="opIdGetParty"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/party \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/party HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/party',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/party',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/party', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/party', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/party");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/party", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /party`

<h3 id="get-parties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "PartyId": "string",
      "PartyNumber": "string",
      "PartyType": "Delegate",
      "Name": "string",
      "FullLegalName": "string",
      "LegalStructure": "string",
      "BeneficialOwnership": true,
      "AccountRole": "string",
      "EmailAddress": "string",
      "Phone": "string",
      "Mobile": "string",
      "Relationships": {
        "Account": {
          "Related": "http://example.com",
          "Id": "string"
        }
      },
      "Address": [
        {
          "AddressType": "Business",
          "AddressLine": [
            "string"
          ],
          "StreetName": "string",
          "BuildingNumber": "string",
          "PostCode": "string",
          "TownName": "string",
          "CountrySubDivision": "string",
          "Country": "string"
        }
      ]
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-parties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Parties Read|[OBReadParty2](#schemaobreadparty2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-products">Products</h1>

## Get Products

<a id="opIdGetProducts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/products \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/products HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/products',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/products',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/products', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/products', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/products");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/products", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /products`

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "Product": [
      {
        "ProductName": "string",
        "ProductId": "string",
        "AccountId": "string",
        "SecondaryProductId": "string",
        "ProductType": "BusinessCurrentAccount",
        "MarketingStateId": "string",
        "OtherProductType": {
          "Name": "string",
          "Description": "string",
          "ProductDetails": {
            "Segment": [
              "GEAS"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            }
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "INBA",
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "FQAT",
                    "ApplicationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "AER": "string",
                    "BankInterestRateType": "INBB",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "OverdraftType": "OVCO",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "PACT",
                    "OverdraftInterestChargingCoverage": "INBA",
                    "BankGuaranteedIndicator": true,
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "LoanInterest": {
            "Notes": [
              "string"
            ],
            "LoanInterestTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "Identification": "string",
                "CalculationMethod": "ITCO",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "LoanInterestTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "MinTermPeriod": "PACT",
                    "TierValueMaxTerm": 0,
                    "MaxTermPeriod": "PACT",
                    "FixedVariableInterestRateType": "INFI",
                    "RepAPR": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "LoanProviderInterestRate": "string",
                    "Notes": [],
                    "OtherLoanProviderInterestRateType": {},
                    "LoanInterestFeesCharges": []
                  }
                ],
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeDetail": [],
                    "LoanInterestFeeChargeCap": []
                  }
                ]
              }
            ]
          },
          "Repayment": {
            "RepaymentType": "USBA",
            "RepaymentFrequency": "SMDA",
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherRepaymentType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherAmountType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeDetail": [
                {
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              ],
              "RepaymentFeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            },
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "TTEL",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "string",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "FCOT",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {}
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            }
          ],
          "SupplementaryData": {}
        },
        "BCA": {
          "ProductDetails": {
            "Segment": [
              "ClientAccount"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Banded",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "Daily",
                    "ApplicationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "Gross",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Banded",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "Day",
                    "OverdraftInterestChargingCoverage": "Banded",
                    "BankGuaranteedIndicator": true,
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "Electronic",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "Other",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {}
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "FeeCategory": "Other",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "Day",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            }
          ]
        },
        "PCA": {
          "ProductDetails": {
            "Segment": [
              "Basic"
            ],
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "PerAcademicTerm",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeDetail": [
              {
                "FeeCategory": "Other",
                "FeeType": "ServiceCAccountFee",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "FeeCategory": "Other",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "FeeChargeCap": [
                  {
                    "FeeType": [],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [],
                    "OtherFeeType": []
                  }
                ],
                "FeeApplicableRange": {
                  "MinimumAmount": "string",
                  "MaximumAmount": "string",
                  "MinimumRate": "string",
                  "MaximumRate": "string"
                }
              }
            ],
            "FeeChargeCap": [
              {
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Products Read|[OBReadProduct2](#schemaobreadproduct2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-scheduled-payments">Scheduled Payments</h1>

## Get Scheduled Payments

<a id="opIdGetScheduledPayments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/scheduled-payments \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/scheduled-payments HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/scheduled-payments',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/scheduled-payments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/scheduled-payments', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/scheduled-payments', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/scheduled-payments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/scheduled-payments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /scheduled-payments`

<h3 id="get-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "ScheduledPaymentId": "string",
        "ScheduledPaymentDateTime": "2019-08-24T14:15:22Z",
        "ScheduledType": "Arrival",
        "Reference": "string",
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Scheduled Payments Read|[OBReadScheduledPayment3](#schemaobreadscheduledpayment3)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-standing-orders">Standing Orders</h1>

## Get Standing Orders

<a id="opIdGetStandingOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/standing-orders \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/standing-orders HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/standing-orders',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/standing-orders',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/standing-orders', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/standing-orders', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/standing-orders");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/standing-orders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /standing-orders`

<h3 id="get-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "StandingOrderId": "string",
        "Frequency": "string",
        "Reference": "string",
        "FirstPaymentDateTime": "2019-08-24T14:15:22Z",
        "NextPaymentDateTime": "2019-08-24T14:15:22Z",
        "LastPaymentDateTime": "2019-08-24T14:15:22Z",
        "FinalPaymentDateTime": "2019-08-24T14:15:22Z",
        "NumberOfPayments": "string",
        "StandingOrderStatusCode": "Active",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Standing Orders Read|[OBReadStandingOrder6](#schemaobreadstandingorder6)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-statements">Statements</h1>

## Get Statements

<a id="opIdGetStatements"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/statements \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/statements HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/statements',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/statements',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/statements', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/statements', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/statements");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/statements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /statements`

<h3 id="get-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|fromStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements FROM|
|toStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements TO|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

**fromStatementDateTime**: The UTC ISO 8601 Date Time to filter statements FROM
NB Time component is optional - set to 00:00:00 for just Date.
If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

**toStatementDateTime**: The UTC ISO 8601 Date Time to filter statements TO
NB Time component is optional - set to 00:00:00 for just Date.
If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "StatementId": "string",
        "StatementReference": "string",
        "Type": "AccountClosure",
        "StartDateTime": "2019-08-24T14:15:22Z",
        "EndDateTime": "2019-08-24T14:15:22Z",
        "CreationDateTime": "2019-08-24T14:15:22Z",
        "StatementDescription": [
          "string"
        ],
        "StatementBenefit": [
          {
            "Type": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "string",
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Rate": 0,
            "RateType": "string",
            "Frequency": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "string",
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Rate": 0,
            "RateType": "string",
            "Frequency": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2019-08-24T14:15:22Z",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "string"
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-transactions">Transactions</h1>

## Get Transactions

<a id="opIdGetTransactions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /open-banking/v3.1/aisp/transactions \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'x-fapi-auth-date: string' \
  -H 'x-fapi-customer-ip-address: string' \
  -H 'x-fapi-interaction-id: string' \
  -H 'Authorization: string' \
  -H 'x-customer-user-agent: string'

```

```http
GET /open-banking/v3.1/aisp/transactions HTTP/1.1

Accept: application/json; charset=utf-8
x-fapi-auth-date: string
x-fapi-customer-ip-address: string
x-fapi-interaction-id: string
Authorization: string
x-customer-user-agent: string

```

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'x-fapi-auth-date':'string',
  'x-fapi-customer-ip-address':'string',
  'x-fapi-interaction-id':'string',
  'Authorization':'string',
  'x-customer-user-agent':'string'
};

fetch('/open-banking/v3.1/aisp/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'x-fapi-auth-date' => 'string',
  'x-fapi-customer-ip-address' => 'string',
  'x-fapi-interaction-id' => 'string',
  'Authorization' => 'string',
  'x-customer-user-agent' => 'string'
}

result = RestClient.get '/open-banking/v3.1/aisp/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'x-fapi-auth-date': 'string',
  'x-fapi-customer-ip-address': 'string',
  'x-fapi-interaction-id': 'string',
  'Authorization': 'string',
  'x-customer-user-agent': 'string'
}

r = requests.get('/open-banking/v3.1/aisp/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json; charset=utf-8',
    'x-fapi-auth-date' => 'string',
    'x-fapi-customer-ip-address' => 'string',
    'x-fapi-interaction-id' => 'string',
    'Authorization' => 'string',
    'x-customer-user-agent' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/open-banking/v3.1/aisp/transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/open-banking/v3.1/aisp/transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "x-fapi-auth-date": []string{"string"},
        "x-fapi-customer-ip-address": []string{"string"},
        "x-fapi-interaction-id": []string{"string"},
        "Authorization": []string{"string"},
        "x-customer-user-agent": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/open-banking/v3.1/aisp/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /transactions`

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. |
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions FROM|
|toBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions TO|

#### Detailed descriptions

**x-fapi-auth-date**: The time when the PSU last logged in with the TPP. 
All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: 
Sun, 10 Sep 2017 19:43:31 UTC

**fromBookingDateTime**: The UTC ISO 8601 Date Time to filter transactions FROM
NB Time component is optional - set to 00:00:00 for just Date.
If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

**toBookingDateTime**: The UTC ISO 8601 Date Time to filter transactions TO
NB Time component is optional - set to 00:00:00 for just Date.
If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "string"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "Booked",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "2019-08-24T14:15:22Z",
        "ValueDateTime": "2019-08-24T14:15:22Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "2019-08-24T14:15:22Z",
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          }
        },
        "BankTransactionCode": {
          "Code": "stri",
          "SubCode": "stri"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

# Schemas

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_ActiveOrHistoricCurrencyCode_0">ActiveOrHistoricCurrencyCode_0</h2>
<!-- backwards compatibility -->
<a id="schemaactiveorhistoriccurrencycode_0"></a>
<a id="schema_ActiveOrHistoricCurrencyCode_0"></a>
<a id="tocSactiveorhistoriccurrencycode_0"></a>
<a id="tocsactiveorhistoriccurrencycode_0"></a>

```json
"string"

```

Identification of the currency in which the account is held. 
Usage: Currency should only be used in case one and the same account number covers several currencies
and the initiating party needs to identify which currency needs to be used for settlement on the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|

<h2 id="tocS_ActiveOrHistoricCurrencyCode_1">ActiveOrHistoricCurrencyCode_1</h2>
<!-- backwards compatibility -->
<a id="schemaactiveorhistoriccurrencycode_1"></a>
<a id="schema_ActiveOrHistoricCurrencyCode_1"></a>
<a id="tocSactiveorhistoriccurrencycode_1"></a>
<a id="tocsactiveorhistoriccurrencycode_1"></a>

```json
"string"

```

A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_AddressLine">AddressLine</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline"></a>
<a id="schema_AddressLine"></a>
<a id="tocSaddressline"></a>
<a id="tocsaddressline"></a>

```json
"string"

```

Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|

<h2 id="tocS_BeneficiaryId">BeneficiaryId</h2>
<!-- backwards compatibility -->
<a id="schemabeneficiaryid"></a>
<a id="schema_BeneficiaryId"></a>
<a id="tocSbeneficiaryid"></a>
<a id="tocsbeneficiaryid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_BookingDateTime">BookingDateTime</h2>
<!-- backwards compatibility -->
<a id="schemabookingdatetime"></a>
<a id="schema_BookingDateTime"></a>
<a id="tocSbookingdatetime"></a>
<a id="tocsbookingdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time when a transaction entry is posted to an account on the account servicer's books.
Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_BuildingNumber">BuildingNumber</h2>
<!-- backwards compatibility -->
<a id="schemabuildingnumber"></a>
<a id="schema_BuildingNumber"></a>
<a id="tocSbuildingnumber"></a>
<a id="tocsbuildingnumber"></a>

```json
"string"

```

Number that identifies the position of a building on a street.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Number that identifies the position of a building on a street.|

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"

```

Nation with its own government, occupying a particular territory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Nation with its own government, occupying a particular territory.|

<h2 id="tocS_CountrySubDivision">CountrySubDivision</h2>
<!-- backwards compatibility -->
<a id="schemacountrysubdivision"></a>
<a id="schema_CountrySubDivision"></a>
<a id="tocScountrysubdivision"></a>
<a id="tocscountrysubdivision"></a>

```json
"string"

```

Identifies a subdivision of a country eg, state, region, county.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Identifies a subdivision of a country eg, state, region, county.|

<h2 id="tocS_CreationDateTime">CreationDateTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationdatetime"></a>
<a id="schema_CreationDateTime"></a>
<a id="tocScreationdatetime"></a>
<a id="tocscreationdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_DebtorReference">DebtorReference</h2>
<!-- backwards compatibility -->
<a id="schemadebtorreference"></a>
<a id="schema_DebtorReference"></a>
<a id="tocSdebtorreference"></a>
<a id="tocsdebtorreference"></a>

```json
"string"

```

A reference value provided by the PSU to the PISP while setting up the scheduled payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|

<h2 id="tocS_Description_0">Description_0</h2>
<!-- backwards compatibility -->
<a id="schemadescription_0"></a>
<a id="schema_Description_0"></a>
<a id="tocSdescription_0"></a>
<a id="tocsdescription_0"></a>

```json
"string"

```

Specifies the description of the account type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the description of the account type.|

<h2 id="tocS_Description_1">Description_1</h2>
<!-- backwards compatibility -->
<a id="schemadescription_1"></a>
<a id="schema_Description_1"></a>
<a id="tocSdescription_1"></a>
<a id="tocsdescription_1"></a>

```json
"string"

```

Description that may be available for the statement fee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Description that may be available for the statement fee.|

<h2 id="tocS_Description_2">Description_2</h2>
<!-- backwards compatibility -->
<a id="schemadescription_2"></a>
<a id="schema_Description_2"></a>
<a id="tocSdescription_2"></a>
<a id="tocsdescription_2"></a>

```json
"string"

```

Description that may be available for the statement interest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Description that may be available for the statement interest.|

<h2 id="tocS_Description_3">Description_3</h2>
<!-- backwards compatibility -->
<a id="schemadescription_3"></a>
<a id="schema_Description_3"></a>
<a id="tocSdescription_3"></a>
<a id="tocsdescription_3"></a>

```json
"string"

```

Description to describe the purpose of the code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Description to describe the purpose of the code|

<h2 id="tocS_DirectDebitId">DirectDebitId</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitid"></a>
<a id="schema_DirectDebitId"></a>
<a id="tocSdirectdebitid"></a>
<a id="tocsdirectdebitid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"

```

Address for electronic mail (e-mail).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Address for electronic mail (e-mail).|

<h2 id="tocS_EndDateTime">EndDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaenddatetime"></a>
<a id="schema_EndDateTime"></a>
<a id="tocSenddatetime"></a>
<a id="tocsenddatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_FinalPaymentDateTime">FinalPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemafinalpaymentdatetime"></a>
<a id="schema_FinalPaymentDateTime"></a>
<a id="tocSfinalpaymentdatetime"></a>
<a id="tocsfinalpaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_FirstPaymentDateTime">FirstPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemafirstpaymentdatetime"></a>
<a id="schema_FirstPaymentDateTime"></a>
<a id="tocSfirstpaymentdatetime"></a>
<a id="tocsfirstpaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Frequency_0">Frequency_0</h2>
<!-- backwards compatibility -->
<a id="schemafrequency_0"></a>
<a id="schema_Frequency_0"></a>
<a id="tocSfrequency_0"></a>
<a id="tocsfrequency_0"></a>

```json
"string"

```

Individual Definitions:
EvryDay - Every day
EvryWorkgDay - Every working day
IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. 
SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. 
Individual Patterns:
EvryDay (ScheduleCode)
EvryWorkgDay (ScheduleCode)
IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
EvryDay
EvryWorkgDay
IntrvlWkDay:0[1-9]:0[1-7]
WkInMnthDay:0[1-5]:0[1-7]
IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
Full Regular Expression:
^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Individual Definitions:<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. <br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. <br>Individual Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])<br>QtrDay:(ENGLISH|SCOTTISH|RECEIVED)<br>Full Regular Expression:<br>^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$|

<h2 id="tocS_Frequency_1">Frequency_1</h2>
<!-- backwards compatibility -->
<a id="schemafrequency_1"></a>
<a id="schema_Frequency_1"></a>
<a id="tocSfrequency_1"></a>
<a id="tocsfrequency_1"></a>

```json
"string"

```

Individual Definitions:
NotKnown - Not Known
EvryDay - Every day
EvryWorkgDay - Every working day
IntrvlDay - An interval specified in number of calendar days (02 to 31)
IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
Individual Patterns:
NotKnown (ScheduleCode)
EvryDay (ScheduleCode)
EvryWorkgDay (ScheduleCode)
IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
NotKnown
EvryDay
EvryWorkgDay
IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
IntrvlWkDay:0[1-9]:0[1-7]
WkInMnthDay:0[1-5]:0[1-7]
IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
Full Regular Expression:
^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])<br>QtrDay:(ENGLISH|SCOTTISH|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$|

<h2 id="tocS_FullLegalName">FullLegalName</h2>
<!-- backwards compatibility -->
<a id="schemafulllegalname"></a>
<a id="schema_FullLegalName"></a>
<a id="tocSfulllegalname"></a>
<a id="tocsfulllegalname"></a>

```json
"string"

```

Specifies a character string with a maximum length of 350 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies a character string with a maximum length of 350 characters.|

<h2 id="tocS_ISODateTime">ISODateTime</h2>
<!-- backwards compatibility -->
<a id="schemaisodatetime"></a>
<a id="schema_ISODateTime"></a>
<a id="tocSisodatetime"></a>
<a id="tocsisodatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Identification_0">Identification_0</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_0"></a>
<a id="schema_Identification_0"></a>
<a id="tocSidentification_0"></a>
<a id="tocsidentification_0"></a>

```json
"string"

```

Identification assigned by an institution to identify an account. This identification is known by the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|

<h2 id="tocS_Identification_1">Identification_1</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_1"></a>
<a id="schema_Identification_1"></a>
<a id="tocSidentification_1"></a>
<a id="tocsidentification_1"></a>

```json
"string"

```

Unique and unambiguous identification of the servicing institution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique and unambiguous identification of the servicing institution.|

<h2 id="tocS_Identification_2">Identification_2</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_2"></a>
<a id="schema_Identification_2"></a>
<a id="tocSidentification_2"></a>
<a id="tocsidentification_2"></a>

```json
"string"

```

Unique and unambiguous identification of a financial institution or a branch of a financial institution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|

<h2 id="tocS_LastPaymentDateTime">LastPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastpaymentdatetime"></a>
<a id="schema_LastPaymentDateTime"></a>
<a id="tocSlastpaymentdatetime"></a>
<a id="tocslastpaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "Self": "http://example.com",
  "First": "http://example.com",
  "Prev": "http://example.com",
  "Next": "http://example.com",
  "Last": "http://example.com"
}

```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Self|string(uri)|true|none|none|
|First|string(uri)|false|none|none|
|Prev|string(uri)|false|none|none|
|Next|string(uri)|false|none|none|
|Last|string(uri)|false|none|none|

<h2 id="tocS_MandateIdentification">MandateIdentification</h2>
<!-- backwards compatibility -->
<a id="schemamandateidentification"></a>
<a id="schema_MandateIdentification"></a>
<a id="tocSmandateidentification"></a>
<a id="tocsmandateidentification"></a>

```json
"string"

```

Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.|

<h2 id="tocS_MaturityDate">MaturityDate</h2>
<!-- backwards compatibility -->
<a id="schemamaturitydate"></a>
<a id="schema_MaturityDate"></a>
<a id="tocSmaturitydate"></a>
<a id="tocsmaturitydate"></a>

```json
"2019-08-24T14:15:22Z"

```

Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "TotalPages": 0,
  "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
  "LastAvailableDateTime": "2019-08-24T14:15:22Z"
}

```

MetaData

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalPages|integer(int32)|false|none|none|
|FirstAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Name_0">Name_0</h2>
<!-- backwards compatibility -->
<a id="schemaname_0"></a>
<a id="schema_Name_0"></a>
<a id="tocSname_0"></a>
<a id="tocsname_0"></a>

```json
"string"

```

The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
Note, the account name is not the product name or the nickname of the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|

<h2 id="tocS_Name_1">Name_1</h2>
<!-- backwards compatibility -->
<a id="schemaname_1"></a>
<a id="schema_Name_1"></a>
<a id="tocSname_1"></a>
<a id="tocsname_1"></a>

```json
"string"

```

Name by which an agent is known and which is usually used to identify that agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name by which an agent is known and which is usually used to identify that agent.|

<h2 id="tocS_Name_2">Name_2</h2>
<!-- backwards compatibility -->
<a id="schemaname_2"></a>
<a id="schema_Name_2"></a>
<a id="tocSname_2"></a>
<a id="tocsname_2"></a>

```json
"string"

```

Name of Service User.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name of Service User.|

<h2 id="tocS_Name_3">Name_3</h2>
<!-- backwards compatibility -->
<a id="schemaname_3"></a>
<a id="schema_Name_3"></a>
<a id="tocSname_3"></a>
<a id="tocsname_3"></a>

```json
"string"

```

Name by which a party is known and which is usually used to identify that party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name by which a party is known and which is usually used to identify that party.|

<h2 id="tocS_Name_4">Name_4</h2>
<!-- backwards compatibility -->
<a id="schemaname_4"></a>
<a id="schema_Name_4"></a>
<a id="tocSname_4"></a>
<a id="tocsname_4"></a>

```json
"string"

```

Long name associated with the code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Long name associated with the code|

<h2 id="tocS_NextPaymentDateTime">NextPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemanextpaymentdatetime"></a>
<a id="schema_NextPaymentDateTime"></a>
<a id="tocSnextpaymentdatetime"></a>
<a id="tocsnextpaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Nickname">Nickname</h2>
<!-- backwards compatibility -->
<a id="schemanickname"></a>
<a id="schema_Nickname"></a>
<a id="tocSnickname"></a>
<a id="tocsnickname"></a>

```json
"string"

```

The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|

<h2 id="tocS_NumberOfPayments">NumberOfPayments</h2>
<!-- backwards compatibility -->
<a id="schemanumberofpayments"></a>
<a id="schema_NumberOfPayments"></a>
<a id="tocSnumberofpayments"></a>
<a id="tocsnumberofpayments"></a>

```json
"string"

```

Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|

<h2 id="tocS_Number_0">Number_0</h2>
<!-- backwards compatibility -->
<a id="schemanumber_0"></a>
<a id="schema_Number_0"></a>
<a id="tocSnumber_0"></a>
<a id="tocsnumber_0"></a>

```json
0

```

Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|

<h2 id="tocS_Number_1">Number_1</h2>
<!-- backwards compatibility -->
<a id="schemanumber_1"></a>
<a id="schema_Number_1"></a>
<a id="tocSnumber_1"></a>
<a id="tocsnumber_1"></a>

```json
0

```

fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|

<h2 id="tocS_OBAccount4">OBAccount4</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4"></a>
<a id="schema_OBAccount4"></a>
<a id="tocSobaccount4"></a>
<a id="tocsobaccount4"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "string",
      "Name": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "Servicer": {
    "SchemeName": "string",
    "Identification": "string"
  }
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|Account|[object]|false|none|none|
|» SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|» Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

<h2 id="tocS_OBAccount4Basic">OBAccount4Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4basic"></a>
<a id="schema_OBAccount4Basic"></a>
<a id="tocSobaccount4basic"></a>
<a id="tocsobaccount4basic"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string"
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|

<h2 id="tocS_OBAccount4Detail">OBAccount4Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4detail"></a>
<a id="schema_OBAccount4Detail"></a>
<a id="tocSobaccount4detail"></a>
<a id="tocsobaccount4detail"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "string",
      "Name": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "Servicer": {
    "SchemeName": "string",
    "Identification": "string"
  }
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|Account|[object]|true|none|none|
|» SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|» Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

<h2 id="tocS_OBAccount6">OBAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6"></a>
<a id="schema_OBAccount6"></a>
<a id="tocSobaccount6"></a>
<a id="tocsobaccount6"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "2019-08-24T14:15:22Z",
  "MaturityDate": "2019-08-24T14:15:22Z",
  "SwitchStatus": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "string",
      "Name": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "Servicer": {
    "SchemeName": "string",
    "Identification": "string"
  }
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|
|Account|[object]|false|none|none|
|» SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|» Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

<h2 id="tocS_OBAccount6Basic">OBAccount6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6basic"></a>
<a id="schema_OBAccount6Basic"></a>
<a id="tocSobaccount6basic"></a>
<a id="tocsobaccount6basic"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "2019-08-24T14:15:22Z",
  "MaturityDate": "2019-08-24T14:15:22Z",
  "SwitchStatus": "string"
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|

<h2 id="tocS_OBAccount6Detail">OBAccount6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6detail"></a>
<a id="schema_OBAccount6Detail"></a>
<a id="tocSobaccount6detail"></a>
<a id="tocsobaccount6detail"></a>

```json
{
  "AccountId": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
  "Currency": "string",
  "AccountType": "Business",
  "AccountSubType": "ChargeCard",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "2019-08-24T14:15:22Z",
  "MaturityDate": "2019-08-24T14:15:22Z",
  "SwitchStatus": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "string",
      "Name": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "Servicer": {
    "SchemeName": "string",
    "Identification": "string"
  }
}

```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|
|Account|[object]|true|none|none|
|» SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|» Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

<h2 id="tocS_OBAccountStatus1Code">OBAccountStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobaccountstatus1code"></a>
<a id="schema_OBAccountStatus1Code"></a>
<a id="tocSobaccountstatus1code"></a>
<a id="tocsobaccountstatus1code"></a>

```json
"Deleted"

```

Specifies the status of account resource in code form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the status of account resource in code form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Deleted|
|*anonymous*|Disabled|
|*anonymous*|Enabled|
|*anonymous*|Pending|
|*anonymous*|ProForma|

<h2 id="tocS_OBActiveCurrencyAndAmount_SimpleType">OBActiveCurrencyAndAmount_SimpleType</h2>
<!-- backwards compatibility -->
<a id="schemaobactivecurrencyandamount_simpletype"></a>
<a id="schema_OBActiveCurrencyAndAmount_SimpleType"></a>
<a id="tocSobactivecurrencyandamount_simpletype"></a>
<a id="tocsobactivecurrencyandamount_simpletype"></a>

```json
"string"

```

A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_0">OBActiveOrHistoricCurrencyAndAmount_0</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_0"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_0"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_0"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_0"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

The amount of the most recent direct debit collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_1">OBActiveOrHistoricCurrencyAndAmount_1</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_1"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_1"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_1"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_1"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
Usage: This amount has to be transported unchanged through the transaction chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_10">OBActiveOrHistoricCurrencyAndAmount_10</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_10"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_10"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_10"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_10"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Transaction charges to be paid by the charge bearer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_11">OBActiveOrHistoricCurrencyAndAmount_11</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_11"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_11"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_11"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_11"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

The amount of the last (most recent) Standing Order instruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_2">OBActiveOrHistoricCurrencyAndAmount_2</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_2"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_2"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_2"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_2"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

The amount of the first Standing Order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_3">OBActiveOrHistoricCurrencyAndAmount_3</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_3"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_3"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_3"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_3"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

The amount of the next Standing Order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_4">OBActiveOrHistoricCurrencyAndAmount_4</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_4"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_4"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_4"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_4"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

The amount of the final Standing Order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_5">OBActiveOrHistoricCurrencyAndAmount_5</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_5"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_5"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_5"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_5"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money associated with the statement benefit type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_6">OBActiveOrHistoricCurrencyAndAmount_6</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_6"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_6"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_6"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_6"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money associated with the statement fee type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_7">OBActiveOrHistoricCurrencyAndAmount_7</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_7"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_7"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_7"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_7"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money associated with the statement interest amount type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_8">OBActiveOrHistoricCurrencyAndAmount_8</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_8"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_8"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_8"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_8"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money associated with the amount type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_9">OBActiveOrHistoricCurrencyAndAmount_9</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_9"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_9"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_9"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_9"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}

```

Amount of money in the cash transaction entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBAddressTypeCode">OBAddressTypeCode</h2>
<!-- backwards compatibility -->
<a id="schemaobaddresstypecode"></a>
<a id="schema_OBAddressTypeCode"></a>
<a id="tocSobaddresstypecode"></a>
<a id="tocsobaddresstypecode"></a>

```json
"Business"

```

Identifies the nature of the postal address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Identifies the nature of the postal address.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Business|
|*anonymous*|Correspondence|
|*anonymous*|DeliveryTo|
|*anonymous*|MailTo|
|*anonymous*|POBox|
|*anonymous*|Postal|
|*anonymous*|Residential|
|*anonymous*|Statement|

<h2 id="tocS_OBBCAData1">OBBCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobbcadata1"></a>
<a id="schema_OBBCAData1"></a>
<a id="tocSobbcadata1"></a>
<a id="tocsobbcadata1"></a>

```json
{
  "ProductDetails": {
    "Segment": [
      "ClientAccount"
    ],
    "FeeFreeLength": 0,
    "FeeFreeLengthPeriod": "Day",
    "Notes": [
      "string"
    ]
  },
  "CreditInterest": {
    "TierBandSet": [
      {
        "TierBandMethod": "Banded",
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "Identification": "string",
            "TierValueMinimum": "string",
            "TierValueMaximum": "string",
            "CalculationFrequency": "Daily",
            "ApplicationFrequency": "Daily",
            "DepositInterestAppliedCoverage": "Banded",
            "FixedVariableInterestRateType": "Fixed",
            "AER": "string",
            "BankInterestRateType": "Gross",
            "BankInterestRate": "string",
            "Notes": [
              "string"
            ],
            "OtherBankInterestType": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          }
        ]
      }
    ]
  },
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "TierBandMethod": "Banded",
        "OverdraftType": "Committed",
        "Identification": "string",
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Notes": [
          "string"
        ],
        "OverdraftTierBand": [
          {
            "Identification": "string",
            "TierValueMin": "string",
            "TierValueMax": "string",
            "EAR": "string",
            "RepresentativeAPR": "string",
            "AgreementLengthMin": 0,
            "AgreementLengthMax": 0,
            "AgreementPeriod": "Day",
            "OverdraftInterestChargingCoverage": "Banded",
            "BankGuaranteedIndicator": true,
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "Day",
                    "Notes": [],
                    "OtherFeeType": []
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "FeeType": "ArrangedOverdraft",
                    "NegotiableIndicator": true,
                    "OverdraftControlIndicator": true,
                    "IncrementalBorrowingAmount": "string",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "Gross",
                    "ApplicationFrequency": "OnClosing",
                    "CalculationFrequency": "OnClosing",
                    "Notes": [],
                    "OverdraftFeeChargeCap": [],
                    "OtherFeeType": {},
                    "OtherFeeRateType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          }
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "Day",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "FeeType": "ArrangedOverdraft",
                "NegotiableIndicator": true,
                "OverdraftControlIndicator": true,
                "IncrementalBorrowingAmount": "string",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "Gross",
                "ApplicationFrequency": "OnClosing",
                "CalculationFrequency": "OnClosing",
                "Notes": [
                  "string"
                ],
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "Day",
                    "Notes": [],
                    "OtherFeeType": []
                  }
                ],
                "OtherFeeType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "OtherFeesCharges": [
    {
      "TariffType": "Electronic",
      "TariffName": "string",
      "OtherTariffType": {
        "Code": "stri",
        "Name": "string",
        "Description": "string"
      },
      "FeeChargeDetail": [
        {
          "FeeCategory": "Other",
          "FeeType": "Other",
          "NegotiableIndicator": true,
          "FeeAmount": "string",
          "FeeRate": "string",
          "FeeRateType": "Gross",
          "ApplicationFrequency": "OnClosing",
          "CalculationFrequency": "OnClosing",
          "Notes": [
            "string"
          ],
          "FeeChargeCap": [
            {
              "FeeType": [
                "Other"
              ],
              "MinMaxType": "Minimum",
              "FeeCapOccurrence": 0,
              "FeeCapAmount": "string",
              "CappingPeriod": "Day",
              "Notes": [
                "string"
              ],
              "OtherFeeType": [
                {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                }
              ]
            }
          ],
          "OtherFeeCategoryType": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherFeeType": {
            "Code": "stri",
            "FeeCategory": "Other",
            "Name": "string",
            "Description": "string"
          },
          "OtherFeeRateType": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherApplicationFrequency": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherCalculationFrequency": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "FeeApplicableRange": {
            "MinimumAmount": "string",
            "MaximumAmount": "string",
            "MinimumRate": "string",
            "MaximumRate": "string"
          }
        }
      ],
      "FeeChargeCap": [
        {
          "FeeType": [
            "Other"
          ],
          "MinMaxType": "Minimum",
          "FeeCapOccurrence": 0,
          "FeeCapAmount": "string",
          "CappingPeriod": "Day",
          "Notes": [
            "string"
          ],
          "OtherFeeType": [
            {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          ]
        }
      ]
    }
  ]
}

```

BCA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductDetails|object|false|none|none|
|» Segment|[string]|false|none|Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.<br><br>Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd <br>With respect to BCA products, they are segmented in relation to different markets that they wish to focus on.|
|» FeeFreeLength|number(float)|false|none|The length/duration of the fee free period|
|» FeeFreeLengthPeriod|string|false|none|The unit of period (days, weeks, months etc.) of the promotional length|
|» Notes|[string]|false|none|Optional additional notes to supplement the Core product details|
|CreditInterest|object|false|none|Details about the interest that may be payable to the BCA account holders|
|» TierBandSet|[object]|true|none|The group of tiers or bands for which credit interest can be applied.|
|»» TierBandMethod|string|true|none|The methodology of how credit interest is paid/applied. It can be:-<br><br>1. Banded<br>Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.<br><br>2. Tiered<br>Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.<br><br>3. Whole<br>The same interest rate is applied irrespective of the BCA balance|
|»» CalculationMethod|string|false|none|Methods of calculating interest|
|»» Destination|string|true|none|Describes whether accrued interest is payable only to the BCA or to another bank account|
|»» Notes|[string]|false|none|Optional additional notes to supplement the Tier Band Set details|
|»» TierBand|[object]|true|none|Tier Band Details|
|»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a BCA.|
|»»» TierValueMinimum|string|true|none|Minimum deposit value for which the credit interest tier applies.|
|»»» TierValueMaximum|string|false|none|Maximum deposit value for which the credit interest tier applies.|
|»»» CalculationFrequency|string|false|none|How often is credit interest calculated for the account.|
|»»» ApplicationFrequency|string|true|none|How often is interest applied to the BCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's BCA.|
|»»» DepositInterestAppliedCoverage|string|false|none|Amount on which Interest applied.|
|»»» FixedVariableInterestRateType|string|true|none|Type of interest rate, Fixed or Variable|
|»»» AER|string|true|none|The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. <br><br>Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A|
|»»» BankInterestRateType|string|false|none|Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the BCA.|
|»»» BankInterestRate|string|false|none|Bank Interest for the BCA product|
|»»» Notes|[string]|false|none|Optional additional notes to supplement the Tier Band details|
|»»» OtherBankInterestType|object|false|none|Other interest rate types which are not available in the standard code list|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|Overdraft|object|false|none|Borrowing details|
|» Notes|[string]|false|none|Associated Notes about the overdraft rates|
|» OverdraftTierBandSet|[object]|true|none|Tier band set details|
|»» TierBandMethod|string|true|none|The methodology of how overdraft is charged. It can be:<br>'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). <br>'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation<br>'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.|
|»» OverdraftType|string|false|none|An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.|
|»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft product.|
|»» AuthorisedIndicator|boolean|false|none|Indicates if the Overdraft is authorised (Y) or unauthorised (N)|
|»» BufferAmount|string|false|none|When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.|
|»» Notes|[string]|false|none|Optional additional notes to supplement the overdraft Tier Band Set details|
|»» OverdraftTierBand|[object]|true|none|Provides overdraft details for a specific tier or band|
|»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft.|
|»»» TierValueMin|string|true|none|Minimum value of Overdraft Tier/Band|
|»»» TierValueMax|string|false|none|Maximum value of Overdraft Tier/Band|
|»»» EAR|string|false|none|EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently<br>used interchangeably), being the actual annual interest rate of an Overdraft.|
|»»» RepresentativeAPR|string|false|none|An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.|
|»»» AgreementLengthMin|number(float)|false|none|Specifies the minimum length of a band for a fixed overdraft agreement|
|»»» AgreementLengthMax|number(float)|false|none|Specifies the maximum length of a band for a fixed overdraft agreement|
|»»» AgreementPeriod|string|false|none|Specifies the period of a fixed length overdraft agreement|
|»»» OverdraftInterestChargingCoverage|string|false|none|Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’.|
|»»» BankGuaranteedIndicator|boolean|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.|
|»»» Notes|[string]|false|none|Optional additional notes to supplement the Tier/band details|
|»»» OverdraftFeesCharges|[object]|false|none|Overdraft fees and charges|
|»»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.|
|»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»» MinMaxType|string|true|none|Min Max type|
|»»»»» FeeCapOccurrence|number(float)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.|
|»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OverdraftFeeChargeDetail|[object]|true|none|Details about the fees/charges|
|»»»»» FeeType|string|true|none|Overdraft fee type|
|»»»»» NegotiableIndicator|boolean|false|none|Indicates whether fee and charges are negotiable|
|»»»»» OverdraftControlIndicator|boolean|false|none|Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.|
|»»»»» IncrementalBorrowingAmount|string|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»»» FeeAmount|string|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»» FeeRate|string|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» FeeRateType|string|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» ApplicationFrequency|string|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»»» CalculationFrequency|string|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»»» Notes|[string]|false|none|Free text for capturing any other info related to Overdraft Fees Charge Details|
|»»»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.|
|»»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»»» MinMaxType|string|true|none|Min Max type|
|»»»»»» FeeCapOccurrence|number(float)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.|
|»»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherFeeType|object|false|none|Other Fee type which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherFeeRateType|object|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OverdraftFeesCharges|[object]|false|none|Overdraft fees and charges details|
|»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.|
|»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»» MinMaxType|string|true|none|Min Max type|
|»»»» FeeCapOccurrence|number(float)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.|
|»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OverdraftFeeChargeDetail|[object]|true|none|Details about the fees/charges|
|»»»» FeeType|string|true|none|Overdraft fee type|
|»»»» NegotiableIndicator|boolean|false|none|Indicates whether fee and charges are negotiable|
|»»»» OverdraftControlIndicator|boolean|false|none|Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.|
|»»»» IncrementalBorrowingAmount|string|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»» FeeAmount|string|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»» FeeRate|string|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»» FeeRateType|string|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»» ApplicationFrequency|string|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»» CalculationFrequency|string|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»» Notes|[string]|false|none|Free text for capturing any other info related to Overdraft Fees Charge Details|
|»»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.|
|»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»» MinMaxType|string|true|none|Min Max type|
|»»»»» FeeCapOccurrence|number(float)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.|
|»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherFeeType|object|false|none|Other Fee type which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherFeeRateType|object|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|OtherFeesCharges|[object]|false|none|Contains details of fees and charges which are not associated with either Overdraft or features/benefits|
|» TariffType|string|false|none|TariffType which defines the fee and charges.|
|» TariffName|string|false|none|Name of the tariff|
|» OtherTariffType|object|false|none|Other tariff type which is not in the standard list.|
|»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»» Name|string|true|none|Long name associated with the code|
|»» Description|string|true|none|Description to describe the purpose of the code|
|» FeeChargeDetail|[object]|true|none|Other fees/charges details|
|»» FeeCategory|string|true|none|Categorisation of fees and charges into standard categories.|
|»» FeeType|string|true|none|Fee/Charge Type|
|»» NegotiableIndicator|boolean|false|none|Fee/charge which is usually negotiable rather than a fixed amount|
|»» FeeAmount|string|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»» FeeRate|string|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»» FeeRateType|string|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»» ApplicationFrequency|string|true|none|How frequently the fee/charge is applied to the account|
|»» CalculationFrequency|string|false|none|How frequently the fee/charge is calculated|
|»» Notes|[string]|false|none|Optional additional notes to supplement the fee/charge details.|
|»» FeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular or group of fee/charge|
|»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»» MinMaxType|string|true|none|Min Max type|
|»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»» Notes|[string]|false|none|Free text for adding  extra details for fee charge cap|
|»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherFeeCategoryType|object|false|none|none|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherFeeType|object|false|none|Other Fee/charge type which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» FeeCategory|string|true|none|Categorisation of fees and charges into standard categories.|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherFeeRateType|object|false|none|Other fee rate type which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherApplicationFrequency|object|false|none|Other application frequencies not covered in the standard code list|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in standard code set.|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» FeeApplicableRange|object|false|none|Range or amounts or rates for which the fee/charge applies|
|»»» MinimumAmount|string|false|none|Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)|
|»»» MaximumAmount|string|false|none|Maximum Amount on which fee is applicable (where it is expressed as an amount)|
|»»» MinimumRate|string|false|none|Minimum rate on which fee/charge is applicable(where it is expressed as an rate)|
|»»» MaximumRate|string|false|none|Maximum rate on which fee/charge is applicable(where it is expressed as an rate)|
|» FeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular or group of fee/charge|
|»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»» MinMaxType|string|true|none|Min Max type|
|»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»» Notes|[string]|false|none|Free text for adding  extra details for fee charge cap|
|»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|

#### Enumerated Values

|Property|Value|
|---|---|
|FeeFreeLengthPeriod|Day|
|FeeFreeLengthPeriod|Half Year|
|FeeFreeLengthPeriod|Month|
|FeeFreeLengthPeriod|Quarter|
|FeeFreeLengthPeriod|Week|
|FeeFreeLengthPeriod|Year|
|TierBandMethod|Banded|
|TierBandMethod|Tiered|
|TierBandMethod|Whole|
|CalculationMethod|Compound|
|CalculationMethod|SimpleInterest|
|Destination|PayAway|
|Destination|SelfCredit|
|CalculationFrequency|Daily|
|CalculationFrequency|HalfYearly|
|CalculationFrequency|Monthly|
|CalculationFrequency|Other|
|CalculationFrequency|Quarterly|
|CalculationFrequency|PerStatementDate|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|ApplicationFrequency|Daily|
|ApplicationFrequency|HalfYearly|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|Other|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|PerStatementDate|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|DepositInterestAppliedCoverage|Banded|
|DepositInterestAppliedCoverage|Tiered|
|DepositInterestAppliedCoverage|Whole|
|FixedVariableInterestRateType|Fixed|
|FixedVariableInterestRateType|Variable|
|BankInterestRateType|Gross|
|BankInterestRateType|Other|
|TierBandMethod|Banded|
|TierBandMethod|Tiered|
|TierBandMethod|Whole|
|OverdraftType|Committed|
|OverdraftType|OnDemand|
|AgreementPeriod|Day|
|AgreementPeriod|Half Year|
|AgreementPeriod|Month|
|AgreementPeriod|Quarter|
|AgreementPeriod|Week|
|AgreementPeriod|Year|
|OverdraftInterestChargingCoverage|Banded|
|OverdraftInterestChargingCoverage|Tiered|
|OverdraftInterestChargingCoverage|Whole|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeType|ArrangedOverdraft|
|FeeType|AnnualReview|
|FeeType|EmergencyBorrowing|
|FeeType|BorrowingItem|
|FeeType|OverdraftRenewal|
|FeeType|OverdraftSetup|
|FeeType|Surcharge|
|FeeType|TempOverdraft|
|FeeType|UnauthorisedBorrowing|
|FeeType|UnauthorisedPaidTrans|
|FeeType|Other|
|FeeType|UnauthorisedUnpaidTrans|
|FeeRateType|Gross|
|FeeRateType|Other|
|ApplicationFrequency|OnClosing|
|ApplicationFrequency|OnOpening|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHundredPounds|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|OnClosing|
|CalculationFrequency|OnOpening|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHundredPounds|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeType|ArrangedOverdraft|
|FeeType|AnnualReview|
|FeeType|EmergencyBorrowing|
|FeeType|BorrowingItem|
|FeeType|OverdraftRenewal|
|FeeType|OverdraftSetup|
|FeeType|Surcharge|
|FeeType|TempOverdraft|
|FeeType|UnauthorisedBorrowing|
|FeeType|UnauthorisedPaidTrans|
|FeeType|Other|
|FeeType|UnauthorisedUnpaidTrans|
|FeeRateType|Gross|
|FeeRateType|Other|
|ApplicationFrequency|OnClosing|
|ApplicationFrequency|OnOpening|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHundredPounds|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|OnClosing|
|CalculationFrequency|OnOpening|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHundredPounds|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|TariffType|Electronic|
|TariffType|Mixed|
|TariffType|Other|
|FeeCategory|Other|
|FeeCategory|Servicing|
|FeeType|Other|
|FeeType|ServiceCAccountFee|
|FeeType|ServiceCAccountFeeMonthly|
|FeeType|ServiceCAccountFeeQuarterly|
|FeeType|ServiceCFixedTariff|
|FeeType|ServiceCBusiDepAccBreakage|
|FeeType|ServiceCMinimumMonthlyFee|
|FeeType|ServiceCOther|
|FeeRateType|Gross|
|FeeRateType|Other|
|ApplicationFrequency|OnClosing|
|ApplicationFrequency|OnOpening|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHundredPounds|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|OnClosing|
|CalculationFrequency|OnOpening|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHundredPounds|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeCategory|Other|
|FeeCategory|Servicing|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|

<h2 id="tocS_OBBalanceType1Code">OBBalanceType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbalancetype1code"></a>
<a id="schema_OBBalanceType1Code"></a>
<a id="tocSobbalancetype1code"></a>
<a id="tocsobbalancetype1code"></a>

```json
"ClosingAvailable"

```

Balance type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Balance type, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|ClosingAvailable|
|*anonymous*|ClosingBooked|
|*anonymous*|ClosingCleared|
|*anonymous*|Expected|
|*anonymous*|ForwardAvailable|
|*anonymous*|Information|
|*anonymous*|InterimAvailable|
|*anonymous*|InterimBooked|
|*anonymous*|InterimCleared|
|*anonymous*|OpeningAvailable|
|*anonymous*|OpeningBooked|
|*anonymous*|OpeningCleared|
|*anonymous*|PreviouslyClosedBooked|

<h2 id="tocS_OBBankTransactionCodeStructure1">OBBankTransactionCodeStructure1</h2>
<!-- backwards compatibility -->
<a id="schemaobbanktransactioncodestructure1"></a>
<a id="schema_OBBankTransactionCodeStructure1"></a>
<a id="tocSobbanktransactioncodestructure1"></a>
<a id="tocsobbanktransactioncodestructure1"></a>

```json
{
  "Code": "stri",
  "SubCode": "stri"
}

```

Set of elements used to fully identify the type of underlying transaction resulting in an entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Specifies the family within a domain.|
|SubCode|string|true|none|Specifies the sub-product family within a specific family.|

<h2 id="tocS_OBBeneficiary5">OBBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5"></a>
<a id="schema_OBBeneficiary5"></a>
<a id="tocSobbeneficiary5"></a>
<a id="tocsobbeneficiary5"></a>

```json
{
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "Reference": "string",
  "SupplementaryData": {},
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|false|none|Provides the details to identify the beneficiary account.|

<h2 id="tocS_OBBeneficiary5Basic">OBBeneficiary5Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5basic"></a>
<a id="schema_OBBeneficiary5Basic"></a>
<a id="tocSobbeneficiary5basic"></a>
<a id="tocsobbeneficiary5basic"></a>

```json
{
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "Reference": "string",
  "SupplementaryData": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBBeneficiary5Detail">OBBeneficiary5Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5detail"></a>
<a id="schema_OBBeneficiary5Detail"></a>
<a id="tocSobbeneficiary5detail"></a>
<a id="tocsobbeneficiary5detail"></a>

```json
{
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "Reference": "string",
  "SupplementaryData": {},
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|true|none|Provides the details to identify the beneficiary account.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_0">OBBranchAndFinancialInstitutionIdentification5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string"
}

```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_1">OBBranchAndFinancialInstitutionIdentification5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string"
}

```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_0">OBBranchAndFinancialInstitutionIdentification6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressType": "Business",
    "Department": "string",
    "SubDepartment": "string",
    "StreetName": "string",
    "BuildingNumber": "string",
    "PostCode": "string",
    "TownName": "string",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}

```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_1](#schemaidentification_1)|false|none|Unique and unambiguous identification of the servicing institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_1">OBBranchAndFinancialInstitutionIdentification6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressType": "Business",
    "Department": "string",
    "SubDepartment": "string",
    "StreetName": "string",
    "BuildingNumber": "string",
    "PostCode": "string",
    "TownName": "string",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}

```

Financial institution servicing an account for the creditor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_2">OBBranchAndFinancialInstitutionIdentification6_2</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_2"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_2"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_2"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_2"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressType": "Business",
    "Department": "string",
    "SubDepartment": "string",
    "StreetName": "string",
    "BuildingNumber": "string",
    "PostCode": "string",
    "TownName": "string",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}

```

Financial institution servicing an account for the debtor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBCashAccount5_0">OBCashAccount5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_0"></a>
<a id="schema_OBCashAccount5_0"></a>
<a id="tocSobcashaccount5_0"></a>
<a id="tocsobcashaccount5_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "SecondaryIdentification": "string"
}

```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount5_1">OBCashAccount5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_1"></a>
<a id="schema_OBCashAccount5_1"></a>
<a id="tocSobcashaccount5_1"></a>
<a id="tocsobcashaccount5_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "SecondaryIdentification": "string"
}

```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|string|true|none|Beneficiary account identification.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount6_0">OBCashAccount6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_0"></a>
<a id="schema_OBCashAccount6_0"></a>
<a id="tocSobcashaccount6_0"></a>
<a id="tocsobcashaccount6_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "SecondaryIdentification": "string"
}

```

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_0](#schemaidentification_0)|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount6_1">OBCashAccount6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_1"></a>
<a id="schema_OBCashAccount6_1"></a>
<a id="tocSobcashaccount6_1"></a>
<a id="tocsobcashaccount6_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "string",
  "SecondaryIdentification": "string"
}

```

Unambiguous identification of the account of the debtor, in the case of a crebit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|Identification|[Identification_0](#schemaidentification_0)|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCreditDebitCode_0">OBCreditDebitCode_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_0"></a>
<a id="schema_OBCreditDebitCode_0"></a>
<a id="tocSobcreditdebitcode_0"></a>
<a id="tocsobcreditdebitcode_0"></a>

```json
"Credit"

```

Indicates whether the amount is a credit or a debit. 
Usage: A zero amount is considered to be a credit amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Credit|
|*anonymous*|Debit|

<h2 id="tocS_OBCreditDebitCode_1">OBCreditDebitCode_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_1"></a>
<a id="schema_OBCreditDebitCode_1"></a>
<a id="tocSobcreditdebitcode_1"></a>
<a id="tocsobcreditdebitcode_1"></a>

```json
"Credit"

```

Indicates whether the transaction is a credit or a debit entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Indicates whether the transaction is a credit or a debit entry.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Credit|
|*anonymous*|Debit|

<h2 id="tocS_OBCreditDebitCode_2">OBCreditDebitCode_2</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_2"></a>
<a id="schema_OBCreditDebitCode_2"></a>
<a id="tocSobcreditdebitcode_2"></a>
<a id="tocsobcreditdebitcode_2"></a>

```json
"Credit"

```

Indicates whether the balance is a credit or a debit balance. 
Usage: A zero balance is considered to be a credit balance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Indicates whether the balance is a credit or a debit balance. <br>Usage: A zero balance is considered to be a credit balance.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Credit|
|*anonymous*|Debit|

<h2 id="tocS_OBCurrencyExchange5">OBCurrencyExchange5</h2>
<!-- backwards compatibility -->
<a id="schemaobcurrencyexchange5"></a>
<a id="schema_OBCurrencyExchange5"></a>
<a id="tocSobcurrencyexchange5"></a>
<a id="tocsobcurrencyexchange5"></a>

```json
{
  "SourceCurrency": "string",
  "TargetCurrency": "string",
  "UnitCurrency": "string",
  "ExchangeRate": 0,
  "ContractIdentification": "string",
  "QuotationDate": "2019-08-24T14:15:22Z",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  }
}

```

Set of elements used to provide details on the currency exchange.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceCurrency|string|true|none|Currency from which an amount is to be converted in a currency conversion.|
|TargetCurrency|string|false|none|Currency into which an amount is to be converted in a currency conversion.|
|UnitCurrency|string|false|none|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|ExchangeRate|number|true|none|Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.<br>Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).|
|ContractIdentification|string|false|none|Unique identification to unambiguously identify the foreign exchange contract.|
|QuotationDate|string(date-time)|false|none|Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|InstructedAmount|object|false|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.|
|» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBEntryStatus1Code">OBEntryStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobentrystatus1code"></a>
<a id="schema_OBEntryStatus1Code"></a>
<a id="tocSobentrystatus1code"></a>
<a id="tocsobentrystatus1code"></a>

```json
"Booked"

```

Status of a transaction entry on the books of the account servicer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of a transaction entry on the books of the account servicer.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Booked|
|*anonymous*|Pending|

<h2 id="tocS_OBTransactionMutability1Code">OBTransactionMutability1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactionmutability1code"></a>
<a id="schema_OBTransactionMutability1Code"></a>
<a id="tocSobtransactionmutability1code"></a>
<a id="tocsobtransactionmutability1code"></a>

```json
"Mutable"

```

Specifies the Mutability of the Transaction record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the Mutability of the Transaction record.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Mutable|
|*anonymous*|Immutable|

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "string",
  "Message": "string",
  "Path": "string",
  "Url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|string|true|none|Low level textual error code, e.g., UK.OBIE.Field.Missing|
|Message|string|true|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'<br>OBIE doesn't standardise this field|
|Path|string|false|none|Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency|
|Url|string|false|none|URL to help remediate the problem, or provide more information, or to API Reference, or help etc|

<h2 id="tocS_OBErrorResponse1">OBErrorResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaoberrorresponse1"></a>
<a id="schema_OBErrorResponse1"></a>
<a id="tocSoberrorresponse1"></a>
<a id="tocsoberrorresponse1"></a>

```json
{
  "Code": "string",
  "Id": "string",
  "Message": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}

```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|High level textual error code, to help categorize the errors.|
|Id|string|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Message|string|true|none|Brief Error message, e.g., 'There is something wrong with the request parameters provided'|
|Errors|[[OBError1](#schemaoberror1)]|true|none|none|

<h2 id="tocS_OBExternalAccountIdentification4Code">OBExternalAccountIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountidentification4code"></a>
<a id="schema_OBExternalAccountIdentification4Code"></a>
<a id="tocSobexternalaccountidentification4code"></a>
<a id="tocsobexternalaccountidentification4code"></a>

```json
"string"

```

Name of the identification scheme, in a coded form as published in an external list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBExternalAccountRole1Code">OBExternalAccountRole1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountrole1code"></a>
<a id="schema_OBExternalAccountRole1Code"></a>
<a id="tocSobexternalaccountrole1code"></a>
<a id="tocsobexternalaccountrole1code"></a>

```json
"string"

```

A party’s role with respect to the related account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A party’s role with respect to the related account.|

<h2 id="tocS_OBExternalAccountSubType1Code">OBExternalAccountSubType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountsubtype1code"></a>
<a id="schema_OBExternalAccountSubType1Code"></a>
<a id="tocSobexternalaccountsubtype1code"></a>
<a id="tocsobexternalaccountsubtype1code"></a>

```json
"ChargeCard"

```

Specifies the sub type of account (product family group).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the sub type of account (product family group).|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|ChargeCard|
|*anonymous*|CreditCard|
|*anonymous*|CurrentAccount|
|*anonymous*|EMoney|
|*anonymous*|Loan|
|*anonymous*|Mortgage|
|*anonymous*|PrePaidCard|
|*anonymous*|Savings|

<h2 id="tocS_OBExternalAccountType1Code">OBExternalAccountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccounttype1code"></a>
<a id="schema_OBExternalAccountType1Code"></a>
<a id="tocSobexternalaccounttype1code"></a>
<a id="tocsobexternalaccounttype1code"></a>

```json
"Business"

```

Specifies the type of account (personal or business).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the type of account (personal or business).|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Business|
|*anonymous*|Personal|

<h2 id="tocS_OBExternalDirectDebitStatus1Code">OBExternalDirectDebitStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternaldirectdebitstatus1code"></a>
<a id="schema_OBExternalDirectDebitStatus1Code"></a>
<a id="tocSobexternaldirectdebitstatus1code"></a>
<a id="tocsobexternaldirectdebitstatus1code"></a>

```json
"Active"

```

Specifies the status of the direct debit in code form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the status of the direct debit in code form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Active|
|*anonymous*|Inactive|

<h2 id="tocS_OBExternalFinancialInstitutionIdentification4Code">OBExternalFinancialInstitutionIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalfinancialinstitutionidentification4code"></a>
<a id="schema_OBExternalFinancialInstitutionIdentification4Code"></a>
<a id="tocSobexternalfinancialinstitutionidentification4code"></a>
<a id="tocsobexternalfinancialinstitutionidentification4code"></a>

```json
"string"

```

Name of the identification scheme, in a coded form as published in an external list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBExternalSwitchStatusCode">OBExternalSwitchStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalswitchstatuscode"></a>
<a id="schema_OBExternalSwitchStatusCode"></a>
<a id="tocSobexternalswitchstatuscode"></a>
<a id="tocsobexternalswitchstatuscode"></a>

```json
"string"

```

Specifies the switch status for the account, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the switch status for the account, in a coded form.|

<h2 id="tocS_OBExternalLegalStructureType1Code">OBExternalLegalStructureType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternallegalstructuretype1code"></a>
<a id="schema_OBExternalLegalStructureType1Code"></a>
<a id="tocSobexternallegalstructuretype1code"></a>
<a id="tocsobexternallegalstructuretype1code"></a>

```json
"string"

```

Legal standing of the party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Legal standing of the party.|

<h2 id="tocS_OBExternalPartyType1Code">OBExternalPartyType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalpartytype1code"></a>
<a id="schema_OBExternalPartyType1Code"></a>
<a id="tocSobexternalpartytype1code"></a>
<a id="tocsobexternalpartytype1code"></a>

```json
"Delegate"

```

Party type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Party type, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Delegate|
|*anonymous*|Joint|
|*anonymous*|Sole|

<h2 id="tocS_OBExternalScheduleType1Code">OBExternalScheduleType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalscheduletype1code"></a>
<a id="schema_OBExternalScheduleType1Code"></a>
<a id="tocSobexternalscheduletype1code"></a>
<a id="tocsobexternalscheduletype1code"></a>

```json
"Arrival"

```

Specifies the scheduled payment date type requested

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the scheduled payment date type requested|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Arrival|
|*anonymous*|Execution|

<h2 id="tocS_OBExternalStandingOrderStatus1Code">OBExternalStandingOrderStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstandingorderstatus1code"></a>
<a id="schema_OBExternalStandingOrderStatus1Code"></a>
<a id="tocSobexternalstandingorderstatus1code"></a>
<a id="tocsobexternalstandingorderstatus1code"></a>

```json
"Active"

```

Specifies the status of the standing order in code form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the status of the standing order in code form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Active|
|*anonymous*|Inactive|

<h2 id="tocS_OBExternalStatementAmountType1Code">OBExternalStatementAmountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementamounttype1code"></a>
<a id="schema_OBExternalStatementAmountType1Code"></a>
<a id="tocSobexternalstatementamounttype1code"></a>
<a id="tocsobexternalstatementamounttype1code"></a>

```json
"string"

```

Amount type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Amount type, in a coded form.|

<h2 id="tocS_OBExternalStatementBenefitType1Code">OBExternalStatementBenefitType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementbenefittype1code"></a>
<a id="schema_OBExternalStatementBenefitType1Code"></a>
<a id="tocSobexternalstatementbenefittype1code"></a>
<a id="tocsobexternalstatementbenefittype1code"></a>

```json
"string"

```

Benefit type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Benefit type, in a coded form.|

<h2 id="tocS_OBExternalStatementDateTimeType1Code">OBExternalStatementDateTimeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementdatetimetype1code"></a>
<a id="schema_OBExternalStatementDateTimeType1Code"></a>
<a id="tocSobexternalstatementdatetimetype1code"></a>
<a id="tocsobexternalstatementdatetimetype1code"></a>

```json
"string"

```

Date time type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Date time type, in a coded form.|

<h2 id="tocS_OBExternalStatementFeeFrequency1Code">OBExternalStatementFeeFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeefrequency1code"></a>
<a id="schema_OBExternalStatementFeeFrequency1Code"></a>
<a id="tocSobexternalstatementfeefrequency1code"></a>
<a id="tocsobexternalstatementfeefrequency1code"></a>

```json
"string"

```

How frequently the fee is applied to the Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|How frequently the fee is applied to the Account.|

<h2 id="tocS_OBExternalStatementFeeRateType1Code">OBExternalStatementFeeRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeeratetype1code"></a>
<a id="schema_OBExternalStatementFeeRateType1Code"></a>
<a id="tocSobexternalstatementfeeratetype1code"></a>
<a id="tocsobexternalstatementfeeratetype1code"></a>

```json
"string"

```

Description that may be available for the statement fee rate type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Description that may be available for the statement fee rate type.|

<h2 id="tocS_OBExternalStatementFeeType1Code">OBExternalStatementFeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeetype1code"></a>
<a id="schema_OBExternalStatementFeeType1Code"></a>
<a id="tocSobexternalstatementfeetype1code"></a>
<a id="tocsobexternalstatementfeetype1code"></a>

```json
"string"

```

Fee type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Fee type, in a coded form.|

<h2 id="tocS_OBExternalStatementInterestFrequency1Code">OBExternalStatementInterestFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinterestfrequency1code"></a>
<a id="schema_OBExternalStatementInterestFrequency1Code"></a>
<a id="tocSobexternalstatementinterestfrequency1code"></a>
<a id="tocsobexternalstatementinterestfrequency1code"></a>

```json
"string"

```

Specifies the statement fee type requested

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the statement fee type requested|

<h2 id="tocS_OBExternalStatementInterestRateType1Code">OBExternalStatementInterestRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinterestratetype1code"></a>
<a id="schema_OBExternalStatementInterestRateType1Code"></a>
<a id="tocSobexternalstatementinterestratetype1code"></a>
<a id="tocsobexternalstatementinterestratetype1code"></a>

```json
"string"

```

Description that may be available for the statement Interest rate type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Description that may be available for the statement Interest rate type.|

<h2 id="tocS_OBExternalStatementInterestType1Code">OBExternalStatementInterestType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinteresttype1code"></a>
<a id="schema_OBExternalStatementInterestType1Code"></a>
<a id="tocSobexternalstatementinteresttype1code"></a>
<a id="tocsobexternalstatementinteresttype1code"></a>

```json
"string"

```

Interest amount type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Interest amount type, in a coded form.|

<h2 id="tocS_OBExternalStatementRateType1Code">OBExternalStatementRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementratetype1code"></a>
<a id="schema_OBExternalStatementRateType1Code"></a>
<a id="tocSobexternalstatementratetype1code"></a>
<a id="tocsobexternalstatementratetype1code"></a>

```json
"string"

```

Statement rate type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Statement rate type, in a coded form.|

<h2 id="tocS_OBExternalStatementType1Code">OBExternalStatementType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementtype1code"></a>
<a id="schema_OBExternalStatementType1Code"></a>
<a id="tocSobexternalstatementtype1code"></a>
<a id="tocsobexternalstatementtype1code"></a>

```json
"AccountClosure"

```

Statement type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Statement type, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|AccountClosure|
|*anonymous*|AccountOpening|
|*anonymous*|Annual|
|*anonymous*|Interim|
|*anonymous*|RegularPeriodic|

<h2 id="tocS_OBExternalStatementValueType1Code">OBExternalStatementValueType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementvaluetype1code"></a>
<a id="schema_OBExternalStatementValueType1Code"></a>
<a id="tocSobexternalstatementvaluetype1code"></a>
<a id="tocsobexternalstatementvaluetype1code"></a>

```json
"string"

```

Statement value type, in a coded form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Statement value type, in a coded form.|

<h2 id="tocS_OBMerchantDetails1">OBMerchantDetails1</h2>
<!-- backwards compatibility -->
<a id="schemaobmerchantdetails1"></a>
<a id="schema_OBMerchantDetails1"></a>
<a id="tocSobmerchantdetails1"></a>
<a id="tocsobmerchantdetails1"></a>

```json
{
  "MerchantName": "string",
  "MerchantCategoryCode": "stri"
}

```

Details of the merchant involved in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MerchantName|string|false|none|Name by which the merchant is known.|
|MerchantCategoryCode|string|false|none|Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.|

<h2 id="tocS_OBPCAData1">OBPCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobpcadata1"></a>
<a id="schema_OBPCAData1"></a>
<a id="tocSobpcadata1"></a>
<a id="tocsobpcadata1"></a>

```json
{
  "ProductDetails": {
    "Segment": [
      "Basic"
    ],
    "MonthlyMaximumCharge": "string",
    "Notes": [
      "string"
    ]
  },
  "CreditInterest": {
    "TierBandSet": [
      {
        "TierBandMethod": "Tiered",
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "Identification": "string",
            "TierValueMinimum": "string",
            "TierValueMaximum": "string",
            "CalculationFrequency": "PerAcademicTerm",
            "ApplicationFrequency": "PerAcademicTerm",
            "DepositInterestAppliedCoverage": "Tiered",
            "FixedVariableInterestRateType": "Fixed",
            "AER": "string",
            "BankInterestRateType": "LinkedBaseRate",
            "BankInterestRate": "string",
            "Notes": [
              "string"
            ],
            "OtherBankInterestType": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          }
        ]
      }
    ]
  },
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "TierBandMethod": "Tiered",
        "OverdraftType": "Committed",
        "Identification": "string",
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Notes": [
          "string"
        ],
        "OverdraftTierBand": [
          {
            "Identification": "string",
            "TierValueMin": "string",
            "TierValueMax": "string",
            "OverdraftInterestChargingCoverage": "Tiered",
            "BankGuaranteedIndicator": true,
            "EAR": "string",
            "RepresentativeAPR": "string",
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [],
                    "OverdraftControlIndicator": true,
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [],
                    "OtherFeeType": []
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "FeeType": "ArrangedOverdraft",
                    "OverdraftControlIndicator": true,
                    "IncrementalBorrowingAmount": "string",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "LinkedBaseRate",
                    "ApplicationFrequency": "AccountClosing",
                    "CalculationFrequency": "AccountClosing",
                    "Notes": [],
                    "OtherFeeType": {},
                    "OtherFeeRateType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {},
                    "OverdraftFeeChargeCap": {}
                  }
                ]
              }
            ]
          }
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "OverdraftControlIndicator": true,
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "FeeType": "ArrangedOverdraft",
                "OverdraftControlIndicator": true,
                "IncrementalBorrowingAmount": "string",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OverdraftFeeChargeCap": {
                  "FeeType": [
                    "ArrangedOverdraft"
                  ],
                  "OverdraftControlIndicator": true,
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "AcademicTerm",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "OtherFeesCharges": {
    "FeeChargeDetail": [
      {
        "FeeCategory": "Other",
        "FeeType": "ServiceCAccountFee",
        "FeeAmount": "string",
        "FeeRate": "string",
        "FeeRateType": "LinkedBaseRate",
        "ApplicationFrequency": "AccountClosing",
        "CalculationFrequency": "AccountClosing",
        "Notes": [
          "string"
        ],
        "OtherFeeCategoryType": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherFeeType": {
          "Code": "stri",
          "FeeCategory": "Other",
          "Name": "string",
          "Description": "string"
        },
        "OtherFeeRateType": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherApplicationFrequency": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherCalculationFrequency": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "FeeChargeCap": [
          {
            "FeeType": [
              "ServiceCAccountFee"
            ],
            "MinMaxType": "Minimum",
            "FeeCapOccurrence": 0,
            "FeeCapAmount": "string",
            "CappingPeriod": "AcademicTerm",
            "Notes": [
              "string"
            ],
            "OtherFeeType": [
              {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              }
            ]
          }
        ],
        "FeeApplicableRange": {
          "MinimumAmount": "string",
          "MaximumAmount": "string",
          "MinimumRate": "string",
          "MaximumRate": "string"
        }
      }
    ],
    "FeeChargeCap": [
      {
        "FeeType": [
          "ServiceCAccountFee"
        ],
        "MinMaxType": "Minimum",
        "FeeCapOccurrence": 0,
        "FeeCapAmount": "string",
        "CappingPeriod": "AcademicTerm",
        "Notes": [
          "string"
        ],
        "OtherFeeType": [
          {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          }
        ]
      }
    ]
  }
}

```

PCA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductDetails|object|false|none|none|
|» Segment|[string]|false|none|Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.<br><br>Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd <br>With respect to PCA products, they are segmented in relation to different markets that they wish to focus on.|
|» MonthlyMaximumCharge|string|false|none|The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order|
|» Notes|[string]|false|none|Optional additional notes to supplement the Core product details|
|CreditInterest|object|false|none|Details about the interest that may be payable to the PCA account holders|
|» TierBandSet|[object]|true|none|The group of tiers or bands for which credit interest can be applied.|
|»» TierBandMethod|string|true|none|The methodology of how credit interest is charged. It can be:-<br><br>1. Banded<br>Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.<br><br>2. Tiered<br>Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.<br><br>3. Whole<br>The same interest rate is applied irrespective of the PCA balance|
|»» CalculationMethod|string|false|none|Methods of calculating interest|
|»» Destination|string|false|none|Describes whether accrued interest is payable only to the PCA or to another bank account|
|»» Notes|[string]|false|none|Optional additional notes to supplement the Tier Band Set details|
|»» TierBand|[object]|true|none|Tier Band Details|
|»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a PCA.|
|»»» TierValueMinimum|string|true|none|Minimum deposit value for which the credit interest tier applies.|
|»»» TierValueMaximum|string|false|none|Maximum deposit value for which the credit interest tier applies.|
|»»» CalculationFrequency|string|false|none|How often is credit interest calculated for the account.|
|»»» ApplicationFrequency|string|true|none|How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's PCA.|
|»»» DepositInterestAppliedCoverage|string|false|none|Amount on which Interest applied.|
|»»» FixedVariableInterestRateType|string|true|none|Type of interest rate, Fixed or Variable|
|»»» AER|string|true|none|The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. <br><br>Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A|
|»»» BankInterestRateType|string|false|none|Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA.|
|»»» BankInterestRate|string|false|none|Bank Interest for the PCA product|
|»»» Notes|[string]|false|none|Optional additional notes to supplement the Tier Band details|
|»»» OtherBankInterestType|object|false|none|Other interest rate types which are not available in the standard code list|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|Overdraft|object|false|none|Details about Overdraft rates, fees & charges|
|» Notes|[string]|false|none|Associated Notes about the overdraft rates|
|» OverdraftTierBandSet|[object]|true|none|Tier band set details|
|»» TierBandMethod|string|true|none|The methodology of how overdraft is charged. It can be:<br>'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). <br>'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation<br>'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.|
|»» OverdraftType|string|false|none|An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.|
|»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft product.|
|»» AuthorisedIndicator|boolean|false|none|Indicates if the Overdraft is authorised (Y) or unauthorised (N)|
|»» BufferAmount|string|false|none|When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.|
|»» Notes|[string]|false|none|Optional additional notes to supplement the overdraft Tier Band Set details|
|»» OverdraftTierBand|[object]|true|none|Provides overdraft details for a specific tier or band|
|»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft.|
|»»» TierValueMin|string|true|none|Minimum value of Overdraft Tier/Band|
|»»» TierValueMax|string|false|none|Maximum value of Overdraft Tier/Band|
|»»» OverdraftInterestChargingCoverage|string|false|none|Interest charged on whole amount or tiered/banded|
|»»» BankGuaranteedIndicator|boolean|false|none|Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically|
|»»» EAR|string|false|none|EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently<br>used interchangeably), being the actual annual interest rate of an Overdraft.|
|»»» RepresentativeAPR|string|false|none|An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.|
|»»» Notes|[string]|false|none|Optional additional notes to supplement the Tier/band details|
|»»» OverdraftFeesCharges|[object]|false|none|Overdraft fees and charges|
|»»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»»»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OverdraftFeeChargeDetail|[object]|true|none|Details about the fees/charges|
|»»»»» FeeType|string|true|none|Overdraft fee type|
|»»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»»» IncrementalBorrowingAmount|string|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»»» FeeAmount|string|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»» FeeRate|string|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» FeeRateType|string|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» ApplicationFrequency|string|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»»» CalculationFrequency|string|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»»» Notes|[string]|false|none|Free text for capturing any other info related to Overdraft Fees Charge Details|
|»»»»» OtherFeeType|object|false|none|Other Fee type which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherFeeRateType|object|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»»» OverdraftFeeChargeCap|object|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»»»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»»»»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OverdraftFeesCharges|[object]|false|none|Overdraft fees and charges details|
|»»» OverdraftFeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»» OverdraftFeeChargeDetail|[object]|true|none|Details about the fees/charges|
|»»»» FeeType|string|true|none|Overdraft fee type|
|»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»» IncrementalBorrowingAmount|string|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»» FeeAmount|string|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»» FeeRate|string|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»» FeeRateType|string|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»» ApplicationFrequency|string|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»» CalculationFrequency|string|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»» Notes|[string]|false|none|Free text for capturing any other info related to Overdraft Fees Charge Details|
|»»»» OtherFeeType|object|false|none|Other Fee type which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherFeeRateType|object|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherApplicationFrequency|object|false|none|Other application frequencies that are not available in the standard code list|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|string|true|none|Long name associated with the code|
|»»»»» Description|string|true|none|Description to describe the purpose of the code|
|»»»» OverdraftFeeChargeCap|object|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»»»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»»»» OverdraftControlIndicator|boolean|false|none|Specifies for the overdraft control feature/benefit|
|»»»»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»»»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge|
|»»»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»» Notes|[string]|false|none|Notes related to Overdraft fee charge cap|
|»»»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|string|true|none|Long name associated with the code|
|»»»»»» Description|string|true|none|Description to describe the purpose of the code|
|OtherFeesCharges|object|false|none|Contains details of fees and charges which are not associated with either borrowing or features/benefits|
|» FeeChargeDetail|[object]|true|none|Other fees/charges details|
|»» FeeCategory|string|true|none|Categorisation of fees and charges into standard categories.|
|»» FeeType|string|true|none|Fee/Charge Type|
|»» FeeAmount|string|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»» FeeRate|string|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»» FeeRateType|string|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»» ApplicationFrequency|string|true|none|How frequently the fee/charge is applied to the account|
|»» CalculationFrequency|string|false|none|How frequently the fee/charge is calculated|
|»» Notes|[string]|false|none|Optional additional notes to supplement the fee/charge details.|
|»» OtherFeeCategoryType|object|false|none|none|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherFeeType|object|false|none|Other Fee/charge type which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» FeeCategory|string|true|none|Categorisation of fees and charges into standard categories.|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherFeeRateType|object|false|none|Other fee rate type which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherApplicationFrequency|object|false|none|Other application frequencies not covered in the standard code list|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» OtherCalculationFrequency|object|false|none|Other calculation frequency which is not available in standard code set.|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|
|»» FeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»» Notes|[string]|false|none|Free text for adding  extra details for fee charge cap|
|»»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»» Name|string|true|none|Long name associated with the code|
|»»»» Description|string|true|none|Description to describe the purpose of the code|
|»» FeeApplicableRange|object|false|none|Range or amounts or rates for which the fee/charge applies|
|»»» MinimumAmount|string|false|none|Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)|
|»»» MaximumAmount|string|false|none|Maximum Amount on which fee is applicable (where it is expressed as an amount)|
|»»» MinimumRate|string|false|none|Minimum rate on which fee/charge is applicable(where it is expressed as an rate)|
|»»» MaximumRate|string|false|none|Maximum rate on which fee/charge is applicable(where it is expressed as an rate)|
|» FeeChargeCap|[object]|false|none|Details about any caps (maximum charges) that apply to a particular fee/charge|
|»» FeeType|[string]|true|none|Fee/charge type which is being capped|
|»» MinMaxType|string|true|none|Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution|
|»» FeeCapOccurrence|number(float)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»» FeeCapAmount|string|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»» CappingPeriod|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»» Notes|[string]|false|none|Free text for adding  extra details for fee charge cap|
|»» OtherFeeType|[object]|false|none|Other fee type code which is not available in the standard code set|
|»»» Code|string|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»» Name|string|true|none|Long name associated with the code|
|»»» Description|string|true|none|Description to describe the purpose of the code|

#### Enumerated Values

|Property|Value|
|---|---|
|TierBandMethod|Tiered|
|TierBandMethod|Whole|
|CalculationMethod|Compound|
|CalculationMethod|SimpleInterest|
|Destination|PayAway|
|Destination|SelfCredit|
|CalculationFrequency|PerAcademicTerm|
|CalculationFrequency|Daily|
|CalculationFrequency|HalfYearly|
|CalculationFrequency|Monthly|
|CalculationFrequency|Other|
|CalculationFrequency|Quarterly|
|CalculationFrequency|PerStatementDate|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|ApplicationFrequency|PerAcademicTerm|
|ApplicationFrequency|Daily|
|ApplicationFrequency|HalfYearly|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|Other|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|PerStatementDate|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|DepositInterestAppliedCoverage|Tiered|
|DepositInterestAppliedCoverage|Whole|
|FixedVariableInterestRateType|Fixed|
|FixedVariableInterestRateType|Variable|
|BankInterestRateType|LinkedBaseRate|
|BankInterestRateType|Gross|
|BankInterestRateType|Net|
|BankInterestRateType|Other|
|TierBandMethod|Tiered|
|TierBandMethod|Whole|
|TierBandMethod|Banded|
|OverdraftType|Committed|
|OverdraftType|OnDemand|
|OverdraftType|Other|
|OverdraftInterestChargingCoverage|Tiered|
|OverdraftInterestChargingCoverage|Whole|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeType|ArrangedOverdraft|
|FeeType|EmergencyBorrowing|
|FeeType|BorrowingItem|
|FeeType|OverdraftRenewal|
|FeeType|AnnualReview|
|FeeType|OverdraftSetup|
|FeeType|Surcharge|
|FeeType|TempOverdraft|
|FeeType|UnauthorisedBorrowing|
|FeeType|UnauthorisedPaidTrans|
|FeeType|Other|
|FeeType|UnauthorisedUnpaidTrans|
|FeeRateType|LinkedBaseRate|
|FeeRateType|Gross|
|FeeRateType|Net|
|FeeRateType|Other|
|ApplicationFrequency|AccountClosing|
|ApplicationFrequency|AccountOpening|
|ApplicationFrequency|AcademicTerm|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAccountAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|AccountClosing|
|CalculationFrequency|AccountOpening|
|CalculationFrequency|AcademicTerm|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAccountAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeType|ArrangedOverdraft|
|FeeType|EmergencyBorrowing|
|FeeType|BorrowingItem|
|FeeType|OverdraftRenewal|
|FeeType|AnnualReview|
|FeeType|OverdraftSetup|
|FeeType|Surcharge|
|FeeType|TempOverdraft|
|FeeType|UnauthorisedBorrowing|
|FeeType|UnauthorisedPaidTrans|
|FeeType|Other|
|FeeType|UnauthorisedUnpaidTrans|
|FeeRateType|LinkedBaseRate|
|FeeRateType|Gross|
|FeeRateType|Net|
|FeeRateType|Other|
|ApplicationFrequency|AccountClosing|
|ApplicationFrequency|AccountOpening|
|ApplicationFrequency|AcademicTerm|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAccountAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|AccountClosing|
|CalculationFrequency|AccountOpening|
|CalculationFrequency|AcademicTerm|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAccountAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|FeeCategory|Other|
|FeeCategory|Servicing|
|FeeType|ServiceCAccountFee|
|FeeType|ServiceCAccountFeeMonthly|
|FeeType|ServiceCOther|
|FeeType|Other|
|FeeRateType|LinkedBaseRate|
|FeeRateType|Gross|
|FeeRateType|Net|
|FeeRateType|Other|
|ApplicationFrequency|AccountClosing|
|ApplicationFrequency|AccountOpening|
|ApplicationFrequency|AcademicTerm|
|ApplicationFrequency|ChargingPeriod|
|ApplicationFrequency|Daily|
|ApplicationFrequency|PerItem|
|ApplicationFrequency|Monthly|
|ApplicationFrequency|OnAccountAnniversary|
|ApplicationFrequency|Other|
|ApplicationFrequency|PerHour|
|ApplicationFrequency|PerOccurrence|
|ApplicationFrequency|PerSheet|
|ApplicationFrequency|PerTransaction|
|ApplicationFrequency|PerTransactionAmount|
|ApplicationFrequency|PerTransactionPercentage|
|ApplicationFrequency|Quarterly|
|ApplicationFrequency|SixMonthly|
|ApplicationFrequency|StatementMonthly|
|ApplicationFrequency|Weekly|
|ApplicationFrequency|Yearly|
|CalculationFrequency|AccountClosing|
|CalculationFrequency|AccountOpening|
|CalculationFrequency|AcademicTerm|
|CalculationFrequency|ChargingPeriod|
|CalculationFrequency|Daily|
|CalculationFrequency|PerItem|
|CalculationFrequency|Monthly|
|CalculationFrequency|OnAccountAnniversary|
|CalculationFrequency|Other|
|CalculationFrequency|PerHour|
|CalculationFrequency|PerOccurrence|
|CalculationFrequency|PerSheet|
|CalculationFrequency|PerTransaction|
|CalculationFrequency|PerTransactionAmount|
|CalculationFrequency|PerTransactionPercentage|
|CalculationFrequency|Quarterly|
|CalculationFrequency|SixMonthly|
|CalculationFrequency|StatementMonthly|
|CalculationFrequency|Weekly|
|CalculationFrequency|Yearly|
|FeeCategory|Other|
|FeeCategory|Servicing|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|
|MinMaxType|Minimum|
|MinMaxType|Maximum|
|CappingPeriod|AcademicTerm|
|CappingPeriod|Day|
|CappingPeriod|Half Year|
|CappingPeriod|Month|
|CappingPeriod|Quarter|
|CappingPeriod|Week|
|CappingPeriod|Year|

<h2 id="tocS_OBParty2">OBParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobparty2"></a>
<a id="schema_OBParty2"></a>
<a id="tocSobparty2"></a>
<a id="tocsobparty2"></a>

```json
{
  "PartyId": "string",
  "PartyNumber": "string",
  "PartyType": "Delegate",
  "Name": "string",
  "FullLegalName": "string",
  "LegalStructure": "string",
  "BeneficialOwnership": true,
  "AccountRole": "string",
  "EmailAddress": "string",
  "Phone": "string",
  "Mobile": "string",
  "Relationships": {
    "Account": {
      "Related": "http://example.com",
      "Id": "string"
    }
  },
  "Address": [
    {
      "AddressType": "Business",
      "AddressLine": [
        "string"
      ],
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartyId|[PartyId](#schemapartyid)|true|none|A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.|
|PartyNumber|[PartyNumber](#schemapartynumber)|false|none|Number assigned by an agent to identify its customer.|
|PartyType|[OBExternalPartyType1Code](#schemaobexternalpartytype1code)|false|none|Party type, in a coded form.|
|Name|[Name_3](#schemaname_3)|false|none|Name by which a party is known and which is usually used to identify that party.|
|FullLegalName|[FullLegalName](#schemafulllegalname)|false|none|Specifies a character string with a maximum length of 350 characters.|
|LegalStructure|[OBExternalLegalStructureType1Code](#schemaobexternallegalstructuretype1code)|false|none|Legal standing of the party.|
|BeneficialOwnership|boolean|false|none|none|
|AccountRole|[OBExternalAccountRole1Code](#schemaobexternalaccountrole1code)|false|none|A party’s role with respect to the related account.|
|EmailAddress|[EmailAddress](#schemaemailaddress)|false|none|Address for electronic mail (e-mail).|
|Phone|[PhoneNumber_0](#schemaphonenumber_0)|false|none|Collection of information that identifies a phone number, as defined by telecom services.|
|Mobile|[PhoneNumber_1](#schemaphonenumber_1)|false|none|Collection of information that identifies a mobile phone number, as defined by telecom services.|
|Relationships|[OBPartyRelationships1](#schemaobpartyrelationships1)|false|none|The Party's relationships with other resources.|
|Address|[object]|false|none|none|
|» AddressType|[OBAddressTypeCode](#schemaobaddresstypecode)|false|none|Identifies the nature of the postal address.|
|» AddressLine|[string]|false|none|none|
|» StreetName|[StreetName](#schemastreetname)|false|none|Name of a street or thoroughfare.|
|» BuildingNumber|[BuildingNumber](#schemabuildingnumber)|false|none|Number that identifies the position of a building on a street.|
|» PostCode|[PostCode](#schemapostcode)|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|
|» TownName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|
|» CountrySubDivision|[CountrySubDivision](#schemacountrysubdivision)|false|none|Identifies a subdivision of a country eg, state, region, county.|
|» Country|[CountryCode](#schemacountrycode)|true|none|Nation with its own government, occupying a particular territory.|

<h2 id="tocS_OBPartyRelationships1">OBPartyRelationships1</h2>
<!-- backwards compatibility -->
<a id="schemaobpartyrelationships1"></a>
<a id="schema_OBPartyRelationships1"></a>
<a id="tocSobpartyrelationships1"></a>
<a id="tocsobpartyrelationships1"></a>

```json
{
  "Account": {
    "Related": "http://example.com",
    "Id": "string"
  }
}

```

The Party's relationships with other resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|Relationship to the Account resource.|
|» Related|string(uri)|true|none|Absolute URI to the related resource.|
|» Id|string|true|none|Unique identification as assigned by the ASPSP to uniquely identify the related resource.|

<h2 id="tocS_OBPostalAddress6">OBPostalAddress6</h2>
<!-- backwards compatibility -->
<a id="schemaobpostaladdress6"></a>
<a id="schema_OBPostalAddress6"></a>
<a id="tocSobpostaladdress6"></a>
<a id="tocsobpostaladdress6"></a>

```json
{
  "AddressType": "Business",
  "Department": "string",
  "SubDepartment": "string",
  "StreetName": "string",
  "BuildingNumber": "string",
  "PostCode": "string",
  "TownName": "string",
  "CountrySubDivision": "string",
  "Country": "string",
  "AddressLine": [
    "string"
  ]
}

```

Information that locates and identifies a specific address, as defined by postal services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressType|[OBAddressTypeCode](#schemaobaddresstypecode)|false|none|Identifies the nature of the postal address.|
|Department|string|false|none|Identification of a division of a large organisation or building.|
|SubDepartment|string|false|none|Identification of a sub-division of a large organisation or building.|
|StreetName|[StreetName](#schemastreetname)|false|none|Name of a street or thoroughfare.|
|BuildingNumber|[BuildingNumber](#schemabuildingnumber)|false|none|Number that identifies the position of a building on a street.|
|PostCode|[PostCode](#schemapostcode)|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|
|TownName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|
|CountrySubDivision|string|false|none|Identifies a subdivision of a country such as state, region, county.|
|Country|string|false|none|Nation with its own government.|
|AddressLine|[string]|false|none|none|

<h2 id="tocS_OBRate1_0">OBRate1_0</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_0"></a>
<a id="schema_OBRate1_0"></a>
<a id="tocSobrate1_0"></a>
<a id="tocsobrate1_0"></a>

```json
0

```

Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|number|false|none|Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)|

<h2 id="tocS_OBRate1_1">OBRate1_1</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_1"></a>
<a id="schema_OBRate1_1"></a>
<a id="tocSobrate1_1"></a>
<a id="tocsobrate1_1"></a>

```json
0

```

field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|number|false|none|field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.|

<h2 id="tocS_OBReadAccount6">OBReadAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadaccount6"></a>
<a id="schema_OBReadAccount6"></a>
<a id="tocSobreadaccount6"></a>
<a id="tocsobreadaccount6"></a>

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "string",
        "Status": "Deleted",
        "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
        "Currency": "string",
        "AccountType": "Business",
        "AccountSubType": "ChargeCard",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "2019-08-24T14:15:22Z",
        "MaturityDate": "2019-08-24T14:15:22Z",
        "SwitchStatus": "string",
        "Account": [
          {
            "SchemeName": "string",
            "Identification": "string",
            "Name": "string",
            "SecondaryIdentification": "string"
          }
        ],
        "Servicer": {
          "SchemeName": "string",
          "Identification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Account|[[OBAccount6](#schemaobaccount6)]|false|none|[Unambiguous identification of the account to which credit and debit entries are made.]|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadBalance1">OBReadBalance1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbalance1"></a>
<a id="schema_OBReadBalance1"></a>
<a id="tocSobreadbalance1"></a>
<a id="tocsobreadbalance1"></a>

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "DateTime": "2019-08-24T14:15:22Z",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditLine": [
          {
            "Included": true,
            "Type": "Available",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Balance|[object]|true|none|none|
|»» AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|»» CreditDebitIndicator|[OBCreditDebitCode_2](#schemaobcreditdebitcode_2)|true|none|Indicates whether the balance is a credit or a debit balance. <br>Usage: A zero balance is considered to be a credit balance.|
|»» Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|Balance type, in a coded form.|
|»» DateTime|string(date-time)|true|none|Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|»» Amount|object|true|none|Amount of money of the cash balance.|
|»»» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|»»» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|»» CreditLine|[object]|false|none|none|
|»»» Included|boolean|true|none|Indicates whether or not the credit line is included in the balance of the account.<br>Usage: If not present, credit line is not included in the balance amount of the account.|
|»»» Type|string|false|none|Limit type, in a coded form.|
|»»» Amount|object|false|none|Amount of money of the credit line.|
|»»»» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|»»»» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Available|
|Type|Credit|
|Type|Emergency|
|Type|Pre-Agreed|
|Type|Temporary|

<h2 id="tocS_OBReadBeneficiary5">OBReadBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbeneficiary5"></a>
<a id="schema_OBReadBeneficiary5"></a>
<a id="tocSobreadbeneficiary5"></a>
<a id="tocsobreadbeneficiary5"></a>

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryId": "string",
        "BeneficiaryType": "Trusted",
        "Reference": "string",
        "SupplementaryData": {},
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Beneficiary|[[OBBeneficiary5](#schemaobbeneficiary5)]|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadConsent1">OBReadConsent1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsent1"></a>
<a id="schema_OBReadConsent1"></a>
<a id="tocSobreadconsent1"></a>
<a id="tocsobreadconsent1"></a>

```json
{
  "Data": {
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Permissions|[string]|true|none|none|
|» ExpirationDateTime|string(date-time)|false|none|Specified date and time the permissions will expire.<br>If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» TransactionFromDateTime|string(date-time)|false|none|Specified start date and time for the transaction query period.<br>If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» TransactionToDateTime|string(date-time)|false|none|Specified end date and time for the transaction query period.<br>If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

<h2 id="tocS_OBReadConsentResponse1">OBReadConsentResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsentresponse1"></a>
<a id="schema_OBReadConsentResponse1"></a>
<a id="tocSobreadconsentresponse1"></a>
<a id="tocsobreadconsentresponse1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2019-08-24T14:15:22Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "2019-08-24T14:15:22Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "2019-08-24T14:15:22Z",
    "TransactionFromDateTime": "2019-08-24T14:15:22Z",
    "TransactionToDateTime": "2019-08-24T14:15:22Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» ConsentId|string|true|none|Unique identification as assigned to identify the account access consent resource.|
|» CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Status|string|true|none|Specifies the status of consent resource in code form.|
|» StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|true|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Permissions|[string]|true|none|none|
|» ExpirationDateTime|string(date-time)|false|none|Specified date and time the permissions will expire.<br>If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» TransactionFromDateTime|string(date-time)|false|none|Specified start date and time for the transaction query period.<br>If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» TransactionToDateTime|string(date-time)|false|none|Specified end date and time for the transaction query period.<br>If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Authorised|
|Status|AwaitingAuthorisation|
|Status|Rejected|
|Status|Revoked|

<h2 id="tocS_OBReadDataStatement2">OBReadDataStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatastatement2"></a>
<a id="schema_OBReadDataStatement2"></a>
<a id="tocSobreaddatastatement2"></a>
<a id="tocsobreaddatastatement2"></a>

```json
{
  "Statement": [
    {
      "AccountId": "string",
      "StatementId": "string",
      "StatementReference": "string",
      "Type": "AccountClosure",
      "StartDateTime": "2019-08-24T14:15:22Z",
      "EndDateTime": "2019-08-24T14:15:22Z",
      "CreationDateTime": "2019-08-24T14:15:22Z",
      "StatementDescription": [
        "string"
      ],
      "StatementBenefit": [
        {
          "Type": "string",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        }
      ],
      "StatementFee": [
        {
          "Description": "string",
          "CreditDebitIndicator": "Credit",
          "Type": "string",
          "Rate": 0,
          "RateType": "string",
          "Frequency": "string",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        }
      ],
      "StatementInterest": [
        {
          "Description": "string",
          "CreditDebitIndicator": "Credit",
          "Type": "string",
          "Rate": 0,
          "RateType": "string",
          "Frequency": "string",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        }
      ],
      "StatementAmount": [
        {
          "CreditDebitIndicator": "Credit",
          "Type": "string",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        }
      ],
      "StatementDateTime": [
        {
          "DateTime": "2019-08-24T14:15:22Z",
          "Type": "string"
        }
      ],
      "StatementRate": [
        {
          "Rate": "string",
          "Type": "string"
        }
      ],
      "StatementValue": [
        {
          "Value": "string",
          "Type": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|[[OBStatement2](#schemaobstatement2)]|false|none|[Provides further details on a statement resource.]|

<h2 id="tocS_OBReadDataTransaction6">OBReadDataTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatatransaction6"></a>
<a id="schema_OBReadDataTransaction6"></a>
<a id="tocSobreaddatatransaction6"></a>
<a id="tocsobreaddatatransaction6"></a>

```json
{
  "Transaction": [
    {
      "AccountId": "string",
      "TransactionId": "string",
      "TransactionReference": "string",
      "StatementReference": [
        "string"
      ],
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "TransactionMutability": "Mutable",
      "BookingDateTime": "2019-08-24T14:15:22Z",
      "ValueDateTime": "2019-08-24T14:15:22Z",
      "TransactionInformation": "string",
      "AddressLine": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "ChargeAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CurrencyExchange": {
        "SourceCurrency": "string",
        "TargetCurrency": "string",
        "UnitCurrency": "string",
        "ExchangeRate": 0,
        "ContractIdentification": "string",
        "QuotationDate": "2019-08-24T14:15:22Z",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        }
      },
      "BankTransactionCode": {
        "Code": "stri",
        "SubCode": "stri"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "string",
        "Issuer": "string"
      },
      "Balance": {
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        }
      },
      "MerchantDetails": {
        "MerchantName": "string",
        "MerchantCategoryCode": "stri"
      },
      "CreditorAgent": {
        "SchemeName": "string",
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressType": "Business",
          "Department": "string",
          "SubDepartment": "string",
          "StreetName": "string",
          "BuildingNumber": "string",
          "PostCode": "string",
          "TownName": "string",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "CreditorAccount": {
        "SchemeName": "string",
        "Identification": "string",
        "Name": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAgent": {
        "SchemeName": "string",
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressType": "Business",
          "Department": "string",
          "SubDepartment": "string",
          "StreetName": "string",
          "BuildingNumber": "string",
          "PostCode": "string",
          "TownName": "string",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "DebtorAccount": {
        "SchemeName": "string",
        "Identification": "string",
        "Name": "string",
        "SecondaryIdentification": "string"
      },
      "CardInstrument": {
        "CardSchemeName": "AmericanExpress",
        "AuthorisationType": "ConsumerDevice",
        "Name": "string",
        "Identification": "string"
      },
      "SupplementaryData": {}
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transaction|[[OBTransaction6](#schemaobtransaction6)]|false|none|[Provides further details on an entry in the report.]|

<h2 id="tocS_OBReadDirectDebit2">OBReadDirectDebit2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddirectdebit2"></a>
<a id="schema_OBReadDirectDebit2"></a>
<a id="tocSobreaddirectdebit2"></a>
<a id="tocsobreaddirectdebit2"></a>

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "string",
        "DirectDebitId": "string",
        "MandateIdentification": "string",
        "DirectDebitStatusCode": "Active",
        "Name": "string",
        "PreviousPaymentDateTime": "2019-08-24T14:15:22Z",
        "Frequency": "string",
        "PreviousPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» DirectDebit|[object]|false|none|none|
|»» AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|»» DirectDebitId|[DirectDebitId](#schemadirectdebitid)|false|none|A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.|
|»» MandateIdentification|[MandateIdentification](#schemamandateidentification)|true|none|Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.|
|»» DirectDebitStatusCode|[OBExternalDirectDebitStatus1Code](#schemaobexternaldirectdebitstatus1code)|false|none|Specifies the status of the direct debit in code form.|
|»» Name|[Name_2](#schemaname_2)|true|none|Name of Service User.|
|»» PreviousPaymentDateTime|[PreviousPaymentDateTime](#schemapreviouspaymentdatetime)|false|none|Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|»» Frequency|string|false|none|Regularity with which direct debit instructions are to be created and processed.|
|»» PreviousPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_0](#schemaobactiveorhistoriccurrencyandamount_0)|false|none|The amount of the most recent direct debit collection.|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadOffer1">OBReadOffer1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadoffer1"></a>
<a id="schema_OBReadOffer1"></a>
<a id="tocSobreadoffer1"></a>
<a id="tocsobreadoffer1"></a>

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "string",
        "OfferId": "string",
        "OfferType": "BalanceTransfer",
        "Description": "string",
        "StartDateTime": "2019-08-24T14:15:22Z",
        "EndDateTime": "2019-08-24T14:15:22Z",
        "Rate": "string",
        "Value": 0,
        "Term": "string",
        "URL": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Fee": {
          "Amount": "string",
          "Currency": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Offer|[object]|false|none|none|
|»» AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|»» OfferId|string|false|none|A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.|
|»» OfferType|string|false|none|Offer type, in a coded form.|
|»» Description|string|false|none|Further details of the offer.|
|»» StartDateTime|string(date-time)|false|none|Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|»» EndDateTime|string(date-time)|false|none|Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|»» Rate|string|false|none|Rate associated with the offer type.|
|»» Value|integer|false|none|Value associated with the offer type.|
|»» Term|string|false|none|Further details of the term of the offer.|
|»» URL|string|false|none|URL (Uniform Resource Locator) where documentation on the offer can be found|
|»» Amount|object|false|none|Amount of money associated with the offer type.|
|»»» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|»»» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|»» Fee|object|false|none|Fee associated with the offer type.|
|»»» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|»»» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

#### Enumerated Values

|Property|Value|
|---|---|
|OfferType|BalanceTransfer|
|OfferType|LimitIncrease|
|OfferType|MoneyTransfer|
|OfferType|Other|
|OfferType|PromotionalRate|

<h2 id="tocS_OBReadParty2">OBReadParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty2"></a>
<a id="schema_OBReadParty2"></a>
<a id="tocSobreadparty2"></a>
<a id="tocsobreadparty2"></a>

```json
{
  "Data": {
    "Party": {
      "PartyId": "string",
      "PartyNumber": "string",
      "PartyType": "Delegate",
      "Name": "string",
      "FullLegalName": "string",
      "LegalStructure": "string",
      "BeneficialOwnership": true,
      "AccountRole": "string",
      "EmailAddress": "string",
      "Phone": "string",
      "Mobile": "string",
      "Relationships": {
        "Account": {
          "Related": "http://example.com",
          "Id": "string"
        }
      },
      "Address": [
        {
          "AddressType": "Business",
          "AddressLine": [
            "string"
          ],
          "StreetName": "string",
          "BuildingNumber": "string",
          "PostCode": "string",
          "TownName": "string",
          "CountrySubDivision": "string",
          "Country": "string"
        }
      ]
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Party|[OBParty2](#schemaobparty2)|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadParty3">OBReadParty3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty3"></a>
<a id="schema_OBReadParty3"></a>
<a id="tocSobreadparty3"></a>
<a id="tocsobreadparty3"></a>

```json
{
  "Data": {
    "Party": [
      {
        "PartyId": "string",
        "PartyNumber": "string",
        "PartyType": "Delegate",
        "Name": "string",
        "FullLegalName": "string",
        "LegalStructure": "string",
        "BeneficialOwnership": true,
        "AccountRole": "string",
        "EmailAddress": "string",
        "Phone": "string",
        "Mobile": "string",
        "Relationships": {
          "Account": {
            "Related": "http://example.com",
            "Id": "string"
          }
        },
        "Address": [
          {
            "AddressType": "Business",
            "AddressLine": [
              "string"
            ],
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string"
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» Party|[[OBParty2](#schemaobparty2)]|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadProduct2">OBReadProduct2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadproduct2"></a>
<a id="schema_OBReadProduct2"></a>
<a id="tocSobreadproduct2"></a>
<a id="tocsobreadproduct2"></a>

```json
{
  "Data": {
    "Product": [
      {
        "ProductName": "string",
        "ProductId": "string",
        "AccountId": "string",
        "SecondaryProductId": "string",
        "ProductType": "BusinessCurrentAccount",
        "MarketingStateId": "string",
        "OtherProductType": {
          "Name": "string",
          "Description": "string",
          "ProductDetails": {
            "Segment": [
              "GEAS"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            }
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "INBA",
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "FQAT",
                    "ApplicationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "AER": "string",
                    "BankInterestRateType": "INBB",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "OverdraftType": "OVCO",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "PACT",
                    "OverdraftInterestChargingCoverage": "INBA",
                    "BankGuaranteedIndicator": true,
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "LoanInterest": {
            "Notes": [
              "string"
            ],
            "LoanInterestTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "Identification": "string",
                "CalculationMethod": "ITCO",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "LoanInterestTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "MinTermPeriod": "PACT",
                    "TierValueMaxTerm": 0,
                    "MaxTermPeriod": "PACT",
                    "FixedVariableInterestRateType": "INFI",
                    "RepAPR": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "LoanProviderInterestRate": "string",
                    "Notes": [],
                    "OtherLoanProviderInterestRateType": {},
                    "LoanInterestFeesCharges": []
                  }
                ],
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeDetail": [],
                    "LoanInterestFeeChargeCap": []
                  }
                ]
              }
            ]
          },
          "Repayment": {
            "RepaymentType": "USBA",
            "RepaymentFrequency": "SMDA",
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherRepaymentType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherAmountType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeDetail": [
                {
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              ],
              "RepaymentFeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            },
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "TTEL",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "string",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "FCOT",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {}
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            }
          ],
          "SupplementaryData": {}
        },
        "BCA": {
          "ProductDetails": {
            "Segment": [
              "ClientAccount"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Banded",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "Daily",
                    "ApplicationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "Gross",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Banded",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "Day",
                    "OverdraftInterestChargingCoverage": "Banded",
                    "BankGuaranteedIndicator": true,
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "Electronic",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "Other",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {}
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "FeeCategory": "Other",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "Day",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {}
                  ]
                }
              ]
            }
          ]
        },
        "PCA": {
          "ProductDetails": {
            "Segment": [
              "Basic"
            ],
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "PerAcademicTerm",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "BankInterestRate": "string",
                    "Notes": [],
                    "OtherBankInterestType": {},
                    "OtherApplicationFrequency": {},
                    "OtherCalculationFrequency": {}
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "Notes": [],
                    "OverdraftFeesCharges": []
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [],
                    "OverdraftFeeChargeDetail": []
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeDetail": [
              {
                "FeeCategory": "Other",
                "FeeType": "ServiceCAccountFee",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "FeeCategory": "Other",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "FeeChargeCap": [
                  {
                    "FeeType": [],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [],
                    "OtherFeeType": []
                  }
                ],
                "FeeApplicableRange": {
                  "MinimumAmount": "string",
                  "MaximumAmount": "string",
                  "MinimumRate": "string",
                  "MaximumRate": "string"
                }
              }
            ],
            "FeeChargeCap": [
              {
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

Product details of Other Product which is not avaiable in the standard list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|Aligning with the read write specs structure.|
|» Product|[object]|false|none|none|
|»» ProductName|string|false|none|The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.|
|»» ProductId|string|false|none|The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.|
|»» AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|»» SecondaryProductId|string|false|none|Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.|
|»» ProductType|string|true|none|Product type : Personal Current Account, Business Current Account|
|»» MarketingStateId|string|false|none|Unique and unambiguous identification of a  Product Marketing State.|
|»» OtherProductType|object|false|none|Other product type details associated with the account.|
|»»» Name|string|true|none|Long name associated with the product|
|»»» Description|string|true|none|Description of the Product associated with the account|
|»»» ProductDetails|object|false|none|none|
|»»»» Segment|[string]|false|none|none|
|»»»» FeeFreeLength|integer|false|none|The length/duration of the fee free period|
|»»»» FeeFreeLengthPeriod|string|false|none|The unit of period (days, weeks, months etc.) of the promotional length|
|»»»» MonthlyMaximumCharge|string|false|none|The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order|
|»»»» Notes|[string]|false|none|none|
|»»»» OtherSegment|[OB_OtherCodeType1_0](#schemaob_othercodetype1_0)|false|none|none|
|»»» CreditInterest|object|false|none|Details about the interest that may be payable to the Account holders|
|»»»» TierBandSet|[object]|true|none|none|
|»»»»» TierBandMethod|string|true|none|The methodology of how credit interest is paid/applied. It can be:-<br>1. Banded<br>Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.<br>2. Tiered<br>Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.<br>3. Whole<br>The same interest rate is applied irrespective of the product holder's account balance|
|»»»»» CalculationMethod|[OB_InterestCalculationMethod1Code](#schemaob_interestcalculationmethod1code)|false|none|Methods of calculating interest|
|»»»»» Destination|string|true|none|Describes whether accrued interest is payable only to the BCA or to another bank account|
|»»»»» Notes|[string]|false|none|none|
|»»»»» OtherCalculationMethod|[OB_OtherCodeType1_0](#schemaob_othercodetype1_0)|false|none|none|
|»»»»» OtherDestination|[OB_OtherCodeType1_0](#schemaob_othercodetype1_0)|false|none|none|
|»»»»» TierBand|[object]|true|none|none|
|»»»»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for the Product.|
|»»»»»» TierValueMinimum|string|true|none|Minimum deposit value for which the credit interest tier applies.|
|»»»»»» TierValueMaximum|string|false|none|Maximum deposit value for which the credit interest tier applies.|
|»»»»»» CalculationFrequency|string|false|none|How often is credit interest calculated for the account.|
|»»»»»» ApplicationFrequency|string|true|none|How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's account.|
|»»»»»» DepositInterestAppliedCoverage|string|false|none|Amount on which Interest applied.|
|»»»»»» FixedVariableInterestRateType|[OB_InterestFixedVariableType1Code](#schemaob_interestfixedvariabletype1code)|true|none|Type of interest rate, Fixed or Variable|
|»»»»»» AER|string|true|none|The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. <br>Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A|
|»»»»»» BankInterestRateType|string|false|none|Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account.|
|»»»»»» BankInterestRate|string|false|none|Bank Interest for the product|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OtherBankInterestType|object|false|none|Other interest rate types which are not available in the standard code list|
|»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_1](#schemaob_othercodetype1_1)|false|none|Other application frequencies that are not available in the standard code list|
|»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_2](#schemaob_othercodetype1_2)|false|none|Other calculation frequency which is not available in the standard code set.|
|»»» Overdraft|object|false|none|Borrowing details|
|»»»» Notes|[string]|false|none|none|
|»»»» OverdraftTierBandSet|[object]|true|none|none|
|»»»»» TierBandMethod|string|true|none|The methodology of how overdraft is charged. It can be:<br>'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). <br>'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation<br>'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.|
|»»»»» OverdraftType|string|false|none|An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.|
|»»»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft product.|
|»»»»» AuthorisedIndicator|boolean|false|none|Indicates if the Overdraft is authorised (Y) or unauthorised (N)|
|»»»»» BufferAmount|string|false|none|When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.|
|»»»»» Notes|[string]|false|none|none|
|»»»»» OverdraftTierBand|[object]|true|none|none|
|»»»»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a overdraft.|
|»»»»»» TierValueMin|string|true|none|Minimum value of Overdraft Tier/Band|
|»»»»»» TierValueMax|string|false|none|Maximum value of Overdraft Tier/Band|
|»»»»»» EAR|string|false|none|EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently<br>used interchangeably), being the actual annual interest rate of an Overdraft.|
|»»»»»» AgreementLengthMin|integer|false|none|Specifies the minimum length of a band for a fixed overdraft agreement|
|»»»»»» AgreementLengthMax|integer|false|none|Specifies the maximum length of a band for a fixed overdraft agreement|
|»»»»»» AgreementPeriod|string|false|none|Specifies the period of a fixed length overdraft agreement|
|»»»»»» OverdraftInterestChargingCoverage|string|false|none|Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is �2k and the interest tiers are:- 0-�500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the �Whole� of the account balance,  and in the 2nd that it is �Tiered�.|
|»»»»»» BankGuaranteedIndicator|boolean|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OverdraftFeesCharges|[object]|false|none|none|
|»»»»»»» OverdraftFeeChargeCap|[object]|false|none|none|
|»»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»»» FeeCapOccurrence|[Number_0](#schemanumber_0)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|
|»»»»»»»» FeeCapAmount|[OB_Amount1_0](#schemaob_amount1_0)|false|none|Cap amount charged for a fee/charge|
|»»»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»»» OverdraftFeeChargeDetail|[object]|true|none|none|
|»»»»»»»» FeeType|[OB_OverdraftFeeType1Code](#schemaob_overdraftfeetype1code)|true|none|Overdraft fee type|
|»»»»»»»» NegotiableIndicator|boolean|false|none|Indicates whether fee and charges are negotiable|
|»»»»»»»» OverdraftControlIndicator|boolean|false|none|Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.|
|»»»»»»»» IncrementalBorrowingAmount|[OB_Amount1_1](#schemaob_amount1_1)|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»»»»»» FeeAmount|[OB_Amount1_2](#schemaob_amount1_2)|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»»» FeeRate|[OB_Rate1_0](#schemaob_rate1_0)|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»»» FeeRateType|[OB_InterestRateType1Code_0](#schemaob_interestratetype1code_0)|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_0](#schemaob_feefrequency1code_0)|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»»»»»» CalculationFrequency|[OB_FeeFrequency1Code_1](#schemaob_feefrequency1code_1)|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»» OverdraftFeeChargeCap|[object]|false|none|none|
|»»»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»»»» FeeCapOccurrence|[Number_0](#schemanumber_0)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|
|»»»»»»»»» FeeCapAmount|[OB_Amount1_0](#schemaob_amount1_0)|false|none|Cap amount charged for a fee/charge|
|»»»»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»»»» OtherFeeType|[OB_OtherCodeType1_3](#schemaob_othercodetype1_3)|false|none|Other Fee type which is not available in the standard code set|
|»»»»»»»» OtherFeeRateType|[OB_OtherCodeType1_4](#schemaob_othercodetype1_4)|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_1](#schemaob_othercodetype1_1)|false|none|Other application frequencies that are not available in the standard code list|
|»»»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_2](#schemaob_othercodetype1_2)|false|none|Other calculation frequency which is not available in the standard code set.|
|»»»»» OverdraftFeesCharges|[object]|false|none|none|
|»»»»»» OverdraftFeeChargeCap|[object]|false|none|none|
|»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»» FeeCapOccurrence|[Number_0](#schemanumber_0)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|
|»»»»»»» FeeCapAmount|[OB_Amount1_0](#schemaob_amount1_0)|false|none|Cap amount charged for a fee/charge|
|»»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»» Notes|[string]|false|none|none|
|»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»» OverdraftFeeChargeDetail|[object]|true|none|none|
|»»»»»»» FeeType|[OB_OverdraftFeeType1Code](#schemaob_overdraftfeetype1code)|true|none|Overdraft fee type|
|»»»»»»» NegotiableIndicator|boolean|false|none|Indicates whether fee and charges are negotiable|
|»»»»»»» OverdraftControlIndicator|boolean|false|none|Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.|
|»»»»»»» IncrementalBorrowingAmount|[OB_Amount1_1](#schemaob_amount1_1)|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|
|»»»»»»» FeeAmount|[OB_Amount1_2](#schemaob_amount1_2)|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»» FeeRate|[OB_Rate1_0](#schemaob_rate1_0)|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»» FeeRateType|[OB_InterestRateType1Code_0](#schemaob_interestratetype1code_0)|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_0](#schemaob_feefrequency1code_0)|true|none|Frequency at which the overdraft charge is applied to the account|
|»»»»»»» CalculationFrequency|[OB_FeeFrequency1Code_1](#schemaob_feefrequency1code_1)|false|none|How often is the overdraft fee/charge calculated for the account.|
|»»»»»»» Notes|[string]|false|none|none|
|»»»»»»» OverdraftFeeChargeCap|[object]|false|none|none|
|»»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»»» FeeCapOccurrence|[Number_0](#schemanumber_0)|false|none|Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.|
|»»»»»»»» FeeCapAmount|[OB_Amount1_0](#schemaob_amount1_0)|false|none|Cap amount charged for a fee/charge|
|»»»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»»» OtherFeeType|[OB_OtherCodeType1_3](#schemaob_othercodetype1_3)|false|none|Other Fee type which is not available in the standard code set|
|»»»»»»» OtherFeeRateType|[OB_OtherCodeType1_4](#schemaob_othercodetype1_4)|false|none|Other fee rate type code which is not available in the standard code set|
|»»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_1](#schemaob_othercodetype1_1)|false|none|Other application frequencies that are not available in the standard code list|
|»»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_2](#schemaob_othercodetype1_2)|false|none|Other calculation frequency which is not available in the standard code set.|
|»»» LoanInterest|object|false|none|Details about the interest that may be payable to the SME Loan holders|
|»»»» Notes|[string]|false|none|none|
|»»»» LoanInterestTierBandSet|[object]|true|none|none|
|»»»»» TierBandMethod|string|true|none|The methodology of how credit interest is charged. It can be:-<br>1. Banded<br>Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.<br>2. Tiered<br>Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.<br>3. Whole<br>The same interest rate is applied irrespective of the SME Loan balance|
|»»»»» Identification|string|false|none|Loan interest tierbandset identification. Used by  loan providers for internal use purpose.|
|»»»»» CalculationMethod|[OB_InterestCalculationMethod1Code](#schemaob_interestcalculationmethod1code)|true|none|Methods of calculating interest|
|»»»»» Notes|[string]|false|none|none|
|»»»»» OtherCalculationMethod|[OB_OtherCodeType1_0](#schemaob_othercodetype1_0)|false|none|none|
|»»»»» LoanInterestTierBand|[object]|true|none|none|
|»»»»»» Identification|string|false|none|Unique and unambiguous identification of a  Tier Band for a SME Loan.|
|»»»»»» TierValueMinimum|string|true|none|Minimum loan value for which the loan interest tier applies.|
|»»»»»» TierValueMaximum|string|false|none|Maximum loan value for which the loan interest tier applies.|
|»»»»»» TierValueMinTerm|integer|true|none|Minimum loan term for which the loan interest tier applies.|
|»»»»»» MinTermPeriod|string|true|none|The unit of period (days, weeks, months etc.) of the Minimum Term|
|»»»»»» TierValueMaxTerm|integer|false|none|Maximum loan term for which the loan interest tier applies.|
|»»»»»» MaxTermPeriod|string|false|none|The unit of period (days, weeks, months etc.) of the Maximum Term|
|»»»»»» FixedVariableInterestRateType|[OB_InterestFixedVariableType1Code](#schemaob_interestfixedvariabletype1code)|true|none|Type of interest rate, Fixed or Variable|
|»»»»»» RepAPR|string|true|none|The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. <br>For SME Loan, this APR is the representative APR which includes any account fees.|
|»»»»»» LoanProviderInterestRateType|string|false|none|Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan.|
|»»»»»» LoanProviderInterestRate|string|false|none|Loan provider Interest for the SME Loan product|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OtherLoanProviderInterestRateType|object|false|none|Other loan interest rate types which are not available in the standard code list|
|»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»»» LoanInterestFeesCharges|[object]|false|none|none|
|»»»»»»» LoanInterestFeeChargeDetail|[object]|true|none|none|
|»»»»»»»» FeeType|[OB_FeeType1Code](#schemaob_feetype1code)|true|none|Fee/Charge Type|
|»»»»»»»» NegotiableIndicator|boolean|false|none|Fee/charge which is usually negotiable rather than a fixed amount|
|»»»»»»»» FeeAmount|[OB_Amount1_3](#schemaob_amount1_3)|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»»» FeeRate|[OB_Rate1_1](#schemaob_rate1_1)|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»»» FeeRateType|[OB_InterestRateType1Code_1](#schemaob_interestratetype1code_1)|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_2](#schemaob_feefrequency1code_2)|true|none|How frequently the fee/charge is applied to the account|
|»»»»»»»» CalculationFrequency|[OB_FeeFrequency1Code_3](#schemaob_feefrequency1code_3)|true|none|How frequently the fee/charge is calculated|
|»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»» OtherFeeType|[OB_OtherFeeChargeDetailType](#schemaob_otherfeechargedetailtype)|false|none|Other Fee/charge type which is not available in the standard code set|
|»»»»»»»» OtherFeeRateType|[OB_OtherCodeType1_5](#schemaob_othercodetype1_5)|false|none|Other fee rate type which is not in the standard rate type list|
|»»»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_6](#schemaob_othercodetype1_6)|false|none|Other application frequencies not covered in the standard code list|
|»»»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_7](#schemaob_othercodetype1_7)|false|none|Other calculation frequency which is not available in standard code set.|
|»»»»»»» LoanInterestFeeChargeCap|[object]|false|none|none|
|»»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»»» FeeCapOccurrence|[Number_1](#schemanumber_1)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»»»»» FeeCapAmount|[OB_Amount1_4](#schemaob_amount1_4)|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»»» CappingPeriod|[OB_FeeFrequency1Code_4](#schemaob_feefrequency1code_4)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»»» Notes|[string]|false|none|none|
|»»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»» LoanInterestFeesCharges|[object]|false|none|none|
|»»»»»» LoanInterestFeeChargeDetail|[object]|true|none|none|
|»»»»»»» FeeType|[OB_FeeType1Code](#schemaob_feetype1code)|true|none|Fee/Charge Type|
|»»»»»»» NegotiableIndicator|boolean|false|none|Fee/charge which is usually negotiable rather than a fixed amount|
|»»»»»»» FeeAmount|[OB_Amount1_3](#schemaob_amount1_3)|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»» FeeRate|[OB_Rate1_1](#schemaob_rate1_1)|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»» FeeRateType|[OB_InterestRateType1Code_1](#schemaob_interestratetype1code_1)|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_2](#schemaob_feefrequency1code_2)|true|none|How frequently the fee/charge is applied to the account|
|»»»»»»» CalculationFrequency|[OB_FeeFrequency1Code_3](#schemaob_feefrequency1code_3)|true|none|How frequently the fee/charge is calculated|
|»»»»»»» Notes|[string]|false|none|none|
|»»»»»»» OtherFeeType|[OB_OtherFeeChargeDetailType](#schemaob_otherfeechargedetailtype)|false|none|Other Fee/charge type which is not available in the standard code set|
|»»»»»»» OtherFeeRateType|[OB_OtherCodeType1_5](#schemaob_othercodetype1_5)|false|none|Other fee rate type which is not in the standard rate type list|
|»»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_6](#schemaob_othercodetype1_6)|false|none|Other application frequencies not covered in the standard code list|
|»»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_7](#schemaob_othercodetype1_7)|false|none|Other calculation frequency which is not available in standard code set.|
|»»»»»» LoanInterestFeeChargeCap|[object]|false|none|none|
|»»»»»»» FeeType|[string]|true|none|none|
|»»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»»» FeeCapOccurrence|[Number_1](#schemanumber_1)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»»»» FeeCapAmount|[OB_Amount1_4](#schemaob_amount1_4)|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»»» CappingPeriod|[OB_FeeFrequency1Code_4](#schemaob_feefrequency1code_4)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»»» Notes|[string]|false|none|none|
|»»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»» Repayment|object|false|none|Repayment details of the Loan product|
|»»»» RepaymentType|string|false|none|Repayment type|
|»»»» RepaymentFrequency|string|false|none|Repayment frequency|
|»»»» AmountType|string|false|none|The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc|
|»»»» Notes|[string]|false|none|none|
|»»»» OtherRepaymentType|object|false|none|Other repayment type which is not in the standard code list|
|»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»» OtherRepaymentFrequency|object|false|none|Other repayment frequency which is not in the standard code list|
|»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»» OtherAmountType|object|false|none|Other amount type which is not in the standard code list|
|»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»» RepaymentFeeCharges|object|false|none|Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.|
|»»»»» RepaymentFeeChargeDetail|[object]|true|none|none|
|»»»»»» FeeType|[OB_FeeType1Code](#schemaob_feetype1code)|true|none|Fee/Charge Type|
|»»»»»» NegotiableIndicator|boolean|false|none|Fee/charge which is usually negotiable rather than a fixed amount|
|»»»»»» FeeAmount|[OB_Amount1_3](#schemaob_amount1_3)|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»» FeeRate|[OB_Rate1_1](#schemaob_rate1_1)|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»» FeeRateType|[OB_InterestRateType1Code_1](#schemaob_interestratetype1code_1)|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_2](#schemaob_feefrequency1code_2)|true|none|How frequently the fee/charge is applied to the account|
|»»»»»» CalculationFrequency|[OB_FeeFrequency1Code_3](#schemaob_feefrequency1code_3)|true|none|How frequently the fee/charge is calculated|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OtherFeeType|[OB_OtherFeeChargeDetailType](#schemaob_otherfeechargedetailtype)|false|none|Other Fee/charge type which is not available in the standard code set|
|»»»»»» OtherFeeRateType|[OB_OtherCodeType1_8](#schemaob_othercodetype1_8)|false|none|Other fee rate type which is not available in the standard code set|
|»»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_6](#schemaob_othercodetype1_6)|false|none|Other application frequencies not covered in the standard code list|
|»»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_7](#schemaob_othercodetype1_7)|false|none|Other calculation frequency which is not available in standard code set.|
|»»»»» RepaymentFeeChargeCap|[object]|false|none|none|
|»»»»»» FeeType|[string]|true|none|none|
|»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»» FeeCapOccurrence|[Number_1](#schemanumber_1)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»»» FeeCapAmount|[OB_Amount1_4](#schemaob_amount1_4)|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»» RepaymentHoliday|[object]|false|none|none|
|»»»»» MaxHolidayLength|integer|false|none|The maximum length/duration of a Repayment Holiday|
|»»»»» MaxHolidayPeriod|string|false|none|The unit of period (days, weeks, months etc.) of the repayment holiday|
|»»»»» Notes|[string]|false|none|none|
|»»» OtherFeesCharges|[object]|false|none|none|
|»»»» TariffType|string|false|none|TariffType which defines the fee and charges.|
|»»»» TariffName|string|false|none|Name of the tariff|
|»»»» OtherTariffType|object|false|none|Other tariff type which is not in the standard list.|
|»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»» FeeChargeDetail|[object]|true|none|none|
|»»»»» FeeCategory|[OB_FeeCategory1Code](#schemaob_feecategory1code)|true|none|Categorisation of fees and charges into standard categories.|
|»»»»» FeeType|[OB_FeeType1Code](#schemaob_feetype1code)|true|none|Fee/Charge Type|
|»»»»» NegotiableIndicator|boolean|false|none|Fee/charge which is usually negotiable rather than a fixed amount|
|»»»»» FeeAmount|[OB_Amount1_3](#schemaob_amount1_3)|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»» FeeRate|[OB_Rate1_1](#schemaob_rate1_1)|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» FeeRateType|[OB_InterestRateType1Code_1](#schemaob_interestratetype1code_1)|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|
|»»»»» ApplicationFrequency|[OB_FeeFrequency1Code_2](#schemaob_feefrequency1code_2)|true|none|How frequently the fee/charge is applied to the account|
|»»»»» CalculationFrequency|[OB_FeeFrequency1Code_3](#schemaob_feefrequency1code_3)|false|none|How frequently the fee/charge is calculated|
|»»»»» Notes|[string]|false|none|none|
|»»»»» FeeChargeCap|[object]|false|none|none|
|»»»»»» FeeType|[string]|true|none|none|
|»»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»»» FeeCapOccurrence|[Number_1](#schemanumber_1)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»»» FeeCapAmount|[OB_Amount1_4](#schemaob_amount1_4)|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»»» Notes|[string]|false|none|none|
|»»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»»»» OtherFeeCategoryType|[OB_OtherCodeType1_0](#schemaob_othercodetype1_0)|false|none|none|
|»»»»» OtherFeeType|[OB_OtherFeeChargeDetailType](#schemaob_otherfeechargedetailtype)|false|none|Other Fee/charge type which is not available in the standard code set|
|»»»»» OtherFeeRateType|[OB_OtherCodeType1_8](#schemaob_othercodetype1_8)|false|none|Other fee rate type which is not available in the standard code set|
|»»»»» OtherApplicationFrequency|[OB_OtherCodeType1_6](#schemaob_othercodetype1_6)|false|none|Other application frequencies not covered in the standard code list|
|»»»»» OtherCalculationFrequency|[OB_OtherCodeType1_7](#schemaob_othercodetype1_7)|false|none|Other calculation frequency which is not available in standard code set.|
|»»»»» FeeApplicableRange|object|false|none|Range or amounts or rates for which the fee/charge applies|
|»»»»»» MinimumAmount|string|false|none|Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)|
|»»»»»» MaximumAmount|string|false|none|Maximum Amount on which fee is applicable (where it is expressed as an amount)|
|»»»»»» MinimumRate|string|false|none|Minimum rate on which fee/charge is applicable(where it is expressed as an rate)|
|»»»»»» MaximumRate|string|false|none|Maximum rate on which fee/charge is applicable(where it is expressed as an rate)|
|»»»» FeeChargeCap|[object]|false|none|none|
|»»»»» FeeType|[string]|true|none|none|
|»»»»» MinMaxType|[OB_MinMaxType1Code](#schemaob_minmaxtype1code)|true|none|Min Max type|
|»»»»» FeeCapOccurrence|[Number_1](#schemanumber_1)|false|none|fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount|
|»»»»» FeeCapAmount|[OB_Amount1_4](#schemaob_amount1_4)|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|
|»»»»» CappingPeriod|[OB_Period1Code](#schemaob_period1code)|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|
|»»»»» Notes|[string]|false|none|none|
|»»»»» OtherFeeType|[object]|false|none|none|
|»»»»»» Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|»»»»»» Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|»»»»»» Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|»»» SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|»» BCA|[OBBCAData1](#schemaobbcadata1)|false|none|none|
|»» PCA|[OBPCAData1](#schemaobpcadata1)|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

#### Enumerated Values

|Property|Value|
|---|---|
|ProductType|BusinessCurrentAccount|
|ProductType|CommercialCreditCard|
|ProductType|Other|
|ProductType|PersonalCurrentAccount|
|ProductType|SMELoan|
|FeeFreeLengthPeriod|PACT|
|FeeFreeLengthPeriod|PDAY|
|FeeFreeLengthPeriod|PHYR|
|FeeFreeLengthPeriod|PMTH|
|FeeFreeLengthPeriod|PQTR|
|FeeFreeLengthPeriod|PWEK|
|FeeFreeLengthPeriod|PYER|
|TierBandMethod|INBA|
|TierBandMethod|INTI|
|TierBandMethod|INWH|
|Destination|INOT|
|Destination|INPA|
|Destination|INSC|
|CalculationFrequency|FQAT|
|CalculationFrequency|FQDY|
|CalculationFrequency|FQHY|
|CalculationFrequency|FQMY|
|CalculationFrequency|FQOT|
|CalculationFrequency|FQQY|
|CalculationFrequency|FQSD|
|CalculationFrequency|FQWY|
|CalculationFrequency|FQYY|
|ApplicationFrequency|FQAT|
|ApplicationFrequency|FQDY|
|ApplicationFrequency|FQHY|
|ApplicationFrequency|FQMY|
|ApplicationFrequency|FQOT|
|ApplicationFrequency|FQQY|
|ApplicationFrequency|FQSD|
|ApplicationFrequency|FQWY|
|ApplicationFrequency|FQYY|
|DepositInterestAppliedCoverage|INBA|
|DepositInterestAppliedCoverage|INTI|
|DepositInterestAppliedCoverage|INWH|
|BankInterestRateType|INBB|
|BankInterestRateType|INFR|
|BankInterestRateType|INGR|
|BankInterestRateType|INLR|
|BankInterestRateType|INNE|
|BankInterestRateType|INOT|
|TierBandMethod|INBA|
|TierBandMethod|INTI|
|TierBandMethod|INWH|
|OverdraftType|OVCO|
|OverdraftType|OVOD|
|OverdraftType|OVOT|
|AgreementPeriod|PACT|
|AgreementPeriod|PDAY|
|AgreementPeriod|PHYR|
|AgreementPeriod|PMTH|
|AgreementPeriod|PQTR|
|AgreementPeriod|PWEK|
|AgreementPeriod|PYER|
|OverdraftInterestChargingCoverage|INBA|
|OverdraftInterestChargingCoverage|INTI|
|OverdraftInterestChargingCoverage|INWH|
|TierBandMethod|INBA|
|TierBandMethod|INTI|
|TierBandMethod|INWH|
|MinTermPeriod|PACT|
|MinTermPeriod|PDAY|
|MinTermPeriod|PHYR|
|MinTermPeriod|PMTH|
|MinTermPeriod|PQTR|
|MinTermPeriod|PWEK|
|MinTermPeriod|PYER|
|MaxTermPeriod|PACT|
|MaxTermPeriod|PDAY|
|MaxTermPeriod|PHYR|
|MaxTermPeriod|PMTH|
|MaxTermPeriod|PQTR|
|MaxTermPeriod|PWEK|
|MaxTermPeriod|PYER|
|LoanProviderInterestRateType|INBB|
|LoanProviderInterestRateType|INFR|
|LoanProviderInterestRateType|INGR|
|LoanProviderInterestRateType|INLR|
|LoanProviderInterestRateType|INNE|
|LoanProviderInterestRateType|INOT|
|RepaymentType|USBA|
|RepaymentType|USBU|
|RepaymentType|USCI|
|RepaymentType|USCS|
|RepaymentType|USER|
|RepaymentType|USFA|
|RepaymentType|USFB|
|RepaymentType|USFI|
|RepaymentType|USIO|
|RepaymentType|USOT|
|RepaymentType|USPF|
|RepaymentType|USRW|
|RepaymentType|USSL|
|RepaymentFrequency|SMDA|
|RepaymentFrequency|SMFL|
|RepaymentFrequency|SMFO|
|RepaymentFrequency|SMHY|
|RepaymentFrequency|SMMO|
|RepaymentFrequency|SMOT|
|RepaymentFrequency|SMQU|
|RepaymentFrequency|SMWE|
|RepaymentFrequency|SMYE|
|AmountType|RABD|
|AmountType|RABL|
|AmountType|RACI|
|AmountType|RAFC|
|AmountType|RAIO|
|AmountType|RALT|
|AmountType|USOT|
|MaxHolidayPeriod|PACT|
|MaxHolidayPeriod|PDAY|
|MaxHolidayPeriod|PHYR|
|MaxHolidayPeriod|PMTH|
|MaxHolidayPeriod|PQTR|
|MaxHolidayPeriod|PWEK|
|MaxHolidayPeriod|PYER|
|TariffType|TTEL|
|TariffType|TTMX|
|TariffType|TTOT|

<h2 id="tocS_OBReadScheduledPayment3">OBReadScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadscheduledpayment3"></a>
<a id="schema_OBReadScheduledPayment3"></a>
<a id="tocSobreadscheduledpayment3"></a>
<a id="tocsobreadscheduledpayment3"></a>

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "ScheduledPaymentId": "string",
        "ScheduledPaymentDateTime": "2019-08-24T14:15:22Z",
        "ScheduledType": "Arrival",
        "Reference": "string",
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» ScheduledPayment|[[OBScheduledPayment3](#schemaobscheduledpayment3)]|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStandingOrder6">OBReadStandingOrder6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstandingorder6"></a>
<a id="schema_OBReadStandingOrder6"></a>
<a id="tocSobreadstandingorder6"></a>
<a id="tocsobreadstandingorder6"></a>

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "StandingOrderId": "string",
        "Frequency": "string",
        "Reference": "string",
        "FirstPaymentDateTime": "2019-08-24T14:15:22Z",
        "NextPaymentDateTime": "2019-08-24T14:15:22Z",
        "LastPaymentDateTime": "2019-08-24T14:15:22Z",
        "FinalPaymentDateTime": "2019-08-24T14:15:22Z",
        "NumberOfPayments": "string",
        "StandingOrderStatusCode": "Active",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|» StandingOrder|[[OBStandingOrder6](#schemaobstandingorder6)]|false|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStatement2">OBReadStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstatement2"></a>
<a id="schema_OBReadStatement2"></a>
<a id="tocSobreadstatement2"></a>
<a id="tocsobreadstatement2"></a>

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "StatementId": "string",
        "StatementReference": "string",
        "Type": "AccountClosure",
        "StartDateTime": "2019-08-24T14:15:22Z",
        "EndDateTime": "2019-08-24T14:15:22Z",
        "CreationDateTime": "2019-08-24T14:15:22Z",
        "StatementDescription": [
          "string"
        ],
        "StatementBenefit": [
          {
            "Type": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "string",
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Rate": 0,
            "RateType": "string",
            "Frequency": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "string",
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Rate": 0,
            "RateType": "string",
            "Frequency": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "string",
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2019-08-24T14:15:22Z",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "string"
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataStatement2](#schemaobreaddatastatement2)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadTransaction6">OBReadTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadtransaction6"></a>
<a id="schema_OBReadTransaction6"></a>
<a id="tocSobreadtransaction6"></a>
<a id="tocsobreadtransaction6"></a>

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "string"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "Booked",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "2019-08-24T14:15:22Z",
        "ValueDateTime": "2019-08-24T14:15:22Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "2019-08-24T14:15:22Z",
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          }
        },
        "BankTransactionCode": {
          "Code": "stri",
          "SubCode": "stri"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable",
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressType": "Business",
            "Department": "string",
            "SubDepartment": "string",
            "StreetName": "string",
            "BuildingNumber": "string",
            "PostCode": "string",
            "TownName": "string",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "string",
          "SecondaryIdentification": "string"
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "2019-08-24T14:15:22Z",
    "LastAvailableDateTime": "2019-08-24T14:15:22Z"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataTransaction6](#schemaobreaddatatransaction6)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBRisk2">OBRisk2</h2>
<!-- backwards compatibility -->
<a id="schemaobrisk2"></a>
<a id="schema_OBRisk2"></a>
<a id="tocSobrisk2"></a>
<a id="tocsobrisk2"></a>

```json
{}

```

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

### Properties

*None*

<h2 id="tocS_OBScheduledPayment3">OBScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3"></a>
<a id="schema_OBScheduledPayment3"></a>
<a id="tocSobscheduledpayment3"></a>
<a id="tocsobscheduledpayment3"></a>

```json
{
  "AccountId": "string",
  "ScheduledPaymentId": "string",
  "ScheduledPaymentDateTime": "2019-08-24T14:15:22Z",
  "ScheduledType": "Arrival",
  "Reference": "string",
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|

<h2 id="tocS_OBScheduledPayment3Basic">OBScheduledPayment3Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3basic"></a>
<a id="schema_OBScheduledPayment3Basic"></a>
<a id="tocSobscheduledpayment3basic"></a>
<a id="tocsobscheduledpayment3basic"></a>

```json
{
  "AccountId": "string",
  "ScheduledPaymentId": "string",
  "ScheduledPaymentDateTime": "2019-08-24T14:15:22Z",
  "ScheduledType": "Arrival",
  "Reference": "string",
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|

<h2 id="tocS_OBScheduledPayment3Detail">OBScheduledPayment3Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3detail"></a>
<a id="schema_OBScheduledPayment3Detail"></a>
<a id="tocSobscheduledpayment3detail"></a>
<a id="tocsobscheduledpayment3detail"></a>

```json
{
  "AccountId": "string",
  "ScheduledPaymentId": "string",
  "ScheduledPaymentDateTime": "2019-08-24T14:15:22Z",
  "ScheduledType": "Arrival",
  "Reference": "string",
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|

<h2 id="tocS_OBStandingOrder6">OBStandingOrder6</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6"></a>
<a id="schema_OBStandingOrder6"></a>
<a id="tocSobstandingorder6"></a>
<a id="tocsobstandingorder6"></a>

```json
{
  "AccountId": "string",
  "StandingOrderId": "string",
  "Frequency": "string",
  "Reference": "string",
  "FirstPaymentDateTime": "2019-08-24T14:15:22Z",
  "NextPaymentDateTime": "2019-08-24T14:15:22Z",
  "LastPaymentDateTime": "2019-08-24T14:15:22Z",
  "FinalPaymentDateTime": "2019-08-24T14:15:22Z",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "Active",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "SupplementaryData": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])<br>QtrDay:(ENGLISH|SCOTTISH|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBStandingOrder6Basic">OBStandingOrder6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6basic"></a>
<a id="schema_OBStandingOrder6Basic"></a>
<a id="tocSobstandingorder6basic"></a>
<a id="tocsobstandingorder6basic"></a>

```json
{
  "AccountId": "string",
  "StandingOrderId": "string",
  "Frequency": "string",
  "Reference": "string",
  "FirstPaymentDateTime": "2019-08-24T14:15:22Z",
  "NextPaymentDateTime": "2019-08-24T14:15:22Z",
  "LastPaymentDateTime": "2019-08-24T14:15:22Z",
  "FinalPaymentDateTime": "2019-08-24T14:15:22Z",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "Active",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "SupplementaryData": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])<br>QtrDay:(ENGLISH|SCOTTISH|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBStandingOrder6Detail">OBStandingOrder6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6detail"></a>
<a id="schema_OBStandingOrder6Detail"></a>
<a id="tocSobstandingorder6detail"></a>
<a id="tocsobstandingorder6detail"></a>

```json
{
  "AccountId": "string",
  "StandingOrderId": "string",
  "Frequency": "string",
  "Reference": "string",
  "FirstPaymentDateTime": "2019-08-24T14:15:22Z",
  "NextPaymentDateTime": "2019-08-24T14:15:22Z",
  "LastPaymentDateTime": "2019-08-24T14:15:22Z",
  "FinalPaymentDateTime": "2019-08-24T14:15:22Z",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "Active",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "SupplementaryData": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])<br>QtrDay:(ENGLISH|SCOTTISH|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBStatement2">OBStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2"></a>
<a id="schema_OBStatement2"></a>
<a id="tocSobstatement2"></a>
<a id="tocsobstatement2"></a>

```json
{
  "AccountId": "string",
  "StatementId": "string",
  "StatementReference": "string",
  "Type": "AccountClosure",
  "StartDateTime": "2019-08-24T14:15:22Z",
  "EndDateTime": "2019-08-24T14:15:22Z",
  "CreationDateTime": "2019-08-24T14:15:22Z",
  "StatementDescription": [
    "string"
  ],
  "StatementBenefit": [
    {
      "Type": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementAmount": [
    {
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2019-08-24T14:15:22Z",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "string"
    }
  ]
}

```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|» Type|[OBExternalStatementBenefitType1Code](#schemaobexternalstatementbenefittype1code)|true|none|Benefit type, in a coded form.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_5](#schemaobactiveorhistoriccurrencyandamount_5)|true|none|Amount of money associated with the statement benefit type.|
|StatementFee|[object]|false|none|none|
|» Description|[Description_1](#schemadescription_1)|false|none|Description that may be available for the statement fee.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementFeeType1Code](#schemaobexternalstatementfeetype1code)|true|none|Fee type, in a coded form.|
|» Rate|[OBRate1_0](#schemaobrate1_0)|false|none|Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)|
|» RateType|[OBExternalStatementFeeRateType1Code](#schemaobexternalstatementfeeratetype1code)|false|none|Description that may be available for the statement fee rate type.|
|» Frequency|[OBExternalStatementFeeFrequency1Code](#schemaobexternalstatementfeefrequency1code)|false|none|How frequently the fee is applied to the Account.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_6](#schemaobactiveorhistoriccurrencyandamount_6)|true|none|Amount of money associated with the statement fee type.|
|StatementInterest|[object]|false|none|none|
|» Description|[Description_2](#schemadescription_2)|false|none|Description that may be available for the statement interest.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementInterestType1Code](#schemaobexternalstatementinteresttype1code)|true|none|Interest amount type, in a coded form.|
|» Rate|[OBRate1_1](#schemaobrate1_1)|false|none|field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.|
|» RateType|[OBExternalStatementInterestRateType1Code](#schemaobexternalstatementinterestratetype1code)|false|none|Description that may be available for the statement Interest rate type.|
|» Frequency|[OBExternalStatementInterestFrequency1Code](#schemaobexternalstatementinterestfrequency1code)|false|none|Specifies the statement fee type requested|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_7](#schemaobactiveorhistoriccurrencyandamount_7)|true|none|Amount of money associated with the statement interest amount type.|
|StatementAmount|[object]|false|none|none|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementAmountType1Code](#schemaobexternalstatementamounttype1code)|true|none|Amount type, in a coded form.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_8](#schemaobactiveorhistoriccurrencyandamount_8)|true|none|Amount of money associated with the amount type.|
|StatementDateTime|[object]|false|none|none|
|» DateTime|[DateTime](#schemadatetime)|true|none|Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Type|[OBExternalStatementDateTimeType1Code](#schemaobexternalstatementdatetimetype1code)|true|none|Date time type, in a coded form.|
|StatementRate|[object]|false|none|none|
|» Rate|[Rate](#schemarate)|true|none|Rate associated with the statement rate type.|
|» Type|[OBExternalStatementRateType1Code](#schemaobexternalstatementratetype1code)|true|none|Statement rate type, in a coded form.|
|StatementValue|[object]|false|none|none|
|» Value|[Value](#schemavalue)|true|none|Value associated with the statement value type.|
|» Type|[OBExternalStatementValueType1Code](#schemaobexternalstatementvaluetype1code)|true|none|Statement value type, in a coded form.|

<h2 id="tocS_OBStatement2Basic">OBStatement2Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2basic"></a>
<a id="schema_OBStatement2Basic"></a>
<a id="tocSobstatement2basic"></a>
<a id="tocsobstatement2basic"></a>

```json
{
  "AccountId": "string",
  "StatementId": "string",
  "StatementReference": "string",
  "Type": "AccountClosure",
  "StartDateTime": "2019-08-24T14:15:22Z",
  "EndDateTime": "2019-08-24T14:15:22Z",
  "CreationDateTime": "2019-08-24T14:15:22Z",
  "StatementDescription": [
    "string"
  ],
  "StatementBenefit": [
    {
      "Type": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2019-08-24T14:15:22Z",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "string"
    }
  ]
}

```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|» Type|[OBExternalStatementBenefitType1Code](#schemaobexternalstatementbenefittype1code)|true|none|Benefit type, in a coded form.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_5](#schemaobactiveorhistoriccurrencyandamount_5)|true|none|Amount of money associated with the statement benefit type.|
|StatementFee|[object]|false|none|none|
|» Description|[Description_1](#schemadescription_1)|false|none|Description that may be available for the statement fee.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementFeeType1Code](#schemaobexternalstatementfeetype1code)|true|none|Fee type, in a coded form.|
|» Rate|[OBRate1_0](#schemaobrate1_0)|false|none|Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)|
|» RateType|[OBExternalStatementFeeRateType1Code](#schemaobexternalstatementfeeratetype1code)|false|none|Description that may be available for the statement fee rate type.|
|» Frequency|[OBExternalStatementFeeFrequency1Code](#schemaobexternalstatementfeefrequency1code)|false|none|How frequently the fee is applied to the Account.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_6](#schemaobactiveorhistoriccurrencyandamount_6)|true|none|Amount of money associated with the statement fee type.|
|StatementInterest|[object]|false|none|none|
|» Description|[Description_2](#schemadescription_2)|false|none|Description that may be available for the statement interest.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementInterestType1Code](#schemaobexternalstatementinteresttype1code)|true|none|Interest amount type, in a coded form.|
|» Rate|[OBRate1_1](#schemaobrate1_1)|false|none|field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.|
|» RateType|[OBExternalStatementInterestRateType1Code](#schemaobexternalstatementinterestratetype1code)|false|none|Description that may be available for the statement Interest rate type.|
|» Frequency|[OBExternalStatementInterestFrequency1Code](#schemaobexternalstatementinterestfrequency1code)|false|none|Specifies the statement fee type requested|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_7](#schemaobactiveorhistoriccurrencyandamount_7)|true|none|Amount of money associated with the statement interest amount type.|
|StatementDateTime|[object]|false|none|none|
|» DateTime|[DateTime](#schemadatetime)|true|none|Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Type|[OBExternalStatementDateTimeType1Code](#schemaobexternalstatementdatetimetype1code)|true|none|Date time type, in a coded form.|
|StatementRate|[object]|false|none|none|
|» Rate|[Rate](#schemarate)|true|none|Rate associated with the statement rate type.|
|» Type|[OBExternalStatementRateType1Code](#schemaobexternalstatementratetype1code)|true|none|Statement rate type, in a coded form.|
|StatementValue|[object]|false|none|none|
|» Value|[Value](#schemavalue)|true|none|Value associated with the statement value type.|
|» Type|[OBExternalStatementValueType1Code](#schemaobexternalstatementvaluetype1code)|true|none|Statement value type, in a coded form.|

<h2 id="tocS_OBStatement2Detail">OBStatement2Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2detail"></a>
<a id="schema_OBStatement2Detail"></a>
<a id="tocSobstatement2detail"></a>
<a id="tocsobstatement2detail"></a>

```json
{
  "AccountId": "string",
  "StatementId": "string",
  "StatementReference": "string",
  "Type": "AccountClosure",
  "StartDateTime": "2019-08-24T14:15:22Z",
  "EndDateTime": "2019-08-24T14:15:22Z",
  "CreationDateTime": "2019-08-24T14:15:22Z",
  "StatementDescription": [
    "string"
  ],
  "StatementBenefit": [
    {
      "Type": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "string",
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Rate": 0,
      "RateType": "string",
      "Frequency": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementAmount": [
    {
      "CreditDebitIndicator": "Credit",
      "Type": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2019-08-24T14:15:22Z",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "string"
    }
  ]
}

```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|» Type|[OBExternalStatementBenefitType1Code](#schemaobexternalstatementbenefittype1code)|true|none|Benefit type, in a coded form.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_5](#schemaobactiveorhistoriccurrencyandamount_5)|true|none|Amount of money associated with the statement benefit type.|
|StatementFee|[object]|false|none|none|
|» Description|[Description_1](#schemadescription_1)|false|none|Description that may be available for the statement fee.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementFeeType1Code](#schemaobexternalstatementfeetype1code)|true|none|Fee type, in a coded form.|
|» Rate|[OBRate1_0](#schemaobrate1_0)|false|none|Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)|
|» RateType|[OBExternalStatementFeeRateType1Code](#schemaobexternalstatementfeeratetype1code)|false|none|Description that may be available for the statement fee rate type.|
|» Frequency|[OBExternalStatementFeeFrequency1Code](#schemaobexternalstatementfeefrequency1code)|false|none|How frequently the fee is applied to the Account.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_6](#schemaobactiveorhistoriccurrencyandamount_6)|true|none|Amount of money associated with the statement fee type.|
|StatementInterest|[object]|false|none|none|
|» Description|[Description_2](#schemadescription_2)|false|none|Description that may be available for the statement interest.|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementInterestType1Code](#schemaobexternalstatementinteresttype1code)|true|none|Interest amount type, in a coded form.|
|» Rate|[OBRate1_1](#schemaobrate1_1)|false|none|field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.|
|» RateType|[OBExternalStatementInterestRateType1Code](#schemaobexternalstatementinterestratetype1code)|false|none|Description that may be available for the statement Interest rate type.|
|» Frequency|[OBExternalStatementInterestFrequency1Code](#schemaobexternalstatementinterestfrequency1code)|false|none|Specifies the statement fee type requested|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_7](#schemaobactiveorhistoriccurrencyandamount_7)|true|none|Amount of money associated with the statement interest amount type.|
|StatementAmount|[object]|false|none|none|
|» CreditDebitIndicator|[OBCreditDebitCode_0](#schemaobcreditdebitcode_0)|true|none|Indicates whether the amount is a credit or a debit. <br>Usage: A zero amount is considered to be a credit amount.|
|» Type|[OBExternalStatementAmountType1Code](#schemaobexternalstatementamounttype1code)|true|none|Amount type, in a coded form.|
|» Amount|[OBActiveOrHistoricCurrencyAndAmount_8](#schemaobactiveorhistoriccurrencyandamount_8)|true|none|Amount of money associated with the amount type.|
|StatementDateTime|[object]|false|none|none|
|» DateTime|[DateTime](#schemadatetime)|true|none|Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Type|[OBExternalStatementDateTimeType1Code](#schemaobexternalstatementdatetimetype1code)|true|none|Date time type, in a coded form.|
|StatementRate|[object]|false|none|none|
|» Rate|[Rate](#schemarate)|true|none|Rate associated with the statement rate type.|
|» Type|[OBExternalStatementRateType1Code](#schemaobexternalstatementratetype1code)|true|none|Statement rate type, in a coded form.|
|StatementValue|[object]|false|none|none|
|» Value|[Value](#schemavalue)|true|none|Value associated with the statement value type.|
|» Type|[OBExternalStatementValueType1Code](#schemaobexternalstatementvaluetype1code)|true|none|Statement value type, in a coded form.|

<h2 id="tocS_OBSupplementaryData1">OBSupplementaryData1</h2>
<!-- backwards compatibility -->
<a id="schemaobsupplementarydata1"></a>
<a id="schema_OBSupplementaryData1"></a>
<a id="tocSobsupplementarydata1"></a>
<a id="tocsobsupplementarydata1"></a>

```json
{}

```

Additional information that can not be captured in the structured fields and/or any other specific block.

### Properties

*None*

<h2 id="tocS_OBTransaction6">OBTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6"></a>
<a id="schema_OBTransaction6"></a>
<a id="tocSobtransaction6"></a>
<a id="tocsobtransaction6"></a>

```json
{
  "AccountId": "string",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "string"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "Booked",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "2019-08-24T14:15:22Z",
  "ValueDateTime": "2019-08-24T14:15:22Z",
  "TransactionInformation": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "2019-08-24T14:15:22Z",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    }
  },
  "BankTransactionCode": {
    "Code": "stri",
    "SubCode": "stri"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "Balance": {
    "CreditDebitIndicator": "Credit",
    "Type": "ClosingAvailable",
    "Amount": {
      "Amount": "string",
      "Currency": "string"
    }
  },
  "MerchantDetails": {
    "MerchantName": "string",
    "MerchantCategoryCode": "stri"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "DebtorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "DebtorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {}
}

```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|[Unique reference for the statement. This reference may be optionally populated if available.]|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a crebit transaction.|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBTransaction6Basic">OBTransaction6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6basic"></a>
<a id="schema_OBTransaction6Basic"></a>
<a id="tocSobtransaction6basic"></a>
<a id="tocsobtransaction6basic"></a>

```json
{
  "AccountId": "string",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "string"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "Booked",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "2019-08-24T14:15:22Z",
  "ValueDateTime": "2019-08-24T14:15:22Z",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "2019-08-24T14:15:22Z",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    }
  },
  "BankTransactionCode": {
    "Code": "stri",
    "SubCode": "stri"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {}
}

```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|[Unique reference for the statement. This reference may be optionally populated if available.]|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBTransaction6Detail">OBTransaction6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6detail"></a>
<a id="schema_OBTransaction6Detail"></a>
<a id="tocSobtransaction6detail"></a>
<a id="tocsobtransaction6detail"></a>

```json
{
  "AccountId": "string",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "string"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "Booked",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "2019-08-24T14:15:22Z",
  "ValueDateTime": "2019-08-24T14:15:22Z",
  "TransactionInformation": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "2019-08-24T14:15:22Z",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    }
  },
  "BankTransactionCode": {
    "Code": "stri",
    "SubCode": "stri"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "Balance": {
    "CreditDebitIndicator": "Credit",
    "Type": "ClosingAvailable",
    "Amount": {
      "Amount": "string",
      "Currency": "string"
    }
  },
  "MerchantDetails": {
    "MerchantName": "string",
    "MerchantCategoryCode": "stri"
  },
  "CreditorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "DebtorAgent": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressType": "Business",
      "Department": "string",
      "SubDepartment": "string",
      "StreetName": "string",
      "BuildingNumber": "string",
      "PostCode": "string",
      "TownName": "string",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "DebtorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "string",
    "SecondaryIdentification": "string"
  },
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {}
}

```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|[Unique reference for the statement. This reference may be optionally populated if available.]|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a crebit transaction.|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

<h2 id="tocS_OBTransactionCardInstrument1">OBTransactionCardInstrument1</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncardinstrument1"></a>
<a id="schema_OBTransactionCardInstrument1"></a>
<a id="tocSobtransactioncardinstrument1"></a>
<a id="tocsobtransactioncardinstrument1"></a>

```json
{
  "CardSchemeName": "AmericanExpress",
  "AuthorisationType": "ConsumerDevice",
  "Name": "string",
  "Identification": "string"
}

```

Set of elements to describe the card instrument used in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CardSchemeName|string|true|none|Name of the card scheme.|
|AuthorisationType|string|false|none|The card authorisation type.|
|Name|string|false|none|Name of the cardholder using the card instrument.|
|Identification|string|false|none|Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.|

#### Enumerated Values

|Property|Value|
|---|---|
|CardSchemeName|AmericanExpress|
|CardSchemeName|Diners|
|CardSchemeName|Discover|
|CardSchemeName|MasterCard|
|CardSchemeName|VISA|
|AuthorisationType|ConsumerDevice|
|AuthorisationType|Contactless|
|AuthorisationType|None|
|AuthorisationType|PIN|

<h2 id="tocS_OBTransactionCashBalance">OBTransactionCashBalance</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncashbalance"></a>
<a id="schema_OBTransactionCashBalance"></a>
<a id="tocSobtransactioncashbalance"></a>
<a id="tocsobtransactioncashbalance"></a>

```json
{
  "CreditDebitIndicator": "Credit",
  "Type": "ClosingAvailable",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  }
}

```

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreditDebitIndicator|[OBCreditDebitCode_2](#schemaobcreditdebitcode_2)|true|none|Indicates whether the balance is a credit or a debit balance. <br>Usage: A zero balance is considered to be a credit balance.|
|Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|Balance type, in a coded form.|
|Amount|object|true|none|Amount of money of the cash balance after a transaction entry is applied to the account..|
|» Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OB_Amount1_0">OB_Amount1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_0"></a>
<a id="schema_OB_Amount1_0"></a>
<a id="tocSob_amount1_0"></a>
<a id="tocsob_amount1_0"></a>

```json
"string"

```

Cap amount charged for a fee/charge

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Cap amount charged for a fee/charge|

<h2 id="tocS_OB_Amount1_1">OB_Amount1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_1"></a>
<a id="schema_OB_Amount1_1"></a>
<a id="tocSob_amount1_1"></a>
<a id="tocsob_amount1_1"></a>

```json
"string"

```

Every additional tranche of an overdraft balance to which an overdraft fee is applied

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Every additional tranche of an overdraft balance to which an overdraft fee is applied|

<h2 id="tocS_OB_Amount1_2">OB_Amount1_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_2"></a>
<a id="schema_OB_Amount1_2"></a>
<a id="tocSob_amount1_2"></a>
<a id="tocsob_amount1_2"></a>

```json
"string"

```

Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)|

<h2 id="tocS_OB_Amount1_3">OB_Amount1_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_3"></a>
<a id="schema_OB_Amount1_3"></a>
<a id="tocSob_amount1_3"></a>
<a id="tocsob_amount1_3"></a>

```json
"string"

```

Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|

<h2 id="tocS_OB_Amount1_4">OB_Amount1_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_4"></a>
<a id="schema_OB_Amount1_4"></a>
<a id="tocSob_amount1_4"></a>
<a id="tocsob_amount1_4"></a>

```json
"string"

```

Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)|

<h2 id="tocS_OB_CodeMnemonic">OB_CodeMnemonic</h2>
<!-- backwards compatibility -->
<a id="schemaob_codemnemonic"></a>
<a id="schema_OB_CodeMnemonic"></a>
<a id="tocSob_codemnemonic"></a>
<a id="tocsob_codemnemonic"></a>

```json
"string"

```

The four letter Mnemonic used within an XML file to identify a code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The four letter Mnemonic used within an XML file to identify a code|

<h2 id="tocS_OB_FeeCategory1Code">OB_FeeCategory1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_feecategory1code"></a>
<a id="schema_OB_FeeCategory1Code"></a>
<a id="tocSob_feecategory1code"></a>
<a id="tocsob_feecategory1code"></a>

```json
"FCOT"

```

Categorisation of fees and charges into standard categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Categorisation of fees and charges into standard categories.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FCOT|
|*anonymous*|FCRE|
|*anonymous*|FCSV|

<h2 id="tocS_OB_FeeFrequency1Code_0">OB_FeeFrequency1Code_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_0"></a>
<a id="schema_OB_FeeFrequency1Code_0"></a>
<a id="tocSob_feefrequency1code_0"></a>
<a id="tocsob_feefrequency1code_0"></a>

```json
"FEAC"

```

Frequency at which the overdraft charge is applied to the account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Frequency at which the overdraft charge is applied to the account|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEAC|
|*anonymous*|FEAO|
|*anonymous*|FECP|
|*anonymous*|FEDA|
|*anonymous*|FEHO|
|*anonymous*|FEI|
|*anonymous*|FEMO|
|*anonymous*|FEOA|
|*anonymous*|FEOT|
|*anonymous*|FEPC|
|*anonymous*|FEPH|
|*anonymous*|FEPO|
|*anonymous*|FEPS|
|*anonymous*|FEPT|
|*anonymous*|FEPTA|
|*anonymous*|FEPTP|
|*anonymous*|FEQU|
|*anonymous*|FESM|
|*anonymous*|FEST|
|*anonymous*|FEWE|
|*anonymous*|FEYE|

<h2 id="tocS_OB_FeeFrequency1Code_1">OB_FeeFrequency1Code_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_1"></a>
<a id="schema_OB_FeeFrequency1Code_1"></a>
<a id="tocSob_feefrequency1code_1"></a>
<a id="tocsob_feefrequency1code_1"></a>

```json
"FEAC"

```

How often is the overdraft fee/charge calculated for the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|How often is the overdraft fee/charge calculated for the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEAC|
|*anonymous*|FEAO|
|*anonymous*|FECP|
|*anonymous*|FEDA|
|*anonymous*|FEHO|
|*anonymous*|FEI|
|*anonymous*|FEMO|
|*anonymous*|FEOA|
|*anonymous*|FEOT|
|*anonymous*|FEPC|
|*anonymous*|FEPH|
|*anonymous*|FEPO|
|*anonymous*|FEPS|
|*anonymous*|FEPT|
|*anonymous*|FEPTA|
|*anonymous*|FEPTP|
|*anonymous*|FEQU|
|*anonymous*|FESM|
|*anonymous*|FEST|
|*anonymous*|FEWE|
|*anonymous*|FEYE|

<h2 id="tocS_OB_FeeFrequency1Code_2">OB_FeeFrequency1Code_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_2"></a>
<a id="schema_OB_FeeFrequency1Code_2"></a>
<a id="tocSob_feefrequency1code_2"></a>
<a id="tocsob_feefrequency1code_2"></a>

```json
"FEAC"

```

How frequently the fee/charge is applied to the account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|How frequently the fee/charge is applied to the account|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEAC|
|*anonymous*|FEAO|
|*anonymous*|FECP|
|*anonymous*|FEDA|
|*anonymous*|FEHO|
|*anonymous*|FEI|
|*anonymous*|FEMO|
|*anonymous*|FEOA|
|*anonymous*|FEOT|
|*anonymous*|FEPC|
|*anonymous*|FEPH|
|*anonymous*|FEPO|
|*anonymous*|FEPS|
|*anonymous*|FEPT|
|*anonymous*|FEPTA|
|*anonymous*|FEPTP|
|*anonymous*|FEQU|
|*anonymous*|FESM|
|*anonymous*|FEST|
|*anonymous*|FEWE|
|*anonymous*|FEYE|

<h2 id="tocS_OB_FeeFrequency1Code_3">OB_FeeFrequency1Code_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_3"></a>
<a id="schema_OB_FeeFrequency1Code_3"></a>
<a id="tocSob_feefrequency1code_3"></a>
<a id="tocsob_feefrequency1code_3"></a>

```json
"FEAC"

```

How frequently the fee/charge is calculated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|How frequently the fee/charge is calculated|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEAC|
|*anonymous*|FEAO|
|*anonymous*|FECP|
|*anonymous*|FEDA|
|*anonymous*|FEHO|
|*anonymous*|FEI|
|*anonymous*|FEMO|
|*anonymous*|FEOA|
|*anonymous*|FEOT|
|*anonymous*|FEPC|
|*anonymous*|FEPH|
|*anonymous*|FEPO|
|*anonymous*|FEPS|
|*anonymous*|FEPT|
|*anonymous*|FEPTA|
|*anonymous*|FEPTP|
|*anonymous*|FEQU|
|*anonymous*|FESM|
|*anonymous*|FEST|
|*anonymous*|FEWE|
|*anonymous*|FEYE|

<h2 id="tocS_OB_FeeFrequency1Code_4">OB_FeeFrequency1Code_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_4"></a>
<a id="schema_OB_FeeFrequency1Code_4"></a>
<a id="tocSob_feefrequency1code_4"></a>
<a id="tocsob_feefrequency1code_4"></a>

```json
"FEAC"

```

Period e.g. day, week, month etc. for which the fee/charge is capped

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEAC|
|*anonymous*|FEAO|
|*anonymous*|FECP|
|*anonymous*|FEDA|
|*anonymous*|FEHO|
|*anonymous*|FEI|
|*anonymous*|FEMO|
|*anonymous*|FEOA|
|*anonymous*|FEOT|
|*anonymous*|FEPC|
|*anonymous*|FEPH|
|*anonymous*|FEPO|
|*anonymous*|FEPS|
|*anonymous*|FEPT|
|*anonymous*|FEPTA|
|*anonymous*|FEPTP|
|*anonymous*|FEQU|
|*anonymous*|FESM|
|*anonymous*|FEST|
|*anonymous*|FEWE|
|*anonymous*|FEYE|

<h2 id="tocS_OB_FeeType1Code">OB_FeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_feetype1code"></a>
<a id="schema_OB_FeeType1Code"></a>
<a id="tocSob_feetype1code"></a>
<a id="tocsob_feetype1code"></a>

```json
"FEPF"

```

Fee/Charge Type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Fee/Charge Type|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FEPF|
|*anonymous*|FTOT|
|*anonymous*|FYAF|
|*anonymous*|FYAM|
|*anonymous*|FYAQ|
|*anonymous*|FYCP|
|*anonymous*|FYDB|
|*anonymous*|FYMI|
|*anonymous*|FYXX|

<h2 id="tocS_OB_InterestCalculationMethod1Code">OB_InterestCalculationMethod1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestcalculationmethod1code"></a>
<a id="schema_OB_InterestCalculationMethod1Code"></a>
<a id="tocSob_interestcalculationmethod1code"></a>
<a id="tocsob_interestcalculationmethod1code"></a>

```json
"ITCO"

```

Methods of calculating interest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Methods of calculating interest|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|ITCO|
|*anonymous*|ITOT|
|*anonymous*|ITSI|

<h2 id="tocS_OB_InterestFixedVariableType1Code">OB_InterestFixedVariableType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestfixedvariabletype1code"></a>
<a id="schema_OB_InterestFixedVariableType1Code"></a>
<a id="tocSob_interestfixedvariabletype1code"></a>
<a id="tocsob_interestfixedvariabletype1code"></a>

```json
"INFI"

```

Type of interest rate, Fixed or Variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of interest rate, Fixed or Variable|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INFI|
|*anonymous*|INVA|

<h2 id="tocS_OB_InterestRateType1Code_0">OB_InterestRateType1Code_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestratetype1code_0"></a>
<a id="schema_OB_InterestRateType1Code_0"></a>
<a id="tocSob_interestratetype1code_0"></a>
<a id="tocsob_interestratetype1code_0"></a>

```json
"INBB"

```

Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INBB|
|*anonymous*|INFR|
|*anonymous*|INGR|
|*anonymous*|INLR|
|*anonymous*|INNE|
|*anonymous*|INOT|

<h2 id="tocS_OB_InterestRateType1Code_1">OB_InterestRateType1Code_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestratetype1code_1"></a>
<a id="schema_OB_InterestRateType1Code_1"></a>
<a id="tocSob_interestratetype1code_1"></a>
<a id="tocsob_interestratetype1code_1"></a>

```json
"INBB"

```

Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INBB|
|*anonymous*|INFR|
|*anonymous*|INGR|
|*anonymous*|INLR|
|*anonymous*|INNE|
|*anonymous*|INOT|

<h2 id="tocS_OB_MinMaxType1Code">OB_MinMaxType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_minmaxtype1code"></a>
<a id="schema_OB_MinMaxType1Code"></a>
<a id="tocSob_minmaxtype1code"></a>
<a id="tocsob_minmaxtype1code"></a>

```json
"FMMN"

```

Min Max type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Min Max type|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FMMN|
|*anonymous*|FMMX|

<h2 id="tocS_OB_OtherCodeType1_0">OB_OtherCodeType1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_0"></a>
<a id="schema_OB_OtherCodeType1_0"></a>
<a id="tocSob_othercodetype1_0"></a>
<a id="tocsob_othercodetype1_0"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_1">OB_OtherCodeType1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_1"></a>
<a id="schema_OB_OtherCodeType1_1"></a>
<a id="tocSob_othercodetype1_1"></a>
<a id="tocsob_othercodetype1_1"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other application frequencies that are not available in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_2">OB_OtherCodeType1_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_2"></a>
<a id="schema_OB_OtherCodeType1_2"></a>
<a id="tocSob_othercodetype1_2"></a>
<a id="tocsob_othercodetype1_2"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other calculation frequency which is not available in the standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_3">OB_OtherCodeType1_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_3"></a>
<a id="schema_OB_OtherCodeType1_3"></a>
<a id="tocSob_othercodetype1_3"></a>
<a id="tocsob_othercodetype1_3"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other Fee type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_4">OB_OtherCodeType1_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_4"></a>
<a id="schema_OB_OtherCodeType1_4"></a>
<a id="tocSob_othercodetype1_4"></a>
<a id="tocsob_othercodetype1_4"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other fee rate type code which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_5">OB_OtherCodeType1_5</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_5"></a>
<a id="schema_OB_OtherCodeType1_5"></a>
<a id="tocSob_othercodetype1_5"></a>
<a id="tocsob_othercodetype1_5"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other fee rate type which is not in the standard rate type list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_6">OB_OtherCodeType1_6</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_6"></a>
<a id="schema_OB_OtherCodeType1_6"></a>
<a id="tocSob_othercodetype1_6"></a>
<a id="tocsob_othercodetype1_6"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other application frequencies not covered in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_7">OB_OtherCodeType1_7</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_7"></a>
<a id="schema_OB_OtherCodeType1_7"></a>
<a id="tocSob_othercodetype1_7"></a>
<a id="tocsob_othercodetype1_7"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other calculation frequency which is not available in standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_8">OB_OtherCodeType1_8</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_8"></a>
<a id="schema_OB_OtherCodeType1_8"></a>
<a id="tocSob_othercodetype1_8"></a>
<a id="tocsob_othercodetype1_8"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}

```

Other fee rate type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherFeeChargeDetailType">OB_OtherFeeChargeDetailType</h2>
<!-- backwards compatibility -->
<a id="schemaob_otherfeechargedetailtype"></a>
<a id="schema_OB_OtherFeeChargeDetailType"></a>
<a id="tocSob_otherfeechargedetailtype"></a>
<a id="tocsob_otherfeechargedetailtype"></a>

```json
{
  "Code": "string",
  "FeeCategory": "FCOT",
  "Name": "string",
  "Description": "string"
}

```

Other Fee/charge type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|FeeCategory|[OB_FeeCategory1Code](#schemaob_feecategory1code)|true|none|Categorisation of fees and charges into standard categories.|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OverdraftFeeType1Code">OB_OverdraftFeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_overdraftfeetype1code"></a>
<a id="schema_OB_OverdraftFeeType1Code"></a>
<a id="tocSob_overdraftfeetype1code"></a>
<a id="tocsob_overdraftfeetype1code"></a>

```json
"FBAO"

```

Overdraft fee type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Overdraft fee type|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FBAO|
|*anonymous*|FBAR|
|*anonymous*|FBEB|
|*anonymous*|FBIT|
|*anonymous*|FBOR|
|*anonymous*|FBOS|
|*anonymous*|FBSC|
|*anonymous*|FBTO|
|*anonymous*|FBUB|
|*anonymous*|FBUT|
|*anonymous*|FTOT|
|*anonymous*|FTUT|

<h2 id="tocS_OB_Period1Code">OB_Period1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_period1code"></a>
<a id="schema_OB_Period1Code"></a>
<a id="tocSob_period1code"></a>
<a id="tocsob_period1code"></a>

```json
"PACT"

```

Period e.g. day, week, month etc. for which the fee/charge is capped

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Period e.g. day, week, month etc. for which the fee/charge is capped|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PACT|
|*anonymous*|PDAY|
|*anonymous*|PHYR|
|*anonymous*|PMTH|
|*anonymous*|PQTR|
|*anonymous*|PWEK|
|*anonymous*|PYER|

<h2 id="tocS_OB_Rate1_0">OB_Rate1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_0"></a>
<a id="schema_OB_Rate1_0"></a>
<a id="tocSob_rate1_0"></a>
<a id="tocsob_rate1_0"></a>

```json
"string"

```

Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)|

<h2 id="tocS_OB_Rate1_1">OB_Rate1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_1"></a>
<a id="schema_OB_Rate1_1"></a>
<a id="tocSob_rate1_1"></a>
<a id="tocsob_rate1_1"></a>

```json
"string"

```

Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)|

<h2 id="tocS_OpeningDate">OpeningDate</h2>
<!-- backwards compatibility -->
<a id="schemaopeningdate"></a>
<a id="schema_OpeningDate"></a>
<a id="tocSopeningdate"></a>
<a id="tocsopeningdate"></a>

```json
"2019-08-24T14:15:22Z"

```

Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_PartyId">PartyId</h2>
<!-- backwards compatibility -->
<a id="schemapartyid"></a>
<a id="schema_PartyId"></a>
<a id="tocSpartyid"></a>
<a id="tocspartyid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_PartyNumber">PartyNumber</h2>
<!-- backwards compatibility -->
<a id="schemapartynumber"></a>
<a id="schema_PartyNumber"></a>
<a id="tocSpartynumber"></a>
<a id="tocspartynumber"></a>

```json
"string"

```

Number assigned by an agent to identify its customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Number assigned by an agent to identify its customer.|

<h2 id="tocS_PhoneNumber_0">PhoneNumber_0</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_0"></a>
<a id="schema_PhoneNumber_0"></a>
<a id="tocSphonenumber_0"></a>
<a id="tocsphonenumber_0"></a>

```json
"string"

```

Collection of information that identifies a phone number, as defined by telecom services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Collection of information that identifies a phone number, as defined by telecom services.|

<h2 id="tocS_PhoneNumber_1">PhoneNumber_1</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_1"></a>
<a id="schema_PhoneNumber_1"></a>
<a id="tocSphonenumber_1"></a>
<a id="tocsphonenumber_1"></a>

```json
"string"

```

Collection of information that identifies a mobile phone number, as defined by telecom services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Collection of information that identifies a mobile phone number, as defined by telecom services.|

<h2 id="tocS_PostCode">PostCode</h2>
<!-- backwards compatibility -->
<a id="schemapostcode"></a>
<a id="schema_PostCode"></a>
<a id="tocSpostcode"></a>
<a id="tocspostcode"></a>

```json
"string"

```

Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|

<h2 id="tocS_PreviousPaymentDateTime">PreviousPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspaymentdatetime"></a>
<a id="schema_PreviousPaymentDateTime"></a>
<a id="tocSpreviouspaymentdatetime"></a>
<a id="tocspreviouspaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_ProprietaryBankTransactionCodeStructure1">ProprietaryBankTransactionCodeStructure1</h2>
<!-- backwards compatibility -->
<a id="schemaproprietarybanktransactioncodestructure1"></a>
<a id="schema_ProprietaryBankTransactionCodeStructure1"></a>
<a id="tocSproprietarybanktransactioncodestructure1"></a>
<a id="tocsproprietarybanktransactioncodestructure1"></a>

```json
{
  "Code": "string",
  "Issuer": "string"
}

```

Set of elements to fully identify a proprietary bank transaction code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Proprietary bank transaction code to identify the underlying transaction.|
|Issuer|string|false|none|Identification of the issuer of the proprietary bank transaction code.|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
"string"

```

Rate associated with the statement rate type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Rate associated with the statement rate type.|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
"string"

```

Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|

<h2 id="tocS_OBBeneficiaryType1Code">OBBeneficiaryType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiarytype1code"></a>
<a id="schema_OBBeneficiaryType1Code"></a>
<a id="tocSobbeneficiarytype1code"></a>
<a id="tocsobbeneficiarytype1code"></a>

```json
"Trusted"

```

Specifies the Beneficiary Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Specifies the Beneficiary Type.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Trusted|
|*anonymous*|Ordinary|

<h2 id="tocS_ScheduledPaymentDateTime">ScheduledPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentdatetime"></a>
<a id="schema_ScheduledPaymentDateTime"></a>
<a id="tocSscheduledpaymentdatetime"></a>
<a id="tocsscheduledpaymentdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_ScheduledPaymentId">ScheduledPaymentId</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentid"></a>
<a id="schema_ScheduledPaymentId"></a>
<a id="tocSscheduledpaymentid"></a>
<a id="tocsscheduledpaymentid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_SecondaryIdentification">SecondaryIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryidentification"></a>
<a id="schema_SecondaryIdentification"></a>
<a id="tocSsecondaryidentification"></a>
<a id="tocssecondaryidentification"></a>

```json
"string"

```

This is secondary identification of the account, as assigned by the account servicing institution. 
This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_StandingOrderId">StandingOrderId</h2>
<!-- backwards compatibility -->
<a id="schemastandingorderid"></a>
<a id="schema_StandingOrderId"></a>
<a id="tocSstandingorderid"></a>
<a id="tocsstandingorderid"></a>

```json
"string"

```

A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_StartDateTime">StartDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastartdatetime"></a>
<a id="schema_StartDateTime"></a>
<a id="tocSstartdatetime"></a>
<a id="tocsstartdatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"string"

```

Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|

<h2 id="tocS_StatementReference">StatementReference</h2>
<!-- backwards compatibility -->
<a id="schemastatementreference"></a>
<a id="schema_StatementReference"></a>
<a id="tocSstatementreference"></a>
<a id="tocsstatementreference"></a>

```json
"string"

```

Unique reference for the statement. This reference may be optionally populated if available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique reference for the statement. This reference may be optionally populated if available.|

<h2 id="tocS_StatusUpdateDateTime">StatusUpdateDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastatusupdatedatetime"></a>
<a id="schema_StatusUpdateDateTime"></a>
<a id="tocSstatusupdatedatetime"></a>
<a id="tocsstatusupdatedatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_StreetName">StreetName</h2>
<!-- backwards compatibility -->
<a id="schemastreetname"></a>
<a id="schema_StreetName"></a>
<a id="tocSstreetname"></a>
<a id="tocsstreetname"></a>

```json
"string"

```

Name of a street or thoroughfare.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name of a street or thoroughfare.|

<h2 id="tocS_TownName">TownName</h2>
<!-- backwards compatibility -->
<a id="schematownname"></a>
<a id="schema_TownName"></a>
<a id="tocStownname"></a>
<a id="tocstownname"></a>

```json
"string"

```

Name of a built-up area, with defined boundaries, and a local government.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Name of a built-up area, with defined boundaries, and a local government.|

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"string"

```

Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|

<h2 id="tocS_TransactionInformation">TransactionInformation</h2>
<!-- backwards compatibility -->
<a id="schematransactioninformation"></a>
<a id="schema_TransactionInformation"></a>
<a id="tocStransactioninformation"></a>
<a id="tocstransactioninformation"></a>

```json
"string"

```

Further details of the transaction. 
This is the transaction narrative, which is unstructured text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|

<h2 id="tocS_TransactionReference">TransactionReference</h2>
<!-- backwards compatibility -->
<a id="schematransactionreference"></a>
<a id="schema_TransactionReference"></a>
<a id="tocStransactionreference"></a>
<a id="tocstransactionreference"></a>

```json
"string"

```

Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"

```

Value associated with the statement value type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Value associated with the statement value type.|

<h2 id="tocS_ValueDateTime">ValueDateTime</h2>
<!-- backwards compatibility -->
<a id="schemavaluedatetime"></a>
<a id="schema_ValueDateTime"></a>
<a id="tocSvaluedatetime"></a>
<a id="tocsvaluedatetime"></a>

```json
"2019-08-24T14:15:22Z"

```

Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(date-time)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

