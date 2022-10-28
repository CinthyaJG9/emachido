const querys = {
    allLern: "SELECT * FROM CUAprendizaje",
    tipoSem: "SELECT tipo_sem FROM CSemestre INNER JOIN CUAprendizaje ON CSemestre.id_sem = cuaprendizaje.id_sem  where CUAprendizaje.id_ua = ?",
    nombreEs: "SELECT nombre_es FROM CEspecialidad INNER JOIN CUAprendizaje ON CEspecialidad.id_es = CUAprendizaje.id_es where CUAprendizaje.id_ua = ?"
}

 export {querys}