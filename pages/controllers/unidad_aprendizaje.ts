import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "pages/config/db";
//import {a} from "typings";

type Data =
  | { message: string }
  | {
      id_ua: number;
      valida_ua: boolean;
      nombre_ua: string;
      id_sem: number;
      id_es: number;
    };
export const getUnidadAprendizaje = async (req: NextApiRequest, res: NextApiResponse <Data>) => {
  try {
    const DATA_UA = await pool.query("SELECT * FROM CUAprendizaje");
    console.log(DATA_UA);
    
    // console.log({ RESPONSE_POKE });
    /*const UNIDADES_APRENDIZAJE = await DATA_UA.map(async (unidadap:{id_ua: Number, valida_ua: Boolean, nombre_ua: String, id_es: Number, id_sem: Number}) => {
      
      const { id_ua } = await unidadap;
      // console.log({ id_ua });
      const [DATA_SEM] = await pool.query("SELECT tipo_sem FROM CSemestre INNER JOIN CUAprendizaje ON CSemestre.id_sem = cuaprendizaje.id_sem  where CUAprendizaje.id_ua = ?;")
      [id_ua]

      const [DATA_ESP] = await pool.query("SELECT nombre_es FROM CEspecialidad INNER JOIN CUAprendizaje ON CEspecialidad.id_es = CUAprendizaje.id_es where CUAprendizaje.id_ua = ?;")
      [id_ua]

      // console.log({ data: data[0] });

      const FORMAT_DATA = await {
        ...unidadap,
        DATA_SEM,
        DATA_ESP
      };
      // console.log({FORMAT_DATA});*/
      return res.status(200).json({message: 'funcionó'})
    }catch(error: any){
        console.log(error);
        
    }

}


