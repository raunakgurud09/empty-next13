

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen ">

      <main className="max-w-[1360px] mx-auto">
        <h1 className="sr-only">raunak gurud blog</h1>
        {children}
      </main>
    </div>
  )
}
