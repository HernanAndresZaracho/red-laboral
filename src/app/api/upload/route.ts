import { IncomingForm } from "formidable";
import path from "path";
import { IncomingMessage } from "http";

export const config = {
  api: {
    bodyParser: false, // importante para formidable
  },
};

export async function POST(req: Request): Promise<Response> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), "/public/uploads"),
      keepExtensions: true,
    });
    form.parse(req as unknown as IncomingMessage, (err, fields, files) => {
      if (err) {
        resolve(
          // cambia reject por resolve para devolver un Response correcto
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
              files.file && Array.isArray(files.file) && files.file[0]
                ? files.file[0].newFilename
                : null,
            path:
              files.file && Array.isArray(files.file) && files.file[0]
                ? `/uploads/${files.file[0].newFilename}`
                : null,
          }),
          { status: 200 }
        )
      );
    });
  });
}
