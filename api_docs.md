### Order Module

#### 1. Get Order Analysis

- **Description:** Retrieves the number of orders for the logged-in user.
- **URL:** `/app/order/analysis`
- **Method:** `GET`
- **Authentication:** Required.
- **Request Parameters:** None
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "orderNum": 10
    },
    "message": "Success"
  }
  ```

### Article Module

#### 2. Get Home Articles

- **Description:** Retrieves articles for the home page.
- **URL:** `/app/news/homeArticles`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:** None
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": "1",
        "title": "Article Title",
        "content": "Article content...",
        "author": "Author Name"
      }
    ],
    "message": "Success"
  }
  ```

#### 3. Get News Categories

- **Description:** Retrieves news categories.
- **URL:** `/app/news/newCategories`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:** None
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": "1",
        "name": "Category Name"
      }
    ],
    "message": "Success"
  }
  ```

#### 4. Get News by Category

- **Description:** Retrieves news articles by category with pagination.
- **URL:** `/app/news/newsByCategory/{num}/{size}`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `num` (path): Page number.
  - `size` (path): Number of items per page.
  - `categoryId` (query): The ID of the category.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "records": [
        {
          "id": "1",
          "title": "Article Title",
          "content": "Article content..."
        }
      ],
      "total": 1
    },
    "message": "Success"
  }
  ```

### Meta Module

#### 5. Get Payment Channels

- **Description:** Retrieves available payment methods and channel information.
- **URL:** `/app/channel/getPayChannel`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:** None
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "payments": [
        {
          "id": 1,
          "name": "Credit Card"
        }
      ],
      "channelDto": {
        "id": 1,
        "name": "Channel Name"
      }
    },
    "message": "Success"
  }
  ```

#### 6. Get Currencies

- **Description:** Retrieves a list of supported currencies.
- **URL:** `/app/channel/getCurrency`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:** None
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": 1,
        "name": "USD",
        "symbol": "$"
      }
    ],
    "message": "Success"
  }
  ```

### Goods Module

#### 7. Get Related Goods for Reviews

- **Description:** Retrieves related goods for the reviews section.
- **URL:** `/app/goods/getGoodsByGoodsSeries`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `goodsId` (query): The ID of the current good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": "2",
        "name": "Related Good Name",
        "price": 19.99
      }
    ],
    "message": "Success"
  }
  ```

#### 8. Get Goods Review Overview

- **Description:** Retrieves an overview of reviews for a specific good.
- **URL:** `/app/goods/getGoodsReviewOverview`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `goodsId` (query): The ID of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "averageRating": 4.5,
      "totalReviews": 100
    },
    "message": "Success"
  }
  ```

#### 9. Get Goods ID by URL Name

- **Description:** Retrieves the goods ID from its URL name.
- **URL:** `/app/goods/getGoodsIdByGoodsUrlName`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `urlName` (query): The URL-friendly name of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "goodsId": "123"
    },
    "message": "Success"
  }
  ```

#### 10. Get All Reviews for a Good

- **Description:** Retrieves all reviews for a specific good with pagination.
- **URL:** `/app/reviews/all/{num}/{size}`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `num` (path): Page number.
  - `size` (path): Number of items per page.
  - `goodsId` (query): The ID of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "records": [
        {
          "id": "1",
          "rating": 5,
          "comment": "Great product!"
        }
      ],
      "total": 1
    },
    "message": "Success"
  }
  ```

#### 11. Get SKU by Goods ID

- **Description:** Retrieves SKU information for a given good.
- **URL:** `/app/goods/getSkuByGoodsId`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `goodsId` (query): The ID of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": "sku123",
        "name": "SKU Name",
        "price": 29.99
      }
    ],
    "message": "Success"
  }
  ```

#### 12. Get Goods Detail

- **Description:** Retrieves the detailed information of a specific good.
- **URL:** `/app/goods/getGoodsDetail`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `goodsId` (query): The ID of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "id": "123",
      "name": "Good Name",
      "description": "Good description.",
      "price": 29.99
    },
    "message": "Success"
  }
  ```

#### 13. Get Recommended Goods

- **Description:** Retrieves recommended goods based on a specific good.
- **URL:** `/app/goods/getRecommendGoodsByGoodsId`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `goodsId` (query): The ID of the good.
- **Response:**
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": "456",
        "name": "Recommended Good",
        "price": 39.99
      }
    ],
    "message": "Success"
  }
  ```

### Article Page

#### 14. Get Article by ID

- **Description:** Retrieves the details of a specific article by its ID.
- **URL:** `/app/news/newsById`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `id` (query): The ID of the article.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "id": "1",
      "title": "Article Title",
      "content": "Article content...",
      "author": "Author Name"
    },
    "message": "Success"
  }
  ```

### Search Page

#### 15. Search Goods by Keywords

