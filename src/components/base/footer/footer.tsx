import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Icons } from "@/components/shared/icons";
import { CurrentTime } from "./current-time";

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            className="glow-fx-alt"
            target="_blank"
            rel="noreferrer"
            href="mailto:quelchx@gmail.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-7 w-7" />
          </a>
          <a
            className="glow-fx-alt"
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
          >
            <span className="sr-only">Linkedin</span>
            <Icons.linkedin className="h-7 w-7" />
          </a>
          <a
            className="glow-fx-alt"
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
          >
            <span className="sr-only">GitHub</span>
            <Icons.github className="h-7 w-7" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a
            className="glow-fx-alt cursor-pointer"
            href={siteConfig.links.resume}
            download
            target="_blank"
          >
            {siteConfig.author} - <CurrentTime />
          </a>
        </div>
      </div>
    </footer>
  );
}
