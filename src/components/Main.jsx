export default function Main({ children, customCSS }) {
  return (
    <main
      className={`min-h-[calc(100vh-112px)] p-4 relative ${
        customCSS ? customCSS : ''
      }`.trim()}
    >
      {children}
    </main>
  );
}
