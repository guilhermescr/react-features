export default function Main({ children, customCSS }) {
  return (
    <main className={`p-4 ${customCSS ? customCSS : ''}`.trim()}>
      {children}
    </main>
  );
}
