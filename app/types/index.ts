export enum SocialPlatform  {
  instagram = 0,
  threads = 59,
  tiktok = 6,
  twitter = 7

}
export interface User {
  id: string;
  fullName: string;
  handle: string;
  altId: string;
  userType: number;
  categoryId: string;
  urlPath: string;
  hasPhoto: boolean;
  about: string;
  createdUtc: string;
  updatedUtc: string;
  imageUpdatedUtc: string;
}

export interface UserSocialPlatform {
  id: string;
  altId: string;
  userId: string;
  socialPlatform: SocialPlatform;
  handle: string;
  link: string;
  createdUtc: string;
}

export interface Content {
  content: {
    id: string;
    altId: string;
    title: string;
    contentType: number;
    mimeType: number;
    categoryAltId: string;
    link: string;
    isDraft: boolean;
    isDirectLinkEnabled: boolean;
    isEmbedEnabled: boolean;
    hasPhoto: boolean;
    sortOrder: number;
    isFeatured: boolean;
    isDeleted: boolean;
    isEditable: boolean;
    socialPlatform: number;
    userId: string;
    createdUtc: string;
    updatedUtc: string;
    imageUpdatedUtc: string;
  };
  childCount: number;
  imageCount: number;
  videoCount: number;
  contentSettings: any;
}


