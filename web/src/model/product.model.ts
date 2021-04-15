import SortableListItem from './interface/sortable-list-item.interface';

/**
 * Class that represents the a product provided
 */
export default class Product implements SortableListItem {
  id: number;
  name: string;
  defaultPrice: number | null;
  details: string;

  /**
   * Constructor
   */
  constructor(
    id: number,
    name: string,
    defaultPrice: number | null,
    details: string
  ) {
    this.id = id;
    this.name = name;
    this.defaultPrice = defaultPrice;
    this.details = details;
  }
}
