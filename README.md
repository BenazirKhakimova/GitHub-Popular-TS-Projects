This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Настройка окружения

Для работы с GitHub API необходимо настроить переменные окружения. Вы можете сделать это одним из двух способов:

### 1. Создание файла `.env.development`

В корне проекта создайте файл `.env.development` и добавьте в него следующие переменные:

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=ваш_токен_доступа
NEXT_PUBLIC_BASE_URL=https://api.github.com
```

Замените `ваш_токен_доступа` на ваш личный токен доступа к GitHub API[1].

### 2. Настройка в Codesandbox

**В качестве альтернативы вы можете установить переменные окружения в настройках Codesandbox:**

1. Откройте ваш проект в Codesandbox.
2. Перейдите на вкладку "Настройки".
3. Добавьте следующие переменные:
   - `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN` с вашим токеном доступа к GitHub API.
   - `NEXT_PUBLIC_BASE_URL` со значением `https://api.github.com`.

--- 

Убедитесь, что вы не добавляете токен доступа в публичный репозиторий. Храните его в безопасности и не делитесь с другими.

## Начало работы

Сначала запустите сервер разработки:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.