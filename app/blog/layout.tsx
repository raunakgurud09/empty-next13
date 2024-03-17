

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <main className="w-full">
        <h1 className="sr-only">raunak gurud blog</h1>
        {children}
      </main>
    </div>
  )
}
