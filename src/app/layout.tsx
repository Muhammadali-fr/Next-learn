export default function RootLayout(
    {
      children
    }: {    
      children: React.ReactNode;
    }
  ) {
    return (
      <html lang="en">
        <body style={{ display: 'flex' }}>
            <h1>header</h1>
          <main style={{ padding: '20px', flex: 1 }}>
            {children}
          </main>
        </body>
      </html>
    );
  }