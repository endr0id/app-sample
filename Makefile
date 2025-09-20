COMPOSE_FILE = ./docker/docker-compose.yml

# api起動
boot-api:
	cd backend/demo && ./gradlew bootRun

# コンテナ起動
up:
	docker compose -f $(COMPOSE_FILE) up -d

# コンテナ停止
down:
	docker compose -f $(COMPOSE_FILE) down

# 全サービスのログ表示
logs:
	docker compose -f $(COMPOSE_FILE) logs

# OpenAPIから Controller & Model 生成
generate-api:
	docker compose -f $(COMPOSE_FILE) run --rm openapi-generator \
		generate \
		-i /generator/openapi.yml \
		-g kotlin-spring \
		--additional-properties=interfaceOnly=true,skipDefaultInterface=false,useSpringBoot3=true \
		-o /local/backend \
		--api-package com.example.demo.generated.api \
		--model-package com.example.demo.generated.model \
		--skip-overwrite