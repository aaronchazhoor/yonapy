export interface Source {
  title: string;
  link: string;
  displayLink: string;
  isFamilyFriendly: boolean;
  displayUrl: string;
  snippet: string;
  deepLinks: { snippet: string; name: string; url: string }[];
  dateLastCrawled: string;
  cachedPageUrl: string;
  language: string;
  primaryImageOfPage?: {
    thumbnailUrl: string;
    width: number;
    height: number;
    imageId: string;
  };
  isNavigational: boolean;
}
