import companyInfoData from '@/data/company-info.json';
import productsData from '@/data/products.json';
import teamData from '@/data/team.json';
import galleryData from '@/data/gallery.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  imagePlaceholderId: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  imagePlaceholderId: string;
};

export type GalleryImage = {
  id: string;
  imagePlaceholderId: string;
  alt: string;
};

export type CompanyInfo = {
  name: string;
  missionStatement: string;
  aboutUs: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
};

export const getCompanyInfo = (): CompanyInfo => companyInfoData;
export const getProducts = (): Product[] => productsData;
export const getTeam = (): TeamMember[] => teamData;
export const getGalleryImages = (): GalleryImage[] => galleryData;
