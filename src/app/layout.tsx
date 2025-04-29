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
        <aside style={{ width: '200px', background: '#111', color: '#fff', padding: '20px' }}>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </aside>
        <main style={{ padding: '20px', flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
