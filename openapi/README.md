# OpenAPI

## 仕様書確認

```bash
 docker run -p 8081:8080 \
  -e SWAGGER_JSON=/foo/openapi.yml \
  -v $(pwd):/foo \
  swaggerapi/swagger-ui
```

コンテナ起動後に[Swagger-UI](http://localhost:8080/swagger-ui/index.html)にアクセス
更新後は再起動

# 参照

[Swagger](https://swagger.io/docs/specification/v3_0/basic-structure/)