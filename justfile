help:
    @just -l | sed 's/help/help (this)/g'

build target:
    @echo 'Building {{target}}…'
    @just "build_{{target}}"

build_docs:
    @tools/process-docs.sh

build_dist:
    @vite build

build_format: format

build_lint: lint

build_storybook:
    @storybook build

build_type-check: type-check

dev:
    @vite --port 3000

format:
    @echo "formatting files..."
    @pnpm prettier -w src/

lint:
    @echo "Linting files..."
    @pnpm eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0 --fix

serve:
    @vite preview

start:
    @vite --port 3000

storybook:
    @storybook dev -p 6006

test:
    @vitest run

type-check:
    @pnpm tsc --noEmit
