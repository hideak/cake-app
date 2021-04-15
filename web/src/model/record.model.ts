import ProductEntry from './product-entry.model';

/**
 * Class that represents the record of a service
 */
export default class Record {
  id: number;
  products: ProductEntry[];
  date: Date | null;
  time: string;
  details: string;

  /**
   * Constructor
   */
  constructor(
    id: number,
    products: ProductEntry[],
    date: Date | null,
    time: string,
    details: string
  ) {
    this.id = id;
    this.products = products;
    this.date = date;
    this.time = time;
    this.details = details;
  }
}
