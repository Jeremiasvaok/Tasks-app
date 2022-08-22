
const { Tasks } = require('../db')

const getTasks = async (req,res)=>{
    try {
        const tasks = await Tasks.findAll({ 
            order:[
                ["createdAt", "DESC"]
            ]
        })
        const mapp = tasks.map((e)=>{
            return {
                id: e.id,
                title: e.title,
                description:e.description,
                done:e.done,
                createdAt:e.createdAt
            }
        });
        if(tasks.length === 0){
            res.status(404).send('no se encontraron tareas pendientes')
        }else{
        res.status(200).send(mapp)
        }
    } catch (error) {
      return res.status(500).json({menssage: error.menssage})
    }
}

const getTask = async (req,res)=>{
    try {
        const {id} = req.params
            let tasks = await Tasks.findByPk(id)
          if(!tasks){
          res.status(404).send(`No se ha encontrado la tarea con el id: ${id}`)
          }else{
        res.status(200).send(tasks)
          }  
    } catch (error) {
        return res.status(500).json({menssage: error.menssage})
    }
}

const updateTasks = async (req,res)=>{
  const {id}=req.params
  const {title, description} = req.body
  try {
    if(id && title && description){
    const update = await Tasks.upsert({
        id:id,
        title:title,
        description: description
    })
    res.status(404).json(update)
}else{
    res.send('no se pudo modificar la tarea')
}
  } catch (error) {
    return res.status(500).json({menssage: error.menssage})
  }
}

const createTasks = async(req,res)=>{
    try {
        const {title, description} = req.body
      let creaTasks = await Tasks.create({
        title,
        description,
        done : 0
    })
    return res.status(201).json({creaTasks});
    } catch (error) {
        return res.status(500).json({menssage: error.menssage})
    }
}

const deleteTasks = async (req,res)=>{
    try {
        const {id} = req.params;
        if(id){
        await Tasks.destroy({
            where: {
              id: id
            }
        })
        res.status(200).send('Tarea eliminada con exito')
    }else{
        res.send('No se peude completar la solicitud')
    }
    } catch (error) {
        return res.status(500).json({menssage: error.menssage})
    }
}

module.exports = {
    getTasks,
    getTask,
    updateTasks,
    createTasks,
    deleteTasks
}