import ProductEntry from '../product-entry.model';

/**
 * A DTO that represents a request to create a record
 */
export default class RecordCreate {
  products: ProductEntry[];
  date: Date | null;
  time: string;
  details: string;

  /**
   * Constructor
   */
  constructor(
    products: ProductEntry[],
    date: Date | null,
    time: string,
    details: string
  ) {
    this.products = products;
    this.date = date;
    this.time = time;
    this.details = details;
  }
}
