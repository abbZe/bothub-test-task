
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/v1/users/login": {
        "get": {
          "operationId": "UsersController_login",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/v1/users/me": {
        "get": {
          "operationId": "UsersController_getProfile",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/v1/books": {
        "get": {
          "operationId": "BooksController_getAllBooks",
          "summary": "Получить список всех книг",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Список книг успешно получен.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ]
        },
        "post": {
          "operationId": "BooksController_createBook",
          "summary": "Создать новую книгу",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateBookDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Книга успешно создана.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ],
          "security": [
            {
              "bearerAuth": []
            },
            {
              "bearer": []
            }
          ]
        }
      },
      "/v1/books/{id}": {
        "get": {
          "operationId": "BooksController_getBook",
          "summary": "Получить книгу по ID",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "ID книги",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Книга найдена.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            },
            "404": {
              "description": "Книга с ID ${id} не найдена."
            }
          },
          "tags": [
            "books"
          ]
        },
        "put": {
          "operationId": "BooksController_updateBook",
          "summary": "Обновить книгу по ID",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "ID книги",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateBookDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Книга успешно обновлена.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ],
          "security": [
            {
              "bearerAuth": []
            },
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "BooksController_deleteBook",
          "summary": "Удалить книгу по ID",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "ID книги",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Книга успешно удалена.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/v1": {
        "get": {
          "operationId": "AppController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      }
    },
    "info": {
      "title": "REHub API",
      "description": "API для получения объектов недвижимости и выгрузки их в агрегаторы",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "CreateBookDto": {
          "type": "object",
          "properties": {}
        },
        "UpdateBookDto": {
          "type": "object",
          "properties": {}
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
