export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
  }[];
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string; // Can be the URL for the image
  image: string; // This would be the `regular` image URL
  user: {
    id: string;
    name: string;
    username: string;
    url: string;
    portfolio_url: string;
    bio: string;
    location: string;
  };
  tags: { title: string }[]; // Related tags for the image
  created_at: string;
  updated_at: string;
  blur_hash: string; // Optional, for lazy loading image previews
  cover_photo: {
    id: string;
    alt_description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}
interface User {
  id: string;
  name: string;
  username: string;
  url: string;
  portfolio_url: string;
  bio: string;
  location: string;
}

interface CoverPhoto {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Photo {
  id: string;
  width: number;
  height: number;
  url: string;
  image: string;
  user: User;
  tags: string[];
  created_at: string;  // ISO 8601 string
  updated_at: string;  // ISO 8601 string
  blur_hash: string;
  cover_photo: CoverPhoto;
  links: PhotoLinks;
}