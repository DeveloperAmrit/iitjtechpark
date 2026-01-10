import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecosystem',
  description: 'Explore our thriving ecosystem of incubated startups, corporate partners, research labs, and mentors driving innovation.',
};

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
