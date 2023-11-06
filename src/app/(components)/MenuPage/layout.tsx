

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className="bg-white min-h-full min-w-full ">
    {children}
   </div>
  )
}
