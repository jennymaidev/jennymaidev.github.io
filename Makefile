.ONESHELL:
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

ENV_FILE := .env.local

# Load .env.local (if present) into the shell for every recipe, so
# GOOGLE_API_KEY / GEMINI_API_KEY / OVERLEAF_TOKEN / LOOKING_FOR_WORK_MODE
# are available to the plain node scripts (which don't use dotenv).
define load_env
if [ -f $(ENV_FILE) ]; then set -a; source $(ENV_FILE); set +a; fi
endef

.PHONY: all deploy install daily-project resume build localdeploy clean

## Full pipeline: install deps, generate daily project, refresh resume (if possible), build, deploy
all: deploy

deploy: install daily-project resume build localdeploy
	@echo "Deploy complete."

install:
	@echo "==> Installing dependencies"
	npm install

daily-project:
	@echo "==> Generating daily project with Gemini"
	@$(load_env)
	if [ -z "$${GOOGLE_API_KEY:-}" ] && [ -z "$${GEMINI_API_KEY:-}" ]; then \
		echo "Skipping: no GOOGLE_API_KEY/GEMINI_API_KEY set (check $(ENV_FILE))"; \
	else \
		node src/assets/files/generateDailyProject.mjs; \
	fi

resume:
	@echo "==> Refreshing resume PDF"
	@$(load_env)
	if [ "$${LOOKING_FOR_WORK_MODE:-}" != "true" ]; then \
		echo "Skipping: LOOKING_FOR_WORK_MODE is not 'true'"; \
	elif [ -z "$${OVERLEAF_TOKEN:-}" ]; then \
		echo "Skipping: no OVERLEAF_TOKEN set (check $(ENV_FILE))"; \
	elif ! command -v pdflatex >/dev/null 2>&1; then \
		echo "Skipping: pdflatex not found (install via 'brew install --cask mactex-no-gui')"; \
	else \
		node src/assets/files/downloadResume.js; \
	fi

build:
	@echo "==> Building production bundle"
	npm run build

localdeploy:
	@echo "==> Pushing build/ to gh-pages branch"
	npm run localdeploy

clean:
	rm -rf build
