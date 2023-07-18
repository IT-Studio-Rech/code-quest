export class LocalStorageHandler {
  static cartKey = 'shoppingCart';

  // Add a product to the cart
  public static addProductToShoppingCart(productId: number, quantity: number): void {
    const cart = this.getShoppingCart();
    cart[productId] = quantity;
    this.setShoppingCart(cart);
  }

  // Remove a product from the cart
  public static removeProductFromShoppingCart(productId: number): void {
    const cart = this.getShoppingCart();
    delete cart[productId];
    this.setShoppingCart(cart);
  }

  // Get the current state of the cart
  public static getShoppingCart(): { [productId: number]: number } {
    return JSON.parse(localStorage.getItem(this.cartKey) || '{}');
  }

  // Update the state of the cart
  private static setShoppingCart(cart: { [productId: number]: number }): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
