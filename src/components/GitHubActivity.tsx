/* eslint-disable @next/next/no-img-element */

export default function GitHubActivity({ username }: { username: string }) {
  return (
    <div className="border border-line rounded-md p-6 lg:p-8">
      <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-mute">
          GitHub Activity
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-ink-soft hover:text-ink transition-colors"
        >
          @{username}
        </a>
      </div>
      <div
        className="overflow-x-auto focus-visible:outline-1 focus-visible:outline-line py-1"
        tabIndex={0}
        role="region"
        aria-label="GitHub contribution chart"
      >
        <img
          src={`https://ghchart.rshah.org/0A0A0A/${username}`}
          alt={`${username}'s GitHub contribution chart`}
          className="min-w-[650px] w-full dark:hidden"
          loading="lazy"
          decoding="async"
        />
        <img
          src={`https://ghchart.rshah.org/FFFFFF/${username}`}
          alt={`${username}'s GitHub contribution chart`}
          className="min-w-[650px] w-full hidden dark:block"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
