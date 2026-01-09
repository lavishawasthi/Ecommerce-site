import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

//placing order using cod method

const placeOrder=async (req,res)=>{

    try {
        
        const {userId,items,amount,address}= req.body

        const orderData={
            userId,
            address,
            items,
            amount,
            paymentMethod:'COD',
            payment:false,
            date:Date.now()
        }

        const newOrder=new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({sucess:true,message:"Order placed"})


    } catch (error) {
        
        console.log(error)
        res.json({sucess:false,message:error.message})
    }

}


//placing order using stripe method

const placeOrderStripe=async (req,res)=>{
    
}

//placing order using razorpay method

const placeOrderRazorpay=async (req,res)=>{
    
}

//all orders data for admin pannel

const allOrders=async (req,res)=>{
    
}

//user order data for frontend

const userOrder=async (req,res)=>{

    try {
        
        const {userId}=req.body

        const orders=await orderModel.find({userId})

        res.json({sucess:true,orders})

    } catch (error) {
        
        console.log(error)
        res.json({sucess:false,message:error.message})
        
    }
    
}

//update order status from admin pannel

const updateStatus=async (req,res)=>{
    
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrder,updateStatus}