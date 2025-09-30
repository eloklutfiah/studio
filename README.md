# PadiPro - Company Profile Website

This is a modern company profile website for "PadiPro", an agricultural company specializing in rice cultivation. It is built with Next.js, TypeScript, and Tailwind CSS, focusing on a visually rich, responsive, and content-first experience.

The project uses the Next.js App Router and fetches all its content from static JSON files located in the `src/data` directory.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Modifying Content

All content for the website is managed through simple JSON files. This makes it easy to update information without touching the code.

- **Company Information**: To change the company's mission, "About Us" text, or contact details, edit `src/data/company-info.json`.
- **Products**: To add, remove, or edit products, modify the array in `src/data/products.json`.
- **Team Members**: Team profiles can be managed in `src/data/team.json`.
- **Image Gallery**: The images in the gallery are defined in `src/data/gallery.json`.
- **Images**: All images are placeholders. To change them, update `src/lib/placeholder-images.json`. You can provide new URLs for your own images.

## Project Structure

- `src/app/`: Contains the page routing and layouts.
  - `page.tsx`: The main homepage.
  - `contact/page.tsx`: The contact page.
  - `layout.tsx`: The root layout, including fonts, header, and footer.
- `src/components/`: Reusable React components.
  - `sections/`: Components that represent major sections of the homepage.
  - `ui/`: UI components from shadcn/ui.
- `src/data/`: Static JSON files that act as a database for the site's content.
- `src/lib/`: Utility functions, data fetching logic, and image placeholder definitions.
- `src/ai/`: Contains the Genkit AI flow for summarizing product descriptions.
- `public/`: Static assets (if any).

## Deployment

This Next.js app is ready for deployment on any platform that supports Next.js, such as Vercel, Netlify, or Firebase App Hosting.

For Firebase App Hosting, the `apphosting.yaml` file is already configured. Simply connect your project to a Firebase backend.
