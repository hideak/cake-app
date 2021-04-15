/**
 * A DTO that represents a request to create a product
 */
export default class ProductCreate {
  name: string;
  defaultPrice: number | null;
  details: string;

  /**
   * Constructor
   */
  constructor(name: string, defaultPrice: number | null, details: string) {
    this.name = name;
    this.defaultPrice = defaultPrice;
    this.details = details;
  }
}
