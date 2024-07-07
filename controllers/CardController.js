import Card from "../models/Card.js"; // Імпортуємо модель Product

// Контролер для створення нового продукту
export const createCard = async (req, res) => {
  try {
    const {
      numberCard,
      numberCardSBP,
      bank,
      name
    } = req.body;

    const card = new Card({
      numberCard,
      numberCardSBP,
      bank,
      name
    });

    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error) {
    console.error("Помилка при створенні карту:", error);
    res.status(500).json({
      message: "Не вдалося створити карту",
    });
  }
};

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error("Помилка при отриманні продуктів:", error);
    res.status(500).json({
      message: "Не вдалося отримати список продуктів",
    });
  }
};

export const getOneCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: "Карта не знайдено" });
    }

    res.json(card);
  } catch (error) {
    console.error("Помилка при отриманні карти:", error);
    res.status(500).json({
      message: "Не вдалося отримати карту",
    });
  }
};


export const updateCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    const updateCard = await Card.findByIdAndUpdate(cardId, req.body, {
      new: true,
    });
    if (!updateCard) {
      return res.status(404).json({ message: "Продукт не знайдено" });
    }
    res.json(updateCard);
  } catch (error) {
    console.error("Помилка при оновленні продукту:", error);
    res.status(500).json({ message: "Не вдалося оновити продукт" });
  }
};
