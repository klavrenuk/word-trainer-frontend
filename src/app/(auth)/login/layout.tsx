export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full items-center justify-center safety-auth-zone">
      {children}
    </div>
  );
}
