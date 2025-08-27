# app-sample

## OpenAPI Generator コード生成手順

```bash
openapi-generator generate \
  -i ./openapi/openapi.yml \
  -g kotlin-spring \
  -o ./backend \
  --ignore-file-override ./backend/.openapi-generator-ignore

# ・ -i: OpenAPI定義ファイルのパス
# ・ -g: 使用するジェネレータ(kotlin-spring)
# ・ -o: 出力先ディレクトリ
```
