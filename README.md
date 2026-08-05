# Word Trainer Frontend

Приложение для изучения слов с карточками и тренировками.

## Стек

- Next.js 16
- React 19
- TypeScript
- Ant Design 6
- Tailwind CSS 4
- FSD (Feature-Sliced Design)

## Архитектура

src/
├── app/ # Роутинг и layout-ы
├── widgets/ # Блоки страниц
├── features/ # Сценарии (логин, карточка)
├── entities/ # Бизнес-сущности (пользователь, слово)
└── shared/ # Переиспользуемый код

## Установка

```bash
npm install

npm run dev
```
