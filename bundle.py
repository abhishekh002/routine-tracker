import os

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

bundled_html = html.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>\n{css}\n</style>'
).replace(
    '<script src="app.js"></script>',
    f'<script>\n{js}\n</script>'
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(bundled_html)

print("BUNDLE COMPLETE: index.html is now 100% self-contained.")
