export type Frame = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
  tone: "ceremony" | "portrait" | "detail" | "candid" | "celebration";
};

const W1 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark";
const W2 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%202_%20Saed%20%26%20Nour";
const W3 = "/Landing%20Page/Photo_s%20To%20Use/Wedding%203%20_%20Saja%20and%20Ahmed/Photos";

export const FRAMES: Frame[] = [
  { src: `${W1}/DSC01580.jpg`,                  alt: "A quiet walk beneath the trees",        orientation: "landscape", tone: "candid" },
  { src: `${W3}/DSCF0352-Enhanced-NR.jpg`,      alt: "Golden hour by the water",              orientation: "portrait",  tone: "portrait" },
  { src: `${W2}/MUS04777.jpg`,                  alt: "A tender moment under the veil",        orientation: "portrait",  tone: "portrait" },
  { src: `${W1}/DSC01741-2.jpg`,                alt: "Held close on the garden steps",        orientation: "landscape", tone: "candid" },
  { src: `${W2}/MUS04371.jpg`,                  alt: "Pausing together by the bridge",        orientation: "landscape", tone: "portrait" },
  { src: `${W3}/DSC02664-Enhanced-NR.jpg`,      alt: "Rings resting on a folded ribbon",      orientation: "portrait",  tone: "detail" },
  { src: `${W1}/DSCF7916.jpg`,                  alt: "A waiting bouquet",                     orientation: "portrait",  tone: "detail" },
  { src: `${W2}/MUS04092.jpg`,                  alt: "The first look, between flowers",       orientation: "landscape", tone: "ceremony" },
  { src: `${W3}/DSC07127-Enhanced-NR-3.jpg`,    alt: "Hands, and the weight of a promise",    orientation: "portrait",  tone: "detail" },
  { src: `${W1}/DSC01508.jpg`,                  alt: "A laugh caught mid-sentence",           orientation: "landscape", tone: "candid" },
  { src: `${W2}/MUS04506.jpg`,                  alt: "Stillness beneath the great tree",      orientation: "landscape", tone: "portrait" },
  { src: `${W3}/DSC02892-Enhanced-NR.jpg`,      alt: "Held close where the tide meets",       orientation: "landscape", tone: "candid" },
  { src: `${W1}/DSC01662-2.jpg`,                alt: "Drifting through the morning mist",     orientation: "landscape", tone: "portrait" },
  { src: `${W3}/DSC00348-Enhanced-NR.jpg`,      alt: "A vow, spoken softly",                  orientation: "landscape", tone: "ceremony" },
  { src: `${W2}/MUS02754.jpg`,                  alt: "Gold and candlelight, the small things",orientation: "landscape", tone: "detail" },
  { src: `${W1}/DSC01774-2.jpg`,                alt: "A long look, before anyone noticed",    orientation: "portrait",  tone: "portrait" },
];

export const FILMS = [
  {
    src: "/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%201_%20Mark%20%26%20Fatima/MARK%20AND%20FATIMA%20REEL%204K.mp4",
    poster: `${W1}/DSC01580.jpg`,
    label: "Highlight Film I",
    caption: "A wedding day, start to last light",
  },
  {
    src: "/Landing%20Page/Video_s%20To%20Possibly%20Show/Wedding%202_%20Nour%20%26%20Saed/Copy%20of%20Wedding_Reel%201_V1.mp4",
    poster: `${W2}/MUS04371.jpg`,
    label: "Highlight Film II",
    caption: "Slow glances, and the in-between",
  },
];

