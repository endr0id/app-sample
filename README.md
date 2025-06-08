# app-sample

## OpenAPI Generator コード生成手順

```bash
openapi-generator generate -i ./openapi/openapi.yml -g kotlin-spring -o ./openapi/generated/backend

# ・ -i: OpenAPI定義ファイルのパス
# ・ -g: 使用するジェネレータ(kotlin-spring)
# ・ -o: 出力先ディレクトリ
```
