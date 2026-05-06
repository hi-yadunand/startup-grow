import "./globals.css";

export const metadata = {
  title: "STARTUPGROW | A Digital Solutions Platform for Indian Startups",
  description:
    "StartupGrow is a web-based digital solutions platform that helps Indian startups build their online presence through web development and marketing services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
