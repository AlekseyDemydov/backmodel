import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import dotenv from "dotenv";

// Імпортуємо моделі користувачів, продуктів і замовлень
import { User, Model, Card } from "./models/index.js";

// Імпортуємо контролери для роботи з роутами
import {
  createModel,
  getAllModels,
  getOneModel,
  deleteModel,
  updateModel,
  getMe,
  createUser,
  createCard,
  getAllCards,
  updateCard,
  getOneCard,
} from "./controllers/index.js";

// Завантажуємо змінні середовища
dotenv.config();

// Підключаємось до бази даних MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error", err));

// Створюємо екземпляр додатку Express
const app = express();
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:3000";

// Використовуємо middlewares для Express
app.use(cors({
  origin: allowedOrigin,
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true
}));
app.use(express.json()); // Для роботи з JSON даними
app.use(helmet()); // Для підвищення безпеки
app.use("/uploads", express.static("uploads"));

// Налаштовуємо сховище для завантажуваних файлів за допомогою multer
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

// Налаштовуємо multer з нашою конфігурацією сховища для загрузки множини файлів
const upload = multer({ storage }).array("images", 10); // "images" — имя поля в форме для загрузки, 10 — максимальное количество файлов

// Маршрут для обробки завантаження файлів
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ message: "Ошибка загрузки файлов", error: err });
    } else if (err) {
      return res.status(500).json({ message: "Не вдалося завантажити файли", error: err });
    }
    
    // Все файли успішно завантажені, продовжуємо обробку
    const urls = req.files.map(file => `/uploads/${file.originalname}`);
    res.json({ urls: urls });
  });
});

// Додаємо моделі до контексту додатку Express
app.set("UserModel", User);
app.set("ModelModel", Model);
app.set("CardModel", Card);

// Маршрути для реєстрації та входу користувача
app.get("/me", getMe);
app.post("/me", createUser);

// Маршрути для отримання всіх продуктів, отримання одного продукту та створення нового продукту
app.get("/girls", getAllModels);
app.get("/girls/:id", getOneModel);
app.post("/girls", createModel);
app.delete("/girls/:id", deleteModel);
app.put("/girls/:id", updateModel);

// Маршрути для отримання всіх карток, отримання однієї картки та створення нової картки
app.get("/card", getAllCards);
app.post("/card", createCard);
app.get("/card/:id", getOneCard);
app.put("/card/:id", updateCard);

// Маршрут, що викликається, якщо запит не знайдено
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Middleware для обробки помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Порт, на якому запускається сервер
const PORT = process.env.PORT || 4444;

// Прослуховуємо порт та виводимо повідомлення про запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
