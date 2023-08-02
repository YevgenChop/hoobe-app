import { SocialPlatform } from '@/app/types';
import { Instagram, Threads, Tiktok, Twitter } from '@/app/assets';

export const HOST = process.env.HOST || 'http://localhost:3000'

export const socialLogoMap: Record<SocialPlatform, string> = {
  [SocialPlatform.instagram]: Instagram,
  [SocialPlatform.threads]: Threads,
  [SocialPlatform.tiktok]: Tiktok,
  [SocialPlatform.twitter]: Twitter,
}