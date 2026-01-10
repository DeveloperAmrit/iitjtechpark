import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated with the latest news, investment announcements, partnership deals, and upcoming events at IIT Jodhpur Tech Park.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
