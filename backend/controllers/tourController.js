import Tour from '../models/Tour.js'

//create new tour
export const createTour = async (req,res)=>{
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()
        res.status(200).json({success:true,message:"Successfully created",data:savedTour})
    } catch(err){
        res.status(500).json({success:false,message:"Failed to create. Try again"})
    }
}

export const updateTour = async(req,res) =>{
    const id  = req.params.id
    try{
        const updateTour = await Tour.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json({success:true,message:"Successfully updated",data:updateTour})
    }catch(err){
        res.status(500).json({success:false,message:"Failed to update. Try again"})
    }
}


export const deleteTour = async(req,res) =>{
    const id  = req.params.id
    try{
        await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Successfully delete"})
    }catch(err){
        res.status(500).json({success:false,message:"Failed to delete. Try again"})
    }
}

//get single
export const getTour = async(req,res) =>{
    const id  = req.params.id
    try{
        const tour = await Tour.findById(id)
        
        res.status(200).json({success:true,message:"Successfully search",data:tour})
    }catch(err){
        res.status(404).json({success:false,message:"not found"})
        
    }
}

//find all

export const findAllTour = async(req,res) =>{
// for pagination
    const page = parseInt(req.query.page)
    console.log(page)
    try{

        const tours = await Tour.find({}).skip(page*8).limit(8)
        res.status(200).json({success:true, message:"succesfully search", count: tours.length,data:tours})

    }catch(err){
        res.status(404).json({success:false,message:"not found"})
    }
}