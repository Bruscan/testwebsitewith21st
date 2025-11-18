import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Empty className="border-0">
        <EmptyHeader>
          <EmptyMedia>
            <div className="relative">
              {/* Glowing 404 */}
              <div className="text-[120px] md:text-[180px] font-bold leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
                  404
                </span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl opacity-30">
                <div className="text-[120px] md:text-[180px] font-bold text-white leading-none">
                  404
                </div>
              </div>
            </div>
          </EmptyMedia>
          <EmptyTitle className="text-white text-2xl md:text-3xl">
            Sidan kunde inte hittas
          </EmptyTitle>
          <EmptyDescription className="text-neutral-400 text-base md:text-lg">
            Den här sidan verkar inte finnas. Den kan ha flyttats eller tagits bort.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link href="/">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 font-semibold"
            >
              Tillbaka till startsidan
            </Button>
          </Link>
        </EmptyContent>
      </Empty>
    </div>
  );
}
