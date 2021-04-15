/**
 * Class that represents a release item from the release notes
 */
export default class ReleaseItem {
  version: string;
  descriptions: string[];

  /**
   * Constructor
   */
  constructor(
    version: string,
    descriptions: string[]
  ) {
    this.version = version;
    this.descriptions = descriptions;
  }
}
