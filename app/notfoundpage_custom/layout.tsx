// app/not-found/layout.tsx
export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; // Render only the 404 content without the global layout
  }
  