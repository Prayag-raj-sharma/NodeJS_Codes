const Todo = require('../model/Todo')

exports.getTodos = async(req,res) => {
    try {
        console.log(Todo)
        const todos = await Todo.find({});

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Todos till now"
            }
        )
    }
    catch(error) {
        console.error(error)
        console.log(error)
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message: error.message
            }
        )
    }
}


exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id
        const todo = await Todo.findById({_id:id})

        if(!todo) {
            res.status(400).json(
                {
                    success:false,
                    data:todo,
                    message:"No data can be found for this id"
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Todo by this id"
            }
        )
    }
    catch(error) {
        console.error(error)
        console.log(error)
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message: error.message
            }
        )
    }
}