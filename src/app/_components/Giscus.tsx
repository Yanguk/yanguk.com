"use client";

import Giscus from "@giscus/react";

export const GiscusWrapper = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Giscus
        id="comments"
        repo="Yanguk/yanguk.github.io"
        repoId="R_kgDOP3Wgvg"
        category="Announcements"
        categoryId="DIC_kwDOP3Wgvs4C1swo"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};
