import { readdirSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const galleryPath = join(process.cwd(), 'public', 'photos_portfolio');

  try {
    const files = readdirSync(galleryPath).filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    return Response.json({ images: files });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read images' }), {
      status: 500,
    });
  }
}
