export abstract class SearchStrategy {
  abstract makeURI(): string;
  abstract useable(): boolean;
}

export class TagSearchStrategy implements SearchStrategy {
  parameters: string[];
  typing: boolean;
  constructor(parameters: string[], typing: boolean) {
    this.parameters = parameters;
    this.typing = typing;
  }

  makeURI(): string {
    const query = this.parameters.map((el) => el.trim()).join(',');
    return `/search?type=tag&q=${encodeURIComponent(query)}`;
  }

  useable(): boolean {
    return this.parameters.length > 0 && !this.typing;
  }
}

export class TextSearchStrategy implements SearchStrategy {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  makeURI(): string {
    return `/search?type=normal&q=${encodeURIComponent(this.text)}`;
  }

  useable(): boolean {
    return this.text.length > 0;
  }
}
