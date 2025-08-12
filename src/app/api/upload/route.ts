import { IncomingForm } from "formidable";
import path from "path";
import { IncomingMessage } from "http";

export const config = {
  api: {
    bodyParser: false, // importante para formidable
  },
};

export async function POST(req: Request) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), "/public/uploads"),
      keepExtensions: true,
    });
    form.parse(req as unknown as IncomingMessage, (err, fields, files) => {
      if (err) {
        reject(
          new Response(JSON.stringify({ error: "Error uploading file" }), {
            status: 500,
          })
        );
        return;
      }

      resolve(
        new Response(
          JSON.stringify({
            fields,
            file:
              files.file && files.file[0] ? files.file[0].newFilename : null,
            path:
              files.file && files.file[0]
                ? `/uploads/${files.file[0].newFilename}`
                : null,
          }),
          { status: 200 }
        )
      );
    });
  });
}
