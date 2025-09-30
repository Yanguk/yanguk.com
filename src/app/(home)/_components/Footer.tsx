import SocialIcon from "@/components/social-icons";
import { siteMetadata } from "@/site-meta-data";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full">
      <div className="flex gap-6">
        <div className="text-sm flex gap-3">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
        </div>

        <div className="flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="sm"
          />

          <SocialIcon kind="github" href={siteMetadata.github} size="sm" />
        </div>
      </div>
    </footer>
  );
}
