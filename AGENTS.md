<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio, logo and founder images are real files in src/assets, loaded via src/assets/portfolio/index.ts (import.meta.glob) so local builds render them.
- The contact form keeps a matching hidden SSR form in the root shell so Netlify can register its fields at deploy time.
