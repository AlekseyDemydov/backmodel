import Model from "../models/Model.js";

// Контролер для створення нового продукту
export const createModel = async (req, res) => {
  try {
    const {
      name,
      height,
      weight,
      age,
      priceOne,
      priceThree,
      priceNight,
      tgAdmin,
      imageUrl,
    } = req.body;

    const model = new Model({
      name,
      height,
      weight,
      age,
      priceOne,
      priceThree,
      priceNight,
      tgAdmin,
      imageUrl: Array.isArray(imageUrl) ? imageUrl : [imageUrl],
    });

    const savedModel = await model.save();
    res.status(201).json(savedModel);
  } catch (error) {
    console.error("Ошибка при создании модели:", error);
    res.status(500).json({
      message: "Не удалось создать модель",
    });
  }
};


// Контролер для отримання всіх продуктів
export const getAllModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch (error) {
    console.error("Помилка при отриманні продуктів:", error);
    res.status(500).json({
      message: "Не вдалося отримати список продуктів",
    });
  }
};

// Контролер для отримання одного продукту
export const getOneModel = async (req, res) => {
  try {
    const modelId = req.params.id;
    const model = await Model.findById(modelId);

    if (!model) {
      return res.status(404).json({ message: "Продукт не знайдено" });
    }

    res.json(model);
  } catch (error) {
    console.error("Помилка при отриманні продукту:", error);
    res.status(500).json({
      message: "Не вдалося отримати продукт",
    });
  }
};

// Контролер для видалення продукту
export const deleteModel = async (req, res) => {
  try {
    const modelId = req.params.id;
    const deletedModel = await Model.findByIdAndDelete(modelId);
    if (!deletedModel) {
      return res.status(404).json({ message: "Продукт не знайдено" });
    }
    res.json({ message: "Продукт успішно видалено" });
  } catch (error) {
    console.error("Помилка при видаленні продукту:", error);
    res.status(500).json({ message: "Не вдалося видалити продукт" });
  }
};

// Контролер для оновлення продукту
export const updateModel = async (req, res) => {
  try {
    const modelId = req.params.id;
    const updatedModel = await Model.findByIdAndUpdate(modelId, req.body, {
      new: true,
      runValidators: true, // Виконує валідацію при оновленні
    });
    if (!updatedModel) {
      return res.status(404).json({ message: "Продукт не знайдено" });
    }
    res.json(updatedModel);
  } catch (error) {
    console.error("Помилка при оновленні продукту:", error);
    res.status(500).json({ message: "Не вдалося оновити продукт" });
  }
};
