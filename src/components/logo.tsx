
import { Wheat } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Wheat className="h-8 w-8 text-primary" />
      <span className="text-xl font-semibold font-headline text-foreground">
        PadiPro
      </span>
    </div>
  );
}
