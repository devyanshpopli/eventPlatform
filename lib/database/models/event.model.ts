import { Document,Schema, Types, model, models } from "mongoose";

export interface IEvent extends Document {
    _id:string;
    title: string;
    description?: string;
    location?: string;
    createdAt?: Date;
    imageUrl: string;
    startDateTime?: Date;
    endDateTime?: Date;
    isFree?: boolean;
    url?: string;
    category?: {_id:string,name:string} // Assuming Category is a mongoose model or string ID
    organizer?: {_id:string, firstName:string, lastName:string} // Assuming User is a mongoose model or string ID
}


const EventSchema = new Schema({

    title:{type:String, required:true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:Date, default:Date.now},
    imageUrl:{type:String, required:true},
    startDateTime:{type:Date, default:Date.now},
    endDateTime:{type:Date, default:Date.now},
    isFree:{type:Boolean,default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    organizer:{type:Schema.Types.ObjectId, ref:'User'}
})

const Event = models.Event || model('Event',EventSchema);

export default Event;