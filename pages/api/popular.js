import {data} from './data'
console.log(data)
export default function Handler(req,res){
    const {Popular} =data;
    if(Popular)return res.status(200).json(Popular)
    return res.status(404).json({error:"data error"})
}