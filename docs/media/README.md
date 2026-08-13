# Demo Media

The screenshots and GIFs in this directory use synthetic public data.

Run `npm run capture:demos` to regenerate the PNG screenshots and WebM source recordings. The WebM files are intentionally ignored by Git. GIFs can be regenerated with FFmpeg:

```bash
ffmpeg -y -i docs/media/video/standard-html.webm -filter_complex "[0:v]fps=10,scale=960:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4" docs/media/standard-html-demo.gif
ffmpeg -y -i docs/media/video/react.webm -filter_complex "[0:v]fps=10,scale=960:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4" docs/media/react-demo.gif
```
