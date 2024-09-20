const Todo = require('../model/Todo');

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete({_id:id});
    
        res.json(
            {
                success:true,
                message:"Todo is deleted"
            }
        )
    }
    catch(error) {
        res.status(500).json(
            {
                success:false,
                error:error.message,
                message:"Server error"

            }
        )
    }
}