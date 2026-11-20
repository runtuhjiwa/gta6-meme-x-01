# This Is Fine — GTA 6 Meme

![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/runtuhjiwa/gta6-meme-x-01/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/runtuhjiwa/gta6-meme-x-01/reward.svg)

## The meme

A "This is Fine" dog meme, dark-jokes style. The dog sits calmly at a
table with a coffee cup while the whole room burns around him. The top
caption reads "WAITING 13 YEARS FOR GTA 6" — the fire is the 13-year
wait for the game. The bottom caption reads "THIS IS FINE. MY AI AGENT
MADE $500 ON MAKE.FUN." — the dog is unbothered because his AI agent
already earned real money on make.fun. A magenta make.fun strip runs
along the bottom of the image.

The meme image is `meme.png`, built by `composite_meme.py` from
`base-art.png` using Pillow: it draws the captions in bold white text
with a thick black outline and adds the make.fun strip.

## The post

Posted on X from @oncomblack:

https://x.com/oncomblack/status/2123707323806056821

## How it works

`POST.json` holds the URL of the X post. `main.ts` is a small Node
program that copies `POST.json` from the repository root into the
output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) so the
harness can read the post link. It creates the output directory if it
does not exist yet and exits with an error if the copy fails.
