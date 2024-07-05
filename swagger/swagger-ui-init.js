
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
      "/v1/eo": {
        "get": {
          "operationId": "EOController_getAllEOs",
          "summary": "Получить все объекты недвижимости",
          "description": "Этот метод возвращает список всех объектов недвижимости, доступных для аренды и продажи.",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Успешно возвращает список объектов недвижимости.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
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
      },
      "/v1/eo/rent/apartment": {
        "get": {
          "operationId": "ApartmentController_getAllApartments",
          "summary": "Получить все апартаменты для аренды",
          "description": "Этот метод возвращает список всех апартаментов, доступных для аренды.",
          "parameters": [
            {
              "name": "uid",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор EO",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cadCode",
              "required": false,
              "in": "query",
              "example": "123.456.789.012",
              "description": "Кадастровый номер",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "totalAreaFrom",
              "required": false,
              "in": "query",
              "example": 50,
              "description": "Минимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "totalAreaTo",
              "required": false,
              "in": "query",
              "example": 200,
              "description": "Максимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceFrom",
              "required": false,
              "in": "query",
              "example": 1000000,
              "description": "Минимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceTo",
              "required": false,
              "in": "query",
              "example": 5000000,
              "description": "Максимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceFrom",
              "required": false,
              "in": "query",
              "example": 10000,
              "description": "Минимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceTo",
              "required": false,
              "in": "query",
              "example": 50000,
              "description": "Максимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "street",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор улицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "adminUnit",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор административной единицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "municipality",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор муниципалитета",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "region",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор региона",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Количество элементов на странице",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Номер страницы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "buildingStatus",
              "required": false,
              "in": "query",
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус здания",
              "schema": {
                "enum": [
                  "NEWLY_CONSTRUCTED",
                  "OLD_CONSTRUCTED",
                  "UNDER_CONSTRUCTION"
                ],
                "type": "string"
              }
            },
            {
              "name": "aptNumber",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Номер квартиры",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floor",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Этаж",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsFrom",
              "required": false,
              "in": "query",
              "example": 3,
              "description": "Минимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsTo",
              "required": false,
              "in": "query",
              "example": 5,
              "description": "Максимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pool",
              "required": false,
              "in": "query",
              "example": true,
              "description": "Наличие бассейна",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Список апартаментов успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RApartmentDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/rent/apartment/{id}": {
        "get": {
          "operationId": "ApartmentController_getApartmentById",
          "summary": "Получить апартамент для аренды с указанным ID",
          "description": "Этот метод возвращает апартамент с указанным ID.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Апартамент с указанным ID успешно возвращен.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RApartmentDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/rent/house": {
        "get": {
          "operationId": "HouseController_getAllHouses",
          "summary": "Получить все дома для аренды",
          "description": "Этот метод возвращает список всех домов, доступных для аренды.",
          "parameters": [
            {
              "name": "uid",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор EO",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cadCode",
              "required": false,
              "in": "query",
              "example": "123.456.789.012",
              "description": "Кадастровый номер",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "totalAreaFrom",
              "required": false,
              "in": "query",
              "example": 50,
              "description": "Минимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "totalAreaTo",
              "required": false,
              "in": "query",
              "example": 200,
              "description": "Максимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceFrom",
              "required": false,
              "in": "query",
              "example": 1000000,
              "description": "Минимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceTo",
              "required": false,
              "in": "query",
              "example": 5000000,
              "description": "Максимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceFrom",
              "required": false,
              "in": "query",
              "example": 10000,
              "description": "Минимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceTo",
              "required": false,
              "in": "query",
              "example": 50000,
              "description": "Максимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "street",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор улицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "adminUnit",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор административной единицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "municipality",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор муниципалитета",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "region",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор региона",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Количество элементов на странице",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Номер страницы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "buildingStatus",
              "required": false,
              "in": "query",
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус здания",
              "schema": {
                "enum": [
                  "NEWLY_CONSTRUCTED",
                  "OLD_CONSTRUCTED",
                  "UNDER_CONSTRUCTION"
                ],
                "type": "string"
              }
            },
            {
              "name": "aptNumber",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Номер квартиры",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floor",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Этаж",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsFrom",
              "required": false,
              "in": "query",
              "example": 3,
              "description": "Минимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsTo",
              "required": false,
              "in": "query",
              "example": 5,
              "description": "Максимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pool",
              "required": false,
              "in": "query",
              "example": true,
              "description": "Наличие бассейна",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Список домов успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RHouseDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/rent/house/{id}": {
        "get": {
          "operationId": "HouseController_getHouseById",
          "summary": "Получить дом для аренды с указанным ID",
          "description": "Этот метод возвращает дом с указанным ID.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Дом с указанным ID успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RHouseDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/apartment": {
        "get": {
          "operationId": "ApartmentController_getAllApartments",
          "summary": "Получить все апартаменты для продажи",
          "description": "Этот метод возвращает список всех апартаментов, доступных для продажи.",
          "parameters": [
            {
              "name": "uid",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор EO",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cadCode",
              "required": false,
              "in": "query",
              "example": "123.456.789.012",
              "description": "Кадастровый номер",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "totalAreaFrom",
              "required": false,
              "in": "query",
              "example": 50,
              "description": "Минимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "totalAreaTo",
              "required": false,
              "in": "query",
              "example": 200,
              "description": "Максимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceFrom",
              "required": false,
              "in": "query",
              "example": 1000000,
              "description": "Минимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceTo",
              "required": false,
              "in": "query",
              "example": 5000000,
              "description": "Максимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceFrom",
              "required": false,
              "in": "query",
              "example": 10000,
              "description": "Минимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceTo",
              "required": false,
              "in": "query",
              "example": 50000,
              "description": "Максимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "street",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор улицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "adminUnit",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор административной единицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "municipality",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор муниципалитета",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "region",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор региона",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Количество элементов на странице",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Номер страницы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "buildingStatus",
              "required": false,
              "in": "query",
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус здания",
              "schema": {
                "enum": [
                  "NEWLY_CONSTRUCTED",
                  "OLD_CONSTRUCTED",
                  "UNDER_CONSTRUCTION"
                ],
                "type": "string"
              }
            },
            {
              "name": "aptNumber",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Номер квартиры",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floor",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Этаж",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsFrom",
              "required": false,
              "in": "query",
              "example": 3,
              "description": "Минимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsTo",
              "required": false,
              "in": "query",
              "example": 5,
              "description": "Максимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pool",
              "required": false,
              "in": "query",
              "example": true,
              "description": "Наличие бассейна",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Список апартаментов успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SApartmentDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/apartment/{id}": {
        "get": {
          "operationId": "ApartmentController_getApartmentById",
          "summary": "Получить апартамент для продажи с указанным ID",
          "description": "Этот метод возвращает апартамент с указанным ID.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Апартамент с указанным ID успешно возвращен.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SApartmentDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/house": {
        "get": {
          "operationId": "HouseController_getAllHouses",
          "summary": "Получить все дома для продажи",
          "description": "Этот метод возвращает список всех домов, доступных для продажи.",
          "parameters": [
            {
              "name": "uid",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор EO",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cadCode",
              "required": false,
              "in": "query",
              "example": "123.456.789.012",
              "description": "Кадастровый номер",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "totalAreaFrom",
              "required": false,
              "in": "query",
              "example": 50,
              "description": "Минимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "totalAreaTo",
              "required": false,
              "in": "query",
              "example": 200,
              "description": "Максимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceFrom",
              "required": false,
              "in": "query",
              "example": 1000000,
              "description": "Минимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceTo",
              "required": false,
              "in": "query",
              "example": 5000000,
              "description": "Максимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceFrom",
              "required": false,
              "in": "query",
              "example": 10000,
              "description": "Минимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceTo",
              "required": false,
              "in": "query",
              "example": 50000,
              "description": "Максимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "street",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор улицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "adminUnit",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор административной единицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "municipality",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор муниципалитета",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "region",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор региона",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Количество элементов на странице",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Номер страницы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "buildingStatus",
              "required": false,
              "in": "query",
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус здания",
              "schema": {
                "enum": [
                  "NEWLY_CONSTRUCTED",
                  "OLD_CONSTRUCTED",
                  "UNDER_CONSTRUCTION"
                ],
                "type": "string"
              }
            },
            {
              "name": "aptNumber",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Номер квартиры",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floor",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Этаж",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsFrom",
              "required": false,
              "in": "query",
              "example": 3,
              "description": "Минимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsTo",
              "required": false,
              "in": "query",
              "example": 5,
              "description": "Максимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pool",
              "required": false,
              "in": "query",
              "example": true,
              "description": "Наличие бассейна",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Список домов успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SHouseDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/house/{id}": {
        "get": {
          "operationId": "HouseController_getHouseById",
          "summary": "Получить дом для продажи с указанным ID",
          "description": "Этот метод возвращает дом с указанным ID.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Дом с указанным ID успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SHouseDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/land": {
        "get": {
          "operationId": "LandController_getAllLands",
          "summary": "Получить все земли для продажи",
          "description": "Этот метод возвращает список всех земель, доступных для продажи.",
          "parameters": [
            {
              "name": "uid",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор EO",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cadCode",
              "required": false,
              "in": "query",
              "example": "123.456.789.012",
              "description": "Кадастровый номер",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "totalAreaFrom",
              "required": false,
              "in": "query",
              "example": 50,
              "description": "Минимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "totalAreaTo",
              "required": false,
              "in": "query",
              "example": 200,
              "description": "Максимальная общая площадь",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceFrom",
              "required": false,
              "in": "query",
              "example": 1000000,
              "description": "Минимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "priceTo",
              "required": false,
              "in": "query",
              "example": 5000000,
              "description": "Максимальная цена",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceFrom",
              "required": false,
              "in": "query",
              "example": 10000,
              "description": "Минимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sqmPriceTo",
              "required": false,
              "in": "query",
              "example": 50000,
              "description": "Максимальная цена за квадратный метр",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "street",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор улицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "adminUnit",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор административной единицы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "municipality",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор муниципалитета",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "region",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Уникальный идентификатор региона",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Количество элементов на странице",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Номер страницы",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "buildingStatus",
              "required": false,
              "in": "query",
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус здания",
              "schema": {
                "enum": [
                  "NEWLY_CONSTRUCTED",
                  "OLD_CONSTRUCTED",
                  "UNDER_CONSTRUCTION"
                ],
                "type": "string"
              }
            },
            {
              "name": "aptNumber",
              "required": false,
              "in": "query",
              "example": 10,
              "description": "Номер квартиры",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floor",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Этаж",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsFrom",
              "required": false,
              "in": "query",
              "example": 3,
              "description": "Минимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "roomsTo",
              "required": false,
              "in": "query",
              "example": 5,
              "description": "Максимальное количество комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "floorsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество этажей",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsFrom",
              "required": false,
              "in": "query",
              "example": 1,
              "description": "Минимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "bathroomsTo",
              "required": false,
              "in": "query",
              "example": 2,
              "description": "Максимальное количество ванных комнат",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "pool",
              "required": false,
              "in": "query",
              "example": true,
              "description": "Наличие бассейна",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Список земель успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SLandDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/eo/sale/land/{id}": {
        "get": {
          "operationId": "LandController_getLandById",
          "summary": "Получить землю для продажи с указанным ID",
          "description": "Этот метод возвращает землю с указанным ID.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Земля с указанным ID успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SLandDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Estate Object"
          ]
        }
      },
      "/v1/feed/avito": {
        "patch": {
          "operationId": "FeedController_updateFeed",
          "summary": "Инициировать обновление XML файла выгрузки для авито",
          "description": "Этот метод удаляет старый XML, заменяет его новым XML со свежими данными",
          "parameters": [],
          "responses": {
            "200": {
              "description": "XML успешно обновлен, ссылка на новый фид возвращена"
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Avito"
          ]
        },
        "post": {
          "operationId": "FeedController_uploadFeed",
          "summary": "Инициировать выгрузку фида на авито",
          "description": "Этот метод запускает выгрузку фида из XML файла в авито",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Выгрузка фида успешно запущена"
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Avito"
          ]
        }
      },
      "/v1/feed/avito/profile": {
        "get": {
          "operationId": "FeedProfileController_getProfile",
          "summary": "Получить профиль автозагрузки с Авито",
          "description": "Этот метод возвращает текущий профиль автозагрузки на Авито",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Профиль успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FeedProfileDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Avito"
          ]
        },
        "post": {
          "operationId": "FeedProfileController_createProfile",
          "summary": "Создать профиль автозагрузки на Авито",
          "description": "Этот метод позволяет создать профиль автозагрузки на Авито",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Токен успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FeedProfileDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Avito"
          ]
        }
      },
      "/v1/feed/avito/auth": {
        "post": {
          "operationId": "AuthController_checkAuth",
          "summary": "Проверить авторизацию в авито",
          "description": "Этот метод возвращает свежий Bearer токен, служит для проверки авторизации",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Токен успешно возвращен",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SavedTokenDto"
                  }
                }
              }
            },
            "500": {
              "description": "Внутренняя ошибка сервера."
            }
          },
          "tags": [
            "Avito"
          ]
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
      "schemas": {
        "RegionDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Example Region"
            },
            "titleGe": {
              "type": "string",
              "description": "Название на грузинском",
              "example": "მაგალითი რეგიონი"
            },
            "titleRu": {
              "type": "string",
              "description": "Название на русском",
              "example": "Пример региона"
            },
            "municipalities": {
              "description": "Список муниципалитетов",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MunicipalityDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "MunicipalityDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Example Municipality"
            },
            "titleGe": {
              "type": "string",
              "description": "Название на грузинском",
              "example": "მაგალითი მუნიციპალიტეტი"
            },
            "titleRu": {
              "type": "string",
              "description": "Название на русском",
              "example": "Пример муниципалитета"
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "01.02.03.04"
            },
            "regions": {
              "description": "Список регионов",
              "allOf": [
                {
                  "$ref": "#/components/schemas/RegionDto"
                }
              ]
            },
            "adminUnits": {
              "description": "Список административных единиц",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AdminUnitDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "AdminUnitDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальый айди",
              "example": "123"
            },
            "titleEn": {
              "type": "string",
              "description": "Заголовок на английском",
              "example": "Kalaki"
            },
            "titleGe": {
              "type": "string",
              "description": "Заголовок на грузинском",
              "example": "ქალაქი"
            },
            "titleRu": {
              "type": "string",
              "description": "Заголовок на русском",
              "example": "Калаки"
            },
            "municipalities": {
              "description": "Список муниципалитетов",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MunicipalityDto"
                }
              ]
            },
            "streets": {
              "description": "Список улиц",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StreetDto"
              }
            }
          },
          "required": [
            "uid"
          ]
        },
        "StreetDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Example Street"
            },
            "titleGe": {
              "type": "string",
              "description": "Название на грузинском",
              "example": "მაგალითი ქუჩა"
            },
            "titleRu": {
              "type": "string",
              "description": "Название на русском",
              "example": "Пример улицы"
            },
            "startEven": {
              "type": "number",
              "description": "Начальный номер четной стороны",
              "example": 2
            },
            "endEven": {
              "type": "number",
              "description": "Конечный номер четной стороны",
              "example": 100
            },
            "startOdd": {
              "type": "number",
              "description": "Начальный номер нечетной стороны",
              "example": 1
            },
            "endOdd": {
              "type": "number",
              "description": "Конечный номер нечетной стороны",
              "example": 99
            },
            "adminUnit": {
              "description": "Административные единицы",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AdminUnitDto"
                }
              ]
            },
            "units": {
              "description": "Единица, это такая сущность, в которой можно свести землю и дом",
              "allOf": [
                {
                  "$ref": "#/components/schemas/UnitDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "ThumbnailDto": {
          "type": "object",
          "properties": {
            "url": {
              "type": "string",
              "example": "http://example.com/small.jpg",
              "description": "URL миниатюры"
            },
            "width": {
              "type": "number",
              "example": 64,
              "description": "Ширина миниатюры в пикселях"
            },
            "height": {
              "type": "number",
              "example": 64,
              "description": "Высота миниатюры в пикселях"
            }
          },
          "required": [
            "url",
            "width",
            "height"
          ]
        },
        "AirtableImageThumbnailsDto": {
          "type": "object",
          "properties": {
            "small": {
              "description": "Маленькая миниатюра",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ThumbnailDto"
                }
              ]
            },
            "large": {
              "description": "Большая миниатюра",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ThumbnailDto"
                }
              ]
            },
            "full": {
              "description": "Полный размер изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ThumbnailDto"
                }
              ]
            }
          },
          "required": [
            "small",
            "large",
            "full"
          ]
        },
        "AirtableImageDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "img_123",
              "description": "Идентификатор изображения"
            },
            "width": {
              "type": "number",
              "example": 1024,
              "description": "Ширина изображения в пикселях"
            },
            "height": {
              "type": "number",
              "example": 768,
              "description": "Высота изображения в пикселях"
            },
            "url": {
              "type": "string",
              "example": "http://example.com/image.jpg",
              "description": "URL изображения"
            },
            "filename": {
              "type": "string",
              "example": "example.jpg",
              "description": "Имя файла изображения"
            },
            "size": {
              "type": "number",
              "example": 500000,
              "description": "Размер файла в байтах"
            },
            "type": {
              "type": "string",
              "example": "image/jpeg",
              "description": "MIME-тип изображения"
            },
            "thumbnails": {
              "description": "Миниатюры изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageThumbnailsDto"
                }
              ]
            }
          },
          "required": [
            "id",
            "url",
            "filename",
            "size",
            "type",
            "thumbnails"
          ]
        },
        "SHouseDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "description": {
              "type": "string",
              "description": "Описание",
              "example": "Просторный дом с садом"
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Spacious house with a garden"
            },
            "price": {
              "type": "number",
              "description": "Цена",
              "example": 750000
            },
            "sqmPrice": {
              "type": "number",
              "description": "Цена за квадратный метр",
              "example": 15000
            },
            "house": {
              "description": "Информация о доме",
              "allOf": [
                {
                  "$ref": "#/components/schemas/HouseDto"
                }
              ]
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.106"
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 500
            },
            "floors": {
              "type": "number",
              "description": "Количество этажей",
              "example": 2
            },
            "bathrooms": {
              "type": "number",
              "description": "Количество ванных комнат",
              "example": 3
            },
            "rooms": {
              "type": "number",
              "description": "Количество комнат",
              "example": 5
            },
            "pool": {
              "type": "boolean",
              "description": "Наличие бассейна",
              "example": true
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "operationType": {
              "type": "string",
              "description": "Тип операции",
              "enum": [
                "SALE",
                "RENT"
              ],
              "example": "SALE"
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "HOUSE"
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус строительства",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "NEWLY_CONSTRUCTED"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER"
            }
          },
          "required": [
            "uid"
          ]
        },
        "RHouseDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "description": {
              "type": "string",
              "description": "Описание",
              "example": "Просторный дом..."
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Spacious house"
            },
            "pricePerMonth": {
              "type": "number",
              "description": "Цена за месяц",
              "example": 100000
            },
            "house": {
              "description": "Информация о доме",
              "allOf": [
                {
                  "$ref": "#/components/schemas/HouseDto"
                }
              ]
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.105"
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 250
            },
            "floors": {
              "type": "number",
              "description": "Количество этажей",
              "example": 2
            },
            "bathrooms": {
              "type": "number",
              "description": "Количество ванных комнат",
              "example": 3
            },
            "rooms": {
              "type": "number",
              "description": "Количество комнат",
              "example": 5
            },
            "pool": {
              "type": "boolean",
              "description": "Наличие бассейна",
              "example": true
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "startAgreement": {
              "format": "date-time",
              "type": "string",
              "description": "Дата начала договора",
              "example": "2023-01-01"
            },
            "endAgreement": {
              "format": "date-time",
              "type": "string",
              "description": "Дата окончания договора",
              "example": "2024-01-01"
            },
            "operationType": {
              "type": "string",
              "description": "Тип операции",
              "enum": [
                "SALE",
                "RENT"
              ],
              "example": "RENT"
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "HOUSE"
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус строительства",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "NEWLY_CONSTRUCTED"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "AGENT"
            },
            "leaseComissionSize": {
              "type": "number",
              "description": "Размер комиссии за аренду",
              "example": 10
            },
            "leaseDeposit": {
              "type": "string",
              "description": "Размер залога",
              "enum": [
                "WITHOUT_DEPOSIT",
                "HALF_MONTH",
                "ONE_MONTH",
                "ONE_AND_HALF_MONTH",
                "TWO_MONTH",
                "TWO_AND_HALF_MONTH",
                "THREE_MONTH"
              ],
              "example": "ONE_MONTH"
            },
            "leaseType": {
              "type": "string",
              "description": "Тип аренды",
              "enum": [
                "LONG_TERM",
                "DAILY"
              ],
              "example": "LONG_TERM"
            }
          },
          "required": [
            "uid"
          ]
        },
        "HouseDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "example": 123,
              "description": "Уникальный идентификатор"
            },
            "cadCode": {
              "type": "string",
              "example": "123.456.789",
              "description": "Кадастровый номер"
            },
            "titleEn": {
              "type": "string",
              "example": "Дом на берегу озера",
              "description": "Название на английском"
            },
            "unit": {
              "description": "Список единиц недвижимости",
              "allOf": [
                {
                  "$ref": "#/components/schemas/UnitDto"
                }
              ]
            },
            "totalArea": {
              "type": "number",
              "example": 200,
              "description": "Общая площадь"
            },
            "floors": {
              "type": "number",
              "example": 2,
              "description": "Количество этажей"
            },
            "bathrooms": {
              "type": "number",
              "example": 1,
              "description": "Количество ванных комнат"
            },
            "rooms": {
              "type": "number",
              "example": 3,
              "description": "Количество комнат"
            },
            "pool": {
              "type": "boolean",
              "example": true,
              "description": "Наличие бассейна"
            },
            "images": {
              "description": "Список изображений",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "forSale": {
              "description": "Список домов на продажу",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SHouseDto"
                }
              ]
            },
            "forRent": {
              "description": "Список домов в аренду",
              "allOf": [
                {
                  "$ref": "#/components/schemas/RHouseDto"
                }
              ]
            },
            "objectType": {
              "type": "string",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "HOUSE",
              "description": "Тип объекта"
            },
            "buildingStatus": {
              "type": "string",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "NEWLY_CONSTRUCTED",
              "description": "Статус постройки здания"
            },
            "propertyRights": {
              "type": "string",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER",
              "description": "Права собственности"
            }
          },
          "required": [
            "uid"
          ]
        },
        "SLandDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "description": {
              "type": "string",
              "description": "Описание",
              "example": "Земельный участок с видом на море"
            },
            "price": {
              "type": "number",
              "description": "Цена",
              "example": 300000
            },
            "sqmPrice": {
              "type": "number",
              "description": "Цена за квадратный метр",
              "example": 150
            },
            "land": {
              "description": "Информация о земельном участке",
              "allOf": [
                {
                  "$ref": "#/components/schemas/LandDto"
                }
              ]
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.108"
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Seaside land"
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 2000
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "operationType": {
              "type": "string",
              "description": "Тип операции",
              "enum": [
                "SALE",
                "RENT"
              ],
              "example": "SALE"
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "LAND"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER"
            }
          },
          "required": [
            "uid"
          ]
        },
        "LandDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "object",
              "example": 123,
              "description": "Уникальный идентификатор"
            },
            "cadCode": {
              "type": "string",
              "example": "77.14.0000000.102",
              "description": "Кадастровый код"
            },
            "titleEn": {
              "type": "string",
              "example": "Greenfield Land",
              "description": "Название на английском"
            },
            "unit": {
              "description": "Единицы измерения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/UnitDto"
                }
              ]
            },
            "totalArea": {
              "type": "number",
              "example": 200,
              "description": "Общая площадь"
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "forSale": {
              "description": "Земли в категории forSale",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SLandDto"
                }
              ]
            },
            "objectType": {
              "type": "string",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "LAND",
              "description": "Тип объекта"
            },
            "propertyRights": {
              "type": "string",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER",
              "description": "Права собственности"
            }
          },
          "required": [
            "uid"
          ]
        },
        "UnitDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "example": 123,
              "description": "Уникальный идентификатор"
            },
            "cadCode": {
              "type": "string",
              "example": "77.14.0000000.102",
              "description": "Кадастровый код"
            },
            "addressNumber": {
              "type": "number",
              "example": 42,
              "description": "Номер адреса"
            },
            "street": {
              "description": "Улица",
              "allOf": [
                {
                  "$ref": "#/components/schemas/StreetDto"
                }
              ]
            },
            "lawStatus": {
              "type": "string",
              "enum": [
                "AGRICULTURAL",
                "NON_AGRICULTURAL"
              ],
              "example": "AGRICULTURAL",
              "description": "Юридический статус земли"
            },
            "house": {
              "description": "Дом",
              "allOf": [
                {
                  "$ref": "#/components/schemas/HouseDto"
                }
              ]
            },
            "land": {
              "description": "Земельный участок",
              "allOf": [
                {
                  "$ref": "#/components/schemas/LandDto"
                }
              ]
            },
            "building": {
              "description": "Здание",
              "allOf": [
                {
                  "$ref": "#/components/schemas/BuildingDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "DeveloperDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "example": 1,
              "description": "Уникальный идентификатор застройщика"
            },
            "name": {
              "type": "string",
              "example": "DreamSide",
              "description": "Название застройщика"
            },
            "projects": {
              "description": "Проекты застройщика",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ProjectDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "ProjectDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "example": 101,
              "description": "Уникальный идентификатор проекта"
            },
            "developer": {
              "description": "Разработчики проекта",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DeveloperDto"
                }
              ]
            },
            "building": {
              "description": "Здания, связанные с проектом",
              "allOf": [
                {
                  "$ref": "#/components/schemas/BuildingDto"
                }
              ]
            }
          },
          "required": [
            "uid"
          ]
        },
        "BuildingDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор здания",
              "example": 1
            },
            "unit": {
              "description": "Юнит, в котором числится здание",
              "allOf": [
                {
                  "$ref": "#/components/schemas/UnitDto"
                }
              ]
            },
            "apartments": {
              "description": "Список квартир в здании",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ApartmentDto"
                }
              ]
            },
            "addressNumber": {
              "type": "number",
              "description": "Номер здания",
              "example": 42
            },
            "project": {
              "description": "Проекты, связанные с зданием",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ProjectDto"
                }
              ]
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус постройки здания",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "UNDER_CONSTRUCTION"
            }
          },
          "required": [
            "uid"
          ]
        },
        "RApartmentDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "description": {
              "type": "string",
              "description": "Описание",
              "example": "Просторная квартира..."
            },
            "pricePerMonth": {
              "type": "number",
              "description": "Цена за месяц",
              "example": 50000
            },
            "apartment": {
              "description": "Информация о квартире",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ApartmentDto"
                }
              ]
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.102"
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Nice apartment"
            },
            "aptNumber": {
              "type": "number",
              "description": "Номер квартиры",
              "example": 24
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 120
            },
            "floor": {
              "type": "number",
              "description": "Этаж",
              "example": 5
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "operationType": {
              "type": "string",
              "description": "Тип операции",
              "enum": [
                "SALE",
                "RENT"
              ],
              "example": "RENT"
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "APARTMENT"
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус здания",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "NEWLY_CONSTRUCTED"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER"
            },
            "leaseComissionSize": {
              "type": "number",
              "description": "Размер комиссии за аренду",
              "example": 10
            },
            "leaseDeposit": {
              "type": "string",
              "description": "Размер залога",
              "enum": [
                "WITHOUT_DEPOSIT",
                "HALF_MONTH",
                "ONE_MONTH",
                "ONE_AND_HALF_MONTH",
                "TWO_MONTH",
                "TWO_AND_HALF_MONTH",
                "THREE_MONTH"
              ],
              "example": "ONE_MONTH"
            },
            "leaseType": {
              "type": "string",
              "description": "Тип аренды",
              "enum": [
                "LONG_TERM",
                "DAILY"
              ],
              "example": "LONG_TERM"
            }
          },
          "required": [
            "uid"
          ]
        },
        "SApartmentDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "description": {
              "type": "string",
              "description": "Описание",
              "example": "Просторная квартира с видом на море"
            },
            "price": {
              "type": "number",
              "description": "Цена",
              "example": 500000
            },
            "sqmPrice": {
              "type": "number",
              "description": "Цена за квадратный метр",
              "example": 10000
            },
            "balconyArea": {
              "type": "number",
              "description": "Площадь балкона",
              "example": 5
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 100
            },
            "internalArea": {
              "type": "number",
              "description": "Внутренняя площадь",
              "example": 95
            },
            "floor": {
              "type": "number",
              "description": "Этаж",
              "example": 10
            },
            "apartment": {
              "description": "Информация о квартире",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ApartmentDto"
                }
              ]
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.105"
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Sea view spacious apartment"
            },
            "aptNumber": {
              "type": "number",
              "description": "Номер квартиры",
              "example": 42
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "operationType": {
              "type": "string",
              "description": "Тип операции",
              "enum": [
                "SALE",
                "RENT"
              ],
              "example": "SALE"
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "APARTMENT"
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус строительства",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "NEWLY_CONSTRUCTED"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER"
            }
          },
          "required": [
            "uid"
          ]
        },
        "ApartmentDto": {
          "type": "object",
          "properties": {
            "uid": {
              "type": "number",
              "description": "Уникальный идентификатор",
              "example": 123
            },
            "cadCode": {
              "type": "string",
              "description": "Кадастровый код",
              "example": "77.04.0004011.102"
            },
            "titleEn": {
              "type": "string",
              "description": "Название на английском",
              "example": "Luxury Apartment"
            },
            "aptNumber": {
              "type": "number",
              "description": "Номер квартиры",
              "example": 24
            },
            "building": {
              "description": "Информация о здании",
              "allOf": [
                {
                  "$ref": "#/components/schemas/BuildingDto"
                }
              ]
            },
            "totalArea": {
              "type": "number",
              "description": "Общая площадь",
              "example": 120.5
            },
            "balconyArea": {
              "type": "number",
              "description": "Площадь балкона",
              "example": 5.5
            },
            "internalArea": {
              "type": "number",
              "description": "Жилая площадь",
              "example": 95.5
            },
            "floor": {
              "type": "number",
              "description": "Этаж",
              "example": 7
            },
            "images": {
              "description": "Изображения",
              "allOf": [
                {
                  "$ref": "#/components/schemas/AirtableImageDto"
                }
              ]
            },
            "forRent": {
              "description": "Информация об апартаментах, которые попали в forRent таблицу",
              "allOf": [
                {
                  "$ref": "#/components/schemas/RApartmentDto"
                }
              ]
            },
            "forSale": {
              "description": "Информация об апартаментах, которые попали в forSale таблицу",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SApartmentDto"
                }
              ]
            },
            "objectType": {
              "type": "string",
              "description": "Тип объекта",
              "enum": [
                "HOUSE",
                "APARTMENT",
                "LAND"
              ],
              "example": "APARTMENT"
            },
            "buildingStatus": {
              "type": "string",
              "description": "Статус здания",
              "enum": [
                "NEWLY_CONSTRUCTED",
                "OLD_CONSTRUCTED",
                "UNDER_CONSTRUCTION"
              ],
              "example": "UNDER_CONSTRUCTION"
            },
            "propertyRights": {
              "type": "string",
              "description": "Права собственности",
              "enum": [
                "OWNER",
                "AGENT"
              ],
              "example": "OWNER"
            }
          },
          "required": [
            "uid"
          ]
        },
        "FeedProfileSchedule": {
          "type": "object",
          "properties": {
            "rate": {
              "type": "number",
              "description": "Частота обновления",
              "example": 30
            },
            "time_slots": {
              "type": "number",
              "description": "Временные слоты для обновления",
              "example": [
                8,
                12,
                16
              ]
            },
            "weekdays": {
              "description": "Дни недели для обновления",
              "example": [
                1,
                3,
                5
              ],
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          },
          "required": [
            "rate",
            "time_slots",
            "weekdays"
          ]
        },
        "FeedProfileDto": {
          "type": "object",
          "properties": {
            "agreement": {
              "type": "boolean",
              "description": "Согласие на условия использования",
              "example": true
            },
            "autoload_enabled": {
              "type": "boolean",
              "description": "Включена ли автозагрузка",
              "example": true
            },
            "report_email": {
              "type": "string",
              "description": "Email для отчетов",
              "example": "example@example.com"
            },
            "schedule": {
              "description": "Расписание обновлений",
              "allOf": [
                {
                  "$ref": "#/components/schemas/FeedProfileSchedule"
                }
              ]
            },
            "upload_url": {
              "type": "string",
              "description": "URL для загрузки",
              "example": "http://example.com/upload"
            }
          },
          "required": [
            "agreement",
            "autoload_enabled",
            "report_email",
            "schedule",
            "upload_url"
          ]
        },
        "SavedTokenDto": {
          "type": "object",
          "properties": {
            "access_token": {
              "type": "string",
              "description": "Токен доступа"
            },
            "expires_in": {
              "type": "number",
              "description": "Время истечения токена в секундах"
            },
            "token_type": {
              "type": "string",
              "description": "Тип токена",
              "default": "Bearer"
            },
            "received_at": {
              "type": "number",
              "description": "Время получения токена в формате Unix timestamp"
            }
          },
          "required": [
            "access_token",
            "expires_in",
            "token_type",
            "received_at"
          ]
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
