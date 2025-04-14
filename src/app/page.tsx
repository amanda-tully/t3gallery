import Link from "next/link";

const mockUrls = [
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoILvKWqNMTGruRNDbf86ZaKhFy0tC7LOX3YWs",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoCzevJKEmO527k0FwYhx6fDeTIoZ8EuvqipAs",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoS8n2foex9cPCQVrXyzDnfTAGmO2BHUWhajKF",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoo9axMMrMwnYE0xs4Vl9TzQvaDuejm2JrLNHX",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoXWUZh0GvlToI7ajS3F1Wg5ympwEM0nBNiKfV",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoQc5zCuTq8Pn1hXCpQ7WExiGB23guU4cOwT6a",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoHWUWQfd4N6v8r0sPDZSOXEiM7mYcobu1qjxz",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVovQjR8GAGqkTOPo9RXCiJbtfZ6A3KQvaIjygY",
  "https://qyieefd79u.ufs.sh/f/fcF0jp2zvrVoHWyvigI4N6v8r0sPDZSOXEiM7mYcobu1qjxz",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-2">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
        Hello gallery in progress
      </div>
    </main>
  );
}
