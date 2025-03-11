import cartModel from "../models/cartModel.js";

export async function fetchCart(req, res) {
  try {
    const userId = req.user._id;
    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");

    if (!cart) {
      return res.status(200).json({ message: "Cart is empty", items: [] });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.log("Error fetching cart:", error);
    res.status(500).send({ message: "Error fetching cart" });
  }
}

// Add product to cart
export async function addToCart(req, res) {
  try {
    const userId = req.user._id;
    const { user, items, product, quantity } = req.body;

    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      cart = new cartModel({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === product
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }

    await cart.save();
    const updatedCart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).send({ message: "Problem adding product to cart" });
  }
}
