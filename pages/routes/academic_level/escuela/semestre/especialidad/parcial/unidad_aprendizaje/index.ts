import type { NextApiRequest, NextApiResponse } from "next";
import { getUnidadAprendizaje } from "pages/controllers/unidad_aprendizaje";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET":              
          
          return await getUnidadAprendizaje(req, res);
          
        case "POST":
          return res.status(405).json({estado: 'todo mal', estatus: res.status, resultado: ''});
      }
    
}