- **Description:** Searches for goods by keywords with pagination.
- **URL:** `/app/goods/getGoodsByKeywords/{num}/{size}`
- **Method:** `GET`
- **Authentication:** Not required.
- **Request Parameters:**
  - `num` (path): Page number.
  - `size` (path): Number of items per page.
  - `keywords` (query): The search keywords.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "records": [
        {
          "id": "1",
          "name": "Searched Good",
          "price": 49.99
        }
      ],
      "total": 1
    },
    "message": "Success"
  }
  ```

### User Module

#### 16. Upload File

- **Description:** Uploads a file (e.g., for identity verification).
- **URL:** `/open/upload`
- **Method:** `POST`
- **Authentication:** Not required.
- **Request Parameters:**
  - `formData` (body): The file to upload, as `multipart/form-data`.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "url": "https://example.com/path/to/uploaded/file.jpg"
    },
    "message": "Success"
  }
  ```

#### 17. Submit Identity Verification

- **Description:** Submits user identity verification information.
- **URL:** `/app/user/identityVerify`
- **Method:** `POST`
- **Authentication:** Required.
- **Request Parameters (body):**
  ```json
  {
    "realName": "John Doe",
    "idCard": "123456789",
    "frontImg": "url/to/front/image.jpg",
    "backImg": "url/to/back/image.jpg"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "message": "Success"
  }
  ```

### Order Detail Page

#### 18. Get Order Detail

- **Description:** Retrieves the details of a specific order.
- **URL:** `/app/user/orderDetail/{orderId}`
- **Method:** `GET`
- **Authentication:** Required.
- **Request Parameters:**
  - `orderId` (path): The ID of the order.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "id": "1",
      "status": "Paid",
      "totalAmount": 99.99,
      "items": [
        {
          "goodsId": "123",
          "quantity": 1
        }
      ]
    },
    "message": "Success"
  }
  ```

#### 19. Cancel Order

- **Description:** Cancels an order.
- **URL:** `/app/order/cancel`
- **Method:** `POST`
- **Authentication:** Required.
- **Request Parameters (body):**
  ```json
  {
    "orderId": "1"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "message": "Success"
  }
  ```

#### 20. Get Passcode for Order

- **Description:** Retrieves the passcode for a digital item in an order.
- **URL:** `/app/order/getPasscode`
- **Method:** `POST`
- **Authentication:** Required.
- **Request Parameters (body):**
  ```json
  {
    "orderId": "1",
    "googleCode": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "passcode": "ABC-123-XYZ"
    },
    "message": "Success"
  }
  ```

### Pre-order Page

#### 21. Get Coupon Data

- **Description:** Retrieves coupon data.
- **URL:** `/app/coupon/getCoupon`
- **Method:** `POST`
- **Authentication:** Not required.
- **Request Parameters (body):**
  ```json
  {
    "couponCode": "SUMMER2024"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "discount": 10.0,
      "couponId": "c123"
    },
    "message": "Success"
  }
  ```

#### 22. Validate Recharge Account

- **Description:** Validates a recharge account for a given good.
- **URL:** `/app/goods/validateRechargeAccount`
- **Method:** `POST`
- **Authentication:** Not required.
- **Request Parameters (body):**
  ```json
  {
    "goodsId": "123",
    "account": "user@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "isValid": true
    },
    "message": "Success"
  }
  ```

#### 23. Verify Email

- **Description:** Sends a verification code to the user's email.
- **URL:** `/app/sso/verifyEmail`
- **Method:** `POST`
- **Authentication:** Not required.
- **Request Parameters (body):**
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "message": "Verification code sent."
  }
  ```

#### 24. Create Order and Register User

- **Description:** Creates an order and registers a new user if they don't exist.
- **URL:** `/app/order/createAndRegister`
- **Method:** `POST`
- **Authentication:** Not required.
- **Request Parameters (body):**
  ```json
  {
    "goodsId": "123",
    "quantity": 1,
    "email": "newuser@example.com",
    "emailVerifyCode": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "token": "jwt-token",
      "needVerifyEmail": false,
      "orderId": "o456"
    },
    "message": "Success"
  }
  ```

### Account Components

#### 25. Get Balance Record

- **Description:** Retrieves the user's balance transaction history with pagination.
- **URL:** `/app/user/balanceRecord/{page}/{size}`
- **Method:** `GET`
- **Authentication:** Required.
- **Request Parameters:**
  - `page` (path): Page number.
  - `size` (path): Number of items per page.
- **Response:**
  ```json
  {
    "code": 200,
    "data": {
      "records": [
        {
          "id": "1",
          "amount": 10.0,
          "type": "Credit",
          "date": "2024-01-01T12:00:00Z"
        }
      ],
      "total": 1
    },
    "message": "Success"
  }
  ```
