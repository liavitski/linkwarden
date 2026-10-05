import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';
import { APP_TITLE, DARK_TOKENS } from '@/utils/constants';
import { manrope } from '@/utils/fonts';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const title = APP_TITLE;
const description =
  'Linkwarden is a fully self-hostable, open-source collaborative bookmark manager to collect, organize and archive webpages.';
const url = 'https://linkwarden-self.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Linkwarden',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={DARK_TOKENS as React.CSSProperties}
      className={`${manrope.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <MaxWidthWrapper className={`${manrope.variable}`}>
            {children}
          </MaxWidthWrapper>
        </StyledComponentsRegistry>
        <GlobalStyles />
      </body>
    </html>
  );
}
