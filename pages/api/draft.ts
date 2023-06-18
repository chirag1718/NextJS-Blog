import { NextApiRequest, NextApiResponse } from "next";

export default function draft(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: "/" });
  res.end("draft mode is enabled");
}
