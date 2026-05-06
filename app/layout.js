export const metadata = {
  title: "StartupGrow | Digital Solutions for Indian Startups",
  description:
    "StartupGrow helps Indian startups request affordable web development, branding, SEO, social media, and marketing services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
