import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-white section-padding min-h-[60vh] flex items-center">
      <div className="container-tight text-center max-w-lg">
        <p className="text-6xl font-bold text-brand mb-4">404</p>
        <h1 className="text-2xl mb-4">Sidan kunde inte hittas</h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Sidan du letade efter finns inte eller har flyttats. Testa att navigera
          via menyn eller gå tillbaka till startsidan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="rounded-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white px-6 h-11"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Till startsidan
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] px-6 h-11"
          >
            <Link href="/kontakt">Kontakta oss</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
